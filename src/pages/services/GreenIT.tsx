import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Leaf, Zap, Globe, Shield, Database, Server, Zap as ZapIcon } from 'lucide-react';

const GreenIT: React.FC = () => {
  const greenITServices = [
    {
      title: "Energy-Efficient Infrastructure",
      description: "Design and implement energy-efficient IT infrastructure solutions",
      features: ["Low-power servers", "Efficient cooling systems", "Smart power management", "Renewable energy integration"],
      icon: Server
    },
    {
      title: "Sustainable Data Centers",
      description: "Build and optimize data centers with minimal environmental impact",
      features: ["Green building design", "Efficient cooling", "Waste heat recycling", "Renewable energy sources"],
      icon: Database
    },
    {
      title: "Cloud Optimization",
      description: "Optimize cloud resources for energy efficiency and cost savings",
      features: ["Resource optimization", "Auto-scaling", "Energy-aware scheduling", "Carbon footprint tracking"],
      icon: ZapIcon
    },
    {
      title: "Green Software Development",
      description: "Develop software with energy efficiency in mind",
      features: ["Efficient algorithms", "Optimized code", "Resource management", "Performance monitoring"],
      icon: Zap
    }
  ];

  const greenITAreas = [
    { area: "Hardware Efficiency", solutions: ["Energy-efficient processors", "Low-power memory", "Efficient storage", "Smart cooling"] },
    { area: "Software Optimization", solutions: ["Efficient algorithms", "Resource management", "Performance tuning", "Monitoring tools"] },
    { area: "Infrastructure Design", solutions: ["Green data centers", "Efficient networks", "Smart buildings", "Renewable energy"] },
    { area: "Operations & Management", solutions: ["Energy monitoring", "Efficiency metrics", "Sustainable practices", "Carbon tracking"] }
  ];

  const keyBenefits = [
    "Reduced energy consumption and costs",
    "Lower carbon footprint and environmental impact",
    "Improved corporate sustainability",
    "Compliance with environmental regulations",
    "Enhanced brand reputation and CSR",
    "Long-term cost savings and ROI"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Green IT Solutions - Zion Tech Group"
        description="Sustainable and energy-efficient IT solutions that reduce environmental impact while improving performance."
        keywords="green IT, sustainable technology, energy efficiency, environmental IT, green data centers"
        canonical="https://ziontechgroup.com/services/green-it"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Green
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                {" "}IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Sustainable technology solutions that reduce environmental impact while improving performance. 
              Our green IT services help you build a more sustainable digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300"
              >
                Go Green with IT
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Green IT Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Green IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive sustainable technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {greenITServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Green IT
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Environmental and business benefits of sustainable technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">🌱</div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Green IT Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Green IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all sustainable technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {greenITAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.area}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {area.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center">
                        <ZapIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Green with IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our sustainability experts help you build a more environmentally friendly IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GreenIT;
