import React from 'react';
import { SEO } from '@/components/SEO';

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO title="Digital Transformation - Zion Tech Group" description="Modernize processes with cloud-native platforms, automation, and data-driven operations." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Digital Transformation</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          We partner with teams to reimagine workflows, build cloud-native systems, and scale data and AI capabilities across the enterprise.
        </p>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Cpu,
  Database,
  Cloud,
  Shield,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
  Settings,
  Workflow,
  FileText,
  Monitor,
  Smartphone
} from 'lucide-react';
export default function DigitalTransformation() {
  const features = [
    {
      icon: Rocket,
      title: 'Strategic Planning',
      description: 'Comprehensive digital transformation roadmap and strategy'
    },
    {
      icon: Globe,
      title: 'Technology Integration',
      description: 'Seamless integration of modern technologies and systems'
    },
    {
      icon: Building,
      title: 'Process Optimization',
      description: 'Streamline and automate business processes for efficiency'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide organizations through digital transformation journey'
    },
    {
      icon: Clock,
      title: 'Agile Implementation',
      description: 'Rapid deployment with iterative improvement cycles'
    },
    {
      icon: Search,
      title: 'Performance Monitoring',
      description: 'Track transformation progress and measure ROI'
    }
  ];

  const benefits = [
    'Increase operational efficiency by 40%',
    'Reduce costs by 30% through automation',
    'Improve customer experience and satisfaction',
    'Enable data-driven decision making',
    'Accelerate time to market',
    'Enhance competitive advantage'
  ];

  const services = [
    {
      icon: Strategy,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategy development'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate manual processes and workflows'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Migrate legacy systems to modern cloud platforms'
    },
    {
      icon: Data,
      title: 'Data Analytics',
      description: 'Implement advanced analytics and business intelligence'
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      description: 'Smart factory and Industry 4.0 transformation'
    },
    {
      industry: 'Healthcare',
      description: 'Digital health records and telemedicine solutions'
    },
    {
      industry: 'Financial Services',
      description: 'Digital banking and fintech innovation'
    },
    {
      industry: 'Retail',
      description: 'E-commerce and omnichannel retail transformation'
    }
  ];
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };
  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Transportation'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO title="Digital Transformation - Zion Tech Group" description="Modernize processes with cloud-native platforms, automation, and data-driven operations." />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Digital Transformation Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Transformation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business for the digital age with comprehensive technology solutions that drive innovation,
              efficiency, and growth. Our expert team guides you through every step of your digital journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Transformation Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive digital transformation services designed to modernize your business operations
              and position you for future success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From strategy to implementation, we provide 
              end-to-end digital transformation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in efficiency, innovation, and business performance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our digital transformation expertise spans across multiple industries,
              each with unique challenges and opportunities.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="text-zion-cyan font-semibold">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation outcomes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Evaluate current state and identify transformation opportunities' },
              { step: '02', title: 'Strategy', description: 'Develop comprehensive digital transformation roadmap' },
              { step: '03', title: 'Implementation', description: 'Execute transformation plan with expert guidance' },
              { step: '04', title: 'Optimization', description: 'Continuously improve and scale digital capabilities' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your Digital Transformation Today
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our digital transformation experts guide you through your journey to digital excellence.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
