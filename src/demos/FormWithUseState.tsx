import React, { ChangeEventHandler, useState } from 'react';
import { BootstrapInput } from './FormInputs';

export default function FormWithUseState() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [director, setDirector] = useState('');
  const [writer, setWriter] = useState('');

  let handleStateUpdate: ChangeEventHandler<HTMLInputElement> = (event) => {
    switch (event.currentTarget.name) {
      case 'title':
        setTitle(event.currentTarget.value);
        break;
      case 'year':
        setYear(event.currentTarget.value);
        break;
      case 'rating':
        setRating(event.currentTarget.value);
        break;
      case 'director':
        setDirector(event.currentTarget.value);
        break;
      case 'writer':
        setWriter(event.currentTarget.value);
        break;
    }
  };

  return (
    <form>
      <BootstrapInput
        containerClass="mt-2"
        labelText="Movie Title"
        id="movie-title"
        name="title"
        value={title}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Year"
        id="movie-year"
        name="year"
        value={year}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Rating"
        id="movie-rating"
        name="rating"
        value={rating}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Director(s)"
        id="movie-director"
        name="director"
        value={director}
        onChange={handleStateUpdate}
      />
      <BootstrapInput
        containerClass="mt-2"
        labelText="Writer(s)"
        id="movie-writer"
        name="writer"
        value={writer}
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
