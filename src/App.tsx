import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarWithLayout from './common/NavbarWithLayout';
import DemosManager from './demos/DemosManager';
import DemosManagerDynamic from './demos/DemosManagerDynamic';
import Home from './Home';
import LabsManager from './labs/LabsManager';

function App() {
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
          <Route path="demos/*" element={<DemosManager />} />
          <Route path="demos-dynamic/*" element={<DemosManagerDynamic />} />
          <Route path="labs/*" element={<LabsManager />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
