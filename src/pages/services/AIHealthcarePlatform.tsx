import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Target, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Globe, 
  Shield,
  BarChart3,
  Rocket,
  Sparkles,
  Database,
  Zap,
  Activity,
  Monitor,
  AlertTriangle,
  TrendingUp,
  Award,
  ArrowRight,
  Pill,
  Microscope,
  TestTube,
  FileText,
  Lock,
  Eye,
  Cpu,
  Network
} from 'lucide-react';

const AIHealthcarePlatform = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI Diagnosis",
      description: "Advanced AI algorithms that analyze symptoms, medical history, and test results for accurate diagnosis"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Predictive Health",
      description: "Predict potential health issues before they become serious using machine learning and data analysis"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-400" />,
      title: "Virtual Consultations",
      description: "AI-powered virtual consultations with healthcare professionals for remote patient care"
    },
    {
      icon: <Microscope className="w-8 h-8 text-purple-400" />,
      title: "Medical Imaging",
      description: "AI-enhanced medical imaging analysis for faster and more accurate diagnosis"
    },
    {
      icon: <Pill className="w-8 h-8 text-orange-400" />,
      title: "Drug Discovery",
      description: "AI-powered drug discovery and development for faster pharmaceutical breakthroughs"
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: "Health Records",
      description: "Secure, AI-managed electronic health records with intelligent data analysis"
    }
  ];

  const benefits = [
    {
      metric: "95%",
      description: "Diagnosis accuracy with AI assistance"
    },
    {
      metric: "60%",
      description: "Faster diagnosis and treatment"
    },
    {
      metric: "24/7",
      description: "Continuous health monitoring"
    },
    {
      metric: "Global",
      description: "Healthcare access worldwide"
    }
  ];

  const healthcareModules = [
    {
      title: "Primary Care",
      description: "AI-powered primary care consultations, symptom analysis, and treatment recommendations",
      icon: <Stethoscope className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Specialty Care",
      description: "Specialized AI modules for cardiology, neurology, oncology, and other medical specialties",
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      title: "Preventive Care",
      description: "Predictive health analytics, risk assessment, and preventive care recommendations",
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      title: "Emergency Care",
      description: "AI-powered emergency triage, critical care monitoring, and rapid response systems",
      icon: <AlertTriangle className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Mental Health",
      description: "AI-driven mental health assessment, therapy support, and wellness monitoring",
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Research & Development",
      description: "AI-powered medical research, clinical trial optimization, and breakthrough discovery",
      icon: <Microscope className="w-6 h-6 text-cyan-400" />
    }
  ];

  const complianceFeatures = [
    {
      name: "HIPAA Compliance",
      status: "100%",
      icon: <Shield className="w-5 h-5 text-green-400" />
    },
    {
      name: "GDPR Compliance",
      status: "100%",
      icon: <Lock className="w-5 h-5 text-blue-400" />
    },
    {
      name: "FDA Approval",
      status: "Pending",
      icon: <CheckCircle className="w-5 h-5 text-yellow-400" />
    },
    {
      name: "ISO 27001",
      status: "100%",
      icon: <Award className="w-5 h-5 text-purple-400" />
    },
    {
      name: "SOC 2 Type II",
      status: "100%",
      icon: <Eye className="w-5 h-5 text-cyan-400" />
    },
    {
      name: "HITECH Act",
      status: "100%",
      icon: <FileText className="w-5 h-5 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full border border-blue-500/30">
                <Heart className="h-12 w-12 text-blue-400" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-500 bg-clip-text text-transparent"
            >
              AI Healthcare Platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Revolutionize healthcare delivery with our comprehensive AI-powered platform. 
              From diagnosis to treatment, our intelligent system enhances patient care, 
              improves outcomes, and accelerates medical breakthroughs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 text-lg">
                Get Started Today
              </Link>
              <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is AI Healthcare Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is AI Healthcare Platform?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI Healthcare Platform represents the future of medical care, combining 
                artificial intelligence with advanced healthcare technologies to create a 
                comprehensive system that enhances every aspect of patient care.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From initial diagnosis to ongoing treatment monitoring, our platform leverages 
                machine learning, natural language processing, and predictive analytics to 
                provide healthcare professionals with unprecedented insights and capabilities.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Patient-Centric</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">AI Diagnosis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Predictive Health</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Virtual Consultations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Microscope className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Medical Imaging</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Healthcare Modules
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {module.icon}
                  <h3 className="text-xl font-semibold text-blue-400">{module.title}</h3>
                </div>
                <p className="text-gray-300">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Compliance & Security
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="font-semibold">{feature.name}</span>
                  </div>
                  <span className={`text-2xl font-bold ${
                    feature.status === '100%' ? 'text-green-400' : 
                    feature.status === 'Pending' ? 'text-yellow-400' : 'text-blue-400'
                  }`}>
                    {feature.status}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      feature.status === '100%' ? 'bg-green-400' : 
                      feature.status === 'Pending' ? 'bg-yellow-400' : 'bg-blue-400'
                    }`}
                    style={{ width: feature.status === 'Pending' ? '75%' : '100%' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Choose AI Healthcare Platform?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {benefit.metric}
                  </span>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$399</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic AI Diagnosis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Health Monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Email Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic Reports</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 text-center block">
                Get Started
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-green-600/20 p-8 rounded-xl border border-blue-500/50 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced AI Diagnosis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full Healthcare Suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom Integrations</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 text-center block">
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$2,499</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Complete Healthcare Suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom AI Models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">White-label Solutions</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 text-center block">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-green-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Healthcare?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join the healthcare revolution with Zion Tech Group's AI Healthcare Platform. 
            Enhance patient care, improve outcomes, and accelerate medical breakthroughs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 text-lg">
              Start Your Healthcare Journey
            </Link>
            <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcarePlatform;