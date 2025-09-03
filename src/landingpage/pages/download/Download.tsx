import Partner from 'landingpage/component/Partner'
import downloadImg from '/src/assets/landing-images/download.png'
import { kgpFeatures } from '../features/FeaturePage'
import OtherFeatures from 'landingpage/component/OtherFeatures'

export default function Download() {
  return (
    <section className="container tl-2-users-cta mt-100 pt-40 pb-40 pl-20 pr-20">
      <div className="">
        <div className="text-center">
          <h2 className="tl-2-users-section-title ">
            Download Your Childcare App
            for Android and iOS (iPhone & iPad)
          </h2>
        </div>
        <div className="text-center">
          <p className="tl-2-users-cta-descr pb-20">
            With over 25,000 ratings and reviews, Lillio is used and loved by thousands of childcare centers just like yours.
          </p>
        </div>
      </div>

      <div className="download-app">
        <div className="img-container">
          <img
            src="https://images.ctfassets.net/x4nvfpejxuu4/7c78NwE5CvKMFvZeIM8Mh8/d0bf15c4c6bb592c201a3b635d057647/Component_20_____1.svg"
            alt="Banner Image"
          />
        </div>
        <div className="img-container">
          <img
            src="https://images.ctfassets.net/x4nvfpejxuu4/2ZdI54Z5wQovM4yd9t0Sbd/cd10ef30d651a8714d3847bc679babf7/Group_1218.svg"
            alt="Banner Image"
          />
        </div>
      </div>

      <div className="">
        <div className="tl-1-download-img">
          <img
            src="/src/assets/landing-images/download.png"
            alt="Banner Image"
          />
        </div>
      </div>
        
      <div className="tl-2-users-cta pt-40 pb-40 pl-20 pr-20">
        <div className="">
          <div className="text-center">
            <h2 className="tl-2-users-section-title ">Join the Lillio Fam and See What the Buzz is All About</h2>
          </div>
          <div className="text-center">
            <p className="tl-2-users-cta-descr">
              Our childcare app is available for download on both iOS and Android devices. Download our app by using the links below
            </p>
          </div>
        </div>
      </div>

      <OtherFeatures data={kgpFeatures}/>

    </section>
  )
}
