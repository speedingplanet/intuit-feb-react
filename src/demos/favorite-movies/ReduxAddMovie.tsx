import { Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import AddMovie from './AddMovie';
import { Movie } from './FavoriteMovies';

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveMovie: (movie: Movie) => dispatch({ type: 'movies/ADD_MOVIE', payload: movie }),
  };
};

let ReduxAddMovie = connect(null, mapDispatchToProps)(AddMovie);

export default ReduxAddMovie;
