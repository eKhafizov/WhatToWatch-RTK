import store from '../store/store';
import { AuthorizationStatus } from '../store/const';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//AFTER OPTIMIZATION
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type MovieType = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  id: number;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  videoLink: string;
  starring: string[];
}
export type MoviesArray = MovieType[];

export type CommentType = {
  id: number;
  rating: number;
  date: string;
  comment: string;
}
export type Comments = CommentType[];

export type Login = {
  password: string;
  login: string;
}
export type UserData = {
  id: number;
  email: string;
  token: string;
}

export type PassedPropMovie = {
  movie: MovieType;
}
