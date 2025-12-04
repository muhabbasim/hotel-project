import { useState } from 'react';
import { TrendingUp, Target, Zap, BarChart3, Shield, Wrench } from 'lucide-react';
import { Home, Search, DollarSign, FileText, Key, Calendar, Repeat } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Translatable from 'components/translatable/Translatable';

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  // const [selectedOwnership, setSelectedOwnership] = useState('fractional');
  const pageId = useParams()?.id
  const [userType, setUserType] = useState<string | undefined>(pageId);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize Returns",
      description: "Sell fractional shares at premium valuations while retaining ownership potential. Average sellers see 15-25% higher returns."
    },
    {
      icon: Target,
      title: "Qualified Buyers Only",
      description: "We pre-screen all buyers for financial capability and commitment. No tire-kickers, just serious investors."
    },
    {
      icon: Zap,
      title: "Fast & Hassle-Free",
      description: "Average time to first sale is 45 days. We handle all marketing, legal work, and buyer coordination for you."
    },
    {
      icon: BarChart3,
      title: "Full Transparency",
      description: "Real-time dashboard showing listing performance, buyer interest, and all transaction details at your fingertips."
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Our legal team ensures all contracts are airtight. We protect your interests throughout the entire process."
    },
    {
      icon: Wrench,
      title: "Optional Management",
      description: "Don't want the headache? We offer full property management services including maintenance and guest coordination."
    }
  ];

  const technologies = [
    {
      icon: DollarSign,
      title: "Tokenized Real Estate Representation",
      description: "Each real estate unit is represented as a digital token (NFT/security token) on a blockchain",
      details: [
        "Blockchain-based Digital Twins",
        "Fractional Ownership Tokens: Time periods are tokenized into ERC-1155 or ERC-3525 tokens for flexible time-slot representation",
        "Token Metadata Standards: Each token contains structured data about the property, time period, owner rights, and regulatory compliance status",
        "On-Chain Title Registry: Ownership deeds are recorded on an immutable ledger, with Saudi Real Estate Authority integration"
      ]
    },
    {
      icon: Search,
      title: "Smart Contract Automation",
      description: "Automated Sukuk issuance when all conditions are met",
      details: [
        "Self-Executing Deeds: Automated Sukuk issuance when all conditions are met",
        "Time-Based Access Control: Smart contracts manage time period allocation and access rights",
        "Automated Compliance Checks: Regulatory requirements encoded into contract logic",
        "Revenue Distribution: Automated payment splitting for maintenance fees and service charges"
      ]
    },
    {
      icon: Home,
      title: "Secure Transactions",
      description: "Verify ownership without revealing sensitive personal data",
      details: [
        "Zero-Knowledge Proofs: Verify ownership without revealing sensitive personal data",
        "Digital Identity Verification: Integration with Saudi National ID (Absher) and SPL systems",
        "End-to-End Encryption: All sensitive data encrypted both in transit and at rest",
        "Multi-Signature Wallets: Multiple signatures required for high-value transactions"
      ]
    },
  ];

  const steps = [
    {
      icon: Search,
      title: "Browse & Choose",
      description: "Explore our curated collection of premium properties across dream destinations worldwide.",
      details: [
        "Filter by location, property type, and budget",
        "View detailed photos, amenities, and virtual tours",
        "Save your favorite properties for comparison",
        "Access real-time availability information"
      ]
    },
    {
      icon: Home,
      title: "Select Ownership Type",
      description: "Choose the ownership model that fits your vacation lifestyle and budget.",
      details: [
        "Compare fractional, points-based, and traditional options",
        "Review pricing structures and annual costs",
        "Use our calculator to estimate total investment",
        "Speak with an ownership specialist for guidance"
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Review",
      description: "Get complete transparency on all costs with no hidden fees or surprises.",
      details: [
        "Receive detailed pricing breakdown",
        "Explore financing options if needed",
        "Understand annual maintenance fees",
        "Review payment schedules and terms"
      ]
    },
    {
      icon: FileText,
      title: "Legal & Documentation",
      description: "Our team handles all paperwork while keeping you informed every step of the way.",
      details: [
        "Review ownership contract with legal support",
        "Complete title transfer process",
        "Sign documents securely online or in person",
        "Receive all documentation for your records"
      ]
    },
    {
      icon: Key,
      title: "Welcome & Onboarding",
      description: "Get instant access to your member portal and all exclusive benefits.",
      details: [
        "Receive your member credentials",
        "Complete guided platform walkthrough",
        "Learn about booking system and exchange program",
        "Meet your dedicated concierge team"
      ]
    },
    {
      icon: Calendar,
      title: "Book Your Stays",
      description: "Reserve your vacation dates through our easy-to-use booking platform.",
      details: [
        "Access your booking calendar",
        "Reserve weeks or use your points allocation",
        "Receive instant confirmation",
        "View check-in instructions and property details"
      ]
    },
    {
      icon: Repeat,
      title: "Enjoy & Exchange",
      description: "Experience your property and explore our global exchange network.",
      details: [
        "Use your owned property throughout the year",
        // "Exchange for different properties worldwide",
        "Access exclusive member perks and discounts",
        "Join member events and experiences"
      ]
    }
  ];

  const sellerSteps = [
    {
      icon: Home,
      title: "List Your Property",
      description: "Submit your property details and let our team evaluate it for shared ownership potential.",
      details: [
        "Fill out our property submission form",
        "Provide property details, photos, and documentation",
        "Share your ownership goals and expectations",
        "Receive initial evaluation within 48 hours"
      ]
    },
    {
      icon: Search,
      title: "Property Assessment",
      description: "Our experts conduct a comprehensive evaluation of your property's market value and appeal.",
      details: [
        "Professional property inspection and appraisal",
        "Market analysis and comparable properties review",
        "Assessment of shared ownership viability",
        "Detailed valuation report provided"
      ]
    },
    {
      icon: FileText,
      title: "Legal & Documentation Review",
      description: "We verify all legal documents and ensure your property meets our platform standards.",
      details: [
        "Title verification and ownership confirmation",
        "Review of HOA agreements and restrictions",
        "Zoning and rental regulation compliance check",
        "Clear any legal issues or encumbrances"
      ]
    },
    {
      icon: DollarSign,
      title: "Pricing & Structure",
      description: "Work with our team to set competitive pricing and determine the best ownership model.",
      details: [
        "Collaborate on share pricing strategy",
        "Determine ownership structure",
        "Set maintenance fee schedules",
        "Establish revenue sharing agreements"
      ]
    },
    {
      icon: Calendar,
      title: "Marketing & Listing",
      description: "We create a compelling listing and promote your property to qualified buyers.",
      details: [
        "Professional photography and virtual tours",
        "Detailed property description and feature highlights",
        "Featured placement on our platform"
      ]
    },

  ];

  // const ownershipTypes = [
  //   {
  //     id: 'fractional',
  //     name: 'Fractional Ownership',
  //     description: 'Own a percentage of the property (typically 1/4 to 1/13)',
  //     price: '$75,000 - $500,000',
  //     usage: '2-12 weeks per year',
  //     maintenance: '$3,000 - $15,000/year'
  //   },
  //   {
  //     id: 'points',
  //     name: 'Points-Based System',
  //     description: 'Purchase points to use flexibly across multiple properties',
  //     price: '$15,000 - $100,000',
  //     usage: 'Varies by points',
  //     maintenance: '$1,200 - $8,000/year'
  //   },
  //   {
  //     id: 'fixed',
  //     name: 'Fixed Week',
  //     description: 'Own the same week(s) every year at your property',
  //     price: '$10,000 - $75,000',
  //     usage: '1-4 weeks per year',
  //     maintenance: '$800 - $2,500/year'
  //   }
  // ];

  const faqs = [
    {
      question: "How long does the entire process take?",
      answer: "From property selection to first booking typically takes 4-8 weeks, depending on financing and legal processing."
    },
    {
      question: "Can I visit the property before purchasing?",
      answer: "Absolutely! We encourage property tours and can arrange virtual or in-person visits at your convenience."
    },
    {
      question: "What if I change my mind?",
      answer: "We offer a 14-day cooling-off period after contract signing, allowing you to cancel with a full refund."
    },
    {
      question: "How do I book my first stay?",
      answer: "Once onboarded, you can book immediately through your member portal. Our concierge team is available to assist with your first reservation."
    },
    {
      question: "Are there any restrictions on when I can use the property?",
      answer: "Restrictions vary by ownership type. Fixed weeks are specific dates, while fractional and points offer more flexibility within seasonal guidelines."
    }
  ];

  let activeSteps

  switch(userType) {
    case 'buyer':
      activeSteps = steps;
      break;
    case 'seller':
      activeSteps = sellerSteps;
      break;
    case 'technologies':
      activeSteps = technologies;
      break;
    default:
      activeSteps = steps;
      break;
  }
  
  return (
    <>
      
      <style>{`

        h1, h2, h3, h4, h5, h6 {
          color: white
        }
        .hero-section {
          background: linear-gradient(135deg, #02816d 0%, #0a58ca 100%);
          color: white;
          padding: 5rem 0;
          margin-top: 140px
        }
        
        .step-card {
          transition: all 0.3s ease;
          cursor: pointer;
          border-left: 4px solid transparent;
        }
        
        .step-card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          border-left-color: #02816d;
        }
        
        .step-card.active {
          border-left-color: #02816d;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
        }
        
        .step-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #02816d 0%, #0a58ca 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .ownership-card {
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
        }
        
        .ownership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
        }
        
        .ownership-card.selected {
          border: 2px solid #02816d;
          transform: scale(1.02);
        }
        
        .cta-section {
          background: linear-gradient(135deg, #02816d 0%, #0a58ca 100%);
          color: white;
          border-radius: 1rem;
          padding: 4rem 2rem;
        }
        
        .faq-item {
          border: 1px solid #dee2e6;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .faq-item summary {
          padding: 1.5rem;
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        
        .faq-item[open] summary {
          border-bottom: 1px solid #dee2e6;
        }
        
        .faq-content {
          padding: 1.5rem;
        }
        
        .badge-step {
          background-color: #e7f1ff;
          color: #02816d;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .detail-list {
          list-style: none;
          padding-left: 0;
        }
        
        .detail-list li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }
        
        .detail-list li:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 6px;
          height: 6px;
          background-color: #02816d;
          border-radius: 50%;
        }
          .benefits-section {
          padding: 80px 0;
          // background: #ffffff;
        }
        
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          letter-spacing: -0.5px;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .benefit-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #1a1a1a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .benefit-card:hover {
          border-color: #02816d;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .benefit-card:hover::before {
          transform: scaleX(1);
        }
        
        .icon-wrapper {
          width: 48px;
          height: 48px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover .icon-wrapper {
          background: #02816d;
          border-color: #02816d;
        }
        
        .benefit-icon {
          color: #1a1a1a;
          transition: color 0.3s ease;
        }
        
        .benefit-card:hover .benefit-icon {
          color: #ffffff;
        }
        
        .benefit-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          letter-spacing: -0.2px;
        }
        
        .benefit-description {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .benefits-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          
          .benefit-card {
            padding: 1.5rem;
          }
      `}</style>

      <div className="min-vh-100" style={{backgroundColor: '#f8f9fa'}}>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="display-3 fw-bold mb-4"><Translatable text="The Journey, Simplified"/></h1>
                <p className="lead fs-4 opacity-75 mb-4">
                  {userType === 'buyer' 
                    ? <Translatable text="Your journey to fractional property ownership is simple and transparent. Follow our seven-step process to start enjoying luxury vacations at a fraction of the cost."/>
                    : <Translatable text="Turn your property into a profitable shared ownership investment. Our streamlined process makes it easy to list, sell, and manage fractional ownership shares."/>}
                </p>
                
                {/* Toggle Buttons */}
                <div className="d-flex gap-3 justify-content-center">
                  <button 
                    className={`btn btn-lg px-4 ${userType === 'buyer' ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => {setUserType('buyer'); setActiveStep(null);}}
                  >
                    <Translatable text="I'm a Buyer"/>
                  </button>
                  <button 
                    className={`btn btn-lg px-4 ${userType === 'seller' ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => {setUserType('seller'); setActiveStep(null);}}
                  >
                    <Translatable text="I'm a Seller"/>
                  </button>
                  <button 
                    className={`btn btn-lg px-4 ${userType === 'technologies' ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => {setUserType('technologies'); setActiveStep(null);}}
                  >
                    <Translatable text="Technologies Used"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          {/* Introduction */}
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <div className="card shadow-sm">
                <div className="card-body p-5">
                  <h2 className="h3 fw-bold mb-3">
                    {userType === 'buyer' ? <Translatable text='Shared Ownership Made Simple'/> : <Translatable text='Monetize Your Property with Confidence'/>}
                  </h2>
                  <p className="lead text-muted mb-0">
                    {userType === 'buyer' 
                      ? <Translatable text="Our platform makes property ownership accessible by allowing multiple owners to share the costs and usage of premium vacation properties. Whether you want a beach villa, mountain retreat, or urban escape, we guide you through every step—from browsing properties to booking your dream vacation."/>
                      : <Translatable text="Transform your vacation property into a lucrative shared ownership opportunity. Our platform connects you with qualified buyers while we handle marketing, legal processes, and ongoing management—so you can maximize your property's value with minimal hassle."/>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="h3 fw-bold text-center m-5 ">
                {userType === 'buyer' 
                ? <Translatable text='Your Journey in 7 Simple Steps'/> 
                : userType === 'seller' 
                ? <Translatable text='Sell Your Property in 5 Simple Steps'/>
                : <Translatable text='Technologies Used'/>}
              </h2>
              
              <div className="row g-4">
                {activeSteps?.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;
                  
                  return (
                    <div key={index} className="col-12">
                      <div
                        className={`card step-card ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveStep(isActive ? null : index)}
                      >
                        <div className="card-body p-4">
                          <div className="d-flex gap-4">
                            <div className="step-icon">
                              <Icon size={32} color="white" />
                            </div>
                            
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center gap-3 mb-2">
                                <span className="badge-step">Step {index + 1}</span>
                                <h3 className="h4 mb-0"><Translatable text={step.title}/></h3>
                              </div>
                              
                              <p className="text-muted fs-6 mb-3"><Translatable text={step.description}/></p>
                              
                              {isActive && (
                                <div className="mt-4 pt-4 border-top">
                                  <h5 className="fw-semibold mb-3"><Translatable text='What happens in this step:'/></h5>
                                  <ul className="detail-list">
                                    {step.details.map((detail, idx) => (
                                      <li key={idx} className="text-muted"><Translatable text={detail}/></li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              <button className="btn btn-link p-0 text-decoration-none">
                                {isActive ? 'Show less' : 'Learn more →'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Ownership Comparison - Only show for buyers */}
          {/* {userType === 'buyer' && (
            <div className="row mb-5">
              <div className="col-lg-10 mx-auto">
                <h2 className="h3 fw-bold text-center mb-3">Compare Ownership Options</h2>
                <p className="text-center text-muted mb-5">
                  Not sure which ownership model is right for you? Compare the key differences below.
                </p>
                
                <div className="row g-4">
                  {ownershipTypes.map((type) => (
                    <div key={type.id} className="col-md-4">
                      <div
                        className={`card ownership-card ${selectedOwnership === type.id ? 'selected' : ''}`}
                        onClick={() => setSelectedOwnership(type.id)}
                      >
                        <div className="card-body p-4">
                          <h4 className="h5 fw-bold mb-3">{type.name}</h4>
                          <p className="text-muted small mb-4">{type.description}</p>
                          
                          <div className="border-top pt-3 mb-3">
                            <div className="text-muted small mb-1">Initial Investment</div>
                            <div className="fw-semibold">{type.price}</div>
                          </div>
                          
                          <div className="border-top pt-3 mb-3">
                            <div className="text-muted small mb-1">Annual Usage</div>
                            <div className="fw-semibold">{type.usage}</div>
                          </div>
                          
                          <div className="border-top pt-3 mb-4">
                            <div className="text-muted small mb-1">Annual Fees</div>
                            <div className="fw-semibold">{type.maintenance}</div>
                          </div>
                          
                          <button className="btn btn-primary w-100">Learn More</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )} */}

          {/* Seller Benefits Section */}
          {userType === 'seller' && (
            <div className="benefits-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title"><Translatable text="Why Sell on Our Platform?"/></h2>
                  <p className="section-subtitle">
                    <Translatable text="Join hundreds of property owners who've successfully converted their properties into shared ownership investments"/>
                  </p>
                </div>
      
                <div className="row">
                  <div className="col-lg-11 mx-auto">
                    <div className="benefits-grid">
                      {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        
                        return (
                          <div key={index} className="benefit-card">
                            <div className="icon-wrapper">
                              <Icon size={24} strokeWidth={1.5} className="benefit-icon" />
                            </div>
                            <h3 className="benefit-title"><Translatable text={benefit.title}/></h3>
                            <p className="benefit-description"><Translatable text={benefit.description}/></p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calculator CTA */}
          <div className="row m-5">
            <div className="col-lg-10 mx-auto">
              <div className="cta-section text-center">
                <h2 className="h3 fw-bold mb-3">
                  {userType === 'buyer' ? 'Calculate Your Investment' : 'Calculate Your Earnings Potential'}
                </h2>
                <p className="fs-5 opacity-75 mb-4">
                  {userType === 'buyer' 
                    ? "Use our interactive calculator to estimate your total costs and see how shared ownership compares to traditional vacation expenses."
                    : "Use our property valuation tool to see how much you could earn by converting your property to shared ownership."}
                </p>
                {/* <button className="btn btn-light btn-lg fw-bold px-5">
                  {userType === 'buyer' ? 'Try Our Calculator' : 'Get Free Valuation'}
                </button> */}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="h3 fw-bold text-center m-5"><Translatable text="Frequently Asked Questions"/></h2>
              
              {faqs.map((faq, index) => (
                <details key={index} className="faq-item">
                  <summary>
                    <Translatable text={faq.question}/>
                    <span className="text-primary">▼</span>
                  </summary>
                  <div className="faq-content text-muted">
                    <Translatable text={faq.answer}/>
                  </div>
                </details>
              ))}
              
              <div className="text-center mt-4">
                <a href="#" className="btn btn-link text-decoration-none fw-semibold">
                  View All FAQs →
                </a>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          {/* <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card shadow-sm">
                <div className="card-body p-5 text-center">
                  <h2 className="h3 fw-bold mb-3">Ready to Get Started?</h2>
                  <p className="lead text-muted mb-4">
                    {userType === 'buyer'
                      ? "Schedule a free consultation with our ownership specialists or start browsing our available properties today."
                      : "Get a free property evaluation and speak with our listing specialists to learn how much your property could earn."}
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <button className="btn btn-primary btn-lg px-5">
                      {userType === 'buyer' ? 'Schedule Consultation' : 'List My Property'}
                    </button>
                    <button className="btn btn-outline-secondary btn-lg px-5">
                      {userType === 'buyer' ? 'Browse Properties' : 'View Success Stories'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}