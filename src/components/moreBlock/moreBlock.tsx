import { useGetMoviesQuery } from '../../features/apiSlice';
import { FilmCard } from '../filmCard/filmCard';

export function MoreBlock() : JSX.Element {

  const {data} = useGetMoviesQuery();

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {
          data !== undefined && data.slice(0, 4).map((film) => (<FilmCard key={film.id} film={film} />))
        }
      </div>
    </section>
  );
}
