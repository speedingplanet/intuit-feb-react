import { RouteObject } from 'react-router-dom';
import Lab01 from './Lab01';
import Lab02 from './Lab02';
import Lab03 from './Lab03';
import Lab04 from './Lab04';
import Lab05 from './Lab05';

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

routes.set(
  {
    path: 'lab-02',
    element: <Lab02 />,
  },
  'Lab 02'
);

routes.set(
  {
    path: 'lab-03',
    element: <Lab03 />,
  },
  'Lab 03'
);

routes.set(
  {
    path: 'lab-04',
    element: <Lab04 />,
  },
  'Lab 04'
);

routes.set(
  {
    path: 'lab-05',
    element: <Lab05 />,
  },
  'Lab 05'
);

export { routes };
