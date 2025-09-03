const ServiceSection = () => {
  return (
    <section className="tl-1-services pt-120 pb-120">
      <div className="container">
        <div className="tl-1-section-heading">
          <h2 className="tl-1-section-title">
          خطوات الحصول على الصك 
          </h2>
        </div>

        <div className="row tl-1-services-row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="tl-1-service">
              <div className="tl-1-service-heading">
                <div className="tl-1-service-icon">
                  <img src="/src/assets/landing-images/tl-1/service-1.png" alt="Icon" />
                </div>

                <span className="tl-1-service-order-numb">01</span>
              </div>

              <h4 className="tl-1-service-title">
                <a href="#">تعبئة البيانات عبر نموذج إلكتروني</a>
              </h4>
              <p className="tl-1-service-descr">
              مرونة، تكلفة أقل، تملك جزئي، إمكانية التنازل  
              </p>
              <a href="#" className="tl-1-service-btn">
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="tl-1-service">
              <div className="tl-1-service-heading">
                <div className="tl-1-service-icon">
                  <img src="/src/assets/landing-images/tl-1/service-2.png" alt="Icon" />
                </div>

                <span className="tl-1-service-order-numb">02</span>
              </div>

              <h4 className="tl-1-service-title">
                <a href="#">اختيار الوحدة والفترة الزمنية</a>
              </h4>
              <p className="tl-1-service-descr">
              إقامة بدون كفيل 
              </p>
              <a href="/units-market" className="tl-1-service-btn">
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="tl-1-service">
              <div className="tl-1-service-heading">
                <div className="tl-1-service-icon">
                  <img src="/src/assets/landing-images/tl-1/service-3.png" alt="Icon" />
                </div>

                <span className="tl-1-service-order-numb">03</span>
              </div>

              <h4 className="tl-1-service-title">
                <a href="#">إصدار الاجازة الإلكترونية</a>
              </h4>
              <p className="tl-1-service-descr">
              حرية الاستخدام: إقامة – تأجير – تنازل – استبدال.
              </p>
              <a href="#" className="tl-1-service-btn">
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
