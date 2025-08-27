import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Brain, 
  BarChart3, 
  Users, 
  Activity, 
  Lock, 
  Zap,
  Globe,
  Cpu,
  Network,
  TrendingUp,
  Rocket,
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  Workflow,
  Database,
  Eye,
  MessageCircle,
  FileText,
  Monitor,
  AlertTriangle,
  Clock,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function HealthcareSolutions() {
  const healthcareServices = [
    {
      category: 'AI Healthcare Platform',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', description: 'Comprehensive AI-powered healthcare management' },
        { name: 'AI Diagnostics', href: '/services/ai-diagnostics', description: 'Intelligent diagnostic assistance and analysis' },
        { name: 'AI Treatment Planning', href: '/services/ai-treatment-planning', description: 'AI-optimized treatment recommendations' },
        { name: 'AI Patient Monitoring', href: '/services/ai-patient-monitoring', description: 'Real-time patient health monitoring' }
      ]
    },
    {
      category: 'Digital Health Solutions',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Digital Health Platform', href: '/services/digital-health', description: 'Comprehensive digital health management' },
        { name: 'Health Data Analytics', href: '/services/health-data-analytics', description: 'Advanced healthcare data insights' },
        { name: 'Population Health Management', href: '/services/population-health', description: 'Community health optimization' },
        { name: 'Preventive Care Analytics', href: '/services/preventive-care', description: 'Predictive health risk assessment' }
      ]
    },
    {
      category: 'Telemedicine & Remote Care',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Telemedicine Platform', href: '/services/telemedicine', description: 'Remote healthcare delivery solutions' },
        { name: 'Virtual Consultations', href: '/services/virtual-consultations', description: 'Secure video consultation platform' },
        { name: 'Remote Patient Monitoring', href: '/services/remote-monitoring', description: 'IoT-based health monitoring' },
        { name: 'Mobile Health Apps', href: '/services/mobile-health', description: 'Patient engagement applications' }
      ]
    },
    {
      category: 'Healthcare Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'HIPAA Compliance', href: '/services/hipaa-compliance', description: 'Healthcare data privacy and security' },
        { name: 'Healthcare Cybersecurity', href: '/services/healthcare-cybersecurity', description: 'Advanced threat protection' },
        { name: 'Data Encryption', href: '/services/data-encryption', description: 'End-to-end data protection' },
        { name: 'Audit & Compliance', href: '/services/healthcare-audit', description: 'Regulatory compliance management' }
      ]
    },
    {
      category: 'Clinical Workflow Optimization',
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Clinical Decision Support', href: '/services/clinical-decision-support', description: 'Evidence-based clinical guidance' },
        { name: 'Workflow Automation', href: '/services/healthcare-workflow', description: 'Streamlined clinical processes' },
        { name: 'Resource Optimization', href: '/services/resource-optimization', description: 'Efficient resource allocation' },
        { name: 'Quality Improvement', href: '/services/quality-improvement', description: 'Continuous care quality enhancement' }
      ]
    },
    {
      category: 'Patient Experience & Engagement',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'Patient Portal', href: '/services/patient-portal', description: 'Comprehensive patient self-service' },
        { name: 'Care Coordination', href: '/services/care-coordination', description: 'Integrated care team collaboration' },
        { name: 'Patient Education', href: '/services/patient-education', description: 'Interactive health education content' },
        { name: 'Feedback & Surveys', href: '/services/patient-feedback', description: 'Patient satisfaction measurement' }
      ]
    }
  ];

  const healthcareCapabilities = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate diagnosis and treatment recommendations',
      icon: Brain,
      features: ['Image Analysis', 'Pattern Recognition', 'Predictive Modeling', 'Clinical Decision Support']
    },
    {
      title: 'Secure Data Management',
      description: 'HIPAA-compliant data handling with end-to-end encryption and privacy protection',
      icon: Shield,
      features: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance Monitoring']
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring with IoT devices and intelligent alerting systems',
      icon: Monitor,
      features: ['Vital Signs Tracking', 'Alert Management', 'Trend Analysis', 'Remote Monitoring']
    },
    {
      title: 'Interoperability',
      description: 'Seamless integration with existing healthcare systems and standards',
      icon: Network,
      features: ['HL7 FHIR Support', 'EHR Integration', 'API Management', 'Data Exchange']
    }
  ];

  const benefits = [
    'Improved patient outcomes and care quality',
    'Enhanced clinical efficiency and workflow',
    'Better patient engagement and satisfaction',
    'Reduced healthcare costs and waste',
    'Enhanced data security and compliance',
    'Faster diagnosis and treatment',
    'Improved care coordination',
    'Better population health management'
  ];

  const specialties = [
    'Primary Care',
    'Cardiology',
    'Oncology',
    'Radiology',
    'Emergency Medicine',
    'Pediatrics',
    'Mental Health',
    'Rehabilitation'
  ];

  const complianceStandards = [
    'HIPAA (Health Insurance Portability and Accountability Act)',
    'HITECH (Health Information Technology for Economic and Clinical Health)',
    'FDA (Food and Drug Administration)',
    'ISO 27001 (Information Security Management)',
    'SOC 2 (Service Organization Control)',
    'GDPR (General Data Protection Regulation)',
    'CCPA (California Consumer Privacy Act)',
    'NIST Cybersecurity Framework'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group" 
        description="Comprehensive healthcare technology solutions including AI diagnostics, telemedicine, patient engagement, security compliance, and clinical workflow optimization." 
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Healthcare
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate outcomes with AI diagnostics, care management analytics, FHIR-based integrations, 
              and HIPAA-compliant data flows designed to transform healthcare delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-400/25"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Healthcare Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive healthcare solutions cover all aspects of modern medical technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthcareCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Healthcare Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of healthcare technology services organized by category
            </p>
          </motion.div>

          <div className="space-y-12">
            {healthcareServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="group p-6 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:border-green-400/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Healthcare Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits of our healthcare technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions are designed to support various medical specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{specialty}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions meet the highest industry standards and regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center gap-4 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-300 font-medium">{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare Delivery?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our healthcare technology experts help you implement innovative solutions that improve patient care and outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-400/25"
                >
                  Schedule Healthcare Consultation
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
                >
                  Get Healthcare Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

