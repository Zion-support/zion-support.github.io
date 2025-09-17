import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Innovation Hub 2025",
      description: "Cutting-edge artificial intelligence solutions and research for the future.",
      path: "/ai-innovation-hub-2025",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600"
    },
    {
      title: "Advanced AI Solutions 2025",
      description: "Comprehensive AI implementations for enterprise and research applications.",
      path: "/advanced-ai-solutions-2025",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      title: "Revolutionary Tech 2025",
      description: "Next-generation technology solutions that redefine what's possible.",
      path: "/revolutionary-tech-2025",
      color: "from-green-500 to-teal-500",
      hoverColor: "hover:from-green-600 hover:to-teal-600"
    },
    {
      title: "Quantum Computing Revolution",
      description: "Revolutionary quantum computing technologies and applications.",
      path: "/quantum-computing-revolution-2025",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "hover:from-indigo-600 hover:to-purple-600"
    },
    {
      title: "Neural Interface Revolution",
      description: "Next-generation brain-computer interface technologies.",
      path: "/neural-interface-revolution-2025",
      color: "from-pink-500 to-rose-500",
      hoverColor: "hover:from-pink-600 hover:to-rose-600"
    },
    {
      title: "Advanced Tech Showcase",
      description: "Comprehensive showcase of our latest technological innovations.",
      path: "/advanced-tech-showcase-2025",
      color: "from-yellow-500 to-orange-500",
      hoverColor: "hover:from-yellow-600 hover:to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of cutting-edge technology solutions designed to 
            revolutionize industries and shape the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group bg-gray-800/50 hover:bg-gray-800/70 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">
                  {service.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} ${service.hoverColor} text-white px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg`}>
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg mb-6">
              Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;