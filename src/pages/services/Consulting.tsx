import React from 'react';
import { Link } from 'react-router-dom';

const Consulting: React.FC = () => {
  const consultingServices = [
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape",
      features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendation Report"]
    },
    {
      title: "Strategic Planning",
      description: "Develop long-term technology roadmaps aligned with business goals",
      features: ["Technology Strategy", "Roadmap Development", "Investment Planning", "Risk Assessment"]
    },
    {
      title: "Vendor Selection",
      description: "Expert guidance in choosing the right technology partners",
      features: ["Requirements Analysis", "Vendor Evaluation", "RFP Development", "Contract Negotiation"]
    },
    {
      title: "Project Management",
      description: "Professional project management for technology initiatives",
      features: ["Project Planning", "Resource Management", "Timeline Control", "Stakeholder Communication"]
    }
  ];

  const consultingApproach = [
    {
      phase: "Discovery",
      description: "Understand your business needs and current state",
      activities: ["Stakeholder Interviews", "Current State Analysis", "Requirements Gathering", "Challenge Identification"]
    },
    {
      phase: "Analysis",
      description: "Analyze findings and develop strategic insights",
      activities: ["Data Analysis", "Gap Assessment", "Opportunity Identification", "Solution Research"]
    },
    {
      phase: "Strategy",
      description: "Develop comprehensive recommendations and roadmap",
      activities: ["Strategy Development", "Roadmap Creation", "Implementation Planning", "Risk Mitigation"]
    },
    {
      phase: "Execution",
      description: "Support implementation and measure success",
      activities: ["Implementation Support", "Change Management", "Progress Monitoring", "Success Measurement"]
    }
  ];

  const industryExpertise = [
    {
      industry: "Healthcare",
      expertise: ["HIPAA Compliance", "Electronic Health Records", "Telemedicine Solutions", "Data Security"]
    },
    {
      industry: "Finance",
      expertise: ["Regulatory Compliance", "Risk Management", "Digital Banking", "Cybersecurity"]
    },
    {
      industry: "Manufacturing",
      expertise: ["Industry 4.0", "IoT Integration", "Supply Chain Optimization", "Quality Management"]
    },
    {
      industry: "Retail",
      expertise: ["E-commerce Platforms", "Customer Experience", "Inventory Management", "Omnichannel Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic technology guidance to help you make informed decisions and achieve business objectives
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert Technology Guidance</h2>
                <p className="text-gray-300 mb-6">
                  Make confident technology decisions with our experienced consultants. We help you navigate complex technology choices, optimize investments, and align technology with business strategy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Industry expertise across multiple sectors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Proven methodologies and frameworks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Measurable business outcomes</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">💡</div>
                <p className="text-gray-300 text-lg">Strategic Technology Advisory</p>
              </div>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Consulting Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology consulting solutions designed for your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consulting Approach */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Consulting Approach</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that delivers results and drives business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {consultingApproach.map((phase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.phase}</h3>
                  <p className="text-gray-300 text-sm mb-4">{phase.description}</p>
                  
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep knowledge across multiple industries and technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryExpertise.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Areas of Expertise:</h4>
                    <ul className="space-y-1">
                      {industry.expertise.map((expertise, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {expertise}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven track record and deep expertise in technology consulting
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Proven Track Record</h3>
                      <p className="text-gray-300 text-sm">Successfully delivered consulting projects across multiple industries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-300 text-sm">Experienced consultants with deep technical and business knowledge</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Fast Results</h3>
                      <p className="text-gray-300 text-sm">Quick turnaround times and rapid implementation of recommendations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Measurable Outcomes</h3>
                      <p className="text-gray-300 text-sm">Clear metrics and ROI tracking for all consulting engagements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready for Expert Technology Guidance?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our consulting services can help you make the right technology decisions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;