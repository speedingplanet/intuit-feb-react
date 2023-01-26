import { connect } from 'react-redux';
import { FavoriteMoviesState } from './favorite-movies-redux';
import ListMovies from './ListMovies';

let mapStateToProps = (state: FavoriteMoviesState) => {
  return {
    movies: state.movies,
  };
};

let ReduxListMovies = connect(mapStateToProps)(ListMovies);

export default ReduxListMovies;
