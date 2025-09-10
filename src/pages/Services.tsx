import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  TrendingUp, 
  HardDrive,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Explore the next frontier of computing with quantum solutions that solve complex problems exponentially faster.',
      icon: Shield,
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum Algorithms', 'Quantum Simulation', 'Quantum Optimization', 'Quantum Security'],
      href: '/services/quantum-computing'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and advanced threat detection.',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: ['Threat Detection', 'Security Auditing', 'Compliance Management', 'Incident Response'],
      href: '/services/cybersecurity'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Build scalable, secure, and efficient cloud solutions tailored to your business needs.',
      icon: Cloud,
      color: 'from-green-600 to-blue-600',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      href: '/services/cloud-infrastructure'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      icon: TrendingUp,
      color: 'from-yellow-600 to-orange-600',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Predictive Modeling'],
      href: '/services/data-analytics'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Modernize your business processes and operations with comprehensive digital solutions.',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      features: ['Process Automation', 'Legacy Modernization', 'Workflow Optimization', 'Change Management'],
      href: '/services/digital-transformation'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$5,000',
      period: 'per month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI Integration',
        'Standard Security',
        'Cloud Storage (100GB)',
        'Email Support',
        'Monthly Reports'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: 'per month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI Solutions',
        'Enhanced Security',
        'Cloud Storage (1TB)',
        'Priority Support',
        'Weekly Reports',
        'Custom Integrations'
      ],
      cta: 'Choose Professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with complex needs',
      features: [
        'Full AI Suite',
        'Enterprise Security',
        'Unlimited Cloud Storage',
        '24/7 Dedicated Support',
        'Real-time Monitoring',
        'Custom Development',
        'On-site Consulting'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative bg-gray-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700 hover:border-blue-500'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-gray-400">{tier.period}</div>
                  <p className="text-gray-300 mt-4">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-600 text-white hover:border-blue-500 hover:bg-blue-500/10'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}