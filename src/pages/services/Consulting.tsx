import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Target, Search, BarChart3, Users, Zap } from 'lucide-react';

const Consulting: React.FC = () => {
  const consultingServices = [
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape and capabilities",
      features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"],
      icon: Search
    },
    {
      title: "Strategic Planning",
      description: "Develop long-term technology strategy aligned with business objectives",
      features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"],
      icon: BarChart3
    },
    {
      title: "Vendor Selection",
      description: "Expert guidance in selecting the right technology partners and solutions",
      features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"],
      icon: Users
    },
    {
      title: "Project Management",
      description: "Professional project management for successful technology implementations",
      features: ["Project Planning", "Team Coordination", "Timeline Management", "Quality Assurance"],
      icon: Target
    }
  ];

  const consultingApproach = [
    { step: "Discovery", icon: "🔍", description: "Understand your business needs and challenges" },
    { step: "Analysis", icon: "📊", description: "Analyze current state and identify opportunities" },
    { step: "Strategy", icon: "🎯", description: "Develop comprehensive recommendations" },
    { step: "Implementation", icon: "🚀", description: "Execute strategy with ongoing support" }
  ];

  const consultingAreas = [
    { area: "Enterprise Architecture", solutions: ["Technology strategy", "System design", "Integration planning", "Scalability assessment"] },
    { area: "Digital Strategy", solutions: ["Digital transformation", "Technology roadmap", "Innovation strategy", "Change management"] },
    { area: "Security & Compliance", solutions: ["Security assessment", "Compliance audit", "Risk management", "Security strategy"] },
    { area: "Cloud Strategy", solutions: ["Cloud assessment", "Migration planning", "Cost optimization", "Multi-cloud strategy"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technology Consulting - Zion Tech Group"
        description="Get expert technology consulting services to align your business strategy with cutting-edge solutions."
        keywords="technology consulting, strategic consulting, team training, project management, performance optimization"
        canonical="https://ziontechgroup.com/services/consulting"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Make informed technology decisions with expert guidance. Our consulting services 
              help you navigate complex technology choices and maximize your technology investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Consultation
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

        {/* Consulting Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful technology consulting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingApproach.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology consulting to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
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

        {/* Consulting Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Specialized Consulting Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Deep expertise across key technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingAreas.map((area, index) => (
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
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert consultants help you make the right technology decisions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule Consultation
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

export default Consulting;