import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  const services = [
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions that reduce manual work and improve efficiency.',
      icon: Workflow,
      features: ['RPA Implementation', 'Workflow Optimization', 'Business Process Mapping', 'Performance Monitoring']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal disruption and maximum benefits.',
      icon: Cloud,
      features: ['Migration Strategy', 'Data Transfer', 'Application Modernization', 'Performance Optimization']
    },
    {
      title: 'Data Strategy',
      description: 'Develop a comprehensive data strategy that turns information into actionable business intelligence.',
      icon: Database,
      features: ['Data Architecture', 'Analytics Implementation', 'Data Governance', 'Business Intelligence']
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and improve efficiency through digital workflows",
      features: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"],
      icon: Workflow
    },
    {
      title: "Customer Experience Enhancement",
      description: "Create seamless digital experiences that delight your customers",
      features: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems"],
      icon: Star
    },
    {
      title: "Data & Analytics Strategy",
      description: "Leverage data insights to drive informed business decisions",
      features: ["Data Collection", "Analytics Platforms", "Business Intelligence", "Predictive Modeling"],
      icon: BarChart3
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows to boost productivity by up to 40%.',
      icon: TrendingUp
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and cloud optimization.',
      icon: BarChart3
    },
    {
      title: 'Better Customer Experience',
      description: 'Deliver faster, more personalized services through digital channels.',
      icon: Star
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge digital capabilities.',
      icon: Target
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Energy'
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transform your business for the digital age with comprehensive technology solutions that drive innovation, 
              efficiency, and growth. Our expert team guides you through every step of your digital journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Start Your Transformation
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
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
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Transformation Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive digital transformation services designed to modernize your business operations 
              and position you for future success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Digital Transformation?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Digital transformation delivers measurable benefits that impact every aspect of your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
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
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our digital transformation expertise spans across multiple industries, 
              each with unique challenges and opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-cyan-400 font-semibold">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/30">
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
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-slate-300 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let our digital transformation experts guide you through your journey to digital excellence. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
