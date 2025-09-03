import AllBlogSection6 from "./AllBlogSection6";
import AllBlogPagination from "./AllBlogPagination";
import { useTalimContext } from "../../context/HomeContext";

const BlogMain6 = () => {
  const { totalBlogPages3 } = useTalimContext();
  return (
    <>
      <AllBlogSection6 />
      <AllBlogPagination totalPage={totalBlogPages3} />
    </>
  );
};

export default BlogMain6;
