import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Clock,
  Target
} from 'lucide-react';

const RealTimeCognitiveAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-Time Decision Making",
      description: "AI systems that process data and make decisions in real-time, enabling instant responses to changing conditions.",
      benefit: "<50ms decision latency"
    },
    {
      icon: Clock,
      title: "Continuous Learning",
      description: "Systems that continuously improve and adapt based on new data and changing conditions.",
      benefit: "24/7 optimization"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict future outcomes and optimize processes proactively.",
      benefit: "95% accuracy rate"
    }
  ];

  const solutions = [
    {
      icon: "🤖",
      title: "Intelligent Process Automation",
      features: ["Real-time Processing", "Adaptive Learning", "Decision Automation", "Workflow Optimization"]
    },
    {
      icon: "🧠",
      title: "Cognitive Analytics",
      features: ["Pattern Recognition", "Predictive Modeling", "Anomaly Detection", "Insight Generation"]
    },
    {
      icon: "⚡",
      title: "Real-Time Monitoring",
      features: ["Live Dashboards", "Performance Metrics", "Alert Management", "Process Analytics"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation - Zion Tech Group</title>
        <meta name="description" content="Advanced real-time cognitive automation solutions that combine AI, machine learning, and intelligent workflows for maximum business efficiency." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Real-Time Cognitive Automation
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that thinks, learns, and adapts in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Cognitive Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cognitive automation solutions deliver unprecedented efficiency and intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cognitive Automation Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to transform your business processes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Cognitive Automation?
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">⚡ Real-Time Processing</h3>
                    <p className="text-gray-600">
                      Process and respond to data in real-time, enabling instant decision-making and immediate action.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">🧠 Intelligent Decision Making</h3>
                    <p className="text-gray-600">
                      AI-powered decision engines that learn from patterns and make optimal choices automatically.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">🔄 Adaptive Learning</h3>
                    <p className="text-gray-600">
                      Systems that continuously improve and adapt based on new data and changing conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6">
                  Transform your business with real-time cognitive automation solutions.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the power of real-time cognitive automation and watch your business processes evolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Assessment
                <Zap className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
              >
                Request Live Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RealTimeCognitiveAutomationPage;