import { RouteObject } from 'react-router';
import HomePage from './view/HomePage';
import NoPage from './view/NoPage';
import PokemonDetail from './view/PokemonDetail';
import ServerError from './view/ServerError';

export const initRoutes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/pokemon/:id",
      element: <PokemonDetail />,
    },
    {
      path: "/error",
      element: <ServerError />,
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ];
};
