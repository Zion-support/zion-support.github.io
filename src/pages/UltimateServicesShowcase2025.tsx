import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Database, 
  Smartphone, 
  Globe, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Target,
  Clock,
  DollarSign,
  Headphones
} from 'lucide-react';
const UltimateServicesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const services = {
    'ai-solutions': {
      title: 'AI-Powered Solutions',
      subtitle: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      services: [
        {
          name: 'AI Strategy Consulting',
          description: 'Comprehensive AI roadmap development and implementation strategy',
          features: ['AI Readiness Assessment', 'Custom AI Roadmap', 'ROI Analysis', 'Implementation Planning'],
          price: 'Starting at $5,000',
          duration: '2-4 weeks',
          popular: true
        },
        {
          name: 'Machine Learning Development',
          description: 'Custom ML models tailored to your specific business needs',
          features: ['Data Analysis', 'Model Training', 'Performance Optimization', 'Deployment Support'],
          price: 'Starting at $15,000',
          duration: '6-12 weeks',
          popular: false
        },
        {
          name: 'AI Automation Solutions',
          description: 'Streamline operations with intelligent automation systems',
          features: ['Process Analysis', 'Automation Design', 'System Integration', 'Monitoring Setup'],
          price: 'Starting at $10,000',
          duration: '4-8 weeks',
          popular: true
        }
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity Solutions',
      subtitle: 'Protect your digital assets with enterprise-grade security',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-red-50',
      services: [
        {
          name: 'Security Assessment',
          description: 'Comprehensive security audit and vulnerability analysis',
          features: ['Penetration Testing', 'Vulnerability Scan', 'Security Report', 'Remediation Plan'],
          price: 'Starting at $8,000',
          duration: '2-3 weeks',
          popular: true
        },
        {
          name: 'Security Implementation',
          description: 'Deploy and configure enterprise security solutions',
          features: ['Firewall Setup', 'Intrusion Detection', 'Access Control', 'Monitoring Systems'],
          price: 'Starting at $20,000',
          duration: '4-6 weeks',
          popular: false
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and incident response',
          features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Reports'],
          price: 'Starting at $3,000/month',
          duration: 'Ongoing',
          popular: true
        }
      ]
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      subtitle: 'Scale your infrastructure with modern cloud technologies',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to cloud platforms with zero downtime',
          features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'],
          price: 'Starting at $25,000',
          duration: '8-16 weeks',
          popular: true
        },
        {
          name: 'Cloud Architecture',
          description: 'Design scalable and secure cloud infrastructure',
          features: ['Architecture Design', 'Security Implementation', 'Cost Optimization', 'Monitoring Setup'],
          price: 'Starting at $15,000',
          duration: '4-8 weeks',
          popular: false
        },
        {
          name: 'Cloud Management',
          description: 'Ongoing cloud infrastructure management and optimization',
          features: ['Performance Monitoring', 'Cost Management', 'Security Updates', '24/7 Support'],
          price: 'Starting at $5,000/month',
          duration: 'Ongoing',
          popular: true
        }
      ]
    },
    'data-analytics': {
      title: 'Data Analytics',
      subtitle: 'Unlock insights from your data with advanced analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      services: [
        {
          name: 'Data Strategy',
          description: 'Develop comprehensive data strategy and governance framework',
          features: ['Data Audit', 'Strategy Development', 'Governance Framework', 'Implementation Plan'],
          price: 'Starting at $12,000',
          duration: '3-6 weeks',
          popular: true
        },
        {
          name: 'Analytics Dashboard',
          description: 'Custom analytics dashboards for real-time insights',
          features: ['Dashboard Design', 'Data Integration', 'Visualization', 'User Training'],
          price: 'Starting at $18,000',
          duration: '6-10 weeks',
          popular: false
        },
        {
          name: 'Predictive Analytics',
          description: 'Advanced predictive models for business forecasting',
          features: ['Model Development', 'Data Processing', 'Prediction Engine', 'Integration Support'],
          price: 'Starting at $30,000',
          duration: '8-16 weeks',
          popular: true
        }
      ]
    }
  };
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support' }
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'The AI solutions transformed our operations completely. We saw a 40% increase in efficiency within the first month.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Inc',
      content: 'Outstanding cybersecurity implementation. Our security posture improved dramatically, and we sleep better at night.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, CloudScale',
      content: 'The cloud migration was seamless. Zero downtime and incredible performance improvements across all systems.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];
  const currentService = services[activeTab];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Rocket className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Ultimate Services 2025</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Revolutionary Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Transform your business with cutting-edge AI, cybersecurity, cloud solutions, 
              and data analytics. Experience the future of technology today.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/blog"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-2"
              >
                Learn More
                <Lightbulb className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Services Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <service.icon className="w-5 h-5" />
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Services Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentService.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentService.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentService.services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-gray-900 mb-2">{service.price}</div>
                <div className="text-sm text-gray-500">{service.duration}</div>
              </div>
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className={`w-full block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  service.popular
                    ? `bg-gradient-to-r ${currentService.color} text-white hover:shadow-lg`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful companies that have revolutionized their operations 
            with our cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/blog"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-2"
            >
              Read Case Studies
              <Target className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

};

export default UltimateServicesShowcase2025;
