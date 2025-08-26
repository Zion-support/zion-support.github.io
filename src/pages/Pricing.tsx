import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  Rocket,
  Users,
  Globe,
  Award
} from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses starting their digital transformation',
    features: [
      'AI Content Generation (100/month)',
      'Basic Cybersecurity Monitoring',
      'Cloud Infrastructure Setup',
      'Email Support',
      'Monthly Reports',
      'Basic Analytics Dashboard'
    ],
    popular: false,
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: '/month',
    description: 'Ideal for growing businesses with advanced technology needs',
    features: [
      'AI Content Generation (500/month)',
      'Advanced Cybersecurity Suite',
      'Cloud Migration & Optimization',
      'Priority Support (4hr response)',
      'Custom Analytics Dashboard',
      'Monthly Strategy Sessions',
      'API Integration Support',
      'Compliance Monitoring'
    ],
    popular: true,
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    price: '$25,000',
    period: '/month',
    description: 'Comprehensive solutions for large enterprises and organizations',
    features: [
      'Unlimited AI Content Generation',
      'Zero Trust Security Architecture',
      'Multi-Cloud Strategy & Management',
      '24/7 Dedicated Support',
      'Custom AI Model Development',
      'Advanced Analytics & BI',
      'Compliance Automation',
      'Dedicated Success Manager',
      'Custom Integration Development',
      'Quarterly Innovation Workshops'
    ],
    popular: false,
    icon: Award,
    color: 'from-orange-500 to-red-500'
  }
];

const servicePackages = [
  {
    name: 'AI Solutions Package',
    price: 'From $15,000',
    description: 'Custom AI development and implementation',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'AI Strategy Consulting',
      'Model Training & Optimization',
      'Ongoing Maintenance & Updates'
    ],
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cybersecurity Package',
    price: 'From $12,000',
    description: 'Comprehensive security and compliance solutions',
    features: [
      'Security Assessment & Auditing',
      'Zero Trust Implementation',
      'Compliance Automation',
      'Threat Detection & Response',
      'Security Training Programs',
      '24/7 Security Monitoring'
    ],
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Cloud Transformation',
    price: 'From $20,000',
    description: 'End-to-end cloud migration and optimization',
    features: [
      'Cloud Strategy Development',
      'Migration Planning & Execution',
      'Cost Optimization',
      'DevOps Implementation',
      'Performance Monitoring',
      'Disaster Recovery Setup'
    ],
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Digital Transformation',
    price: 'From $35,000',
    description: 'Complete business process modernization',
    features: [
      'Business Process Analysis',
      'Technology Roadmap',
      'Change Management',
      'Legacy System Modernization',
      'Employee Training',
      'Performance Optimization'
    ],
    icon: Rocket,
    color: 'from-green-500 to-emerald-500'
  }
];

const addOnServices = [
  {
    name: 'AI Model Training',
    price: '$5,000',
    description: 'Custom AI model training for specific use cases',
    icon: Brain
  },
  {
    name: 'Security Auditing',
    price: '$8,000',
    description: 'Comprehensive security assessment and recommendations',
    icon: Shield
  },
  {
    name: 'Cloud Optimization',
    price: '$3,000',
    description: 'Performance and cost optimization for cloud infrastructure',
    icon: Cloud
  },
  {
    name: 'API Development',
    price: '$4,000',
    description: 'Custom API development and integration services',
    icon: Zap
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getDiscountedPrice = (basePrice: string) => {
    const price = parseInt(basePrice.replace(/[^0-9]/g, ''));
    if (billingCycle === 'yearly') {
      return `$${Math.round(price * 0.8)}`;
    }
    return basePrice;
  };

  const getPeriodText = () => {
    return billingCycle === 'yearly' ? '/year' : '/month';
  };

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive technology services. Choose from flexible plans designed to meet your business needs and budget."
        canonical="/pricing"
        url="https://ziontechgroup.com/pricing"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our expert support and cutting-edge technology solutions.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-zion-cyan">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-zion-slate border rounded-lg p-8 ${
                  tier.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/20'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-1">
                    {getDiscountedPrice(tier.price)}
                  </div>
                  <div className="text-gray-400">{getPeriodText()}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/80 hover:to-zion-purple/80'
                      : 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Customized solutions designed to address specific business challenges and technology needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {servicePackages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${pkg.color} rounded-lg flex items-center justify-center`}>
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{pkg.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 rounded-lg font-medium hover:bg-zion-purple/30 transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your existing plan with specialized services and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div 
                key={index}
                className="bg-zion-slate border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full py-2 px-4 bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 rounded-lg text-sm font-medium hover:bg-zion-purple/30 transition-all duration-300"
                >
                  Add Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing and services</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan at any time?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            
            <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing for enterprise clients?</h3>
              <p className="text-gray-300">Absolutely! We work with enterprise clients to create custom pricing plans that align with their specific needs and scale.</p>
            </div>
            
            <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">What's included in the support?</h3>
              <p className="text-gray-300">Support varies by plan. Starter includes email support, Professional includes priority support with 4-hour response, and Enterprise includes 24/7 dedicated support.</p>
            </div>
            
            <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Is there a setup fee?</h3>
              <p className="text-gray-300">Setup fees vary by service complexity. Simple implementations may have no setup fee, while complex enterprise solutions may include setup costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your needs and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg font-semibold text-white hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
