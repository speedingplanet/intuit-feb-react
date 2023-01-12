import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';

interface NonIndexRouteObjectWithLabels extends NonIndexRouteObject {
  label?: string;
  children?: NonIndexRouteObjectWithLabels[];
}

interface IndexRouteObjectWithLabels extends IndexRouteObject {
  label?: string;
}

type RouteObjectWithLabels = IndexRouteObjectWithLabels | NonIndexRouteObjectWithLabels;

// let routes: NonIndexRouteObjectWithLabels[] = [
let routes: RouteObjectWithLabels[] = [
  {
    path: '/',
    element: <p>Placeholder</p>,
    index: true,
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
