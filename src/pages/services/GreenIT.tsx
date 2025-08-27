import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { 
  Leaf, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp,
  Server,
  Cloud,
  Database,
  Network,
  BarChart3
} from 'lucide-react';

const GreenIT = () => {
  const greenServices = [
    {
      title: "Energy-Efficient Infrastructure",
      description: "Design and implement energy-efficient IT infrastructure",
      icon: Server,
      features: ["Low-power servers", "Efficient cooling", "Power management", "Renewable energy"]
    },
    {
      title: "Cloud Optimization",
      description: "Optimize cloud resources for energy efficiency",
      icon: Cloud,
      features: ["Resource optimization", "Green cloud providers", "Carbon footprint reduction", "Cost savings"]
    },
    {
      title: "Data Center Efficiency",
      description: "Transform data centers for sustainability",
      icon: Database,
      features: ["Efficient cooling", "Renewable energy", "Waste heat recovery", "Smart monitoring"]
    },
    {
      title: "Green Software Development",
      description: "Develop energy-efficient applications",
      icon: Zap,
      features: ["Code optimization", "Efficient algorithms", "Resource management", "Performance tuning"]
    },
    {
      title: "Sustainable IT Practices",
      description: "Implement green IT policies and procedures",
      icon: Leaf,
      features: ["Green procurement", "Waste reduction", "Recycling programs", "Employee training"]
    },
    {
      title: "Carbon Footprint Monitoring",
      description: "Track and reduce IT carbon emissions",
      icon: BarChart3,
      features: ["Emissions tracking", "Reporting tools", "Reduction strategies", "Compliance"]
    }
  ];

  const benefits = [
    "Reduced energy costs and carbon footprint",
    "Improved corporate sustainability ratings",
    "Compliance with environmental regulations",
    "Enhanced brand reputation and customer trust",
    "Long-term cost savings through efficiency",
    "Contribution to global sustainability goals"
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "Green IT solutions for banks and financial institutions",
      icon: TrendingUp
    },
    {
      title: "Healthcare",
      description: "Sustainable IT infrastructure for medical facilities",
      icon: Shield
    },
    {
      title: "Manufacturing",
      description: "Energy-efficient IT for industrial operations",
      icon: Server
    },
    {
      title: "Retail",
      description: "Green IT solutions for retail chains",
      icon: Globe
    },
    {
      title: "Education",
      description: "Sustainable IT for educational institutions",
      icon: Leaf
    },
    {
      title: "Government",
      description: "Green IT for public sector organizations",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO 
        title="Green IT Solutions - Zion Tech Group"
        description="Sustainable and energy-efficient IT solutions to reduce carbon footprint and improve environmental impact."
        keywords="green IT, sustainable technology, energy efficiency, carbon footprint, environmental IT"
        canonical="https://ziontechgroup.com/services/green-it"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Green IT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sustainable
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IT infrastructure with sustainable, energy-efficient solutions 
              that reduce costs, improve performance, and protect the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </Link>
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
              Comprehensive sustainable IT solutions designed to reduce environmental impact 
              while improving performance and reducing costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">•</span>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Green IT
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with sustainable technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Green Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored sustainable IT solutions for your industry's unique requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{industry.title}</h3>
                <p className="text-gray-300 text-center">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Green with Your IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our green IT experts help you build a sustainable, energy-efficient 
            technology foundation that benefits your business and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Green IT Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
=======
import { CogIcon } from '@heroicons/react/24/outline';
const $service = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400"/>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This service page is under development. Contact us for more information.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
            Contact Us for More Information
          </Link>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        </div>
      </section>
    </div>);
};
<<<<<<< HEAD

export default GreenIT;
=======
export default $service;
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
