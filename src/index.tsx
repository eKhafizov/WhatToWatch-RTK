import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import {store} from './store/store/store';
import HistoryRouter from './history/HistoryRouter';
import browserHistory from './history/history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory} >
        <App />
      </HistoryRouter>
    </Provider>
  </StrictMode>
);
