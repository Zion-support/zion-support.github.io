import React from 'react';
import SEO from '../components/SEO';

<<<<<<< HEAD
const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Amazon Web Services", logo: "AWS" },
    { name: "Google Cloud", logo: "Google" },
    { name: "IBM", logo: "IBM" },
    { name: "Oracle", logo: "Oracle" },
    { name: "Salesforce", logo: "Salesforce" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Our trusted technology partners and strategic alliances."
        keywords={["partners", "alliances", "technology partners", "strategic partners"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Partners</h1>
          <p className="text-xl text-gray-300">
            Trusted technology partners and strategic alliances
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
                </div>
                <p className="text-gray-300 text-sm">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-gray-300 mb-6">
              Join our partner network and help us deliver innovative solutions to clients worldwide.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
=======
export default function Partners() {
  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group"
        description="Our trusted partners and technology alliances."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Partners</h1>
            <p className="text-xl text-slate-300">Our trusted partners and alliances.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
