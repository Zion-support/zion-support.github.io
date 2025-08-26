import React from 'react';
import Head from 'next/head';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const SpaceTech: React.FC = () => {
  const services = [
    {
      title: "Satellite Technology",
      description: "Advanced satellite systems for communication and observation",
      icon: "🛰️",
      features: ["Communication Satellites", "Earth Observation", "Navigation Systems", "Space Communications"]
    },
    {
      title: "Space Communications",
      description: "Reliable communication solutions for space missions",
      icon: "📡",
      features: ["Deep Space Networks", "Mission Control", "Data Transmission", "Signal Processing"]
    },
    {
      title: "Space Data Analytics",
      description: "Process and analyze space-based data for insights",
      icon: "📊",
      features: ["Remote Sensing", "Data Processing", "Analytics Platforms", "Visualization Tools"]
    },
    {
      title: "Space Infrastructure",
      description: "Ground-based infrastructure for space operations",
      icon: "🏗️",
      features: ["Ground Stations", "Launch Facilities", "Mission Control Centers", "Testing Facilities"]
    }
  ];

  const applications = [
    "Earth Observation & Monitoring",
    "Satellite Communications",
    "Navigation & GPS Systems",
    "Space Exploration",
    "Climate Research",
    "Defense & Security"
  ];

  const benefits = [
    "Access to space-based data and insights",
    "Enhanced communication capabilities",
    "Improved navigation and positioning",
    "Advanced monitoring and surveillance",
    "Innovation in space technology",
    "Competitive advantage in space sector"
  ];

  const technologies = [
    "Satellite Systems",
    "Ground Station Equipment",
    "Communication Protocols",
    "Data Processing Software",
    "Navigation Systems",
    "Remote Sensing Tools"
  ];

  return (
    <>
      <Head>
        <title>Space Technology Services - Zion Tech Group</title>
        <meta name="description" content="Advanced space technology services including satellite systems, space communications, and space data analytics. Explore the final frontier with Zion Tech Group." />
        <meta name="keywords" content="space technology, satellite systems, space communications, space data analytics, space infrastructure" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-12 h-12 text-indigo-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Space Technology
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Explore the final frontier with cutting-edge space technology solutions. 
              From satellite systems to space communications, we're pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Launch Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive space technology solutions for modern space operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Space Technology Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Diverse applications across multiple industries and sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge space technology tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center hover:border-indigo-500/50 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Space Technology Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the potential of space technology for your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Space Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how space technology can revolutionize your operations 
              and open new frontiers for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Launch Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpaceTech;
