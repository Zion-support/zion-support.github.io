import React from 'react';
import { Link } from 'react-router-dom';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      category: "Technology Partner",
      description: "Strategic partnership for Azure cloud solutions and AI services",
      logo: "MS"
    },
    {
      name: "AWS",
      category: "Cloud Partner",
      description: "Premier consulting partner for AWS cloud infrastructure and services",
      logo: "AWS"
    },
    {
      name: "Google Cloud",
      category: "AI Partner",
      description: "Collaboration on AI and machine learning solutions",
      logo: "GC"
    },
    {
      name: "Cisco",
      category: "Security Partner",
      description: "Joint cybersecurity solutions and network infrastructure",
      logo: "CISCO"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver comprehensive technology solutions 
              and drive innovation for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {partner.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{partner.category}</span>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{partner.description}</p>
                
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-6">
                Interested in partnering with Zion Tech Group? Let's explore how we can 
                create value together and deliver exceptional solutions to our clients.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;