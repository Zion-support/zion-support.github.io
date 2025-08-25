import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Scale, 
  FileText, 
  Search, 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Briefcase,
  Award,
  TrendingUp,
  Gavel,
  BookOpen
=======
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  Brain, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Search,
  UserCheck,
  Calendar,
  Award,
  Briefcase,
  Heart,
  Globe,
  Lock,
  Database,
  Scale,
  Gavel,
  BookOpen,
  Search as SearchIcon,
  AlertTriangle,
  CheckSquare,
  FileCheck,
  Clock as ClockIcon,
  DollarSign
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
<<<<<<< HEAD
      icon: FileText,
      title: "Intelligent Document Analysis",
      description: "AI-powered contract review and legal document analysis"
    },
    {
      icon: Search,
      title: "Advanced Legal Research",
      description: "Automated case law research and precedent analysis"
    },
    {
      icon: Brain,
      title: "Predictive Legal Analytics",
      description: "Machine learning models for case outcome prediction"
    },
    {
      icon: BarChart3,
      title: "Compliance Monitoring",
      description: "Real-time regulatory compliance tracking and alerts"
    },
    {
      icon: Zap,
      title: "Automated Contract Generation",
      description: "AI-driven contract drafting and customization"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Intelligent legal risk analysis and mitigation strategies"
=======
      icon: Brain,
      title: "AI-Powered Contract Analysis",
      description: "Intelligent contract review and analysis using advanced natural language processing."
    },
    {
      icon: SearchIcon,
      title: "Legal Research Automation",
      description: "Automated legal research with AI-powered case law and precedent analysis."
    },
    {
      icon: FileCheck,
      title: "Document Review & Due Diligence",
      description: "Efficient document review and due diligence processes with AI accuracy."
    },
    {
      icon: Zap,
      title: "Automated Legal Workflows",
      description: "Streamlined legal processes with intelligent automation and workflow optimization."
    },
    {
      icon: BarChart3,
      title: "Predictive Legal Analytics",
      description: "Data-driven insights to predict case outcomes and optimize legal strategies."
    },
    {
      icon: Clock,
      title: "Compliance Monitoring",
      description: "Real-time compliance monitoring and automated regulatory updates."
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "Reduce legal document review time by 80%",
    "Improve contract accuracy by 95%",
    "Lower legal costs by 40-60%",
    "Enhance compliance monitoring",
    "Faster legal research and analysis",
    "Better risk management and mitigation"
  ];

  const solutions = [
    {
      title: "Contract Management",
      description: "End-to-end contract lifecycle management with AI assistance"
    },
    {
      title: "Legal Research",
      description: "Automated case law research and precedent analysis"
    },
    {
      title: "Compliance Automation",
      description: "Regulatory compliance monitoring and reporting"
    },
    {
      title: "Risk Assessment",
      description: "AI-powered legal risk analysis and mitigation"
    }
  ];

  const practiceAreas = [
    "Corporate Law",
    "Contract Law",
    "Employment Law",
    "Intellectual Property",
    "Regulatory Compliance",
    "Litigation Support",
    "Mergers & Acquisitions",
    "Data Privacy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Legal Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your legal practice with cutting-edge AI technology. Streamline document review, 
              automate research, and enhance compliance with intelligent legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
=======
    "Reduce legal research time by 70%",
    "Improve contract review accuracy by 90%",
    "Cut legal costs by 40-60%",
    "Increase productivity by 300%",
    "Automate 80% of repetitive legal tasks",
    "Enhance risk assessment and compliance"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small law firms",
      features: [
        "Basic AI contract analysis",
        "Legal research automation",
        "Document review tools",
        "Basic compliance monitoring",
        "Up to 100 documents/month",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing practices",
      features: [
        "Advanced AI legal analysis",
        "Predictive analytics",
        "Automated workflows",
        "Advanced compliance tools",
        "Up to 500 documents/month",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large law firms",
      features: [
        "Full AI legal suite access",
        "Custom AI models",
        "Advanced reporting",
        "Dedicated account manager",
        "Unlimited documents",
        "24/7 phone support",
        "Custom development"
      ]
    }
  ];

  const useCases = [
    {
      title: "Contract Management",
      description: "AI-powered contract analysis, review, and management for legal teams.",
      icon: FileText
    },
    {
      title: "Legal Research",
      description: "Automated legal research with comprehensive case law analysis.",
      icon: BookOpen
    },
    {
      title: "Compliance & Risk",
      description: "Real-time compliance monitoring and risk assessment automation.",
      icon: Shield
    },
    {
      title: "Due Diligence",
      description: "Streamlined due diligence processes with AI-powered document review.",
      icon: SearchIcon
    }
  ];

  const legalProcesses = [
    {
      step: "01",
      title: "AI Document Analysis",
      description: "Intelligent document parsing and content analysis"
    },
    {
      step: "02",
      title: "Legal Research Automation",
      description: "AI-powered case law and precedent research"
    },
    {
      step: "03",
      title: "Contract Review & Analysis",
      description: "Automated contract review with risk assessment"
    },
    {
      step: "04",
      title: "Compliance Monitoring",
      description: "Real-time regulatory compliance tracking"
    },
    {
      step: "05",
      title: "Predictive Analytics",
      description: "Data-driven legal outcome predictions"
    },
    {
      step: "06",
      title: "Workflow Automation",
      description: "Streamlined legal process automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Legal Practice with
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {" "}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your legal practice with AI-powered tools that automate research, 
              analyze contracts, and streamline compliance. Work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Powered Legal Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI legal platform combines advanced machine learning with legal expertise 
              to revolutionize how legal professionals work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features for Modern Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology platform combines cutting-edge artificial intelligence 
              with proven legal expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI-Powered Legal Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From document analysis to compliance monitoring, our AI streamlines every aspect of your legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalProcesses.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{process.title}</h3>
                <p className="text-gray-300 text-center">{process.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI Legal Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in your legal practice with AI-powered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Legal Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented efficiency and accuracy in your legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Practice Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Practice Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI legal solutions are designed to support various practice areas and legal specialties.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <Gavel className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold">{area}</h3>
              </motion.div>
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Legal Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology platform adapts to your specific practice area and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/50 transform scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-gray-600 text-white hover:border-green-500 hover:text-green-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of legal technology and start seeing results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who have already revolutionized their practice with AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
        </div>
      </section>
    </div>
  );
}