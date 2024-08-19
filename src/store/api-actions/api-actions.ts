export {};


// /login
// /comments/${id}
// /favorite/${id}/0
// /favorite/${id}/1
// /films/promo

/*
export const fetchFilms = createAsyncThunk<
  MoviesArray,
  undefined,
  {dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  }
  >(
    'data/fetchFilms',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<MoviesArray>(ApiRootes.Movies);
      return data;
    }
  );

export const fetchPromo = createAsyncThunk<
  MovieType,
  undefined,
  {dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  }
  >(
    'data/fetchPromo',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<MovieType>(ApiRootes.Promo);
      return data;
    }
  );

export const fetchFilmComment = createAsyncThunk<
  CommentType[],
  number,
  {dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
  }
  >(
    'data/fetchComment',
    async (id, {extra: api}) => {
      const {data} = await api.get<CommentType[]>(ApiRootes.Comments + id.toString());
      return data;
    }
  );
export const fetchAddComment = createAsyncThunk<
    CommentType,
    {rating: number; comment: string; id: number},
    {dispatch: AppDispatch;
      state: RootState;
      extra: AxiosInstance;
    }>(
      'data/addComment',
      async ({rating, comment, id}, {dispatch, extra: api}) => {
        const {data} = await api.post<CommentType>(`${ApiRootes.Comments}${id.toString()}` , {rating, comment} );
        await dispatch(fetchFilmComment(id));
        return data;
      }
    );


export const fetchFavorites = createAsyncThunk<
MoviesArray,
undefined,
{dispatch: AppDispatch;
state: RootState;
extra: AxiosInstance;
}
>(
  'data/fetchFavorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<MoviesArray>(ApiRootes.Favorite);
    //console.log('dispatch fetchall gone in fetchFavorites MAIN');
    return data;
  }
);
export const fetchAddFavorite = createAsyncThunk<
  ServerResponse,
  number,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
  >(
    'data/addFavorite',
    async ( id, {dispatch, extra: api}) => {
      //THIS WAY I CAN MAKE ONE API REQUEST AFTER ANOTHER!

      //First we send to server post-response to add chosen film to favorites
      const {data} = await api.post<ServerResponse>(`${ApiRootes.Favorite}/${id.toString()}/1`);
      //console.log('1 await gone, next is deispatch');

      //After that we sent to server get-response to get updated list of chosen films
      await dispatch(fetchFavorites());
      //console.log('dispatch gone in await');
      return data;
    }
  );
export const fetchRemoveFavorite = createAsyncThunk<
  ServerResponse,
  number,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
  >(
    'data/removeFavorite',
    async ( id, {dispatch, extra: api}) => {
      const {data} = await api.post<ServerResponse>(`${ApiRootes.Favorite}/${id.toString()}/0`);
      await dispatch(fetchFavorites());
      return data;
    }
  );


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(ApiRootes.Login);
  },
);
export const loginAuthAction = createAsyncThunk<void, Login, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkLogin',
  async ( {login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRootes.Login, {email, password});
    saveToken(token);
    dispatch(redirectAction(AppRoutes.MAIN));
  }
);
export const logoutAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/Logout',
  async ( _arg, {extra: api}) => {
    await api.delete(ApiRootes.Logout);
    dropToken();
  }
);
*/
