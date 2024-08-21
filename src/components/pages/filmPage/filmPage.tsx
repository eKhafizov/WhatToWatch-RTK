import { FilmRating } from '../../filmRating/filmRating';
import { FilmDetails } from '../../filmDetails/filmDetails';
import { FilmReviews } from '../../filmReviews/filmReviews';
import { Footer } from '../../footer/footer';
import { FilmControls } from '../../filmControls/filmControls';
import { FilmNavigation } from '../../filmNavigation/filmNavigation';
import { Header } from '../../header/header';
import { MoreBlock } from '../../moreBlock/moreBlock';
import { useParams } from 'react-router-dom';
import { useGetMoviesQuery } from '../../../features/apiSlice';
import { useAppSelector } from '../../../store/utils';


export function FilmPage() : JSX.Element {

  const {data} = useGetMoviesQuery();
  const param = useParams();
  const film = data?.find((item) => item.id === Number(param.id));
  const tab = useAppSelector((state) => state.USER_ACTIVITY.tab);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage.replace('13.react.pages.academy','13.react.htmlacademy.pro/wtw')} alt={film?.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <FilmControls filmId={film?.id} />
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage.replace('13.react.pages.academy','13.react.htmlacademy.pro/wtw')} alt={film?.name} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <FilmNavigation />
              { tab === 0 && film?.id !== undefined && <FilmRating id={film?.id} /> }
              { tab === 1 && film?.id !== undefined && <FilmDetails id={film?.id} /> }
              { tab === 2 && film?.id !== undefined && <FilmReviews id={film?.id} /> }
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreBlock />
        <Footer />
      </div>
    </>
  );
}
