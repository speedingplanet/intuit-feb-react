import React, { useState } from 'react';
import './data-grid.css';
import { people } from '../data/people';

export default function Lab07() {
  // let columns = ['First Name', 'Last Name', 'City', 'State'];
  let columns: GridColumnConfig[] = [
    { field: 'firstName', label: 'First Name' },
    { field: 'lastName', label: 'Last Name' },
    { field: 'city', label: 'City' },
    { field: 'province', label: 'State' },
  ];
  return (
    <section>
      <h3>Lab 7: Sorting (finally)!</h3>
      <GridContainer columns={columns} people={people} />
    </section>
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

type SelectSortHandlerFn = (sortColumn: PersonFields) => void;

type GridColumnConfig = {
  field: PersonFields;
  label: string;
};

interface GridContainerProps {
  columns: GridColumnConfig[];
  people: Person[];
}

function GridContainer({ columns, people }: GridContainerProps) {
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

  return (
    <div className="grid-container">
      <GridHeaderRow columns={columns} sortConfig={sortConfig} selectSortField={handleSortField} />
      <GridBody people={people} columns={columns} />
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
        <div className="grid grid-body-row" key={person.id}>
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
  selectSortField: SelectSortHandlerFn;
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
  selectSortField: SelectSortHandlerFn;
  sortIndicator?: string;
}

function GridHeader({ column, selectSortField, sortIndicator }: GridHeaderProps) {
  let handleColumnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    selectSortField(column.field);
  };

  return (
    <div className="grid-header clickable" onClick={handleColumnClick}>
      {column.label}
      {sortIndicator}
    </div>
  );
}
