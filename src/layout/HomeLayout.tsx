import { Outlet } from 'react-router-dom';
import { TalimProvider as HomeContext } from "landingpage/context/HomeContext";
import { ToastContainer } from 'react-toastify';

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import "flag-icons/css/flag-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "landingpage/styles/css/all.min.css";
import "landingpage/styles/css/icofont.min.css";
import "landingpage/styles/css/sharp-regular.min.css";
import "landingpage/styles/css/sharp-solid.min.css";
import "landingpage/styles/css/style.css";
import FooterSection5 from 'landingpage/compo/FooterSection5';
import HeaderSection8 from 'landingpage/compo/HeaderSection8';
import SidebarSection from 'landingpage/compo/SidebarSection';

// ==============================|| LAYOUT - BLANK PAGES ||============================== //

export default function LandingpageLayout() {
  return (
    <HomeContext>
      <SidebarSection />
      <ToastContainer />

      <HeaderSection8
        btnStyle="red-btn"
        loginBtn={true}
      />
      
      <Outlet />
      <FooterSection5
        style=""
        darkLogo=""
        lightLogo=""
        foorterDesc="tl-11-footer-descr"
        footerSocial="tl-11-sidebar-socials tl-11-footer-socials tl-12-footer-socials"
        footerLink="tl-12-footer-links"
      />
    </HomeContext>
  )
}
