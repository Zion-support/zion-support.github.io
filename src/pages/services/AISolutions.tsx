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
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize workflows to boost productivity by up to 300%"
    },
    {
      icon: Target,
      title: "Better Decision Making",
      description: "Leverage AI insights to make data-driven decisions that improve business outcomes"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and process optimization"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Provide personalized, intelligent interactions that improve customer satisfaction and loyalty"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage the power of artificial intelligence to automate operations, enhance decision-making, 
              and create intelligent systems that work for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From autonomous business systems to intelligent research assistants, we provide end-to-end AI solutions 
              that drive innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI with solutions designed for the modern enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;