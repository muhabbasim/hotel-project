import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const teacherList = [
  {
    id: 1,
    subtitle: "Learn Courses",
    title: "Best Instructors From Around The World",
    img: "/src/assets/landing-images/shape/shape1.png",
    color: "#eedada"
  },
  {
    id: 2,
    subtitle: "impact of team culture",
    title: "Exploring the impact of team culture in childcare",
    img: "/src/assets/landing-images/shape/shape2.png",
    color: "#e1eeda"
  },
  {
    id: 4,
    subtitle: "Learn Courses",
    title: "Best Instructors From Around The World",
    img: "/src/assets/landing-images/shape/shape1.png",
    color: "#eedada"
  },
]
const TeacherSection5 = () => {
  return (
    <section className="tl-12-mentor tl-11-section-spacing">
      <div className="container">
        <div className="tl-12-section-heading tl-12-courses-heading">
          <h2 className="tl-12-section-title">Explore Our Courses For Teachers</h2>

          <div className="tl-12-courses-heading-right d-flex align-items-end align-items-md-center">
            <div
              className="tl-12-courses-slider-pagination"
              id="tl-12-mentor-slider-pagination"
            ></div>
            <div className="tl-12-courses-slider-nav">
              <button
                className="tl-12-courses-slider-prev"
                id="tl-12-mentor-slider-prev"
              >
                <i className="fa-regular fa-arrow-left-long"></i>
              </button>
              <button
                className="tl-12-courses-slider-next"
                id="tl-12-mentor-slider-next"
              >
                <i className="fa-regular fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          className="tl-12-courses-slider swiper"
          id="tl-12-mentor-slider"
          slidesPerView={2}
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          pagination={{
            el: "#tl-12-mentor-slider-pagination",
            type: "fraction",
          }}
          navigation={{
            nextEl: "#tl-12-mentor-slider-next",
            prevEl: "#tl-12-mentor-slider-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {teacherList?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tl-12-single-mentor">
                <div className="">
                  <div className="tl-12-cta-banner">
                    <div className="tl-12-cta-banner-txt">
                      <span className="tl-12-cta-banner-sub-title">
                        {item.subtitle}
                      </span>
                      <h4 className="tl-12-cta-banner-title">
                        {item.title}
                      </h4>
                      <a href="#" className="tl-def-btn">
                        Read More
                      </a>
                    </div>

                    <div className="tl-12-cta-banner-img">
                      <img src={item?.img} alt="Person" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeacherSection5;

