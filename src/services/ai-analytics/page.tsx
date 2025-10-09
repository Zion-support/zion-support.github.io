import React from 'react';
import { BarChart, TrendingUp, Target, Zap, Brain, CheckCircle, Phone, Mail, Star, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  const _features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced machine learning algorithms',
      benefits: ['95% accuracy', 'Real-time insights', 'Automated reporting']
    },
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Transform complex data into intuitive, interactive dashboards and reports',
      benefits: ['Interactive charts', 'Custom dashboards', 'Real-time updates']
    },
    {
      icon: Target,
      title: 'Performance Tracking',
      description: 'Monitor key metrics and KPIs with automated alerts and recommendations',
      benefits: ['KPI monitoring', 'Smart alerts', 'Actionable insights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Analytics Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {_features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <feature.icon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-cyan-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI analytics platform and discover insights that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href="/demo" 
              className="bg-transparent text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIAnalyticsPage;