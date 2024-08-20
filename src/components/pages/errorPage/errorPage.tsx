import { Header } from '../../header/header';
import { PromoBlock } from '../../promoBlock/promoBlock';
import { ListOfGenres } from '../../listOfGenres/listOfGenres';
import { Footer } from '../../footer/footer';


function ErrorPage() : JSX.Element {

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

          <p>There is no such page on our web-site</p>

        </section>
        <Footer />
      </div>
    </>
  );
}
export default ErrorPage;
