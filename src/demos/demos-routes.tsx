import { RouteObject } from 'react-router-dom';
import ClassVsFunctionalContainer from './class-vs-functional/ClassVsFunctionalContainer';
import ComponentCommunication from './ComponentCommunication';
import CounterState from './CounterState';
import FetchingData from './FetchingData';
import FetchingDataAsync from './FetchingDataAsync';
import FetchingDataAsyncWithRefresh from './FetchingDataAsyncWithRefresh';
import FetchingDataClass from './FetchingDataClass';
import FormInputs from './FormInputs';
import MinimalInput from './MinimalInput';
import MovieTable from './MovieTable';
import SortableMovieTable from './SortableMovieTable';

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
    path: 'state-counter',
    element: <CounterState />,
  },
  'State-based counter'
);

routes.set(
  {
    path: 'class-vs-functional',
    element: <ClassVsFunctionalContainer />,
  },
  'Class vs Functional components'
);

routes.set(
  {
    path: 'iterative-data',
    element: <MovieTable />,
  },
  'Iterative Data'
);

routes.set(
  {
    path: 'sortable-data',
    element: <SortableMovieTable />,
  },
  'Sortable Data'
);

routes.set(
  {
    path: 'fetching-data',
    element: <FetchingData />,
  },
  'Fetching Data'
);

routes.set(
  {
    path: 'fetching-data-async',
    element: <FetchingDataAsync />,
  },
  'Fetching Data with async/await'
);

routes.set(
  {
    path: 'fetching-data-class',
    element: <FetchingDataClass />,
  },
  'Fetching Data using a class-based component'
);

routes.set(
  {
    path: 'use-effect-watcher',
    element: <FetchingDataAsyncWithRefresh />,
  },
  'useEffect with variables to watch'
);

routes.set(
  {
    path: 'form-fields',
    element: <FormInputs />,
  },
  'Form fields with state'
);

routes.set(
  {
    path: 'minimal-input',
    element: <MinimalInput />,
  },
  'Minimal input example'
);

export { routes };
