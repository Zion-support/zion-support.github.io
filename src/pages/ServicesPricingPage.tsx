import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Users,
  Clock,
  Award
} from 'lucide-react';

const ServicesPricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 299, annual: 2999 },
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Machine Learning Models',
        'Email Support',
        '5 User Licenses',
        'Standard Security Features',
        'Monthly Reports'
      ],
      popular: false,
      icon: Brain
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      price: { monthly: 799, annual: 7999 },
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Custom ML Model Training',
        'Priority Support',
        '25 User Licenses',
        'Advanced Security',
        'Real-time Monitoring',
        'API Access'
      ],
      popular: true,
      icon: Zap
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Full-scale solutions for large organizations',
      price: { monthly: 1999, annual: 19999 },
      features: [
        'Everything in Professional',
        'Custom AI Solutions',
        'Dedicated Support Team',
        'Unlimited User Licenses',
        'Enterprise Security',
        'Custom Integrations',
        'SLA Guarantees',
        'On-site Training'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Solutions',
      description: 'Machine learning, automation, and intelligent systems',
      startingPrice: 299,
      icon: Brain,
      features: [
        'AI Business Intelligence',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Custom ML Models'
      ]
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable infrastructure and automated deployment',
      startingPrice: 199,
      icon: Cloud,
      features: [
        'Cloud Migration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Security & Compliance'
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced threat protection and compliance',
      startingPrice: 399,
      icon: Shield,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ]
    },
    {
      name: 'Data & Analytics',
      description: 'Data processing, analysis, and visualization',
      startingPrice: 249,
      icon: Database,
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Data Visualization',
        'ETL Processes',
        'Performance Analytics'
      ]
    }
  ];

  const addOns = [
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: { monthly: 199, annual: 1999 },
      icon: Clock
    },
    {
      name: 'Custom Development',
      description: 'Tailored solutions for specific business needs',
      price: { monthly: 499, annual: 4999 },
      icon: Zap
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive training programs for your team',
      price: { monthly: 299, annual: 2999 },
      icon: Users
    },
    {
      name: 'Advanced Security',
      description: 'Enhanced security features and compliance',
      price: { monthly: 399, annual: 3999 },
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Inc.',
      content: 'Zion Tech Group transformed our infrastructure with their AI solutions. The pricing is transparent and the value is incredible.',
      rating: 5,
      company: 'TechFlow Inc.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP Engineering, DataSphere',
      content: 'Their enterprise plan gave us everything we needed at a fraction of the cost of building in-house.',
      rating: 5,
      company: 'DataSphere'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, Quantum Labs',
      content: 'The professional plan exceeded our expectations. Great ROI and excellent support.',
      rating: 5,
      company: 'Quantum Labs'
    }
  ];

  const calculatePrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
  };

  const calculateSavings = (plan: any) => {
    if (billingCycle === 'annual') {
      return Math.round((plan.price.monthly * 12 - plan.price.annual) / (plan.price.monthly * 12) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services & Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business. Our transparent pricing ensures you know exactly 
            what you're getting and how much it costs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual
              {billingCycle === 'annual' && (
                <span className="ml-2 text-sm bg-cyan-500 text-white px-2 py-1 rounded-full">
                  Save up to 20%
                </span>
              )}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Pricing Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our starter plan and scale up as your business grows. 
              All plans include our core features with different levels of support and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative ${
                  plan.popular 
                    ? 'ring-2 ring-cyan-500 scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`h-full p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-cyan-500/10 border-cyan-500/50' 
                    : 'bg-white/5 border-white/10'
                } backdrop-blur-sm border`}>
                  
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.popular 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      <plan.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-white">
                        ${calculatePrice(plan)}
                        <span className="text-lg text-gray-400">
                          /{billingCycle === 'monthly' ? 'mo' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-cyan-400 font-medium mt-2">
                          Save {calculateSavings(plan)}% with annual billing
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Service Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services. 
              Each category can be customized to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {category.description}
                    </p>
                    
                    <div className="text-2xl font-bold text-cyan-400">
                      Starting at ${category.startingPrice}/mo
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="w-full py-3 px-6 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Add-ons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with these additional services. 
              Mix and match to create the perfect solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                      <addon.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {addon.description}
                    </p>
                    
                    <div className="text-2xl font-bold text-cyan-400">
                      ${addon.price[billingCycle as keyof typeof addon.price]}/{billingCycle === 'monthly' ? 'mo' : 'year'}
                    </div>
                  </div>
                  
                  <button 
                    className="w-full py-3 px-6 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition-all duration-300"
                  >
                    Add Service
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about our services and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our services and pricing structure.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">What's included in each plan?</h3>
              <p className="text-gray-300">
                All our services include implementation, training, documentation, and 24/7 support. 
                Custom integrations and additional features can be added based on your requirements.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">
                Yes, we provide custom pricing for enterprise solutions and specialized requirements. 
                Contact us for a personalized quote tailored to your business needs.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">What payment terms do you offer?</h3>
              <p className="text-gray-300">
                We offer flexible payment terms including upfront payment, milestone-based payments, 
                and monthly/annual subscription options for ongoing services.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Is there a money-back guarantee?</h3>
              <p className="text-gray-300">
                We offer a satisfaction guarantee. If you're not completely satisfied with our services 
                within the first 30 days, we'll work to make it right or provide a refund.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 text-cyan-100">
              Let's discuss your project requirements and find the perfect solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 bg-white text-cyan-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Service Consultation`, '_blank')}
              >
                <Mail className="h-5 w-5 mr-2 inline" />
                Schedule Consultation
              </button>
              <button
                className="px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                <Phone className="h-5 w-5 mr-2 inline" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPricingPage;
