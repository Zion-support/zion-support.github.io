import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Zap, 
  Brain, 
  Users,
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
  Gavel,
  Scale,
  Clipboard,
  Monitor,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  Search,
  Filter,
  Bell,
  BookOpen,
  GraduationCap
} from 'lucide-react';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Compliance Monitoring",
      description: "Continuous monitoring of regulatory requirements and automated compliance status tracking."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk Assessment & Alerts",
      description: "AI-powered risk identification and proactive alerting for compliance violations."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated Documentation",
      description: "Intelligent document generation and management for compliance requirements."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory Updates",
      description: "Stay current with changing regulations through automated monitoring and updates."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Auditing",
      description: "Comprehensive audit trails and reporting for regulatory compliance verification."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Policy Management",
      description: "Centralized policy creation, distribution, and enforcement across your organization."
    }
  ];

  const benefits = [
    "Reduce compliance violations by 80%",
    "Automate 70% of compliance tasks",
    "Ensure 24/7 regulatory monitoring",
    "Streamline audit preparation",
    "Minimize compliance risks",
    "Improve regulatory reporting accuracy"
  ];

  const complianceAreas = [
    {
      area: "GDPR & Data Privacy",
      description: "Automated data protection compliance and privacy regulation monitoring"
    },
    {
      area: "SOX & Financial Compliance",
      description: "Financial reporting compliance and internal control monitoring"
    },
    {
      area: "HIPAA & Healthcare",
      description: "Healthcare data protection and patient privacy compliance"
    },
    {
      area: "ISO Standards",
      description: "Quality management and information security compliance"
    },
    {
      area: "Industry Regulations",
      description: "Sector-specific compliance requirements and monitoring"
    },
    {
      area: "Environmental Compliance",
      description: "Sustainability and environmental regulation compliance"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "SOX, Basel III, and financial regulatory compliance automation"
    },
    {
      industry: "Healthcare",
      description: "HIPAA, FDA, and healthcare compliance monitoring"
    },
    {
      industry: "Manufacturing",
      description: "ISO, OSHA, and manufacturing safety compliance"
    },
    {
      industry: "Technology",
      description: "GDPR, SOC2, and cybersecurity compliance management"
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
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered Compliance</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Compliance Assistant
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your compliance operations with intelligent automation, real-time monitoring, 
              and AI-powered risk assessment to ensure regulatory adherence across all business areas.
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
              Comprehensive Compliance Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI Compliance Assistant provides everything you need to master regulatory compliance 
              and minimize compliance risks across your organization.
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

      {/* Compliance Areas Section */}
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
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform covers all major compliance areas to ensure your organization meets 
              regulatory requirements across industries and jurisdictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{area.area}</h3>
                <p className="text-zion-slate-light text-sm text-center">{area.description}</p>
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
              Why Choose AI Compliance Assistant?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience unprecedented control over your compliance operations with our intelligent 
              automation platform and expert compliance practices.
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
              Ready to Transform Your Compliance Operations?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of organizations who have already revolutionized their compliance 
              processes and achieved unprecedented regulatory adherence.
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