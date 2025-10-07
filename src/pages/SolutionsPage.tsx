import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, Database, Cloud } from "lucide-react";

const SolutionsPage: React.FC = () => {
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
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Tailored solutions for enterprise, SMB, and startup businesses. AI-powered solutions that drive growth and efficiency." />
        <meta name="keywords" content="enterprise solutions, SMB solutions, startup solutions, AI business solutions" />
      </Helmet>
      
      <main className="py-20">
        <div className="container mx-auto px-4">
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
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionsPage;
