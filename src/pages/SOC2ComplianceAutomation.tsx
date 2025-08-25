import React from 'react';
import { Link } from 'react-router-dom';
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

const SOC2ComplianceAutomation: React.FC = () => {
  const features = [
    {
      title: "Automated Compliance Monitoring",
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
  ];

  return (
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
            </div>
          </div>
        </section>

        {/* Features Section */}
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their compliance process with our automated platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SOC2ComplianceAutomation;