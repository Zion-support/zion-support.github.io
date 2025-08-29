import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, TrendingUp, Shield, Users, Zap, ArrowRight, CheckCircle, Star, Target, Lightbulb, Database, Cpu, Globe, Rocket } from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Machine Learning",
      description: "State-of-the-art ML algorithms for predictive analytics and pattern recognition"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards and instant insights for data-driven decision making"
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Forecast trends and identify opportunities with AI-powered predictions"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance"
    },
    {
      icon: Users,
      title: "Collaborative Intelligence",
      description: "Team-based AI insights with role-based access and sharing"
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI-generated reports and actionable recommendations"
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40%",
    "Reduce decision-making time by 60%",
    "Improve forecast accuracy by 85%",
    "Cut operational costs by 30%",
    "Enhance customer satisfaction by 50%",
    "Accelerate time-to-market by 45%"
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Risk Assessment", "Fraud Detection", "Portfolio Optimization", "Market Analysis"]
    },
    {
      industry: "Healthcare",
      applications: ["Patient Diagnosis", "Treatment Planning", "Resource Allocation", "Predictive Care"]
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Production Planning"]
    },
    {
      industry: "Retail",
      applications: ["Customer Segmentation", "Inventory Management", "Price Optimization", "Demand Forecasting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">AI-Powered Intelligence</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable intelligence with our advanced AI-powered analytics platform. 
              Get real-time insights, predictive analytics, and automated decision-making capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful AI Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with intuitive analytics to deliver unprecedented business insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Business with AI Intelligence
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI Business Intelligence platform delivers measurable results across all aspects of your organization, 
                from operational efficiency to strategic decision-making.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                    <div className="text-sm text-gray-300">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                    <div className="text-sm text-gray-300">Faster Decisions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
                    <div className="text-sm text-gray-300">Forecast Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI Business Intelligence transforms operations across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg w-fit mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Deep Learning", description: "Neural networks & ML algorithms" },
              { icon: Database, name: "Big Data", description: "Distributed data processing" },
              { icon: Cpu, name: "Edge Computing", description: "Real-time local processing" },
              { icon: Globe, name: "Cloud Native", description: "Scalable cloud infrastructure" },
              { icon: Shield, name: "Security", description: "Enterprise-grade protection" },
              { icon: Zap, name: "Performance", description: "High-speed analytics engine" },
              { icon: Users, name: "Collaboration", description: "Team-based intelligence" },
              { icon: Rocket, name: "Innovation", description: "Continuous AI advancement" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 mb-4 group-hover:border-purple-500/50 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-purple-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and unlock the full potential of your business data with our intelligent analytics platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}