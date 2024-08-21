import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/utils';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useFetchLoginAuthMutation } from '../../../features/apiSlice';

export function SigninPage() : JSX.Element {

  const navigate = useNavigate();

  const [fetchLoginAuth] = useFetchLoginAuthMutation();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchLoginAuth(form);
    setForm({email: '',
      password: ''});
    navigate(AppRoutes.MAIN);
  };
  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name] : value}));
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoutes.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleForm} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name='email' id="user-email" value={form.email} onChange={handleChanges} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password" value={form.password} onChange={handleChanges}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
