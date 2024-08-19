import { FilmControls } from '../filmControls/filmControls';

export function PromoBlock() : JSX.Element {
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
        <div className="film-card__desc">
          <h2 className="film-card__title">The Grand Budapest Hotel</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">Drama</span>
            <span className="film-card__year">2014</span>
          </p>
          <FilmControls />
        </div>
      </div>
    </div>
  );
}
