import ErrorSection from "landingpage/compo/ErrorSection";
import EventDetailSection from "landingpage/compo/EventDetailSection";
import { eventList } from "landingpage/data/Data";

const EventDetails = () => {
  const eventData = eventList.find((item) => item.slug === 'connecting-education-and-real-world-challenges');
  

  return (
    <>
      {eventData ? (
        <EventDetailSection eventData={eventData} />
      ) : (
        <ErrorSection type="event" />
      )}
    </>
  );
};

export default EventDetails;
