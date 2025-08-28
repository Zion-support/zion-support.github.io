import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Brain,
  Eye,
  Shield,
  Database,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  FileText,
  Video,
  BarChart3,
  Lock,
  Globe,
  Cpu,
  Network,
  Server,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  WifiIcon,
  BluetoothIcon,
  RadioIcon,
  SatelliteIcon,
  WifiOffIcon,
  SignalIcon,
  SignalHighIcon,
  SignalMediumIcon,
  SignalLowIcon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const HealthcareSolutions: React.FC = () => {
  const solutions = [
    {
      id: 'ai-medical-imaging',
      name: 'AI Medical Imaging',
      description: 'Advanced AI-powered medical imaging analysis for accurate diagnostics',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Radiology Image Analysis',
        'Pathology Slide Review',
        'Ultrasound Interpretation',
        'CT/MRI Enhancement',
        'Early Disease Detection',
        'Automated Reporting'
      ],
      benefits: [
        '95% accuracy in image analysis',
        '50% faster diagnosis time',
        'Reduced radiologist workload',
        'Improved patient outcomes'
      ]
    },
    {
      id: 'predictive-diagnostics',
      name: 'Predictive Diagnostics',
      description: 'AI-driven predictive analytics for early disease detection and prevention',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Risk Assessment Models',
        'Disease Progression Prediction',
        'Treatment Response Forecasting',
        'Population Health Analytics',
        'Genetic Risk Analysis',
        'Lifestyle Impact Assessment'
      ],
      benefits: [
        'Early intervention opportunities',
        'Personalized treatment plans',
        'Reduced healthcare costs',
        'Improved survival rates'
      ]
    },
    {
      id: 'patient-data-analytics',
      name: 'Patient Data Analytics',
      description: 'Comprehensive patient data analysis for personalized care and insights',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Electronic Health Records',
        'Real-time Monitoring',
        'Patient Journey Mapping',
        'Outcome Analysis',
        'Quality Metrics',
        'Performance Dashboards'
      ],
      benefits: [
        '360-degree patient view',
        'Data-driven decisions',
        'Improved care coordination',
        'Enhanced patient experience'
      ]
    },
    {
      id: 'telemedicine-platforms',
      name: 'Telemedicine Platforms',
      description: 'Secure, scalable telemedicine solutions for remote healthcare delivery',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      features: [
        'Video Consultations',
        'Secure Messaging',
        'Remote Monitoring',
        'Prescription Management',
        'Appointment Scheduling',
        'Payment Processing'
      ],
      benefits: [
        'Increased access to care',
        'Reduced travel time',
        'Lower healthcare costs',
        'Better patient engagement'
      ]
    },
    {
      id: 'drug-discovery-ai',
      name: 'Drug Discovery AI',
      description: 'AI-powered drug discovery and development acceleration',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Molecular Modeling',
        'Target Identification',
        'Drug Repurposing',
        'Clinical Trial Optimization',
        'Safety Prediction',
        'Efficacy Analysis'
      ],
      benefits: [
        'Faster drug development',
        'Reduced research costs',
        'Higher success rates',
        'Personalized medicine'
      ]
    },
    {
      id: 'healthcare-compliance',
      name: 'Healthcare Compliance',
      description: 'Comprehensive compliance management for healthcare regulations',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'HIPAA Compliance',
        'GDPR Management',
        'FDA Regulations',
        'Audit Trails',
        'Risk Assessment',
        'Training Management'
      ],
      benefits: [
        'Regulatory compliance',
        'Reduced legal risks',
        'Audit readiness',
        'Patient data protection'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Hospital Network Optimization',
      description: 'AI-powered optimization of hospital operations, resource allocation, and patient flow management.',
      metrics: ['30% reduction in wait times', '25% improvement in resource utilization', '40% faster patient discharge']
    },
    {
      title: 'Rural Healthcare Access',
      description: 'Telemedicine solutions bringing specialist care to underserved rural communities.',
      metrics: ['90% reduction in travel time', '3x increase in specialist consultations', '50% cost savings for patients']
    },
    {
      title: 'Chronic Disease Management',
      description: 'AI-driven monitoring and management of chronic conditions for better outcomes.',
      metrics: ['45% reduction in hospital readmissions', '60% improvement in medication adherence', '35% better disease control']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', icon: Brain, description: 'Advanced ML algorithms for pattern recognition and prediction' },
    { name: 'Natural Language Processing', icon: FileText, description: 'AI-powered text analysis for medical documentation' },
    { name: 'Computer Vision', icon: Eye, description: 'Image recognition and analysis for medical imaging' },
    { name: 'IoT & Wearables', icon: Smartphone, description: 'Connected devices for continuous health monitoring' },
    { name: 'Blockchain', icon: Lock, description: 'Secure, immutable health records and data sharing' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Scalable infrastructure for healthcare applications' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group"
        description="Transform healthcare delivery with our AI-powered solutions. From medical imaging to predictive diagnostics, we deliver innovative technology that improves patient outcomes and reduces costs."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Healthcare Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform healthcare delivery with cutting-edge AI technology. Improve patient outcomes, 
              reduce costs, and enhance operational efficiency with our comprehensive healthcare solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Get Healthcare Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-red-400/50 text-red-400 hover:bg-red-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered healthcare solutions address every aspect of modern healthcare delivery, 
              from diagnosis to treatment and ongoing care management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our healthcare solutions are transforming healthcare delivery and improving patient outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions leverage the latest advancements in AI, machine learning, and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-red-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {tech.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading healthcare organizations that are already using our AI solutions to improve patient care and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Get Healthcare Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-red-400/50 text-red-400 hover:bg-red-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;