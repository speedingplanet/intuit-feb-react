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

interface GridHeaderProps {
  columnName: string;
}

function GridHeaderRow({ columnNames }: GridHeaderRowProps) {
  let headers = columnNames.map((columnName) => {
    return <GridHeader columnName={columnName} key={columnName} />;
  });

  return <div className="grid-header-row">{headers}</div>;
}

function GridHeader({ columnName }: GridHeaderProps) {
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

function GridHeaderSortState({ columnName }: GridHeaderProps) {
  let [sortConfig, setSortConfig] = useState({ direction: '', indicator: '' });

  let handleColumnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(`You clicked on the ${event.currentTarget.textContent} column.`);
    if (sortConfig.direction === '' || sortConfig.direction === 'descending') {
      // Set sortConfig.direction to 'ascending'
      // Set indicator to 🔼
      setSortConfig({ direction: 'ascending', indicator: '🔼' });
    } else {
      // Set sortConfig.direction to 'descending'
      // Set indicator to 🔼
      setSortConfig({ direction: 'descending', indicator: '🔽' });
    }
  };

  return (
    <div className="grid-header clickable" onClick={handleColumnClick}>
      {columnName} {sortConfig.indicator}
    </div>
  );
}
