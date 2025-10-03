import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, CheckCircle, TrendingUp, Clock, Shield, Users } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RealTimeCognitiveAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-Time Processing",
      description: "Process and respond to data in real-time, enabling instant decision-making and immediate action.",
      benefits: ["<50ms decision latency", "Instant workflow execution", "Live process optimization"]
    },
    {
      icon: Zap,
      title: "Self-Learning Systems",
      description: "AI-powered decision engines that learn from patterns and make optimal choices automatically.",
      benefits: ["Continuous learning", "Pattern recognition", "Adaptive optimization"]
    },
    {
      icon: Shield,
      title: "Intelligent Automation",
      description: "Systems that continuously improve and adapt based on new data and changing conditions.",
      benefits: ["Self-healing processes", "Predictive maintenance", "Dynamic resource allocation"]
    },
    {
      icon: Users,
      title: "Cognitive Integration",
      description: "Seamlessly integrate cognitive automation across your existing systems and applications.",
      benefits: ["System integration", "API automation", "Legacy system support"]
    }
  ];

  const benefits = [
    {
      metric: "99.97%",
      label: "Accuracy Rate",
      description: "Near-perfect decision accuracy with continuous learning"
    },
    {
      metric: "87%",
      label: "Cost Reduction",
      description: "Significant operational cost savings through automation"
    },
    {
      metric: "10x",
      label: "Productivity Gains",
      description: "Exponential increase in operational efficiency"
    },
    {
      metric: "<50ms",
      label: "Response Time",
      description: "Ultra-fast decision-making and execution"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Real-time fraud detection, algorithmic trading, and risk assessment",
      icon: "💰"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: "🏭"
    },
    {
      title: "Healthcare",
      description: "Diagnostic assistance, treatment optimization, and patient monitoring",
      icon: "🏥"
    },
    {
      title: "Retail",
      description: "Dynamic pricing, inventory management, and customer personalization",
      icon: "🛍️"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation | Zion AI</title>
        <meta name="description" content="Transform your business with real-time cognitive automation. AI-powered decision engines that deliver instant processing, self-learning systems, and 99.97% accuracy." />
        <meta name="keywords" content="cognitive automation, real-time AI, intelligent automation, business process automation, AI decision engines" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/services" 
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🤖 AI Automation
              </span>
              <span className="block text-purple-300 text-lg">Starting at $7,999/month</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real-Time Cognitive Automation Platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-2">
                Transform Business Operations with Intelligent Automation
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Revolutionize your business operations with AI-powered workflows that deliver instant decision-making, self-learning automation, and 99.97% accuracy. Achieve 87% cost reduction and 10x productivity gains.
            </p>

            {/* Key Metrics Banner */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                  <div className="text-slate-300 text-sm">{benefit.label}</div>
                  <div className="text-slate-400 text-xs mt-1">{benefit.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                Get Started
                <Zap className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Cognitive Automation Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our cognitive automation solutions deliver unprecedented efficiency and intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all">
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-purple-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-slate-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Real-time cognitive automation across diverse industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-slate-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join industry leaders who have revolutionized their operations with real-time cognitive automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                Start Your Transformation
                <Brain className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RealTimeCognitiveAutomation;