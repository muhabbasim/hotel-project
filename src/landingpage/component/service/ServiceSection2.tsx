import Translatable from "components/translatable/Translatable";

const ServiceSection2 = () => {
  return (
    <section className="tl-9-services tl-9-section-spacing bg-defaults">
      <div className="container">
        <div className="tl-9-section-heading">
          <div className="row gy-4 align-items-center">
            <div className="col-md-7">
              <h2
                className="tl-9-section-title service-section-2"
                data-text="Our Services"
              >
                <Translatable text={"خدمات البيع والتأجير في نظام الـ Time Share"}/>
              </h2>
            </div>

            {/* <div className="col-md-5 text-start text-md-end">
              <a href="#" className="tl-def-btn tl-9-def-btn">
                Free Consultation
              </a>
            </div> */}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
            <div className="tl-9-service">
              {/* <img
                className="tl-9-service-icon"
                src="assets/images/tl-9/service-1.png"
                alt="Icon"
              /> */}
              <h4 className="tl-9-service-title">
                <a href="#">إصدار وبيع الصكوك الإلكترونية</a>
              </h4>
              <p className="tl-9-service-descr">
                Lorem ipsum dolor consectetu adipescent maximus libero.
              </p>
              <a href="#" className="tl-long-arrow-btn">
                <span className="arrow"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
            <div className="tl-9-service">
              {/* <img
                className="tl-9-service-icon"
                src="assets/images/tl-9/service-4.png"
                alt="Icon"
              /> */}
              <h4 className="tl-9-service-title">
                <a href="#">التأجير الموثّق (Rental Service)</a>
              </h4>
              <p className="tl-9-service-descr">
                Lorem ipsum dolor consectetu adipescent maximus libero.
              </p>
              <a href="#" className="tl-long-arrow-btn">
                <span className="arrow"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
            <div className="tl-9-service">
              {/* <img
                className="tl-9-service-icon"
                src="assets/images/tl-9/service-2.png"
                alt="Icon"
              /> */}
              <h4 className="tl-9-service-title">
                <a href="#">إعادة البيع (Resale Service)</a>
              </h4>
              <p className="tl-9-service-descr">
                Lorem ipsum dolor consectetu adipescent maximus libero.
              </p>
              <a href="#" className="tl-long-arrow-btn">
                <span className="arrow"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
            <div className="tl-9-service">
              {/* <img
                className="tl-9-service-icon"
                src="assets/images/tl-9/service-3.png"
                alt="Icon"
              /> */}
              <h4 className="tl-9-service-title">
                <a href="#">التنازل أو الاستبدال (Transfer & Exchange)</a>
              </h4>
              <p className="tl-9-service-descr">
                Lorem ipsum dolor consectetu adipescent maximus libero.
              </p>
              <a href="#" className="tl-long-arrow-btn">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
