import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Globe, 
  Leaf, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  TreePine,
  Sun,
  Wind,
  Droplets,
  Recycle,
  BarChart3,
  Database,
  Shield,
  Clock,
  DollarSign,
  Star,
  Award,
  Monitor,
  Smartphone,
  Cloud,
  Activity,
  Target,
  Lightbulb,
  Gauge
} from 'lucide-react';

export default function Sustainability() {
  const features = [
    {
      icon: Leaf,
      title: 'Carbon Footprint Tracking',
      description: 'Comprehensive carbon emission monitoring and reduction strategies for organizations',
      benefits: ['Real-time emissions tracking', 'Automated reporting', 'Reduction recommendations', 'Compliance monitoring']
    },
    {
      icon: Sun,
      title: 'Renewable Energy Management',
      description: 'AI-powered optimization of renewable energy systems and grid integration',
      benefits: ['Solar panel optimization', 'Wind farm management', 'Grid balancing', 'Energy storage optimization']
    },
    {
      icon: Recycle,
      title: 'Circular Economy Solutions',
      description: 'Digital platforms for waste reduction, recycling optimization, and resource circularity',
      benefits: ['Waste tracking systems', 'Recycling optimization', 'Resource recovery', 'Supply chain sustainability']
    },
    {
      icon: Globe,
      title: 'Environmental Monitoring',
      description: 'IoT-based environmental monitoring with AI-powered insights and predictive analytics',
      benefits: ['Air quality monitoring', 'Water quality tracking', 'Biodiversity assessment', 'Climate impact analysis']
    }
  ];

  const solutions = [
    {
      title: 'Green Data Centers',
      description: 'Energy-efficient data center solutions with renewable energy integration',
      icon: Database,
      features: ['Energy optimization', 'Renewable integration', 'Heat recovery', 'Carbon-neutral operations']
    },
    {
      title: 'Smart Grid Management',
      description: 'AI-powered smart grid solutions for efficient energy distribution',
      icon: Zap,
      features: ['Demand response', 'Load balancing', 'Grid optimization', 'Renewable integration']
    },
    {
      title: 'Sustainable Supply Chain',
      description: 'End-to-end sustainability tracking and optimization for supply chains',
      icon: TrendingUp,
      features: ['Carbon tracking', 'Supplier assessment', 'Route optimization', 'Sustainable sourcing']
    },
    {
      title: 'Environmental Analytics',
      description: 'Advanced analytics for environmental impact assessment and reporting',
      icon: BarChart3,
      features: ['Impact modeling', 'Compliance reporting', 'Risk assessment', 'Performance tracking']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,000',
      period: '/month',
      description: 'Basic sustainability monitoring for small organizations',
      features: [
        'Carbon footprint tracking (up to 100 metrics)',
        'Basic environmental monitoring',
        'Standard reporting templates',
        'Email support',
        'Basic integrations',
        'Monthly sustainability reports'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,500',
      period: '/month',
      description: 'Advanced sustainability solutions for growing organizations',
      features: [
        'Unlimited carbon tracking',
        'Advanced environmental monitoring',
        'AI-powered insights',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'Compliance automation',
        'SLA guarantee'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive sustainability solutions for large organizations',
      features: [
        'Full sustainability suite',
        'Custom AI models',
        'Multi-site management',
        'Dedicated infrastructure',
        '24/7 dedicated support',
        'Custom analytics and reporting',
        'White-label solutions',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const marketInfo = {
    marketSize: '$28.9 billion',
    growthRate: '24.3% CAGR',
    averageMarketPrice: '$3,500-$12,000/month',
    setupTime: '2-4 weeks',
    roi: '250-400% within 12 months'
  };

  const certifications = [
    'ISO 14001 Environmental Management',
    'LEED Certification Support',
    'BREEAM Assessment',
    'Carbon Trust Standard',
    'GRI Reporting Framework',
    'SASB Standards'
  ];

  const environmentalMetrics = [
    {
      title: 'Carbon Emissions',
      value: 'Reduced by 40%',
      icon: Leaf
    },
    {
      title: 'Energy Efficiency',
      value: 'Improved by 35%',
      icon: Zap
    },
    {
      title: 'Waste Reduction',
      value: 'Decreased by 50%',
      icon: Recycle
    },
    {
      title: 'Water Conservation',
      value: 'Saved 30%',
      icon: Droplets
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sustainability & Green IT Solutions - Zion Tech Group"
        description="AI-powered sustainability solutions including carbon tracking, renewable energy management, environmental monitoring, and circular economy platforms. Drive environmental impact and compliance."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              <span>Sustainable Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sustainability
              </span>
              <br />
              <span className="text-white">& Green IT Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your organization's environmental impact with AI-powered sustainability solutions. 
              Track, optimize, and reduce your carbon footprint while driving business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {Object.entries(marketInfo).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-green-400 mb-2">{value}</div>
                <div className="text-sm text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Metrics */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Environmental Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our sustainability solutions have delivered measurable environmental improvements 
              for organizations across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white">{metric.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Sustainability Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our sustainability solutions leverage cutting-edge AI and IoT technology 
              to provide comprehensive environmental monitoring and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Sustainability Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From carbon tracking to renewable energy optimization, our solutions 
              cover every aspect of organizational sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Certifications & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our sustainability solutions support and enable compliance with leading 
              environmental standards and certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Sustainability Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the sustainability solution that best fits your organization's needs. 
              All plans include comprehensive environmental monitoring and reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                  plan.popular 
                    ? 'border-green-400 shadow-lg shadow-green-400/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations that are already leveraging AI-powered sustainability 
              solutions to drive environmental impact and business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Sustainability Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
