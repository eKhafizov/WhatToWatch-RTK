

export const AppRoutes = {
  MAIN: '/',
  SIGN_IN: '/sign-in',
  PLAYER: '/player',
  MY_LIST: '/my-list',
  MOVIE_PAGE: '/movie-page/',
  ADD_REVIEW: '/add-review'
};

export enum Namespace {
  serverData = 'SERVER_DATA',
  userActivity = 'USER_ACTIVITY'
}

export enum Genres {
  allgenres = 'All genres',
  adventure = 'Adventure',
  action = 'Action',
  drama = 'Drama',
  comedies = 'Comedy',
  crime = 'Crime',
  fantasy = 'Fantasy',
  thriller = 'Thriller'
}
export const genresArray = [Genres.allgenres, Genres.comedies, Genres.crime, Genres.action, Genres.adventure, Genres.drama, Genres.fantasy, Genres.thriller];
