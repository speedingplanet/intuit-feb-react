import React from 'react';
import { Provider } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { store } from './favorite-movies-redux';
import ReduxAddMovie from './ReduxAddMovie';
import ReduxListMovies from './ReduxListMovies';

export interface Movie {
  title: string;
  year: number;
  rating: number;
}

export default function FavoriteMovies() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>
              <NavLink to="add-movie">Add a movie</NavLink>
            </li>
            <li>
              <NavLink to="list-movies">See all movies</NavLink>
            </li>
          </ul>
        </div>
        <div className="col">
          <Routes>
            <Route path="add-movie" element={<ReduxAddMovie />} />
            <Route path="list-movies" element={<ReduxListMovies />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
