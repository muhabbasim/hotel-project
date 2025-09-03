import { useEffect, useState } from "react";
import shape1 from '/src/assets/landing-images/shape/shape1.png'
import shape2 from '/src/assets/landing-images/shape/shape2.png'
import shape3 from '/src/assets/landing-images/shape/shape3.png'
import shape4 from '/src/assets/landing-images/shape/shape4.png'

const images = [
  shape1,
  shape2,
  shape3,
  shape4
];

const AboutSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out the current image

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fading in the new image
      }, 500); // Time for fade out

    }, 4000); // Change image every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);


  return (
    <section className="tl-1-about pt-80 pb-80">
      <div className="container">
        <div className="row align-items-center tl-1-about-row">
          <div className="col-lg-6">
            <div className="tl-1-about-img">
              <img
                // src="/src/assets/landing-images/about-bg2.png"
                //  src="/src/assets/landing-images/shape/shape4.png"
                 src={images[currentIndex]}
                alt="Banner Image"
                className={`tl-1-about-main-img slider-image ${fade ? 'fade-in' : 'fade-out'}`}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tl-10-about-txt">
              <h2 className="tl-section-title tl-10-about-title">
                The all-in-one early 
                <span className="last-word">Education</span>solution{" "}
              </h2>
              <p className="tl-10-about-descr tl-about-descr">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected randomised words which don't look even slightly
                believable.
              </p>
              <a href="#" className="tl-def-btn-2 ">
                Read more about us{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="tl-1-stats tl-11-bg2">
          <div className="tl-1-stat">
            <span style={{ color: '#00a4a6'}}  className="tl-1-stat-num">#1</span>
            <h6 className="tl-1-stat-name">rated childcare
            solution</h6>
          </div>
      
          <div className="tl-1-stat">
            <span style={{ color: '#f66363'}} className="tl-1-stat-num">36+</span>
            <h6 className="tl-1-stat-name">moments shared
            with families</h6>
          </div>
          <div className="tl-1-stat">
            <span style={{ color: '#f7c800'}} className="tl-1-stat-num">8k+</span>
            <h6 className="tl-1-stat-name">curated curriculum
            kits delivered</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
