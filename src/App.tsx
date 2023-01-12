/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarWithLayout from './common/NavbarWithLayout';
import DemosManagerComponents from './demos/DemosManagerComponents';
import DemosManagerDynamic from './demos/DemosManagerDynamic';
import Home from './Home';
import LabsManager from './labs/LabsManager';

function App() {
  // let columnNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Iota'];
  let columnNames = ['First Name', 'Last Name', 'City', 'State'];

  return (
    <main className="container">
      <header className="row">
        <div className="col">
          <h1>Front-end Bootcamp</h1>
          <hr />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<NavbarWithLayout />}>
          <Route index element={<Home />} />
          <Route path="demos-components/*" element={<DemosManagerComponents />} />
          <Route path="demos/*" element={<DemosManagerDynamic />} />
          <Route path="labs/*" element={<LabsManager />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
