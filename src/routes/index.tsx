import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import MainRoutes from './MainRoutes';

import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';

// render - landing page
const HomePage = Loadable(lazy(() => import('landingpage/pages/home-page/HomePage')));


// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout/>,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    },
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
