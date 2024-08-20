import { useGetMoviesQuery } from '../../features/apiSlice';

export function FilmRating({id} : {id: number}) : JSX.Element {

  const {data} = useGetMoviesQuery();
  const film = data?.find((item) => item.id === id);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film?.rating !== undefined && film?.rating > 7 && 'Very good'}</span>
          <span className="film-rating__count">{film?.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>
        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film?.starring.map((actor) => (<span key={actor} >{actor}</span>))} and other</strong></p>
      </div>
    </>
  );
}
