import React from 'react';
import './data-grid.css';

export default function Lab01() {
  let columns = ['First Name', 'Last Name', 'City', 'State'];
  return (
    <section>
      <h3>Lab 1</h3>
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
  return <div className="grid-header">{columnName}</div>;
}
