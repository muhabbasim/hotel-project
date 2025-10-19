import { useTalimContext } from "../../context/HomeContext";
import { Link } from "react-router-dom";
import MobileNavSection from "../navigation/MobileNavSection";
import logoIcon from '/src/assets/images/Takdir_proparty.webp'

const SidebarSection = () => {
  const { isSidebarOpen, handleSidebarClose } = useTalimContext();

  return (
    <>
      <div
        className={`kidba-menu-sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}
      >
        <div className="kidba-menu-sidebar-inner">
          <div className="sidebar__close">
            <a
              role="button"
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={handleSidebarClose}
            >
              <span>
                <i style={{color: 'darkblue'}} className="icofont-brand-nexus"></i>
              </span>
              <span>close</span>
            </a>
          </div>
          <div className="kidba-menu-sidebar-bottom">
            <div className="logo mb-40">
              <Link to="/">
                <img src={logoIcon} alt="logo" />
              </Link>
            </div>
            <div className="mobile-menu mean-container">
              <div className="mean-bar">
                <MobileNavSection />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div
        className={`offwrap ${isSidebarOpen ? "open" : ""}`}
        onClick={handleSidebarClose}
      ></div>
    </>
  );
};

export default SidebarSection;
