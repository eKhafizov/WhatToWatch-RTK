import { FilmCard } from '../filmCard/filmCard';

export function MoreBlock() : JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </section>
  );
}
