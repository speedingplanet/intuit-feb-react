import React from 'react';
import './data-grid.css';
import GridHeader from './GridHeader';

interface Props {
  columnNames: string[];
}

export default function GridHeaderRow({ columnNames }: Props) {
  /*
  let headers = [];
  let headerCount = 0;
  for (const columnName of columnNames) {
    headers.push(<GridHeader columnName={columnName} key={headerCount} />);
    headerCount = headerCount + 1;
  }
  */

  let headers = columnNames.map((columnName) => {
    return <GridHeader columnName={columnName} key={columnName} />;
  });

  return <div className="grid-header-row">{headers}</div>;
}
