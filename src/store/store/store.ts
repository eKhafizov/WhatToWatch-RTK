import { configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import whatToWatch from '../../features/apiSlice';
import RootReducer from '../rootReducers/rootReducer';

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(whatToWatch.middleware)
});
setupListeners(store.dispatch);
