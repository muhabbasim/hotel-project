import Language from "components/language/Language";
import SubLanguage from "components/language/SubLanguage";
import Translatable from "components/translatable/Translatable";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
interface DropdownState {
  home: boolean;
  courses: boolean;
  page: boolean;
  blog: boolean;
  about: boolean;
  staff: boolean;
  event: boolean;
  contact: boolean;
  blogPages: boolean;
  auth: boolean;
}

const MobileNavSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>({
    home: false,
    courses: false,
    blog: false,
    page: false,
    about: false,
    staff: false,
    event: false,
    contact: false,
    blogPages: false,
    auth: false,
  });

  // Define the function for handling dropdown toggle
  const handleDropdownToggle = (dropdownName: keyof DropdownState) => {
    setTimeout(() => {
      setIsDropdownOpen((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }, 100);
  };
  return (
    <nav className="mean-nav">
      <ul className="justify-content-center">
        <li className="tl-nav-item tl-dropdown">
          <a style={{ color: 'black'}} className={isDropdownOpen.home ? "dropdown-open" : ""}>
            Home{" "}
            <span 
              style={{color: "black"}}
              className={`inner-mean-expand ${
                isDropdownOpen.home ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("home")}
            >
              {isDropdownOpen.home ? "-" : "+"}
            </span>
          </a>
        </li>
        <li className="col-4 d-lg-block">
          <SubLanguage/>
          <Link to="/login">
            <Translatable text="Login" />
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default MobileNavSection;
