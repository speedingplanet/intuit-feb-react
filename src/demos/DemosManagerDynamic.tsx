import React from 'react';
import { Link, Outlet, useRoutes } from 'react-router-dom';
import Header from '../common/Header';
import { routes } from './demos-routes';

export default function DemosManagerDynamic() {
  let element = useRoutes(routes);
  console.log('useRoutes: ', element);

  return (
    <>
      <Header level={2} text="Demos Manager" />
      <div className="row">
        <div className="col-3">
          <ul>
            {routes.map((r, index) => (
              <li key={index}>
                <Link to={`${r.path}`}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">{element}</div>
      </div>
    </>
  );
}
