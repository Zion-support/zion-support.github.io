import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  Clock, 
  Users, 
  Globe, 
  Target,
  Rocket,
  Star,
  Award,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Database,
  Cpu,
  Network,
  Server,
  Stethoscope,
  Pill,
  Microscope,
  Syringe,
  Thermometer,
  Bandage,
  Eye,
  Ear,
  Tooth,
  Bone,
  Brain as BrainIcon,
  Heart as HeartIcon,
  Activity as ActivityIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  CheckCircle as CheckIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
  Smartphone as MobileIcon,
  Monitor as DesktopIcon,
  Database as DataIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Server as ServerIcon,
  Stethoscope as StethoscopeIcon,
  Pill as PillIcon,
  Microscope as MicroscopeIcon,
  Syringe as SyringeIcon,
  Thermometer as ThermometerIcon,
  Bandage as BandageIcon,
  Eye as EyeIcon,
  Ear as EarIcon,
  Tooth as ToothIcon,
  Bone as BoneIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIHealthcareAnalytics() {
  const healthcareFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Clinical Decision Support',
      description: 'Advanced machine learning algorithms provide real-time clinical insights and treatment recommendations',
      benefits: ['95% accuracy in diagnosis support', 'Real-time treatment recommendations', 'Reduced diagnostic errors by 40%']
    },
    {
      icon: Heart,
      title: 'Patient Care Optimization',
      description: 'AI-driven patient monitoring and care pathway optimization for improved outcomes',
      benefits: ['Personalized care plans', 'Predictive health monitoring', 'Reduced readmission rates by 30%']
    },
    {
      icon: Activity,
      title: 'Predictive Health Analytics',
      description: 'Early detection and prevention of health issues using predictive modeling',
      benefits: ['Early disease detection', 'Preventive care optimization', 'Population health insights']
    },
    {
      icon: Shield,
      title: 'Healthcare Security & Compliance',
      description: 'HIPAA-compliant platform with advanced security for patient data protection',
      benefits: ['HIPAA compliance', 'End-to-end encryption', 'Audit trail automation']
    },
    {
      icon: Zap,
      title: 'Real-Time Patient Monitoring',
      description: 'Continuous patient monitoring with AI-powered alert systems and intervention recommendations',
      benefits: ['24/7 patient monitoring', 'Intelligent alert systems', 'Automated intervention triggers']
    },
    {
      icon: Users,
      title: 'Healthcare Team Collaboration',
      description: 'Enhanced communication and coordination among healthcare professionals',
      benefits: ['Seamless team communication', 'Coordinated care delivery', 'Reduced communication errors']
    }
  ];

  const clinicalApplications = [
    {
      category: 'Diagnostic Support',
      description: 'AI-powered diagnostic assistance for various medical specialties',
      capabilities: ['Medical imaging analysis', 'Lab result interpretation', 'Symptom analysis', 'Differential diagnosis']
    },
    {
      category: 'Treatment Planning',
      description: 'Personalized treatment plans based on patient data and medical evidence',
      capabilities: ['Evidence-based recommendations', 'Drug interaction checking', 'Dosage optimization', 'Treatment monitoring']
    },
    {
      category: 'Patient Monitoring',
      description: 'Continuous monitoring of patient vital signs and health indicators',
      capabilities: ['Vital sign tracking', 'Trend analysis', 'Alert generation', 'Intervention recommendations']
    },
    {
      category: 'Population Health',
      description: 'Analytics for population health management and public health insights',
      capabilities: ['Disease outbreak detection', 'Health trend analysis', 'Preventive care planning', 'Resource allocation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Clinical',
      price: '$499',
      period: '/month',
      description: 'For small clinics and medical practices',
      features: [
        'Up to 50 patient records',
        'Basic AI diagnostic support',
        'Patient monitoring tools',
        'HIPAA compliance',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Hospital',
      price: '$1,299',
      period: '/month',
      description: 'For hospitals and healthcare systems',
      features: [
        'Up to 1,000 patient records',
        'Advanced AI clinical support',
        'Comprehensive patient monitoring',
        'Advanced analytics dashboard',
        'Custom care pathways',
        'Priority support',
        'API access',
        'Advanced integrations',
        'Clinical workflow automation',
        'Quality metrics tracking'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large healthcare networks',
      features: [
        'Unlimited patient records',
        'Full AI healthcare suite',
        'Custom clinical models',
        'Advanced population health',
        'White-label solutions',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Dedicated account manager',
        'Training and certification'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      specialty: 'Cardiology',
      description: 'Heart disease detection, monitoring, and treatment optimization',
      benefits: ['Early heart disease detection', 'Treatment effectiveness monitoring', 'Reduced cardiac events']
    },
    {
      specialty: 'Oncology',
      description: 'Cancer diagnosis, treatment planning, and outcome prediction',
      benefits: ['Improved diagnostic accuracy', 'Personalized treatment plans', 'Better outcome prediction']
    },
    {
      specialty: 'Emergency Medicine',
      description: 'Rapid triage, diagnosis, and treatment prioritization',
      benefits: ['Faster triage decisions', 'Improved diagnostic accuracy', 'Better resource allocation']
    },
    {
      specialty: 'Primary Care',
      description: 'Preventive care, chronic disease management, and wellness monitoring',
      benefits: ['Preventive care optimization', 'Chronic disease management', 'Population health insights']
    }
  ];

  const integrations = [
    { name: 'Epic EHR', icon: Database, description: 'Electronic health record integration' },
    { name: 'Cerner', icon: Monitor, description: 'Healthcare information system' },
    { name: 'Allscripts', icon: FileText, description: 'Clinical and practice management' },
    { name: 'GE Healthcare', icon: Activity, description: 'Medical imaging and monitoring' },
    { name: 'Philips', icon: Heart, description: 'Patient monitoring systems' },
    { name: 'Siemens Healthineers', icon: Microscope, description: 'Diagnostic and imaging systems' }
  ];

  const complianceFeatures = [
    { name: 'HIPAA Compliance', icon: Shield, description: 'Health Insurance Portability and Accountability Act' },
    { name: 'HITECH Act', icon: Lock, description: 'Health Information Technology for Economic and Clinical Health' },
    { name: 'FDA Compliance', icon: CheckCircle, description: 'Food and Drug Administration regulations' },
    { name: 'SOC 2 Type II', icon: Award, description: 'Security and availability compliance' },
    { name: 'ISO 27001', icon: Globe, description: 'Information security management' },
    { name: 'GDPR', icon: Users, description: 'General Data Protection Regulation' }
  ];

  const aiCapabilities = [
    {
      category: 'Medical Imaging AI',
      description: 'Advanced AI for radiology, pathology, and medical imaging analysis',
      applications: ['X-ray analysis', 'MRI interpretation', 'CT scan analysis', 'Pathology slides']
    },
    {
      category: 'Natural Language Processing',
      description: 'AI-powered analysis of medical records, notes, and clinical documentation',
      applications: ['Clinical note analysis', 'Medical record extraction', 'Symptom documentation', 'Treatment history']
    },
    {
      category: 'Predictive Analytics',
      description: 'Machine learning models for disease prediction and health outcome forecasting',
      applications: ['Disease risk prediction', 'Readmission risk', 'Treatment outcome prediction', 'Population health trends']
    },
    {
      category: 'Clinical Decision Support',
      description: 'AI-powered clinical recommendations and evidence-based medicine support',
      applications: ['Treatment recommendations', 'Drug interaction checking', 'Clinical guideline adherence', 'Best practice suggestions']
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Healthcare Analytics Platform - Zion Tech Group"
        description="Advanced AI healthcare analytics platform with clinical decision support, patient monitoring, and predictive health insights. Transform healthcare delivery with intelligent analytics."
        canonical="/services/ai-healthcare-analytics"
        url="https://ziontechgroup.com/services/ai-healthcare-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  AI-Powered Healthcare Analytics Platform
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
                  Transform healthcare delivery with AI-driven clinical insights, patient monitoring, and predictive analytics for improved patient outcomes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Pricing
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Healthcare Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced Healthcare Analytics Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform delivers unprecedented insights for healthcare professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthcareFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                AI-Powered Healthcare Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence for modern healthcare delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{capability.category}</h3>
                  <p className="text-slate-300 mb-4">{capability.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {capability.applications.map((application, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {application}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Clinical Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive AI solutions for various clinical specialties and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {clinicalApplications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{application.category}</h3>
                  <p className="text-slate-300 mb-4">{application.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {application.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Medical Specialty Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Specialized AI solutions for different medical specialties and clinical areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{useCase.specialty}</h3>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Healthcare Compliance & Security
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Meet healthcare industry standards with our comprehensive compliance features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.name}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Healthcare Analytics Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare organization's needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/80 p-8 rounded-xl border ${
                    plan.popular 
                      ? 'border-blue-500 ring-2 ring-blue-500/20' 
                      : 'border-slate-700'
                  } hover:border-blue-500 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Healthcare System Integrations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing healthcare IT infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{integration.name}</h4>
                  <p className="text-xs text-slate-400">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join leading healthcare organizations already using AI-powered analytics for improved patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}