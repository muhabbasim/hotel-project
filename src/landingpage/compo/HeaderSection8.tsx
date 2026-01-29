import React from "react";
import { Link } from "react-router-dom";
import Language from "components/language/Language";
import Translatable from "components/translatable/Translatable";
import NavSection from "./NavSection";
import { useTalimContext } from "landingpage/context/HomeContext";
import midarIcon from '/src/assets/images/midar_logo_light.png'

interface HeaderProps {

  btnStyle: string;
  loginBtn?: boolean;
}
const HeaderSection8: React.FC<HeaderProps> = ({
  btnStyle,
  loginBtn,
}) => {

  const { isHeaderFixed, handleSidebarOpen } = useTalimContext();
  return (
    <div
      className={`tl-header ${
        isHeaderFixed ? "sticky" : ""
      }`}
    >
      <div className="tl-8-top-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul style={{margin: 0}} className="tl-8-top-header-contacts">
                <li>
                  <a href="tel:+966599448339">
                    <i className="fa-solid fa-phone"></i> +966 59 944 8339{" "}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@xyz-text.com">
                    <i className="fa-solid fa-envelope"></i> co@begining.online
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Location 07052,
                  Makkah, KSA
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <ul style={{marginBottom: 0}} className="tl-8-top-header-socials">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-0 align-items-center" style={{ paddingTop: "10px", paddingBottom: "10px"}}>
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 col-6">
                <div className="logo">
                  <Link to="/"  className="d-flex align-items-center">
                    <img src={midarIcon}  alt="Logo" />
                    {/* <h3 style={{margin: 0, color: "green"}}>TIME SHARE</h3> */}
                    {/* <span>Midar</span> */}
                  </Link>
                </div>
              </div>
              <div className="d-lg-none d-flex justify-content-end col-6">
                <button
                  className="tl-hamburger navbar-toggler"
                  onClick={handleSidebarOpen}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="tl-nav-menu">
              <NavSection ulPosition="" liStyle="" />
            </div>
          </div>

          <div className="col-4 d-lg-block d-none">
            
            <div className="tl-header-actions d-flex justify-content-end">
              {loginBtn ? (
                <>
                  <Language/>
                  <Link to="/login" className={btnStyle}>
                    <Translatable text="Login" />
                  </Link>
                </>
              ) : (
                <>
                  <Language/>
                  <Link to="/register" className="kb-10-def-btn">
                    <Translatable text="Register" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection8;
