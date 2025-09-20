import React from 'react';
import Link from 'next/link';
import { 
  Factory, 
  Cpu, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Brain,
  Database,
  Network,
  Target,
  Users,
  Settings,
  Gauge,
  Eye,
  AlertTriangle
} from 'lucide-react';

export default function ManufacturingSolutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Manufacturing",
      description: "Intelligent automation and predictive maintenance for smart factories",
      features: ["Predictive maintenance", "Quality control", "Process optimization"]
    },
    {
      icon: Cpu,
      title: "IoT Integration",
      description: "Connected devices and sensors for real-time monitoring and control",
      features: ["Real-time monitoring", "Data collection", "Remote control"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights for operational efficiency and quality improvement",
      features: ["Performance analytics", "Quality metrics", "Efficiency tracking"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Industrial-grade security for connected manufacturing systems",
      features: ["Threat detection", "Access control", "Data protection"]
    },
    {
      icon: Network,
      title: "Digital Twin",
      description: "Virtual replicas of physical systems for simulation and optimization",
      features: ["3D modeling", "Simulation", "Performance prediction"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlined workflows and automated decision-making processes",
      features: ["Workflow automation", "Decision support", "Process optimization"]
    }
  ];

  const useCases = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered equipment monitoring to prevent costly breakdowns",
      icon: "🔧"
    },
    {
      title: "Quality Control",
      description: "Automated inspection and quality assurance systems",
      icon: "✅"
    },
    {
      title: "Supply Chain Optimization",
      description: "Intelligent inventory management and logistics optimization",
      icon: "📦"
    },
    {
      title: "Energy Management",
      description: "Smart energy consumption monitoring and optimization",
      icon: "⚡"
    },
    {
      title: "Worker Safety",
      description: "AI-powered safety monitoring and hazard detection",
      icon: "🛡️"
    },
    {
      title: "Production Planning",
      description: "Intelligent production scheduling and resource allocation",
      icon: "📅"
    }
  ];

  const benefits = [
    "Reduce downtime by 30-50%",
    "Improve product quality by 25%",
    "Increase production efficiency by 20-35%",
    "Reduce energy costs by 15-25%",
    "Enhance worker safety by 40%",
    "Optimize inventory management by 30%"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
              <Factory className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Manufacturing Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your manufacturing operations with Industry 4.0 technology. 
            Embrace smart manufacturing for increased efficiency, quality, and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive suite of manufacturing technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg w-fit mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how smart manufacturing is transforming industries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Manufacturing Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real results with our smart manufacturing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Industry 4.0 revolution with Zion Tech Group's smart manufacturing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}