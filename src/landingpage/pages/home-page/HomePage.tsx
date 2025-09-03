
import AboutSection5 from "landingpage/compo/AboutSection5";
import BlogSection8 from "landingpage/compo/BlogSection8";
import BannerSection4 from "landingpage/compo/BannerSection4";
import ServiceSection from "landingpage/compo/ServiceSection";
import SocialSection from "landingpage/compo/SocialSection";
import CtaSection3 from "landingpage/compo/CtaSection3";
import AcademicSection from "landingpage/compo/AcademicSection";
import FaqSection from "landingpage/compo/FaqSection";

const HomePage = () => {
  return (
    <div className="home-12">
      <BannerSection4 />
      <ServiceSection />
      <AboutSection5 inner="" />
      <AcademicSection />
      <SocialSection sectionStyle="bg-defaults" cardStyle="tl-4-social" />
      <FaqSection />
      <CtaSection3 style="" lastWord="Dance?" lastMsg="Now and Let's Move!" />
      <BlogSection8 />
    </div>
  );
};

export default HomePage;
