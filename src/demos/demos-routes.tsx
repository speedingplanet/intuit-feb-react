import { RouteObject } from 'react-router-dom';
import ComponentCommunication from './ComponentCommunication';
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
    path: 'component-communication',
    element: <ComponentCommunication />,
  },
  'Component Communication'
);

routes.set(
  {
    path: 'demo-two',
    element: <DemoTwo />,
  },
  'Demo Two'
);

export { routes };
