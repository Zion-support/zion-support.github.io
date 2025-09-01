import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Award,
  TrendingUp,
  Rocket,
  Brain,
  Code,
  Cloud,
  Lock,
  Globe,
  Target,
  BarChart3,
  Smartphone,
  Database,
  Network,
  Palette,
  Cpu,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pricingCategories = [
    { id: 'all', name: 'All Services', icon: Zap, count: 4 },
    { id: 'development', name: 'Development', icon: Code, count: 1 },
    { id: 'ai-ml', name: 'AI & ML', icon: Brain, count: 1 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 1 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 1 }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      category: 'development',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 2999,
      annualPrice: 29999,
      features: [
        'Custom Software Development',
        'Basic API Integration',
        'Database Design',
        'UI/UX Design',
        '3 Months Support',
        'Basic Testing',
        'Documentation',
        'Deployment Support'
      ],
      limitations: [
        'Up to 3 user roles',
        'Basic reporting',
        'Standard security',
        'Email support only'
      ],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      bestFor: 'Small businesses, startups, MVPs'
    },
    {
      id: 'professional',
      name: 'Professional',
      category: 'ai-ml',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 5999,
      annualPrice: 59999,
      features: [
        'AI-Powered Analytics Platform',
        'Machine Learning Models',
        'Advanced Data Processing',
        'Real-time Insights',
        'Custom ML Algorithms',
        '6 Months Support',
        'Performance Optimization',
        'Advanced Testing',
        'API Documentation',
        'Training & Onboarding'
      ],
      limitations: [
        'Up to 10 user roles',
        'Advanced analytics',
        'Enhanced security',
        'Priority support'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      bestFor: 'Growing businesses, data-driven companies'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      category: 'cybersecurity',
      description: 'Comprehensive solutions for large organizations',
      monthlyPrice: 12999,
      annualPrice: 129999,
      features: [
        'Full Cybersecurity Suite',
        'Compliance Frameworks',
        '24/7 Monitoring',
        'Incident Response',
        'Penetration Testing',
        'Security Audits',
        'Compliance Reporting',
        'Custom Security Policies',
        'Staff Training',
        'Dedicated Support Team',
        'SLA Guarantees',
        'Custom Integrations'
      ],
      limitations: [
        'Unlimited users',
        'Enterprise security',
        'Custom compliance',
        'Dedicated support'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      bestFor: 'Large enterprises, regulated industries'
    },
    {
      id: 'premium',
      name: 'Premium',
      category: 'cloud',
      description: 'Advanced cloud and DevOps solutions',
      monthlyPrice: 8999,
      annualPrice: 89999,
      features: [
        'Cloud Migration & Optimization',
        'DevOps Implementation',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Performance Monitoring',
        'Cost Optimization',
        'Disaster Recovery',
        'Auto-scaling',
        '12 Months Support',
        'Custom Workflows',
        'Advanced Analytics',
        'Training Programs'
      ],
      limitations: [
        'Up to 25 user roles',
        'Advanced cloud features',
        'Enhanced monitoring',
        'Phone & email support'
      ],
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      popular: false,
      bestFor: 'Tech companies, cloud-first businesses'
    }
  ];

  const addOns = [
    {
      name: 'Additional Support',
      description: 'Extended support hours and priority response',
      price: 999,
      period: 'month',
      features: ['24/7 support', 'Priority response', 'Dedicated engineer', 'Custom SLA']
    },
    {
      name: 'Custom Development',
      description: 'Additional custom features and integrations',
      price: 150,
      period: 'hour',
      features: ['Custom features', 'Third-party integrations', 'API development', 'Database optimization']
    },
    {
      name: 'Training & Consulting',
      description: 'Staff training and strategic consulting',
      price: 200,
      period: 'hour',
      features: ['Staff training', 'Strategic planning', 'Best practices', 'Ongoing consulting']
    },
    {
      name: 'Performance Optimization',
      description: 'Advanced performance tuning and optimization',
      price: 2999,
      period: 'month',
      features: ['Performance audit', 'Optimization implementation', 'Monitoring setup', 'Regular reviews']
    }
  ];

  const filteredPlans = pricingPlans.filter(plan => 
    selectedCategory === 'all' || plan.category === selectedCategory
  );

  const getCurrentPrice = (plan: any) => {
    return billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'annual') {
      const monthlyTotal = plan.monthlyPrice * 12;
      const annualTotal = plan.annualPrice;
      return Math.round(((monthlyTotal - annualTotal) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include professional support, 
            regular updates, and our commitment to your success.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex bg-slate-800 rounded-xl p-1 border border-slate-600">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual
              {billingCycle === 'annual' && (
                <span className="ml-2 px-2 py-1 bg-yellow-500 text-black text-xs rounded-full">
                  Save up to 20%
                </span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 border-cyan-500 text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`relative bg-slate-800 rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-slate-600 hover:border-cyan-500/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 inline mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-white">
                        ${(getCurrentPrice(plan) / 1000).toFixed(1)}k
                      </span>
                      <span className="text-gray-400">
                        /{billingCycle === 'annual' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && getSavings(plan) > 0 && (
                      <div className="text-green-400 text-sm font-medium">
                        Save {getSavings(plan)}% with annual billing
                      </div>
                    )}
                  </div>

                  {/* Best For */}
                  <div className="text-xs text-gray-400 bg-slate-700/50 rounded-lg px-3 py-2">
                    Best for: {plan.bestFor}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50'
                }`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">${addon.price}</span>
                    <span className="text-gray-400">/{addon.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-600 transition-colors">
                  Add Service
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'Do you offer custom pricing for enterprise clients?',
                answer: 'Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements and large-scale deployments.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'Setup fees vary by plan. The Starter plan has no setup fee, while Professional and above may include setup costs depending on complexity.'
              },
              {
                question: 'What happens if I need to cancel?',
                answer: 'You can cancel at any time with no long-term commitments. We\'ll help you transition smoothly and provide data export if needed.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and find the perfect plan for your business. 
              Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-cyan-100">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;