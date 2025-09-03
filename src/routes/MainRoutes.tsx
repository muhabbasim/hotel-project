import { lazy } from 'react';
// project-imports
import Loadable from 'components/Loadable';


import HomeLayout from 'layout/HomeLayout';

const EventDetails = Loadable(lazy(() => import('landingpage/pages/events-pages/EventDetails')));


// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/', 
  children: [

    {
      path: '/', 
      element: <HomeLayout />,
      children: [
        { path: '/event-details/:id', exact: true, element: <EventDetails /> },
      ]
    }]
};

export default MainRoutes;
