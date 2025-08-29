import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Activity, Brain, BarChart3, Users, Shield, Zap, CheckCircle, ArrowRight, Heart, Stethoscope, Pill, Microscope, FileText, Database, Cloud, Smartphone, Laptop, Server, Globe, Target, TrendingUp, Clock, RefreshCw, Eye, MessageSquare, Bell, Search, Filter, Download, Share, Star, Heart as HeartIcon, ThumbsUp, ThumbsDown, AlertTriangle, Info, HelpCircle, ExternalLink, Phone, Mail, MapPin, UserCheck, Lock, Key, Fingerprint, Bug, Virus, Fire, AlertCircle, ShieldCheck, Globe2, LockKeyhole, ChartBar, PieChart, LineChart, ScatterPlot, Histogram, BellRing, AlertOctagon, CheckSquare, XCircle, Clock3, Calendar, User, Users2, UserPlus, UserMinus, UserX, UserCheck2, UserClock, UserCog, UserEdit, UserSearch, UserVoice, UserCheck3, UserX2, UserMinus2, UserPlus2, UserCheck4, UserX3, UserMinus3, UserPlus3, UserCheck5, UserX4, UserMinus4, UserPlus4, UserCheck6, UserX5, UserMinus5, UserPlus5, UserCheck7, UserX6, UserMinus6, UserPlus6, UserCheck8, UserX7, UserMinus7, UserPlus7, UserCheck9, UserX8, UserMinus8, UserPlus8, UserCheck10, UserX9, UserMinus9, UserPlus9 } from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis Support',
      description: 'Machine learning algorithms that assist healthcare providers with accurate diagnosis and treatment recommendations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      title: 'Real-Time Patient Monitoring',
      description: 'Continuous monitoring of patient vital signs and health metrics with predictive alerts',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast patient outcomes, readmission risks, and disease progression using advanced ML models',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description: 'Enterprise-grade security with full HIPAA compliance and data encryption at rest and in transit',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Population Health Management',
      description: 'Analyze population health trends and identify at-risk groups for preventive care',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Clinical Decision Support',
      description: 'Evidence-based clinical recommendations and best practice guidelines integration',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'Clinical Analytics Platform',
      description: 'Comprehensive healthcare analytics platform with AI-powered insights and reporting',
      price: 'From $15,000/month',
      features: ['Patient analytics', 'Clinical insights', 'Performance metrics', 'Custom dashboards']
    },
    {
      title: 'Predictive Risk Modeling',
      description: 'AI models that predict patient risks and recommend preventive interventions',
      price: 'From $8,000/month',
      features: ['Risk assessment', 'Predictive modeling', 'Intervention recommendations', 'Outcome tracking']
    },
    {
      title: 'Population Health Analytics',
      description: 'Population-level health analysis and community health management',
      price: 'From $12,000/month',
      features: ['Population insights', 'Community health', 'Epidemiological analysis', 'Preventive care']
    },
    {
      title: 'Clinical Research Support',
      description: 'AI-powered tools for clinical research, trials, and evidence-based medicine',
      price: 'From $20,000/month',
      features: ['Research analytics', 'Trial optimization', 'Evidence synthesis', 'Publication support']
    }
  ];

  const healthcareModules = [
    {
      title: 'Electronic Health Records (EHR)',
      icon: FileText,
      description: 'AI-enhanced EHR systems with intelligent data extraction and analysis',
      features: ['Data extraction', 'Clinical documentation', 'Interoperability', 'Quality metrics']
    },
    {
      title: 'Medical Imaging Analytics',
      icon: Eye,
      description: 'AI-powered analysis of medical images for faster and more accurate diagnosis',
      features: ['Image recognition', 'Diagnostic support', 'Quality assessment', 'Report generation']
    },
    {
      title: 'Laboratory Analytics',
      icon: Microscope,
      description: 'Intelligent analysis of lab results with trend detection and anomaly identification',
      features: ['Result analysis', 'Trend detection', 'Anomaly identification', 'Quality control']
    },
    {
      title: 'Pharmacy Analytics',
      icon: Pill,
      description: 'Medication management and drug interaction analysis with AI insights',
      features: ['Drug interactions', 'Dosage optimization', 'Adherence monitoring', 'Safety alerts']
    }
  ];

  const complianceFeatures = [
    { name: 'HIPAA Compliance', icon: '🔒', status: 'Full Compliance', description: 'Complete HIPAA compliance with audit trails and data protection' },
    { name: 'SOC 2 Type II', icon: '🛡️', status: 'Certified', description: 'Security and availability controls certification' },
    { name: 'HITECH Act', icon: '💻', status: 'Compliant', description: 'Health Information Technology for Economic and Clinical Health Act' },
    { name: '21 CFR Part 11', icon: '📋', status: 'Compliant', description: 'Electronic records and signatures compliance' },
    { name: 'GDPR', icon: '🇪🇺', status: 'Compliant', description: 'Data protection and privacy regulations' },
    { name: 'CCPA', icon: '🇺🇸', status: 'Compliant', description: 'California Consumer Privacy Act compliance' }
  ];

  const useCases = [
    {
      title: 'Early Disease Detection',
      description: 'Identify diseases at early stages using AI pattern recognition and predictive modeling',
      icon: Eye,
      benefits: ['Improve early detection rates', 'Reduce treatment costs', 'Better patient outcomes', 'Preventive care optimization']
    },
    {
      title: 'Treatment Optimization',
      description: 'Optimize treatment plans based on patient data, outcomes, and evidence-based guidelines',
      icon: Stethoscope,
      benefits: ['Personalized treatment plans', 'Improved outcomes', 'Reduced side effects', 'Cost optimization']
    },
    {
      title: 'Resource Planning',
      description: 'Optimize hospital resources, staffing, and capacity planning using predictive analytics',
      icon: Users,
      benefits: ['Efficient resource allocation', 'Improved patient flow', 'Cost reduction', 'Better staff utilization']
    },
    {
      title: 'Quality Improvement',
      description: 'Continuous quality improvement through data-driven insights and performance metrics',
      icon: TrendingUp,
      benefits: ['Quality metrics tracking', 'Performance improvement', 'Patient satisfaction', 'Operational efficiency']
    }
  ];

  const integrations = [
    { name: 'Epic', icon: '🏥', category: 'EHR System' },
    { name: 'Cerner', icon: '💊', category: 'EHR System' },
    { name: 'Allscripts', icon: '📋', category: 'EHR System' },
    { name: 'Meditech', icon: '🔬', category: 'EHR System' },
    { name: 'PACS Systems', icon: '🖼️', category: 'Imaging' },
    { name: 'LIS Systems', icon: '🧪', category: 'Laboratory' },
    { name: 'Pharmacy Systems', icon: '💊', category: 'Pharmacy' },
    { name: 'Wearable Devices', icon: '⌚', category: 'IoT' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered analytics. Improve patient outcomes, optimize operations, and ensure compliance with HIPAA and healthcare standards."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform healthcare delivery with AI-powered insights, predictive analytics, and evidence-based decision support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Healthcare Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-xl text-gray-300">
              AI-powered tools designed specifically for healthcare organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Analytics Services
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive solutions for healthcare organizations of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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

      {/* Healthcare Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Cover every aspect of healthcare operations and patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthcareModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300">
              Full compliance with healthcare regulations and security standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <div className="text-lg font-semibold text-white mb-2">{feature.name}</div>
                <div className="text-sm text-green-400 mb-3">{feature.status}</div>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300">
              See how AI analytics transform healthcare delivery and patient outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare System Integrations
            </h2>
            <p className="text-xl text-gray-300">
              Seamlessly integrate with your existing healthcare infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm font-medium text-white">{integration.name}</div>
                <div className="text-xs text-gray-400">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Healthcare with AI Analytics
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations using AI to improve patient care and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6 mr-2" />
                Get Healthcare Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}