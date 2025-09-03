import React from "react";
interface CtaProps {
  style: string;
  lastWord: string;
  lastMsg: string;
}
const CtaSection3: React.FC<CtaProps> = ({ style, lastWord, lastMsg }) => {
  return (
    <div  className={`tl-7-cta ${style}`}>
      <div className="tl-7-cta-bg container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-4">
            <h2 className="tl-7-cta-title">
            تملك وعيش التجربة في السعودية بمرونة
            </h2>
          </div>

          <div className="col-xxl-5 col-md-7">
            <p className="tl-7-cta-descr">
            اختَر وحدتك اليوم وتمتّع بحق انتفاع آمن ومرن داخل السعودية—ابدأ خلال دقائق
            </p>
          </div>

          <div className="col-xxl-3 col-5 text-start text-md-end">
            <a href="#" className="tl-7-def-btn">
            ابدأ الطلب الآن 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection3;
