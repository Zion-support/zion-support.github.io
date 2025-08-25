import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Zap, TrendingUp, Users, Globe, ArrowRight, Lock, FileText, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const SOC2ComplianceAutomation: React.FC = () => {
  const features = [
    {
      icon: Shield,
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
    }
  ];

  const benefits = [
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
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              </div>
            ))}
          </div>
        </div>
      </section>

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
              </div>
            ))}
          </div>
        </div>
      </section>

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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the compliance automation revolution and transform your SOC2 audit process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOC2ComplianceAutomation;