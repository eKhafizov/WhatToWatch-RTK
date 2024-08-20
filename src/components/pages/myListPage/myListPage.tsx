import { useGetFavoritesQuery } from '../../../features/apiSlice';
import { AppRoutes } from '../../../utils/utils';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';

function MyListPage() : JSX.Element {

  const {data} = useGetFavoritesQuery();

  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list" >
          {
            data && data.map((film) => (
              <article key={film.id} className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src={film.previewImage.replace('13.react.pages.academy','13.react.htmlacademy.pro/wtw')} alt={film.name} width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href={`${AppRoutes.MAIN}${(film.id).toString()}`}>{film.name}</a>
                </h3>
              </article>
            ))
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default MyListPage;
