import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
import { motion } from 'framer-motion';
=======
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
=======
import { SEO } from '../../components/SEO';
=======
import { Link } from 'react-router-dom';
import { 
  Scale, 
  FileText, 
  Search, 
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
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
=======
  Brain, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  TrendingUp,
  Lock,
  Gavel
} from 'lucide-react';

const AILegalTech = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Document Review",
      description: "Advanced AI algorithms that automatically analyze legal documents, contracts, and case files for key information and risks."
    },
    {
      icon: Search,
      title: "Intelligent Legal Research",
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
=======
      description: "AI-driven legal research tools that quickly find relevant case law, statutes, and precedents across multiple jurisdictions."
    },
    {
      icon: FileText,
      title: "Contract Analysis & Generation",
      description: "Automated contract review, risk assessment, and intelligent contract generation with customizable templates."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Real-time compliance tracking and automated alerts for regulatory changes and compliance requirements."
    },
    {
      icon: Zap,
      title: "Legal Process Automation",
      description: "Streamline repetitive legal tasks, document workflows, and case management processes with AI automation."
    },
    {
      icon: Lock,
      title: "Secure Document Management",
      description: "Enterprise-grade security with encryption, access controls, and audit trails for sensitive legal documents."
    }
  ];

  const useCases = [
    {
      title: "Contract Management",
      description: "Automate contract lifecycle management from creation to renewal with AI-powered risk assessment.",
      icon: FileText
    },
    {
      title: "Due Diligence",
      description: "Accelerate due diligence processes with AI-powered document analysis and risk identification.",
      icon: Search
    },
    {
      title: "Legal Research",
      description: "Reduce research time with AI tools that quickly find relevant legal precedents and case law.",
      icon: Brain
    },
    {
      title: "Compliance & Risk",
      description: "Monitor regulatory changes and identify compliance risks with automated AI systems.",
      icon: Shield
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    }
  ];

  const benefits = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
=======
  Brain, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Globe,
  BookOpen,
  CheckCircle,
  BarChart3,
  Zap,
  Target,
  Building,
  Home,
  Lightbulb
} from 'lucide-react';

export default function AILegalTech() {
  const features = [
    {
      title: "AI Contract Analysis",
      description: "Intelligent contract review and analysis using advanced NLP and legal AI",
      icon: FileText,
      benefits: ["90% faster review", "Risk identification", "Compliance checking", "Automated summaries"]
    },
    {
      title: "Legal Research Automation",
      description: "AI-powered legal research that finds relevant cases, statutes, and precedents",
      icon: Search,
      benefits: ["Instant case law search", "Precedent analysis", "Citation tracking", "Research summaries"]
    },
    {
      title: "Document Generation",
      description: "Automated legal document creation with customizable templates and AI assistance",
      icon: BookOpen,
      benefits: ["Template library", "Custom clauses", "Legal compliance", "Version control"]
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time regulatory compliance monitoring and automated reporting",
      icon: Shield,
      benefits: ["Regulatory updates", "Compliance alerts", "Automated reporting", "Risk assessment"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered case outcome prediction and litigation risk assessment",
      icon: Brain,
      benefits: ["Case outcome prediction", "Risk scoring", "Settlement recommendations", "Cost forecasting"]
    },
    {
      title: "Client Portal & Communication",
      description: "Secure client communication and document sharing platform",
      icon: Users,
      benefits: ["Secure messaging", "Document sharing", "Progress tracking", "Client collaboration"]
    }
  ];

  const practiceAreas = [
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
=======
    "Reduce legal document review time by 70-90%",
    "Improve contract accuracy and risk identification",
    "Accelerate due diligence processes",
    "Reduce legal research costs by 50-80%",
    "Enhance compliance monitoring and reporting",
    "Improve client service and response times"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
  ];

  const useCases = [
    {
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
    }
  ];

  const pricing = [
    {
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
        "Priority support",
        "Custom integrations"
      ],
=======
    {
      name: "Corporate Law",
      description: "AI-powered contract management and corporate compliance",
      icon: Building,
      tools: ["Contract analysis", "M&A due diligence", "Corporate governance", "Regulatory compliance"]
    },
    {
      name: "Litigation",
      description: "AI-assisted case preparation and outcome prediction",
      icon: Scale,
      tools: ["Case research", "Evidence analysis", "Outcome prediction", "Cost forecasting"]
    },
    {
      name: "Real Estate",
      description: "Automated real estate transaction management and compliance",
      icon: Home,
      tools: ["Title research", "Contract review", "Compliance checking", "Transaction management"]
    },
    {
      name: "Intellectual Property",
      description: "AI-powered IP research and patent analysis",
      icon: Lightbulb,
      tools: ["Patent search", "Trademark analysis", "IP monitoring", "Infringement detection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Solo Practitioner",
      price: "$199/month",
      description: "Perfect for individual lawyers and small practices",
      features: [
        "Up to 100 documents/month",
        "Basic contract analysis",
        "Legal research tools",
        "Email support",
        "Standard templates",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Law Firm",
      price: "$599/month",
      description: "Ideal for growing law firms with multiple attorneys",
      features: [
        "Up to 1,000 documents/month",
        "Advanced AI analysis",
        "Team collaboration",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "API access",
        "Integration support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
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
      ]
    }
  ];

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
=======
      price: "$1,599/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Full AI suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced reporting",
        "On-premise option",
        "SLA guarantees",
        "Compliance consulting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "90%",
      description: "Faster document review",
      detail: "AI-powered analysis and automation"
    },
    {
      metric: "75%",
      description: "Reduction in research time",
      detail: "Intelligent legal research tools"
    },
    {
      metric: "60%",
      description: "Lower operational costs",
      detail: "Automated workflows and processes"
    },
    {
      metric: "95%",
      description: "Compliance accuracy",
      detail: "AI-powered compliance monitoring"
    }
  ];

  const useCases = [
    {
      scenario: "Contract Review",
      description: "Automated contract analysis with risk identification and compliance checking",
      benefits: ["Faster review process", "Risk mitigation", "Compliance assurance", "Cost savings"]
    },
    {
      scenario: "Legal Research",
      description: "AI-powered case law research with precedent analysis and citation tracking",
      benefits: ["Instant results", "Comprehensive coverage", "Precedent analysis", "Time savings"]
    },
    {
      scenario: "Compliance Monitoring",
      description: "Real-time regulatory updates and automated compliance reporting",
      benefits: ["Proactive compliance", "Risk reduction", "Automated reporting", "Regulatory awareness"]
    },
    {
      scenario: "Document Generation",
      description: "Automated legal document creation with customizable templates",
      benefits: ["Consistent quality", "Time savings", "Template library", "Customization options"]
    }
  ];

  return (
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
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
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900">
      <SEO 
        title="AI Legal Tech Platform - Zion Tech Group" 
        description="Revolutionize your legal practice with AI-powered tools. Faster research, automated analysis, and intelligent compliance monitoring."
        keywords="AI legal tech, legal automation, contract analysis, legal research, compliance monitoring, legal software"
        canonical="https://ziontechgroup.com/services/ai-legal-tech"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-600/20 to-blue-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded-full text-indigo-400 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Legal Tech
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Legal Practice with Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your legal practice with AI-powered tools that automate research, 
            analyze contracts, and ensure compliance. Work smarter, not harder, with 
            intelligent legal technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>
              <div className="text-gray-400 text-sm">Faster Review</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
              <div className="text-gray-400 text-sm">Research Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm">Compliance Accuracy</div>
            </div>
          </div>
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                AI Legal Tech
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform legal practice with AI-powered tools that streamline processes and enhance decision-making
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features for Modern Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology platform combines cutting-edge artificial intelligence 
              with proven legal expertise to deliver exceptional results.
=======
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Legal Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform covers every aspect of legal practice, 
              from research to compliance monitoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Legal Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes legal practice with intelligent automation and advanced analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            ))}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Technology Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming legal practice across different practice areas and firm sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Legal Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI legal technology platform adapts to your specific practice area and requirements.
=======
      {/* Practice Areas Section */}
      <section className="py-20 bg-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Practice Area Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI tools designed for different legal practice areas and specialties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI legal tech platform solves real challenges in legal practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
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
=======
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.scenario}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Legal Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice from manual processes to intelligent, automated systems that scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your legal practice's needs and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
=======
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your legal practice needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/25' 
                  : 'border-gray-700/50 hover:border-indigo-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
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
=======
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who have already revolutionized their practice with AI technology.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
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
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
=======
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of legal professionals who have already revolutionized their practice 
            with AI-powered legal technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-indigo-400 hover:text-indigo-300 underline">Contact our sales team</a>
            </p>
          </div>
=======
            Join forward-thinking law firms using AI to deliver better client service and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Services</h3>
            <p className="text-gray-300">Discover our complete range of AI and technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services/ai-business-intelligence" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">AI Business Intelligence</h4>
                    <p className="text-gray-300 text-sm">Transform data into actionable insights</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-marketing-automation" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">AI Marketing Automation</h4>
                    <p className="text-gray-300 text-sm">Automate marketing with AI intelligence</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-hr-recruitment" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">AI HR & Recruitment</h4>
                    <p className="text-gray-300 text-sm">Revolutionize talent acquisition and management</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
};

export default AILegalTech;
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
          </div>
        </div>
      </div>
    </div>
  );
}
=======
}
=======
};

export default AILegalTech;
<<<<<<< HEAD
=======
}
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
