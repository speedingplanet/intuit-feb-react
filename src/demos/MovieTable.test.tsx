import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieRow } from './MovieTable';

let movie = {
  id: 1,
  title: 'Raiders of the Lost Ark',
  year: 1981,
  director: 'Stephen Spielberg',
  writer: ['Lawrence Kasdan', 'George Lucas', 'Philip Kaufman'],
  rating: 5,
  genres: ['action', 'adventure', 'supernatural'],
};

test('renders a movie title (getByText exact)', () => {
  render(<MovieRow movie={movie} />);
  let titleDiv = screen.getByText(movie.title);
  expect(titleDiv).toBeInTheDocument();
});

test('renders a movie director (getByText regexp)', () => {
  render(<MovieRow movie={movie} />);
  let directorDiv = screen.getByText(/spiel/i);
  expect(directorDiv).toBeInTheDocument();
});

test('renders a movie year (getByText function)', () => {
  render(<MovieRow movie={movie} />);
  let year = screen.getByText(function (content, element) {
    let contentAsNumber = Number(content);
    return Number.isInteger(contentAsNumber) && contentAsNumber > 1900;
  });
  expect(year).toBeInTheDocument();
});
