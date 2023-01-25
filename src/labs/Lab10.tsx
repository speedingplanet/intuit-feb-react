import React, { ChangeEventHandler, useState } from 'react';
import { orderBy } from 'lodash';
import './data-grid.css';
import { people } from '../data/people';

export default function Lab10() {
  let [lastNameSearchText, setLastNameSearchText] = useState('');
  let columns: GridColumnConfig[] = [
    { field: 'firstName', label: 'First Name' },
    { field: 'lastName', label: 'Last Name' },
    { field: 'city', label: 'City' },
    { field: 'province', label: 'State' },
  ];

  let handleSearchLastNames = (lastName: string) => {
    console.log(`You're searching on ${lastName}.`);
    setLastNameSearchText(lastName);
  };
  return (
    <section>
      <h3>Lab 10: Filtering data</h3>
      <div className="row">
        <div className="col">
          <FilterForm searchLastNames={handleSearchLastNames} />
        </div>
      </div>
      <GridContainer columns={columns} people={people} lastNameSearchText={lastNameSearchText} />
    </section>
  );
}

interface FilterFormProps {
  searchLastNames: (lastName: string) => void;
}

function FilterForm({ searchLastNames }: FilterFormProps) {
  let [filterText, setFilterText] = useState('');

  let handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    searchLastNames(event.currentTarget.value);
    setFilterText(event.currentTarget.value);
    // searchLastNames(filterText);
  };

  return (
    <>
      <div>
        <label className="form-label" htmlFor="lastname-filter">
          Filter by last name:{' '}
        </label>
        <input
          value={filterText}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="lastName"
          id="lastname-filter"
        />
      </div>
      <div className="mt-2 mb-2">
        <button className="btn btn-warning" onClick={() => searchLastNames(filterText)}>
          Search
        </button>
      </div>
    </>
  );
}

interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  city: string;
  province: string | null;
  country: string;
  postalCode: string;
  id: number;
}

type PersonFields = keyof Person; // 'firstName' | 'lastName' | etc...

type SortDirection = 'asc' | 'desc' | undefined;
type SortConfig = {
  sortColumn: PersonFields | undefined;
  sortDirection: SortDirection;
};

type SelectSortHandler = (sortColumn: PersonFields) => void;

export type GridColumnConfig = {
  field: PersonFields;
  label: string;
};

interface GridContainerProps {
  columns: GridColumnConfig[];
  people: Person[];
  lastNameSearchText?: string;
}

export function GridContainer({ columns, people, lastNameSearchText }: GridContainerProps) {
  console.log(`GridContainer: I should search on ${lastNameSearchText}`);
  let [sortConfig, setSortConfig] = useState<SortConfig>({
    sortColumn: undefined,
    sortDirection: undefined,
  });

  let handleSortField = (sortColumn: PersonFields) => {
    let nextSortDirection: SortDirection = undefined;

    if (sortColumn === sortConfig.sortColumn && sortConfig.sortDirection === 'asc') {
      nextSortDirection = 'desc';
    } else {
      nextSortDirection = 'asc';
    }

    setSortConfig({
      sortDirection: nextSortDirection,
      sortColumn: sortColumn,
    });
  };

  let filteredPeople = [...people];

  if (lastNameSearchText !== undefined) {
    let lastNameRegExp = new RegExp(lastNameSearchText, 'i');
    filteredPeople = people.filter((person) => lastNameRegExp.test(person.lastName));
  }
  let sortedPeople = orderBy(filteredPeople, sortConfig.sortColumn, sortConfig.sortDirection);

  return (
    <div className="grid-container">
      <GridHeaderRow columns={columns} sortConfig={sortConfig} selectSortField={handleSortField} />
      <GridBody people={sortedPeople} columns={columns} />
    </div>
  );
}

interface GridBodyProps {
  people: Person[];
  columns: GridColumnConfig[];
}

function GridBody({ people, columns }: GridBodyProps) {
  return (
    <div className="grid-body">
      {/* Looping over each person */}
      {people.map((person) => (
        <div data-testid={`person-row-${person.id}`} className="grid grid-body-row" key={person.id}>
          {/* For this person, print out the values of the fields in the `fields` array */}
          {columns.map((column) => (
            <div className="grid-body-cell" key={column.field}>
              {person[column.field]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

interface GridHeaderRowProps {
  columns: GridColumnConfig[];
  selectSortField: SelectSortHandler;
  sortConfig: SortConfig;
}

function GridHeaderRow({ columns, sortConfig, selectSortField }: GridHeaderRowProps) {
  let headers = columns.map((column) => {
    let sortIndicator = '';
    if (column.field === sortConfig.sortColumn) {
      sortIndicator = sortConfig.sortDirection === 'asc' ? '🔼' : '🔽';
    }
    return (
      <GridHeader
        key={column.field}
        column={column}
        selectSortField={selectSortField}
        sortIndicator={sortIndicator}
      />
    );
  });

  return <div className="grid grid-header-row">{headers}</div>;
}

interface GridHeaderProps {
  column: GridColumnConfig;
  selectSortField: SelectSortHandler;
  sortIndicator?: string;
}

function GridHeader({ column, selectSortField, sortIndicator }: GridHeaderProps) {
  return (
    <div className="grid-header clickable" onClick={() => selectSortField(column.field)}>
      {column.label}
      {sortIndicator}
    </div>
  );
}
