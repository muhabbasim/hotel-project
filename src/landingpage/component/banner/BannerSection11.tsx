import Translatable from 'components/translatable/Translatable';
import { motion } from 'framer-motion';
import useConfig from 'hooks/useConfig';


const BannerSection11 = () => {

  const { themeDirection } = useConfig();
  const rtl = themeDirection === 'rtl';

  return (
    <section className="tl-12-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="tl-12-banner-txt">
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                { rtl ? (
                  <h1 className="tl-12-banner-title">
                    منصة الحضانة توفر الأساس لرعاية {" "}
                    <span className="last-word">عالية الجودة</span>
                  </h1>
                  ) : (
                  <h1 className="tl-12-banner-title">
                    kgp provides foundation for {" "}
                    <span className="last-word">excellent childcare</span>
                  </h1> 
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <p className="tl-12-banner-descr pt-10">
                  <Translatable text="KGP delivers exceptional childcare by focusing on quality, safety, and child development, ensuring children receive the best care in a nurturing environment"/>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <div className="tl-12-banner-btns">
                  <a href="#" className="tl-def-btn">
                    <Translatable text="Get your service"/>
                     {" "}
                    {rtl? 
                      <i className="fa-regular fa-arrow-left-long"></i>
                      : 
                      <i className="fa-regular fa-arrow-right-long"></i>
                    }
                  </a>
                  <a href="#" className="tl-def-btn tl-12-banner-btn-2">
                    <Translatable text="KGP Solutions"/>
                    {" "}
                     {rtl? 
                      <i className="fa-regular fa-arrow-left-long"></i>
                      : 
                      <i className="fa-regular fa-arrow-right-long"></i>
                    }
                  </a>
                </div>
              </motion.div>

              <ul className="tl-12-banner-features">
                <li className="tl-12-banner-feature">
                  <img src="/src/assets/landing-images/tl-12/feat-1.png" alt="Icon" />
                  <span className="tl-12-feature-name">
                    <Translatable text="Viual Engagements"/>
                    
                  </span>
                </li>
                <li className="tl-12-banner-feature">
                  <img src="/src/assets/landing-images/tl-12/feat-2.png" alt="Icon" />
                  <span className="tl-12-feature-name">
                    <Translatable text="Professional Development"/>
                    
                  </span>
                </li>
                <li className="tl-12-banner-feature">
                  <img src="/src/assets/landing-images/tl-12/feat-3.png" alt="Icon" />
                  <span className="tl-12-feature-name">
                    <Translatable text="Center Management"/>
                    
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="tl-12-banner-img">
              <motion.div
                initial={{ opacity: 0, translateX: 550 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <img
                  src="/src/assets/landing-images/hero-img2.png"
                  alt="Banner image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BannerSection11;


