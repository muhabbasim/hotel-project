import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ComponentsRoutes from './ComponentsRoutes';

// import { SimpleLayoutType } from 'config';
// import SimpleLayout from 'layout/Simple';
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/Home/HomeLayout';

// render - landing page
// const PagesLanding = Loadable(lazy(() => import('pages/landing')));
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
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
