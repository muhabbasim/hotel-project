import { Link } from "react-router-dom";

type Props = {
  header:string,
  title: string,
  desc?: string,
  img: string,
  features: any,
  href?: string,
  index?: any,
  color?: any,
}

const IllustratSection = ({ header, title, desc, img, features, index, color }: Props) => {
  console.log(color)

  return (
    <section className="tl-1-about tl-11-illustrator-bg">
      <div className="container">
        <div className={`${index % 2 === 0 && "flex-row-reverse"} row align-items-center tl-1-about-row`}>
    
          <div className="col-lg-6">
            <div className="tl-10-about-txt">
              <span>{header}</span>
              <h2 className="tl-section-title tl-10-about-title">
                {title}
              </h2>
              <p className="tl-10-about-descr tl-about-descr ">
              {desc}
              </p>

              <div className="tl-2-illustrator-feature">
                {features.map((feature: any, i: any) => (
                  <div key={i} className="tl-2-illustrator-info">
                    <div style={{ backgroundColor: color }} className="tl-2-illustrator-info-icon">
                      <i className="fa-solid fa-check text-white"></i>
                    </div>
                    <h6 className="tl-2-course-info-value">{feature?.text}</h6>
                  </div>
                ))}
              </div>
              {/* <Link to="/feature" className="tl-def-btn-2 ">
                Read more{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </Link> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tl-1-dashboard-img">
              <img
                src={img}
                alt="Illustration Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IllustratSection;
