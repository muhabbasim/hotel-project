import React, { useState } from 'react';
import { Shield, FileText, Building, Star, DollarSign, ClipboardCheck, Clock, Award, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import Translatable from 'components/translatable/Translatable';

export default function RegulationsPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const mainConditions = [
    {
      icon: FileText,
      title: "Commercial Registration",
      requirement: "Valid commercial registration required",
      details: "The applicant must possess a current and valid commercial registration",
      color: "#1a365d" // Deep navy - professional, trustworthy
    },
    {
      icon: Building,
      title: "Property Ownership",
      requirement: "Land ownership or 20+ year lease",
      details: "Must be property owner OR have lease for minimum 20 years. Title deed must be notarized and indicate units are designated for timeshare activity",
      color: "#2d3748" // Charcoal gray - stable, grounded
    },
    {
      icon: Award,
      title: "Minimum Unit Count",
      requirement: "Minimum 40 units per site",
      details: "The number of units designated for sale at a single location must not be less than forty (40) units",
      color: "#4a5568" // Slate gray - solid, substantial
    },
    {
      icon: Star,
      title: "Service Standards",
      requirement: "Hotel: 4-star minimum | Furnished: First-class",
      details: "Hotel units must be rated at least 4 stars. Furnished residential units must meet first-class standards with basic hotel services available",
      color: "#718096" // Cool gray - premium, sophisticated
    },
    {
      icon: DollarSign,
      title: "Bank Guarantee",
      requirement: "SAR 25,000 per unit minimum",
      details: "Bank guarantee in Ministry of Tourism's name (minimum 25,000 riyals per unit), valid throughout license period, released gradually after 4 years of actual operation",
      color: "#276749" // Forest green - financial, secure
    },
    {
      icon: Shield,
      title: "Property Insurance",
      requirement: "Licensed insurance coverage required",
      details: "Insurance from licensed company within Saudi Arabia, covering third-party liability and natural disaster risks",
      color: "#234e52" // Teal gray - protective, reliable
    },
    {
      icon: ClipboardCheck,
      title: "Management Company",
      requirement: "Qualified management required",
      details: "Contract with technically qualified management company. The seller may manage if qualified",
      color: "#5f370e" // Brown taupe - managerial, earthy
    },
    {
      icon: FileText,
      title: "Disbursement Officer",
      requirement: "Required for pre-construction sales",
      details: "Appoint disbursement officer for properties marketed under construction or to be constructed in future",
      color: "#4c0519" // Burgundy - precise, official
    },
    {
      icon: Building,
      title: "Holy Cities Requirement",
      requirement: "Saudi nationality required",
      details: "If property is within Makkah Al-Mukarramah or Al-Madinah Al-Munawwarah, license applicant must be of Saudi nationality",
      color: "#553c9a" // Muted purple - distinctive, cultural
    }
  ];

  const licenseDuration = {
    initial: {
      title: "Initial License Duration",
      period: "Up to 30 years",
      details: "Maximum license duration does not exceed thirty (30) years"
    },
    renewal: {
      title: "Renewal Terms",
      period: "10-year periods",
      details: "License renewable for periods not exceeding ten (10) years each, provided conditions are met and required documents processed"
    }
  };

  const saleRentalTerms = [
    {
      title: "Contract Classification",
      description: "The contract is legally considered a timeshare contract, granting the user rights to a unit for specific or recurring periods"
    },
    {
      title: "Sale Approval",
      description: "Units may not be sold except based on an approval letter from the Ministry of Tourism",
      highlight: true
    },
    {
      title: "Contract Duration",
      description: "Contract must be for fixed or determinable period of the year, repeated for minimum of three (3) years"
    }
  ];

  // const toggleSection = (section: string) => {
  //   setActiveSection(activeSection === section ? null : section);
  // };

  return (
    <>
      {/* <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossOrigin="anonymous"
      /> */}
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
          padding: 0;
          margin: 0;
        }

          h1, h2 {
          color: white
          }
        
        .permit-hero {
          background: linear-gradient(135deg, #13243C 0%, #02816d 100%);
          padding: 200px 0px 80px 0px;
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .permit-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(100px);
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.95;
          font-weight: 300;
        }
        
        .ministry-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }
        
        .content-section {
          padding: 80px 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }
        
        .section-description {
          font-size: 1.1rem;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .requirement-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .requirement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .requirement-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
        
        .requirement-card:hover::before {
          width: 100%;
          opacity: 0.05;
        }
        
        .requirement-card.expanded {
          border-color: var(--card-color);
        }
        
        .card-header-content {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }
        
        .card-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }
        
        .card-text {
          flex: 1;
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .card-requirement {
          font-size: 1rem;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 0;
        }
        
        .card-details {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 2px solid #f3f4f6;
          font-size: 1.05rem;
          color: #374151;
          line-height: 1.7;
        }
        
        .expand-indicator {
          margin-left: auto;
          transition: transform 0.3s ease;
          color: var(--card-color);
        }
        
        .expand-indicator.rotated {
          transform: rotate(180deg);
        }
        
        .duration-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 60px 0;
          margin: 60px 0;
        }
        
        .duration-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .duration-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .duration-badge {
          display: inline-block;
          background: linear-gradient(135deg, #F59C49 0%, #27816D 100%);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .duration-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }
        
        .duration-period {
          font-size: 2.5rem;
          font-weight: 800;
          color: #27816D;
          margin-bottom: 1rem;
        }
        
        .duration-details {
          font-size: 1.05rem;
          color: #6b7280;
          line-height: 1.6;
        }
        
        .terms-section {
          background: white;
          padding: 60px 0;
        }
        
        .term-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          border-left: 4px solid #02816D;
          transition: all 0.3s ease;
        }
        
        .term-card:hover {
          background: #e9ecef;
          transform: translateX(5px);
        }
        
        .term-card.highlight {
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(102, 16, 242, 0.1) 100%);
          border-left-color: #dc3545;
        }
        
        .term-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .term-description {
          font-size: 1.05rem;
          color: #374151;
          line-height: 1.7;
          margin-bottom: 0;
        }
        
        .alert-banner {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
        }
        
        .alert-icon {
          flex-shrink: 0;
        }
        
        .alert-text {
          font-size: 1.05rem;
          font-weight: 500;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #13243C 0%, #02816d 100%);
          padding: 60px 0;
          margin: 60px 0;
          color: white;
          text-align: center;
        }
        
        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.25rem;
          opacity: 0.95;
          margin-bottom: 2rem;
        }
        
        .btn-white {
          background: white;
          color: #0d6efd;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
          color: #0d6efd;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .requirement-card {
            padding: 1.5rem;
          }
          
          .card-header-content {
            flex-direction: column;
          }
          
          .duration-period {
            font-size: 2rem;
          }
        }
      `}</style>

      <section style={{ background: '#f8f9fa' }}>
        {/* Hero Section */}
        <div className="permit-hero">
          <div className="container">
            <div className="hero-content text-centerx">
              <div className="ministry-badge">
                <Shield size={20} />
                <span><Translatable text="Official Requirements"/></span>
              </div>
              <h1 className="hero-title"><Translatable text="Ministry of Tourism Permit Requirements"/></h1>
              <p className="hero-subtitle">
                <Translatable text="Complete guide to obtaining a timeshare activity permit in Saudi Arabia"/>
              </p>
            </div>
          </div>
        </div>

        {/* Main Conditions Section */}
        <div className="content-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><Translatable text="Main Permit Conditions"/></h2>
              <p className="section-description">
                <Translatable text="Nine essential requirements that must be met to obtain a timeshare activity permit from the Saudi Ministry of Tourism"/>
              </p>
            </div>

            <div className="row">
              <div className="col-lg-10 mx-auto">
                {mainConditions.map((condition, index) => {
                  const Icon = condition.icon;
                  const isExpanded = expandedCard === index;
                  
                  return (
                    <div
                      key={index}
                      className={`requirement-card ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => setExpandedCard(isExpanded ? null : index)}
                      style={{
                        '--card-color': condition.color
                      } as React.CSSProperties}
                    >
                      <style>{`
                        .requirement-card:nth-child(${index + 1})::before {
                          background: ${condition.color};
                        }
                      `}</style>
                      
                      <div className="card-header-content">
                        <div className="card-icon" style={{ background: condition.color }}>
                          <Icon size={28} />
                        </div>
                        
                        <div className="card-text">
                          <h3 className="card-title"><Translatable text={condition.title}/></h3>
                          <p className="card-requirement"><Translatable text={condition.requirement}/></p>
                        </div>
                        
                        <ChevronDown 
                          size={24} 
                          className={`expand-indicator ${isExpanded ? 'rotated' : ''}`}
                          style={{ color: condition.color }}
                        />
                      </div>
                      
                      {isExpanded && (
                        <div className="card-details">
                          <Translatable text={condition.details}/>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* License Duration Section */}
        <div className="duration-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><Translatable text="License Duration & Renewal"/></h2>
              <p className="section-description">
                <Translatable text="Understanding the timeframes and renewal process for your tourism permit"/>
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="duration-card">
                  <div className="duration-badge">
                    <Clock size={16} /> <Translatable text="Initial License"/>
                  </div>
                  <h3 className="duration-title"><Translatable text={licenseDuration.initial.title}/></h3>
                  <div className="duration-period"><Translatable text={licenseDuration.initial.period}/></div>
                  <p className="duration-details"><Translatable text={licenseDuration.initial.details}/></p>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="duration-card">
                  <div className="duration-badge">
                    <Clock size={16} /> <Translatable text="Renewal"/>
                  </div>
                  <h3 className="duration-title"><Translatable text={licenseDuration.renewal.title}/></h3>
                  <div className="duration-period"><Translatable text={licenseDuration.renewal.period}/></div>
                  <p className="duration-details"><Translatable text={licenseDuration.renewal.details}/></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sale & Rental Terms Section */}
        <div className="terms-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><Translatable text="Sale & Rental Regulations"/></h2>
              <p className="section-description">
                <Translatable text="Important legal terms and conditions for timeshare contracts and property sales"/>
              </p>
            </div>

            <div className="row">
              <div className="col-lg-10 mx-auto">
                {saleRentalTerms.map((term, index) => (
                  <div key={index} className={`term-card ${term.highlight ? 'highlight' : ''}`}>
                    <h4 className="term-title">
                      {term.highlight ? <AlertCircle size={24} color="#dc3545" /> : <CheckCircle size={24} color="#0d6efd" />}
                      <Translatable text={term.title}/>
                    </h4>
                    <p className="term-description"><Translatable text={term.description}/></p>
                  </div>
                ))}

                <div className="alert-banner">
                  <AlertCircle size={32} className="alert-icon" />
                  <div className="alert-text">
                    <strong><Translatable text="Important Notice:"/></strong> <Translatable text="Units may not be sold without official approval from the Ministry of Tourism. All timeshare contracts must comply with the minimum three-year duration requirement."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="container">
            <h2 className="cta-title">Need Assistance with Your Application?</h2>
            <p className="cta-description">
              Our experts can guide you through the entire permit application process
            </p>
            <button className="btn btn-white">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
}