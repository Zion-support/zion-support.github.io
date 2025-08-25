import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Target, 
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

export default function AIHRRecruitment() {
  const features = [
    {
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
    }
  ];

  const benefits = [
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
    }
  ];

  const industries = [
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
    }
  ];

  const useCases = [
    {
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
    }
  ];

  return (
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
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
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default AIHRRecruitment;
>>>>>>> origin/main
