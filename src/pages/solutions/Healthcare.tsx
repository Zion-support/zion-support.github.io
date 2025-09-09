import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Users,
  Database,
  Lock,
  BarChart3,
  Workflow,
  Rocket,
  Star,
  Award,
  Target,
  Cpu,
  Network,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Pill,
  Microscope,
  Activity,
  Monitor,
  FileText,
  Clipboard,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  Eye,
  Brain,
  HeartPulse,
  Thermometer,
  Syringe,
  Bandage,
  Hospital,
  Ambulance,
  FirstAid,
  LifeBuoy
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Healthcare = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare data protection regulations and security standards',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Secure Cloud Infrastructure',
      description: 'HIPAA-compliant cloud solutions with end-to-end encryption and access controls',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Electronic Health Records',
      description: 'Comprehensive EHR systems with interoperability and data analytics capabilities',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Workflow,
      title: 'Clinical Workflow Automation',
      description: 'Streamlined clinical processes and automated patient care workflows',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Network,
      title: 'Telemedicine Platform',
      description: 'Secure video consultations and remote patient monitoring solutions',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const solutions = [
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Comprehensive AI-powered analytics for healthcare insights and predictive medicine',
      features: ['Predictive Analytics', 'Patient Risk Assessment', 'Treatment Optimization', 'Clinical Decision Support'],
      href: '/services/ai-healthcare-analytics-platform'
    },
    {
      title: 'HIPAA-Compliant Cloud Infrastructure',
      description: 'Secure, scalable cloud solutions designed specifically for healthcare organizations',
      features: ['Data Encryption', 'Access Controls', 'Audit Logging', 'Disaster Recovery'],
      href: '/services/cloud-devops'
    },
    {
      title: 'Electronic Health Records System',
      description: 'Modern EHR platform with AI-powered insights and seamless integration',
      features: ['Patient Data Management', 'Clinical Documentation', 'Interoperability', 'Analytics Dashboard'],
      href: '/services/data-analytics'
    },
    {
      title: 'Telemedicine & Remote Monitoring',
      description: 'Secure video consultations and continuous patient monitoring solutions',
      features: ['Video Consultations', 'Remote Monitoring', 'Secure Messaging', 'Mobile Apps'],
      href: '/services/ai-autonomous-research-assistant'
    }
  ];

  const benefits = [
    'Improved patient outcomes through AI-powered diagnostics',
    'Enhanced operational efficiency with automated workflows',
    'Reduced healthcare costs through predictive analytics',
    'Better patient engagement and satisfaction',
    'Streamlined compliance and regulatory reporting',
    'Increased accessibility to healthcare services'
  ];

  const useCases = [
    {
      title: 'Hospitals & Health Systems',
      description: 'Enterprise healthcare solutions for large hospital networks and health systems',
      icon: Hospital
    },
    {
      title: 'Clinics & Medical Practices',
      description: 'Scalable solutions for private practices and specialty clinics',
      icon: Stethoscope
    },
    {
      title: 'Research Institutions',
      description: 'AI-powered research tools and data analytics for medical research',
      icon: Microscope
    },
    {
      title: 'Pharmaceutical Companies',
      description: 'Clinical trial management and drug development analytics',
      icon: Pill
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">Healthcare Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionizing Healthcare with
              <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {' '}AI & Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge healthcare technology solutions that improve 
              patient outcomes, streamline operations, and ensure compliance. From AI-powered 
              diagnostics to secure cloud infrastructure, we're transforming healthcare delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-red-400/30 text-red-400 hover:bg-red-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Healthcare Technology Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our healthcare solutions are built with security, compliance, and patient care in mind
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-red-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for healthcare organizations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-red-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={solution.href}
                    className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our solutions are designed for various healthcare organizations and use cases
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-red-400/30 transition-all duration-300 text-center hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Healthcare Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Measurable improvements in patient care, operational efficiency, and compliance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how Zion Tech Group can help you improve patient care and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-red-400/30 text-red-400 hover:bg-red-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;

