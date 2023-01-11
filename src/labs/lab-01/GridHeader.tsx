import React from 'react';

interface Props {
  columnName: string;
}

export default function GridHeader({ columnName }: Props) {
  return <div className="grid-header">{columnName}</div>;
}
