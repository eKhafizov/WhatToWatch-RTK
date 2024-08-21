//import store from '../store/store';
import { AuthorizationStatus } from '../store/const';

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
  comment: string;
  user: {
    id: number;
    name: string;};
  date: Date;
}
export type Comments = CommentType[];
export type CommentTypeForm = {
  rating: number;
  comment: string;
  id: number;
}

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
