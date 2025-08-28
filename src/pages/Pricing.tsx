import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket, 
  Brain,
  ArrowRight,
  DollarSign,
  Shield,
  Cloud,
  Cpu,
  Lock,
  Users,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Target,
  Globe,
  Heart,
  Leaf,
  Scale,
  Building2,
  ShoppingCart,
  GraduationCap
} from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$2,999',
      period: '/month',
      features: [
        'AI Content Generation (50 articles/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        '2 Team Members',
        'Basic Security Features',
        'Cloud Storage (100GB)',
        'API Access (1,000 calls/month)',
        'Standard Documentation'
      ],
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: '$7,999',
      period: '/month',
      features: [
        'AI Content Generation (200 articles/month)',
        'Advanced Analytics & Reporting',
        'Priority Email & Chat Support',
        '10 Team Members',
        'Advanced Security & Compliance',
        'Cloud Storage (500GB)',
        'API Access (10,000 calls/month)',
        'Custom Integrations (2)',
        'Training & Onboarding',
        'Performance Monitoring'
      ],
      icon: Crown,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      cta: 'Start Free Trial',
      href: '/request-quote'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Model Training',
        'Dedicated Account Manager',
        'Unlimited Team Members',
        'Enterprise Security & Compliance',
        'Unlimited Cloud Storage',
        'Unlimited API Access',
        'Custom Integrations (Unlimited)',
        '24/7 Phone Support',
        'Custom Training Programs',
        'SLA Guarantees',
        'On-Premise Options'
      ],
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const servicePricing = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Content Creation', price: '$1,999/month', description: 'Unlimited AI-generated content' },
        { name: 'AI Analytics Platform', price: '$3,999/month', description: 'Advanced business intelligence' },
        { name: 'AI Customer Support', price: '$2,499/month', description: '24/7 intelligent support automation' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', price: '$15,000+', description: 'One-time migration service' },
        { name: 'DevOps Automation', price: '$4,999/month', description: 'Continuous integration & deployment' },
        { name: 'Infrastructure Management', price: '$3,999/month', description: '24/7 monitoring & maintenance' }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Security Assessment', price: '$8,000+', description: 'Comprehensive security audit' },
        { name: 'Threat Detection', price: '$2,999/month', description: 'AI-powered security monitoring' },
        { name: 'Incident Response', price: '$5,000+', description: 'Emergency security support' }
      ]
    },
    {
      category: 'Digital Transformation',
      icon: Building2,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Strategy Consulting', price: '$12,000+', description: 'Digital transformation roadmap' },
        { name: 'Process Automation', price: '$4,999/month', description: 'Workflow optimization' },
        { name: 'Legacy Modernization', price: '$25,000+', description: 'System upgrade & migration' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'Custom AI Model Training',
      price: '$25,000+',
      description: 'Train AI models on your specific data',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '24/7 Premium Support',
      price: '$2,999/month',
      description: 'Round-the-clock technical support',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Custom Integration Development',
      price: '$8,000+',
      description: 'Build custom integrations with your systems',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'On-Premise Deployment',
      price: '$50,000+',
      description: 'Deploy solutions in your own infrastructure',
      icon: Lock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive technology solutions. Choose from flexible plans designed for businesses of all sizes."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core features with transparent pricing and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our Starter plan and scale up as your business grows. All plans include our core AI and technology features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border transition-all duration-300 h-full ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-400/20' 
                    : 'border-slate-700/50 hover:border-slate-600/50'
                }`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.href}
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/50 hover:border-slate-500/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for individual services and solutions. Mix and match services to create your perfect solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicePricing.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-cyan-400">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your solution with additional services and features tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan later?</h3>
                <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
              </div>
              
              <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-gray-400">No setup fees for our monthly plans. Custom enterprise solutions may have one-time implementation costs.</p>
              </div>
              
              <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts?</h3>
                <p className="text-gray-400">Yes, we offer volume discounts for enterprise customers and annual payment discounts. Contact our sales team for details.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">What's included in support?</h3>
                <p className="text-gray-400">All plans include email support. Professional and Enterprise plans include priority support with faster response times.</p>
              </div>
              
              <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Can I cancel anytime?</h3>
                <p className="text-gray-400">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
              </div>
              
              <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-400">Absolutely! Our Enterprise plan includes custom development and integration services tailored to your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business or contact our team for a custom solution tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
