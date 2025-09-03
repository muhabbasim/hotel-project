import AboutSection from "landingpage/component/about/AboutSection";
import AboutSection5 from "landingpage/component/about/AboutSection5";
import ChatSection from "landingpage/component/about/ChatSection";
import DashboardSection from "landingpage/component/about/DashboardSection";
import PlanLessons from "landingpage/component/about/PlanLessons";
import BannerSection11 from "landingpage/component/banner/BannerSection11";
import BannerSection4 from "landingpage/component/banner/BannerSection4";
import BlogSection8 from "landingpage/component/blog/BlogSection8";
import AcademicSection from "landingpage/component/campus/AcademicSection";
import SubjectSection from "landingpage/component/category/SubjectSection";
import CtaSection3 from "landingpage/component/cta/CtaSection3";
import CtaSection4 from "landingpage/component/cta/CtaSection4";
import FaqSection from "landingpage/component/faq/FaqSection";
import HeaderSection7 from "landingpage/component/header/HeaderSection7";
import ServiceSection from "landingpage/component/service/ServiceSection";
import ServiceSection2 from "landingpage/component/service/ServiceSection2";
import AlumniTestimonialSlider from "landingpage/component/slider/AlumniTestimonialSlider";
import SocialSection from "landingpage/component/social/SocialSection";
import TeacherSection5 from "landingpage/component/teacher/TeacherSection5";

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

      {/* <AlumniTestimonialSlider /> */}
      {/* <ServiceSection2 /> */}
      {/* <AboutSection /> */}
      {/* <SubjectSection /> */}
      {/* <DashboardSection /> */}
      {/* <ChatSection /> */}
      {/* <PlanLessons /> */}
      {/* <ServiceSection2/> */}
      {/* <TeacherSection5 /> */}
    </div>
  );
};

export default HomePage;
