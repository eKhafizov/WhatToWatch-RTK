import { useState } from 'react';
import { useGetMoviesQuery } from '../../../features/apiSlice';
import { FilmCard } from '../../filmCard/filmCard';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { ListOfGenres } from '../../listOfGenres/listOfGenres';
import { PromoBlock } from '../../promoBlock/promoBlock';
import { useAppSelector } from '../../../store/utils';

export function MainPage() : JSX.Element {

  const {data} = useGetMoviesQuery();
  const [shownMovies, setShownMovies] = useState<number>(8);
  const chosenGenre = useAppSelector((state) => state.USER_ACTIVITY.chosenGenre);

  const filterFilmsByGenre = () => {
    if (data !== undefined) {
      const array = [...data];
      switch(chosenGenre) {
        case 'All genres':
          return [...array];
          break;
        case 'Adventure':
          return [...array].filter((item) => item.genre === 'Adventure');
          break;
        case 'Comedy':
          return [...array].filter((item) => item.genre === 'Comedy');
          break;
        case 'Action':
          return [...array].filter((item) => item.genre === 'Action');
          break;
        case 'Drama':
          return [...array].filter((item) => item.genre === 'Drama');
          break;
        case 'Crime':
          return [...array].filter((item) => item.genre === 'Crime');
          break;
        case 'Fantasy':
          return [...array].filter((item) => item.genre === 'Fantasy');
          break;
        case 'Thriller':
          return [...array].filter((item) => item.genre === 'Thriller');
          break;
        default:
          return [...array];
      }
    }
    return data;
  };
  const filteredFilms = filterFilmsByGenre();

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
              filteredFilms !== undefined && filteredFilms.slice(0, shownMovies).map((film) => (<FilmCard key={film.id} film={film} />))
            }
          </div>
          {
            data !== undefined && shownMovies < data?.length && (
              <div className="catalog__more"><button className="catalog__button" type="button" onClick={(e) => setShownMovies((prev) => (prev + 4)) }>Show more</button></div>
            )
          }
        </section>
        <Footer />
      </div>
    </>
  );
}
