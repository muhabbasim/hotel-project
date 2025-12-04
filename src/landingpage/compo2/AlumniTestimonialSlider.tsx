import Translatable from "components/translatable/Translatable";
import { alumniImgList } from "landingpage/data/Data";
import { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined;
  autoplay: boolean;
  speed: number;
  arrows: boolean;
};

const alumniTextList = [
  {
    id: 1,
    text: "At GCAD, we transform technological ideas into scalable and profitable products through professional development and operation. Our goal is to prepare these ventures to attract strategic partnerships and investments, all within an exclusive business pathway focused on innovation, sustainability, and added value.",
    name: "Our Mission",
  },
  {
    id: 2,
    text: "To position GCAD as the leading Saudi platform for enabling technological innovation by developing and managing high-readiness tech projects that unlock promising investment opportunities in both local and global markets.",
    name: "Our Vision",
  },
  {
    id: 3,
    text: "GCAD stands out by offering market-ready tech projects developed through a unique end-to-end model that ensures innovation, scalability, and strategic investment opportunities across diverse sectors.",
    name: "Why Us?",
  },
];

const AlumniTestimonialSlider = () => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);

  useEffect(() => {
    const sliderSettings: SliderSettings = {
      slidesToShow: 1,
      asNavFor: imgNavRef.current as Slider,
      autoplay: true,
      speed: 1000,
      arrows: false,
    };
    setSliderSetting(sliderSettings);
  }, []);

  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined,
    autoplay: true,
    speed: 3000,
    arrows: false,
  });

  const testimonialImagesSettings = {
    slidesToShow: 1,
    draggable: false,
    arrows: false,
    swipe: false,
    fade: true,
    asNavFor: sliderRef.current as Slider,
    autoplay: true,
    speed: 1000,
  };

  useEffect(() => {
    if (sliderRef.current) {
      setSliderSetting((prevSettings) => ({
        ...prevSettings,
        asNavFor: imgNavRef.current as Slider,
      }));
    }
  }, []);

  return (
    <section className="tl-5-testimonial">
      <div className="container">
        <div className="tl-5-testimonial-heading d-flex justify-content-between align-items-center">
          <h2 className="tl-5-section-title"><Translatable text="GCAD competitive advantage"/></h2>
          <div className="tl-5-testimonial-slider-nav">
            <button
              className="tl-5-testimonial-slider-prev"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <i className="fa-light fa-angle-left"></i>
            </button>

            <button
              className="tl-5-testimonial-slider-next"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <i className="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>

      <Slider
        {...testimonialImagesSettings}
        ref={imgNavRef}
        className="tl-5-testimonial-img-slider"
      >
        {alumniImgList.map((item) => (
          <span className="tl-5-testimonial-img" key={item.id}>
            <img src={item.imgSrc} alt="Alumni Image" style={{height: 500}} />
          </span>
        ))}
      </Slider>

      <div className="container position-relative">
        <Slider
          {...sliderSettings}
          ref={sliderRef}
          className="tl-5-testimonial-slider"
        >
          {alumniTextList.map((item) => (
            <div className="slider-item" key={item.id}>
              <div className="tl-5-single-testimony">
                <h3>{item.id}</h3>

                <div className="tl-5-single-testimony-txt">
                  <div className="tl-5-alumni">
                    <h1 className="tl-5-alumni-namex"><Translatable text={item.name}/></h1>
                  </div>
                  <p><Translatable text={item.text}/></p>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AlumniTestimonialSlider;
