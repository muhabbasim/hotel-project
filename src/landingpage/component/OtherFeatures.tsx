
type Props = {
  data: any;
}

export default function OtherFeatures({ data }: Props) {
  return (
    <section className="relative-container">
      <div className="container tl-feature-bg">
        <div className="tl-14-section-heading ">
          <h2 className="tl-14-section-title">Get to know more about KGP</h2>
        </div>

        <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">

          {data?.map((item: any) => (
            <div className="col-xl-6 col-lg-10" key={item.id}>
              <div style={{ border: `4px solid ${item?.color}`}} className="tl-single-blog tl-14-blog ">
                <div className="tl-single-blog-img">
                  <img src={item.img} alt="Blog Thumbnail" />
                </div>

                <div className="tl-single-blog-txt tl-14-blog-txt">
                  <ul className="tl-11-latest-article-infos tl-14-blog-infos">
                    <li>KGP Feature</li>
                  </ul>
                  <h4 className="tl-single-blog-title">
                    <a href={`/feature/${item.id}`}>{item.title}</a>
                  </h4>
                  <a
                    className="tl-single-blog-btn"
                    href={`/feature/${item.id}`}
                  >
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
