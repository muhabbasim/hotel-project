const PlanLessons = () => {

  return (
    <section className="tl-1-about tl-11-lesson-bg">
      
      <div className="container">
        <div className="tl-1-lesson-shape">
          <img
            src="/src/assets/landing-images/shape/shape4.png"
            alt="Banner Image"
          />
        </div>
        <div className="row align-items-center tl-1-about-row">

          <div className="col-lg-6 ">
            <div className="tl-10-about-txt">
              <span>Family Engagement</span>
              <h2 className="tl-section-title tl-10-about-title">
              Plan engaging{" "}
                <span className="last-word"> lessons</span>
              </h2>
              <p className="tl-10-about-descr tl-about-descr ">
                Receive research-based lesson plans and activities monthly, delivered to your door and in the app. State-aligned and powered by FunShine Express
              </p>
              <a href="/feature/engaging_lessons" className="tl-def-btn-2 ">
                Read more{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
             
          <div className="col-lg-6">
            <div className="tl-1-dashboard-img">
              <img
                src="/src/assets/landing-images/plan_lesson.png"
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanLessons;
