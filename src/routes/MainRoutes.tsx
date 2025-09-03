import { lazy } from 'react';
// project-imports
import Loadable from 'components/Loadable';


import HomeLayout from 'layout/Home/HomeLayout';



const Contact = Loadable(lazy(() => import('landingpage/pages/contact/Contact')));
const Price = Loadable(lazy(() => import('landingpage/pages/price/Price')));
const Blog = Loadable(lazy(() => import('landingpage/pages/blog/Blog')));
const BlogDetails = Loadable(lazy(() => import('landingpage/pages/blog/BlogDetails')));
const Features = Loadable(lazy(() => import('landingpage/pages/features/FeaturePage')));
const Users = Loadable(lazy(() => import('landingpage/pages/users/Users')));
const Download = Loadable(lazy(() => import('landingpage/pages/download/Download')));
const UnitsMarket = Loadable(lazy(() => import('landingpage/pages/market/ReaEstateMarket')));
const EventDetails = Loadable(lazy(() => import('landingpage/pages/events-pages/EventDetails')));


// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/', 
  children: [

    {
      path: '/', 
      element: <HomeLayout />,
      children: [
        { path: '/contact', exact: true, element: <Contact /> },
        { path: '/pricing', exact: true, element: <Price /> },
        { path: '/blog', exact: true, element: <Blog /> },
        { path: '/blog/:blogId', exact: true, element: <BlogDetails /> },
        { path: '/feature/:featureId', exact: true, element: <Features /> },
        { path: '/users/:id', exact: true, element: <Users /> },
        { path: '/download', exact: true, element: <Download /> },
        { path: '/units-market', exact: true, element: <UnitsMarket /> },
        { path: '/event-details/:id', exact: true, element: <EventDetails /> },
      ]
    }]
};

export default MainRoutes;
