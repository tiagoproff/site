import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import Home from '../pages/Home';
import Root from '../pages/Root';
//import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
    /*errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]*/
  }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
