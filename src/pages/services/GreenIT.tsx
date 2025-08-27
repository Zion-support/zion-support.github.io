import React from 'react';
import { Leaf, Zap, Database, Shield, BarChart3, Activity, Globe, Cpu } from 'lucide-react';

const GreenIT = () => {
  const greenServices = [
    {
      title: "Energy-Efficient Infrastructure",
      description: "Design and implement energy-efficient IT infrastructure solutions.",
      price: "From $12,000/project",
      features: ["Energy optimization", "Power management", "Efficient cooling", "Renewable energy"],
      icon: Zap
    },
    {
      title: "Sustainable Data Centers",
      description: "Green data center design and management solutions.",
      price: "From $25,000/month",
      features: ["Green building design", "Energy monitoring", "Waste heat recovery", "Carbon footprint reduction"],
      icon: Database
    },
    {
      title: "Green Software Development",
      description: "Eco-friendly software development practices and optimization.",
      price: "From $8,500/month",
      features: ["Code optimization", "Resource efficiency", "Green algorithms", "Sustainable practices"],
      icon: Cpu
    }
  ];

  const greenTechnologies = [
    {
      name: "Renewable Energy",
      description: "Solar, wind, and hydro power integration",
      icon: Leaf,
      features: ["Solar panels", "Wind turbines", "Energy storage", "Grid integration"]
    },
    {
      name: "Energy Monitoring",
      description: "Real-time energy consumption tracking",
      icon: Activity,
      features: ["Smart meters", "Analytics", "Optimization", "Reporting"]
    },
    {
      name: "Sustainable Practices",
      description: "Green IT policies and procedures",
      icon: Globe,
      features: ["Carbon accounting", "Green procurement", "Waste reduction", "Compliance"]
    }
  ];

  const benefits = [
    "Reduced energy consumption and costs",
    "Lower carbon footprint and environmental impact",
    "Improved corporate social responsibility",
    "Enhanced brand reputation and customer trust",
    "Compliance with environmental regulations",
    "Long-term sustainability and resilience"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2"/>
              Green IT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Green IT
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Sustainable technology solutions that reduce environmental impact 
              while improving efficiency and reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Green IT Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Green IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive sustainable technology solutions designed to reduce 
              environmental impact and improve operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-green-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Green Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge sustainable technologies and practices to build 
              environmentally responsible IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {greenTechnologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Why Choose Green IT?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Green IT solutions provide environmental benefits while improving 
                business efficiency and reducing operational costs.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <BarChart3 className="w-24 h-24 text-green-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Sustainability Leadership</h3>
                <p className="text-gray-300 mb-6">
                  Our team is committed to environmental responsibility and 
                  sustainable technology practices.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Green IT certified professionals</p>
                  <p>• Sustainable best practices</p>
                  <p>• Environmental compliance</p>
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
            Ready to Go Green?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how Green IT solutions can reduce your environmental 
            impact while improving your business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
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

export default GreenIT;
