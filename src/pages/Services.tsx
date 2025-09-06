import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Micro SaaS Development",
      description: "End-to-end product development with billing, auth, and analytics",
      features: ["Foundational architecture", "Billing + subscriptions", "Growth analytics"],
      icon: "🚀",
      color: "from-blue-500 to-purple-600",
      href: "/services/micro-saas"
    },
    {
      title: "AI Services",
      description: "LLM applications, RAG systems, and MLOps pipelines",
      features: ["RAG and agents", "Evals + guardrails", "MLOps pipelines"],
      icon: "🤖",
      color: "from-purple-500 to-pink-600",
      href: "/services/ai-services"
    },
    {
      title: "IT Services",
      description: "Cloud migration, DevOps, and security solutions",
      features: ["Cloud migration", "DevOps + SRE", "Security"],
      icon: "⚙️",
      color: "from-green-500 to-blue-600",
      href: "/services/it-services"
    },
    {
      title: "Business Automation",
      description: "Intelligent automation tools that streamline operations and boost productivity",
      features: ["Workflow automation", "Document processing", "Customer service bots"],
      icon: "⚡",
      color: "from-yellow-500 to-orange-600",
      href: "/services/automation-tools"
    },
    {
      title: "AI Copilots",
      description: "Intelligent assistants that enhance productivity and automate complex tasks",
      features: ["Code development", "Customer support", "Sales & marketing"],
      icon: "🧠",
      color: "from-indigo-500 to-purple-600",
      href: "/services/ai-copilots"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and BI solutions that transform data into insights",
      features: ["Real-time dashboards", "Predictive analytics", "AI-powered insights"],
      icon: "📊",
      color: "from-teal-500 to-cyan-600",
      href: "/services/data-analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-200 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-200">
                    <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.href}
                className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Talk to our experts about your project. We'll help you choose the right service and create a custom solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;