import React from 'react';
import { Link } from 'react-router-dom';

const DigitalTransformation: React.FC = () => {
  const transformationServices = [
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Performance Analytics"]
    },
    {
      title: "Change Management",
      description: "Guide your organization through digital transformation initiatives",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategies", "Success Metrics"]
    },
    {
      title: "Technology Strategy",
      description: "Develop comprehensive technology roadmaps for business growth",
      features: ["Technology Assessment", "Architecture Planning", "Vendor Selection", "Implementation Roadmap"]
    },
    {
      title: "Data & Analytics",
      description: "Transform data into actionable business insights",
      features: ["Data Strategy", "Analytics Implementation", "Business Intelligence", "Predictive Modeling"]
    }
  ];

  const transformationAreas = [
    {
      area: "Customer Experience",
      description: "Enhance customer interactions and satisfaction through digital channels",
      benefits: ["Improved Customer Satisfaction", "Increased Engagement", "Faster Response Times", "Personalized Service"]
    },
    {
      area: "Operations",
      description: "Optimize internal processes for efficiency and cost reduction",
      benefits: ["Reduced Costs", "Increased Efficiency", "Better Resource Utilization", "Improved Quality"]
    },
    {
      area: "Business Models",
      description: "Innovate and adapt business models for the digital age",
      benefits: ["New Revenue Streams", "Market Expansion", "Competitive Advantage", "Future-Proof Business"]
    },
    {
      area: "Workforce",
      description: "Empower employees with digital tools and skills",
      benefits: ["Increased Productivity", "Better Collaboration", "Skill Development", "Employee Satisfaction"]
    }
  ];

  const successMetrics = [
    {
      metric: "Operational Efficiency",
      description: "Measure improvements in process speed and resource utilization",
      indicators: ["Process Cycle Time", "Resource Utilization", "Cost per Transaction", "Error Rates"]
    },
    {
      metric: "Customer Satisfaction",
      description: "Track improvements in customer experience and engagement",
      indicators: ["NPS Scores", "Customer Retention", "Response Times", "Resolution Rates"]
    },
    {
      metric: "Revenue Growth",
      description: "Monitor financial impact of digital transformation",
      indicators: ["Revenue Increase", "Market Share", "New Customer Acquisition", "Cross-Selling Success"]
    },
    {
      metric: "Employee Productivity",
      description: "Assess workforce efficiency and satisfaction improvements",
      indicators: ["Output per Employee", "Training Completion", "Employee Satisfaction", "Innovation Metrics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business for the digital age with strategic guidance and proven methodologies
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Future-Proof Your Business</h2>
                <p className="text-gray-300 mb-6">
                  Digital transformation is not just about technology—it's about reimagining your business for the future. Our comprehensive approach ensures successful transformation across people, processes, and technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Proven transformation methodologies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">End-to-end change management support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Measurable business outcomes</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <p className="text-gray-300 text-lg">Strategic Transformation Solutions</p>
              </div>
            </div>
          </div>

          {/* Transformation Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Transformation Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital transformation solutions designed for sustainable success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Areas */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Transformation Areas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive transformation across all aspects of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{area.area}</h3>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Measuring Success</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track the impact of your digital transformation with key performance indicators
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{metric.metric}</h3>
                  <p className="text-gray-300 mb-4">{metric.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Indicators:</h4>
                    <ul className="space-y-1">
                      {metric.indicators.map((indicator, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {indicator}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Transformation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assess</h3>
                <p className="text-gray-300 text-sm">Evaluate current state and transformation readiness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">Develop comprehensive transformation roadmap</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Design new processes and technology solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implement</h3>
                <p className="text-gray-300 text-sm">Execute transformation with change management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimize</h3>
                <p className="text-gray-300 text-sm">Monitor, measure, and continuously improve</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how digital transformation can drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;