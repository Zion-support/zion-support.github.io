import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
<<<<<<< HEAD
<<<<<<< HEAD
import {CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car} from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-55cf

const ServicesPage: React.FC = () => {
  const _aiServices = [
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
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $2,500/month',
      popular: false
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights with AI',
      features: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Real-time Insights'],
      price: 'Starting at $1,800/month',
      popular: false
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Scalability', 'Security'],
      price: 'Starting at $1,200/month',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database solutions and optimization',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Monitoring'],
      price: 'Starting at $1,000/month',
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment processes',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      price: 'Starting at $1,500/month',
      popular: false
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'Starting at $2,000/month',
      popular: false
    }
  ];

  const microSaasServices = [
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'AI-powered development and productivity tools',
      features: ['Code Generation', 'Bug Detection', 'Performance Analysis', 'Documentation'],
      price: 'Starting at $15/month',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Analytics Tools',
      description: 'Advanced business intelligence and analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      price: 'Starting at $25/month',
      popular: false
    },
    {
      icon: MessageSquare,
      title: 'Communication Tools',
      description: 'AI-enhanced communication and collaboration',
      features: ['Smart Chat', 'Meeting Assistant', 'Translation', 'Sentiment Analysis'],
      price: 'Starting at $20/month',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Tools',
      description: 'Complete e-commerce solutions and automation',
      features: ['Inventory Management', 'Order Processing', 'Customer Service', 'Analytics'],
      price: 'Starting at $30/month',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% return on investment for our clients'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ certified professionals with 10+ years experience'
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Round-the-clock support with guaranteed response times'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick implementation with minimal downtime'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced services solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;