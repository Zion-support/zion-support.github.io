import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  TrendingUp, 
  DollarSign, 
  Shield, 
  Database, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Network,
  BarChart3,
  Code,
  Server,
  Chip,
  Brain,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  Building2
} from 'lucide-react';

const AIFinancialTechnologyPlatform: React.FC = () => {

  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {

      icon: TrendingUp,
      title: 'AI-Powered Trading',
      description: 'Advanced algorithmic trading with machine learning for optimal returns'
    },
    {

      icon: Shield,
      title: 'Fraud Detection',
      description: 'Real-time fraud detection using AI and behavioral analytics'
    },
    {

      icon: Database,
      title: 'Risk Management',
      description: 'Intelligent risk assessment and portfolio optimization'
    },
    {

      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Market trend prediction and investment insights'
    },
    {

      icon: CreditCard,
      title: 'Digital Banking',
      description: 'Next-generation digital banking and payment solutions'
    },
    {

      icon: Brain,
      title: 'Smart Contracts',
      description: 'AI-powered smart contracts and blockchain integration'
    }
  ];

  const useCases = [
    {

      title: 'Investment Management',
      description: 'AI-driven portfolio management and investment strategies',
      icon: ChartLine
    },
    {

      title: 'Trading Platforms',
      description: 'Advanced trading platforms with AI-powered insights',
      icon: TrendingUp
    },
    {

      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies',
      icon: Shield
    },
    {

      title: 'Customer Service',
      description: 'AI-powered customer support and financial advisory',
      icon: Users
    },
    {

      title: 'Compliance & Regulation',
      description: 'Automated compliance monitoring and regulatory reporting',
      icon: Building2
    },
    {

      title: 'Payment Processing',
      description: 'Secure and efficient payment processing solutions',
      icon: CreditCard
    }
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for fintech startups and small financial institutions',
      features: [
        'Basic AI trading algorithms',
        'Standard fraud detection',
        'Community support',
        '5 API calls/second',
        'Basic security protocols',
        'Standard reporting'
      ],
      cta: 'Get Started',
      popular: false
    },
    {

      plan: 'Professional',
      price: '$5,500',
      period: '/month',
      description: 'Ideal for growing fintech companies and regional banks',
      features: [
        'Advanced AI trading capabilities',
        'Full fraud detection suite',
        'Priority support',
        '25 API calls/second',
        'Advanced security protocols',
        'Custom algorithm development',
        'Real-time analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {

      plan: 'Enterprise',
      price: '$18,000',
      period: '/month',
      description: 'For large financial institutions requiring maximum performance',
      features: [
        'Unlimited AI trading access',
        'Custom AI model development',
        '24/7 dedicated support',
        'Unlimited API calls',
        'Military-grade security',
        'Custom infrastructure setup',
        'On-site consultation',
        'Exclusive financial products'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {

      icon: Zap,
      title: 'Increased Returns',
      description: 'AI-powered trading can increase returns by 15-25% on average'
    },
    {

      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced fraud detection and security protocols'
    },
    {

      icon: TrendingUp,
      title: 'Better Performance',
      description: 'Superior performance through intelligent automation'
    },
    {

      icon: Clock,
      title: '24/7 Operation',
      description: 'Round-the-clock trading and monitoring capabilities'
    },
    {

      icon: Globe,
      title: 'Global Access',
      description: 'Access to global markets and financial instruments'
    },
    {

      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated financial technology specialists and AI experts'
    }
  ];

  const technologies = [
    {

      name: 'Machine Learning',
      description: 'Advanced ML algorithms for pattern recognition and prediction',
      icon: Brain
    },
    {

      name: 'Blockchain',
      description: 'Secure and transparent financial transactions',
      icon: Shield
    },
    {

      name: 'Big Data Analytics',
      description: 'Real-time analysis of massive financial datasets',
      icon: Database
    },
    {

      name: 'Natural Language Processing',
      description: 'AI-powered financial news and sentiment analysis',
      icon: MessageSquare
    },
    {

      name: 'Computer Vision',
      description: 'Document processing and verification automation',
      icon: Eye
    },
    {

      name: 'Predictive Modeling',
      description: 'Advanced forecasting and trend prediction',
      icon: TrendingUp
    }
  ];

  const Eye = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-green-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <DollarSign className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Financial Technology Platform
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                Revolutionize your financial operations with our cutting-edge 
                AI-powered fintech platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Financial Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of finance with our cutting-edge AI platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-slate-50 to-green-50 rounded-xl border border-slate-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Financial Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered fintech can revolutionize your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Financial Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the most advanced financial technologies available
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Financial Technology Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your fintech needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${

                  plan.popular 
                    ? 'bg-gradient-to-br from-green-600 to-blue-700 text-white shadow-2xl scale-105' 
                    : 'bg-white border-2 border-slate-200 hover:border-green-300'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${

                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.plan}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${

                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`ml-2 text-lg ${

                      plan.popular ? 'text-green-100' : 'text-gray-600'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-2 ${

                    plan.popular ? 'text-green-100' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 ${

                        plan.popular ? 'text-green-400' : 'text-green-500'
                      }`} />
                      <span className={plan.popular ? 'text-green-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                  plan.popular
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Financial Technology Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of the most advanced fintech solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the fintech revolution and transform your business with AI-powered financial technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your financial technology needs? Contact our experts today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-green-600 font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-green-600 font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-green-600 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialTechnologyPlatform;