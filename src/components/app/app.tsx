import { AppRoutes } from '../../utils/utils';
import { MainPage } from '../pages/mainPage/mainPage';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { SigninPage } from '../pages/signinPage/signinPage';
import { FilmPage } from '../pages/filmPage/filmPage';
import ErrorPage from '../pages/errorPage/errorPage';
import PrivateRoute from '../privateRoute/privateRoute';
import { useAppDispatch, useAppSelector } from '../../store/utils';
import MyListPage from '../pages/myListPage/myListPage';
import { PlayerPage } from '../pages/playerPage/playerPage';
import { changeChosenGenre } from '../../store/slices/userActivity/userActivity';
import { useEffect } from 'react';


function App():JSX.Element {

  const auth = useAppSelector((state) => state.USER_ACTIVITY.auth);
  const dispatch = useAppDispatch();
  const [searchParams, ] = useSearchParams();
  const searchGenre = searchParams.get('genre');
  useEffect(() => {
    searchGenre !== null && searchGenre !== undefined && dispatch(changeChosenGenre(searchGenre));
  }, []);

  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path='/:genre' element={<MainPage />}/>
      <Route path={AppRoutes.MOVIE_PAGE} element={<FilmPage/>}>
        <Route path=':id' element={<FilmPage />}/>
        <Route path='*' element={<ErrorPage />} />
      </Route>
      <Route
        path={AppRoutes.MY_LIST}
        element={<PrivateRoute auth={auth}><MyListPage /></PrivateRoute>}
      />
      <Route path={AppRoutes.SIGN_IN} element={<SigninPage />} />
      <Route path={AppRoutes.PLAYER} element={<PlayerPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
