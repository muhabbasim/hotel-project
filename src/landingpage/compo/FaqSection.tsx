import Translatable from "components/translatable/Translatable";
import AccordionSection from "landingpage/compo/AccordionSection";
import { faqList } from "landingpage/data/Data";

const FaqSection = () => {
  return (
    <section className="tl-8-faq tl-3-section-spacing">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-6">
            <div className="tl-8-faq-img">
              <img src="https://images.unsplash.com/photo-1639444184723-3a9a59029bc8?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FAQ image" />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6">
            <h2 className="tl-8-section-title">
            <Translatable text="Get quick answers to your questions"/>
            </h2>
            <AccordionSection array={faqList.slice(0, 4)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
