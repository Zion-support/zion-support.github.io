import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Award,
  Users as UsersIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon,
  Sparkles
} from 'lucide-react';

export default function NewServicesOverview() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'Advanced AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      services: [
        {
          name: 'AI-Powered Financial Advisory Platform',
          description: 'Intelligent financial planning and investment advisory system',
          price: '$2,500/month',
          features: ['Personalized portfolios', 'Risk assessment', 'Market analysis'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'AI Legal Research & Document Analysis',
          description: 'Advanced legal research platform with NLP capabilities',
          price: '$1,800/month',
          features: ['Case law analysis', 'Contract review', 'Compliance checking'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'AI Healthcare Diagnostic Imaging',
          description: 'Medical imaging analysis platform with deep learning',
          price: '$3,500/month',
          features: ['Disease detection', 'Diagnostic support', 'Patient monitoring'],
          path: '/comprehensive-services-showcase'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Enterprise-grade security solutions for the digital age',
      services: [
        {
          name: 'Zero Trust Security Platform',
          description: 'Comprehensive zero trust security and access management',
          price: '$2,800/month',
          features: ['Continuous verification', 'Least privilege access', 'Threat detection'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'AI-Powered Threat Detection',
          description: 'Advanced threat detection with machine learning',
          price: '$3,200/month',
          features: ['Real-time detection', 'Behavioral analytics', 'Automated response'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'Cloud Security Posture Management',
          description: 'Multi-cloud security monitoring and optimization',
          price: '$2,400/month',
          features: ['Multi-cloud monitoring', 'Configuration management', 'Compliance'],
          path: '/comprehensive-services-showcase'
        }
      ]
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud Services',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      description: 'Modern DevOps practices and cloud infrastructure solutions',
      services: [
        {
          name: 'GitOps Platform & Infrastructure Automation',
          description: 'Complete GitOps platform for infrastructure management',
          price: '$2,200/month',
          features: ['Infrastructure as Code', 'Git-based deployments', 'Drift detection'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'Multi-Cloud Management Platform',
          description: 'Unified management across AWS, Azure, GCP, and more',
          price: '$2,800/month',
          features: ['Cost optimization', 'Resource monitoring', 'Compliance management'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'Enterprise Kubernetes Management',
          description: 'Comprehensive Kubernetes operations and security',
          price: '$2,500/month',
          features: ['Multi-cluster management', 'Security policies', 'Monitoring'],
          path: '/comprehensive-services-showcase'
        }
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      icon: BarChart3,
      color: 'from-green-500 to-teal-500',
      description: 'Powerful analytics and business intelligence solutions',
      services: [
        {
          name: 'Real-Time Data Streaming Platform',
          description: 'High-performance real-time data processing and analytics',
          price: '$3,200/month',
          features: ['Real-time processing', 'Stream analytics', 'Live dashboards'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'AI-Powered Predictive Analytics',
          description: 'Advanced forecasting and pattern recognition',
          price: '$2,800/month',
          features: ['Machine learning models', 'Time series forecasting', 'Anomaly detection'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'Customer Analytics Platform',
          description: '360-degree customer view and behavioral analysis',
          price: '$2,100/month',
          features: ['Customer segmentation', 'Behavioral analysis', 'Personalization'],
          path: '/comprehensive-services-showcase'
        }
      ]
    },
    {
      id: 'industry-solutions',
      title: 'Industry-Specific Solutions',
      icon: Building,
      color: 'from-gray-500 to-blue-500',
      description: 'Tailored solutions for specific industry verticals',
      services: [
        {
          name: 'Healthcare AI & Clinical Support',
          description: 'Comprehensive healthcare AI platform for patient care',
          price: '$4,500/month',
          features: ['Clinical decision support', 'Patient monitoring', 'Predictive analytics'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'Financial Services AI & Risk Management',
          description: 'AI-powered risk assessment and fraud detection',
          price: '$3,800/month',
          features: ['Risk assessment', 'Fraud detection', 'Compliance automation'],
          path: '/comprehensive-services-showcase'
        },
        {
          name: 'Manufacturing IoT & Smart Factory',
          description: 'IoT platform for manufacturing optimization',
          price: '$3,200/month',
          features: ['Predictive maintenance', 'Quality control', 'Production monitoring'],
          path: '/comprehensive-services-showcase'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Leverage cutting-edge artificial intelligence and machine learning technologies',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance built into every solution',
      color: 'text-green-400'
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get up and running quickly with proven implementation methodologies',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support and dedicated success managers',
      color: 'text-yellow-400'
    }
  ];

  const stats = [
    { icon: UsersIcon, value: '500+', label: 'Happy Clients', description: 'Trusted by businesses worldwide' },
    { icon: TrendingUpIcon, value: '95%', label: 'Success Rate', description: 'Proven track record of delivery' },
    { icon: Award, value: '10+', label: 'Years Experience', description: 'Deep industry expertise' },
    { icon: GlobeIcon, value: '25+', label: 'Countries Served', description: 'Global reach and support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, cybersecurity, DevOps, and industry-specific solutions designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/comprehensive-services-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered solutions to enterprise security, we offer everything you need to modernize your business and stay ahead of the competition.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 border border-gray-600 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-700/70 transition-all duration-300"
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-blue-400 mb-2">
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>

                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h5>
                        <div className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={service.path}
                        className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className={`h-12 w-12 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today to start your digital transformation journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-gray-400">Available 24/7</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="h-12 w-12 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-gray-400">Response within 2 hours</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-12 w-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-400">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/comprehensive-services-showcase"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}