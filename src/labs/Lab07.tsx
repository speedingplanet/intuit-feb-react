import React, { useState } from 'react';
import './data-grid.css';
import { people } from '../data/people';

export default function Lab06() {
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
      <div className="grid-container">
        <GridHeaderRow columns={columns} />
        <GridBody people={people} />
      </div>
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

interface GridBodyProps {
  people: Person[];
}

function GridBody({ people }: GridBodyProps) {
  let fields: PersonFields[] = ['firstName', 'lastName', 'city', 'province'];
  return (
    <div className="grid-body">
      {/* Looping over each person */}
      {people.map((person) => (
        <div className="grid grid-body-row" key={person.id}>
          {/* For this person, print out the values of the fields in the `fields` array */}
          {fields.map((field) => (
            <div className="grid-body-cell" key={field}>
              {person[field]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

interface GridHeaderRowProps {
  columns: GridColumnConfig[];
}

function GridHeaderRow({ columns }: GridHeaderRowProps) {
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

  let headers = columns.map((column) => {
    let sortIndicator = '';
    if (column.field === sortConfig.sortColumn) {
      sortIndicator = sortConfig.sortDirection === 'asc' ? '🔼' : '🔽';
    }
    return (
      <GridHeader
        key={column.field}
        column={column}
        selectSortField={handleSortField}
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
