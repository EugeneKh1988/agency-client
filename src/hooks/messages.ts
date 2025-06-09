import useSWR from 'swr';
import axios from '@/lib/axios';
import { ICreateMessage, IUpdateMessage, IDeleteMessage, IMessage, } from '@/lib/interfaces';

export const useMessages = ({
  count = 10,
  skip = 0,
  create_sort,
  answered,
}: {
  count: number;
  skip: number;
  create_sort?: string | null;
  answered?: string | null;
}) => {
  const {
    data: messages,
    mutate,
  } = useSWR<IMessage>(
    `/api/messages?count=${count}&skip=${skip}&create_sort=${create_sort}&answered=${answered}`,
    () =>
      axios
        .get(`/api/messages?count=${count}&skip=${skip}&create_sort=${create_sort}&answered=${answered}`)
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
        }),
    { shouldRetryOnError: false }
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const create = async ({
    setErrors,
    setStatus,
    name,
    email,
    phone,
    question
  }: ICreateMessage) => {
    await csrf();

    setErrors({});
    setStatus(null);

    axios
      .post("/api/messages", {name, email, phone, question})
      .then((response) => {
        setStatus(response.data.status);
        return mutate();
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const update = async ({
    setErrors,
    setStatus,
    id,
    name,
    email,
    phone,
    question,
    answer,
    was_answered,
  }: IUpdateMessage) => {
    await csrf();

    setErrors({});
    setStatus(null);

    axios
      .post(`/api/messages/${id}?_method=PUT`, {name, email, phone, question, answer, was_answered})
      .then((response) => {
        setStatus(response.data.status);
        return mutate();
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const deleteMessage = async ({ setErrors, setStatus, id }: IDeleteMessage) => {
    await csrf();

    setErrors({});
    setStatus(null);

    axios
      .delete(`/api/messages/${id}`)
      .then((response) => {
        setStatus(response.data.status);
        return mutate();
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  return {
    messages,
    create,
    update,
    deleteMessage,
  };
};