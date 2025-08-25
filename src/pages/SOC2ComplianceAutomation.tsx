import React from 'react';
import { Link } from 'react-router-dom';
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

const SOC2ComplianceAutomation = () => {
  const features = [
    {
      icon: Shield,
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
    }
  ];

  const benefits = [
    "Reduced compliance costs",
    "Faster audit preparation",
    "Continuous compliance monitoring",
    "Reduced manual effort",
    "Improved audit success rates",
    "Real-time compliance status"
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              </div>
            ))}
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
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your SOC2 Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations that have streamlined their compliance processes with AI-powered 
            automation. Our expert team is ready to help you implement intelligent compliance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOC2ComplianceAutomation;