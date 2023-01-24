import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SortableMovieTable } from './SortableMovieTable';
import { movies } from '../data/movies';

test('renders one particular movie', () => {
  render(<SortableMovieTable movies={movies} />);
  let firstMovie = screen.getByText(movies[0].title);
  expect(firstMovie).toBeInTheDocument();
});

/*
 * This isn't the optimal way to test sorting.
 * 1) Sorting is done by lodash.orderBy(), which we can test apart from the DOM
 * 2) We can't get to the sort indicators 🔼 / 🔽 because they're not rendered
 *    into the DOM!
 */
test('sorts on a click (with the DOM)', async () => {
  const { container } = render(<SortableMovieTable movies={movies} />);
  let title = screen.getByText(/title/i);

  expect(title).toBeInTheDocument();
  fireEvent.click(title);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  let firstTitleElement = container.querySelector('.movie-row');

  // Go over movies, grab only the titles, sort them alphabetically, grab the first one
  let firstTitle = movies.map((movie) => movie.title).sort()[0];
  expect(firstTitleElement?.textContent).toBe(firstTitle);
});

test('sorts on a click (with test ids)', async () => {
  render(<SortableMovieTable movies={movies} />);
  let title = screen.getByText(/title/i);

  expect(title).toBeInTheDocument();
  fireEvent.click(title);

  // let titles = screen.getAllByTestId('movie-title-', { exact: false });
  let titles = screen.getAllByTestId(/^movie-title-/);

  // Go over movies, grab only the titles, sort them alphabetically, grab the first one
  let firstTitle = movies.map((movie) => movie.title).sort()[0];
  expect(titles[0]?.textContent).toBe(firstTitle);
});
