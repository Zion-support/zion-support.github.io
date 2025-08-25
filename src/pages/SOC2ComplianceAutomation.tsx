import React from 'react';
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

const SOC2ComplianceAutomation: React.FC = () => {
  // Custom icons for Trust Service Criteria
  const Security = () => <Shield className="w-8 h-8 text-green-400" />;
  const Availability = () => <CheckSquare className="w-8 h-8 text-blue-400" />;
  const ProcessingIntegrity = () => <Cpu className="w-8 h-8 text-purple-400" />;
  const Confidentiality = () => <Lock className="w-8 h-8 text-orange-400" />;
  const Privacy = () => <Eye className="w-8 h-8 text-pink-400" />;

  const features = [
    {
      icon: Shield,
      title: "Automated Compliance Monitoring",
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
      description: "Comprehensive security control implementation and monitoring for all SOC2 Trust Service Criteria."
    },
    {
      icon: Rocket,
      title: "Audit Preparation",
      description: "Automated evidence collection, report generation, and audit preparation for seamless compliance."
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
    }
  ];

  const benefits = [
    "Automated compliance monitoring and reporting",
    "Reduced audit preparation time by 80%",
    "Continuous risk assessment and mitigation",
    "Centralized policy and control management",
    "Real-time compliance status visibility",
    "Streamlined evidence collection and documentation"
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
  ];

  return (
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
              SOC2 Compliance
              <span className="block bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Streamline your SOC2 compliance journey with AI-powered automation. Monitor compliance, 
              assess risks, and prepare for audits with unprecedented efficiency and accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

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
  );
};

export default SOC2ComplianceAutomation;