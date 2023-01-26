import { Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import AddMovie from './AddMovie';
import { addMovie } from './favorite-movies-redux';
import { Movie } from './FavoriteMovies';

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveMovie: (movie: Movie) => dispatch(addMovie(movie)),
  };
};

let ReduxAddMovie = connect(null, mapDispatchToProps)(AddMovie);

export default ReduxAddMovie;
