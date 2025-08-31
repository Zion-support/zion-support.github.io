import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Heart, 
  Factory, 
  DollarSign, 
  Car, 
  Zap,
  Globe,
  Star,
  Brain,
  Cloud,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustrySolutions: React.FC = () => {
  const industries = [
    {
      title: 'Healthcare',
      description: 'AI-powered healthcare solutions for improved patient care and operational efficiency.',
      icon: Heart,
      path: '/solutions/healthcare',
      solutions: ['AI Healthcare Analytics', 'Predictive Diagnostics', 'Patient Care Optimization', 'Compliance Management']
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions with IoT, AI, and automation technologies.',
      icon: Factory,
      path: '/manufacturing-solutions',
      solutions: ['Smart Factory Automation', 'Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization']
    },
    {
      title: 'Financial Services',
      description: 'Advanced financial technology solutions for risk management and operational efficiency.',
      icon: DollarSign,
      path: '/financial-solutions',
      solutions: ['AI Financial Analytics', 'Risk Management', 'Trading Algorithms', 'Compliance Automation']
    },
    {
      title: 'Automotive',
      description: 'Connected vehicle solutions and automotive technology innovations.',
      icon: Car,
      path: '/automotive-solutions',
      solutions: ['Connected Vehicles', 'Predictive Maintenance', 'Fleet Management', 'Safety Systems']
    },
    {
      title: 'Energy & Utilities',
      description: 'Smart grid and energy management solutions for sustainability and efficiency.',
      icon: Zap,
      path: '/energy-solutions',
      solutions: ['Smart Grid Management', 'Energy Optimization', 'Predictive Maintenance', 'Sustainability Analytics']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Digital transformation solutions for modern retail and e-commerce operations.',
      icon: Globe,
      path: '/retail-solutions',
      solutions: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Supply Chain Optimization']
    }
  ];

  const benefits = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of industry-specific challenges and requirements',
      icon: Brain
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored technology solutions for your specific industry needs',
      icon: Building
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations across industries',
      icon: Star
    },
    {
      title: 'Future-Ready',
      description: 'Scalable solutions that grow with your business',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers industry-specific technology solutions that address unique challenges 
              and drive transformation across diverse sectors. From healthcare to manufacturing, we understand your industry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Our Industry Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our deep industry knowledge combined with cutting-edge technology delivers measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed specifically for your industry challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Solutions:</h4>
                <ul className="space-y-1">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-cyan-400" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to={industry.path}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
              >
                <span className="font-medium">Learn More</span>
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustrySolutions;