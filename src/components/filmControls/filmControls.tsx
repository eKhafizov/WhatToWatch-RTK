import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/utils';
import ButtonAddReview from './styled';
import { useFetchAddFavoriteMutation, useFetchRemoveFavoriteMutation, useGetFavoritesQuery } from '../../features/apiSlice';
import { useAppSelector } from '../../store/utils';
import { AuthorizationStatus } from '../../store/const';


export function FilmControls({filmId} : {filmId: number | undefined}) : JSX.Element {
  const navigate = useNavigate();
  const {data: favorites} = useGetFavoritesQuery();
  const [addFavorite] = useFetchAddFavoriteMutation();
  const [removeFavorite] = useFetchRemoveFavoriteMutation();
  const isFavorite = favorites?.find((item) => item.id === filmId);
  const auth = useAppSelector((state) => state.USER_ACTIVITY.auth);

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
        <span className="film-card__count" onClick={(e) => auth === AuthorizationStatus.Auth && navigate(AppRoutes.MY_LIST)}>{favorites ? favorites?.length : 0}</span>
      </button>
      <ButtonAddReview className="btn film-card__button" >Add review</ButtonAddReview>
    </div>
  );
}
