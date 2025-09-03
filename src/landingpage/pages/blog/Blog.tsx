import AllBlogPagination from "landingpage/component/blog/AllBlogPagination";
import AllBlogSection6 from "landingpage/component/blog/AllBlogSection6";
import BreadcrumbSection from "landingpage/component/breadcrumb/BreadcrumbSection";

const Blog = () => {
  return (
    <>
      <BreadcrumbSection 
        title="Browse Articles" 
        style="tl-breadcrumb-2" 
        subtitle="Join us as we discuss early childhood education industry with experts!" 
      />
      <AllBlogSection6 />
      {/* <AllBlogPagination totalPage={totalBlogPages3} /> */}
    </>
  );
};

export default Blog;
