import { useFetchLogoutAuthMutation } from '../../features/apiSlice';
import { AppRoutes } from '../../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import ButtonLogout from './styled';
import { useAppSelector } from '../../store/utils';
import { AuthorizationStatus } from '../../store/const';
import { ButtonName, Li } from './styled';

export function Header() : JSX.Element {

  const navigate = useNavigate();
  const [fetchLogout] = useFetchLogoutAuthMutation();
  const auth = useAppSelector((state) => state.USER_ACTIVITY.auth);
  const user = useAppSelector((state) => state.USER_ACTIVITY.user);

  return auth === AuthorizationStatus.Auth
    ? (
      <header className="page-header film-card__head">
        <div className="logo">
          <Link to={AppRoutes.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <ul className="user-block">
          <Li className="user-block__item">
            <ButtonName className="user-block__link" onClick={(e) => navigate(AppRoutes.MY_LIST)}>{user}</ButtonName>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={(e) => navigate(AppRoutes.MY_LIST)} />
            </div>
          </Li>
          <li className="user-block__item">
            <ButtonLogout
              className="user-block__link"
              onClick={
                (e) => {
                  fetchLogout();
                  navigate(AppRoutes.MAIN);
                }
              }
            >Sign out
            </ButtonLogout>
          </li>
        </ul>
      </header>
    ) : (
      <header className="page-header film-card__head">
        <div className="logo">
          <Link to={AppRoutes.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/aviator.jpg" alt="User avatar" width="63" height="63" onClick={(e) => navigate(AppRoutes.SIGN_IN)} />
            </div>
          </li>
          <li className="user-block__item">
            <ButtonLogout
              className="user-block__link"
              onClick={
                (e) => {
                  fetchLogout();
                  navigate(AppRoutes.SIGN_IN);
                }
              }
            >Sign in
            </ButtonLogout>
          </li>
        </ul>
      </header>
    );
}
