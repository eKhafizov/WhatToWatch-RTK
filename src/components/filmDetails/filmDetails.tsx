
export function FilmDetails() : JSX.Element {
  return (
    <div className="film-card__text film-card__row">

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">Wes Anderson</span>
        </p>
        <p className="film-card__details-item" >
          <strong className="film-card__details-name" >Starring</strong>
          <span className="film-card__details-value">
            Bill Murray,
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">1h 39m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">Comedy</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">2014</span>
        </p>
      </div>
    </div>
  );
}
