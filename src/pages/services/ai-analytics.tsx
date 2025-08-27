import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Database, 
  Cpu, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

export default function AIAnalyticsPage() {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time data insights and predictive analytics",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Comprehensive BI dashboards and reporting",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent process automation and optimization",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions",
      price: "$2,500/month",
      features: ["Real-time predictions", "Custom algorithms", "API integration", "24/7 monitoring"]
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding",
      price: "$1,800/month",
      features: ["Multi-language support", "Custom training", "Real-time processing", "Scalable infrastructure"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automation and insights",
      price: "$3,200/month",
      features: ["Object detection", "Facial recognition", "Quality control", "Performance analytics"]
    }
  ];

  return (
    <>
      <SEO 
        title="AI & Analytics Services - Zion Tech Group"
        description="Transform your business with cutting-edge AI and analytics solutions. Machine learning, predictive analytics, and business intelligence services."
        keywords="AI services, machine learning, analytics, business intelligence, predictive analytics, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI & Analytics Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  AI & Analytics
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence and advanced analytics to gain insights, 
                automate processes, and make data-driven decisions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  AI & Analytics
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our comprehensive AI and analytics solutions are designed to give you a competitive edge
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-zion-slate">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  AI Services
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Comprehensive AI solutions designed to meet your specific business requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4">
                        {service.description}
                      </p>
                      <div className="text-3xl font-bold text-zion-cyan">
                        {service.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already leveraging our AI and analytics solutions 
                to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}