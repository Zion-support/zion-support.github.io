import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Brain, 
  Activity, 
  AlertTriangle, 
  Eye, 
  Zap, 
  Lock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  Target,
  PieChart,
  Clock,
  Users,
  Database,
  Smartphone,
  Globe2,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Heart,
  DollarSign,
  Calendar,
  Database as DatabaseIcon,
  Smartphone as SmartphoneIcon,
  Globe2 as Globe2Icon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  MessageSquare as MessageSquareIcon,
  Clock as ClockIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Award as AwardIcon,
  Target as TargetIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  UserCheck,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Calendar as CalendarIcon,
  Lock as LockIcon
} from 'lucide-react';

export default function AIThreatIntelligencePlatform() {
  const features = [
    {
      icon: Brain,
      title: "Real-time Threat Detection",
      description: "AI-powered threat detection that identifies and analyzes security threats in real-time with 99.9% accuracy."
    },
    {
      icon: Shield,
      title: "AI-powered Threat Analysis",
      description: "Advanced machine learning algorithms that analyze threat patterns and provide intelligent insights."
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Automated response workflows that contain and remediate threats within seconds of detection."
    },
    {
      icon: Eye,
      title: "Threat Intelligence Feeds",
      description: "Comprehensive threat intelligence from multiple sources including dark web monitoring and global threat feeds."
    },
    {
      icon: Activity,
      title: "Vulnerability Assessment",
      description: "Continuous vulnerability scanning and assessment with prioritized remediation recommendations."
    },
    {
      icon: BarChart3,
      title: "Security Posture Monitoring",
      description: "Real-time monitoring of your organization's security posture with actionable improvement insights."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Reduce Incident Response Time by 70%",
      description: "Automated workflows and AI insights enable faster threat containment and resolution."
    },
    {
      icon: Shield,
      title: "Improve Threat Detection Accuracy by 85%",
      description: "AI algorithms reduce false positives and identify sophisticated threats that traditional tools miss."
    },
    {
      icon: Zap,
      title: "Automate 60% of Security Operations",
      description: "Eliminate manual tasks and focus security teams on high-value strategic activities."
    },
    {
      icon: CheckCircle,
      title: "Ensure Compliance with Regulations",
      description: "Built-in compliance reporting for SOC 2, ISO 27001, FedRAMP, and other security standards."
    },
    {
      icon: DollarSign,
      title: "Reduce Security Costs by 40%",
      description: "Automation and AI efficiency reduce operational costs while improving security outcomes."
    }
  ];

  const useCases = [
    {
      title: "Enterprise Security Operations",
      description: "Comprehensive security monitoring and incident response for large enterprise environments."
    },
    {
      title: "SOC Management",
      description: "Streamline Security Operations Center workflows with AI-powered automation and insights."
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous compliance monitoring and automated reporting for regulatory requirements."
    },
    {
      title: "Incident Response",
      description: "Rapid incident response with automated containment and remediation workflows."
    },
    {
      title: "Security Awareness Training",
      description: "Integrated security awareness training with personalized learning paths and progress tracking."
    }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$3,999",
      period: "/month",
      description: "Perfect for mid-size organizations",
      features: [
        "Up to 1,000 endpoints",
        "Basic threat detection",
        "Standard incident response",
        "Email support",
        "Core security dashboard",
        "Basic compliance reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "/month",
      description: "Ideal for large enterprises",
      features: [
        "Up to 10,000 endpoints",
        "Advanced AI algorithms",
        "Custom incident response",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "Custom integrations",
        "Advanced compliance features"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Ultimate",
      price: "$12,999",
      period: "/month",
      description: "For critical infrastructure",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "White-label solutions",
        "Dedicated security manager",
        "Custom threat feeds",
        "Advanced security features",
        "SLA guarantees",
        "24/7 dedicated support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = {
    technology: ["Python", "TensorFlow", "Elasticsearch", "React", "Kubernetes"],
    integrations: ["SIEM systems", "EDR solutions", "Firewall APIs", "Cloud security tools"],
    apiEndpoints: 300,
    uptime: "99.99%",
    security: ["SOC 2 Type II", "ISO 27001", "FedRAMP", "Zero-trust architecture"]
  };

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "FedRAMP",
    "NIST Cybersecurity Framework",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "SOX"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Threat Intelligence & Security Operations Platform - Zion Tech Group"
        description="Advanced cybersecurity platform that uses AI to detect, analyze, and respond to security threats in real-time, providing comprehensive threat intelligence and automated incident response."
        canonical="/services/ai-threat-intelligence-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Threat Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced cybersecurity platform that uses AI to detect, analyze, and respond to security threats in real-time, providing comprehensive threat intelligence and automated incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-gray-300">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
              <div className="text-gray-300">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-300">Comprehensive threat intelligence and automated response capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transform Your Security Operations</h2>
            <p className="text-xl text-gray-300">See measurable improvements in your security posture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-gray-300">Ideal solutions for various security scenarios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Compliance Standards</h2>
            <p className="text-xl text-gray-300">Meet and exceed regulatory requirements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur border border-yellow-500/20 rounded-lg p-4 text-center hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="text-yellow-400 font-semibold">{standard}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Security Pricing</h2>
            <p className="text-xl text-gray-300">Choose the security level that fits your organization</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-red-500/50 bg-gradient-to-b from-red-500/10 to-transparent' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white'
                    : 'border border-red-500 text-red-400 hover:bg-red-500 hover:text-white'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-300">Built with enterprise-grade security technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Technology Stack</h3>
              <div className="space-y-2">
                {technicalSpecs.technology.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Integrations</h3>
              <div className="space-y-2">
                {technicalSpecs.integrations.map((integration, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Performance & Security</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{technicalSpecs.apiEndpoints} API Endpoints</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{technicalSpecs.uptime} Uptime</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Zero-trust Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Organization?</h2>
            <p className="text-xl text-gray-300">Get in touch with our security experts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-red-400 mr-3" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Market Price:</span>
                  <span className="text-white font-semibold">$3,999 - $12,999/month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">ROI:</span>
                  <span className="text-white font-semibold">400-600%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Delivery:</span>
                  <span className="text-white font-semibold">12-16 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Support:</span>
                  <span className="text-white font-semibold">Enterprise</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/request-quote" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Request Security Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}