import React from 'react';
import { SEO } from "../../components/SEO";
import { motion } from 'framer-motion';
import { 
  Globe, 
  Leaf, 
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Settings, 
  Users, 
  Network, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Cloud, 
  RefreshCw, 
  TrendingUp, 
  AlertTriangle, 
  Activity, 
  FileText, 
  CheckCircle, 
  Sun, 
  Wind, 
  Battery, 
  Recycle,
  Heart,
  Cpu,
  ArrowRight
} from 'lucide-react';

export default function Sustainability() {
  const features = [
    {
      icon: Heart,
      title: 'Eco-Friendly Solutions',
      description: 'Reduce environmental impact with green technology'
    },
    {
      icon: Leaf,
      title: 'Energy Efficiency',
      description: 'Optimize power consumption and reduce carbon footprint'
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Integrate solar, wind, and sustainable power sources'
    },
    {
      icon: Globe,
      title: 'Carbon Neutral',
      description: 'Achieve net-zero emissions through smart technology'
    }
  ];

  const services = [
    {
      title: 'Green IT Infrastructure',
      description: 'Energy-efficient data centers and computing systems',
      icon: Cpu
    },
    {
      title: 'Sustainable Software',
      description: 'Eco-friendly application development and optimization',
      icon: Database
    },
    {
      title: 'Energy Monitoring',
      description: 'Real-time tracking and optimization of power usage',
      icon: BarChart3
    },
    {
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive environmental impact assessment',
      icon: Globe
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint and environmental damage',
      value: '40% reduction'
    },
    {
      icon: Zap,
      title: 'Energy Savings',
      description: 'Lower energy consumption and operational costs',
      value: '30% savings'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Meet environmental regulations and standards',
      value: '100% compliant'
    },
    {
      icon: TrendingUp,
      title: 'Brand Value',
      description: 'Enhance reputation and customer loyalty',
      value: '25% increase'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sustainability & Green IT - Zion Tech Group"
        description="Build a greener tomorrow with sustainable technology solutions. Reduce environmental impact while maintaining performance and efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Green IT & Sustainability</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology for a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> Sustainable Future</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Build a greener tomorrow with sustainable technology solutions.
              Reduce environmental impact while maintaining performance and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-lg font-semibold flex items-center justify-center space-x-2">
                <span>Go Green with Tech</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors text-lg font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Sustainable Technology?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Green IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Measurable Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-emerald-500/30 rounded-xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-emerald-400">{benefit.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the sustainable technology revolution. Let us help you build a greener, 
              more efficient technology infrastructure that benefits both your business and the planet.
            </p>
            <button className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-lg font-semibold">
              Start Your Green Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
