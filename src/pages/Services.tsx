import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Micro SaaS Development",
      description: "End-to-end product development with billing, auth, and analytics",
      features: ["Foundational architecture", "Billing + subscriptions", "Growth analytics", "Multi-tenant systems", "API development"],
      icon: "🚀",
      color: "from-blue-500 to-purple-600",
      href: "/services/micro-saas",
      price: "Starting at $5,000/month"
    },
    {
      title: "AI Services",
      description: "LLM applications, RAG systems, and MLOps pipelines",
      features: ["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Computer vision", "NLP solutions"],
      icon: "🤖",
      color: "from-green-500 to-blue-600",
      href: "/services/ai-services",
      price: "Starting at $3,500/month"
    },
    {
      title: "IT Services",
      description: "Cloud migration, DevOps, and infrastructure optimization",
      features: ["Cloud migration", "DevOps automation", "Infrastructure optimization", "Security hardening", "Monitoring & alerting"],
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      href: "/services/it-services",
      price: "Starting at $2,500/month"
    },
    {
      title: "AI-Powered CRM",
      description: "Revolutionary CRM with AI automation and predictive analytics",
      features: ["Intelligent lead scoring", "Smart sales automation", "Advanced analytics", "AI customer service"],
      icon: "🎯",
      color: "from-purple-500 to-pink-600",
      href: "/services/ai-powered-crm",
      price: "Starting at $1,500/month"
    },
    {
      title: "AI Content Optimizer",
      description: "AI-powered content creation and optimization",
      features: ["AI content generation", "SEO optimization", "Performance analytics", "Multi-language support"],
      icon: "✍️",
      color: "from-indigo-500 to-purple-600",
      href: "/services/ai-content-optimizer",
      price: "Starting at $1,200/month"
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions with threat detection",
      features: ["Threat detection", "Vulnerability management", "Network security", "SOC services"],
      icon: "🔒",
      color: "from-red-500 to-orange-600",
      href: "/services/cybersecurity-suite",
      price: "Starting at $1,800/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                  <Link
                    to={service.href}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact us today to discuss your project and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;