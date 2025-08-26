import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Target, TrendingUp, Shield, Users, Globe, Cpu, FileText } from 'lucide-react';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Business",
      description: "Transform your business operations with AI-powered autonomous systems that work 24/7 to optimize processes, reduce costs, and increase efficiency.",
      features: ["Process Automation", "Decision Intelligence", "Predictive Analytics", "Cost Optimization"],
      path: "/solutions/ai-autonomous-business"
    },
    {
      icon: Cpu,
      title: "AI Autonomous Research",
      description: "Accelerate research and development with AI systems that can analyze vast datasets, identify patterns, and generate insights autonomously.",
      features: ["Data Analysis", "Pattern Recognition", "Insight Generation", "Research Automation"],
      path: "/solutions/ai-autonomous-research"
    },
    {
      icon: Globe,
      title: "AI Autonomous Ecosystem",
      description: "Build interconnected AI systems that work together to create a comprehensive digital ecosystem for your organization.",
      features: ["System Integration", "Cross-platform Communication", "Unified Intelligence", "Scalable Architecture"],
      path: "/solutions/ai-autonomous-ecosystem"
    },
    {
      icon: Shield,
      title: "AI-Powered Security",
      description: "Protect your digital assets with advanced AI security systems that detect and respond to threats in real-time.",
      features: ["Threat Detection", "Real-time Response", "Behavioral Analysis", "Predictive Security"],
      path: "/solutions/ai-powered-security"
    },
    {
      icon: FileText,
      title: "AI Content Generation",
      description: "Create high-quality, engaging content at scale with AI systems that understand your brand voice and audience.",
      features: ["Content Creation", "Brand Voice Consistency", "SEO Optimization", "Multi-format Output"],
      path: "/solutions/ai-content-generation"
    },
    {
      icon: TrendingUp,
      title: "AI Business Intelligence",
      description: "Transform raw data into actionable insights with AI-powered business intelligence that helps you make better decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Reporting", "Strategic Insights"],
      path: "/solutions/ai-business-intelligence"
    }
  ];

  const benefits = [
    {
      title: "Machine Learning",
      description: "Custom ML models and algorithms for your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Data Modeling", "Model Training"],
      icon: "🤖"
    },
    {
      title: "Natural Language Processing",
      description: "AI-powered text and language understanding solutions",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Chatbots"],
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video analysis capabilities",
      features: ["Object Detection", "Image Recognition", "Video Analytics", "Facial Recognition"],
      icon: "👁️"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation and adoption",
      features: ["AI Strategy", "Use Case Analysis", "Technology Selection", "Implementation Planning"],
      icon: "🎯"
    }
  ];

  const aiTechnologies = [
    { name: "TensorFlow", icon: "🧠", description: "Open-source ML framework" },
    { name: "PyTorch", icon: "🔥", description: "Deep learning platform" },
    { name: "OpenAI", icon: "🤖", description: "Advanced language models" },
    { name: "Azure AI", icon: "☁️", description: "Microsoft AI services" },
    { name: "AWS AI", icon: "⚡", description: "Amazon AI solutions" },
    { name: "Google AI", icon: "🔍", description: "Google AI platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Solutions
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Transform your business with cutting-edge AI technology and intelligent automation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-400 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            AI Technologies We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                <p className="text-slate-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our AI experts help you implement intelligent solutions that drive growth and efficiency
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;