import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield
  Lock
  Eye
  AlertTriangle
  CheckCircle
  ArrowRight
  Zap
  Network
  Database
  Smartphone
  Monitor
  Globe
  Users
  Key
  Fingerprint
  Server
  Cloud
  ShieldCheck
  Bug
  Target
  TrendingUp
  Clock
  BarChart3
  CreditCard
} from "lucide-react"
export default function CybersecuritySolutions() {
  const [selectedThreat, setSelectedThreat] = useState('all')
  const [activeService, setActiveService] = useState('overview')
  const securityServices = [
    {
      ic,
  o: n: Shield,tit,
  l: e: "Threat Detection & Response",descripti,
  o: n: "Advanced security monitoring and incident response to protect against cyber threats",featur,
  e: s: ["24/7 Monitoring", "Real-time Alerts", "Incident Response", "Threat Intelligence"]
      col,
  o: r: "from-zion-red to-zion-orange"
    }, {
      ic,
  o: n: Lock,tit,
  l: e: "Identity & Access Management",descripti,
  o: n: "Secure authentication and authorization systems for your organization",featur,
  e: s: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Privilege Management"]
      col,
  o: r: "from-zion-blue to-zion-cyan"
    }, {
      ic,
  o: n: Eye,tit,
  l: e: "Security Auditing & Compliance",descripti,
  o: n: "Comprehensive security assessments and compliance management",featur,
  e: s: ["Vulnerability Assessment", "Penetration Testing", "Compliance Audits", "Risk Assessment"]
      col,
  o: r: "from-zion-purple to-zion-pink"
    }, {
      ic,
  o: n: Network,tit,
  l: e: "Network Security",descripti,
  o: n: "Protect your network infrastructure with advanced security measures",featur,
  e: s: ["Firewall Management", "Intrusion Prevention", "VPN Solutions", "Network Monitoring"]
      col,
  o: r: "from-zion-green to-zion-emerald"
    }, {
      ic,
  o: n: Database,tit,
  l: e: "Data Protection",descripti,
  o: n: "Safeguard sensitive data with encryption and backup solutions",featur,
  e: s: ["Data Encryption", "Backup & Recovery", "Data Loss Prevention", "Privacy Compliance"]
      col,
  o: r: "from-zion-yellow to-zion-orange"
    }, {
      ic,
  o: n: Cloud,tit,
  l: e: "Cloud Security",descripti,
  o: n: "Secure your cloud infrastructure and applications",featur,
  e: s: ["Cloud Access Security", "API Security", "Container Security", "Cloud Compliance"]
      col,
  o: r: "from-zion-indigo to-zion-purple"
    }
  ]
  const threatTypes = [
    { id: 'all', na,
  m: e: 'All Threats', ic,
  o: n: Shield }, { id: 'malware', na,
  m: e: 'Malware', ic,
  o: n: Bug }, { id: 'phishing', na,
  m: e: 'Phishing', ic,
  o: n: Target }, { id: 'ransomware', na,
  m: e: 'Ransomware', ic,
  o: n: Lock }, { id: 'ddos', na,
  m: e: 'DDoS Attacks', ic,
  o: n: Network }, { id: 'insider', na,
  m: e: 'Insider Threats', ic,
  o: n: Users }
  ]
  const securityThreats = [
    {
      tit,
  l: e: "Advanced Persistent Threats (APTs)",descripti,
  o: n: "Sophisticated, long-term cyber attacks targeting specific organizations"
      ty,
  p: e: "malware",impa,
  c: t: "High",solutio,
  n: s: ["Advanced Threat Detection", "Behavioral Analysis", "Network Segmentation", "Incident Response"]
      ic,
  o: n: Target
    }, {
      tit,
  l: e: "Ransomware Attacks",descripti,
  o: n: "Malicious software that encrypts data and demands payment for decryption",ty,
  p: e: "ransomware",impa,
  c: t: "Critical",solutio,
  n: s: ["Backup Solutions", "Email Security", "User Training", "Rapid Recovery"]
      ic,
  o: n: Lock
    }, {
      tit,
  l: e: "Social Engineering",descripti,
  o: n: "Manipulation tactics to trick users into revealing sensitive information",ty,
  p: e: "phishing",impa,
  c: t: "Medium",solutio,
  n: s: ["Security Awareness Training", "Email Filtering", "Multi-Factor Authentication", "Incident Reporting"]
      ic,
  o: n: Users
    }, {
      tit,
  l: e: "Distributed Denial of Service",descripti,
  o: n: "Overwhelming systems with traffic to disrupt services",ty,
  p: e: "ddos",impa,
  c: t: "Medium",solutio,
  n: s: ["DDoS Protection", "Traffic Filtering", "Load Balancing", "CDN Services"]
      ic,
  o: n: Network
    }, {
      tit,
  l: e: "Insider Threats",descripti,
  o: n: "Security risks from employees or contractors with access to systems",ty,
  p: e: "insider",impa,
  c: t: "High",solutio,
  n: s: ["Access Monitoring", "Privilege Management", "Behavioral Analytics", "Regular Audits"]
      ic,
  o: n: Shield
    }, {
      tit,
  l: e: "Zero-Day Exploits",descripti,
  o: n: "Unknown vulnerabilities exploited before security patches are available",ty,
  p: e: "malware",impa,
  c: t: "Critical",solutio,
  n: s: ["Threat Intelligence", "Vulnerability Management", "Security Monitoring", "Rapid Patching"]
      ic,
  o: n: Bug
    }
  ]
  const complianceFrameworks = [
    {
      na,
  m: e: "SOC 2 Type II",descripti,
  o: n: "Service Organization Control 2 compliance for data security",requiremen,
  t: s: ["Security", "Availability", "Processing Integrity", "Confidentiality", "Privacy"]
      ic,
  o: n: ShieldCheck
    }, {
      na,
  m: e: "ISO 27001",descripti,
  o: n: "International standard for information security management",requiremen,
  t: s: ["Risk Assessment", "Security Controls", "Management System", "Continuous Improvement"]
      ic,
  o: n: CheckCircle
    }, {
      na,
  m: e: "GDPR",descripti,
  o: n: "General Data Protection Regulation for EU data privacy",requiremen,
  t: s: ["Data Protection", "User Consent", "Right to Erasure", "Data Portability"]
      ic,
  o: n: Lock
    }, {
      na,
  m: e: "HIPAA",descripti,
  o: n: "Health Insurance Portability and Accountability Act",requiremen,
  t: s: ["Patient Privacy", "Data Security", "Access Controls", "Audit Trails"]
      ic,
  o: n: Database
    }, {
      na,
  m: e: "PCI DSS",descripti,
  o: n: "Payment Card Industry Data Security Standard",requiremen,
  t: s: ["Card Data Protection", "Network Security", "Access Control", "Monitoring"]
      ic,
  o: n: CreditCard
    }, {
      na,
  m: e: "NIST Cybersecurity Framework",descripti,
  o: n: "U.S. government framework for cybersecurity risk management",requiremen,
  t: s: ["Identify", "Protect", "Detect", "Respond", "Recover"]
      ic,
  o: n: BarChart3
    }
  ]
  const securityMetrics = [
    { metr,
  i: c: "99.9%", lab,
  e: l: "Uptime Protection", descripti,
  o: n: "Continuous security monitoring and protection" }, { metr,
  i: c: "<1hr", lab,
  e: l: "Response Time", descripti,
  o: n: "Average time to detect and respond to threats" }, { metr,
  i: c: "0", lab,
  e: l: "Data Breaches", descripti,
  o: n: "Successful breaches prevented for our clients" }, { metr,
  i: c: "24/7", lab,
  e: l: "Security Coverage", descripti,
  o: n: "Round-the-clock security operations" }
  ]
  const const containerVariants = { = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.1
      }
    }
  }
  const const itemVariants = { = {
    hidd,
  e: n: { opacit,
  y: 0, y: 20 }
    visib,
  l: e: {
      opacit,
  y: 1,y: 0,transiti,
  o: n: { duratio,
  n: 0.6 }
    }
  }
  const filteredThreats = selectedThreat === 'all'
    ? securityThreats
    : securityThreats.filter(threat => threat.type === selectedThreat)

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-red-dark to-zion-red overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-red rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-orange rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-red to-zion-orange rounded-2xl flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-6xl,
  m: d:text-7xl font-bold text-white mb-8 leading-tight">
              Cybersecurity{' '}
              <span className="bg-gradient-to-r from-zion-red to-zion-orange bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Protect your business with enterprise-grade cybersecurity solutions.
              From threat detection to compliance management, we keep you secure in an evolving digital landscape.
            </p>

            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button
                className="className="px-8 py-4 bg-gradient-to-r from-zion-red to-zion-orange text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-red/25";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                Security Assessment
              </motion.button>
              <button className="px-8 py-4 border border-zion-red text-zion-red rounded-xl font-semibold text-lg,
  hove: r: bg-zion-red hove,
  r:text-white transition-all duration-300">
                View Security Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Services Overview */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity solutions provide end-to-end protection for your digital assets
              ensuring business continuity and regulatory compliance.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                className="className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8,
  hove: r:border-zion-cyan/40 transition-all duration-300 group";"
                variants={itemVariants}
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Understanding Cyber Threats
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity threats and learn how our solutions
              protect against evolving attack vectors.
            </p>
          </motion.div>

          {/* Threat Filter */}
          <motion.div
            className="className="flex flex-wrap justify-center gap-4 mb-12";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            {threatTypes.map((threat) () => {
              const Icon = threat.icon
              return (
                <button
                  key={threat.id}
                  onClick={onClick={() => setSelectedThreat(threat.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedThreat === threat.id
                      ? 'bg-zion-red text-white shadow-lg shadow-zion-red/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light,
  hove: r: bg-zion-slate-dark hove,
  r:text-white border border-zion-red/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {threat.name}
                </button>
              )
            })}
          </motion.div>

          {/* Threats Grid */}
          <motion.div
            className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {filteredThreats.map((threat, index) => (
              <motion.div
                key={index}
                className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
                variants={itemVariants}
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-red to-zion-orange rounded-xl flex items-center justify-center">
                      <threat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{threat.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    threat.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    threat.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {threat.impact}
                  </span>
                </div>

                <p className="text-zion-slate-light mb-4 leading-relaxed">{threat.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Protection,
  Solution: s:</h4>
                  <ul className="space-y-1">
                    {threat.solutions.map((solution, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Compliance & Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our comprehensive
              compliance management solutions.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                className="className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 group";"
                variants={itemVariants}
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300">
                  <framework.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{framework.name}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{framework.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Key,
  Requirement: s:</h4>
                  <ul className="space-y-1">
                    {framework.requirements.map((req, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-gradient-to-r from-zion-red-dark to-zion-orange">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Security Performance Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity solutions deliver measurable results and provide
              peace of mind through proven protection capabilities.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="className="text-center";"
                variants={itemVariants}
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-white">{metric.metric}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.label}</h3>
                <p className="text-zion-slate-light">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="className="text-center mb-16";"
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Our Security Implementation Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A systematic approach to implementing comprehensive cybersecurity solutions
              that protect your business from evolving threats.
            </p>
          </motion.div>

          <motion.div
            className="className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8";"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={ on,
  c: e: true }
          >
            {[
              {
                st,
  e: p: "01",tit,
  l: e: "Security Assessment",descripti,
  o: n: "Evaluate current security posture and identify vulnerabilities",ic,
  o: n: Eye
              }, {
                st,
  e: p: "02",tit,
  l: e: "Strategy Development",descripti,
  o: n: "Design comprehensive security roadmap and policies",ic,
  o: n: Target
              }, {
                st,
  e: p: "03",tit,
  l: e: "Implementation",descripti,
  o: n: "Deploy security solutions and configure protection systems",ic,
  o: n: Shield
              }, {
                st,
  e: p: "04",tit,
  l: e: "Monitoring & Maintenance",descripti,
  o: n: "Continuous security monitoring and regular updates",ic,
  o: n: Monitor
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="className="relative";"
                variants={itemVariants}
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-red to-zion-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zion-red mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{phase.description}</p>
                </div>

                {index < 3 && (
                  <div className="hidden,
  l: g:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-zion-red" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-red-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Let's discuss how our cybersecurity solutions
              can protect your organization from evolving threats.
            </p>

            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button
                className="className="px-8 py-4 bg-gradient-to-r from-zion-red to-zion-orange text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-red/25";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                Security Assessment
              </motion.button>
              <button className="px-8 py-4 border border-zion-red text-zion-red rounded-xl font-semibold text-lg,
  hove: r: bg-zion-red hove,
  r:text-white transition-all duration-300">
                Download Security Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}