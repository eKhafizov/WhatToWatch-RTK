import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ApiRootes } from '../store/const';
import { MoviesArray } from '../types/types';

const whatToWatch = createApi({
  reducerPath: 'whatToWatchReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://13.react.htmlacademy.pro/wtw',
    prepareHeaders: (headers) => {
      //const token = getToken();
      //if (token) {
      //  headers.set('x-token', `${token}`);
      //}
      //return headers;
    }
  }),
  tagTypes: ['FILMS'],
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesArray, void>({
      query: () => ApiRootes.Movies
    })
  })

});

export const {useGetMoviesQuery} = whatToWatch;
export default whatToWatch;
