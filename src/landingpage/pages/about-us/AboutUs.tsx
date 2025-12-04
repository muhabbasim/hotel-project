import AboutUsComponent from "landingpage/compo2/AboutUsComponent";
import AlumniTestimonialSlider from "landingpage/compo2/AlumniTestimonialSlider";
import ConsultSection from "landingpage/compo2/ConsultSection";

export default function AboutUs() {
  return (
    <section className="tl-inner-courses pb-60 pt-140">
      <AboutUsComponent inner="tl-5-about-innerx"/>
      <AlumniTestimonialSlider />
      <ConsultSection padding="pt-120"/>
    </section>
  )
}
