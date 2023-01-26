import React from 'react';
import { Provider } from 'react-redux';
import { store } from './favorite-movies-redux';
import ReduxAddMovie from './ReduxAddMovie';

export interface Movie {
  title: string;
  year: number;
  rating: number;
}

export default function FavoriteMovies() {
  return (
    <Provider store={store}>
      <ReduxAddMovie />
    </Provider>
  );
}
