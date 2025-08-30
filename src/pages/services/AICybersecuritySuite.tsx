<<<<<<< HEAD
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '@/components/SEO';
import { Shield,
  Zap,
  Brain,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Database,
  Network,
  Server,
  Globe,
  Clock,
=======
import React from 'react.ts';
import { SEO               } from '../../components/SEO';
import { motion               } from 'framer-motion.ts';
import { Shield, 
  Brain, 
  Eye, 
  Lock, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  Zap,
  Users,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  BarChart3,
  Target,
  Cpu,
  Network,
  Database,
  FileText,
  Monitor,
  Activity
<<<<<<< HEAD
import { SEO              } from '@/components/SEO';
import { Button              } from '@/components/ui/button';
import { Badge              } from '@/components/ui/badge';
=======
 } from 'lucide-react';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function AICybersecuritySuite(...args[]: any):  {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that identify and respond to threats in real-time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
<<<<<<< HEAD
=======
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security with AI-driven access control",
      icon: Shield,
      benefits: [
        "Continuous authentication",
        "Micro-segmentation",
        "Least privilege access",
        "Real-time risk assessment"
      ]
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven security orchestration with automated threat containment and remediation",
      icon: Zap,
      benefits: [
        "Instant threat containment",
        "Automated remediation",
        "Incident timeline analysis",
        "Forensic investigation"
      ]
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance monitoring and reporting for all major regulatory frameworks",
      icon: CheckCircle,
<<<<<<< HEAD
      benefits: [
        "GDPR compliance",
        "SOC 2 automation",
        "HIPAA compliance",
        "Real-time audit trails"
      ]

=======
      benefits: [;
        "GDPR compliance",;
        "SOC 2 automation",;
        "HIPAA compliance",;
        "Real-time audit trails";
      ];
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const pricingPlans = [
    {
      name: "Security Starter",
      price: "$8,500",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic AI threat detection",
        "Up to 100 endpoints",
        "Standard security features",
        "Email support",
        "Basic compliance reporting",
        "Security dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Security Professional",
      price: "$18,500",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI threat detection",
        "Up to 500 endpoints",
        "Enhanced security suite",
        "Priority support",
        "Advanced compliance",
        "Custom integrations",
        "Performance optimization",
        "Security consulting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Security Enterprise",
      price: "$45,000",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Full security suite access",
        "Unlimited endpoints",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom security models",
<<<<<<< HEAD
        "White-label solutions",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false

=======
        "White-label solutions",;
        "On-premise deployment",;
        "SLA guarantees";
      ],;
      cta: "Contact Sales",;
      popular: false;
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: [
        "Fraud detection and prevention",
        "Regulatory compliance",
        "Secure transactions",
        "Risk assessment"
      ]
    },
    {
      industry: "Healthcare",
      applications: [
        "HIPAA compliance",
        "Patient data protection",
        "Medical device security",
        "Compliance monitoring"
      ]
    },
    {
      industry: "Manufacturing",
      applications: [
        "OT security",
        "Supply chain protection",
        "Intellectual property",
        "Industrial espionage prevention"
      ]
    },
    {
      industry: "Government",
<<<<<<< HEAD
      applications: [
        "Classified data protection",
        "National security",
        "Compliance automation",
        "Threat intelligence"
      ]

=======
      applications: [;
        "Classified data protection",;
        "National security",;
        "Compliance automation",;
        "Threat intelligence";
      ];
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const securityMetrics = [
    {
      title: "Threat Detection Rate",
      description: "AI-powered detection with machine learning",
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to detect anomalies and potential threats',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Zero-Day Protection',
      description: 'Protect against unknown threats using AI-powered predictive security models',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant automated threat response and incident containment without human intervention',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Comprehensive network monitoring and protection with AI-driven threat intelligence',
      color: 'from-red-500 to-pink-500'
    },
    {
<<<<<<< HEAD
      title: "Compliance Coverage",
      description: "Automated compliance for all major frameworks",
      icon: CheckCircle,
      metric: "100%"

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
=======
<<<<<<< HEAD
      icon: Database,
      title: 'Data Protection',
      description: 'Advanced encryption and data loss prevention with AI-powered monitoring',
      color: 'from-indigo-500 to-purple-500'
    };
=======;
      title: "Compliance Coverage",;
      description: "Automated compliance for all major frameworks",;
      icon: CheckCircle,;
      metric: "100%";
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const services = [
    {
      title: 'Threat Intelligence Platform',
      description: 'Real-time threat intelligence and analysis powered by AI',
      price: 'From $2,500/month',
      features['Global threat monitoring', 'AI-powered analysis', 'Custom threat feeds', '24/7 monitoring']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: 'AI-enhanced SOC services with automated threat detection and response',
      price: 'From $8,000/month',
      features['AI threat detection', 'Automated response', 'Security analysts', 'Incident management']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessment using AI-powered scanning and analysis',
      price: 'From $5,000',
      features['AI vulnerability scanning', 'Penetration testing', 'Security audit', 'Remediation plan']
    },
    {
      title: 'Compliance & Governance',
      description: 'AI-powered compliance monitoring and reporting for regulatory requirements',
      price: 'From $3,500/month',
      features['GDPR compliance', 'SOC 2 monitoring', 'HIPAA compliance', 'Automated reporting'];
    };
  ];

  const securityModules = [
    {
      title: 'Endpoint Protection',
      description: 'AI-powered endpoint security with behavioral analysis and threat prevention',
      features['Malware detection', 'Ransomware protection', 'Device control', 'Data encryption']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security monitoring and threat detection',
      features['Multi-cloud protection', 'API security', 'Data encryption', 'Access control']
    },
    {
      title: 'Identity & Access Management',
      description: 'AI-enhanced identity verification and access control systems',
      features['Multi-factor authentication', 'Behavioral biometrics', 'Privileged access management', 'Single sign-on']
    },
    {
      title: 'Incident Response',
      description: 'Automated incident response with AI-powered threat containment',
      features['Automated containment', 'Forensic analysis', 'Recovery procedures', 'Post-incident review'];
    };
  ];

  const benefits = [
    {
      title: 'Proactive Threat Prevention',
      description: 'Stop threats before they impact your business with AI-powered predictive security',
      icon: Shield
    },
    {
      title: 'Reduced False Positives',
      description: 'AI algorithms reduce false alarms by 90%, allowing security teams to focus on real threats',
      icon: CheckCircle
    },
    {
      title: '24/7 Automated Protection',
      description: 'Continuous security monitoring and automated response, even when your team is offline',
      icon: Monitor
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce security costs by 40% while improving protection through intelligent automation',
      icon: TrendingUp;
    };
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for threat detection and analysis' },
    { name: 'Natural Language Processing', description: 'AI-powered analysis of security logs and reports' },
    { name: 'Behavioral Analytics', description: 'User and system behavior monitoring for anomaly detection' },
    { name: 'Threat Intelligence', description: 'Real-time threat feeds and global security intelligence' },
    { name: 'Automated Response', description: 'Intelligent automation for threat containment and response' },;
    { name: 'Cloud-Native Security', description: 'Built for modern cloud and hybrid environments' };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        title="AI Cybersecurity Suite - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions that protect your business from evolving threats. Real-time threat detection, automated response, and comprehensive security monitoring."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
=======
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center"
<<<<<<< HEAD

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with next-generation AI-powered cybersecurity.
              Detect threats in real-time, automate incident response, and maintain
              compliance with zero-trust architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"

                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-600 text-red-400 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"

                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Next-generation cybersecurity powered by artificial intelligence. Protect your business from evolving threats with automated detection, response, and prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Protected
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Security Consultation
              </a>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/20 rounded-full blur-xl"></div>
      </section>

      {/* Security Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Unmatched Security Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Cybersecurity Suite delivers industry-leading security metrics
              that protect your business around the clock.
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index)              => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300 text-center"

                <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg mx-auto mb-4 w-fit">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl font-bold text-red-400 mb-2">{metric.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
=======
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Our AI Cybersecurity Suite combines cutting-edge artificial intelligence with
              proven security methodologies to deliver unmatched protection.
=======
              Our cybersecurity suite combines cutting-edge AI technology with industry-leading security practices to deliver unmatched protection
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)               => (
              <motion.div
                key={index}
<<<<<<< HEAD
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
=======
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300"
<<<<<<< HEAD

                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
=======
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Choose the security plan that best fits your business needs. All plans include
              our core AI-powered security capabilities with scalable protection.
=======
              Choose the security package that fits your business needs and budget
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {services.map((service, index)               => (
              <motion.div
                key={index}
<<<<<<< HEAD
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
=======
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-red-500 ring-2 ring-red-500/20'
                    : 'border-slate-700'
                }`}
<<<<<<< HEAD

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}

                  {plan.cta}
                </motion.button>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
=======
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Integrated Security Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Our AI Cybersecurity Suite is protecting businesses across industries,
              delivering enterprise-grade security with AI-powered intelligence.
=======
              Comprehensive security coverage across all aspects of your digital infrastructure
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {securityModules.map((module, index)               => (
              <motion.div
                key={index}
<<<<<<< HEAD
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
=======
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300"
<<<<<<< HEAD

                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {application}
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
                <p className="text-gray-300 mb-6">{module.description}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI-Powered Security?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of intelligent cybersecurity that adapts to your business needs
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {benefits.map((benefit, index)               => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and cybersecurity technologies for maximum protection
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index)               => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center"
=======
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust our AI Cybersecurity Suite to protect
              their digital assets and maintain compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"

                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"

                Contact Security Experts
              </motion.button>
=======
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Protect your business with AI-powered cybersecurity that adapts and evolves with threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Security Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
<<<<<<< HEAD
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
=======
                Contact Security Experts;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
