import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
  Users, 
  Search, 
  Target, 
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
  TrendingUp
=======
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Brain, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Filter,
  Search,
  UserCheck,
  FileText,
  Calendar,
  Award,
  Briefcase,
  Heart,
  Globe,
  Lock,
  Database,
  Code,
  GraduationCap
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
} from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Brain, Users, Target, BarChart3, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, UserCheck } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e

export default function AIHRRecruitment() {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Search,
      title: "Intelligent Candidate Sourcing",
      description: "AI-powered talent discovery across multiple platforms and databases"
    },
    {
      icon: Brain,
      title: "Smart Resume Parsing",
      description: "Advanced AI algorithms to extract and analyze candidate information"
    },
    {
      icon: Target,
      title: "Predictive Candidate Matching",
      description: "Machine learning models to find the perfect fit for your roles"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights into hiring metrics and process optimization"
=======
import { Link } from 'react-router-dom';
import { 
  Users, 
  Brain, 
  Target, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  TrendingUp,
  UserCheck,
  UserPlus,
  UserX,
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  Graph
} from 'lucide-react';

const AIHRRecruitment: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms that analyze skills, experience, and cultural fit to find the perfect candidates for your organization.",
      benefits: ["Skill-based matching", "Cultural fit analysis", "Predictive success modeling"]
    },
    {
      icon: Target,
      title: "Intelligent Sourcing",
      description: "Automated talent discovery across multiple platforms and databases to identify passive candidates and expand your talent pool.",
      benefits: ["Multi-platform sourcing", "Passive candidate discovery", "Talent pipeline building"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights that forecast hiring success, employee retention, and workforce planning needs.",
      benefits: ["Hiring success prediction", "Retention forecasting", "Workforce planning"]
>>>>>>> origin/main
    },
    {
      icon: Zap,
      title: "Automated Screening",
<<<<<<< HEAD
      description: "Intelligent pre-screening to save time and improve quality"
    },
    {
      icon: Shield,
      title: "Bias-Free Hiring",
      description: "AI algorithms designed to eliminate unconscious bias in recruitment"
=======
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms that analyze skills, experience, and cultural fit to find the perfect candidates."
    },
    {
      icon: Target,
      title: "Intelligent Job Posting Optimization",
      description: "AI-driven job descriptions that attract the right candidates and improve application quality."
    },
    {
      icon: BarChart3,
      title: "Predictive Hiring Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions."
    },
    {
      icon: Zap,
      title: "Automated Screening & Assessment",
      description: "Intelligent screening processes that save time and identify top talent efficiently."
    },
    {
      icon: Users,
      title: "Cultural Fit Analysis",
      description: "AI-powered assessment of candidate alignment with company values and culture."
    },
    {
      icon: Clock,
      title: "Streamlined Onboarding",
      description: "Automated onboarding workflows that ensure smooth transitions for new hires."
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
      description: "Intelligent resume parsing and initial screening that saves time and ensures consistent evaluation criteria.",
      benefits: ["Resume parsing", "Automated screening", "Bias reduction"]
    }
  ];

  const services = [
    {
      title: "Talent Acquisition",
      description: "End-to-end recruitment process automation from job posting to candidate onboarding.",
      icon: UserPlus,
      features: ["Job posting optimization", "Candidate sourcing", "Interview scheduling", "Offer management"]
    },
    {
      title: "Employee Retention",
      description: "AI-driven insights to improve employee satisfaction and reduce turnover rates.",
      icon: Heart,
      features: ["Satisfaction monitoring", "Retention prediction", "Engagement strategies", "Exit interview analysis"]
    },
    {
      title: "Performance Management",
      description: "Continuous performance tracking and development planning powered by AI analytics.",
      icon: TrendingUp,
      features: ["Goal tracking", "Performance analytics", "Development planning", "Feedback systems"]
    },
    {
      title: "Workforce Planning",
      description: "Strategic workforce planning using predictive analytics and market intelligence.",
      icon: Graph,
      features: ["Demand forecasting", "Skill gap analysis", "Succession planning", "Market intelligence"]
>>>>>>> origin/main
=======
  BarChart3, 
  MessageSquare, 
  Calendar, 
  Zap,
  Brain,
  Globe,
  Rocket,
  Star,
  Briefcase,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function AIHRRecruitment() {
  const services = [
    {
      title: 'AI-Powered Talent Acquisition',
      description: 'Intelligent recruitment platform that automates candidate sourcing, screening, and matching using advanced AI algorithms.',
      icon: Search,
      features: [
        'Automated candidate sourcing',
        'AI-powered resume screening',
        'Skills-based matching',
        'Predictive candidate success',
        'Diversity and inclusion tracking',
        'Compliance monitoring'
      ],
      price: 'Starting at $3,999/month'
    },
    {
      title: 'Intelligent Candidate Assessment',
      description: 'Advanced assessment tools that evaluate candidates using AI-driven behavioral analysis and skill testing.',
      icon: Target,
      features: [
        'Behavioral assessment',
        'Skills testing automation',
        'Cultural fit analysis',
        'Cognitive ability testing',
        'Video interview analysis',
        'Predictive performance modeling'
      ],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'HR Process Automation',
      description: 'Streamlined HR operations with AI-powered automation for onboarding, performance management, and employee engagement.',
      icon: Zap,
      features: [
        'Automated onboarding workflows',
        'Performance review automation',
        'Employee engagement tracking',
        'Leave management automation',
        'Compliance documentation',
        'HR analytics dashboard'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Employee Development & Training',
      description: 'AI-driven learning platforms that personalize training programs and track employee development progress.',
      icon: TrendingUp,
      features: [
        'Personalized learning paths',
        'Skills gap analysis',
        'Training recommendation engine',
        'Progress tracking',
        'Certification management',
        'Learning analytics'
      ],
      price: 'Starting at $2,999/month'
    }
  ];

  const recruitmentFeatures = [
    {
      title: 'Smart Sourcing',
      description: 'AI-powered candidate discovery across multiple platforms and databases',
      icon: Search,
      benefits: ['Passive candidate identification', 'Skills-based matching', 'Market intelligence', 'Competitive analysis']
    },
    {
      title: 'Automated Screening',
      description: 'Intelligent filtering and ranking of candidates based on job requirements',
      icon: Target,
      benefits: ['Resume parsing', 'Keyword matching', 'Experience validation', 'Cultural fit assessment']
    },
    {
      title: 'Interview Automation',
      description: 'AI-driven interview scheduling, conducting, and evaluation',
      icon: MessageSquare,
      benefits: ['Automated scheduling', 'Video interview analysis', 'Response evaluation', 'Candidate scoring']
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights for hiring decisions and candidate success prediction',
      icon: BarChart3,
      benefits: ['Success probability scoring', 'Retention prediction', 'Performance forecasting', 'Hiring ROI analysis']
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
      icon: Brain,
      title: 'AI-Powered Candidate Matching',
      description: 'Advanced algorithms that match candidates to job requirements with 95% accuracy.'
    },
    {
      icon: Users,
      title: 'Intelligent Talent Pool',
      description: 'Build and maintain a dynamic talent pool with AI-driven candidate engagement.'
    },
    {
      icon: Target,
      title: 'Predictive Hiring Analytics',
      description: 'Forecast hiring needs and identify the best candidates for future positions.'
    },
    {
      icon: BarChart3,
      title: 'Performance Prediction',
      description: 'AI models that predict candidate success and cultural fit within your organization.'
    },
    {
      icon: Zap,
      title: 'Automated Screening',
      description: 'Automate initial candidate screening and assessment processes.'
    },
    {
      icon: Shield,
      title: 'Bias-Free Hiring',
      description: 'Ensure fair and unbiased hiring decisions with AI-powered diversity analytics.'
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
  Brain, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  TrendingUp,
  UserCheck
=======
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Search, 
  Brain, 
  Target, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  FileText,
  Video,
  MessageSquare,
  CheckCircle,
  BarChart3,
  Award
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
} from 'lucide-react';

export default function AIHRRecruitment() {
  const features = [
    {
<<<<<<< HEAD
      icon: Users,
      title: "Smart Candidate Sourcing",
      description: "AI-powered talent discovery that identifies and attracts top candidates across multiple platforms."
    },
    {
      icon: Search,
      title: "Intelligent Resume Parsing",
      description: "Advanced NLP algorithms that extract key information and match candidates to job requirements."
    },
    {
      icon: Target,
      title: "Predictive Candidate Scoring",
      description: "Machine learning models that predict candidate success and cultural fit based on multiple data points."
    },
    {
      icon: Brain,
      title: "Automated Interview Scheduling",
      description: "Smart scheduling system that coordinates interviews across multiple stakeholders and time zones."
    },
    {
      icon: Zap,
      title: "Bias-Free Screening",
      description: "AI algorithms designed to eliminate unconscious bias and ensure fair candidate evaluation."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with GDPR compliance and data protection measures."
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "Reduce time-to-hire by 60-80%",
    "Improve candidate quality by 40%",
    "Reduce recruitment costs by 30-50%",
    "Enhance diversity and inclusion",
    "Streamlined interview scheduling",
    "Better candidate experience"
  ];

  const solutions = [
    {
      title: "Talent Acquisition",
      description: "End-to-end recruitment automation from sourcing to onboarding"
    },
    {
      title: "Candidate Assessment",
      description: "AI-powered skills testing and personality evaluation"
    },
    {
      title: "Interview Management",
      description: "Automated scheduling and structured interview processes"
    },
    {
      title: "Employee Retention",
      description: "Predictive analytics for employee satisfaction and retention"
=======
      title: "AI-Powered Candidate Screening",
      description: "Intelligent resume parsing and candidate matching using advanced NLP and ML algorithms",
      icon: Search,
      benefits: ["90% faster screening", "Bias-free evaluation", "Skills-based matching", "Cultural fit analysis"]
    },
    {
      title: "Predictive Hiring Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions",
      icon: Brain,
      benefits: ["Success probability scoring", "Retention prediction", "Performance forecasting", "Risk assessment"]
    },
    {
      title: "Automated Interview Scheduling",
      description: "Smart scheduling system that coordinates interviews across multiple stakeholders",
      icon: Clock,
      benefits: ["Automated coordination", "Calendar integration", "Reminder system", "Rescheduling handling"]
    },
    {
      title: "Video Interview Analysis",
      description: "AI-powered video interview assessment with facial expression and sentiment analysis",
      icon: Video,
      benefits: ["Emotional intelligence scoring", "Communication skills assessment", "Cultural fit evaluation", "Bias detection"]
    },
    {
      title: "Talent Pipeline Management",
      description: "Intelligent candidate relationship management with automated follow-ups and engagement",
      icon: Users,
      benefits: ["Automated nurturing", "Engagement scoring", "Pipeline analytics", "Talent rediscovery"]
    },
    {
      title: "Compliance & Diversity Monitoring",
      description: "Ensure fair hiring practices and regulatory compliance with AI-powered monitoring",
      icon: Shield,
      benefits: ["Bias detection", "Compliance reporting", "Diversity analytics", "Audit trails"]
    }
  ];

  const recruitmentStages = [
    {
      stage: "Sourcing & Attraction",
      description: "AI-powered job posting optimization and candidate attraction",
      tools: ["Smart job descriptions", "Targeted advertising", "Passive candidate outreach", "Employer branding"]
    },
    {
      stage: "Screening & Assessment",
      description: "Automated candidate evaluation and skills assessment",
      tools: ["Resume parsing", "Skills testing", "Cultural fit assessment", "Background verification"]
    },
    {
      stage: "Interview & Selection",
      description: "Intelligent interview process with AI-powered insights",
      tools: ["Video interviews", "Structured questions", "Performance scoring", "Decision support"]
    },
    {
      stage: "Onboarding & Retention",
      description: "Automated onboarding and employee retention monitoring",
      tools: ["Onboarding automation", "Performance tracking", "Engagement monitoring", "Retention analytics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses with basic hiring needs",
      features: [
        "Up to 25 job postings/month",
        "Basic candidate screening",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing companies with advanced recruitment needs",
      features: [
        "Up to 100 job postings/month",
        "Advanced AI screening",
        "Video interviews",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API access",
        "Integration support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations requiring enterprise-grade HR solutions",
      features: [
        "Unlimited job postings",
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
      metric: "60%",
      description: "Faster time-to-hire",
      detail: "AI-powered screening and matching"
    },
    {
      metric: "45%",
      description: "Reduction in hiring costs",
      detail: "Automated processes and better matching"
    },
    {
      metric: "3.2x",
      description: "Better candidate quality",
      detail: "AI-powered assessment and prediction"
    },
    {
      metric: "85%",
      description: "Improved retention rates",
      detail: "Better cultural fit and performance prediction"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
    }
  ];

  const industries = [
<<<<<<< HEAD
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Non-profit"
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
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI HR & Recruitment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your hiring process with intelligent AI-powered recruitment solutions. 
              Find the best talent faster, reduce bias, and optimize your HR operations.
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
    "Reduce time-to-hire by 60%",
    "Improve candidate quality by 40%",
    "Cut recruitment costs by 50%",
    "Increase retention rates by 35%",
    "Automate 80% of repetitive tasks",
    "Enhance diversity and inclusion"
  ];

  const pricingPlans = [
=======
    {
      title: "Reduce Time-to-Hire",
      value: "60%",
      description: "Faster candidate identification and screening processes"
    },
    {
      title: "Improve Quality of Hire",
      value: "45%",
      description: "Better candidate matching and cultural fit assessment"
    },
    {
      title: "Lower Recruitment Costs",
      value: "35%",
      description: "Reduced manual processes and improved efficiency"
    },
    {
      title: "Increase Retention",
      value: "40%",
      description: "Better candidate selection and cultural alignment"
    }
  ];

  const pricing = [
>>>>>>> origin/main
    {
      name: "Starter",
      price: "$399",
      period: "/month",
<<<<<<< HEAD
      description: "Perfect for small businesses",
      features: [
        "Basic AI candidate matching",
        "Job posting optimization",
        "Automated screening",
        "Basic analytics dashboard",
        "Up to 50 job postings/month",
        "Email support"
      ]
=======
      description: "Perfect for small businesses with basic HR needs",
      features: [
        "AI candidate matching (up to 50 positions/month)",
        "Basic resume parsing",
        "Interview scheduling",
        "Standard reporting",
        "Email support"
      ],
      popular: false
>>>>>>> origin/main
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
<<<<<<< HEAD
      description: "Ideal for growing companies",
      features: [
        "Advanced AI matching algorithms",
        "Predictive analytics",
        "Cultural fit assessment",
        "Automated onboarding",
        "Up to 200 job postings/month",
        "Priority support",
        "Custom integrations"
=======
      description: "Ideal for growing companies with comprehensive HR requirements",
      features: [
        "Unlimited AI candidate matching",
        "Advanced resume parsing",
        "Multi-channel sourcing",
        "Predictive analytics",
        "Performance management",
        "Priority support"
>>>>>>> origin/main
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,599",
      period: "/month",
<<<<<<< HEAD
      description: "For large organizations",
      features: [
        "Full AI suite access",
        "Custom AI models",
        "Advanced reporting",
        "Dedicated account manager",
        "Unlimited job postings",
        "24/7 phone support",
        "Custom development"
      ]
=======
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Brain, 
  BarChart3, 
  Search, 
  MessageSquare,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Cpu,
  Eye,
  Lock,
  PieChart,
  LineChart,
  Building,
  GraduationCap
=======
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Briefcase, 
  Target, 
  Brain, 
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  FileText,
  Clock,
  Award
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
} from 'lucide-react';

const AIHRRecruitment = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: "AI-Powered Candidate Screening",
      description: "Intelligent algorithms that automatically screen and rank candidates based on job requirements",
      benefits: ["Resume parsing", "Skill matching", "Cultural fit analysis", "Automated shortlisting"]
=======
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms that automatically match candidates to job requirements based on skills, experience, and cultural fit."
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
    },
    {
      icon: Search,
      title: "Intelligent Talent Sourcing",
<<<<<<< HEAD
      description: "AI-driven candidate discovery from multiple sources and passive candidate engagement",
      benefits: ["Multi-platform sourcing", "Passive candidate identification", "Talent pool building", "Market intelligence"]
    },
    {
      icon: Users,
      title: "Predictive Hiring Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions",
      benefits: ["Success prediction", "Retention forecasting", "Performance modeling", "Hiring optimization"]
    },
    {
      icon: MessageSquare,
      title: "Automated Communication",
      description: "Intelligent chatbots and automated messaging for candidate engagement and scheduling",
      benefits: ["24/7 candidate support", "Automated scheduling", "Personalized messaging", "Multi-language support"]
    },
    {
      icon: BarChart3,
      title: "Workforce Analytics",
      description: "Comprehensive analytics for employee performance, engagement, and retention",
      benefits: ["Performance tracking", "Engagement monitoring", "Retention analysis", "Succession planning"]
    },
    {
      icon: Shield,
      title: "Compliance & Diversity",
      description: "Built-in compliance features and bias detection for fair and inclusive hiring",
      benefits: ["EEO compliance", "Bias detection", "Diversity tracking", "Audit trails"]
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
    }
=======
    'Reduce time-to-hire by 60-80% with AI automation',
    'Improve candidate quality by 40-60%',
    'Reduce hiring costs by 30-50%',
    'Increase diversity in hiring by 35-45%',
    'Improve employee retention by 25-40%',
    'Automate 70% of repetitive HR tasks'
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
    "Reduce time-to-hire by 40-60% with automated screening",
    "Improve candidate quality by 30-50% with AI matching",
    "Cut recruitment costs by 25-40% through automation",
    "Increase diversity by 35-45% with bias-free screening",
    "Enhance candidate experience with 24/7 engagement",
    "Achieve 90%+ candidate satisfaction scores"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
=======
      description: "Automated candidate discovery across multiple platforms with AI-driven outreach and engagement strategies."
    },
    {
      icon: MessageSquare,
      title: "Smart Interview Automation",
      description: "AI-powered interview scheduling, question generation, and candidate assessment tools."
    },
    {
      icon: FileText,
      title: "Resume Parsing & Analysis",
      description: "Automated resume screening with intelligent extraction of skills, experience, and qualifications."
    },
    {
      icon: Shield,
      title: "Bias-Free Hiring",
      description: "AI algorithms designed to eliminate unconscious bias and ensure fair, objective candidate evaluation."
    },
    {
      icon: Zap,
      title: "Predictive Performance Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions."
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
  ];

  const useCases = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: "High-Volume Hiring",
      description: "Efficiently manage large-scale recruitment campaigns with AI-powered automation.",
      icon: Users
    },
    {
      title: "Technical Recruitment",
      description: "Advanced skill assessment and technical evaluation for specialized roles.",
      icon: Code
    },
    {
      title: "Executive Search",
      description: "AI-enhanced executive recruitment with cultural fit and leadership assessment.",
      icon: Award
    },
    {
      title: "Campus Recruitment",
      description: "Streamlined campus hiring with automated screening and assessment tools.",
      icon: GraduationCap
    }
  ];

  const recruitmentProcess = [
    {
      step: "01",
      title: "AI Job Analysis",
      description: "Intelligent job requirement analysis and optimization"
    },
    {
      step: "02",
      title: "Smart Sourcing",
      description: "AI-powered candidate sourcing and passive candidate identification"
    },
    {
      step: "03",
      title: "Intelligent Screening",
      description: "Automated resume parsing and initial candidate assessment"
    },
    {
      step: "04",
      title: "Advanced Assessment",
      description: "AI-driven skills testing and cultural fit evaluation"
    },
    {
      step: "05",
      title: "Predictive Matching",
      description: "Data-driven candidate ranking and success prediction"
    },
    {
      step: "06",
      title: "Streamlined Onboarding",
      description: "Automated onboarding workflows and integration"
=======
      description: "Complete HR solution for large organizations",
      features: [
        "Custom AI models",
        "Full HR suite integration",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom training & onboarding",
        "24/7 phone support"
      ],
      popular: false
>>>>>>> origin/main
=======
    {
      name: "Technology",
      description: "AI-powered technical assessment and skills matching",
      icon: Brain,
      benefits: ["Technical skills testing", "Code review automation", "Project portfolio analysis"]
    },
    {
      name: "Healthcare",
      description: "Compliance-focused hiring with credential verification",
      icon: Shield,
      benefits: ["License verification", "Compliance monitoring", "Clinical skills assessment"]
    },
    {
      name: "Finance",
      description: "Risk assessment and regulatory compliance monitoring",
      icon: BarChart3,
      benefits: ["Background screening", "Compliance checks", "Risk assessment"]
    },
    {
      name: "Manufacturing",
      description: "Skills-based hiring with safety compliance focus",
      icon: Award,
      benefits: ["Safety training verification", "Skills assessment", "Performance tracking"]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered HR & Recruitment
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionize Your
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                {" "}Hiring Process
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your recruitment with AI that finds the perfect candidates, optimizes hiring decisions, 
              and streamlines your entire HR process. Save time, reduce costs, and hire better talent.
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered HR & Recruitment
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionize Your
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> HR & Recruitment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your human resources and recruitment processes with AI-powered automation. 
              Find the best talent faster, reduce costs, and build stronger teams with intelligent insights.
>>>>>>> origin/main
=======
    {
      title: 'Faster Hiring',
      description: 'Reduce time-to-hire by up to 60% with AI-powered automation',
      icon: Zap
    },
    {
      title: 'Better Quality Hires',
      description: 'Improve candidate quality and retention with predictive analytics',
      icon: Star
    },
    {
      title: 'Cost Reduction',
      description: 'Lower recruitment costs through automation and efficiency gains',
      icon: TrendingUp
    },
    {
      title: 'Improved Diversity',
      description: 'Enhance diversity and inclusion with unbiased AI algorithms',
      icon: Users
=======
      industry: "Technology",
      title: "Technical Talent Acquisition",
      description: "AI-powered screening for technical roles with skill assessment and cultural fit analysis",
      metrics: ["60% faster hiring", "40% better quality hires", "30% cost reduction"]
    },
    {
      industry: "Healthcare",
      title: "Clinical Staff Recruitment",
      description: "Intelligent matching of healthcare professionals with specific clinical requirements",
      metrics: ["50% faster placement", "35% retention improvement", "45% compliance accuracy"]
    },
    {
      industry: "Finance",
      title: "Compliance-Focused Hiring",
      description: "Regulatory compliance verification and background screening automation",
      metrics: ["90% compliance accuracy", "70% faster screening", "Zero compliance violations"]
    },
    {
      industry: "Manufacturing",
      title: "Skills-Based Matching",
      description: "AI-driven matching of technical skills with manufacturing requirements",
      metrics: ["55% better skill matching", "40% training reduction", "25% productivity increase"]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for candidate assessment and prediction",
      icon: Brain
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered text analysis for resume parsing and communication",
      icon: Eye
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven forecasting for hiring success and retention",
      icon: LineChart
    },
    {
      name: "Automation Engine",
      description: "Intelligent workflow automation for recruitment processes",
      icon: Zap
    },
    {
      name: "Talent Analytics",
      description: "Comprehensive workforce analytics and insights",
      icon: BarChart3
    },
    {
      name: "Compliance Engine",
      description: "Built-in compliance and bias detection features",
      icon: Shield
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small businesses starting with AI recruitment",
      features: [
        "Up to 50 active job postings",
        "Basic AI screening",
        "Resume parsing",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Advanced AI recruitment for growing businesses",
      features: [
        "Up to 200 active job postings",
        "Advanced AI screening",
        "Multi-platform sourcing",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Automated communication"
=======
      industry: "Technology",
      description: "Technical skill assessment, coding challenges, and culture fit evaluation",
      metrics: ["Time-to-Hire", "Quality of Hire", "Retention Rate"]
    },
    {
      industry: "Healthcare",
      description: "Clinical competency verification, license validation, and patient safety assessment",
      metrics: ["Credential Verification", "Clinical Skills", "Patient Outcomes"]
    },
    {
      industry: "Finance",
      description: "Regulatory compliance, background checks, and risk assessment",
      metrics: ["Compliance Rate", "Background Check Speed", "Risk Score"]
    },
    {
      industry: "Manufacturing",
      description: "Safety training verification, skill assessment, and operational readiness",
      metrics: ["Safety Score", "Skill Proficiency", "Training Completion"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,000",
      period: "/month",
      description: "Perfect for small companies starting with AI recruitment",
      features: [
        "Up to 50 job postings",
        "Basic AI screening",
        "Resume parsing",
        "Interview scheduling",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$6,000",
      period: "/month",
      description: "Ideal for growing companies with advanced recruitment needs",
      features: [
        "Up to 200 job postings",
        "Advanced AI matching",
        "Predictive analytics",
        "Multi-channel sourcing",
        "Priority support",
        "Custom integrations"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
<<<<<<< HEAD
      description: "Full-scale AI recruitment for large organizations",
      features: [
        "Unlimited job postings",
        "Full AI capabilities",
        "Custom AI models",
        "Advanced reporting",
        "24/7 dedicated support",
        "White-label solutions",
        "On-premise options",
        "Custom development"
      ],
      popular: false
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
=======
      title: 'Recruitment',
      description: 'AI-powered candidate sourcing, screening, and matching for all positions.',
      icon: '🎯'
    },
    {
      title: 'Employee Onboarding',
      description: 'Automated onboarding processes with personalized learning paths.',
      icon: '🚀'
    },
    {
      title: 'Performance Management',
      description: 'Continuous performance monitoring and development recommendations.',
      icon: '📊'
    },
    {
      title: 'Talent Development',
      description: 'AI-driven career path planning and skill development programs.',
      icon: '📈'
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
      description: "Tailored solutions for large organizations with complex hiring requirements",
      features: [
        "Unlimited job postings",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced security",
        "API access"
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="relative overflow-hidden">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI HR & Recruitment Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your HR operations with AI-powered recruitment, talent management, and employee development solutions. 
              Find the best talent faster and build stronger teams.
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered HR & Recruitment
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your
              <br />
              Talent Acquisition
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Leverage artificial intelligence to find, screen, and hire the best talent 
              faster and more efficiently than ever before.
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
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
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400">Faster Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-400">Better Hires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">35%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-400">Higher Retention</div>
            </div>
          </div>
>>>>>>> origin/main
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900 to-blue-900">
      <SEO 
        title="AI HR & Recruitment Platform - Zion Tech Group" 
        description="Revolutionize your hiring process with AI-powered recruitment. Faster hiring, better candidates, and improved retention."
        keywords="AI recruitment, HR automation, AI hiring, candidate screening, recruitment software, HR technology"
        canonical="https://ziontechgroup.com/services/ai-hr-recruitment"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-600/20 to-cyan-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered HR & Recruitment
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI HR & Recruitment
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Hiring with Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your recruitment process with AI-powered tools that screen candidates, 
            predict success, and automate hiring workflows. Find the best talent faster while 
            reducing bias and improving retention.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-400 text-sm">Faster Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3.2x</div>
              <div className="text-gray-400 text-sm">Better Candidates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
              <div className="text-gray-400 text-sm">Retention Rate</div>
            </div>
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
=======
      title: "High-Volume Recruitment",
      description: "Handle thousands of applications efficiently with AI-powered screening and ranking.",
      icon: Users
    },
    {
      title: "Technical Hiring",
      description: "Assess technical skills through AI-powered coding challenges and technical interviews.",
      icon: Briefcase
    },
    {
      title: "Cultural Fit Assessment",
      description: "Evaluate candidate alignment with company values and team dynamics.",
      icon: Target
    },
    {
      title: "Employee Retention",
      description: "Predict turnover risk and identify factors that contribute to employee satisfaction.",
      icon: TrendingUp
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 60-80%",
    "Improve candidate quality by 40-60%",
    "Eliminate unconscious bias in hiring",
    "Reduce recruitment costs by 30-50%",
    "Improve candidate experience",
    "Better employee retention rates"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                AI HR & Recruitment
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your talent acquisition with AI-powered recruitment that finds the perfect candidates faster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
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
              AI-Powered HR Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI HR platform streamlines every aspect of the recruitment process, 
              from initial candidate discovery to final hiring decisions.
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
              Powerful AI Features for Modern HR
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI recruitment platform combines cutting-edge technology with proven HR practices 
              to deliver exceptional hiring results.
=======
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform covers every aspect of the recruitment process, 
              from sourcing to onboarding.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent HR & Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform streamlines every aspect of the hiring process while ensuring quality and fairness
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features That Transform HR
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI HR platform combines cutting-edge technology with human expertise to deliver 
              exceptional results in talent acquisition and management.
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
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI HR & Recruitment Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that revolutionize how you find, hire, and develop talent
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======
      {/* Key Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose AI HR & Recruitment?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform revolutionizes talent acquisition with intelligent 
            automation and data-driven insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
=======
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
                      {benefit}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Recruitment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI-Powered Recruitment Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From job posting to onboarding, our AI streamlines every step of your hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruitmentProcess.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
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
              Comprehensive HR Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From talent acquisition to employee retention, our AI platform covers every aspect of modern HR management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-blue-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
=======
      {/* Recruitment Stages Section */}
      <section className="py-20 bg-green-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End Recruitment Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform streamlines every stage of the recruitment process for maximum efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recruitmentStages.map((stage, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stage.stage}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-center">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {tool}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
              Transform Your HR Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and effectiveness in your recruitment and HR processes.
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
              Why Choose AI HR & Recruitment?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented efficiency and success in your hiring process.
=======
      {/* Industry Solutions Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI recruitment solutions designed for the unique needs of different industries.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
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
=======
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Industries Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI HR solutions are tailored to meet the unique challenges and requirements of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <Briefcase className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold">{industry}</h3>
              </motion.div>
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Hiring Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI recruitment platform adapts to your specific hiring requirements and industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of AI-powered HR on your organization's bottom line and team performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
>>>>>>> origin/main
=======
      {/* Success Metrics Section */}
      <section className="py-20 bg-green-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI recruitment platform delivers for businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.description}</div>
                <div className="text-gray-400 text-sm">{metric.detail}</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your hiring needs.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your organization's HR needs and growth.
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
                    ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/50 transform scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
=======
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> origin/main
=======
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your recruitment needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500/50 shadow-2xl shadow-green-500/25' 
                  : 'border-gray-700/50 hover:border-green-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
                      Most Popular
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
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
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
                    </li>
                  ))}
                </ul>
                
<<<<<<< HEAD
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'border border-gray-600 text-white hover:border-blue-500 hover:text-blue-400'
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
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
>>>>>>> origin/main
=======
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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
              Ready to Revolutionize Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using AI to transform their recruitment processes.
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
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies that have already revolutionized their recruitment with AI automation.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking organizations that have already revolutionized their HR processes with AI. 
            Start building better teams today with intelligent recruitment and management.
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

      {/* Recruitment Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Intelligent Recruitment Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that streamline every aspect of the recruitment process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recruitmentFeatures.map((feature, index) => {
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
=======
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
                </div>
              );
            })}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AI HR & Recruitment?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of human resources with intelligent automation and data-driven insights
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
=======
              </div>
            );
          })}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Industry Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI HR & Recruitment is transforming talent acquisition across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {useCase.industry}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    <span className="text-cyan-400 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on the latest AI and HR technology for maximum efficiency and accuracy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your recruitment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative bg-gray-800/50 rounded-2xl p-8 border ${
              tier.popular 
                ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                : 'border-gray-700/50'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies that have revolutionized their HR with AI-powered solutions.
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations that are already leveraging AI-powered recruitment 
            to find and hire the best talent faster.
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
=======
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            AI HR & Recruitment
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your HR processes with AI-powered recruitment, talent management, and employee development. 
            Find the best talent faster and build stronger teams with intelligent automation.
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI HR & Recruitment
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Revolutionize your hiring process with intelligent AI that finds, screens, and matches 
            the best candidates while eliminating bias and reducing time-to-hire.
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
=======
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
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
=======
      <section className="py-20 bg-gradient-to-r from-green-900/50 via-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already revolutionized their hiring process 
            with AI-powered recruitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-green-400 hover:text-green-300 underline">Contact our sales team</a>
            </p>
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

export default AIHRRecruitment;
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
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Case Studies
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
            </Link>
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
=======
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
            >
              Request Demo
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent HR Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI HR platform combines cutting-edge artificial intelligence with proven HR practices 
              to revolutionize your talent management processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable HR Improvements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real improvements in your HR metrics with our AI-powered platform 
              that delivers quantifiable results across all aspects of talent management.
=======
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HR & Recruitment Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming talent acquisition across industries and company sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-400" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI HR & Recruitment?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your hiring process from manual and time-consuming to intelligent and efficient
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
=======
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Use Cases Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              HR Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From recruitment to employee development, our AI platform optimizes 
              every aspect of your human resources management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
=======

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced HR & Recruitment Features
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
              Proven Recruitment Results
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
            Industry Applications
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
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution in human resources and build stronger teams 
              with intelligent talent management. Start your transformation today.
=======

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
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI-powered recruitment platform 
              to find and hire the best talent faster and more efficiently.
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
=======
};

export default AIHRRecruitment;
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-459c
=======
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join innovative companies using AI to build better teams and find exceptional talent faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/20 transition-all duration-300">
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
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">AI Business Intelligence</h4>
                    <p className="text-gray-300 text-sm">Transform data into actionable insights</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-marketing-automation" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">AI Marketing Automation</h4>
                    <p className="text-gray-300 text-sm">Automate marketing with AI intelligence</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-legal-tech" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">AI Legal Tech</h4>
                    <p className="text-gray-300 text-sm">Streamline legal processes with AI</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRRecruitment;
>>>>>>> origin/cursor/website-audit-and-enhancement-9620
