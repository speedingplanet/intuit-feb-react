import { RouteObject } from 'react-router-dom';
import ComponentCommunication from './ComponentCommunication';
import MovieTable from './MovieTable';

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
    path: 'component-communication',
    element: <ComponentCommunication />,
  },
  'Component Communication'
);

routes.set(
  {
    path: 'iterative-data',
    element: <MovieTable />,
  },
  'Iterative Data'
);

export { routes };
