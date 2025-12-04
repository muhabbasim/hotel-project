import Translatable from 'components/translatable/Translatable';
import React from 'react'
interface Props {
    inner: string;
}
const AboutSection5:React.FC<Props> = ({inner}) => {
  return (
    <section style={{ backgroundColor: '#01816D' }} className={`tl-5-about ${inner}`}>
        <div className="container">
            <div className="row gy-4 justify-content-between">
                <div className="col-xxl-5 col-lg-6">
                    <p style={{color: 'white'}} className="tl-5-about-dialogue">
                        <Translatable text="A system that allows you to own the right of usufruct to a real estate unit for a specific period each year—a week, month, or more—instead of purchasing the entire property"/>
                    </p>
                </div>

                <div className="col-xxl-5 col-lg-6">
                    <blockquote style={{color: 'white'}} className="tl-5-about-txtx">
                        <p style={{fontSize: 20}}>
                        <Translatable text="In Saudi Arabia, Time Share is officially called 'Utility Deeds': a formal system that allows you to benefit from a licensed tourist property with additional advantages (visa, residency, family inclusion, special pathways)"/>

                        </p>
                        <a style={{color: "white"}} href="/regulations">
                            <Translatable text="Read more"/>
                        <i className="fa-regular fa-arrow-right"></i>
                  </a>
                    </blockquote>
                </div>
            </div>


            <div className="tl-5-about-imgx">
                {/* <img src="https://images.unsplash.com/photo-1549474873-365833f871bc?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Students"/> */}
            </div>
        </div>
    </section>
  )
}

export default AboutSection5