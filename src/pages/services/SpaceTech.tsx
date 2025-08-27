import React from 'react';
import { Rocket, Satellite, Globe, Zap, BarChart3, Activity, Shield, Database } from 'lucide-react';

const SpaceTech = () => {
  const spaceServices = [
    {
      title: "Satellite Technology",
      description: "Advanced satellite design, development, and deployment solutions.",
      price: "From $50,000/project",
      features: ["Satellite design", "Launch coordination", "Ground station setup", "Orbital operations"],
      icon: Satellite
    },
    {
      title: "Space Data Analytics",
      description: "Comprehensive analysis of space-based data and observations.",
      price: "From $25,000/month",
      features: ["Data collection", "Remote sensing", "Climate monitoring", "Earth observation"],
      icon: BarChart3
    },
    {
      title: "Space Infrastructure",
      description: "Ground-based space infrastructure and support systems.",
      price: "From $35,000/month",
      features: ["Ground stations", "Mission control", "Data processing", "Communication systems"],
      icon: Database
    }
  ];

  const spaceTechnologies = [
    {
      name: "Satellite Communications",
      description: "Global communication networks and data transmission",
      icon: Globe,
      features: ["Global coverage", "High-speed data", "Reliable connectivity", "Low latency"]
    },
    {
      name: "Remote Sensing",
      description: "Earth observation and environmental monitoring",
      icon: Activity,
      features: ["Environmental monitoring", "Climate data", "Resource mapping", "Disaster response"]
    },
    {
      name: "Space Security",
      description: "Cybersecurity and protection for space systems",
      icon: Shield,
      features: ["Threat detection", "Secure communications", "System protection", "Compliance"]
    }
  ];

  const benefits = [
    "Global coverage and connectivity solutions",
    "Advanced environmental monitoring capabilities",
    "Enhanced data collection and analysis",
    "Improved communication infrastructure",
    "Innovation in space technology applications",
    "Support for scientific research and exploration"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2"/>
              Space Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Space Technology
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore the final frontier with cutting-edge space technology solutions 
              that push the boundaries of innovation and discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Space Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Space Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive space technology solutions designed to advance 
              exploration and innovation beyond Earth's atmosphere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-purple-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and platforms to build robust, 
              reliable space systems and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaceTechnologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Space Technology?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Space technology provides unprecedented opportunities to explore, 
                monitor, and understand our world and beyond.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <Zap className="w-24 h-24 text-purple-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Space Innovation</h3>
                <p className="text-gray-300 mb-6">
                  Our team has deep expertise in space technology and 
                  is committed to advancing the frontiers of exploration.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Space technology experts</p>
                  <p>• Innovation leadership</p>
                  <p>• Proven methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Reach for the Stars?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how space technology can advance your mission 
            and push the boundaries of what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTech;
