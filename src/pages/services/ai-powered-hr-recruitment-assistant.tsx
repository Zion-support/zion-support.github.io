import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Brain,
  Zap,
  Shield,
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
  Star,
  FileText,
  Briefcase,
  Building,
  Globe,
  UserPlus,
  UserMinus,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCheck3,
  UserX3,
  UserPlus3,
  UserMinus3,
  UserCheck4,
  UserX4,
  UserPlus4,
  UserMinus4,
  UserCheck5,
  UserX5,
  UserPlus5,
  UserMinus5,
  UserCheck6,
  UserX6,
  UserPlus6,
  UserMinus6,
  UserCheck7,
  UserX7,
  UserPlus7,
  UserMinus7,
  UserCheck8,
  UserX8,
  UserPlus8,
  UserMinus8,
  UserCheck9,
  UserX9,
  UserPlus9,
  UserMinus9,
  UserCheck10,
  UserX10,
  UserPlus10,
  UserMinus10
} from 'lucide-react';

const AIPoweredHRRecruitmentAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Candidate Screening",
      description: "Advanced machine learning algorithms that analyze resumes, assess skills, and rank candidates based on job requirements."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Intelligent Talent Matching",
      description: "Smart algorithms that match candidates to job openings based on skills, experience, culture fit, and career goals."
    },
    {
      icon: <Search className="w-6 h-6 text-green-400" />,
      title: "Automated Sourcing & Outreach",
      description: "AI-driven candidate sourcing from multiple platforms with personalized outreach campaigns and follow-up automation."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Predictive Analytics",
      description: "Data-driven insights into hiring trends, candidate success prediction, and recruitment performance optimization."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      title: "Bias-Free Hiring",
      description: "AI algorithms designed to eliminate unconscious bias and ensure fair, inclusive hiring practices."
    },
    {
      icon: <Zap className="w-6 h-6 text-red-400" />,
      title: "Workflow Automation",
      description: "Streamlined recruitment processes with automated scheduling, interview coordination, and candidate communication."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 active job postings",
        "Basic AI candidate screening",
        "Standard job board integrations",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access",
        "Up to 5 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies and HR teams",
      features: [
        "Up to 200 active job postings",
        "Advanced AI screening & matching",
        "Premium job board integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom workflow automation",
        "API access",
        "Up to 25 team members",
        "Advanced candidate scoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations with complex hiring needs",
      features: [
        "Unlimited job postings",
        "Custom AI model training",
        "White-label solutions",
        "24/7 dedicated support",
        "Full analytics suite",
        "Custom integrations",
        "Advanced security features",
        "Unlimited team members",
        "Dedicated account manager",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Time-to-Hire by 60%",
      description: "AI-powered screening and matching dramatically speeds up the recruitment process from weeks to days.",
      icon: <Clock className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Improve Quality of Hire by 45%",
      description: "Data-driven candidate assessment and predictive analytics ensure better cultural and skill fit.",
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "Cut Recruitment Costs by 35%",
      description: "Automate routine tasks, reduce agency fees, and optimize advertising spend with targeted campaigns.",
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: "Increase Candidate Engagement by 80%",
      description: "Personalized communication and automated follow-ups keep candidates engaged throughout the process.",
      icon: <Users className="w-8 h-8 text-purple-400" />
    }
  ];

  const useCases = [
    {
      industry: "Technology",
      description: "Fast-paced hiring for technical roles with skill assessment and culture fit evaluation.",
      metrics: ["Time-to-fill", "Technical skill match", "Cultural fit score"]
    },
    {
      industry: "Healthcare",
      description: "Compliance-focused recruitment with credential verification and specialized skill matching.",
      metrics: ["Credential verification", "Compliance rate", "Specialty match"]
    },
    {
      industry: "Finance",
      description: "Risk-aware hiring with background checks and regulatory compliance monitoring.",
      metrics: ["Background check completion", "Compliance rate", "Risk assessment"]
    },
    {
      industry: "Manufacturing",
      description: "High-volume hiring with skill-based matching and safety certification tracking.",
      metrics: ["Volume processing", "Skill match rate", "Safety compliance"]
    }
  ];

  const recruitmentStages = [
    "Job Posting Creation",
    "Candidate Sourcing",
    "Resume Screening",
    "Skill Assessment",
    "Interview Scheduling",
    "Reference Checking",
    "Offer Management",
    "Onboarding Coordination"
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
              AI-Powered HR Recruitment
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Hiring with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Recruitment Assistant
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Revolutionize your recruitment process with intelligent candidate screening, 
              automated sourcing, and data-driven hiring decisions that save time and improve quality.
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
              Intelligent Recruitment Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform streamlines every aspect of the recruitment process, 
              from candidate sourcing to final hiring decisions.
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

      {/* Recruitment Stages Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              End-to-End Recruitment Process
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform covers every stage of the recruitment lifecycle with AI-powered automation 
              and intelligent insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recruitmentStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-cyan-400 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm text-white font-medium">{stage}</p>
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
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Join thousands of companies that have transformed their recruitment process 
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
              Tailored recruitment solutions for different industries with proven success metrics.
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
              Choose the plan that best fits your recruitment needs and scale as you grow.
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
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join thousands of companies that trust our AI-powered platform to streamline 
              hiring processes and find the best talent faster.
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

export default AIPoweredHRRecruitmentAssistant;