import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GridColumnConfig, GridContainer } from './Lab08';
import { people } from '../data/people';

let columns: GridColumnConfig[] = [
  {
    field: 'firstName',
    label: 'First Name',
  },
  {
    field: 'lastName',
    label: 'Last Name',
  },
  {
    field: 'city',
    label: 'City',
  },
  {
    field: 'province',
    label: 'State/Province',
  },
  {
    field: 'country',
    label: 'Country',
  },
];

test('smoke test', () => {
  render(<GridContainer people={people} columns={columns} />);
  let firstPerson = screen.getByText(people[0].lastName);

  expect(firstPerson).toHaveTextContent(people[0].lastName);
});

test('render the correct number of rows', () => {
  let rowCount = people.length;

  render(<GridContainer people={people} columns={columns} />);
  let rows = screen.getAllByTestId('person-row-', { exact: false });
  expect(rows.length).toBe(rowCount);
});
