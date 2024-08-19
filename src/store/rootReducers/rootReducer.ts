import { combineReducers } from '@reduxjs/toolkit';
import whatToWatch from '../../features/apiSlice';

const RootReducer = combineReducers({
  [whatToWatch.reducerPath] : whatToWatch.reducer
});
export default RootReducer;
