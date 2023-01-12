import React from 'react';
import './data-grid.css';

export default function Lab03() {
  let columns = ['First Name', 'Last Name', 'City', 'State'];
  return (
    <section>
      <h3>Lab 3: using State</h3>
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
  let handleColumnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(`You clicked on the ${event.currentTarget.textContent} column.`);
  };

  return (
    <div className="grid-header clickable" onClick={handleColumnClick}>
      {columnName}
    </div>
  );
}
