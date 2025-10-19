import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
// import MainRoutes from './MainRoutes';

import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';

// render - landing page
const HomePage = Loadable(lazy(() => import('landingpage/pages/home-page/HomePage')));
const EventDetails = Loadable(lazy(() => import('landingpage/pages/events-pages/EventDetails')));


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
        },
        { path: '/event-details/:id', element: <EventDetails /> },
      ]
    },
    // MainRoutes
  ],
  {
    future: {
      v7_startTransition: true, // Opt-in to the new startTransition behavior
    } as any,
  }
);

export default router;
