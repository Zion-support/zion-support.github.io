import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Brain, 
  Database, 
  Users, 
  Zap, 
  Cloud, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  Globe,
  Cpu,
  Server,
  Smartphone,
  Palette,
  Wallet,
  Box,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Scale,
  Leaf,
  Rocket,
  Atom,
  Eye,
  Code,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Building,
  Car,
  Home,
  Factory,
  City,
  Stethoscope,
  Activity,
  Pill,
  Microscope,
  Syringe,
  FileText,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const HealthcareSolutions: React.FC = () => {
  const solutions = [
    {
      category: 'AI & Medical Intelligence',
      items: [
        {
          name: 'AI Diagnostic Platform',
          description: 'Advanced AI-powered diagnostic tools for improved accuracy and faster results',
          features: ['Image Analysis', 'Pattern Recognition', 'Clinical Decision Support', 'Learning Algorithms'],
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          featured: true
        },
        {
          name: 'Predictive Healthcare Analytics',
          description: 'Predictive modeling for patient outcomes and population health management',
          features: ['Risk Assessment', 'Population Health', 'Early Warning Systems', 'Trend Analysis'],
          icon: BarChart3,
          color: 'from-blue-500 to-cyan-500',
          featured: true
        },
        {
          name: 'Medical Image Processing',
          description: 'AI-powered medical imaging analysis for radiology and pathology',
          features: ['Radiology AI', 'Pathology Analysis', '3D Reconstruction', 'Automated Reporting'],
          icon: Eye,
          color: 'from-indigo-500 to-purple-500',
          featured: false
        }
      ]
    },
    {
      category: 'Patient Care & Management',
      items: [
        {
          name: 'Electronic Health Records (EHR)',
          description: 'Comprehensive EHR system with AI-powered insights and automation',
          features: ['Patient Portals', 'Clinical Documentation', 'Workflow Automation', 'Interoperability'],
          icon: FileText,
          color: 'from-green-500 to-emerald-500',
          featured: true
        },
        {
          name: 'Telehealth Platform',
          description: 'Secure, HIPAA-compliant telehealth solutions for remote patient care',
          features: ['Video Consultations', 'Secure Messaging', 'Remote Monitoring', 'Mobile Access'],
          icon: Users,
          color: 'from-teal-500 to-cyan-500',
          featured: false
        },
        {
          name: 'Patient Engagement System',
          description: 'Digital tools to improve patient engagement and health outcomes',
          features: ['Health Education', 'Appointment Scheduling', 'Medication Reminders', 'Health Tracking'],
          icon: Activity,
          color: 'from-orange-500 to-red-500',
          featured: false
        }
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        {
          name: 'HIPAA Compliance Suite',
          description: 'Comprehensive HIPAA compliance tools and monitoring systems',
          features: ['Privacy Controls', 'Audit Logging', 'Breach Detection', 'Compliance Reporting'],
          icon: Shield,
          color: 'from-red-500 to-orange-500',
          featured: true
        },
        {
          name: 'Healthcare Cybersecurity',
          description: 'Advanced security solutions specifically designed for healthcare environments',
          features: ['Threat Detection', 'Data Encryption', 'Access Control', 'Incident Response'],
          icon: Lock,
          color: 'from-orange-500 to-red-500',
          featured: true
        },
        {
          name: 'Data Governance Platform',
          description: 'Healthcare data governance and quality management system',
          features: ['Data Classification', 'Quality Monitoring', 'Lineage Tracking', 'Policy Management'],
          icon: Settings,
          color: 'from-yellow-500 to-orange-500',
          featured: false
        }
      ]
    },
    {
      category: 'Clinical Operations',
      items: [
        {
          name: 'Clinical Decision Support',
          description: 'AI-powered clinical decision support for healthcare providers',
          features: ['Evidence-Based Guidelines', 'Drug Interaction Alerts', 'Clinical Pathways', 'Outcome Prediction'],
          icon: Stethoscope,
          color: 'from-blue-500 to-indigo-500',
          featured: true
        },
        {
          name: 'Laboratory Information System',
          description: 'Comprehensive LIS for laboratory workflow management and result reporting',
          features: ['Sample Tracking', 'Result Management', 'Quality Control', 'Automated Reporting'],
          icon: Microscope,
          color: 'from-purple-500 to-pink-500',
          featured: false
        },
        {
          name: 'Pharmacy Management System',
          description: 'Integrated pharmacy management with medication safety features',
          features: ['Inventory Management', 'Prescription Processing', 'Drug Safety Alerts', 'Billing Integration'],
          icon: Pill,
          color: 'from-green-500 to-teal-500',
          featured: false
        }
      ]
    },
    {
      category: 'Research & Development',
      items: [
        {
          name: 'Clinical Research Platform',
          description: 'Comprehensive platform for clinical trials and research management',
          features: ['Trial Management', 'Patient Recruitment', 'Data Collection', 'Statistical Analysis'],
          icon: Rocket,
          color: 'from-purple-500 to-indigo-500',
          featured: true
        },
        {
          name: 'Medical Data Analytics',
          description: 'Advanced analytics for medical research and population health studies',
          features: ['Big Data Processing', 'Statistical Modeling', 'Visualization Tools', 'Research Collaboration'],
          icon: Database,
          color: 'from-cyan-500 to-blue-500',
          featured: false
        },
        {
          name: 'Drug Discovery AI',
          description: 'AI-powered drug discovery and development platform',
          features: ['Molecular Modeling', 'Target Identification', 'Drug Repurposing', 'Clinical Prediction'],
          icon: Atom,
          color: 'from-violet-500 to-purple-500',
          featured: false
        }
      ]
    }
  ];

  const specialties = [
    {
      name: 'Radiology',
      icon: Eye,
      description: 'AI-powered imaging analysis and diagnostic support',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cardiology',
      icon: Heart,
      description: 'Cardiovascular health monitoring and predictive analytics',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Oncology',
      icon: Microscope,
      description: 'Cancer diagnosis, treatment planning, and outcome prediction',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Neurology',
      icon: Brain,
      description: 'Neurological disorder diagnosis and treatment support',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Emergency Medicine',
      icon: AlertTriangle,
      description: 'Emergency care optimization and triage support',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Primary Care',
      icon: Stethoscope,
      description: 'Comprehensive primary care and preventive medicine',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const compliance = [
    {
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with privacy and security controls',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'FDA Approval',
      description: 'FDA-cleared medical devices and software solutions',
      icon: CheckCircle2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SOC 2 Type II',
      description: 'SOC 2 Type II certification for security and availability',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GDPR Compliance',
      description: 'International data protection and privacy compliance',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group"
        description="HIPAA-compliant healthcare technology solutions with AI-powered diagnostics, patient care management, and clinical decision support for modern healthcare organizations."
        keywords="healthcare technology, HIPAA compliance, medical AI, electronic health records, telehealth, clinical decision support, healthcare cybersecurity, medical imaging AI"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-red-500/10"></div>
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Healthcare
              <span className="bg-gradient-to-r from-red-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform healthcare delivery with AI-powered solutions that improve patient outcomes, 
              enhance clinical efficiency, and ensure full HIPAA compliance. From diagnostics to patient care, 
              we deliver innovative healthcare technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Get Healthcare Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-red-400/50 text-red-400 hover:bg-red-400/10 font-semibold rounded-xl transition-all duration-300"
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
          {solutions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-pink-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((solution, solutionIndex) => (
                  <motion.div
                    key={solution.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (solutionIndex * 0.1) }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                      solution.featured 
                        ? 'border-red-400/50 bg-gradient-to-br from-slate-800/80 to-slate-700/80 ring-2 ring-red-400/20' 
                        : 'border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50'
                    }`}
                  >
                    {solution.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.color} mb-4`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                        {solution.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {solution.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions are designed to support various medical specialties, 
              providing specialized tools and workflows for different areas of medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${specialty.color} mb-4`}>
                  <specialty.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {specialty.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions meet the highest standards of compliance and security, 
              ensuring patient data protection and regulatory adherence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-6`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading healthcare organizations that trust Zion Tech Group to deliver 
              innovative, compliant, and effective healthcare technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Start Your Healthcare Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-red-400/50 text-red-400 hover:bg-red-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Healthcare Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Healthcare Consultation
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our healthcare technology experts understand the unique challenges of the medical industry. 
                We're here to help you implement solutions that improve patient care while maintaining 
                the highest standards of security and compliance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    <Mail className="w-5 h-5 text-red-400" />
                  </div>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Healthcare Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg mt-0.5">
                    <Shield className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">HIPAA Compliant</h4>
                    <p className="text-sm text-gray-400">Full compliance with healthcare privacy regulations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg mt-0.5">
                    <Brain className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">AI-Powered</h4>
                    <p className="text-sm text-gray-400">Advanced AI for diagnostics and decision support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg mt-0.5">
                    <Users className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Patient-Centric</h4>
                    <p className="text-sm text-gray-400">Solutions designed around patient care and outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg mt-0.5">
                    <TrendingUp className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Outcome Focused</h4>
                    <p className="text-sm text-gray-400">Measurable improvements in patient outcomes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 rotate-45" />
      </button>
    </div>
  );
};

export default HealthcareSolutions;
