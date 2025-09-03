
const ChatSection = () => {


  return (
    <section className="tl-1-about tl-11-chat-bg">
      <div className="container">
        <div className="tl-1-about-shape">
          <img
            src="/src/assets/landing-images/shape/shape5.png"
            alt="Banner Image"
          />
        </div>
        <div className="row align-items-center tl-1-about-row">
         
          <div className="col-lg-6">
            <div className="tl-1-dashboard-img">
              <img
                src="/src/assets/landing-images/chat5.png"
                alt="Banner Image"
              />
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="tl-10-about-txt">
              <span>Family Engagement</span>
              <h2 className="tl-section-title tl-10-about-title">
              Connect {" "}
                <span className="last-word">with families</span>
              </h2>
              <p className="tl-10-about-descr tl-about-descr ">
              Share messages, photos and special moments as you communicate a daily story to families. From mass messages to the entire class, to private messages to parents
              </p>
              <a href="/feature/family_engagement" className="tl-def-btn-2 ">
                Read more{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default ChatSection;
