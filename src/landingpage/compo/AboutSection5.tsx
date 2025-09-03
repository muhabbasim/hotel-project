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
                    نظام يتيح لك تملك حق الانتفاع بوحدة عقارية لفترة زمنية محددة كل عام—أسبوع، شهر، أو أكثر—بدل شراء كامل العقار
                    </p>
                </div>

                <div className="col-xxl-5 col-lg-6">
                    <blockquote style={{color: 'white'}} className="tl-5-about-txtx">
                        <p>في السعودية، يسمى Time Share بـ صكوك المنفعة: نظام رسمي يتيح لك الانتفاع بعقار سياحي مرخّص مع مزايا إضافية (التأشيرة، الإقامة، شمول الأسرة، مسارات خاصة)</p>
                        <a style={{color: "white"}} href="/event-details/fd">
                        قراءة المزيد 
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