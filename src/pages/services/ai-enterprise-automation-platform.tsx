import React from 'react';
import { motion } from 'framer-motion';
import {

  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  TrendingUp,
  Lock,
  Database,
  Network,
  Cpu,
  Server,
  Cloud,
  Workflow,
  Automation,
  Integration
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIEnterpriseAutomationPlatform: React.FC = () => {

  const features = [
    {

      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI-powered analysis to identify automation opportunities across your organization',
      benefits: ['Process mapping', 'Efficiency analysis', 'ROI calculation', 'Implementation roadmap']
    },
    {

      icon: Workflow,
      title: 'Visual Workflow Designer',
      description: 'Drag-and-drop interface for creating complex automation workflows without coding',
      benefits: ['No-code design', 'Template library', 'Custom workflows', 'Version control']
    },
    {

      icon: Integration,
      title: 'Multi-System Integration',
      description: 'Connect with 500+ enterprise systems and applications seamlessly',
      benefits: ['API integration', 'Data synchronization', 'Real-time updates', 'Error handling']
    },
    {

      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Advanced ML algorithms that learn and improve automation processes over time',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Continuous learning', 'Performance optimization']
    },
    {

      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant security with enterprise-grade encryption and access controls',
      benefits: ['Data encryption', 'Role-based access', 'Audit logging', 'Compliance reporting']
    },
    {

      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards and reporting for monitoring automation performance',
      benefits: ['Performance metrics', 'Cost tracking', 'ROI analysis', 'Custom reports']
    }
  ];

  const pricingTiers = [
    {

      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small to medium businesses starting their automation journey',
      features: [
        'Up to 10 automated workflows',
        'Basic process discovery',
        'Standard integrations (50+)',
        'Email support',
        'Basic analytics dashboard'
      ],
      cta: 'Get Started',
      popular: false
    },
    {

      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing enterprises with complex automation needs',
      features: [
        'Up to 50 automated workflows',
        'Advanced process discovery',
        'Premium integrations (200+)',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom workflow templates',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {

      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For large organizations requiring maximum automation capabilities',
      features: [
        'Unlimited automated workflows',
        'Full process discovery suite',
        'All integrations (500+)',
        '24/7 dedicated support',
        'Custom analytics & AI insights',
        'White-label options',
        'On-premise deployment',
        'Custom integrations',
        'Dedicated success manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {

      icon: TrendingUp,
      title: '300% Efficiency Increase',
      description: 'Average productivity improvement across all automated processes'
    },
    {

      icon: Clock,
      title: '25+ Hours Saved Per Week',
      description: 'Time savings for each team member using the platform'
    },
    {

      icon: Users,
      title: 'Improved Employee Satisfaction',
      description: 'Eliminate repetitive tasks and focus on high-value work'
    },
    {

      icon: Shield,
      title: 'Enhanced Compliance',
      description: 'Automated compliance checks and audit trails'
    }
  ];

  const useCases = [
    {

      industry: 'Financial Services',
      applications: ['Loan processing', 'Risk assessment', 'Compliance reporting', 'Customer onboarding']
    },
    {

      industry: 'Healthcare',
      applications: ['Patient scheduling', 'Claims processing', 'Medical record management', 'Billing automation']
    },
    {

      industry: 'Manufacturing',
      applications: ['Supply chain management', 'Quality control', 'Inventory management', 'Production planning']
    },
    {

      industry: 'Retail',
      applications: ['Order processing', 'Inventory management', 'Customer service', 'Marketing automation']
    }
  ];

  return (
    <>
      <SEO 
        title="AI Enterprise Automation Platform | Zion Tech Group"
        description="Transform your business with our AI-powered enterprise automation platform. 300% efficiency increase, 25+ hours saved per week. SOC 2 Type II compliant."
        keywords="AI automation, enterprise automation, workflow automation, process automation, business process automation, AI workflow, enterprise AI"
        ogImage="/images/ai-enterprise-automation-platform.jpg"
        canonicalUrl="/services/ai-enterprise-automation-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Automation</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Enterprise
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Automation Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business operations with intelligent process discovery and workflow automation. 
                Achieve 300% efficiency increase and save 25+ hours per week with our AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Enterprise Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with enterprise-grade security to deliver 
                the most comprehensive automation solution in the market.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-800/20 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Results & Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of enterprises that have transformed their operations with our platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your organization's automation needs and scale as you grow.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${

                    tier.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                      : 'border-gray-700/50'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tier.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-800/20 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed to work across all industries, with specialized solutions 
                for your specific business needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {useCase.industry}
                  </h3>
                  
                  <ul className="space-y-2">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the automation revolution and start seeing results in as little as 30 days. 
                Our team of experts will guide you through every step of the process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-gray-500/30 text-gray-300 font-semibold rounded-lg hover:bg-gray-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                No credit card required • 30-day free trial • Full support included
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEnterpriseAutomationPlatform;