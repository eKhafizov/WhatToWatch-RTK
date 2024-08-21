import { useGetFavoritesQuery } from '../../../features/apiSlice';
import { AppRoutes } from '../../../utils/utils';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Link } from 'react-router-dom';
import FilmFavoriteCard from './styled';


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
                <Link to={`${AppRoutes.MOVIE_PAGE}${film.id}`} >
                  <div className="small-film-card__image">
                    <img src={film.previewImage.replace('13.react.pages.academy','13.react.htmlacademy.pro/wtw')} alt={film.name} width="280" height="175" />
                  </div>
                  <h3 className="small-film-card__title">
                    <FilmFavoriteCard className="small-film-card__link" >{film.name}</FilmFavoriteCard>
                  </h3>
                </Link>
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
