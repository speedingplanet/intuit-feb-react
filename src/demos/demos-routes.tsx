import { NonIndexRouteObject } from 'react-router-dom';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';

interface NonIndexRouteObjectWithLabels extends NonIndexRouteObject {
  label?: string,
  children?: NonIndexRouteObjectWithLabels[]
}

let routes: NonIndexRouteObjectWithLabels[] = [
  {
    path: '/demos',
    children: [
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
    ],
  },
];

export { routes };
