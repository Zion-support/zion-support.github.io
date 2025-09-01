import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Target, 
  TrendingUp, 
  Lock, 
  Eye, 
  BarChart3, 
  Cpu,
  Database,
  Network,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Settings,
  Code,
  Server,
  Cloud,
  AlertTriangle,
  Activity,
  MessageCircle,
  FileText,
  Palette,
  Smartphone,
  Wifi,
  Brain,
  Bug,
  Fingerprint,
  Key,
  Search,
  Monitor,
  AlertCircle,
  ShieldCheck,
  UserCheck,
  FileShield
} from 'lucide-react';

export function CybersecurityPage() {
  const securityServices = [
    {
      title: "Threat Detection & Response",
      description: "Advanced threat detection and automated response systems to protect your digital assets.",
      icon: Eye,
      features: ["Real-time Monitoring", "Automated Response", "Threat Intelligence", "Incident Management"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Zero Trust Security",
      description: "Implement zero trust architecture to ensure secure access to your systems and data.",
      icon: ShieldCheck,
      features: ["Identity Verification", "Access Control", "Network Segmentation", "Continuous Monitoring"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      icon: Bug,
      features: ["Vulnerability Assessment", "Social Engineering", "Physical Security", "Red Team Exercises"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Operations Center",
      description: "24/7 security monitoring and incident response to protect your organization.",
      icon: Monitor,
      features: ["24/7 Monitoring", "Incident Response", "Threat Hunting", "Security Analytics"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance & Governance",
      description: "Ensure compliance with industry standards and regulatory requirements.",
      icon: FileShield,
      features: ["GDPR Compliance", "SOC 2 Certification", "ISO 27001", "HIPAA Compliance"],
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Cloud Security",
      description: "Secure your cloud infrastructure and applications with enterprise-grade security.",
      icon: Cloud,
      features: ["Cloud Access Security", "Data Protection", "Identity Management", "Compliance Monitoring"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    {
      title: "Proactive Protection",
      description: "Identify and mitigate threats before they impact your business",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response",
      icon: Monitor,
      color: "text-green-400"
    },
    {
      title: "Compliance Ready",
      description: "Meet regulatory requirements and industry standards",
      icon: CheckCircle,
      color: "text-purple-400"
    },
    {
      title: "Cost Effective",
      description: "Prevent costly breaches and reduce security incidents",
      icon: DollarSign,
      color: "text-yellow-400"
    }
  ];

  const securityThreats = [
    {
      name: "Ransomware Attacks",
      description: "Malicious software that encrypts data and demands payment",
      icon: Lock,
      color: "text-red-400",
      severity: "Critical"
    },
    {
      name: "Phishing Scams",
      description: "Deceptive emails designed to steal sensitive information",
      icon: MessageCircle,
      color: "text-orange-400",
      severity: "High"
    },
    {
      name: "Data Breaches",
      description: "Unauthorized access to sensitive customer or business data",
      icon: Database,
      color: "text-yellow-400",
      severity: "Critical"
    },
    {
      name: "Insider Threats",
      description: "Security risks from employees or contractors",
      icon: UserCheck,
      color: "text-blue-400",
      severity: "Medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your digital assets with enterprise-grade cybersecurity solutions designed for the modern threat landscape
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center">
              Secure Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Security Assessment
            </button>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Cybersecurity Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Cybersecurity Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Threat Landscape */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Current Threat Landscape
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityThreats.map((threat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <threat.icon className={`w-8 h-8 ${threat.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{threat.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{threat.description}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    threat.severity === 'Critical' ? 'bg-red-600/20 text-red-400' :
                    threat.severity === 'High' ? 'bg-orange-600/20 text-orange-400' :
                    'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {threat.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Security Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Security Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Network Security</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Firewall management</li>
                <li>• Intrusion detection</li>
                <li>• VPN solutions</li>
                <li>• Network monitoring</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Data Protection</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Encryption at rest</li>
                <li>• Data loss prevention</li>
                <li>• Backup security</li>
                <li>• Access controls</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Fingerprint className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Identity Management</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Multi-factor authentication</li>
                <li>• Single sign-on</li>
                <li>• Privileged access</li>
                <li>• Identity governance</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-teal-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Cloud Security</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Cloud access security</li>
                <li>• API security</li>
                <li>• Container security</li>
                <li>• Cloud compliance</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Mobile Security</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Mobile device management</li>
                <li>• App security</li>
                <li>• BYOD policies</li>
                <li>• Mobile threat defense</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Search className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Threat Intelligence</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Threat monitoring</li>
                <li>• Vulnerability assessment</li>
                <li>• Security analytics</li>
                <li>• Incident response</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Security Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Financial Services</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">99.9% Threat Detection Rate</h3>
              <p className="text-gray-300 mb-4">
                Our advanced threat detection system helped a major bank achieve 99.9% threat detection rate 
                and reduce security incidents by 85%.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Implementation: 6 months</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">Healthcare</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero Data Breaches</h3>
              <p className="text-gray-300 mb-4">
                Our comprehensive security solution helped a healthcare provider maintain zero data breaches 
                while achieving full HIPAA compliance.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Implementation: 8 months</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Protect your digital assets with our comprehensive cybersecurity solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default CybersecurityPage;