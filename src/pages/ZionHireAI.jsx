import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Brain, Users, Clock, TrendingUp } from 'lucide-react';

const ZionHireAI = () => {
  const successMetrics = [
    { metric: "85%", label: "Faster Hiring" },
    { metric: "92%", label: "Better Matches" },
    { metric: "78%", label: "Cost Reduction" },
    { metric: "96%", label: "Candidate Satisfaction" }
  ];

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-blue-400" />,
      title: "AI-Powered Screening",
      description: "Advanced algorithms analyze resumes, skills, and cultural fit to identify the best candidates"
    },
    {
      icon: <Users className="h-12 w-12 text-green-400" />,
      title: "Smart Candidate Matching",
      description: "Machine learning algorithms match candidates to job requirements with high accuracy"
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-400" />,
      title: "Automated Scheduling",
      description: "AI-driven interview scheduling that adapts to candidate and interviewer availability"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-400" />,
      title: "Performance Analytics",
      description: "Comprehensive insights into hiring metrics and process optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Hire AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://ziontechgroup.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
              <a href="#demo" className="px-8 py-4 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {item.metric}
                </div>
                <div className="text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="https://ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2"/>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZionHireAI;
