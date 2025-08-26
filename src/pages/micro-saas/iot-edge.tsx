import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Globe,
  BarChart3,
  TrendingUp,
  Database,
  Lock,
  Code,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Cloud,
  Server,
  HardDrive,
  Activity,
  Search,
  Filter,
  Download,
  Share2,
  Settings
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data at the edge for real-time insights and reduced latency.',
    benefits: ['Local processing', 'Reduced latency', 'Bandwidth optimization', 'Offline capabilities']
  },
  {
    icon: Network,
    title: 'Device Management',
    description: 'Centralized management of IoT devices with remote monitoring and control.',
    benefits: ['Device provisioning', 'Remote updates', 'Health monitoring', 'Configuration management']
  },
  {
    icon: Zap,
    title: 'Real-time Analytics',
    description: 'Instant data processing and analytics for immediate decision-making.',
    benefits: ['Stream processing', 'Real-time dashboards', 'Instant alerts', 'Predictive analytics']
  },
  {
    icon: Target,
    title: 'Cloud Integration',
    description: 'Seamless integration between edge devices and cloud platforms.',
    benefits: ['Hybrid architecture', 'Data synchronization', 'Scalable storage', 'Advanced analytics']
  }
];

const useCases = [
  {
    title: 'Smart Manufacturing',
    description: 'Optimize production with real-time monitoring and predictive maintenance.',
    icon: Cpu,
    metrics: ['Production efficiency', 'Predictive maintenance', 'Quality control', 'Energy optimization']
  },
  {
    title: 'Smart Cities',
    description: 'Manage urban infrastructure with intelligent monitoring systems.',
    icon: Globe,
    metrics: ['Traffic management', 'Energy monitoring', 'Waste management', 'Public safety']
  },
  {
    title: 'Healthcare IoT',
    description: 'Monitor patients and medical equipment in real-time.',
    icon: Shield,
    metrics: ['Patient monitoring', 'Equipment tracking', 'Alert systems', 'Data compliance']
  },
  {
    title: 'Retail Analytics',
    description: 'Understand customer behavior and optimize store operations.',
    icon: BarChart3,
    metrics: ['Customer tracking', 'Inventory management', 'Store optimization', 'Marketing insights']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$179',
    period: '/month',
    description: 'Perfect for small IoT deployments with basic edge computing needs.',
    features: [
      'Up to 100 devices',
      'Basic edge processing',
      'Standard monitoring',
      'Email support',
      'Basic integrations',
      'Mobile app access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$499',
    period: '/month',
    description: 'Ideal for growing IoT deployments with advanced edge computing requirements.',
    features: [
      'Up to 1,000 devices',
      'Advanced edge processing',
      'Real-time analytics',
      'Priority support',
      'Advanced integrations',
      'Custom dashboards',
      'Predictive analytics',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,299',
    period: '/month',
    description: 'For large-scale IoT deployments requiring enterprise-grade solutions.',
    features: [
      'Unlimited devices',
      'Custom edge solutions',
      'Advanced analytics',
      '24/7 support',
      'Custom integrations',
      'Advanced ML models',
      'White-label options',
      'Advanced security',
      'Dedicated infrastructure',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function IoTEdgeComputing() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              IoT Edge Computing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Process data at the edge for real-time insights and reduced latency. 
              Transform your IoT deployment with intelligent edge computing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our IoT edge computing platform provides the tools and infrastructure needed 
              to process data locally and deliver real-time insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how IoT edge computing is revolutionizing industries and enabling 
              new possibilities for real-time data processing and analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4 text-center text-sm">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-zion-cyan text-center">
                      • {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your IoT deployment size. 
              Start with edge computing today and see immediate benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan/50 bg-zion-cyan/5' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light text-sm">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IoT Deployment?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our edge computing platform to 
              process data locally and gain real-time insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}