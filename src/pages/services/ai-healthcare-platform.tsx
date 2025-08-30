import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageSquare,
  BarChart,
  Users2,
  Settings,
  Palette,
  Activity as VitalSigns,
  Monitor,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  FileText,
  Pill,
  Microscope,
  XRay,
  Bed,
  Ambulance,
  Hospital,
  UserCheck,
  Clipboard
} from 'lucide-react';

export default function AIHealthcarePlatform() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Patient Monitoring",
      description: "Real-time health monitoring with predictive analytics and early warning systems."
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Decision Support",
      description: "Intelligent assistance for healthcare providers in treatment planning and decision making."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security and privacy protection for sensitive health data."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient Engagement",
      description: "Personalized health recommendations and interactive patient communication tools."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Health Analytics",
      description: "Comprehensive health data analysis and population health insights."
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 40%",
    "Reduce healthcare costs by 30%",
    "Enhance patient outcomes by 50%",
    "Streamline clinical workflows",
    "Enable preventive healthcare",
    "Support remote patient monitoring"
  ];

  const healthcareSolutions = [
    {
      solution: "Diagnostic Imaging AI",
      description: "AI-powered analysis of X-rays, MRIs, and CT scans for accurate diagnosis"
    },
    {
      solution: "Predictive Analytics",
      description: "Early detection of health risks and disease progression prediction"
    },
    {
      solution: "Drug Discovery",
      description: "AI-accelerated pharmaceutical research and drug development"
    },
    {
      solution: "Personalized Medicine",
      description: "Tailored treatment plans based on individual genetic and health data"
    },
    {
      solution: "Telemedicine Platform",
      description: "Remote healthcare delivery with AI-powered triage and consultation"
    },
    {
      solution: "Health Records Management",
      description: "Intelligent electronic health records with automated data extraction"
    }
  ];

  const useCases = [
    {
      industry: "Hospitals & Clinics",
      description: "Clinical decision support, patient monitoring, and workflow optimization"
    },
    {
      industry: "Research Institutions",
      description: "Medical research, drug discovery, and clinical trial optimization"
    },
    {
      industry: "Pharmaceutical Companies",
      description: "Drug development, clinical research, and market analysis"
    },
    {
      industry: "Health Insurance",
      description: "Risk assessment, fraud detection, and claims processing automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Platform
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize healthcare delivery with AI-powered diagnostics, predictive analytics, 
              and intelligent clinical decision support for better patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare AI Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI Healthcare Platform provides cutting-edge technology to transform 
              healthcare delivery and improve patient care outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Solutions
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform offers comprehensive AI solutions designed specifically for 
              healthcare challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <XRay className="w-8 h-8 text-white" />}
                  {index === 1 && <TrendingUp className="w-8 h-8 text-white" />}
                  {index === 2 && <Pill className="w-8 h-8 text-white" />}
                  {index === 3 && <UserCheck className="w-8 h-8 text-white" />}
                  {index === 4 && <Smartphone className="w-8 h-8 text-white" />}
                  {index === 5 && <Clipboard className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{solution.solution}</h3>
                <p className="text-zion-slate-light text-sm text-center">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Platform?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience the future of healthcare with our intelligent AI platform designed 
              to improve patient care and clinical outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Industry Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-4">
                    <h4 className="font-semibold text-zion-cyan mb-2">{useCase.industry}</h4>
                    <p className="text-zion-slate-light text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations who have already embraced AI technology 
              to improve patient care and clinical outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}