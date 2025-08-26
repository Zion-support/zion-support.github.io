import React from 'react';
import { Link } from 'react-router-dom';

const Soc2ComplianceAutomation: React.FC = () => {
  const features = [
    {
      title: "Automated Monitoring",
      description: "Continuous monitoring of security controls and compliance status",
      icon: "🔍"
    },
    {
      title: "Evidence Collection",
      description: "Automated collection and validation of compliance evidence",
      icon: "📋"
    },
    {
      title: "Risk Assessment",
      description: "AI-powered risk identification and mitigation recommendations",
      icon: "⚠️"
    },
    {
      title: "Audit Preparation",
      description: "Automated report generation and audit preparation",
      icon: "📊"
    }
  ];

  const soc2Criteria = [
    {
      principle: "Security",
      description: "Protection against unauthorized access and security incidents",
      controls: ["Access controls", "Network security", "Vulnerability management", "Incident response"]
    },
    {
      principle: "Availability",
      description: "System availability and business continuity",
      controls: ["Backup and recovery", "Disaster recovery", "Performance monitoring", "Capacity planning"]
    },
    {
      principle: "Processing Integrity",
      description: "Data processing accuracy and completeness",
      controls: ["Data validation", "Error handling", "Processing controls", "Quality assurance"]
    },
    {
      principle: "Confidentiality",
      description: "Protection of confidential information",
      controls: ["Data classification", "Encryption", "Access controls", "Data handling"]
    },
    {
      principle: "Privacy",
      description: "Personal information protection and privacy controls",
      controls: ["Data minimization", "Consent management", "Data retention", "Privacy by design"]
    }
  ];

  const automationBenefits = [
    {
      title: "Time Savings",
      description: "Reduce manual compliance tasks by 80%",
      metric: "80%"
    },
    {
      title: "Cost Reduction",
      description: "Lower compliance costs and audit preparation time",
      metric: "60%"
    },
    {
      title: "Risk Mitigation",
      description: "Proactive identification and resolution of compliance gaps",
      metric: "90%"
    },
    {
      title: "Continuous Compliance",
      description: "24/7 monitoring and real-time compliance status",
      metric: "24/7"
    }
  ];

  const complianceTools = [
    {
      category: "Control Monitoring",
      tools: ["Real-time dashboards", "Automated alerts", "Control testing", "Exception reporting"]
    },
    {
      category: "Evidence Management",
      tools: ["Automated collection", "Evidence validation", "Documentation management", "Audit trails"]
    },
    {
      category: "Risk Management",
      tools: ["Risk assessment", "Vulnerability scanning", "Threat modeling", "Mitigation tracking"]
    },
    {
      category: "Reporting & Analytics",
      tools: ["Compliance reports", "Trend analysis", "Gap analysis", "Executive dashboards"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SOC 2
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Compliance Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your SOC 2 compliance journey with our automated platform. 
              Continuous monitoring, automated evidence collection, and real-time 
              compliance insights to maintain your SOC 2 certification effortlessly.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Automated Compliance Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* SOC 2 Criteria */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">SOC 2 Trust Service Criteria</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {soc2Criteria.map((criteria, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{criteria.principle}</h3>
                  <p className="text-gray-300 mb-4">{criteria.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Controls:</h4>
                    {criteria.controls.map((control, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {control}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Automation Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Compliance Tools</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceTools.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Implementation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate current compliance status and requirements</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Setup</h3>
                <p className="text-gray-300 text-sm">Configure automated monitoring and control systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Integration</h3>
                <p className="text-gray-300 text-sm">Integrate with existing systems and processes</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Continuous improvement and optimization</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Compliance Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Compliance Status</h3>
                  <p className="text-gray-300 text-sm">Real-time view of your SOC 2 compliance status</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Control Monitoring</h3>
                  <p className="text-gray-300 text-sm">Monitor all security controls in real-time</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Evidence Management</h3>
                  <p className="text-gray-300 text-sm">Automated evidence collection and validation</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">SaaS Companies</h3>
                <p className="text-gray-300 text-sm">Maintain SOC 2 compliance for customer trust</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Services</h3>
                <p className="text-gray-300 text-sm">Meet regulatory requirements and security standards</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
                <p className="text-gray-300 text-sm">Ensure HIPAA compliance and data security</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Automate Your SOC 2 Compliance?</h3>
              <p className="text-gray-300 mb-6">
                Streamline your compliance process, reduce manual work, and maintain 
                continuous SOC 2 compliance with our automated platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Compliance Assessment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soc2ComplianceAutomation;