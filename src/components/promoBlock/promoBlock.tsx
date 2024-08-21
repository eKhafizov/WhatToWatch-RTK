import { useGetPromoQuery } from '../../features/apiSlice';
import { FilmControls } from '../filmControls/filmControls';

export function PromoBlock() : JSX.Element {

  const {data: promo} = useGetPromoQuery();

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={promo?.posterImage.replace('13.react.pages.academy','13.react.htmlacademy.pro/wtw')} alt={promo?.name} width="218" height="327" />
        </div>
        <div className="film-card__desc">
          <h2 className="film-card__title">{promo?.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promo?.genre}</span>
            <span className="film-card__year">{promo?.released}</span>
          </p>
          <FilmControls filmId={promo?.id} />
        </div>
      </div>
    </div>
  );
}
