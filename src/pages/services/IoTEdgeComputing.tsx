import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  DollarSign,
  Database,
  BarChart3,
  Zap,
  Globe,
  Lock,
  Eye,
  Activity,
  TrendingUp,
  AlertTriangle,
  FileText,
  Network,
  Server,
  Smartphone,
  Wifi,
  Bluetooth,
  Radio,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function IoTEdgeComputing() {
  const features = [
    { icon: Cpu, title: 'Edge Processing', description: 'Real-time data processing at the edge for instant insights and actions' },
    { icon: Network, title: 'IoT Connectivity', description: 'Seamless connectivity across multiple IoT protocols and standards' },
    { icon: Brain, title: 'AI at the Edge', description: 'Machine learning models running directly on edge devices' },
    { icon: Database, title: 'Local Data Storage', description: 'Secure local data storage with cloud synchronization' },
    { icon: Shield, title: 'Edge Security', description: 'Advanced security protocols for edge devices and data' },
    { icon: Zap, title: 'Low Latency', description: 'Ultra-low latency processing for real-time applications' }
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Real-time Processing', description: 'Process data in milliseconds at the edge' },
    { icon: DollarSign, title: 'Cost Reduction', description: 'Reduce bandwidth costs by 60-80%' },
    { icon: Users, title: 'Improved Performance', description: 'Enhance application performance by 40-70%' },
    { icon: Shield, title: 'Enhanced Security', description: 'Local data processing reduces security risks' },
    { icon: Zap, title: 'Scalable Solution', description: 'Scale IoT deployments without infrastructure concerns' },
    { icon: TrendingUp, title: 'Better Reliability', description: 'Offline operation capability for critical applications' }
  ];

  const iotServices = [
    { title: 'Smart Cities', description: 'Intelligent urban infrastructure and monitoring', icon: Building },
    { title: 'Industrial IoT', description: 'Manufacturing automation and predictive maintenance', icon: Factory },
    { title: 'Smart Homes', description: 'Connected home automation and security', icon: Home },
    { title: 'Healthcare IoT', description: 'Medical device monitoring and patient care', icon: Heart },
    { title: 'Agriculture IoT', description: 'Precision farming and crop monitoring', icon: Leaf },
    { title: 'Transportation IoT', description: 'Fleet management and traffic optimization', icon: Car }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$1,200',
      period: 'monthly',
      description: 'Perfect for small IoT projects and startups',
      features: ['Up to 100 devices', 'Basic edge processing', 'Standard connectivity', 'Monthly support', 'Basic analytics'],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$2,800',
      period: 'monthly',
      description: 'Ideal for growing IoT deployments and businesses',
      features: ['Up to 1,000 devices', 'Advanced edge AI', 'Priority support', 'Real-time analytics', 'Custom integrations', 'Advanced security'],
      cta: 'Get Started',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: 'monthly',
      description: 'For large-scale IoT deployments and enterprises',
      features: ['Unlimited devices', 'Custom AI models', '24/7 dedicated support', 'White-label options', 'API access', 'Custom development'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              IoT Edge Computing
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6">
              IoT Edge Computing
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IoT deployments with AI-powered edge computing solutions. 
              Process data locally, reduce latency, and enable real-time decision making at the edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border border-teal-400/50 text-teal-400 hover:bg-teal-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced IoT Edge Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT edge computing platform combines cutting-edge hardware with intelligent software 
              to deliver powerful, scalable IoT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-teal-400/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mb-4 inline-block">
                  <feature.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver measurable improvements in IoT performance, efficiency, and ROI through 
              our proven edge computing technology and IoT expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mb-4 inline-block">
                  <benefit.icon className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT edge computing platform serves diverse industries with tailored solutions 
              for specific use cases and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-teal-400/30 transition-all duration-300 text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mb-4 inline-block">
                  <service.icon className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the IoT edge computing plan that best fits your deployment needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-8 ${
                  plan.popular 
                    ? 'border-teal-400/50 ring-2 ring-teal-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold rounded-full">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-teal-400 mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/request-quote'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white transform hover:scale-105 shadow-lg hover:shadow-teal-500/25'
                      : 'border border-teal-400/50 text-teal-400 hover:bg-teal-400/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-teal-400/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IoT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IoT edge computing platform can optimize your IoT deployments, 
              reduce latency, and enable real-time decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-teal-400/50 text-teal-400 hover:bg-teal-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}