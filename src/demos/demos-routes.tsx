import { RouteObject } from 'react-router-dom';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';

let routes = new Map<RouteObject, string>();
routes.set(
  {
    path: '/',
    element: <p>Placeholder</p>,
    index: true,
  },
  'index'
);

routes.set(
  {
    path: 'demo-one',
    element: <DemoOne />,
  },
  'Demo One'
);

routes.set(
  {
    path: 'demo-two',
    element: <DemoTwo />,
  },
  'Demo Two'
);

export { routes };
