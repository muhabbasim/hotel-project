import React from 'react'
import HeaderSection6 from '../header/HeaderSection6';
import FooterSection4 from '../footer/FooterSection4';


interface LayoutProps {
    children: any;
}
const Layout6:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <HeaderSection6 style='' darkLogo="/src/assets/images/logos/logo-dark.png" lightLogo="/src/assets/images/logos/logo.png"/>
      {children}
      <FooterSection4 style='tl-2-footer' logo="/src/assets/images/logos/logo.png" form='tl-9-footer-subs-form'/>
    </>
  )
}

export default Layout6