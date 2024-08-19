import { useGetMoviesQuery } from '../../../features/apiSlice';
import { FilmCard } from '../../filmCard/filmCard';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { ListOfGenres } from '../../listOfGenres/listOfGenres';
import { PromoBlock } from '../../promoBlock/promoBlock';

export function MainPage() : JSX.Element {

  const {data} = useGetMoviesQuery();

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <PromoBlock />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ListOfGenres />

          <div className="catalog__films-list">
            {
              data !== undefined && data.map((film) => (<FilmCard key={film.id} film={film} />))
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
