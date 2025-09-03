import { blogList } from "landingpage/data/Data";
import { Link } from "react-router-dom";


const AllBlogSection6 = () => {
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
      <div className="container">
        <div className="row g-5 justify-content-center">
          {blogList.map((item) => (
            <div className="col-xl-4 col-lg-4 col-sm-6" key={item.id}>
              <div className="tl-6-latest-article">
                <div className="tl-6-latest-article-img">
                  <img src={item.imgSrc} alt="Article Image" />
                </div>

                <div className="tl-6-latest-article-txt">
                  <span className="tl-6-info-pill">{item.category}</span>
                  <h4 className="tl-6-latest-article-title tl-6-title-hover">
                    <Link to={`/blog/${item?.id}`}>{item.title}</Link>
                  </h4>
                  <ul className="tl-6-latest-article-infos">
                    <li>By {item.author}</li>
                    <li>{item.date}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogSection6;
