import { AnyAction, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { Movie } from './FavoriteMovies';
import logger from 'redux-logger';

export interface FavoriteMoviesState {
  movies: Movie[];
}

let initialState: FavoriteMoviesState = {
  movies: [],
};

let actions = {
  sortMovies: 'movies/SORT_MOVIES',
  addMovie: 'movies/ADD_MOVIE',
  deleteMovie: 'movies/DELETE_MOVIE',
  editMovie: 'movies/EDIT_MOVIE',
  rateMovie: 'movies/RATE_MOVIE',
};

// Action creator
let addMovie = (movie: Movie) => {
  return {
    type: actions.addMovie,
    payload: movie,
  };
};

let reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actions.addMovie:
      // Add something to state.movies
      // state.movies.push(action.payload);
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
};

let store = createStore<FavoriteMoviesState, AnyAction, unknown, unknown>(
  reducer,
  applyMiddleware(logger)
);

export { store, actions, addMovie };
