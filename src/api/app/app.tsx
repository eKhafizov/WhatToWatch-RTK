import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { AppRoutes } from '../../utils/utils';
import Layout from '../Layout/Layout';
import MainPage from '../../pages/MainPage/MainPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import Player from '../../player/Player';
import MyList from '../myList/MyList';
import MoviePage from '../../pages/MoviePage/MoviePage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useAppSelector } from '../../store/utils';
import { getAuthStatus } from '../../store/serverData/selectors';

function App():JSX.Element {

  const authStatus = useAppSelector(getAuthStatus);

  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path=':genre'
          element={<MainPage />}
        />
        <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
        <Route path={AppRoutes.PLAYER} element={<Player />} />
        <Route
          path={AppRoutes.MY_LIST}
          element={
            <PrivateRoute authStatus={authStatus} >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.MOVIE_PAGE} >
          <Route
            path=':id'
            element={<MoviePage />}
          />
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
