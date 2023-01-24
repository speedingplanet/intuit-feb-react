import React from 'react';
import { Movie, SortableMovieTable } from './SortableMovieTableClass';

export default class FetchingDataClass extends React.Component<unknown, { movies: Movie[] }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount(): void {
    fetch('http://localhost:8000/movies?_delay=3000')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Bad fetch response: ' + response.status);
        }
      })
      .then((movies) => this.setState({ movies }))
      .catch((error) => console.error('Could not fetch movies:', error));
  }

  render() {
    return (
      <>
        <div className="row">
          <header className="col">
            <h4>Fetching data (from a class-based component)</h4>
          </header>
        </div>
        <div className="row">
          <div className="col">
            {this.state.movies.length === 0 ? (
              <p>Loading movies....</p>
            ) : (
              <SortableMovieTable movies={this.state.movies} />
            )}
          </div>
        </div>
      </>
    );
  }
}
