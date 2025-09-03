import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "../../context/HomeContext";
import { Link } from "react-router-dom";
import Language from "components/language/Language";
import FullScreen from "layout/Dashboard/Header/HeaderContent/FullScreen";
import Translatable from "components/translatable/Translatable";
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
      // style={{ backgroundColor: '#E1EEDA'}}
    >

      <div className="tl-8-top-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="tl-8-top-header-contacts">
                <li>
                  <a href="tel:12356877787">
                    <i className="fa-solid fa-phone"></i> (88) 123 568 777 87{" "}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@xyz-text.com">
                    <i className="fa-solid fa-envelope"></i> info@xyz-text.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Location 07052,
                  KSA
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <ul className="tl-8-top-header-socials">
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
                  <Link to="/">
                    {/* <img src="/kgb-logo2.png" alt="Logo" /> */}
                    <h3 style={{margin: 0, color: "green"}}>TIME SHARE</h3>
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
                  <FullScreen />
                  <Link to="/login" className={btnStyle}>
                    {/* <i className="fa-regular fa-user"></i>  */}
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
