import { RouteObject } from 'react-router';
import HomePage from './view/HomePage';
import NoPage from './view/NoPage';
import PokemonDetail from './view/PokemonDetail';
import ServerError from './view/ServerError';

export const initRoutes = (): RouteObject[] => {
  return [
    {
      path: "/react-demo",
      element: <HomePage />,
    },
    {
      path: "/react-demo/pokemon/:id",
      element: <PokemonDetail />,
    },
    {
      path: "/react-demo/error",
      element: <ServerError />,
    },
    {
      path: "/react-demo/*",
      element: <NoPage />,
    },
  ];
};
