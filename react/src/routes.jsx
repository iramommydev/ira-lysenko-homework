/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const Works = lazy(() => import('./pages/Works/Works'));
const Error = lazy(() => import('./pages/Error/Error'));
const Registration = lazy(() => import('./pages/Regisrtation/Registration'));

const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component} </Suspense>;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Main />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/registration',
        element: <Element component={<Registration />} />,
      },
      {
        path: '/works',
        element: <Element component={<Works />} />,
      },
      {
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default router;
