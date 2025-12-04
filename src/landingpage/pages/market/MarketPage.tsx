import propertyList from "landingpage/compo/market/propertyList";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const MarketPage = () => {
  const propertiesData = propertyList()

  return (
    <section className="tl-inner-courses pb-60 pt-130">
      <div className="container">
        <div className="row g-3 g-xl-4">
          {propertiesData.map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <div className="tl-1-course" key={item.id}>
                <div className="tl-1-course-img">
                  <img src={item.cover} alt="Course Image" />
                  <div style={{ fontSize: '14px' }} className="tl-1-course-price d-flex align-items-center gap-2">
                    <span className="">{item.pricePerSlot.toLocaleString()} SR</span>
                    <small className="">Per slot</small>
                  </div>
                </div>

                <div className="tl-1-course-txt">
                  <span className="tl-1-course-author">
                    Location: <a href="#">{item.location}</a>
                  </span>
                  <h4 className="tl-1-course-title">
                    <Link to={`/prop-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  <div className="tl-1-course-stats">
                    <div className="tl-1-course-stat">
                      <span className="tl-1-course-stat-icon">
                        <i className="fa-regular fa-book-blank"></i>
                      </span>
                      <span className="tl-1-course-stat-txt">
                        {item.deedNumber} رقم الصك
                      </span>
                    </div>

                    <div className="tl-1-course-stat">
                      <span className="tl-1-course-stat-icon">
                        <i className="fa-regular fa-user-group"></i>
                      </span>
                      <span className="tl-1-course-stat-txt">
                      <Badge bg={item.regulatoryStatus === 'approved' ? 'success' : 'warning'} className="mb-2">
                        {item.regulatoryStatus === 'approved' ? 'معتمد' : 'قيد المراجعة'}
                      </Badge>
                        {/* {item.regulatoryStatus} */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPage;
