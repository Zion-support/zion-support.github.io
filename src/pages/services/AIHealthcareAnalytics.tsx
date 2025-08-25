import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  DollarSign,
  ArrowRight,
  Stethoscope,
  Pill,
  Microscope,
  Search,
  Edit3,
  Download,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Headphones,
  Database,
  Zap,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  FileText
=======
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Brain, 
  Target, 
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
  Stethoscope,
  Database
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
=======
>>>>>>> origin/main
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
<<<<<<< HEAD
  BarChart3, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Search,
  UserCheck,
  Calendar,
  Award,
  Briefcase,
  Globe,
  Lock,
  Database,
  Activity,
=======
  Activity, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Database,
  Network,
  Calendar,
  DollarSign,
  Target,
>>>>>>> origin/main
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
<<<<<<< HEAD
  CheckSquare,
  FileCheck,
  Clock as ClockIcon,
  DollarSign,
  Target,
  Eye,
  Monitor
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Zap,
  Target
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Predictive Diagnostics",
      description: "AI-powered early disease detection and risk assessment using advanced machine learning algorithms"
=======
  LineChart,
  Building
} from 'lucide-react';

const AIHealthcareAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data to predict outcomes and optimize treatment plans.",
      benefits: ["Predictive modeling", "Treatment optimization", "Risk assessment"]
>>>>>>> origin/main
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
<<<<<<< HEAD
      description: "Continuous patient monitoring with instant alerts for critical health indicators"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with EHR systems, medical devices, and healthcare applications"
=======
      title: "Predictive Patient Analytics",
      description: "AI-powered prediction of patient outcomes and risk assessment"
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring and alerting for critical health indicators"
    },
    {
      icon: Target,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient data"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
<<<<<<< HEAD
      description: "Comprehensive analysis of population health trends and disease patterns"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and full HIPAA compliance for patient data protection"
=======
      description: "Comprehensive analysis of population health trends and patterns"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
      description: "Continuous monitoring of patient vital signs and health metrics with instant alerts for critical changes.",
      benefits: ["24/7 monitoring", "Early warning systems", "Real-time alerts"]
    },
    {
      icon: BarChart3,
      title: "Population Health Insights",
      description: "Comprehensive analytics that identify health trends, risk factors, and opportunities for preventive care.",
      benefits: ["Trend analysis", "Risk stratification", "Preventive strategies"]
>>>>>>> origin/main
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
<<<<<<< HEAD
<<<<<<< HEAD
      description: "AI-powered clinical recommendations and treatment optimization suggestions"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinical",
      price: "$799",
      period: "/month",
      description: "For individual healthcare providers and small clinics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Standard monitoring tools",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$2,499",
      period: "/month",
      description: "Ideal for hospitals and large healthcare facilities",
      features: [
        "Up to 10,000 patients",
        "Advanced AI diagnostics",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "API integration",
        "Multi-department access",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For healthcare systems and large organizations",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Custom integrations",
        "On-premise deployment",
        "Advanced security",
        "Compliance automation"
      ],
      cta: "Contact Sales",
      popular: false
=======
      description: "Intelligent assistance for healthcare professionals"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data for predictive insights."
    },
    {
      icon: Activity,
      title: "Real-Time Health Monitoring",
      description: "Continuous monitoring and analysis of patient vital signs and health metrics."
    },
    {
      icon: BarChart3,
      title: "Predictive Health Analytics",
      description: "Data-driven predictions for disease progression and treatment outcomes."
    },
    {
      icon: Zap,
      title: "Automated Diagnosis Support",
      description: "AI-assisted diagnostic tools that help healthcare professionals make informed decisions."
    },
    {
      icon: Users,
      title: "Population Health Management",
      description: "Comprehensive analytics for managing health outcomes across patient populations."
    },
    {
      icon: Clock,
      title: "Treatment Optimization",
      description: "AI-powered recommendations for personalized treatment plans and medication management."
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
      description: "Intelligent systems that provide evidence-based recommendations to healthcare providers for better patient care.",
      benefits: ["Evidence-based guidance", "Clinical pathways", "Best practice recommendations"]
    }
  ];

  const services = [
    {
      title: "Patient Analytics",
      description: "Comprehensive patient data analysis for personalized care and improved outcomes.",
      icon: Users,
      features: ["Individual risk assessment", "Treatment response prediction", "Personalized care plans", "Outcome tracking"]
    },
    {
      title: "Clinical Analytics",
      description: "Advanced analytics for clinical operations, quality improvement, and evidence-based medicine.",
      icon: Stethoscope,
      features: ["Clinical performance metrics", "Quality indicators", "Evidence synthesis", "Best practice identification"]
    },
    {
      title: "Operational Analytics",
      description: "Healthcare operations optimization through data-driven insights and predictive modeling.",
      icon: Activity,
      features: ["Resource optimization", "Capacity planning", "Efficiency metrics", "Cost analysis"]
    },
    {
      title: "Research Analytics",
      description: "Research support tools that accelerate medical discoveries and clinical trial optimization.",
      icon: Microscope,
      features: ["Clinical trial analytics", "Research data mining", "Biomarker discovery", "Drug development support"]
>>>>>>> origin/main
=======
      icon: Heart,
      title: "Patient Outcome Prediction",
      description: "AI models that predict patient outcomes and treatment effectiveness based on medical data."
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Continuous patient monitoring with AI-powered alerts for critical health indicators."
    },
    {
      icon: Brain,
      title: "Diagnostic Assistance",
      description: "Machine learning algorithms that assist healthcare providers in accurate diagnosis."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Predictive risk models that identify patients at high risk for complications."
    },
    {
      icon: TrendingUp,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and disease patterns."
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "AI-powered care coordination that optimizes patient care pathways and resource allocation."
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    {
      icon: Heart,
      title: "Improved Patient Outcomes",
      description: "Early detection and intervention lead to better treatment results and patient recovery"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce healthcare costs by preventing complications and optimizing resource allocation"
    },
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "AI-powered analysis reduces diagnosis time from days to minutes"
    },
    {
      icon: Users,
      title: "Enhanced Care Coordination",
      description: "Better communication and coordination between healthcare teams and departments"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential health risks before they become critical issues"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions based on comprehensive healthcare analytics and trends"
=======
    "Improve diagnostic accuracy by 85%",
    "Reduce treatment costs by 30-40%",
    "Enhance patient outcomes by 60%",
    "Streamline clinical workflows by 70%",
    "Automate 75% of routine analytics tasks",
    "Enable proactive healthcare interventions"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Basic AI patient analytics",
        "Health monitoring tools",
        "Basic reporting dashboard",
        "Up to 1,000 patients",
        "Email support",
        "Standard integrations"
      ]
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing practices",
      features: [
        "Advanced AI analytics",
        "Predictive health insights",
        "Population health management",
        "Up to 10,000 patients",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Full AI healthcare suite",
        "Custom AI models",
        "Advanced analytics",
        "Dedicated account manager",
        "Unlimited patients",
        "24/7 phone support",
        "Custom development"
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
    {
      title: "Improve Patient Outcomes",
      value: "35%",
      description: "Better treatment effectiveness and patient recovery rates"
    },
    {
      title: "Reduce Readmissions",
      value: "25%",
      description: "Lower hospital readmission rates through predictive care"
    },
    {
      title: "Lower Healthcare Costs",
      value: "40%",
      description: "Reduced costs through preventive care and optimized treatments"
    },
    {
      title: "Increase Efficiency",
      value: "50%",
      description: "Improved operational efficiency and resource utilization"
>>>>>>> origin/main
    }
=======
    "Improve patient outcomes by 25-40% with predictive analytics",
    "Reduce hospital readmissions by 30-50% through risk prediction",
    "Cut healthcare costs by 20-35% with optimized care pathways",
    "Enhance diagnostic accuracy by 15-30% with AI assistance",
    "Increase operational efficiency by 40-60% through automation",
    "Achieve 95%+ accuracy in patient risk assessment"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
  ];

  const useCases = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Stethoscope,
      title: "Cardiology",
      description: "Predictive analysis for heart disease, arrhythmia detection, and cardiac risk assessment"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Early detection of neurological disorders, stroke prediction, and cognitive decline monitoring"
    },
    {
      icon: Microscope,
      title: "Oncology",
      description: "Cancer screening, treatment response monitoring, and recurrence prediction"
    },
    {
      icon: Pill,
      title: "Pharmacology",
      description: "Drug interaction analysis, dosage optimization, and adverse reaction prediction"
    },
    {
      icon: Users,
      title: "Population Health",
      description: "Community health monitoring, disease outbreak prediction, and preventive care planning"
    },
    {
      icon: Activity,
      title: "Emergency Medicine",
      description: "Triage optimization, critical care monitoring, and emergency response coordination"
=======
      title: "Clinical Decision Support",
      description: "AI-powered diagnostic assistance and treatment recommendations for healthcare providers.",
      icon: Stethoscope
    },
    {
      title: "Patient Risk Assessment",
      description: "Predictive analytics for identifying high-risk patients and preventive interventions.",
      icon: AlertTriangle
    },
    {
      title: "Treatment Optimization",
      description: "Personalized treatment plans based on patient data and AI analysis.",
      icon: Pill
    },
    {
      title: "Population Health",
      description: "Comprehensive analytics for managing health outcomes across patient populations.",
      icon: Users
    }
  ];

  const healthcareProcesses = [
    {
      step: "01",
      title: "Data Collection",
      description: "Secure collection of patient data from multiple sources"
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Advanced AI algorithms analyze health patterns and trends"
    },
    {
      step: "03",
      title: "Risk Assessment",
      description: "Predictive modeling for patient risk identification"
    },
    {
      step: "04",
      title: "Treatment Planning",
      description: "AI-powered treatment recommendations and optimization"
    },
    {
      step: "05",
      title: "Monitoring & Tracking",
      description: "Continuous health monitoring and outcome tracking"
    },
    {
      step: "06",
      title: "Performance Analytics",
      description: "Comprehensive reporting and performance insights"
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
      title: "Hospitals",
      description: "Comprehensive healthcare analytics for large medical centers and hospital systems.",
      icon: Building,
      features: ["Patient flow optimization", "Resource management", "Quality improvement", "Cost reduction"]
    },
    {
      title: "Clinics",
      description: "Analytics solutions for outpatient clinics and medical practices.",
      icon: Stethoscope,
      features: ["Patient management", "Appointment optimization", "Care coordination", "Outcome tracking"]
    },
    {
      title: "Research Institutions",
      description: "Advanced analytics for medical research and clinical trials.",
      icon: Microscope,
      features: ["Data analysis", "Trial optimization", "Biomarker discovery", "Publication support"]
    },
    {
      title: "Health Insurance",
      description: "Risk assessment and cost prediction for insurance companies.",
      icon: Shield,
      features: ["Risk modeling", "Cost prediction", "Fraud detection", "Claims optimization"]
=======
      industry: "Hospitals",
      description: "Patient monitoring, readmission prediction, and resource optimization",
      metrics: ["Patient Outcomes", "Readmission Rate", "Resource Utilization"]
    },
    {
      industry: "Primary Care",
      description: "Preventive care, chronic disease management, and early intervention",
      metrics: ["Prevention Rate", "Disease Progression", "Patient Engagement"]
    },
    {
      industry: "Specialty Clinics",
      description: "Treatment optimization, outcome prediction, and patient stratification",
      metrics: ["Treatment Success", "Patient Satisfaction", "Clinical Efficiency"]
    },
    {
      industry: "Health Systems",
      description: "Population health management, care coordination, and quality improvement",
      metrics: ["Population Health", "Care Coordination", "Quality Metrics"]
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
    }
  ];

  const pricing = [
    {
<<<<<<< HEAD
      name: "Clinical",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Basic patient analytics",
        "Clinical performance metrics",
        "Standard reporting",
        "Email support",
        "Up to 1,000 patients"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,299",
      period: "/month",
      description: "Ideal for hospitals and larger healthcare organizations",
      features: [
        "Advanced patient analytics",
        "Population health insights",
        "Real-time monitoring",
        "Clinical decision support",
        "Priority support",
        "Unlimited patients"
=======
      name: "Starter",
      price: "$4,000",
      period: "/month",
      description: "Perfect for small healthcare practices starting with AI analytics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Patient monitoring",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$12,000",
      period: "/month",
      description: "Ideal for growing healthcare organizations with advanced analytics needs",
      features: [
        "Up to 10,000 patients",
        "Advanced AI models",
        "Real-time monitoring",
        "Population analytics",
        "Priority support",
        "Custom integrations"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
      ],
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
      price: "$2,599",
      period: "/month",
      description: "Comprehensive solution for large healthcare systems",
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
=======
      price: "Custom",
      period: "",
      description: "Tailored solutions for large health systems with complex analytics requirements",
      features: [
        "Unlimited patients",
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
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            AI-Powered Healthcare Technology
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Analytics</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize healthcare delivery with AI-powered analytics. Predict, prevent, and optimize patient care with unprecedented accuracy and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Analytics
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform healthcare delivery with intelligent AI that predicts outcomes, 
            optimizes care pathways, and improves patient safety and satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
            >
              Start Free Trial
            </Link>
            <Link
<<<<<<< HEAD
              to="/request-demo"
              className="px-8 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-200"
=======
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
            >
              Request Demo
            </Link>
          </div>
        </div>

<<<<<<< HEAD
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-400">Diagnostic Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-gray-400">Faster Diagnosis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Monitoring</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Healthcare Analytics Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {" "}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize patient care with AI-powered analytics that predict health outcomes, 
              optimize treatments, and enable proactive healthcare interventions.
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize patient care with AI-powered healthcare analytics that predict outcomes, optimize treatments, 
              and improve population health. Make data-driven decisions that save lives and reduce costs.
>>>>>>> origin/main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
=======
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
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
              <div className="text-3xl font-bold text-red-400 mb-2">35%</div>
              <div className="text-gray-400">Better Outcomes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-400">Fewer Readmissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-400">Efficiency Boost</div>
            </div>
          </div>
>>>>>>> origin/main
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features for Modern Healthcare
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform combines cutting-edge artificial intelligence 
              with proven medical expertise to deliver exceptional patient outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Healthcare Specialties & Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
=======
      </section>

      {/* Healthcare Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI-Powered Healthcare Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From data collection to treatment optimization, our AI streamlines every aspect of healthcare delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareProcesses.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{process.title}</h3>
                <p className="text-gray-300 text-center">{process.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 bg-green-500/5' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
=======
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented improvements in patient care and healthcare efficiency.
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features That Transform Healthcare
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform combines cutting-edge artificial intelligence with deep medical expertise 
              to deliver exceptional results for healthcare providers and patients.
>>>>>>> origin/main
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
=======
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-red-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-red-400" />
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
              Comprehensive Healthcare Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From patient analytics to clinical research, our AI platform covers every aspect of modern healthcare analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-red-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-red-400" />
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
>>>>>>> origin/main
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Healthcare Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform adapts to your specific medical practice and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Every Healthcare Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics solutions are tailored to meet the unique needs of different types of healthcare organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-red-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-red-400" />
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
=======
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Healthcare Analytics Features
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
              Proven Healthcare Results
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
            Healthcare Setting Applications
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of AI-powered healthcare analytics on patient outcomes and organizational performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">{benefit.value}</div>
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
              Flexible pricing options designed to scale with your healthcare practice.
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your healthcare organization's needs and growth.
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
                    ? 'bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/50 transform scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> origin/main
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
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="text-4xl font-bold text-green-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
=======
=======
>>>>>>> origin/main
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
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
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
                
<<<<<<< HEAD
<<<<<<< HEAD
                <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  {plan.popular ? (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white block">
                      {plan.cta}
                    </span>
                  ) : (
                    <span className="border border-gray-600 text-gray-300 block hover:border-green-500 hover:text-green-400">
                      {plan.cta}
                    </span>
                  )}
                </button>
=======
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-white hover:border-red-500 hover:text-red-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
=======
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Healthcare Analytics?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
<<<<<<< HEAD
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers who are already leveraging AI to improve patient outcomes and operational efficiency.
=======
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of healthcare organizations already using our AI-powered analytics platform 
              to improve patient outcomes and operational efficiency.
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial Today
              </Link>
              <Link
                to="/request-demo"
                className="px-8 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                Schedule Demo
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
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
              </Link>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
    "Improve patient outcomes by 25-40%",
    "Reduce hospital readmissions by 30%",
    "Lower healthcare costs by 20-35%",
    "Enhance diagnostic accuracy",
    "Streamline clinical workflows",
    "Better resource allocation"
  ];

  const solutions = [
    {
      title: "Patient Analytics",
      description: "Comprehensive patient data analysis and insights"
    },
    {
      title: "Clinical Analytics",
      description: "Clinical performance metrics and quality improvement"
    },
    {
      title: "Operational Analytics",
      description: "Healthcare operations optimization and efficiency"
    },
    {
      title: "Research Analytics",
      description: "Advanced analytics for medical research and trials"
    }
  ];

  const specialties = [
    "Cardiology",
    "Oncology",
    "Neurology",
    "Pediatrics",
    "Emergency Medicine",
    "Primary Care",
    "Surgery",
    "Mental Health"
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
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with intelligent analytics powered by artificial intelligence. 
              Improve patient outcomes, optimize operations, and advance medical research.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Powered Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI healthcare analytics platform combines advanced machine learning with 
              medical expertise to revolutionize patient care and healthcare operations.
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
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented insights and improvements in healthcare delivery with AI-powered analytics.
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
          </div>
        </div>
      </section>

      {/* Specialties Section */}
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
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI healthcare analytics solutions are designed to support various medical specialties 
              and clinical areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <Stethoscope className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold">{specialty}</h3>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of healthcare analytics and start improving patient outcomes today.
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
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of healthcare providers who have already revolutionized patient care with AI analytics.
=======
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking healthcare organizations that have already revolutionized patient care with AI. 
            Start improving outcomes today with intelligent healthcare analytics.
>>>>>>> origin/main
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300"
=======
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
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
        </div>
      </section>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
    </div>
  );
}
=======
    </div>
  );
};

export default AIHealthcareAnalytics;
>>>>>>> origin/main
=======
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
