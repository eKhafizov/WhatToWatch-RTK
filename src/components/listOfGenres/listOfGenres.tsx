import { useAppDispatch, useAppSelector } from '../../store/utils';
import { genresArray} from '../../utils/utils';
import { changeChosenGenre } from '../../store/slices/userActivity/userActivity';
import GenreButton from './styled';

export function ListOfGenres() : JSX.Element {

  const chosenGenre = useAppSelector((state) => state.USER_ACTIVITY.chosenGenre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        genresArray.map((genre) => (
          <li key={genre} className={`catalog__genres-item ${genre === chosenGenre ? 'catalog__genres-item--active' : ''}`} >
            <GenreButton className="catalog__genres-link" onClick={(e) => dispatch(changeChosenGenre(genre))}>{genre}</GenreButton>
          </li>
        ))
      }
    </ul>
  );
}
