import axios from 'axios';

const rapidAPIKEY = 'abc836969fmshc4860ea5a8b53bap1ae96bjsnb2a8ff99f568';
const rapidHost = 'movie-database-alternative.p.rapidapi.com';

export const useAxios = (baseUrl: string) => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'x-rapidapi-key': rapidAPIKEY,
      'x-rapidapi-host': rapidHost,
    },
  });

  return instance;
};
