import IllustratSection from "landingpage/component/IllustratSection";

type Props = {
  data: any;
  color?: string | undefined;
  cta?: boolean;
}

export default function CurrentFeatures({ data, color, cta }: Props) {
  return (
    <section className="container">
      
      {cta && <section style={{ backgroundColor: color }} className="tl-2-illustrator-cta pt-40 pb-40 pl-20 pr-20">
        <div className="">
          <h2 className="tl-2-illustrator-section-title">Here's how KGP can help your center</h2>
          <div className="text-center">
            <p className="tl-2-illustrator-cta-descr">
              There are many variations passages Lorem Ipsum available, but majority
              have suffered alteration in some form, by injected randomized.
            </p>
          </div>
          <a href="#" className="tl-2-illustrator-cta-btn">
            Apply Now
          </a>
        </div>
      </section>}

   

      <div className="tl-2-illu-features relative-container"> 
        { data?.features?.map((feature: any, i: any) => (
          <div className="" key={feature?.id}>
            <IllustratSection 
              header={feature?.header}
              title={feature?.title}
              desc={feature?.desc}
              img={feature?.img}
              features={feature.features}
              index={i}
              color={feature?.color}
            />
          </div>
        ))}

        <div className="tl-1-feature-shape">
          <img
            src="/src/assets/landing-images/shape/shape1.png"
            alt="Banner Image"
          />
        </div>
      </div>
    </section>
  )
}
