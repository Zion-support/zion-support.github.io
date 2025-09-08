import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Brain, Shield, Cloud, Rocket, Cpu, Lock, Heart, Users, TrendingUp, Award, DollarSign } from 'lucide-react';
import { SEO } from '../components/SEO';

interface ServiceTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: ServiceTier[];
}

export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ai-services');

  const serviceCategories: ServiceCategory[] = [
    {
      name: 'AI & Analytics Services',
      description: 'Intelligent solutions for data-driven decisions',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        {
          name: 'Starter',
          price: '$299',
          period: '/month',
          color: 'from-purple-500 to-pink-600',
          features: [
            'AI Business Intelligence Dashboard',
            'Basic Analytics Reports',
            'Email Support',
            '5 User Licenses',
            'Standard Integrations'
          ]
        },
        {
          name: 'Professional',
          price: '$799',
          period: '/month',
          color: 'from-purple-600 to-pink-700',
          popular: true,
          features: [
            'Advanced AI Analytics',
            'Custom Dashboards',
            'Priority Support',
            'Unlimited Users',
            'API Access',
            'Custom Integrations',
            'Training Sessions'
          ]
        },
        {
          name: 'Enterprise',
          price: '$1,999',
          period: '/month',
          color: 'from-purple-700 to-pink-800',
          features: [
            'Full AI Suite Access',
            'Custom AI Models',
            'Dedicated Support',
            'White-label Solutions',
            'Advanced Security',
            'SLA Guarantees',
            'On-site Training'
          ]
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Modern infrastructure & automation solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        {
          name: 'Basic',
          price: '$199',
          period: '/month',
          color: 'from-blue-500 to-cyan-600',
          features: [
            'Cloud Infrastructure Setup',
            'Basic Monitoring',
            'Email Support',
            'Standard Security',
            'Backup Solutions'
          ]
        },
        {
          name: 'Advanced',
          price: '$599',
          period: '/month',
          color: 'from-blue-600 to-cyan-700',
          popular: true,
          features: [
            'Full DevOps Pipeline',
            'Advanced Monitoring',
            '24/7 Support',
            'Enhanced Security',
            'Auto-scaling',
            'Cost Optimization',
            'Performance Tuning'
          ]
        },
        {
          name: 'Enterprise',
          price: '$1,499',
          period: '/month',
          color: 'from-blue-700 to-cyan-800',
          features: [
            'Custom Cloud Architecture',
            'Multi-cloud Management',
            'Dedicated Team',
            'Advanced Compliance',
            'Disaster Recovery',
            'Custom Integrations'
          ]
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Specialized business applications',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      services: [
        {
          name: 'Single App',
          price: '$99',
          period: '/month',
          color: 'from-green-500 to-emerald-600',
          features: [
            'One Micro SaaS Application',
            'Basic Features',
            'Email Support',
            'Standard Updates',
            'Basic Analytics'
          ]
        },
        {
          name: 'App Suite',
          price: '$299',
          period: '/month',
          color: 'from-green-600 to-emerald-700',
          popular: true,
          features: [
            'Up to 5 Applications',
            'Advanced Features',
            'Priority Support',
            'Custom Branding',
            'API Access',
            'Advanced Analytics'
          ]
        },
        {
          name: 'Full Platform',
          price: '$799',
          period: '/month',
          color: 'from-green-700 to-emerald-800',
          features: [
            'Unlimited Applications',
            'Custom Development',
            'Dedicated Support',
            'White-label Solutions',
            'Advanced Integrations',
            'Custom Workflows'
          ]
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Advanced security & regulatory compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'Basic Security',
          price: '$399',
          period: '/month',
          color: 'from-red-500 to-orange-600',
          features: [
            'Basic Security Audits',
            'Compliance Monitoring',
            'Email Support',
            'Standard Reports',
            'Basic Training'
          ]
        },
        {
          name: 'Advanced Security',
          price: '$899',
          period: '/month',
          color: 'from-red-600 to-orange-700',
          popular: true,
          features: [
            'Advanced Security Suite',
            'Real-time Monitoring',
            '24/7 Security Operations',
            'Compliance Automation',
            'Incident Response',
            'Security Training'
          ]
        },
        {
          name: 'Enterprise Security',
          price: '$2,499',
          period: '/month',
          color: 'from-red-700 to-orange-800',
          features: [
            'Full Security Platform',
            'Custom Security Policies',
            'Dedicated Security Team',
            'Advanced Threat Detection',
            'Compliance Automation',
            'Custom Integrations'
          ]
        }
      ]
    }
  ];

  const selectedCategoryData = serviceCategories.find(cat => cat.name.toLowerCase().includes(selectedCategory.replace('-', ' '))) || serviceCategories[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Comparison - Zion Tech Group"
        description="Compare our comprehensive range of AI, IT, and micro SaaS services with detailed pricing and features."
      />
      
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Services Comparison
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the perfect service tier for your business needs. Compare features, pricing, and benefits across all our service categories.
          </p>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name.toLowerCase().replace(/\s+/g, '-'))}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategoryData.name === category.name
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Category Display */}
        <motion.div
          key={selectedCategoryData.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedCategoryData.color} flex items-center justify-center mx-auto mb-6`}>
              <selectedCategoryData.icon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedCategoryData.name}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{selectedCategoryData.description}</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {selectedCategoryData.services.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-cyan-400 shadow-2xl shadow-cyan-400/20' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-400/25'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-300 mb-6">
              Our team can create tailored solutions that perfectly fit your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a
                href="/request-quote"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}