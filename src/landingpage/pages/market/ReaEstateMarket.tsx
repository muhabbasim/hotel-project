// import BannerSection10 from "../component/banner/BannerSection10";
// import ArticleSection2 from "../component/blog/ArticleSection2";
// import BlogSection7 from "../component/blog/BlogSection7";
// import FooterSection5 from "../component/footer/FooterSection5";
// import HeaderSection8 from "../component/header/HeaderSection8";
// import MembershipSlider from "../component/slider/MembershipSlider";
// import SocialSection from "../component/social/SocialSection";
// import TeacherSection4 from "../component/teacher/TeacherSection4";

import BannerSection10 from "landingpage/component/banner/BannerSection10";
import ArticleSection2 from "landingpage/component/blog/ArticleSection2";
import BlogSection7 from "landingpage/component/blog/BlogSection7";
import MembershipSlider from "landingpage/component/slider/MembershipSlider";
import SocialSection from "landingpage/component/social/SocialSection";
import TeacherSection4 from "landingpage/component/teacher/TeacherSection4";

const ReaEstateMarket = () => {
  return (
    <div className="home-11">
   
      <BannerSection10 />
      <BlogSection7 />
      <ArticleSection2 />
      <TeacherSection4 />
      <MembershipSlider
        style="tl-11-membership tl-11-section-spacing"
        slideStyle="tl-11-member"
        swiperStyle="tl-11-members"
      />
      <SocialSection
        sectionStyle="tl-11-socials"
        cardStyle="tl-4-social tl-11-social"
        btnStyle="tl-11-social-btn"
      />

    </div>
  );
};

export default ReaEstateMarket;
