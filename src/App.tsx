/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import CounterState from './demos/CounterState';
import EventHandling from './demos/EventHandling';
import Footer from './Footer';
import GridHeaderRow from './labs/GridHeaderRow';

function App() {
  // let columnNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Iota'];
  let columnNames = ['First Name', 'Last Name', 'City', 'State'];

  return (
    <main className="container">
      <header>
        <h1>Some terrific app</h1>
        <hr />
      </header>
      {/* <GridHeaderRow columnNames={columnNames} /> */}
      {/* <EventHandling /> */}
      <CounterState />
      <Footer companyName="Neat-o Partners" year={2022} />
    </main>
  );
}

export default App;
