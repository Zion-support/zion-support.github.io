import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Shield, 
  Zap, 
  CheckCircle, 
  Database, 
  BarChart3, 
  Globe, 
  Network, 
  FileText,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  Lock,
  AlertTriangle
} from 'lucide-react';
=======
import { motion } from 'framer-motion';
import { Shield, CheckCircle, TrendingUp, Database, Users, ArrowRight, Lock, FileText, BarChart3 } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
import { Shield, CheckCircle, Zap, TrendingUp, Users, Globe, ArrowRight, Lock, FileText, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
=======
import { Shield, CheckCircle, Zap, Target, ArrowRight, BarChart3, Lock, FileText } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65

const SOC2ComplianceAutomation = () => {
  const features = [
    {
      icon: Shield,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Automated Compliance",
      description: "AI-powered automation of SOC2 compliance processes and controls"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting for compliance violations"
    },
    {
      icon: CheckCircle,
      title: "Control Testing",
      description: "Automated testing and validation of security controls"
    },
    {
      icon: Database,
      title: "Evidence Collection",
      description: "Automated collection and storage of compliance evidence"
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics",
      description: "Advanced reporting and analytics for compliance status"
    },
    {
      icon: FileText,
      title: "Audit Preparation",
      description: "Automated preparation of audit documentation and reports"
    }
  ];

  const controls = [
=======
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring and assessment of SOC2 compliance requirements across your organization."
    },
    {
      icon: CheckCircle,
      title: "Evidence Collection",
      description: "Automated collection and validation of compliance evidence and documentation."
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Instant notifications for compliance violations and security incidents."
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate comprehensive SOC2 reports and audit trails automatically."
    }
  ];

  const benefits = [
    "Reduce compliance costs by 50%",
    "Achieve SOC2 certification 3x faster",
    "Continuous compliance monitoring",
    "Automated audit preparation"
  ];

  const complianceAreas = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
    {
      title: "Access Control (CC6)",
      description: "Automated user access management and monitoring",
      benefits: ["User provisioning", "Access reviews", "Privilege monitoring"]
    },
    {
      title: "Change Management (CC8)",
      description: "Automated change control and approval workflows",
      benefits: ["Change tracking", "Approval workflows", "Rollback capabilities"]
    },
    {
      title: "Risk Assessment (CC3)",
      description: "Continuous risk monitoring and assessment",
      benefits: ["Risk identification", "Impact analysis", "Mitigation tracking"]
    },
    {
      title: "Security Monitoring (CC7)",
      description: "Real-time security event monitoring and response",
      benefits: ["Threat detection", "Incident response", "Security analytics"]
=======
      title: 'Automated Compliance Monitoring',
      description: 'Continuous monitoring and automated compliance checks across your entire infrastructure.'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Auditing',
      description: 'Instant audit trails and compliance reporting with automated evidence collection.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and insights for compliance performance optimization.'
    },
    {
      icon: Database,
      title: 'Centralized Management',
      description: 'Single platform for managing all SOC2 compliance requirements and controls.'
    },
    {
      icon: Users,
      title: 'Role-based Access',
      description: 'Secure access control with automated user provisioning and deprovisioning.'
    },
    {
      icon: Lock,
      title: 'Security Controls',
      description: 'Comprehensive security controls with automated threat detection and response.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring and validation of SOC2 compliance requirements across your organization."
    },
    {
      icon: CheckCircle,
      title: "Evidence Collection",
      description: "Automated collection and organization of compliance evidence and documentation."
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Instant notifications for compliance violations and security incidents."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive reporting and analytics on compliance status and trends."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
=======
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Zap, 
  Target, 
  Lock, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  FileText,
  AlertTriangle,
  Clipboard,
  CheckSquare
} from 'lucide-react';
=======
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46

const SOC2ComplianceAutomation: React.FC = () => {
  // Custom icons for Trust Service Criteria
  const Security = () => <Shield className="w-8 h-8 text-green-400" />;
  const Availability = () => <CheckSquare className="w-8 h-8 text-blue-400" />;
  const ProcessingIntegrity = () => <Cpu className="w-8 h-8 text-purple-400" />;
  const Confidentiality = () => <Lock className="w-8 h-8 text-orange-400" />;
  const Privacy = () => <Eye className="w-8 h-8 text-pink-400" />;

  const features = [
    {
      title: "Automated Compliance Monitoring",
<<<<<<< HEAD
      description: "Continuous monitoring and assessment of SOC2 compliance requirements across all systems and processes."
    },
    {
      icon: Zap,
      title: "Real-time Risk Assessment",
      description: "Instant identification and assessment of security risks and compliance gaps with automated remediation."
    },
    {
      icon: Target,
      title: "Policy Management",
      description: "Centralized policy creation, distribution, and enforcement with automated compliance tracking."
    },
    {
      icon: Lock,
      title: "Security Controls",
<<<<<<< HEAD
      description: "Comprehensive security control implementation and monitoring for all SOC2 Trust Service Criteria."
    },
    {
      icon: Rocket,
      title: "Audit Preparation",
      description: "Automated evidence collection, report generation, and audit preparation for seamless compliance."
=======
      description: "Automated monitoring of access controls, encryption, and security policies."
    },
    {
      title: "Availability Management",
      description: "Continuous monitoring of system availability and performance metrics."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Unified compliance management across on-premises, cloud, and hybrid environments."
    }
  ];

  const trustServiceCriteria = [
    {
      icon: Security,
      title: "Security",
      description: "Protection of information and systems from unauthorized access, use, disclosure, disruption, modification, or destruction."
    },
    {
      icon: Availability,
      title: "Availability",
      description: "Information and systems are available for operation and use as committed or agreed upon."
    },
    {
      icon: ProcessingIntegrity,
      title: "Processing Integrity",
<<<<<<< HEAD
      description: "System processing is complete, accurate, timely, and authorized to meet entity objectives."
    },
    {
      icon: Confidentiality,
      title: "Confidentiality",
      description: "Information designated as confidential is protected as committed or agreed upon."
    },
    {
      icon: Privacy,
      title: "Privacy",
      description: "Personal information is collected, used, retained, disclosed, and disposed of in conformity with commitments."
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "Reduced compliance costs",
    "Faster audit preparation",
    "Continuous compliance monitoring",
    "Reduced manual effort",
    "Improved audit success rates",
    "Real-time compliance status"
=======
    "Automated compliance monitoring and reporting",
    "Reduced audit preparation time by 80%",
    "Continuous risk assessment and mitigation",
    "Centralized policy and control management",
    "Real-time compliance status visibility",
    "Streamlined evidence collection and documentation"
=======
      description: "24/7 automated monitoring of all SOC2 compliance requirements and controls",
      icon: Monitor,
      benefits: ["Real-time monitoring", "Automated alerts", "Continuous compliance"]
    },
    {
      title: "Intelligent Risk Assessment",
      description: "AI-powered risk analysis and automated threat detection",
      icon: Brain,
      benefits: ["Risk scoring", "Threat detection", "Predictive analysis"]
    },
    {
      title: "Automated Evidence Collection",
      description: "Seamless collection and organization of compliance evidence",
      icon: FileCheck,
      benefits: ["Auto-collection", "Evidence mapping", "Audit ready"]
    },
    {
      title: "Compliance Dashboard",
      description: "Real-time visibility into compliance status and metrics",
      icon: BarChart,
      benefits: ["Live status", "Compliance metrics", "Executive reporting"]
=======
      description: "Validation of data processing accuracy and completeness."
    },
    {
      title: "Confidentiality Protection",
      description: "Monitoring of data protection and privacy controls."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
    }
  ];

  const useCases = [
    {
      title: "Cloud Security Compliance",
      description: "Automated SOC2 compliance for cloud infrastructure and services",
      icon: Cloud,
      impact: "99.9% compliance rate"
    },
    {
      title: "Data Protection & Privacy",
      description: "Automated monitoring of data protection controls and privacy requirements",
      icon: Shield,
      impact: "100% data protection"
    },
    {
      title: "Access Control Management",
      description: "Automated user access monitoring and privilege management",
      icon: Lock,
      impact: "Zero unauthorized access"
    },
    {
      title: "Incident Response Automation",
      description: "Automated incident detection, response, and reporting",
      icon: AlertTriangle,
      impact: "90% faster response"
    }
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Companies Compliant", description: "Trusted by enterprises worldwide" },
    { icon: TrendingUp, value: "95%", label: "Compliance Rate", description: "Average SOC2 compliance score" },
    { icon: Award, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Globe, value: "30+", label: "Countries", description: "Global compliance coverage" }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Machine learning algorithms continuously analyze security posture and identify compliance risks."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Automated generation of compliance reports, dashboards, and audit evidence."
    },
    {
      icon: Settings,
      title: "Automated Workflows",
      description: "Streamlined processes for policy updates, control implementation, and compliance monitoring."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of security controls and compliance status across all systems."
    },
    {
      icon: Lock,
      title: "Security Management",
      description: "Integrated security monitoring, vulnerability assessment, and threat detection."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of security controls and compliance processes."
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
  ];

  const useCases = [
    {
      title: "Cloud Service Providers",
      description: "Maintain SOC2 compliance for cloud infrastructure and services"
    },
    {
      title: "Financial Services",
      description: "Ensure compliance with strict financial regulations and standards"
    },
    {
      title: "Healthcare Organizations",
      description: "Maintain compliance with healthcare security requirements"
    },
    {
      title: "Technology Companies",
      description: "Streamline compliance for software and SaaS products"
=======
    '90% reduction in manual compliance tasks',
    'Real-time compliance monitoring',
    'Automated evidence collection',
    'Instant audit reporting',
    'Reduced compliance costs',
    'Enhanced security posture'
  ];

  const complianceAreas = [
    {
      title: 'Security Controls',
      description: 'Automated monitoring and enforcement of security policies, access controls, and threat detection systems.'
    },
    {
      title: 'Availability Monitoring',
      description: 'Continuous monitoring of system availability, performance, and disaster recovery capabilities.'
    },
    {
      title: 'Processing Integrity',
      description: 'Automated validation of data processing accuracy, completeness, and authorization.'
    },
    {
      title: 'Confidentiality Protection',
      description: 'Automated encryption, access controls, and data protection measures.'
    },
    {
      title: 'Privacy Controls',
      description: 'Automated privacy compliance monitoring and data handling controls.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
  ];
=======
import { Shield, Brain, Zap, ArrowRight, Users, Target, Clock, BarChart3, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-a260

export default function SOC2ComplianceAutomation() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                SOC2 Compliance Automation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your SOC2 compliance with intelligent automation. Our AI-powered platform 
              automates compliance processes, reduces manual effort, and ensures continuous 
              compliance across all your systems and controls.
=======
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, CheckCircle, TrendingUp, ArrowRight, Star, Rocket, Globe, Brain, Zap, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOC2ComplianceAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SOC2 Compliance Automation - Zion Tech Group</title>
        <meta name="description" content="Automate your SOC2 compliance with our AI-powered platform. Streamline audits, continuous monitoring, and automated reporting for seamless compliance management." />
        <meta name="keywords" content="SOC2 compliance, compliance automation, SOC2 audit, security compliance, automated compliance, SOC2 reporting" />
        <link rel="canonical" href="https://ziontechgroup.com/soc2-compliance-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                SOC2 Compliance
                <span className="block bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Streamline your SOC2 compliance process with our AI-powered automation platform. 
                Achieve continuous compliance with automated monitoring, reporting, and audit preparation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services/cybersecurity"
                  className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
=======
    <>
      <SEOHead 
        customData={{
          title: "SOC2 Compliance Automation - Zion Tech Group",
          description: "Revolutionary AI-powered platform for automated SOC2 compliance. Streamline your compliance process, reduce audit time, and maintain continuous compliance with intelligent automation.",
          keywords: ["SOC2 compliance", "compliance automation", "security compliance", "audit automation", "SOC2 automation", "compliance monitoring", "security controls"],
          type: "website",
          url: "https://ziontechgroup.com/soc2-compliance-automation"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                SOC2 Compliance Automation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your SOC2 compliance process with AI-powered automation. Streamline audits, reduce costs, and maintain continuous compliance with intelligent monitoring and reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services/cybersecurity"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Automated Compliance Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform automates every aspect of SOC2 compliance, from continuous monitoring 
                to audit preparation, ensuring you're always audit-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Monitoring</h3>
                <p className="text-gray-300">
                  Continuous automated monitoring of all SOC2 controls with intelligent anomaly detection and alerting.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Compliance</h3>
                <p className="text-gray-300">
                  Instant visibility into compliance status with real-time dashboards and automated reporting.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Auditing</h3>
                <p className="text-gray-300">
                  Streamlined audit preparation with automated evidence collection and compliance documentation.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Controls</h3>
                <p className="text-gray-300">
                  Comprehensive security control monitoring and automated policy enforcement across all systems.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Advanced analytics and reporting on compliance performance, trends, and improvement opportunities.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">
                  Streamlined workflows and collaboration tools for compliance teams and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOC2 Framework Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete SOC2 Framework Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform covers all five Trust Service Criteria (TSC) with automated controls, 
                monitoring, and reporting for comprehensive SOC2 compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Security (CC6.1)</h3>
                    <p className="text-gray-300">
                      Automated monitoring of access controls, authentication, encryption, and security 
                      measures with real-time threat detection and response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Availability (CC7.1)</h3>
                    <p className="text-gray-300">
                      Continuous monitoring of system availability, performance, and disaster recovery 
                      capabilities with automated failover and recovery testing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Processing Integrity (CC8.1)</h3>
                    <p className="text-gray-300">
                      Automated validation of data processing accuracy, completeness, and authorization 
                      with real-time error detection and correction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Confidentiality (CC9.1)</h3>
                    <p className="text-gray-300">
                      Automated protection of sensitive information through encryption, access controls, 
                      and data classification with continuous monitoring and compliance validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Privacy (CC10.1)</h3>
                    <p className="text-gray-300">
                      Automated privacy controls and data protection measures with consent management, 
                      data minimization, and privacy impact assessments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Common Criteria (CC1-5)</h3>
                    <p className="text-gray-300">
                      Automated monitoring of control environment, communication, risk assessment, 
                      monitoring activities, and control activities with comprehensive reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Compliance Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency, accuracy, and confidence in your SOC2 compliance 
                with our automated platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">80%</h3>
                <p className="text-gray-300">Faster Compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-300">Continuous Monitoring</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">Compliance Rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">70%</h3>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines cutting-edge automation with deep compliance expertise to deliver unprecedented SOC2 compliance capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our automated platform is revolutionizing SOC2 compliance across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <useCase.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust our automated platform for seamless SOC2 compliance 
              and continuous audit readiness.
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
=======
    <>
      <Helmet>
        <title>SOC2 Compliance Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary SOC2 compliance automation platform that streamlines compliance monitoring, risk assessment, and audit preparation. Achieve and maintain SOC2 compliance with AI-powered automation." />
        <meta name="keywords" content="SOC2 compliance, compliance automation, security compliance, audit automation, risk assessment, security controls" />
        <link rel="canonical" href="https://ziontechgroup.com/soc2-compliance-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
              SOC2 Compliance
              <span className="block bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your SOC2 compliance process with AI-powered automation. 
              Achieve and maintain compliance with intelligent monitoring, automated controls, and continuous auditing.
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
=======
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Streamline your SOC2 compliance journey with AI-powered automation. Monitor compliance, 
              assess risks, and prepare for audits with unprecedented efficiency and accuracy.
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their compliance process with our automated platform.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
=======
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              SOC2 Compliance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-6">
              SOC2 Compliance Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your SOC2 compliance journey with intelligent automation, 
              continuous monitoring, and automated reporting capabilities.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
=======
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              SOC2 Compliance Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Streamline your SOC2 compliance with AI-powered automation. Achieve continuous compliance 
              monitoring, automated auditing, and real-time reporting for all your security controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Start Free Trial
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
=======
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold rounded-xl transition-all duration-300">
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 rounded-lg font-semibold transition-all duration-300">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
                Schedule Demo
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/cybersecurity"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Security Services
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our SOC2 compliance automation platform provides comprehensive monitoring, auditing, 
              and reporting capabilities to ensure continuous compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
=======
                to="/services/cybersecurity"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
<<<<<<< HEAD
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Key Advantages</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Compliance Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate your potential savings and efficiency gains with our automated compliance platform.
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2">
                <span>Calculate Savings</span>
                <ArrowRight className="w-5 h-5" />
              </button>
=======
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Automated Compliance Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage AI to automate and streamline your SOC2 compliance journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of security controls and compliance requirements with intelligent alerting.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Automated Controls</h3>
              <p className="text-gray-400">
                Intelligent automation of security controls and compliance processes to reduce manual effort.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Continuous Auditing</h3>
              <p className="text-gray-400">
                Real-time auditing and compliance verification with automated reporting and documentation.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-400">
                Automated risk assessment and vulnerability scanning with intelligent prioritization.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Compliance</h3>
              <p className="text-gray-400">
                Round-the-clock compliance monitoring and automated incident response for continuous compliance.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Analytics</h3>
              <p className="text-gray-400">
                Comprehensive dashboards and reports for compliance status and trend analysis.
              </p>
=======
    {
      title: "Reduced Audit Time",
      description: "Streamline SOC2 audits with automated evidence collection and reporting."
    },
    {
      title: "Continuous Compliance",
      description: "Maintain compliance 24/7 with automated monitoring and validation."
    },
    {
      title: "Cost Savings",
      description: "Reduce manual compliance efforts and associated costs significantly."
    },
    {
      title: "Risk Mitigation",
      description: "Proactively identify and address compliance gaps before they become issues."
    }
  ];

  const complianceAreas = [
    "Security",
    "Availability",
    "Processing Integrity",
    "Confidentiality",
    "Privacy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="SOC2 Compliance Automation - Zion Tech Group"
        description="Revolutionary AI-powered platform for automated SOC2 compliance monitoring, evidence collection, and continuous validation."
        keywords="SOC2 compliance, compliance automation, security compliance, audit automation, compliance monitoring, SOC2 automation"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Shield className="h-12 w-12 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SOC2 Compliance Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your compliance operations with our revolutionary AI-powered platform that automates 
            SOC2 compliance monitoring, evidence collection, and continuous validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/cybersecurity"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* SOC2 Trust Services Criteria */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SOC2 Trust Services Criteria
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of all SOC2 trust service criteria with automated controls
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                  <p className="text-gray-400">
                    Automated security controls, access management, and threat detection across all systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Availability</h3>
                  <p className="text-gray-400">
                    Continuous monitoring of system availability, performance, and disaster recovery capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Processing Integrity</h3>
                  <p className="text-gray-400">
                    Automated validation of data processing accuracy and system reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Confidentiality</h3>
                  <p className="text-gray-400">
                    Automated data classification, encryption, and access controls for sensitive information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Privacy</h3>
                  <p className="text-gray-400">
                    Automated privacy controls and data protection measures in compliance with regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance Reporting</h3>
                  <p className="text-gray-400">
                    Automated generation of compliance reports and evidence collection for auditors.
                  </p>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Compliance Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines AI-powered automation with deep compliance expertise to 
              streamline your SOC2 compliance journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive compliance automation capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
                <p className="text-gray-300">{feature.description}</p>
=======
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the automated compliance capabilities that simplify SOC2 certification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
=======
import { Link } from 'react-router-dom';

export default function SOC2ComplianceAutomation() {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type I',
      description: 'Point-in-time assessment of security controls',
      timeframe: '3-6 months',
      deliverables: ['Security assessment report', 'Control documentation', 'Gap analysis']
    },
    {
      name: 'SOC 2 Type II',
      description: 'Continuous monitoring over 6-12 months',
      timeframe: '6-12 months',
      deliverables: ['Ongoing monitoring', 'Periodic reports', 'Control effectiveness']
    },
    {
      name: 'SOC 2 +',
      description: 'Enhanced controls with additional criteria',
      timeframe: '6-12 months',
      deliverables: ['Extended controls', 'Industry-specific compliance', 'Enhanced reporting']
    }
  ];

  const automationFeatures = [
    {
      title: 'Automated Control Monitoring',
      description: 'Real-time monitoring of security controls and compliance status',
      icon: '🔒',
      benefits: ['24/7 monitoring', 'Instant alerts', 'Automated reporting']
    },
    {
      title: 'Policy Management',
      description: 'Centralized policy creation, distribution, and enforcement',
      icon: '📋',
      benefits: ['Template library', 'Version control', 'Automated distribution']
    },
    {
      title: 'Risk Assessment',
      description: 'Automated risk identification and assessment processes',
      icon: '⚠️',
      benefits: ['Risk scoring', 'Trend analysis', 'Mitigation tracking']
    },
    {
      title: 'Audit Trail',
      description: 'Comprehensive logging and audit trail management',
      icon: '📊',
      benefits: ['Complete visibility', 'Compliance evidence', 'Forensic analysis']
    }
    ];

  const tools = [
    { 
      name: 'Vanta', 
      url: 'https://www.vanta.com/', 
      description: 'Automated compliance monitoring and reporting',
      features: ['SOC 2 automation', 'GDPR compliance', 'HIPAA compliance']
    },
    { 
      name: 'Drata', 
      url: 'https://drata.com/', 
      description: 'Continuous compliance monitoring platform',
      features: ['Real-time monitoring', 'Automated evidence collection', 'Compliance scoring']
    },
    { 
      name: 'SecurityScorecard', 
      url: 'https://securityscorecard.com/', 
      description: 'Security ratings and compliance monitoring',
      features: ['Security ratings', 'Vendor monitoring', 'Compliance tracking']
    }
  ];

  const complianceCriteria = [
    {
      category: 'Security',
      controls: ['Access controls', 'Network security', 'Data encryption', 'Vulnerability management']
    },
    {
      category: 'Availability',
      controls: ['System monitoring', 'Backup and recovery', 'Disaster recovery', 'Performance monitoring']
    },
    {
      category: 'Processing Integrity',
      controls: ['Data validation', 'Error handling', 'Processing accuracy', 'Quality assurance']
    },
    {
      category: 'Confidentiality',
      controls: ['Data classification', 'Access restrictions', 'Data handling', 'Privacy controls']
    },
    {
      category: 'Privacy',
      controls: ['Data minimization', 'Consent management', 'Data subject rights', 'Breach notification']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            SOC 2 Compliance Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your SOC 2 compliance journey with AI-powered automation. 
            Reduce manual effort, eliminate compliance gaps, and maintain continuous compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Compliance Journey
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Schedule Assessment
            </button>
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">SOC 2 Compliance Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{framework.name}</h3>
                <p className="text-gray-300 mb-6">{framework.description}</p>
                <div className="mb-6">
                  <span className="text-sm text-cyan-400 font-semibold">Timeline: {framework.timeframe}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Deliverables:</h4>
                <ul className="space-y-2">
                  {framework.deliverables.map((deliverable, delIndex) => (
                    <li key={delIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-74a8
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Controls Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SOC2 Trust Service Criteria
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation coverage for all SOC2 control areas and trust service criteria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {controls.map((control, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{control.title}</h3>
                <p className="text-gray-300 mb-6">{control.description}</p>
                <ul className="space-y-2">
                  {control.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
=======

        {/* Automation Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Automation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
>>>>>>> origin/cursor/website-audit-and-enhancement-74a8
                      {benefit}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how automated compliance transforms your SOC2 audit process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
              </div>
            ))}
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Business Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in your compliance process and certification timeline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-600/10 rounded-xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Cost Reduction</span>
                  <span className="text-emerald-400 font-semibold">50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Certification Speed</span>
                  <span className="text-emerald-400 font-semibold">3x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Compliance Coverage</span>
                  <span className="text-emerald-400 font-semibold">100%</span>
                </div>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of automated SOC2 compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
=======
      {/* Compliance Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SOC2 Trust Service Criteria
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform covers all five SOC2 trust service criteria for comprehensive compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{area}</h3>
=======
        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our SOC2 compliance automation platform delivers unprecedented capabilities 
                that redefine how organizations achieve and maintain compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Service Criteria Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trust Service Criteria Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform comprehensively addresses all SOC2 Trust Service Criteria, 
                ensuring complete compliance coverage for your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustServiceCriteria.map((criteria, index) => {
                const Icon = criteria.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{criteria.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{criteria.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with comprehensive compliance management 
                to deliver unprecedented operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Automated SOC2 Compliance?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that automated compliance management provides 
                for your organization's security and audit readiness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
      {/* Compliance Areas Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SOC2 Trust Service Criteria</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of all SOC2 compliance requirements and controls.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Industry Leader</h3>
                  <p className="text-gray-300 mb-6">
                    Join forward-thinking organizations already leveraging automated compliance 
                    for competitive advantage and operational excellence.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-500 hover:to-pink-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum security and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Lock, name: "Security First" },
              { icon: FileText, name: "Documentation" },
              { icon: BarChart3, name: "Analytics" },
              { icon: Shield, name: "Compliance" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 mx-auto w-fit">
                  <tech.icon className="h-8 w-8 text-cyan-500 mx-auto" />
                </div>
                <p className="text-white font-medium">{tech.name}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
              </div>
            ))}
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your compliance process with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Reduce compliance effort by up to 70%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Automate routine compliance tasks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Continuous monitoring and alerting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Streamlined audit preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Risk Mitigation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Proactive risk identification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Automated threat detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Reduced compliance gaps</span>
                </li>
              </ul>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our SOC2 compliance automation platform is designed for organizations across 
              all industries that need to maintain security and compliance standards.
=======
      {/* Compliance Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform covers all SOC2 Trust Service Criteria with automated monitoring and controls.
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
=======
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">{area.title}</h3>
                <p className="text-gray-300 text-lg">{area.description}</p>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your SOC2 Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations that have streamlined their compliance processes with AI-powered 
            automation. Our expert team is ready to help you implement intelligent compliance solutions.
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the compliance automation revolution and transform your SOC2 audit process.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/cybersecurity"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Security Services
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
            </Link>
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-2xl p-12 text-center border border-red-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your compliance process with AI-powered automation, continuous monitoring, 
              and intelligent controls for seamless SOC2 compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
=======
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your SOC2 Compliance?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the compliance automation revolution and achieve SOC2 certification faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 rounded-lg font-semibold transition-all duration-300">
              Contact Sales
            </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-5b65
          </div>
=======
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your SOC2 compliance process with AI-powered automation and continuous monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Contact Sales
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
        </div>
      </section>
    </div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-red-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your SOC2 Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward automated compliance management today 
                and discover the unlimited potential of AI-powered compliance optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
        </section>
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ec46
=======
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">SOC 2 Trust Service Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{criteria.category}</h3>
                <ul className="space-y-2">
                  {criteria.controls.map((control, controlIndex) => (
                    <li key={controlIndex} className="text-sm text-gray-300">
                      • {control}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Integration & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{tool.name}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <ul className="mb-4 space-y-1">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Compliance?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join organizations that have reduced compliance costs by 60% and achieved 
              SOC 2 certification in record time with our automation platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services/cybersecurity"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More About Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-74a8
  );
}