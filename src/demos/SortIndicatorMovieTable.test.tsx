import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SortableMovieTable } from './SortIndicatorMovieTable';
import { movies } from '../data/movies';

test('renders one particular movie', () => {
  render(<SortableMovieTable movies={movies} />);
  let firstMovie = screen.getByText(movies[0].title);
  expect(firstMovie).toBeInTheDocument();
});

test('toggle sort indicator ascending', async () => {
  render(<SortableMovieTable movies={movies} />);
  let ascIndicator = new RegExp('🔼');
  let title = screen.getByText(/title/i);
  let indicator = screen.queryByText(ascIndicator);

  expect(title).toBeInTheDocument();
  expect(indicator).not.toBeInTheDocument();

  fireEvent.click(title);
  indicator = screen.queryByText(ascIndicator);
  expect(indicator).toBeInTheDocument();
});
