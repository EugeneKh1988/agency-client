import useSWR from 'swr';
import axios from '@/lib/axios';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ILoginError } from '@/lib/interfaces';

export const useAuth = ({ middleware, redirectIfAuthenticated }: {middleware: string, redirectIfAuthenticated: string}) => {
    const router = useRouter();
    const params = useParams();

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error;

                router.push('/verify-email');
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const register = async ({
      setErrors,
      ...props
    }: {
      setErrors: (errors: ILoginError[]) => void;
      props: { [x: string]: string | number | boolean };
    }) => {
      await csrf();

      setErrors([]);

      axios
        .post("/register", props)
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
      setErrors: (errors: ILoginError[]) => void;
      setStatus: (status: string | null) => void;
      email: string;
    }) => {
      await csrf();

      setErrors([]);
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
      ...props
    }: {
      setErrors: (errors: ILoginError[]) => void;
      setStatus: (status: string | null) => void;
      props: { [x: string]: string | number | boolean };
    }) => {
      await csrf();

      setErrors([]);
      setStatus(null);

      axios
        .post("/reset-password", { token: params.token, ...props })
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
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/login';
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)

        if (middleware === 'auth' && (user && !user.email_verified_at))
            router.push('/verify-email');
        
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}