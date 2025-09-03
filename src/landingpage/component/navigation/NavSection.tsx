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
    <ul className={ulPosition}>
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          <Translatable text="General Benefits" />
        </a>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          <Translatable text="About Saudi" />
        </a>
      </li>
      
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/event-details/fd">
          <Translatable text="Regulations" />
        </NavLink>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          <Translatable text="About Us" />
        </a>
      </li>
    </ul>
  );
};

export default NavSection;
