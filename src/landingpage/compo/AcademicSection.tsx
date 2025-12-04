import Translatable from "components/translatable/Translatable";

const AcademicSection = () => {
  return (
    <section className="tl-5-academic">
      <div className="container">
        <h2 className="tl-5-section-title mtm-15"><Translatable text="System Advantages"/></h2>

        <div className="row g-lg-4 g-3">
          <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
            <div className="tl-5-single-academic">
              <div className="tl-5-single-academic-img">
                <img
                  src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Academic Image"
                />

                <div className="tl-5-single-academic-txt">
                  <h5 className="tl-5-single-academic-title">
                  <a href="#"><Translatable text="Flexibility, Lower Cost"/></a>
                  </h5>
                  <a href="#">
                 <Translatable text="Read More"/><i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
            <div className="tl-5-single-academic tl-5-single-academic-2">
              <div className="tl-5-single-academic-img">
                <img
                  src="https://images.unsplash.com/photo-1611024847487-e26177381a3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Academic Image"
                />

                <div className="tl-5-single-academic-txt">
                  <h5 className="tl-5-single-academic-title">
                    <Translatable text="Entry Visa for You and Your Family"/>
                  </h5>
                  <a href="#">
                   <Translatable text="Read More"/><i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
            <div className="tl-5-single-academic tl-5-single-academic-3">
              <div className="tl-5-single-academic-img">
                <img
                  src="https://images.unsplash.com/photo-1738074413201-7a445274b4c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Academic Image"
                />

                <div className="tl-5-single-academic-txt">
                  <h5 className="tl-5-single-academic-title"> 
                  <Translatable text="Residency Freedom"/>

                  </h5>
                  <a href="#">
                    <Translatable text="Read More"/><i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
            <div className="tl-5-single-academic tl-5-single-academic-4">
              <div className="tl-5-single-academic-img">
                <img
                  src="https://mediaassets.cbre.com/-/media/project/cbre/shared-site/menat/saudi-arabia/articles/ksa-q4-2024/ksaq42024_report_image.png"
                  alt="Academic Image"
                />

                <div className="tl-5-single-academic-txt">
                  <h5 className="tl-5-single-academic-title">
                    <Translatable text="Residency Freedom"/>
                  </h5>
                  <a href="#">
                    <Translatable text="Read More"/><i className="fa-regular fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
