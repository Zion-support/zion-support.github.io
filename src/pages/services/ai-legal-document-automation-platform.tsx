import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Shield,
  Brain,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  Pause,
  RefreshCw,
  Maximize2,
  Minimize2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  Grid,
  List,
  Calendar,
  Clock3,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Camera,
  Mic,
  Headphones,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  WifiOff,
  BluetoothOff,
  BatteryCharging,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalOff,
  WifiHigh,
  WifiMedium,
  WifiLow,
  WifiOff2,
  BluetoothHigh,
  BluetoothMedium,
  BluetoothLow,
  BluetoothOff2,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryEmpty,
  BatteryCharging2,
  BatteryFull2,
  BatteryMedium2,
  BatteryLow2,
  BatteryEmpty2,
  BatteryCharging3,
  BatteryFull3,
  BatteryMedium3,
  BatteryLow3,
  BatteryEmpty3,
  BatteryCharging4,
  BatteryFull4,
  BatteryMedium4,
  BatteryLow4,
  BatteryEmpty4,
  BatteryCharging5,
  BatteryFull5,
  BatteryMedium5,
  BatteryLow5,
  BatteryEmpty5,
  BatteryCharging6,
  BatteryFull6,
  BatteryMedium6,
  BatteryLow6,
  BatteryEmpty6,
  BatteryCharging7,
  BatteryFull7,
  BatteryMedium7,
  BatteryLow7,
  BatteryEmpty7,
  BatteryCharging8,
  BatteryFull8,
  BatteryMedium8,
  BatteryLow8,
  BatteryEmpty8,
  BatteryCharging9,
  BatteryFull9,
  BatteryMedium9,
  BatteryLow9,
  BatteryEmpty9,
  BatteryCharging10,
  BatteryFull10,
  BatteryMedium10,
  BatteryLow10,
  BatteryEmpty10,
  Scale,
  Gavel,
  BookOpen,
  PenTool,
  Briefcase,
  Building,
  Globe,
  Target,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  HeatMap,
  Funnel,
  UserCheck,
  UserX,
  Eye,
  Heart,
  MessageCircle,
  Star
} from 'lucide-react';

const AILegalDocumentAutomationPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Document Analysis",
      description: "Advanced natural language processing to understand legal documents, extract key information, and identify potential issues."
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "Automated Document Generation",
      description: "Generate legal documents from templates with AI assistance, ensuring accuracy and compliance with current regulations."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Compliance Monitoring",
      description: "Real-time compliance checking against current laws and regulations with automatic updates and risk assessment."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Collaborative Workflow Management",
      description: "Streamlined collaboration between legal teams with version control, approval workflows, and audit trails."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive insights into document performance, contract analytics, and risk assessment metrics."
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, multi-factor authentication, and compliance with legal industry security standards."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small law firms and solo practitioners",
      features: [
        "Up to 100 documents/month",
        "Basic AI document analysis",
        "Standard legal templates (50+)",
        "Email support",
        "Basic compliance checking",
        "30-day document storage",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Up to 1,000 documents/month",
        "Advanced AI analysis & insights",
        "Premium legal templates (200+)",
        "Priority support",
        "Advanced compliance monitoring",
        "90-day document storage",
        "Custom workflow automation",
        "API access",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Custom AI model training",
        "White-label solutions",
        "24/7 dedicated support",
        "Full compliance suite",
        "Unlimited storage",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Document Review Time by 80%",
      description: "AI-powered analysis identifies key clauses, risks, and compliance issues in seconds instead of hours.",
      icon: <Clock className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Increase Accuracy by 95%",
      description: "Eliminate human errors in document generation and review with AI-powered validation and checking.",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />
    },
    {
      title: "Cut Legal Costs by 40%",
      description: "Automate routine legal work, reduce billable hours on document review, and improve efficiency.",
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: "Ensure 100% Compliance",
      description: "Stay up-to-date with changing regulations and automatically flag compliance issues in real-time.",
      icon: <Shield className="w-8 h-8 text-purple-400" />
    }
  ];

  const useCases = [
    {
      industry: "Law Firms",
      description: "Streamline contract review, automate document generation, and improve client service delivery.",
      metrics: ["Document processing time", "Client satisfaction", "Revenue per lawyer"]
    },
    {
      industry: "Corporate Legal",
      description: "Manage compliance across multiple jurisdictions, automate routine contracts, and reduce legal risks.",
      metrics: ["Compliance rate", "Contract cycle time", "Risk mitigation"]
    },
    {
      industry: "Real Estate",
      description: "Automate lease agreements, purchase contracts, and property management documents.",
      metrics: ["Document accuracy", "Processing speed", "Client turnaround time"]
    },
    {
      industry: "Healthcare",
      description: "Ensure HIPAA compliance, automate patient agreements, and manage regulatory documentation.",
      metrics: ["Compliance rate", "Document security", "Processing efficiency"]
    }
  ];

  const documentTypes = [
    "Contracts & Agreements",
    "Legal Briefs & Memos",
    "Compliance Documents",
    "Corporate Filings",
    "Real Estate Documents",
    "Employment Agreements",
    "Intellectual Property",
    "Regulatory Filings",
    "Litigation Documents",
    "Corporate Governance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Legal Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionize Legal Work with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Document Automation
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Transform your legal practice with intelligent document automation, AI-powered analysis, 
              and compliance monitoring that saves time and reduces risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zinc-500 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Legal Automation Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform streamlines legal document workflows, ensures compliance, 
              and dramatically improves efficiency across your legal practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Document Coverage
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform handles all types of legal documents with industry-specific templates 
              and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {documentTypes.map((docType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-white font-medium">{docType}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Join thousands of legal professionals who have revolutionized their practice 
              with AI-powered automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Tailored legal automation solutions for different industries with proven success metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Metrics:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-zinc-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that best fits your legal practice needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zinc-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-zinc-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400">{plan.period}</span>
                  </div>
                  <p className="text-zinc-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join thousands of legal professionals who trust our AI-powered platform to streamline 
              document workflows and improve client service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zinc-500 transition-all duration-300"
              >
                Schedule Demo
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AILegalDocumentAutomationPlatform;