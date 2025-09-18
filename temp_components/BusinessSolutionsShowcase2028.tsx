'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Users
  DollarSign
  Shield
  Zap
  Target,
  BarChart3,
  Building2,
  Globe,
  Smartphone,
  Laptop,
  Server,
  Database,
  Cloud,
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Clock,
  PieChart
} from 'lucide-react';

const BusinessSolutionsShowcase2028 = () => {
  const [activeSolutionsetActiveSolution] = useState('automation');
  const [currentMetricsetCurrentMetric] = useState(0);

  const solutions = {
    automation: {
      title: 'AI-Powered Business Automation',
      subtitle: 'Transform your operations with intelligent automation',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      description: 'Complete business process automation using advanced AI algorithms that learn and adapt to your specific needs.',
      features: [
        'Automated workflow management',
        'Intelligent decision making',
        'Real-time process optimization',
        'Predictive maintenance',
        'Cost reduction up to 80%'
      ],
      metrics: [
        { label: 'Efficiency Gain'value: '500%'icon: TrendingUp },
        { label: 'Cost Savings'value: '$2.5M'icon: DollarSign },
        { label: 'Time Saved'value: '40hrs/week'icon: Clock },
        { label: 'Error Reduction'value: '99.9%'icon: Shield }
      ]
    },
    analytics: {
      title: 'Advanced Business Analytics',
      subtitle: 'Data-driven insights for strategic decisions',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      description: 'Comprehensive analytics platform that transforms raw data into actionable business intelligence.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'ROI tracking and optimization'
      ],
      metrics: [
        { label: 'Data Processed'value: '10TB/day'icon: Database },
        { label: 'Insights Generated'value: '1000+'icon: Target },
        { label: 'Decision Speed'value: '90% faster'icon: Zap },
        { label: 'Accuracy Rate'value: '98.5%'icon: CheckCircle }
      ]
    },
    security: {
      title: 'Enterprise Security Solutions',
      subtitle: 'Protect your business with cutting-edge security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Comprehensive security framework protecting your business from cyber threats and ensuring compliance.',
      features: [
        'AI-powered threat detection',
        'Zero-trust architecture',
        'Automated incident response',
        'Compliance management',
        '24/7 security monitoring'
      ],
      metrics: [
        { label: 'Threats Blocked'value: '99.9%'icon: Shield },
        { label: 'Response Time'value: '<1min'icon: Clock },
        { label: 'Compliance Score'value: '100%'icon: Award },
        { label: 'Uptime'value: '99.99%'icon: CheckCircle }
      ]
    },
    cloud: {
      title: 'Cloud Infrastructure Solutions',
      subtitle: 'Scalable and reliable cloud computing',
      icon: Cloud,
      color: 'from-green-600 to-teal-600',
      description: 'Modern cloud infrastructure that scales with your business and provides unmatched reliability.',
      features: [
        'Auto-scaling infrastructure',
        'Global content delivery',
        'Disaster recovery',
        'Cost optimization',
        'Multi-cloud management'
      ],
      metrics: [
        { label: 'Uptime'value: '99.99%'icon: CheckCircle },
        { label: 'Global Reach'value: '200+'icon: Globe },
        { label: 'Cost Reduction'value: '60%'icon: DollarSign },
        { label: 'Deployment Speed'value: '10x faster'icon: Zap }
      ]
    }
  };

  const caseStudies = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Manual processes causing delays and errors',
      solution: 'AI-powered automation platform',
      results: [
        '500% efficiency improvement',
        '$2.5M annual cost savings',
        '99.9% error reduction',
        '40 hours saved per week'
      ],
      logo: 'TC',
      rating: 5
    },
    {
      company: 'FinanceFirst',
      industry: 'Financial Services',
      challenge: 'Compliance and security concerns',
      solution: 'Enterprise security framework',
      results: [
        '100% compliance achievement',
        'Zero security incidents',
        '50% faster audits',
        '99.99% uptime'
      ],
      logo: 'FF',
      rating: 5
    },
    {
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Data analysis and customer insights',
      solution: 'Advanced analytics platform',
      results: [
        '300% increase in insights',
        '25% boost in sales',
        '90% faster decisions',
        '98.5% accuracy rate'
      ],
      logo: 'RM',
      rating: 5
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic automation tools',
        'Standard analytics',
        'Email support',
        'Up to 10 users',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced automation suite',
        'Comprehensive analytics',
        'Priority support',
        'Up to 50 users',
        '100GB storage',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full platform access',
        'Custom analytics',
        'Dedicated support',
        'Unlimited users',
        'Unlimited storage',
        'White-label options'
      ],
      popular: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % 4);
    }2000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Business Solutions 2028
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AIautomationand cloud solutions 
              designed to drive growth and maximize efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                <Play className="inline-block mr-2" />
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Navigation */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-300">Choose the perfect solution for your business needs</p>
          </div>

          {/* Solution Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(solutions).map(([keysolution]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSolution(key)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeSolution === key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/70'
                }`}
              >
                <solution.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-sm font-semibold">{solution.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Solution Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              exit={{ opacity: 0y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Solution Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solutions[activeSolution].color} rounded-2xl flex items-center justify-center`}>
                      <solutions[activeSolution].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{solutions[activeSolution].title}</h3>
                      <p className="text-gray-400">{solutions[activeSolution].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {solutions[activeSolution].description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {solutions[activeSolution].features.map((featureindex) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2" />
                  </motion.button>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-2xl font-bold mb-6">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {solutions[activeSolution].metrics.map((metricindex) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0scale: 0.8 }}
                        animate={{ opacity: 1scale: 1 }}
                        transition={{ duration: 0.5delay: index * 0.1 }}
                        className="bg-gray-700/50 rounded-xl p-4 text-center"
                      >
                        <metric.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((studyindex) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {study.logo}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{study.company}</h4>
                    <p className="text-gray-400">{study.industry}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(study.rating)].map((_i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-300 mb-2">Challenge:</h5>
                  <p className="text-gray-400 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-300 mb-2">Solution:</h5>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-300 mb-2">Results:</h5>
                  <ul className="space-y-1">
                    {study.results.map((resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300">Choose the perfect plan for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tierindex) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 ${
                  tier.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using our solutions to achieve unprecedented success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutionsShowcase2028;