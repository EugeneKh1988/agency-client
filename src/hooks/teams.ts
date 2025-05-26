import useSWR from 'swr';
import axios from '@/lib/axios';
import { Dispatch, SetStateAction, } from 'react';
import { ITeamError, ITeam, } from '@/lib/interfaces';

export const useTeams = ({ count = 10, skip = 0 }: {count: number, skip: number}) => {

    const {
      data: team,
      error,
      mutate,
    } = useSWR<ITeam>(
      `/api/teams?count=${count}&skip=${skip}`,
      () =>
        axios
          .get(`/api/teams?count=${count}&skip=${skip}`)
          .then((res) => res.data)
          .catch((error) => {
            console.log(error);
          }),
      { shouldRetryOnError: false }
    );

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const worker = async ({
      setErrors,
      setStatus,
      id,
    }: {
      setErrors: Dispatch<SetStateAction<ITeamError>>;
      setStatus: Dispatch<SetStateAction<string | null>>;
      id:number;
    }) => {

      setErrors({});
      setStatus(null);

      axios
        .get(`/api/teams/${id}`)
        .then((response) => { setStatus(response.data.status) })
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const create = async ({
      setErrors,
      setStatus,
      name,
      position,
      photo,
    }: {
      setErrors: Dispatch<SetStateAction<ITeamError>>;
      setStatus: Dispatch<SetStateAction<string | null>>;
      name: string;
      position: string;
      photo: File;
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      const params:{name?: string; position?: string; photo?: File;} = {};
      if(name) params.name = name; 
      if(position) params.position = position;
      if(photo) params.photo = photo; 

      axios
        .post("/api/teams", params)
        .then((response) => { setStatus(response.data.status); return mutate(); })
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const edit = async ({
      setErrors,
      setStatus,
      id,
      name,
      position,
      photo,
    }: {
      setErrors: Dispatch<SetStateAction<ITeamError>>;
      setStatus: (status: string | null) => void;
      id: number;
      name: string;
      position: string;
      photo: File;
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      // set params
      const params:{name?: string; position?: string; photo?: File;} = {};
      if(name) params.name = name; 
      if(position) params.position = position;
      if(photo) params.photo = photo; 

      axios
        .post(`/api/teams/${id}?_method=PUT`, params)
        .then((response) => { setStatus(response.data.status); return mutate(); })
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    const deleteWorker = async ({
      setErrors,
      setStatus,
      id,
    }: {
      setErrors: Dispatch<SetStateAction<ITeamError>>;
      setStatus: (status: string | null) => void;
      id: number,
    }) => {
      await csrf();

      setErrors({});
      setStatus(null);

      axios
        .delete(`/api/teams/${id}`)
        .then((response) => { setStatus(response.data.status); return mutate(); })
        .catch((error) => {
          if (error.response.status !== 422) throw error;

          setErrors(error.response.data.errors);
        });
    };

    return {
        team,
        worker,
        create,
        edit,
        deleteWorker,
    }
}