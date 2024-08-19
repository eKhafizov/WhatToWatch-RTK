import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import defaultTh from './theme/defaultTheme';
import store from './store/store';
import HistoryRouter from './historyRouter/historyRouter';
import browserHistory from './history/history';
import GlobalStyles from './global_styles/globalStyles';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import { fetchFilms, fetchPromo, checkAuthAction} from './store/api-actions/api-actions';
import { dropFavorites } from './store/actions/actions';
import { StrictMode } from 'react';

store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(checkAuthAction());
store.dispatch(dropFavorites());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store} >
        <HistoryRouter history={browserHistory}>
          <ThemeProvider theme={defaultTh} >
            <GlobalStyles />
            <ScrollToTop />
            <App />
          </ThemeProvider>
        </HistoryRouter>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);

