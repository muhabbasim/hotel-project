import Translatable from "components/translatable/Translatable";
import React from "react";
interface CtaProps {
  style?: string;
  lastWord?: string;
  lastMsg?: string;
}
const CtaSection3: React.FC<CtaProps> = ({ style }) => {
  return (
    <div  className={`tl-7-cta ${style}`}>
      <div className="tl-7-cta-bg container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-4">
            <h2 className="tl-7-cta-title">
              
            <Translatable text={"Own and experience life in Saudi Arabia with flexibility"}/>
            </h2>
          </div>

          <div className="col-xxl-5 col-md-7">
            <p className="tl-7-cta-descr">
            <Translatable text={"Choose your unit today and enjoy a secure and flexible right of use within Saudi Arabia—get started in minutes"}/>
            </p>
          </div>

          <div className="col-xxl-3 col-5 text-start text-md-end">
            <a href="#" className="tl-7-def-btn">
              <Translatable text={"Start your application now"}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection3;
