import BlogDetailSection from "landingpage/component/blog/BlogDetailSection";
import { blogList } from "landingpage/data/Data";
import { useParams } from "react-router-dom";


const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const blogIdNum = Number(blogId)
  const blogData = blogList.find((item) => item.id === blogIdNum);

  return (
    <>
      {blogData && (
        <BlogDetailSection blogData={blogData} />
      )}
    </>
  );
};

export default BlogDetailsPage;
