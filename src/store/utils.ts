import { store } from './store/store';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//хук для диспача - передачи наших action-creators в функцию reducer,
//которая обработает их и изменит состояние
export const useAppDispatch = () => useDispatch<AppDispatch>();
//хук для того, чтобы получить значение из состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

