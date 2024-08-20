import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ApiRootes } from '../store/const';
import { CommentType,MoviesArray, MovieType } from '../types/types';
import { ServerResponse } from 'http';
import { getToken, dropToken, saveToken } from '../api/token';
import { getAuth, getUserInfo } from '../store/slices/userActivity/userActivity';
import { Namespace } from '../utils/utils';

const whatToWatch = createApi({
  reducerPath: Namespace.apiSlice,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://13.react.htmlacademy.pro/wtw',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('x-token', `${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['FILMS'],
  endpoints: (builder) => ({

    //GET
    getMovies: builder.query<MoviesArray, void>({
      query: () => ApiRootes.Movies
    }),
    getPromo: builder.query<MovieType, void>({
      query: () => ApiRootes.Promo
    }),
    getFavorites: builder.query<MoviesArray, void>({
      query: () => ApiRootes.Favorite
    }),
    getComments: builder.query<CommentType[], number>({
      query: (id) => `${ApiRootes.Comments}${id}`
    }),
    fetchCheckAuth: builder.query<void, undefined>({
      query: () => ApiRootes.Login
    }),

    //POST
    fetchAddFavorite: builder.mutation<ServerResponse, number>({
      query: (id) => ({
        url: `${ApiRootes.Favorite}/${id}/1`,
        method: 'POST',
        body: id
      })
    }),
    fetchRemoveFavorite: builder.mutation<ServerResponse, number>({
      query: (id) => ({
        url: `${ApiRootes.Favorite}/${id}/0`,
        method: 'POST',
        body: id
      })
    }),
    fetchAddComment: builder.mutation<CommentType, {rating: number; comment: string; id: number}>({
      query: (commentObject : CommentType) => ({
        url: `${ApiRootes.Comments}${commentObject.id}`,
        method: 'POST',
        body: commentObject
      })
    }),

    fetchLoginAuth: builder.mutation<
      {id: number; email: string; token: string},
      {email: string; password: string}
    >({
      query: ({email, password}) => ({
        url: ApiRootes.Login,
        method: 'POST',
        body: {email, password}
      }),
      async onQueryStarted({email, password}, {dispatch, queryFulfilled}) {
        const {data: {token}} = await queryFulfilled;
        saveToken(token);
        dispatch(getUserInfo(email));
        dispatch(getAuth('AUTH'));
      }
    }),

    fetchLogoutAuth: builder.mutation<void, void>({
      query: () => ({
        url: ApiRootes.Logout,
        method: 'DELETE',
      }),
      async onQueryStarted(_arg, {
        dispatch,
        queryFulfilled}) {
        await queryFulfilled;
        dropToken();
        dispatch(getAuth('NO_AUTH'));
      }
    }),

  })

});

export const {
  useGetMoviesQuery,
  useGetFavoritesQuery,
  useGetPromoQuery,
  useGetCommentsQuery,
  useFetchCheckAuthQuery,
  useFetchAddFavoriteMutation,
  useFetchRemoveFavoriteMutation,
  useFetchAddCommentMutation,
  useFetchLoginAuthMutation,
  useFetchLogoutAuthMutation,

} = whatToWatch;
export default whatToWatch;
