import { Link } from "react-router-dom";

const courseList = [
  {
    id: 0,
    price: "$53.00",
    title: "Silver Center Package",
    slug: "teaching-math-and-science-inquiry-based-approaches",
    lessons: 6,
    desc: "Save time and elevate the quality of care, teaching, and learning at your center! Includes center management, our industry-leading family communication app and FunShine Express Digital Curriculum",
    packages: [
      { backage_title: "KGP Center Management" },
      { backage_title: "KGP Learning powered by FunShine Digital Curriculum" },
    ],
    time: "8-10 AM",
    seat: 32,
  },
  {
    id: 1,
    price: "$45.00",
    title: "Gold Center Package",
    slug: "introduction-to-programming-with-javascript",
    lessons: 8,
    desc: "Empower your teachers and meet professional development requirements! All the benefits of our Silver Center Package PLUS KGP Academy (formerly HiMama Academy)",
    packages: [
      { backage_title: "KGP Center Management" },
      { backage_title: "KGP Academy" },
      { backage_title: "KGP Learning powered by FunShine Digital Curriculum" },
    ],
    time: "10-12 AM",
    seat: 40,
  },
  {
    id: 2,
    price: "$69.00",
    title: "Platinum Center Package",
    slug: "web-development-fundamentals-intro",
    lessons: 10,
    desc: "Take classroom learning experiences to the next level! The best value for your investment with all the benefits of our Gold Center Package PLUS a subscription to KGP Learning powered by FunShine Express curriculum kits shipped monthly to your door!",
    packages: [
      { backage_title: "KGP Center Management" },
      { backage_title: "KGP Academy" },
      { backage_title: "KGP Learning powered by FunShine Digital Curriculum" },
      { backage_title: "KGP Learning powered by FunShine Curriculum Kits" },
    ],
    time: "2-4 PM",
    seat: 25,
  },
  {
    id: 3,
    price: "$59.00",
    title: "Educator + Package",
    slug: "data-science-and-machine-learning-basics",
    lessons: 7,
    desc: "Effective center management, industry-leading family communication, and on-demand professional development. The best way to streamline center operations, support teachers and better attract and retain staff!",
    packages: [
      { backage_title: "KGP Center Management" },
      { backage_title: "KGP Academy" },
    ],
    time: "6-8 PM",
    seat: 50,
  },
  {
    id: 4,
    price: "$40.00",
    title: "Curriculum Package",
    slug: "advanced-art-and-creativity-workshop",
    lessons: 5,
    desc: "Transform your educational programming! Get the best of KGP Learning powered by FunShine Express - digital curriculum plus a subscription to curriculum kits shipped monthly to your door!",
    packages: [
      { backage_title: "KGP Learning powered by FunShine Digital Curriculum" },
      { backage_title: "KGP Learning powered by FunShine Curriculum Kits" },
    ],
    time: "4-6 PM",
    seat: 20,
  },
  {
    id: 5,
    price: "$75.00",
    title: "Family Childcare Package",
    slug: "advanced-outdoor-photography-masterclass",
    lessons: 12,
    desc: "Designed with one-classroom centers in mind! We’ve thought of everything you need to run a high-quality child care program so you don’t have to. This package comes at a tremendous value - billed monthly and exclusive to home providers",
    packages: [
      { backage_title: "KGP Center Management" },
      { backage_title: "KGP Learning powered by FunShine Digital Curriculum" },
      { backage_title: "KGP Learning powered by FunShine Curriculum Kits" },
    ],
    time: "10-12 AM",
    seat: 15,
  },
]

const CourseMainSection2 = () => {
  return (
    <section className="tl-inner-courses pb-60 pt-130 tl-11-bg">
      <div className="container">
       
        <div className="relative-container row g-3 g-xl-4">
          <>
            <div className="tl-1-course-shape">
              <img
                src="/src/assets/landing-images/shape/shape1.png"
                alt="Banner Image"
              />
            </div>

            {courseList.map((item) => {
              // console.log(item?.id)
              return (
                <div className="col-lg-4 col-sm-6" key={item.id}>
                  <div className="tl-2-blog tl-2-course">

                    <div className="tl-2-course-txt">
                      <h4 className={`tl-1-course-title-${item?.id} tl-2-course-title`}>
                        <Link to={`/course/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <p className="tl-2-course-descr">{item.desc}</p>

                      <Link to={`/contact`} style={{fontSize: '17px'}} className="tl-2-blog-btn pb-20">
                        Get plan
                      </Link>

                      <div className="tl-2-course-infos">
                        <div className="tl-2-course-infox">
                          <h6 className="tl-2-course-info-key">Include:</h6>
                        </div>
                        {
                          item?.packages?.map((subItem: any, i: any) => (
                            <div key={i} className="tl-2-course-info">
                              <div className="tl-2-course-info-icon">
                                <i className="fa-solid fa-check text-white"></i>
                              </div>
                              <h6 className="tl-2-course-info-value">{subItem?.backage_title}</h6>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        </div>

        <div className={`tl-7-cta`}>
          <div className="tl-7-course-bg container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xxl-4">
                <h2 className="tl-7-cta-title">
                  If you are not sure <span className="last-word">about your plan</span>
                </h2>
              </div>

              <div className="col-xxl-5 col-md-7">
                <p className="tl-7-cta-descr">
                  Morbi consectetur elementum purus mattis cursus purus vel metus
                  iaculis sagittis
                </p>
              </div>

              <div className="col-xxl-3 col-5 text-start text-md-end">
                <a href="#" className="tl-7-course-btn color-whitex">
                  FIND YOUR PLAN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMainSection2;
