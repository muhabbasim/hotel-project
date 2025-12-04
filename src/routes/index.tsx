import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
// import MainRoutes from './MainRoutes';

import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';

// render - landing page
const HomePage = Loadable(lazy(() => import('landingpage/pages/home-page/HomePage')));
const EventDetails = Loadable(lazy(() => import('landingpage/pages/events-pages/EventDetails')));
const RegulationsPage = Loadable(lazy(() => import('landingpage/pages/requlation-page/RegulationsPage')));
const HowItWorksPage = Loadable(lazy(() => import('landingpage/pages/how-it-works/HowItWorksPage')));
const PropDetailsPage = Loadable(lazy(() => import('landingpage/pages/prop-details/PropDetails')));
const Market = Loadable(lazy(() => import('landingpage/pages/market/MarketPage')));
const AboutUs = Loadable(lazy(() => import('landingpage/pages/about-us/AboutUs')));
const Test = Loadable(lazy(() => import('landingpage/pages/test-page/TestPage')));


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
        { path: '/regulations', element: <RegulationsPage /> },
        { path: '/how-it-works/:id', element: <HowItWorksPage /> },
        { path: '/market', element: <Market /> },
        { path: '/prop-details/:id', element: <PropDetailsPage /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '/test', element: <Test /> },
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
