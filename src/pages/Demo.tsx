import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Lock, 
  Database, 
  Globe, 
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Shield,
  Brain,
  Cpu,
  Network,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  BarChart3,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  Zap,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Award,
  Heart,
  Atom,
  PenTool
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Demo: React.FC = () => {
  const demoTypes = [
    {
      icon: Brain,
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered platforms in action',
      duration: '45 minutes',
      features: ['Live AI demonstrations', 'Use case scenarios', 'Performance metrics', 'Q&A session'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'Technology Stack Demo',
      description: 'Explore our cutting-edge technology infrastructure',
      duration: '30 minutes',
      features: ['Architecture overview', 'Performance testing', 'Security features', 'Scalability demo'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance Demo',
      description: 'See our security measures and compliance standards',
      duration: '40 minutes',
      features: ['Security protocols', 'Compliance frameworks', 'Penetration testing', 'Audit reports'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Custom Solution Demo',
      description: 'Tailored demonstration for your specific needs',
      duration: '60 minutes',
      features: ['Customized scenarios', 'Industry-specific solutions', 'Integration examples', 'ROI analysis'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'See our solutions in real-world scenarios',
    'Ask questions directly to our experts',
    'Understand implementation timelines',
    'Evaluate ROI and business impact',
    'Experience user interface and workflows',
    'Discuss customization options'
  ];

  const demoProcess = [
    {
      step: '1',
      title: 'Schedule Your Demo',
      description: 'Choose your preferred time and demo type',
      icon: Calendar
    },
    {
      step: '2',
      title: 'Pre-Demo Consultation',
      description: 'Brief call to understand your specific needs',
      icon: Phone
    },
    {
      step: '3',
      title: 'Live Demonstration',
      description: 'Interactive demo with our expert team',
      icon: Play
    },
    {
      step: '4',
      title: 'Q&A & Next Steps',
      description: 'Address questions and plan implementation',
      icon: MessageCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Schedule a Demo - Zion Tech Group"
        description="Experience our AI and technology solutions firsthand. Schedule a personalized demo to see how Zion Tech Group can transform your business."
        keywords="demo, demonstration, AI demo, technology demo, Zion Tech Group, schedule demo"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Play className="w-4 h-4 mr-2" />
                Live Demo
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                See Our Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  In Action
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the power of our AI and technology solutions firsthand. 
                Schedule a personalized demo to see how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Demo Type
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the demonstration that best fits your interests and business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoTypes.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${demo.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <div className="flex items-center text-sm text-purple-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration: {demo.duration}
                </div>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Schedule a Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get the most out of your demo experience with these benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              How Our Demo Process Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps to get you started with a personalized demonstration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule your demo today and discover how our AI and technology solutions 
              can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule Your Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demo;