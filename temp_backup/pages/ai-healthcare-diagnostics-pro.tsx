import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Activity,
  Stethoscope, Brain, Zap, Users2, Award, CheckCircle,
  AlertTriangle, Target, BarChart3, TrendingUp, Microscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Healthcare Diagnostics Pro | Zion Tech Group',
  description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical diagnosis and treatment recommendations.',
  keywords: 'AI healthcare, medical diagnostics, AI diagnosis, healthcare AI, medical AI, diagnostic platform',
  openGraph: {
    title: 'AI Healthcare Diagnostics Pro | Zion Tech Group',
    description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical diagnosis and treatment recommendations.',
    url: 'https://ziontechgroup.com/ai-healthcare-diagnostics-pro',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-ai-healthcare-diagnostics-pro.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Healthcare Diagnostics Pro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Healthcare Diagnostics Pro | Zion Tech Group',
    description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical diagnosis and treatment recommendations.',
    images: ['https://ziontechgroup.com/og-image-ai-healthcare-diagnostics-pro.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-healthcare-diagnostics-pro',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AIHealthcareDiagnosticsPro() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Stethoscope className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Diagnostics
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Diagnostics Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's most advanced AI healthcare diagnostics platform that provides accurate medical diagnosis, 
              treatment recommendations, and patient care optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Brain, Eye, Heart, 
  Microscope, Shield, BarChart3, 
  TrendingUp, Target, Users, CheckCircle, 
  ArrowRight, Cpu, Network, Database, 
  Lock, Clock, DollarSign, PieChart,
  Activity, Zap, Pill, Syringe, Hospital, Ambulance
} from 'lucide-react';
import Link from 'next/link';

const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Diagnostics",
      description: "Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Multi-Modal Imaging",
      description: "Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Predictive Analytics",
      description: "AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      icon: Microscope,
      title: "Radiology & Imaging",
      description: "AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.",
      benefits: ["95% accuracy rate", "80% faster diagnosis", "Reduced radiologist workload"]
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.",
      benefits: ["Early disease detection", "Risk stratification", "Preventive care"]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.",
      benefits: ["Early intervention", "Treatment planning", "Outcome prediction"]
    },
    {
      icon: Microscope,
      title: "Pathology",
      description: "Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.",
      benefits: ["Precision medicine", "Faster results", "Standardized analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small clinics and practices",
      features: [
        "Up to 1,000 diagnostic scans/month",
        "Basic AI diagnostic models",
        "Standard reporting dashboard",
        "Email support",
        "HIPAA compliance",
        "API access (5,000 calls/month)"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      price: "$12,999",
      period: "/month",
      description: "Ideal for hospitals and medical centers",
      features: [
        "Up to 10,000 diagnostic scans/month",
        "Advanced AI diagnostic models",
        "Multi-modal imaging support",
        "Real-time monitoring & alerts",
        "Priority support",
        "API access (50,000 calls/month)",
        "Custom integrations",
        "Training & certification"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large healthcare networks",
      features: [
        "Unlimited diagnostic scans",
        "Custom AI model development",
        "Full multi-modal support",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited API access",
        "White-label solutions",
        "On-premise deployment",
        "Custom compliance features"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const integrations = [
    {
      name: "PACS Systems",
      icon: Database,
      description: "DICOM integration with major PACS vendors",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "EHR Platforms",
      icon: Database,
      description: "Epic, Cerner, Allscripts, athenahealth",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "LIS Systems",
      icon: Microscope,
      description: "Lab information systems integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "RIS Systems",
      icon: BarChart3,
      description: "Radiology information systems",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Medical Devices",
      icon: Stethoscope,
      description: "CT, MRI, X-ray, ultrasound machines",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Cloud Platforms",
      icon: Cpu,
      description: "AWS, Azure, Google Cloud, IBM Cloud",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const specialties = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "Heart disease detection, ECG analysis, cardiovascular risk assessment",
      accuracy: "99.1%"
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Brain tumor detection, stroke diagnosis, neurological disorder analysis",
      accuracy: "98.9%"
    },
    {
      icon: Activity,
      name: "Pulmonology",
      description: "Lung cancer screening, pneumonia detection, respiratory disease analysis",
      accuracy: "99.3%"
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Retinal disease detection, glaucoma screening, diabetic retinopathy",
      accuracy: "98.7%"
    },
    {
      icon: Shield,
      name: "Hepatology",
      description: "Liver disease detection, cirrhosis assessment, tumor identification",
      accuracy: "99.0%"
    },
    {
      icon: Microscope,
      name: "Nephrology",
      description: "Kidney disease detection, renal function analysis, transplant assessment",
      accuracy: "98.8%"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy" />
        <meta property="og:title" content="AI Healthcare Diagnostics Pro - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Healthcare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Healthcare
              </span>
              <br />
              <span className="text-white">Diagnostics Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with the world's most advanced AI diagnostic platform. 
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Monitoring</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
>>>>>>> origin/auto/autonomy-17186719616
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary AI Healthcare Diagnostics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform handles every aspect of healthcare diagnostics from medical imaging to treatment planning, 
              continuously learning and improving diagnostic accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Intelligence</h3>
              <p className="text-gray-400">
                Advanced AI that analyzes medical data, images, and patient history for accurate diagnosis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Imaging</h3>
              <p className="text-gray-400">
                Advanced analysis of X-rays, MRIs, CT scans, and other medical imaging with high accuracy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of patient vital signs and health indicators for early intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Treatment Planning</h3>
              <p className="text-gray-400">
                Personalized treatment recommendations based on diagnosis and patient-specific factors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">
                Forecasts disease progression and identifies risk factors for preventive care.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clinical Decision Support</h3>
              <p className="text-gray-400">
                Evidence-based recommendations and clinical guidelines for healthcare providers.
              </p>
            </div>
=======
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with deep medical expertise to deliver unprecedented diagnostic accuracy and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Diagnostic Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Healthcare Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform provides comprehensive diagnostic tools across all medical specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Radiology & Imaging</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• X-ray analysis</li>
                <li>• MRI interpretation</li>
                <li>• CT scan analysis</li>
                <li>• Ultrasound imaging</li>
                <li>• Mammography screening</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Cardiology</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• ECG analysis</li>
                <li>• Heart rhythm monitoring</li>
                <li>• Cardiac imaging</li>
                <li>• Risk assessment</li>
                <li>• Treatment planning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Neurology</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Brain imaging analysis</li>
                <li>• Neurological assessment</li>
                <li>• Cognitive testing</li>
                <li>• Stroke detection</li>
                <li>• Treatment optimization</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Oncology</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Cancer detection</li>
                <li>• Tumor analysis</li>
                <li>• Treatment planning</li>
                <li>• Prognosis assessment</li>
                <li>• Clinical trials</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Primary Care</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Symptom analysis</li>
                <li>• Disease diagnosis</li>
                <li>• Preventive care</li>
                <li>• Chronic disease management</li>
                <li>• Health monitoring</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Laboratory Medicine</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Blood test analysis</li>
                <li>• Pathology review</li>
                <li>• Genetic testing</li>
                <li>• Biomarker analysis</li>
                <li>• Diagnostic algorithms</li>
              </ul>
            </div>
=======
      {/* Medical Specialties Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers all major medical specialties with specialized models trained on millions of cases for maximum accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{specialty.accuracy}</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{specialty.name}</h3>
                <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How AI Healthcare Diagnostics Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform operates in a continuous cycle of learning, analyzing, and improving diagnostic accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-400">
                AI collects and analyzes medical data, images, and patient information from multiple sources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-400">
                Advanced algorithms analyze medical data and images for patterns and abnormalities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnosis Generation</h3>
              <p className="text-gray-400">
                Generates accurate diagnoses and treatment recommendations based on analysis results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Learns from outcomes and feedback to continuously improve diagnostic accuracy.
              </p>
            </div>
=======
      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Practice</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your healthcare practice. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing healthcare systems and workflows. Our platform integrates with all major EHR, PACS, and medical device platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Revolutionize Healthcare Diagnostics with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of healthcare where AI provides accurate diagnosis while healthcare providers focus on patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to implement advanced AI healthcare diagnostics? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-gray-400 mb-6">
                See our AI Healthcare Diagnostics Pro Platform in action. Schedule a personalized demo today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare institutions worldwide who have already revolutionized patient care with AI-powered diagnostics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AIHealthcareDiagnosticsPro;
>>>>>>> origin/auto/autonomy-17186719616
