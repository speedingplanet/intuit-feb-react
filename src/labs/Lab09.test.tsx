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
  let peopleCount = people.length;

  render(<GridContainer people={people} columns={columns} />);
  let rows = screen.getAllByTestId('person-row-', { exact: false });
  expect(rows.length).toBe(peopleCount);
});

test('remember the correct number of rows, Ophelia-style', () => {
  let firstPerson = people[0];
  let lastPerson = people[people.length - 1];

  render(<GridContainer people={people} columns={columns} />);
  let firstPersonRendered = screen.getByText(firstPerson.lastName);
  let lastPersonRendered = screen.getByText(lastPerson.lastName);

  expect(firstPersonRendered).toBeInTheDocument();
  expect(lastPersonRendered).toBeInTheDocument();
});

test('did the right number of columns render?', () => {
  // What's the "right" number of columns?
  let columnCount = columns.length;
  render(<GridContainer people={people} columns={columns} />);
  let columnHeaders = screen.getAllByTestId('person-header-', { exact: false });
  expect(columnHeaders.length).toBe(columnCount);
  expect(columnHeaders).toHaveLength(columnCount);
});

test('did the right number of columns render (check every one)?', () => {
  render(<GridContainer people={people} columns={columns} />);

  for (let config of columns) {
    let renderedColumn = screen.getByText(config.label);
    expect(renderedColumn).toBeInTheDocument();
  }
});

test('correctly shows the descending sort indicator', () => {
  render(<GridContainer people={people} columns={columns} />);
  let sortIndicator = new RegExp('🔽');

  let firstColumn = screen.getByText(columns[0].label);
  fireEvent.click(firstColumn);
  fireEvent.click(firstColumn);
  let doWeHaveTheIndicator = screen.getByText(sortIndicator);
  expect(doWeHaveTheIndicator).toBeInTheDocument();
});

test.skip('toBe vs toEqual', () => {
  let o1 = { a: 'apple', b: 'banana' };
  let o2 = o1;
  let o3 = { a: 'apple', b: 'banana' };

  expect(o1).toBe(o2); // pass
  expect(o1).toEqual(o2); // pass
  expect(o1).toEqual(o3); // pass
  expect(o1).toBe(o3); // fail
});
