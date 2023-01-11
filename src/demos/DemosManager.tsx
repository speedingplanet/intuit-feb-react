import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import Header from '../common/Header';
import { routes } from './demos-routes';

export default function DemosManager() {
  let rootPath = routes[0].path ?? '';
  let routeChildren = routes[0].children;
  let element = useRoutes(routes);

  return (
    <>
      <Header level={2} text="Demos Manager" />
      <div className="row">
        <div className="col-3">
          <ul>
            {routeChildren?.map((r, index) => (
              <li key={index}>
                <Link to={`${rootPath}/${r.path}`}>
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">{element}</div>
      </div>
    </>
  );
}
