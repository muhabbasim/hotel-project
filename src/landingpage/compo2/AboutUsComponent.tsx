import React from 'react'
import logoIcon from '/src/assets/images/gcadlogo.png'
import Translatable from 'components/translatable/Translatable';



interface Props {
    inner: string;
}
const AboutUsComponent:React.FC<Props> = ({inner}) => {
  return (
    <section className={`tl-5-about ${inner}`}>
        <div className="container">
            <div className="row gy-4 justify-content-between">
                <div className="col-xxl-5 col-lg-6">
                    <div  className="tl-5-consult-img">
                        <img style={{maxHeight: 150}} src={logoIcon} alt="Students"/>
                    </div>
                </div>

                <div className="col-xxl-5 col-lg-6">
                    <p className="tl-5-about-dialogue">
                        Campus life offers opportunities
                    </p>
                    <blockquote className="tl-5-about-txt">
                        <p>
                            <Translatable text="A Saudi company working to provide services to logistics sector service providers as a technical consultant through its digital lab."/>
                        </p>

                        <a href='https://www.gcad.ai' target='_blank' className="tl-5-about-author-name">
                            Gcad website
                        </a>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsComponent