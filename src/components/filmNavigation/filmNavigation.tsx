import Button from './styled';

type FilmControlType = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

export function FilmNavigation({tab, setTab} : FilmControlType) : JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${tab === 0 ? 'film-nav__item--active' : ''}`} >
          <Button className="film-nav__link" onClick={(e) => setTab(0)}>Overview</Button>
        </li>
        <li className={`film-nav__item ${tab === 1 ? 'film-nav__item--active' : ''}`} >
          <Button className="film-nav__link" onClick={(e) => setTab(1)}>Details</Button>
        </li>
        <li className={`film-nav__item ${tab === 2 ? 'film-nav__item--active' : ''}`} >
          <Button className="film-nav__link" onClick={(e) => setTab(2)}>Reviews</Button>
        </li>
      </ul>
    </nav>
  );
}
