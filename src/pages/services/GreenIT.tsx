import React from 'react';
import { Leaf, Zap, Globe, Cpu, Database, Server, TrendingUp, Target, Shield, Users, Lightbulb, Recycle } from 'lucide-react';

const GreenIT: React.FC = () => {
  const greenServices = [
    {
      icon: Leaf,
      title: "Sustainable Infrastructure",
      description: "Design and implement energy-efficient data centers and IT infrastructure",
      features: ["Energy-efficient hardware", "Renewable energy integration", "Cooling optimization", "Power management"]
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Optimize IT systems for maximum energy efficiency and minimal carbon footprint",
      features: ["Power consumption analysis", "Efficiency improvements", "Smart scheduling", "Energy monitoring"]
    },
    {
      icon: Database,
      title: "Green Data Centers",
      description: "Eco-friendly data center solutions with renewable energy and efficient cooling",
      features: ["Renewable energy sources", "Efficient cooling systems", "Waste heat recycling", "Carbon neutrality"]
    },
    {
      icon: Server,
      title: "Virtualization & Consolidation",
      description: "Reduce physical hardware through virtualization and server consolidation",
      features: ["Server virtualization", "Storage consolidation", "Resource optimization", "Hardware reduction"]
    },
    {
      icon: Globe,
      title: "Cloud Optimization",
      description: "Optimize cloud infrastructure for energy efficiency and sustainability",
      features: ["Green cloud providers", "Resource optimization", "Carbon-aware scheduling", "Efficient scaling"]
    },
    {
      icon: Recycle,
      title: "IT Asset Management",
      description: "Sustainable lifecycle management of IT equipment and e-waste reduction",
      features: ["Equipment lifecycle", "E-waste recycling", "Refurbishment programs", "Circular economy"]
    }
  ];

  const benefits = [
    "Reduced energy consumption and costs",
    "Lower carbon footprint and environmental impact",
    "Improved corporate sustainability ratings",
    "Compliance with environmental regulations",
    "Enhanced brand reputation and customer trust",
    "Long-term cost savings through efficiency"
  ];

  const technologies = [
    {
      name: "Energy-Efficient Hardware",
      description: "Low-power processors, SSDs, and networking equipment",
      icon: Cpu
    },
    {
      name: "Renewable Energy",
      description: "Solar, wind, and hydroelectric power integration",
      icon: Zap
    },
    {
      name: "Smart Cooling",
      description: "AI-powered cooling optimization and waste heat recovery",
      icon: Leaf
    },
    {
      name: "Virtualization",
      description: "Server and storage virtualization for resource optimization",
      icon: Server
    },
    {
      name: "Monitoring Tools",
      description: "Real-time energy consumption and efficiency monitoring",
      icon: TrendingUp
    },
    {
      name: "Green Software",
      description: "Energy-efficient algorithms and sustainable coding practices",
      icon: Lightbulb
    }
  ];

  const certifications = [
    "ISO 14001 Environmental Management",
    "LEED Data Center Certification",
    "Energy Star for Data Centers",
    "Green Grid PUE Standards",
    "Carbon Trust Certification",
    "BREEAM Data Center Standards"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Green IT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sustainable Technology
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> for a Better Future</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We help organizations implement environmentally responsible IT solutions 
              that reduce energy consumption, minimize carbon footprint, and promote sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Green Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Green IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive sustainable technology solutions that help organizations 
              achieve their environmental goals while maintaining operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Green IT?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Sustainable technology solutions provide both environmental and business benefits, 
                helping organizations meet their sustainability goals while improving efficiency.
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
                <Globe className="w-24 h-24 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Environmental Impact</h3>
                <p className="text-gray-300 mb-6">
                  Our green IT solutions help reduce carbon emissions and 
                  promote sustainable business practices.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Carbon footprint reduction</p>
                  <p>• Energy efficiency improvements</p>
                  <p>• Sustainable resource management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Green Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge sustainable technologies that enable energy efficiency 
              and environmental responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Environmental Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We maintain the highest environmental standards and certifications 
              to ensure sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert}</h3>
                <p className="text-sm text-gray-300">Environmental compliance and sustainability standards</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Green IT Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A systematic approach to implementing sustainable technology solutions 
            that maximize environmental and business benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300">Current environmental impact and efficiency analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">Green IT roadmap and sustainability goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Phased deployment of sustainable solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-300">Continuous monitoring and efficiency improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our green IT solutions can help your organization 
            achieve sustainability goals while improving efficiency and reducing costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Green Journey
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
  );
};

export default GreenIT;