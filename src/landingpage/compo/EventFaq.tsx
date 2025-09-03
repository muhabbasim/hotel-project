import AccordionSection from "landingpage/compo/AccordionSection";
import { faqList } from "landingpage/data/Data";

const EventFaq = () => {
  return (
    <div className="tl-event-details-faq tl-event-details-area">
      <h3 className="tl-event-details-area-title">FAQ about this event</h3>

      <AccordionSection array={faqList.slice(0, 3)} />
    </div>
  );
};

export default EventFaq;
