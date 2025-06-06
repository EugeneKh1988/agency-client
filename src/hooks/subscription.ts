import axios from '@/lib/axios';
import { ISubscriptionRequest, } from '@/lib/interfaces';

export const useSubscription = () => {

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const subscribe = async ({
    setErrors,
    setStatus,
    email,
  }: ISubscriptionRequest) => {
    await csrf();

    setErrors({});
    setStatus(null);

    axios
      .post("/subscriber", { email, })
      .then((response) => {
        setStatus(response.data.status);
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  return {
    subscribe
  };
};