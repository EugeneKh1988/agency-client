import useSWR from 'swr';
import axios from '@/lib/axios';
import { Dispatch, SetStateAction, } from 'react';
import { ITeamError, ITeam, ICreateWorker, IUpdateWorker, IDeleteWorker, } from '@/lib/interfaces';

export const useTeams = ({ count = 10, skip = 0 }: {count: number, skip: number}) => {

    const {
      data: team,
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
    }: ICreateWorker) => {
      await csrf();

      setErrors({});
      setStatus(null);

      // set params
      const formData = new FormData();
      if(name) formData.append('name', name);
      if(position) formData.append('position', position);
      if(photo) formData.append('photo', photo); 

      axios
        .post("/api/teams", formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then((response) => { setStatus(response.data.status); return mutate(); })
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
      position,
      photo,
    }: IUpdateWorker) => {
      await csrf();

      setErrors({});
      setStatus(null);

      // set params
      const formData = new FormData();
      if(name) formData.append('name', name);
      if(position) formData.append('position', position);
      if(photo) formData.append('photo', photo); 

      axios
        .post(`/api/teams/${id}?_method=PUT`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
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
    }: IDeleteWorker) => {
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
        update,
        deleteWorker,
    }
}