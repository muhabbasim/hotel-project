import React from "react";
import HeaderSection8 from "../header/HeaderSection8";
import FooterSection6 from "../footer/FooterSection6";

interface LayoutProps {
  children: any;
}
const Layout8: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderSection8
        style="tl-header-5-inner"
        darkLogo="/src/assets/images/logos/logo-dark.png"
        lightLogo="/src/assets/images/logos/logo.png"
        headerStyle=""
        btnStyle=""
      />
      {children}
      <FooterSection6
        darkLogo="/src/assets/images/logos/logo-dark.png"
        lightLogo="/src/assets/images/logos/logo.png"
      />
    </>
  );
};

export default Layout8;
