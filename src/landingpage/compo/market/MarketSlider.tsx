import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import propertyList from "./propertyList";
import Translatable from "components/translatable/Translatable";
const MarketSlider = () => {
  const propertiesData = propertyList()
  
  return (
    <>
      <div className="tl-1-section-heading">
      <a href={`/market`} style={{ textDecoration: 'underline'}}>
        <h2 className="tl-1-section-title"><Translatable text='Property Market'/></h2>
      </a>

        <div className="tl-2-blogs-slider-nav" id="tl-1-courses-slider-nav">
          <button className="owl-prev">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <button className="owl-next">
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Swiper
        className="tl-1-courses-slider owl-carousel"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".owl-next",
          prevEl: ".owl-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          576: {
            spaceBetween: 15,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1200: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {propertiesData.slice(0, 6).map((item) => (
          <SwiperSlide className="tl-1-course" key={item.id}>
            <div className="tl-1-course-img">
              <img src={item.cover} alt="Course Image" />
              {/* <span className="tl-1-course-price">{item.pricePerSlot} SR</span> */}
              <div style={{ fontSize: '14px' }} className="tl-1-course-price d-flex align-items-center gap-2">
                <span className="">{item.pricePerSlot.toLocaleString()} SR</span>
                <small className="">Per slot</small>
              </div>
            </div>

            <div className="tl-1-course-txt">
              <span className="tl-1-course-author">
                Location: <span style={{ color: 'skyblue'}}>{item.location}</span>
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
                  <span className="tl-1-course-stat-icon p-1">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MarketSlider;
