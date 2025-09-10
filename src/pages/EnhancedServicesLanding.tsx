import React from 'react';
<<<<<<< HEAD
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const EnhancedServicesLanding = () => {
  const services = [
    {
      title: "AI-Powered Solutions",
      description: "Revolutionary AI technology that transforms your business operations",
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for modern businesses",
      icon: <Shield className="h-8 w-8 text-green-400" />,
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: <Shield className="h-8 w-8 text-red-400" />,
      features: ["Threat Detection", "Security Audits", "Compliance Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Enhanced Services - Zion Tech Group"
        description="Discover our enhanced AI and technology services designed for modern businesses."
        keywords={["enhanced services", "AI solutions", "cloud computing", "cybersecurity"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Enhanced Services</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive suite of enhanced AI and technology services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our enhanced services can drive your success
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesLanding;
=======
import SEO from '../components/SEO';

export default function EnhancedServicesLanding() {
  return (
    <>
      <SEO 
        title="Enhanced Services Landing - Zion Tech Group"
        description="Discover our enhanced services and comprehensive solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Enhanced Services Landing</h1>
            <p className="text-xl text-slate-300">Discover our enhanced services and solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
