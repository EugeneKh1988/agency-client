import useSWR from 'swr';
import axios from '@/lib/axios';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ILoginError, IUser } from '@/lib/interfaces';

export const useAuth = ({ middleware, redirectIfAuthenticated }: {middleware: string, redirectIfAuthenticated?: string}) => {
    const router = useRouter();
    const params = useParams();

    const {
      data: user,
      error,
      mutate,
    } = useSWR<IUser>(
      "/api/user",
      () =>
        axios
          .get("/api/user")
          .then((res) => res.data)
          .catch((error) => {
            if (error.response.status !== 409) throw error;

            router.push("/verify-email");
          }),
      { shouldRetryOnError: false }
    );

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const register = async ({
      setErrors,
      email,
      name,
      password,
      password_confirmation
    }: {
      setErrors: Dispatch<SetStateAction<ILoginError>>;
      email: string;
      name: string;
      password: string;
      password_confirmation: string;
    }) => {
      await csrf();

      setErrors({});

      axios
        .post("/register", {name, email, password, password_confirmation})
        .then(() => mutate())
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const login = async ({
      setErrors,
      setStatus,
      email,
      password,
      remember,
    }: {
      setErrors: Dispatch<SetStateAction<ILoginError>>;
      setStatus: Dispatch<SetStateAction<string | null>>;
      email: string;
      password: string;
      remember: boolean;
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      axios
        .post("/login", {email, password, remember})
        .then(() => mutate())
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const forgotPassword = async ({
      setErrors,
      setStatus,
      email,
    }: {
      setErrors: Dispatch<SetStateAction<ILoginError>>;
      setStatus: (status: string | null) => void;
      email: string;
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      axios
        .post("/forgot-password", { email })
        .then((response) => setStatus(response.data.status))
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const resetPassword = async ({
      setErrors,
      setStatus,
      email,
      password,
      password_confirmation
    }: {
      setErrors: Dispatch<SetStateAction<ILoginError>>;
      setStatus: (status: string | null) => void;
      email: string;
      password: string;
      password_confirmation: string;
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      axios
        .post("/reset-password", { token: params.token, email, password, password_confirmation })
        .then((response) =>
          router.push("/login?reset=" + btoa(response.data.status))
        )
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const resendEmailVerification = ({ setStatus }: {setStatus: (status: string | null) => void;}) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    };

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }
        
        // go to login page
        window.location.pathname = '/login';
    };

    // admin is a user with id equels 1
    const isAdmin = () => {
      if(user && user.id === 1) {
        return true;
      }
      return false;
    };

    // update user data
    const updateUser = async ({
      setErrors,
      email,
      name,
      current_password,
      password,
      password_confirmation,
      setStatus,
    }: {
      setErrors: Dispatch<SetStateAction<ILoginError>>;
      setStatus: (status: string | null) => void;
      email: string;
      name: string;
      current_password: string;
      password: string;
      password_confirmation: string;
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      const params:{name?: string; email?: string; current_password?: string; password?: string; password_confirmation?: string} = {};
      if(name) params.name = name; 
      // add email when it different
      if(email && user?.email && user.email != email) params.email = email;
      if(current_password) params.current_password = current_password; 
      if(password) params.password = password;
      if(password_confirmation) params.password_confirmation = password_confirmation;  

      axios
        .post("/api/user", params)
        .then((response) => {setStatus(response.data.status);  return mutate();})
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)

        if ((user && !user.email_verified_at))
            router.push('/verify-email');
        
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at && redirectIfAuthenticated
        )
            router.push(redirectIfAuthenticated)
        if (user && error) logout();
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        isAdmin,
        updateUser,
    }
}