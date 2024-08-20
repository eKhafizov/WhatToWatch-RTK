import { createSlice } from '@reduxjs/toolkit';
import { Genres, Namespace } from '../../../utils/utils';
import { AuthorizationStatus } from '../../const';
import { MovieType } from '../../../types/types';


type InitialStateType = {
  user: string | null;
  auth: string;
  chosenMovie: MovieType | null;
  chosenGenre: string;
};

const initialState : InitialStateType = {
  user: null,
  auth: AuthorizationStatus.Unknown,
  chosenMovie: null,
  chosenGenre: Genres.allgenres,
};

const userActivity = createSlice({
  name: Namespace.userActivity,
  initialState: initialState,
  reducers: {
    changeChosenMovie: (state, action : {payload: MovieType}) => {
      state.chosenMovie = action.payload;
    },
    changeChosenGenre: (state, action : {payload: string}) => {
      state.chosenGenre = action.payload;
    },
    getAuth: (state, action: {payload: string}) => {
      state.auth = action.payload;
    },
    getUserInfo: (state, action: {payload: string}) => {
      state.user = action.payload;
    }
  },
});

export const {changeChosenGenre, changeChosenMovie, getAuth, getUserInfo} = userActivity.actions;
export default userActivity;
