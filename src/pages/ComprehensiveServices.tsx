import React from "react";
import { Link } from "react-router-dom";
import { Brain, Zap, Shield, Cloud, Database, Users, BarChart3, Cog, Target, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ComprehensiveServices: React.FC = () => {
  const services = [
    {
      id: "ai-consulting",
      name: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and plan your AI transformation journey.",
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "Implementation Planning",
        "ROI Analysis",
      ],
      icon: <Brain className="w-8 h-8" />,
      link: "/services/ai-consulting",
    },
    {
      id: "ai-development",
      name: "AI Development",
      description: "Custom AI solutions built to your specific requirements and business needs.",
      features: [
        "Custom AI Models",
        "API Development",
        "Integration Services",
        "Performance Optimization",
      ],
      icon: <Cog className="w-8 h-8" />,
      link: "/services/ai-development",
    },
    {
      id: "ai-training",
      name: "AI Training",
      description: "Comprehensive training programs to upskill your team in AI technologies and best practices.",
      features: [
        "Technical Training",
        "Best Practices",
        "Hands-on Workshops",
        "Certification Programs",
      ],
      icon: <Users className="w-8 h-8" />,
      link: "/services/ai-training",
    },
    {
      id: "ai-support",
      name: "AI Support",
      description: "Ongoing support and maintenance for your AI systems to ensure optimal performance.",
      features: [
        "24/7 Support",
        "System Monitoring",
        "Performance Tuning",
        "Regular Updates",
      ],
      icon: <Shield className="w-8 h-8" />,
      link: "/services/ai-support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Comprehensive Services - Zion Website</title>
        <meta name="description" content="Explore our comprehensive AI services designed to transform your business." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end AI services designed to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Learn More
                <Rocket className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;
