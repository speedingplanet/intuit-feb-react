import React from 'react';
import AddMovie from './AddMovie';

export interface Movie {
  title: string;
  year: number;
  rating: number;
}

export default function FavoriteMovies() {
  const handleSaveMovie = (movie: Movie) => {
    return 1;
  };

  return <AddMovie saveMovie={handleSaveMovie} />;
}
