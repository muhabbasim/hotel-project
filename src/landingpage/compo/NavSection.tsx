import Translatable from "components/translatable/Translatable";
import React from "react";
import { Link, NavLink } from "react-router-dom";
interface NavProps {
  ulPosition: string;
  liStyle: string;
}

const NavSection: React.FC<NavProps> = ({ ulPosition, liStyle }) => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  return (
    <ul style={{padding: 0, margin: 0}} className={ulPosition}>
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/how-it-works/seller">
          <Translatable text="How it works" />
        </NavLink>
      </li>

      {/* <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          <Translatable text="About Saudi" />
        </a>
      </li> */}
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/Market">
          <Translatable text="Market" />  
        </NavLink>
      </li>
      
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/regulations">
          <Translatable text="Regulations" />
        </NavLink>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/about-us">
          <Translatable text="About Us" />
        </NavLink>
      </li>
    </ul>
  );
};

export default NavSection;
