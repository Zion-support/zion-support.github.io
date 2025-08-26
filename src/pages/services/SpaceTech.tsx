import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Globe, Satellite, Target, Lightbulb, Shield, Rocket, Zap } from 'lucide-react';

const SpaceTech: React.FC = () => {
  const spaceTechServices = [
    {
      title: "Earth Observation",
      description: "Environmental monitoring, climate research, and natural disaster assessment",
      features: ["Satellite Imagery", "Climate Monitoring", "Disaster Response", "Environmental Analysis"],
      icon: Globe
    },
    {
      title: "Satellite Communications",
      description: "Global connectivity, broadband internet, and emergency communications",
      features: ["Global Coverage", "High-Speed Internet", "Emergency Comms", "IoT Connectivity"],
      icon: Satellite
    },
    {
      title: "Navigation & Positioning",
      description: "GPS, positioning systems, and autonomous vehicle guidance",
      features: ["Precise Positioning", "Autonomous Navigation", "Location Services", "Mapping Solutions"],
      icon: Target
    },
    {
      title: "Space Research",
      description: "Space exploration, astronomy, and fundamental physics research",
      features: ["Telescope Systems", "Space Missions", "Data Analysis", "Research Platforms"],
      icon: Lightbulb
    },
    {
      title: "Defense & Security",
      description: "National security, surveillance, and strategic communications",
      features: ["Surveillance Systems", "Secure Communications", "Threat Detection", "Strategic Defense"],
      icon: Shield
    },
    {
      title: "Commercial Space",
      description: "Space tourism, mining, and commercial satellite services",
      features: ["Space Tourism", "Resource Mining", "Commercial Satellites", "Space Infrastructure"],
      icon: Rocket
    }
  ];

  const spaceTechAreas = [
    { area: "Satellite Technology", solutions: ["Communication satellites", "Earth observation", "Navigation systems", "Research platforms"] },
    { area: "Space Infrastructure", solutions: ["Launch vehicles", "Space stations", "Ground stations", "Mission control"] },
    { area: "Space Applications", solutions: ["Remote sensing", "Telecommunications", "Navigation", "Scientific research"] },
    { area: "Space Operations", solutions: ["Mission planning", "Satellite operations", "Data processing", "Ground support"] }
  ];

  const keyBenefits = [
    "Global connectivity and communication",
    "Environmental monitoring and climate research",
    "Precise navigation and positioning",
    "Scientific discovery and exploration",
    "National security and defense",
    "Commercial space opportunities"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Space Technology - Zion Tech Group"
        description="Cutting-edge space technology solutions for communication, navigation, research, and exploration."
        keywords="space technology, satellite communications, space research, navigation systems, space infrastructure"
        canonical="https://ziontechgroup.com/services/space-technology"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Space
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of space exploration and satellite technology. 
              Our advanced solutions enable communication, navigation, research, and exploration beyond Earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Explore Space Solutions
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

        {/* Space Tech Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive space technology solutions for modern applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaceTechServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
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
                Benefits of Space Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Revolutionary solutions that transform how we live and work
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">🚀</div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Space Tech Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all space technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {spaceTechAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.area}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {area.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
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
              Ready to Explore Space Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our space technology experts help you reach new heights with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
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

export default SpaceTech;
