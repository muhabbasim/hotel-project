import Translatable from "components/translatable/Translatable";
import icon1 from "/src/assets/landing-images/tl-1/service-1.png"
import icon2 from "/src/assets/landing-images/tl-1/service-2.png"
import icon3 from "/src/assets/landing-images/tl-1/service-3.png"

const ServiceSection = () => {
  return (
    <section className="tl-1-services pt-120 pb-120">
      <div className="container">
        <div className="tl-1-section-heading">
          <h2 className="tl-1-section-title">
            <Translatable text="The Journey, Simplified"/>
          </h2>
        </div>

        <div className="row tl-1-services-row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="tl-1-service">
              <div className="tl-1-service-heading">
                <div className="tl-1-service-icon">
                  <img src={icon1} alt="Icon" />
                </div>

                <span className="tl-1-service-order-numb">01</span>
              </div>

              <h4 className="tl-1-service-title">
                <a href="/how-it-works/buyer"><Translatable text="I'm a Buyer"/></a>
              </h4>
              <p className="tl-1-service-descr">
                <Translatable text="Steps for purchase and purchase documentation through government systems and laws"/>
              </p>
              <a href="/how-it-works/buyer" className="tl-1-service-btn">
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="tl-1-service">
              <div className="tl-1-service-heading">
                <div className="tl-1-service-icon">
                  <img src={icon2} alt="Icon" />
                </div>

                <span className="tl-1-service-order-numb">02</span>
              </div>

              <h4 className="tl-1-service-title">
                <a href="/how-it-works/seller"><Translatable text="I'm a Seller"/></a>
              </h4>
              <p className="tl-1-service-descr">
                <Translatable text="Steps for registration, display, and unit division"/>
              </p>
              <a href="/how-it-works/seller" className="tl-1-service-btn">
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="tl-1-service">
              <div className="tl-1-service-heading">
                <div className="tl-1-service-icon">
                  <img src={icon3} alt="Icon" />
                </div>

                <span className="tl-1-service-order-numb">03</span>
              </div>

              <h4 className="tl-1-service-title">
                <a href="/how-it-works/technologies"><Translatable text="Technologies Used"/></a>
              </h4>
              <p className="tl-1-service-descr">
                <Translatable text="Technologies used for contract documentation and encryption (Utility Deeds)"/>
              </p>
              <a href="/how-it-works/technologies" className="tl-1-service-btn">
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
