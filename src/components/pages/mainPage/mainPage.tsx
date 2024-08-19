import { FilmCard } from '../../filmCard/filmCard';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { ListOfFilms } from '../../listOfFilms/listOfFilms';
import { PromoBlock } from '../../promoBlock/promoBlock';

export function MainPage() : JSX.Element {

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
          <ListOfFilms />

          <div className="catalog__films-list">
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
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
