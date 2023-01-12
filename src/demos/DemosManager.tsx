import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../common/Header';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';

export default function DemosManager() {
  return (
    <>
      <Header level={2} text="Demos Manager" />
      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <Link to={`demo-one`}>Demo One</Link>
            </li>
            <li>
              <Link to={`demo-two`}>Demo Two</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Routes>
            <Route path="demo-one" element={<DemoOne />} />
            <Route path="demo-two" element={<DemoTwo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
