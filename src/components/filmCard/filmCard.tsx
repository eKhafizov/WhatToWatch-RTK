import { MovieType } from '../../types/types';
import { AppRoutes } from '../../utils/utils';
import { Link } from 'react-router-dom';

export function FilmCard({film} : {film: MovieType}) : JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage.replace('13.react.pages.academy','13.react.htmlacademy.pro/wtw')} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoutes.MOVIE_PAGE}${film.id}`}
        >Fantastic Beasts: The Crimes of Grindelwald
        </Link>
      </h3>
    </article>
  );
}
