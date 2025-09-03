import { Link } from "react-router-dom";

const DashboardSection = () => {

  return (
    <section className="tl-1-about tl-11-dashboar-bg">
      <div className="container">
        <div className="row align-items-center tl-1-about-row">
    
          <div className="col-lg-6 ">
            <div className="tl-10-about-txt">
              <span>Center Management</span>
              <h2 className="tl-section-title tl-10-about-title">
              Streamline {" "}
                <span className="last-word">admin work</span>
              </h2>
              <p className="tl-10-about-descr tl-about-descr ">
              Manage staff, review reports, track attendance, and manage registrations. Your administrative tasks, billing, and payments have never been easier
              </p>
              <Link to="/feature/center_management" className="tl-def-btn-2 ">
                Read more{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tl-1-dashboard-img">
              <img
                  src="/src/assets/landing-images/dashboard-img.png"
                alt="Banner Image"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardSection;
