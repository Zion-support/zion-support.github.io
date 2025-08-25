import React from 'react';
import { Shield, CheckCircle, Zap, Target, ArrowRight, BarChart3, Lock, FileText } from 'lucide-react';

const SOC2ComplianceAutomation: React.FC = () => {
  const features = [
    {
      icon: Shield,
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
    {
      title: "Security Controls",
      description: "Automated monitoring of access controls, encryption, and security policies."
    },
    {
      title: "Availability Management",
      description: "Continuous monitoring of system availability and performance metrics."
    },
    {
      title: "Processing Integrity",
      description: "Validation of data processing accuracy and completeness."
    },
    {
      title: "Confidentiality Protection",
      description: "Monitoring of data protection and privacy controls."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

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
              </div>
            ))}
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOC2ComplianceAutomation;