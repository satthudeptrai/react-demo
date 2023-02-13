import { RouteObject } from 'react-router';
import AppLayout from './components/AppLayout';
import HomePage from './view/HomePage';
import Login from './view/Login.tsx';
import NoPage from './view/NoPage';
import TablePage1 from './view/TablePage1';
import TablePage2 from './view/TablePage2';

export const initRoutes = (): RouteObject[] => {
  return [
    {
      path: '/login',
      element: <Login />,
    },
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/table1",
          element: <TablePage1 />,
        },
        {
          path: "/table2",
          element: <TablePage2 />,
        },
      ],
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ];
};
