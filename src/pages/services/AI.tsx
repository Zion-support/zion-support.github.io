import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Zap,
  Target,
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Eye,
  MessageSquare,
  Heart,
  DollarSign,
  Factory,
  ShoppingCart
} from 'lucide-react';

export default function AIServices() {
  const aiServices = [
    {
      name: "AI Strategy & Consulting",
      description: "Strategic guidance on implementing AI solutions across your organization",
      icon: Target,
      features: [
        "AI readiness assessment",
        "Technology roadmap planning",
        "ROI analysis and business case development",
        "Change management strategies"
      ],
      price: "From $2,500",
      duration: "2-4 weeks"
    },
    {
      name: "Machine Learning Development",
      description: "Custom ML models and algorithms tailored to your specific business needs",
      icon: Brain,
      features: [
        "Custom model development",
        "Data preprocessing and feature engineering",
        "Model training and optimization",
        "Performance monitoring and maintenance"
      ],
      price: "From $5,000",
      duration: "4-8 weeks"
    },
    {
      name: "AI-Powered Applications",
      description: "Intelligent automation and insights through custom AI applications",
      icon: Zap,
      features: [
        "Chatbot and virtual assistant development",
        "Predictive analytics applications",
        "Computer vision solutions",
        "Natural language processing systems"
      ],
      price: "From $8,500",
      duration: "6-12 weeks"
    },
    {
      name: "AI Infrastructure & MLOps",
      description: "Scalable AI infrastructure and machine learning operations",
      icon: Cloud,
      features: [
        "ML pipeline automation",
        "Model versioning and deployment",
        "Scalable training infrastructure",
        "Monitoring and alerting systems"
      ],
      price: "From $6,000",
      duration: "4-10 weeks"
    }
  ];

  const aiTechnologies = [
    { name: "TensorFlow", description: "Open-source ML framework", icon: Code },
    { name: "PyTorch", description: "Deep learning research platform", icon: Brain },
    { name: "OpenAI GPT", description: "Advanced language models", icon: Cpu },
    { name: "Computer Vision", description: "Image and video analysis", icon: Eye },
    { name: "NLP", description: "Natural language processing", icon: MessageSquare },
    { name: "AutoML", description: "Automated machine learning", icon: Zap }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      applications: ["Medical image analysis", "Drug discovery", "Patient risk prediction"],
      icon: Heart
    },
    {
      industry: "Finance",
      applications: ["Fraud detection", "Credit scoring", "Algorithmic trading"],
      icon: DollarSign
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization"],
      icon: Factory
    },
    {
      industry: "Retail",
      applications: ["Customer segmentation", "Demand forecasting", "Personalized recommendations"],
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI & Machine Learning
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence. From strategy to implementation,
              we deliver AI solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-slate-400 text-sm">{service.duration}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We leverage the latest AI frameworks and tools to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how AI is transforming various sectors and creating new opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-slate-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how AI can transform your business operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}