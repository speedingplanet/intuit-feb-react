import React, { ChangeEventHandler, FormEventHandler, Reducer, useReducer } from 'react';
import { BootstrapInput } from './FormInputs';
import { Movie } from './SortableMovieTable';

type MovieInput = Partial<Movie>;
interface MovieAction extends MovieInput {
  type: string;
}

let movieStateReducer: Reducer<MovieInput, MovieAction> = (state, action) => {
  switch (action.type) {
    case 'update_title':
      return { ...state, title: action.title };
    case 'update_year':
      return { ...state, year: action.year };
    case 'update_rating':
      return { ...state, rating: action.rating };
    case 'update_director':
      return { ...state, director: action.director };
    case 'update_writer':
      return { ...state, writer: action.writer };
  }
  throw Error('unknown action type');
};

let initialState: MovieInput = {
  title: '',
  year: 1900,
  rating: 0,
  director: '',
  writer: [''],
};

export default function FormWithReducer() {
  let [state, dispatch] = useReducer<typeof movieStateReducer>(movieStateReducer, initialState);

  let handleStateUpdate: ChangeEventHandler<HTMLInputElement> = (event) => {
    let field = event.currentTarget.name;
    let value = event.currentTarget.value;
    dispatch({
      type: `update_${field}`,
      [field]: value,
    });
  };

  let handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log('Current form state:', state);
  };

  return (
    <form onSubmit={handleSubmit}>
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
