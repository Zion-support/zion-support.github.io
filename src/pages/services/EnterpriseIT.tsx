import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Building, Server, Network, Shield, Database, Users, Zap, Globe } from 'lucide-react';

const EnterpriseIT: React.FC = () => {
  const enterpriseServices = [
    {
      title: "Enterprise Infrastructure",
      description: "Scalable and reliable IT infrastructure for large organizations",
      features: ["High-availability systems", "Load balancing", "Disaster recovery", "Performance optimization"],
      icon: Building
    },
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions for enterprise environments",
      features: ["Identity management", "Access control", "Threat detection", "Compliance management"],
      icon: Shield
    },
    {
      title: "Enterprise Applications",
      description: "Custom enterprise applications and system integration",
      features: ["Custom development", "API integration", "Legacy modernization", "Workflow automation"],
      icon: Server
    },
    {
      title: "Enterprise Data Management",
      description: "Advanced data management and analytics solutions",
      features: ["Data warehousing", "Business intelligence", "Data governance", "Analytics platforms"],
      icon: Database
    }
  ];

  const enterpriseAreas = [
    { area: "Infrastructure Management", solutions: ["Server management", "Network administration", "Storage systems", "Cloud infrastructure"] },
    { area: "Security & Compliance", solutions: ["Security frameworks", "Compliance audits", "Risk management", "Incident response"] },
    { area: "Application Development", solutions: ["Custom applications", "System integration", "API development", "Mobile solutions"] },
    { area: "Data & Analytics", solutions: ["Data strategy", "Business intelligence", "Machine learning", "Predictive analytics"] }
  ];

  const keyBenefits = [
    "Scalable solutions that grow with your business",
    "Enterprise-grade security and compliance",
    "24/7 support and monitoring",
    "Proven methodologies and best practices",
    "Cost optimization and ROI improvement",
    "Reduced operational complexity"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise IT Solutions - Zion Tech Group"
        description="Comprehensive enterprise IT solutions designed for large organizations with complex technology needs."
        keywords="enterprise IT, enterprise solutions, large organization IT, enterprise infrastructure, enterprise security"
        canonical="https://ziontechgroup.com/services/enterprise-it"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed for large organizations with complex technology needs. 
              Our enterprise services ensure scalability, security, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Enterprise Consultation
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

        {/* Enterprise Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Enterprise IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions designed for enterprise-scale operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseServices.map((service, index) => (
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
                Benefits of Enterprise IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Why large organizations choose our enterprise solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">🏢</div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all enterprise technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseAreas.map((area, index) => (
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
              Ready for Enterprise IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our enterprise experts help you build a robust and scalable IT foundation for your organization.
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

export default EnterpriseIT;
