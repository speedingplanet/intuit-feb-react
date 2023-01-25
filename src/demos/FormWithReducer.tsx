import React, { ChangeEventHandler, Reducer, useReducer } from 'react';
import { BootstrapInput } from './FormInputs';
import { Movie } from './SortableMovieTable';

type MovieInput = Partial<Movie>;
type MovieKeys = keyof Movie;

type MovieAction = {
  [K in MovieKeys | 'type']: string | string[];
};

let movieStateReducer: Reducer<MovieInput, MovieAction> = (state, action) => {
  return state;
};

export default function FormWithReducer() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [state, dispatch] = useReducer<typeof movieStateReducer>(movieStateReducer, {});
  let handleStateUpdate: ChangeEventHandler<HTMLInputElement> = () => {
    return true;
  };

  return (
    <form>
      <BootstrapInput
        containerClass="mt-2"
        labelText="Movie Title"
        id="movie-title"
        name="title"
        value={state.title}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Year"
        id="movie-year"
        name="year"
        value={state.year}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Rating"
        id="movie-rating"
        name="rating"
        value={state.rating}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Director(s)"
        id="movie-director"
        name="director"
        value={state.director}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Writer(s)"
        id="movie-writer"
        name="writer"
        value={state.writer}
        onChange={handleStateUpdate}
      />
      <div className="row mt-2">
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
