import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Cpu, 
  Network, 
  Zap, 
  Globe, 
  Shield, 
  Database, 
  Cloud, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,
  BarChart3,
  Server,
  Smartphone
} from 'lucide-react';

export default function IoTEdgeComputing() {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Intelligence',
      description: 'Local AI processing for real-time decision making without cloud dependency'
    },
    {
      icon: Network,
      title: '5G Integration',
      description: 'Ultra-low latency connectivity for mission-critical IoT applications'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant data processing and insights at the edge of your network'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Localized security protocols and encrypted data transmission'
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Predictive maintenance, quality control, and production optimization',
      icon: Target
    },
    {
      title: 'Connected Healthcare',
      description: 'Patient monitoring, medical device management, and telemedicine',
      icon: Users
    },
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety',
      icon: Globe
    },
    {
      title: 'Retail Analytics',
      description: 'Customer behavior tracking, inventory management, and personalized experiences',
      icon: BarChart3
    }
  ];

  const benefits = [
    'Reduced latency for real-time applications',
    'Lower bandwidth costs and cloud dependency',
    'Enhanced data privacy and security',
    'Improved reliability and offline operation',
    'Scalable IoT infrastructure',
    'Cost-effective edge computing solutions'
  ];

  return (
    <>
      <SEO 
        title="IoT Edge Computing Solutions - Zion Tech Group"
        description="Advanced IoT edge computing solutions for real-time processing, local AI, and connected device management. Transform your business with edge intelligence."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                IoT Edge Computing
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IoT Edge Computing
                <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Bring intelligence to the edge of your network with our IoT edge computing solutions. 
                Process data locally, reduce latency, and enable real-time decision making for your 
                connected devices and applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Edge Computing Features
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our IoT edge computing platform combines local processing power with intelligent 
                algorithms to deliver real-time insights and automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                IoT Edge Computing Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how edge computing can transform your industry and enable new 
                possibilities for connected devices and applications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-slate-300">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose IoT Edge Computing?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Edge computing represents the future of IoT, offering superior performance, 
                reliability, and cost-effectiveness for connected applications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your IoT Infrastructure?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Join the edge computing revolution and discover how our solutions can optimize 
                your connected devices and enable real-time intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Start Your Edge Journey
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}