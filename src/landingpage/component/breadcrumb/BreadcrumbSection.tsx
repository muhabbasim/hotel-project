import React from "react";
import { Link } from "react-router-dom";
interface BreadcrumbSectionProps {
  title: string;
  subtitle?: string;
  style: string;
}
const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  style,
  subtitle,
}) => {

  return (
    <div className={`tl-breadcrumb ${style}x pt-90 pb-90`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="row align-items-end">
              <div className="banner-txt">
                <h1 className="tl-breadcrumb-title">{title}</h1>
              </div>
              <div className="banner-txt">
                <h1 className="tl-breadcrumb-subtitle">{subtitle}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ul className="tl-breadcrumb-nav d-flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current-page">
                <span className="dvdr">
                  <i className="icofont-simple-right"></i>
                </span>
                <span>
                  <a href="#">{title}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
