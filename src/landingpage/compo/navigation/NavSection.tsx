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
          <Translatable text="Users" />
          <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <Link className="tl-navlink" onClick={handleScrollToTop} to="/users/directors">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Owner & Director" />
                  
                </span>
                <p>
                  <Translatable text="Everything you need to create a high-quality program, all in one place"/>
                </p>
              </div>
            </Link>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/users/teachers">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Educator" />
                  
                </span>
                <p>
                  <Translatable text="Foster deeper connections with children and families"/>
                </p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/users/parents">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Family" />
                  
                </span>
                <p>
                  <Translatable text="Receive updates about your child's day and pay tuition from anywhere"/>
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          <Translatable text="Solutions" />
          <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/center_management">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape5.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Center management" />
                </span>
                <p>
                  <Translatable text="Simplify daily operations and make it easier to manage and grow a high-quality early childhood program"/>
                </p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/family_engagement">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape6.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Family engagement" />
                </span>
                <p>
                  <Translatable text="Stay connected with parents and keep them updated on their child's daily activities!"/>
                </p>
              </div>
            </NavLink>
          </li>
          {/* <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/engaging_lessons">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Plan engaging lessons" />
                </span>
                <p>
                  <Translatable text="l"/>
                </p>
              </div>
            </NavLink>
          </li> */}
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/feature/billing">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Biling & payments" />
                </span>
                <p>
                  <Translatable text="Make billing simple and avoid the hassle of chasing parents for payments"/>
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>
      
      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <NavLink onClick={handleScrollToTop} to="/pricing">
        <Translatable text="Pricing" />
        </NavLink>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a role="button">
          <Translatable text="Resources" />
          <i className="fa-regular fa-angle-down"></i>
        </a>
        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/blog">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape5.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Blog" />
                </span>
                <p>
                  <Translatable text="Discover articles, tips, tricks, and best practices for your child's education"/>
                </p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape4.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="KGP Activities" />
                </span>
                <p>
                  <Translatable text="Discover engaging preschool and daycare activities that your class will enjoy!"/>
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>

      <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
        <a>
          <Translatable text="About" />
          <i className="fa-regular fa-angle-down"></i>
        </a>

        <ul className="tl-submenu">
          <li className="tl-submenu-li">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape3.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Contact Us" />
                  
                </span>
                <p>
                  <Translatable text="Contact our team we'd be delighted to hear from you"/>
                </p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/contact">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape1.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Customer Service" />
                  
                </span>
                <p>
                  <Translatable text="Discover how our customers are expanding their centers with KGP"/>
                </p>
              </div>
            </NavLink>
          </li>
          <li className="">
            <NavLink className="tl-navlink" onClick={handleScrollToTop} to="/download">
              <div className="tl-nav-details">
                <img src="/src/assets/landing-images/shape/shape2.png" alt="Logo" />
              </div>
              <div>
                <span>
                  <Translatable text="Download" />
                  
                </span>
                <p>
                  <Translatable text="Download our app from the App Store and Google Play Store"/>
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavSection;
