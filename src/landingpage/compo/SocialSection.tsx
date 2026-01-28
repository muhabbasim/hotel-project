import Translatable from "components/translatable/Translatable";
import { UpdatedServices } from "../data/Data";

type Props = {
  sectionStyle: string;
  cardStyle: string;
  btnStyle?: string;
};
const SocialSection = ({ sectionStyle, cardStyle, btnStyle }: Props) => {
  return (
    <section className={`tl-4-socials ${sectionStyle}`}>
      <div className="row g-0">
        {UpdatedServices.slice(0,4).map((socialMedia, index) => (
          <div key={index} className="col-xl-3 col-md-6 col-12">
            <div className={cardStyle}>
              <div className="tl-4-social-txt">
                <h2 className="tl-4-social-title"><Translatable text={socialMedia.title}/></h2>
                <div className="tl-4-social-hidden-content">
                  <p className="tl-4-social-descr"><Translatable text={socialMedia.fullDesc}/></p>
                  {/* <a href="#" className={`tl-4-social-btn ${btnStyle}`}>
                    <Translatable text={'learn more'}/>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;