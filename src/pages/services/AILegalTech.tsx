import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
import { 
  Scale, 
  FileText, 
  Search, 
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  Brain, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  UserCheck,
  Zap
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  FileText, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Scale,
  Gavel,
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Database,
  Network,
  Calendar,
  DollarSign,
  Target
} from 'lucide-react';

const AILegalTech: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Document Analysis",
      description: "Advanced natural language processing that analyzes legal documents, contracts, and case files with human-like understanding.",
      benefits: ["Contract review automation", "Risk assessment", "Compliance checking"]
    },
    {
      icon: Search,
      title: "Intelligent Legal Research",
      description: "AI-driven research tools that find relevant case law, statutes, and precedents in seconds, not hours.",
      benefits: ["Case law discovery", "Precedent analysis", "Research automation"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast case outcomes, settlement probabilities, and litigation risks.",
      benefits: ["Case outcome prediction", "Risk assessment", "Strategic planning"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined legal processes that automate routine tasks and ensure consistency across all legal operations.",
      benefits: ["Document generation", "Process automation", "Quality control"]
    }
  ];

  const services = [
    {
      title: "Contract Management",
      description: "AI-powered contract analysis, review, and management for improved efficiency and risk mitigation.",
      icon: FileText,
      features: ["Contract review", "Risk assessment", "Compliance checking", "Automated generation"]
    },
    {
      title: "Legal Research",
      description: "Intelligent research tools that accelerate case preparation and improve legal strategy development.",
      icon: Search,
      features: ["Case law research", "Precedent analysis", "Statute interpretation", "Research automation"]
    },
    {
      title: "Litigation Support",
      description: "Comprehensive support for litigation processes with AI-powered analytics and document management.",
      icon: Gavel,
      features: ["Document review", "Evidence analysis", "Case strategy", "Outcome prediction"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting to ensure regulatory adherence across all legal operations.",
      icon: Shield,
      features: ["Regulatory monitoring", "Compliance reporting", "Risk assessment", "Audit support"]
>>>>>>> origin/main
=======
  Shield, 
  Zap, 
  Brain, 
  Users, 
  BarChart3,
  Globe,
  Rocket,
  Star,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  Building,
  DollarSign,
  Heart,
  Home
} from 'lucide-react';

export default function AILegalTech() {
  const services = [
    {
      title: 'AI-Powered Contract Analysis',
      description: 'Intelligent contract review and analysis using natural language processing and machine learning algorithms.',
      icon: FileText,
      features: [
        'Automated contract review',
        'Risk identification and assessment',
        'Clause analysis and comparison',
        'Compliance checking',
        'Contract summarization',
        'Version control and tracking'
      ],
      price: 'Starting at $4,999/month'
    },
    {
      title: 'Legal Research Automation',
      description: 'AI-driven legal research platform that accelerates case law analysis and precedent discovery.',
      icon: Search,
      features: [
        'Case law research automation',
        'Precedent identification',
        'Legal document search',
        'Citation analysis',
        'Research summarization',
        'Multi-jurisdiction support'
      ],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Automated compliance monitoring and risk assessment for regulatory requirements across industries.',
      icon: Shield,
      features: [
        'Regulatory compliance monitoring',
        'Risk assessment automation',
        'Policy management',
        'Audit trail generation',
        'Compliance reporting',
        'Real-time alerts'
      ],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'Document Generation & Management',
      description: 'Intelligent legal document creation and management with automated templates and workflows.',
      icon: Zap,
      features: [
        'Automated document generation',
        'Template management',
        'Workflow automation',
        'Document collaboration',
        'Version control',
        'Electronic signatures'
      ],
      price: 'Starting at $2,499/month'
    }
  ];

  const legalTechFeatures = [
    {
      title: 'Contract Intelligence',
      description: 'AI-powered contract analysis and risk assessment',
      icon: FileText,
      benefits: ['Risk identification', 'Compliance checking', 'Clause analysis', 'Automated review']
    },
    {
      title: 'Legal Research AI',
      description: 'Intelligent legal research and precedent discovery',
      icon: Search,
      benefits: ['Case law analysis', 'Precedent identification', 'Research automation', 'Citation tracking']
    },
    {
      title: 'Compliance Automation',
      description: 'Automated regulatory compliance and risk management',
      icon: Shield,
      benefits: ['Regulatory monitoring', 'Risk assessment', 'Policy management', 'Audit trails']
    },
    {
      title: 'Document Automation',
      description: 'Intelligent document generation and management',
      icon: Zap,
      benefits: ['Template automation', 'Workflow management', 'Collaboration tools', 'Version control']
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
      icon: Scale,
      title: "Contract Analysis",
      description: "AI-powered contract review that identifies risks, obligations, and opportunities in legal documents."
    },
    {
      icon: FileText,
      title: "Document Generation",
      description: "Automated creation of legal documents, contracts, and agreements with customizable templates."
    },
    {
      icon: Search,
      title: "Legal Research",
      description: "Intelligent search through case law, statutes, and legal precedents with relevance scoring."
    },
    {
      icon: Brain,
      title: "Risk Assessment",
      description: "Machine learning models that predict legal risks and compliance issues before they arise."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated tracking of regulatory changes and compliance requirements across jurisdictions."
    },
    {
      icon: Clock,
      title: "E-Discovery",
      description: "AI-powered document review and analysis for litigation and regulatory investigations."
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    {
      title: 'Time Savings',
      description: 'Reduce legal research and document review time by up to 80%',
      icon: Clock
    },
    {
      title: 'Cost Reduction',
      description: 'Lower legal costs through automation and efficiency gains',
      icon: TrendingUp
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate legal risks with AI-powered analysis',
      icon: Shield
    },
    {
      title: 'Improved Accuracy',
      description: 'Enhance accuracy and consistency in legal work',
      icon: CheckCircle
    }
  ];

  const industries = [
    {
      title: 'Corporate Law',
      description: 'Contract management, compliance, and corporate governance',
      icon: Building
    },
    {
      title: 'Financial Services',
      description: 'Regulatory compliance, risk management, and contract analysis',
      icon: DollarSign
    },
    {
      title: 'Healthcare',
      description: 'HIPAA compliance, medical contracts, and regulatory adherence',
      icon: Heart
    },
    {
      title: 'Real Estate',
      description: 'Property contracts, lease agreements, and compliance',
      icon: Home
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
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
=======
    {
      title: "Reduce Review Time",
      value: "80%",
      description: "Faster document analysis and contract review processes"
    },
    {
      title: "Improve Accuracy",
      value: "95%",
      description: "Higher accuracy in legal research and document analysis"
    },
    {
      title: "Lower Costs",
      value: "60%",
      description: "Reduced legal research and document review costs"
    },
    {
      title: "Increase Efficiency",
      value: "3x",
      description: "Faster case preparation and legal strategy development"
    }
=======
    "Reduce legal document review time by 60-80% with AI analysis",
    "Cut legal research costs by 40-60% through automation",
    "Improve contract accuracy by 85-95% with AI validation",
    "Accelerate case preparation by 50-70% with smart insights",
    "Enhance compliance monitoring with 24/7 automated tracking",
    "Achieve 99%+ accuracy in legal document processing"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: "Law Firms",
      description: "Streamline operations, improve client service, and increase profitability with AI-powered legal tools.",
      icon: Users,
      features: ["Case management", "Client communication", "Billing optimization", "Resource allocation"]
    },
    {
      title: "Corporate Legal",
      description: "Manage corporate legal operations efficiently with automated compliance and contract management.",
      icon: Building,
      features: ["Contract lifecycle", "Compliance monitoring", "Risk management", "Policy enforcement"]
    },
    {
      title: "Government Agencies",
      description: "Improve public service delivery with efficient legal research and document processing capabilities.",
      icon: Shield,
      features: ["Policy research", "Regulatory analysis", "Public records", "Compliance reporting"]
    },
    {
      title: "Legal Tech Startups",
      description: "Leverage AI capabilities to build innovative legal technology solutions and services.",
      icon: Rocket,
      features: ["Product development", "API integration", "Custom solutions", "Scalability"]
=======
      industry: "Corporate Law",
      description: "Contract review, M&A due diligence, and corporate governance compliance",
      metrics: ["Contract Review Speed", "Risk Detection Rate", "Compliance Score"]
    },
    {
      industry: "Litigation",
      description: "E-discovery, case research, and evidence analysis",
      metrics: ["Document Review Speed", "Evidence Discovery Rate", "Case Success Rate"]
    },
    {
      industry: "Real Estate",
      description: "Lease agreement analysis, title review, and regulatory compliance",
      metrics: ["Agreement Review Speed", "Risk Assessment", "Compliance Rate"]
    },
    {
      industry: "Healthcare",
      description: "Regulatory compliance, patient consent, and medical malpractice defense",
      metrics: ["Compliance Rate", "Risk Assessment", "Document Accuracy"]
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
    }
  ];

  const pricing = [
    {
<<<<<<< HEAD
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Perfect for individual lawyers and small law firms",
      features: [
        "AI document analysis (up to 100 documents/month)",
        "Basic legal research tools",
        "Contract review automation",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Firm",
      price: "$999",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Unlimited document analysis",
        "Advanced legal research",
        "Predictive analytics",
        "Workflow automation",
>>>>>>> origin/main
=======
      name: "Starter",
      price: "$3,000",
      period: "/month",
      description: "Perfect for small law firms starting with AI legal tech",
      features: [
        "Up to 100 documents/month",
        "Basic contract analysis",
        "Document generation",
        "Legal research tools",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$8,000",
      period: "/month",
      description: "Ideal for growing law firms with advanced legal tech needs",
      features: [
        "Up to 500 documents/month",
        "Advanced AI analysis",
        "Risk assessment",
        "Compliance monitoring",
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
      price: "$1,999",
      period: "/month",
<<<<<<< HEAD
      description: "For large law firms",
      features: [
        "Full AI legal suite access",
        "Custom AI models",
        "Advanced reporting",
        "Dedicated account manager",
        "Unlimited documents",
        "24/7 phone support",
        "Custom development"
=======
      price: "Custom",
      period: "",
      description: "Tailored solutions for large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced security",
        "API access"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
      ]
    }
  ];

<<<<<<< HEAD
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
=======
      description: "Comprehensive solution for large legal organizations",
      features: [
        "Custom AI models",
        "Full platform integration",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom training & onboarding",
        "24/7 phone support"
      ],
      popular: false
>>>>>>> origin/main
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
<<<<<<< HEAD
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
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Legal Practice with
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your legal practice with AI-powered tools that automate research, analyze documents, 
              and provide intelligent insights. Work smarter, not harder, with cutting-edge legal technology.
>>>>>>> origin/main
=======
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Legal Tech Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your legal practice with AI-powered contract analysis, legal research automation, 
              and intelligent compliance management. Work smarter, not harder.
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-400">Faster Review Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-400">Improved Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-400">Efficiency Boost</div>
            </div>
          </div>
>>>>>>> origin/main
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
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
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features That Revolutionize Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology platform combines cutting-edge artificial intelligence with deep legal expertise 
              to deliver exceptional results for legal professionals.
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Legal Tech Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that transform legal practice through intelligent automation
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-green-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Legal Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From contract management to litigation support, our AI platform covers every aspect of modern legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Every Legal Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology solutions are tailored to meet the unique needs of different types of legal organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-green-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
>>>>>>> origin/main
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
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
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of AI-powered legal technology on your practice's efficiency and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your legal practice.
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your legal practice's needs and growth.
>>>>>>> origin/main
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
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
=======
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> origin/main
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
<<<<<<< HEAD
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
=======
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
>>>>>>> origin/main
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
<<<<<<< HEAD
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
=======
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
>>>>>>> origin/main
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking legal professionals who have already revolutionized their practice with AI. 
            Start working smarter today with intelligent legal technology.
>>>>>>> origin/main
=======
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Tech Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Legal Tech Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities that streamline legal operations and enhance productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalTechFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI legal tech solutions are designed for various industries and practice areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AI Legal Tech?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of legal practice with intelligent automation and AI-powered insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who have revolutionized their practice with AI-powered solutions.
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Scale className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Legal Tech
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your legal practice with intelligent AI that analyzes documents, 
            conducts research, and provides insights to enhance efficiency and accuracy.
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
=======
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
>>>>>>> origin/main
            >
              Schedule Demo
            </Link>
          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
>>>>>>> origin/main
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default AILegalTech;
>>>>>>> origin/main
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing Plans
            </Link>
=======
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Legal Technology Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Proven Legal Practice Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Practice Area Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-2xl p-6 ${
                plan.popular ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' : 'border-zion-cyan/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of law firms already using our AI-powered legal technology platform 
              to enhance efficiency, accuracy, and client service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/request-quote"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
