import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/utils';
import ButtonAddReview from './styled';
import { useFetchAddFavoriteMutation, useFetchRemoveFavoriteMutation, useGetFavoritesQuery } from '../../features/apiSlice';
import { useAppDispatch, useAppSelector } from '../../store/utils';
import { AuthorizationStatus } from '../../store/const';
import { changeTab } from '../../store/slices/userActivity/userActivity';

export function FilmControls({filmId} : {filmId: number | undefined}) : JSX.Element {
  const navigate = useNavigate();
  const {data: favorites} = useGetFavoritesQuery();
  const [addFavorite] = useFetchAddFavoriteMutation();
  const [removeFavorite] = useFetchRemoveFavoriteMutation();
  const isFavorite = favorites?.find((item) => item.id === filmId);
  const auth = useAppSelector((state) => state.USER_ACTIVITY.auth);
  const pathname = useLocation();
  const dispatch = useAppDispatch();

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={(e) => navigate(AppRoutes.PLAYER)} >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
      >
        <svg
          viewBox="0 0 19 20"
          width="19"
          height="20"
          onClick={(e) => {
            auth === AuthorizationStatus.Auth && filmId !== undefined && !isFavorite && addFavorite(filmId);
            auth === AuthorizationStatus.Auth && filmId !== undefined && isFavorite && removeFavorite(filmId);
            auth !== AuthorizationStatus.Auth && navigate(AppRoutes.SIGN_IN);
          }}
        >
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span
          className="film-card__count"
          onClick={(e) => {
            auth === AuthorizationStatus.Auth && navigate(AppRoutes.MY_LIST);
          }}
        >
          { auth === AuthorizationStatus.Auth && favorites && (favorites?.length === 0 ? 0 : favorites.length)}
          { auth === AuthorizationStatus.No_auth && (<span onClick={(e) => navigate(AppRoutes.SIGN_IN)}>0</span>) }
          { auth === AuthorizationStatus.Unknown && (<span onClick={(e) => navigate(AppRoutes.SIGN_IN)}>0</span>) }
        </span>
      </button>
      <ButtonAddReview
        className="btn film-card__button"
        onClick={(e) => {
          pathname.pathname === AppRoutes.MAIN && filmId !== undefined && dispatch(changeTab(2)) && navigate(`${AppRoutes.MOVIE_PAGE}${filmId}`);
          pathname.pathname === AppRoutes.MOVIE_PAGE && filmId !== undefined && dispatch(changeTab(2));
        }}
      >Add review
      </ButtonAddReview>
    </div>
  );
}
