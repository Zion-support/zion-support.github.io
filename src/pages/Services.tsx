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
      description: "Cloud migration, DevOps, and security solutions",
      features: ["Cloud migration", "DevOps + SRE", "Security", "Infrastructure as Code", "Monitoring & Alerting"],
      icon: "⚙️",
      color: "from-purple-500 to-pink-600",
      href: "/services/it-services",
      price: "Starting at $2,500/month"
    },
    {
      title: "Blockchain",
      description: "Smart contracts, DeFi protocols, and Web3 applications",
      features: ["Smart contracts", "DeFi protocols", "NFT platforms", "Tokenization", "Web3 integration"],
      icon: "⛓️",
      color: "from-orange-500 to-red-600",
      href: "/services/blockchain",
      price: "Starting at $4,000/month"
    },
    {
      title: "Data Analytics",
      description: "Business intelligence, predictive modeling, and real-time analytics",
      features: ["BI dashboards", "Predictive analytics", "Real-time insights", "Data warehousing", "Machine learning"],
      icon: "📊",
      color: "from-indigo-500 to-purple-600",
      href: "/services/data-analytics",
      price: "Starting at $2,000/month"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security audits", "Penetration testing", "Compliance management", "Threat monitoring", "Incident response"],
      icon: "🔒",
      color: "from-red-500 to-orange-600",
      href: "/services/cybersecurity",
      price: "Starting at $3,000/month"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime",
      features: ["AWS/GCP/Azure migration", "Data migration", "Application modernization", "Cost optimization", "Performance tuning"],
      icon: "☁️",
      color: "from-cyan-500 to-blue-600",
      href: "/services/cloud-migration",
      price: "Starting at $4,500/month"
    },
    {
      title: "DevOps & SRE",
      description: "Automated deployment, monitoring, and reliability engineering",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring & alerting", "Disaster recovery", "Performance optimization"],
      icon: "🔧",
      color: "from-teal-500 to-green-600",
      href: "/services/devops",
      price: "Starting at $3,500/month"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android apps", "React Native", "Flutter", "App store optimization", "Push notifications"],
      icon: "📱",
      color: "from-pink-500 to-purple-600",
      href: "/services/mobile-development",
      price: "Starting at $3,000/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="text-lg font-semibold">{service.price}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mx-4 sm:mx-6 lg:mx-8 mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Talk to our experts about your project. We'll help you choose the right service and create a custom solution for your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;