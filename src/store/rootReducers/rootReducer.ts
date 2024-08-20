import { combineReducers } from '@reduxjs/toolkit';
import whatToWatch from '../../features/apiSlice';
import { Namespace } from '../../utils/utils';
import userActivity from '../slices/userActivity/userActivity';

const RootReducer = combineReducers({
  [Namespace.apiSlice] : whatToWatch.reducer,
  [Namespace.userActivity] : userActivity.reducer,
});
export default RootReducer;
