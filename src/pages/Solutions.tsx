import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, Database, Cloud } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Streamline your workflows with intelligent automation solutions.",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Intelligent Routing",
        "Performance Monitoring",
      ],
      link: "/solutions/automation",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Solutions",
      description: "Protect your business with advanced AI-powered security systems.",
      features: [
        "Threat Detection",
        "Anomaly Detection",
        "Risk Assessment",
        "Compliance Monitoring",
      ],
      link: "/solutions/security",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global AI Platform",
      description: "Deploy AI solutions across multiple regions with our global platform.",
      features: [
        "Multi-Region Deployment",
        "Edge Computing",
        "Global CDN",
        "Localized Processing",
      ],
      link: "/solutions/global",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge AI Computing",
      description: "Bring AI processing closer to your data with edge computing solutions.",
      features: [
        "Edge Processing",
        "Real-time Inference",
        "Low Latency",
        "Offline Capability",
      ],
      link: "/solutions/edge",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Transform your data into actionable insights with AI-powered analytics.",
      features: [
        "Data Processing",
        "Predictive Analytics",
        "Real-time Insights",
        "Data Visualization",
      ],
      link: "/solutions/data",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud AI Services",
      description: "Scalable AI solutions hosted on secure, high-performance cloud infrastructure.",
      features: [
        "Scalable Infrastructure",
        "High Performance",
        "Global Availability",
        "Cost Optimization",
      ],
      link: "/solutions/cloud",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Solutions - Zion Website</title>
        <meta name="description" content="Discover our comprehensive AI solutions designed to transform your business operations." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive AI solutions designed to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={solution.link}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
