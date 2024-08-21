import { changeTab } from '../../store/slices/userActivity/userActivity';
import { useAppDispatch, useAppSelector } from '../../store/utils';
import Button from './styled';

export function FilmNavigation() : JSX.Element {

  const tab = useAppSelector((state) => state.USER_ACTIVITY.tab);
  const dispatch = useAppDispatch();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${tab === 0 ? 'film-nav__item--active' : ''}`} >
          <Button className="film-nav__link" onClick={(e) => dispatch(changeTab(0))}>Overview</Button>
        </li>
        <li className={`film-nav__item ${tab === 1 ? 'film-nav__item--active' : ''}`} >
          <Button className="film-nav__link" onClick={(e) => dispatch(changeTab(1))}>Details</Button>
        </li>
        <li className={`film-nav__item ${tab === 2 ? 'film-nav__item--active' : ''}`} >
          <Button className="film-nav__link" onClick={(e) => dispatch(changeTab(2))}>Reviews</Button>
        </li>
      </ul>
    </nav>
  );
}
