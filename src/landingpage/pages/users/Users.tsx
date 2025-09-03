import { useParams } from "react-router";
import directorsImg from "/src/assets/landing-images/directors.png"
import teachersImg from "/src/assets/landing-images/teacher2.png"
import parentsImg from "/src/assets/landing-images/parents.png"
import Partner from "landingpage/component/Partner";
import OtherFeatures from "landingpage/component/OtherFeatures";
import CurrentFeatures from "landingpage/component/CurrentFeatures";
import { upperCase } from "lodash";
import { kgpFeatures } from "../features/FeaturePage";

const userTypeData = [
  {
    id: 'directors',
    title: "The building blocks for high-quality childcare, all in one place",
    subtitle: "KGP provides everything you need to build a successful childcare program: program management, family engagement and communication, professional development opportunities, and impactful resources",
    text: "The program every parent wants for their child!",
    subtext: "With the insights you need and the high-quality resources your centers deserve, KGP helps ensure that the care and learning your program provides is changing children’s lives and supporting the next generation of young learners",
    color: '#36a4a6',
    img: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      {
        id: 1,
        header: "Family Engagement",
        title: "Delight families from day one",
        img: directorsImg,
        color: '#36a4a6',
        features: [
          {
            text: "Daily childcare reports help family members feel informed, connected, and in-the-know"
          },
          {
            text: "Digital payment options let families pay their tuition automatically and from anywhere, avoiding late fees and saving you time"
          },
          {
            text: "Online registration and waitlist features help families start off on the right foot"
          },
        ]
      },
      {
        id: 2,
        header: "Professional Development",
        title: "impact of high-quality early education",
        img: directorsImg,
        color: '#f7c800',
        features: [
          {
            text: "Early learning curriculum from Funshine Express provides engaging learning experiences that align to state standards and promote positive outcomes"
          },
          {
            text: "Observation and assessment tools help teachers create reports and daily sheets tagged with domains, skills, and indicators"
          },
          {
            text: "On-demand professional development courses offer opportunities for building the knowledge and skills of your staff"
          },
        ]
      },
      {
        id: 3,
        header: "Center Management",
        title: "Streamline center management and operations",
        img: directorsImg,
        color: '#f56363',
        features: [
          {
            text: "Center updates help you manage check-in and check-out, teacher-child ratios, and much more"
          },
          {
            text: "Manage your center finances, including subsidies, invoicing, and more, all in one place with KGP"
          },
          {
            text: "Administrative features let you view attendance records, staff time logs, health reports, invoices, and ensure that everything your center needs is all in one place"
          },
        ]
      },
    ]
  },
  {
    id: 'teachers',
    title: "While you support children, let us support you!",
    subtitle: "KGP will save you time and help you make more meaningful connections - with families, with children, and with why you chose this work to begin with",
    text: "Tools and support for every aspect of your day",
    subtext: "KGP helps early educators deliver more joyful, meaningful caregiving experiences. Learn more about some of our most-loved features below",
    color: '#f7c800',
    img: "https://plus.unsplash.com/premium_photo-1683140697750-8c047293b20d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      {
        id: 1,
        header: "Digital daily sheets",
        title: "Keep families informed",
        img: teachersImg,
        color: '#36a4a6',
        features: [
          {
            text: "Help families stay in-the-know about the most important parts of their child’s day in care"
          },
          {
            text: "Easily capture, record, and share details of a child’s development and progress"
          },
          {
            text: "Save hours on paperwork with customizable, easy-to-build daily reports"
          },
          {
            text: "Ensure families feel connected, involved, and never missing a moment–even while they’re at work"
          },
        ]
      },
      {
        id: 13,
        header: "Direct Messaging",
        title: "Delight families and improve relationships",
        img: teachersImg,
        color: '#f7c800',
        features: [
          {
            text: "Keep families in the loop with instantly shareable photos and direct messaging capabilities"
          },
          {
            text: "Encourage quick, easy two-way communication and information sharing"
          },
          {
            text: "Build strong relationships with families and create that essential bridge between school and home"
          },
          {
            text: "Easily and quickly communicate updates, schedule changes, or requests–no more papers getting lost in backpacks"
          },
        ]
      },
      {
        id: 14,
        header: "Lesson planner",
        title: "Deliver meaningful learning experiences seamlessly",
        img: teachersImg,
        color: '#f56363',
        features: [
          {
            text: "Save hours each week with ready-to-use, pre-populated KGP Learning lesson plans, featuring engaging, theme-based activities"
          },
          {
            text: "Take the guesswork out of providing developmentally appropriate, outcomes-focused learning experiences"
          },
          {
            text: "Easily tie activities to developmental domains and essential early learning standards"
          },
          {
            text: "Record children’s development over time, track their progress, and easily share information with families"
          },
        ]
      },
    ]
  },
  {
    id: 'parents',
    title: "Never miss a moment with KGP",
    subtitle: "Access real-time updates, daily activity reports, photos and videos, a two-way communication portal, and much more, directly from the KGP app!",
    text: "Learn why KGP is the top-rated childcare app by families!",
    subtext: "KGP helps families celebrate joyful moments of care, learning and play in a child's day. Learn more about some of our most-loved features below",
    color: '#f56363',
    img: "https://img.freepik.com/free-photo/brazilian-people-celebrating-easter_23-2151297746.jpg?t=st=1726418428~exp=1726422028~hmac=821e495cf78aa6e30a2ee456b5b3632924e610a00b35dad2c799cc3dd2781896&w=1060", 
    features: [
      {
        id: 1,
        header: "Daily reports",
        title: "Stay informed about your child's day",
        img: parentsImg,
        color: '#f56363',
        features: [
          {
            text: "Daily activity reports help stay in-the-know about the most important parts of your child’s day in care"
          },
          {
            text: "Real-time photo and video sharing ensures that you’ll never miss a moment, even when you’re at work"
          },
          {
            text: "Convenient, user-friendly registration, waitlist, and payment options save you valuable time and eliminate hassle"
          },
        ]
      },
      {
        id: 13,
        header: "Direct messaging",
        title: "Strengthen the home-center connection",
        img: parentsImg,
        color: '#f7c800',
        features: [
          {
            text: "Quick and easy two-way communication and information sharing help you stay connected to center directors and teachers"
          },
          {
            text: "Direct messaging capabilities help deepen conversations and strengthen relationships with caregivers, creating that essential bridge between school and home"
          },
          {
            text: "You’ll easily receive updates, schedule changes, or requests from your child’s teachers–no more papers getting lost in backpacks!"
          },
        ]
      },
      {
        id: 14,
        header: "Center management",
        title: "Bring high-quality learning into your home",
        img: parentsImg,
        color: '#36a4a6',
        features: [
          {
            text: "Teachers have access to developmentally appropriate, outcomes-focused learning experiences that support your child’s learning and development"
          },
          {
            text: "Teachers can tie activities to developmental domains and essential early learning standards, giving you peace of mind"
          },
          {
            text: "Over 200 at-home activities for families are accessible from the app, to extend learning opportunities to the home"
          },
        ]
      },
    ]
  },
]


export default function Users() {

  const { id } = useParams();
  const currentUserType = userTypeData?.find((userType) => userType?.id === id );

  return (
    <>
      <section className="container tl-2-banner ">
        <section className="tl-2-users-cta mt-100 pt-40 pb-40 pl-20 pr-20">
          <div className="">
            <div className="text-center">
              <h2 className="tl-2-users-section-title ">{currentUserType?.title}</h2>
            </div>
            <div className="text-center">
              <p className="tl-2-users-cta-descr pb-20">
                {currentUserType?.subtitle}
              </p>
            </div>
            <a href="#" style={{backgroundColor: currentUserType?.color}} className="tl-2-users-cta-btn">
              {upperCase(currentUserType?.id)}
            </a>
          </div>
        </section>

        <div className="tl-2-banner-slide-container">
          <div 
            style={{ backgroundImage: `linear-gradient(to top, rgb(0,0,0,0) 50%, #f8f9fa), url(${currentUserType?.img})`, backgroundPosition: 'center' }}
            className={`tl-2-user-slide slider-1 banar-1 bg-defaults `}
          ></div>
        </div>

        <section className="tl-2-users-cta pt-40 pb-40 pl-20 pr-20">
          <div className="">
            <div className="text-center">
              <h2 className="tl-2-users-section-title ">{currentUserType?.text}</h2>
            </div>
            <div className="text-center">
              <p className="tl-2-users-cta-descr">
                {currentUserType?.subtext}
              </p>
            </div>
          </div>
        </section>
      </section>

      <CurrentFeatures data={currentUserType} cta={false} />
      <OtherFeatures data={kgpFeatures}/>

      <Partner/>
    </>
  )
}
