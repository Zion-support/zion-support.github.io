import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Globe, 
  Satellite, 
  Target, 
  Lightbulb, 
  Shield, 
  Rocket,
  Zap,
  BarChart3,
  Cpu,
  Database,
  Network
} from 'lucide-react';

const SpaceTech = () => {
  const spaceServices = [
    {
      title: "Earth Observation",
      description: "Environmental monitoring, climate research, and natural disaster assessment",
      icon: Globe,
      features: ["Satellite imagery", "Climate monitoring", "Disaster response", "Environmental analysis"]
    },
    {
      title: "Satellite Communications",
      description: "Global connectivity, broadband internet, and emergency communications",
      icon: Satellite,
      features: ["Global coverage", "High-speed internet", "Emergency communications", "Remote connectivity"]
    },
    {
      title: "Navigation & Positioning",
      description: "GPS, positioning systems, and autonomous vehicle guidance",
      icon: Target,
      features: ["Precise positioning", "Autonomous navigation", "Location services", "Mapping solutions"]
    },
    {
      title: "Space Research",
      description: "Space exploration, astronomy, and fundamental physics research",
      icon: Lightbulb,
      features: ["Astronomy research", "Physics experiments", "Space exploration", "Scientific discovery"]
    },
    {
      title: "Defense & Security",
      description: "National security, surveillance, and strategic communications",
      icon: Shield,
      features: ["Security monitoring", "Strategic communications", "Surveillance systems", "Defense technology"]
    },
    {
      title: "Commercial Space",
      description: "Space tourism, mining, and commercial satellite services",
      icon: Rocket,
      features: ["Space tourism", "Resource mining", "Commercial satellites", "Space infrastructure"]
    }
  ];

  const benefits = [
    "Advanced technology innovation and development",
    "Global connectivity and communication solutions",
    "Environmental monitoring and climate research",
    "National security and defense capabilities",
    "Commercial space opportunities and revenue",
    "Scientific discovery and knowledge advancement"
  ];

  const industries = [
    {
      title: "Government & Defense",
      description: "National security and defense space technology solutions",
      icon: Shield
    },
    {
      title: "Telecommunications",
      description: "Satellite communications and global connectivity",
      icon: Satellite
    },
    {
      title: "Environmental",
      description: "Climate monitoring and environmental research",
      icon: Globe
    },
    {
      title: "Transportation",
      description: "Navigation systems and autonomous vehicle technology",
      icon: Target
    },
    {
      title: "Research & Education",
      description: "Space research and educational technology",
      icon: Lightbulb
    },
    {
      title: "Commercial Space",
      description: "Space tourism and commercial space services",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Space Technology Solutions - Zion Tech Group"
        description="Cutting-edge space technology solutions including satellite communications, navigation systems, and space research."
        keywords="space technology, satellite communications, GPS, space research, satellite technology"
        canonical="https://ziontechgroup.com/services/space-tech"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Space Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Space Tech</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore the final frontier with our cutting-edge space technology solutions 
              that enable communication, navigation, research, and exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Space Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Space Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive space technology solutions designed to advance exploration, 
              communication, and scientific discovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-400 mr-2">•</span>
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
              Benefits of Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform industries and advance human knowledge with space technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Industry-Specific Space Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored space technology solutions for your industry's unique requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
            Ready to Explore Space Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our space technology experts help you implement cutting-edge solutions 
            that advance your mission and expand human capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Space Tech Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTech;
