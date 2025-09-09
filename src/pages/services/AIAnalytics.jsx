import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Zap, 
  Target, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Cpu,
  FileText,
  MessageCircle
} from 'lucide-react';

export default function AIAnalytics() {
  const aiServices = [
    {
      name: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence with predictive analytics and real-time insights',
      href: '/pages/AIBusinessIntelligence',
      icon: Brain,
      features: ['Predictive analytics', 'Real-time dashboards', 'AI-powered insights', 'Custom reporting'],
      price: '$299/month',
      category: 'AI & Analytics'
    },
    {
      name: 'AI Content Generation',
      description: 'AI-powered content creation for marketing, documentation, and communication',
      href: '/pages/AIContentGenerator',
      icon: FileText,
      features: ['Multi-format content', 'SEO optimization', 'Brand voice consistency', 'Content analytics'],
      price: '$199/month',
      category: 'Content Creation'
    },
    {
      name: 'AI Research Assistant',
      description: 'Intelligent research automation and data analysis platform',
      href: '/pages/AIResearchAssistant',
      icon: Database,
      features: ['Automated research', 'Data synthesis', 'Citation management', 'Collaborative tools'],
      price: '$249/month',
      category: 'Research & Analysis'
    },
    {
      name: 'AI Autonomous Systems',
      description: 'Complete autonomous AI systems for various business applications',
      href: '/pages/AIAutonomousSystemsPlatform',
      icon: Cpu,
      features: ['Autonomous decision making', 'Process automation', 'Learning algorithms', 'Scalable architecture'],
      price: '$499/month',
      category: 'Autonomous Systems'
    }
  ];

  const analyticsServices = [
    {
      name: 'Data Analytics Platform',
      description: 'Comprehensive data analytics and visualization platform',
      href: '/pages/services/DataAnalytics',
      icon: BarChart3,
      features: ['Big data processing', 'Interactive visualizations', 'Real-time analytics', 'Custom dashboards'],
      price: '$399/month',
      category: 'Data Analytics'
    },
    {
      name: 'Business Intelligence',
      description: 'Enterprise business intelligence and reporting solutions',
      href: '/pages/AIBusinessIntelligence',
      icon: TrendingUp,
      features: ['KPI tracking', 'Performance metrics', 'Custom reports', 'Data integration'],
      price: '$299/month',
      category: 'Business Intelligence'
    },
    {
      name: 'Predictive Analytics',
      description: 'AI-powered predictive modeling and forecasting',
      href: '/pages/AIAutonomousPrediction',
      icon: Target,
      features: ['Machine learning models', 'Forecasting tools', 'Risk assessment', 'Trend analysis'],
      price: '$349/month',
      category: 'Predictive Analytics'
    },
    {
      name: 'Customer Analytics',
      description: 'Deep customer insights and behavior analysis',
      href: '/pages/AIAutonomousCustomerService',
      icon: Users,
      features: ['Customer segmentation', 'Behavior tracking', 'Churn prediction', 'Personalization'],
      price: '$199/month',
      category: 'Customer Analytics'
    }
  ];

  const benefits = [
    {
      title: 'AI-Powered Insights',
      description: 'Leverage advanced AI algorithms for deeper business insights',
      icon: Brain
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing',
      icon: Clock
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business needs',
      icon: TrendingUp
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security for your data',
      icon: Shield
    }
  ];

  return (
    <>
      <SEO 
        title="AI & Analytics Services - Business Intelligence & Data Analytics | Zion Tech Group" 
        description="Comprehensive AI and analytics services including business intelligence, predictive analytics, data visualization, and autonomous AI systems. Transform your business with data-driven insights."
        canonical="/services/ai-analytics"
        url="https://ziontechgroup.com/services/ai-analytics"
      />

      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI & Analytics Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Transform your business with intelligent insights and data-driven decisions
            </p>
            <p className="text-lg text-white/80 mb-8">
              Our AI and analytics services combine cutting-edge artificial intelligence with powerful data processing capabilities to deliver actionable insights that drive business growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-6 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            AI-Powered Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Services */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Analytics & Business Intelligence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI & Analytics?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent insights and data-driven decisions. Our AI and analytics solutions are designed to give you the competitive edge you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-zion-cyan border border-zion-cyan py-3 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}