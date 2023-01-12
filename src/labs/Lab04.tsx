import React, { useState } from 'react';
import './data-grid.css';

export default function Lab03() {
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
  let handleSortColumn = (sortColumn: string) => {
    console.log(`From the parent, sort on ${sortColumn}`);
  };

  let headers = columnNames.map((columnName) => {
    return <GridHeader columnName={columnName} key={columnName} sortColumn={handleSortColumn} />;
  });

  return <div className="grid-header-row">{headers}</div>;
}

interface GridHeaderProps {
  columnName: string;
  sortColumn: (columnName: string) => void;
}

function GridHeader({ columnName, sortColumn }: GridHeaderProps) {
  // let [stateVariable, setterFunction] = useState(initialValue)
  let [sortDirection, setSortDirection] = useState('');
  let sortArrow;

  if (sortDirection === 'ascending') {
    sortArrow = '🔼';
  } else if (sortDirection === 'descending') {
    sortArrow = '🔽';
  }

  let handleColumnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(`You clicked on the ${event.currentTarget.textContent} column.`);
    sortColumn(event.currentTarget.textContent || '');

    if (sortDirection === '' || sortDirection === 'descending') {
      setSortDirection('ascending');
    } else {
      setSortDirection('descending');
    }
  };

  return (
    <div className="grid-header clickable" onClick={handleColumnClick}>
      {columnName} {sortArrow}
    </div>
  );
}
