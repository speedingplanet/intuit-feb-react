import { NonIndexRouteObject, RouteObject } from 'react-router-dom';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';

interface NonIndexRouteObjectWithLabels extends NonIndexRouteObject {
  label?: string;
  children?: NonIndexRouteObjectWithLabels[];
}

// type RouteObjectWithLabels = RouteObject | NonIndexRouteObjectWithLabels;

// let routes: NonIndexRouteObjectWithLabels[] = [
let routes: NonIndexRouteObjectWithLabels[] = [
  {
    path: '/',
    element: <p>Placeholder</p>,
  },
  {
    path: 'demo-one',
    element: <DemoOne />,
    label: 'Demo One',
  },
  {
    path: 'demo-two',
    element: <DemoTwo />,
    label: 'Demo Two',
  },
];

export { routes };
