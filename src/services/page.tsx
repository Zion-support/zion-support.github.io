import React from 'react';
import {CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive AI solutions for every business need',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      popular: true
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation and workflow optimization',
      features: ['Workflow Automation', 'Smart Scheduling', 'Process Optimization', 'Task Management'],
      price: 'Starting at $2,000/month',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Advanced AI-powered security solutions and threat detection',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $1,800/month',
      popular: false
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Security Compliance'],
      price: 'Starting at $1,200/month',
      popular: true
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database administration and optimization',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      price: 'Starting at $1,000/month',
      popular: false
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Comprehensive system administration and maintenance',
      features: ['Server Management', 'User Administration', 'Security Updates', 'Monitoring'],
      price: 'Starting at $800/month',
      popular: false
    }
  ];

  const benefits = [
    '24/7 Expert Support',
    'Proactive Monitoring',
    'Scalable Solutions',
    'Cost Optimization',
    'Security First Approach',
    'Rapid Response Times'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Services | Zion Tech Group"
        description="Comprehensive AI and IT services solutions by Zion Tech Group."
        keywords="AI services, IT services, cloud solutions, database management, system administration"
      />
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive AI and IT services solutions designed to transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Contact Us
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;