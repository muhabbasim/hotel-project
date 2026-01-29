import Translatable from "components/translatable/Translatable";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bgImg from '/src/assets/images/midar-hero-bg.webp'


const BannerSection4 = () => {
  const slideData = [

    
    // {
    //   subTitle: "Time Share in Saudi Arabia",
    //   title: "نظام عالمي للتملك الجزئي… بنسخة سعودية",
    //   description:"استمتع بإقامة مرنة في السعودية عبر صكوك المنفعة، النسخة المحلية لنظام الـ Time Share العالمي، المعتمدة رسميًا من وزارة السياحة، مع حماية قانونية وضمانات مالية"
    // },
    // {
    //   subTitle: "Time Share in Saudi Arabia",
    //   title: "نظام عالمي للتملك الجزئي… بنسخة سعودية",
    //   description:"استمتع بإقامة مرنة في السعودية عبر صكوك المنفعة، النسخة المحلية لنظام الـ Time Share العالمي، المعتمدة رسميًا من وزارة السياحة، مع حماية قانونية وضمانات مالية"
    // },
    {
      subTitle: "Time Share in Saudi Arabia",
      title: "نظام عالمي للتملك الجزئي… بنسخة سعودية",
      description:"استمتع بإقامة مرنة في السعودية عبر صكوك المنفعة، النسخة المحلية لنظام الـ Time Share العالمي، المعتمدة رسميًا من وزارة السياحة، مع حماية قانونية وضمانات مالية"
    },
  ];

  return (
    <section style={{
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }} className="tl-4-banner">
      <Swiper
        className="tl-4-banner-slider owl-carousel"
        loop={true}
        autoplay={true}
        pagination={{
          el: ".tl-4-banner-slider-dots",
          bulletClass: "owl-dot",
          bulletElement: "button",
          bulletActiveClass: "active",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`tl-4-banner-slide slide-${index + 1} bg-defaults`}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                  <div className="tl-4-banner-txt">
                    <h6 className="tl-4-banner-sub-title">
                      <Translatable text={slide.subTitle}/>
                    </h6>
                    <h1 className="tl-4-banner-title" 
                    >
                      <Translatable text={slide.title}/>
                    </h1>
                    <div 
                      style={{
                        backgroundColor: '#0000006c',
                        padding: "15px",
                        borderRadius: '10px',
                      }}

                    >
                      <p style={{ marginBottom: '10px'}} className="tl-4-banner-descr">
                        <Translatable text={slide.description}/>
                      </p>
                    </div>
                    <a style={{ marginTop: '20px'}} href="#" className="tl-4-banner-btn">
                      <Translatable text={"Start Now"}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tl-4-banner-slider-dots"></div>
    </section>
  );
};

export default BannerSection4;
