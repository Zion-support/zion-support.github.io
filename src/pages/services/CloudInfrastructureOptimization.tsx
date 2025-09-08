import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Server, 
  Database, 
  Network, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function CloudInfrastructureOptimization() {
  const features = [
    "Automatic resource scaling based on demand",
    "Real-time cost optimization and monitoring",
    "Multi-cloud management and orchestration",
    "Advanced security and compliance features",
    "Performance monitoring and alerting",
    "Automated backup and disaster recovery",
    "DevOps pipeline integration",
    "24/7 infrastructure monitoring"
  ];

  const benefits = [
    "Reduce cloud costs by 40%",
    "Improve performance by 60%",
    "99.9% uptime guarantee",
    "Automated scaling and optimization",
    "Real-time cost visibility",
    "Enhanced security posture"
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="Cloud Infrastructure Optimization Platform - Zion Tech Group"
        description="Advanced cloud infrastructure optimization platform that automatically scales resources, optimizes costs, and improves performance. Reduces cloud costs by 40% and improves performance by 60%."
        keywords="cloud infrastructure, cloud optimization, cost optimization, auto-scaling, performance monitoring, DevOps, cloud management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10"></div>
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6">
                Cloud Infrastructure Optimization Platform
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Advanced cloud infrastructure optimization platform that automatically scales resources, 
                optimizes costs, and improves performance. Reduces cloud costs by 40% and improves performance by 60%.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>40% Cost Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>60% Performance Improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing & Contact */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Pricing & Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Starting Price:</span>
                      <span className="text-2xl font-bold text-white">$7,999</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Market Price:</span>
                      <span className="text-slate-300">$6,000-15,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">ROI:</span>
                      <span className="text-green-400 font-semibold">500% within 12 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Setup Time:</span>
                      <span className="text-slate-300">6-8 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">AI Score:</span>
                      <span className="text-blue-400 font-semibold">94/100</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">Phone</p>
                        <p className="text-white font-medium">{contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">Email</p>
                        <p className="text-white font-medium">{contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">Address</p>
                        <p className="text-white font-medium">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Features & Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our cloud infrastructure optimization platform provides comprehensive tools and features 
                to maximize your cloud investment and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Benefits & Results
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Organizations using our cloud infrastructure optimization platform have achieved 
                significant improvements in cost, performance, and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Optimize Your Cloud Infrastructure?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Contact us today to learn how our cloud infrastructure optimization platform 
                  can transform your cloud operations and reduce costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Cloud Infrastructure Optimization Inquiry`}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}