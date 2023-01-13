import React, { useState } from 'react';
import './data-grid.css';
import { people } from '../data/people';

export default function Lab05() {
  let columns = ['First Name', 'Last Name', 'City', 'State'];
  return (
    <section>
      <h3>Lab 5: Iterative content</h3>
      <div className="grid-container">
        <GridHeaderRow columnNames={columns} />
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

interface GridBodyProps {
  people: Person[];
}

type PersonFields = keyof Person;

function GridBody({ people }: GridBodyProps) {
  let fields: PersonFields[] = ['firstName', 'lastName', 'city', 'province'];
  return (
    <div className="grid grid-body">
      {people.map((person) => (
        <div className="grid-body-row" key={person.id}>
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
  columnNames: string[];
}

function GridHeaderRow({ columnNames }: GridHeaderRowProps) {
  let [sortConfig, setSortConfig] = useState({ sortColumn: '', sortDirection: '' });

  let handleSortColumn = (sortColumn: string) => {
    let nextSortDirection = '';

    if (sortColumn === sortConfig.sortColumn && sortConfig.sortDirection === 'ascending') {
      nextSortDirection = 'descending';
    } else {
      nextSortDirection = 'ascending';
    }

    setSortConfig({
      sortDirection: nextSortDirection,
      sortColumn: sortColumn,
    });
  };

  let headers = columnNames.map((columnName) => {
    let sortIndicator = '';
    if (columnName === sortConfig.sortColumn) {
      sortIndicator = sortConfig.sortDirection === 'ascending' ? '🔼' : '🔽';
    }
    return (
      <GridHeader
        key={columnName}
        columnName={columnName}
        sortColumn={handleSortColumn}
        sortIndicator={sortIndicator}
      />
    );
  });

  return <div className="grid grid-header-row">{headers}</div>;
}

interface GridHeaderProps {
  columnName: string;
  sortColumn: (columnName: string) => void;
  sortIndicator?: string;
}

function GridHeader({ columnName, sortColumn, sortIndicator }: GridHeaderProps) {
  let handleColumnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    sortColumn(columnName);
  };

  return (
    <div className="grid-header clickable" onClick={handleColumnClick}>
      {columnName}
      {sortIndicator}
    </div>
  );
}
