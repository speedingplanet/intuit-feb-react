import React, { useState } from 'react';
import './data-grid.css';

export default function Lab04() {
  let columns = ['First Name', 'Last Name', 'City', 'State'];
  return (
    <section>
      <h3>Lab 4: Component communication</h3>
      <GridHeaderRow columnNames={columns} />
    </section>
  );
}

interface GridHeaderRowProps {
  columnNames: string[];
}

function GridHeaderRow({ columnNames }: GridHeaderRowProps) {
  let [sortConfig, setSortConfig] = useState({ sortColumn: '', sortDirection: '' });

  let handleSortColumn = (sortColumn: string) => {
    console.log(`From the parent, sort on ${sortColumn}`);
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
        columnName={columnName}
        key={columnName}
        sortColumn={handleSortColumn}
        sortIndicator={sortIndicator}
      />
    );
  });

  return <div className="grid-header-row">{headers}</div>;
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
