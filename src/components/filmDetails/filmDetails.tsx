import { useGetMoviesQuery } from '../../features/apiSlice';

export function FilmDetails({id} : {id: number}) : JSX.Element {

  const {data} = useGetMoviesQuery();
  const film = data?.find((item) => item.id === id);

  return (
    <div className="film-card__text film-card__row">

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item" >
          <strong className="film-card__details-name" >Starring</strong>
          {
            film?.starring.map((actor) => (
              <span key={actor} className="film-card__details-value">
                {actor}<br/>
              </span>
            ))
          }
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film?.runTime} min.</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}
