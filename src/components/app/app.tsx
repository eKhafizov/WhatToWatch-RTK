import { AppRoutes } from '../../utils/utils';
import { MainPage } from '../pages/mainPage/mainPage';
import { Routes, Route } from 'react-router-dom';
import { SigninPage } from '../pages/signinPage/signinPage';
import { FilmPage } from '../pages/filmPage/filmPage';
import ErrorPage from '../pages/errorPage/errorPage';
import PrivateRoute from '../privateRoute/privateRoute';
import { useAppSelector } from '../../store/utils';
import MyListPage from '../pages/myListPage/myListPage';
import { PlayerPage } from '../pages/playerPage/playerPage';


function App():JSX.Element {

  const auth = useAppSelector((state) => state.USER_ACTIVITY.auth);

  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
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
