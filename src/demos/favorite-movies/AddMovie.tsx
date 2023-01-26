import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Movie } from './FavoriteMovies';

interface AddMovieProps {
  saveMovie: (movie: Movie) => void;
}

let formState: { [key: string]: string } = {};

export default function AddMovie({ saveMovie }: AddMovieProps) {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    let tempMovie: Movie = {
      title: '',
      year: 0,
      rating: 0,
    };

    for (let key of Object.keys(formState) as Array<keyof Movie>) {
      //@ts-expect-error TODO: Why does TypeScript hate us?
      tempMovie[key] = formState[key];
    }

    console.log('saveMovie:', tempMovie);
    saveMovie(tempMovie);
  };

  const handleFieldUpdate: FieldChangeHandler = (field, value) => {
    formState[field] = value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <h3>Add a movie</h3>
        </div>
      </div>
      {/* div>label.form-label+input:text.form-control */}
      <FormField fieldChange={handleFieldUpdate} labelText="Title" name="title" id="movie-title" />
      <FormField fieldChange={handleFieldUpdate} labelText="Year" name="year" id="movie-year" />
      <FormField
        fieldChange={handleFieldUpdate}
        labelText="Rating"
        name="rating"
        id="movie-rating"
      />
      <div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
      <div>
        <p>Toast-like messages will go here.</p>
      </div>
    </form>
  );
}

type FieldChangeHandler = (field: keyof Movie, value: string) => void;

interface FormFieldProps {
  name: keyof Movie;
  id: string;
  labelText: string;
  fieldChange: FieldChangeHandler;
}

function FormField({ name, id, labelText, fieldChange }: FormFieldProps) {
  let [fieldValue, setFieldValue] = useState('');

  let updateFieldValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    fieldChange(name, event.currentTarget.value);
    setFieldValue(event.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor="movie-title" className="form-label">
        {labelText}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className="form-control"
        value={fieldValue}
        onChange={updateFieldValue}
      />
    </div>
  );
}
