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
              </div>
            ))}
          </div>
        </div>

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
                      {benefit}
                    </li>
                  ))}
                </ul>
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
    "Reduced compliance costs",
    "Faster audit preparation",
    "Continuous compliance monitoring",
    "Reduced manual effort",
    "Improved audit success rates",
    "Real-time compliance status"
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
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
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust our automated platform for seamless SOC2 compliance 
              and continuous audit readiness.
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your SOC2 compliance process with AI-powered automation. 
              Achieve and maintain compliance with intelligent monitoring, automated controls, and continuous auditing.
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
        </div>
      </section>

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
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your SOC2 Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations that have streamlined their compliance processes with AI-powered 
            automation. Our expert team is ready to help you implement intelligent compliance solutions.
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
