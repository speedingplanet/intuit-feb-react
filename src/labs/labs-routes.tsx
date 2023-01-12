import { RouteObject } from 'react-router-dom';
import Lab01 from './Lab01';

let routes = new Map<RouteObject, string>();
routes.set(
  {
    path: '/',
    element: <p>Lab placeholder</p>,
    index: true,
  },
  'index'
);

routes.set(
  {
    path: 'lab-01',
    element: <Lab01 />,
  },
  'Lab 01'
);

export { routes };
