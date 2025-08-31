import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Cloud,
  Target,
  Globe,
  Phone,
  Mail,
  MapPin,
  Settings,
  Monitor,
  CheckSquare,
  FileText,
  Calendar,
  MessageSquare,
  Video,
  Camera,
  Mic,
  Activity,
  Zap,
  Brain,
  Users,
  BarChart3,
  Rocket,
  Server,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  PhoneCall,
  VideoCall,
  MailOpen,
  Send,
  Plus,
  Minus
} from 'lucide-react';

const AICybersecurityPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const securityFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time with 99.9% accuracy.",
      benefits: ["Zero-day threat detection", "Behavioral analysis", "Automated response", "False positive elimination"]
    },
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security model with continuous verification and least-privilege access.",
      benefits: ["Continuous authentication", "Micro-segmentation", "Identity verification", "Access control"]
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security operations center with AI-powered threat hunting and incident response.",
      benefits: ["Real-time monitoring", "Proactive threat hunting", "Instant alerts", "Rapid response"]
    },
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "Military-grade encryption for data at rest and in transit with quantum-resistant algorithms.",
      benefits: ["AES-256 encryption", "Quantum-resistant crypto", "Key management", "Compliance ready"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection with next-generation firewalls and intrusion prevention.",
      benefits: ["Next-gen firewalls", "IPS/IDS", "DDoS protection", "Traffic analysis"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Multi-cloud security with automated compliance monitoring and threat prevention.",
      benefits: ["Multi-cloud support", "Compliance automation", "Threat prevention", "Security posture"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses requiring basic cybersecurity protection",
      features: [
        "Basic threat detection",
        "Up to 10 endpoints",
        "Email security",
        "Basic firewall",
        "Security awareness training",
        "24/7 monitoring",
        "Incident response",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with advanced security requirements",
      features: [
        "Advanced AI threat detection",
        "Up to 100 endpoints",
        "Advanced email security",
        "Next-gen firewall",
        "Advanced training modules",
        "24/7 SOC support",
        "Automated response",
        "Weekly reports",
        "Compliance tools",
        "Vulnerability scanning"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large enterprises requiring maximum security and customization",
      features: [
        "Custom AI models",
        "Unlimited endpoints",
        "Enterprise integrations",
        "Custom training",
        "Dedicated security team",
        "Custom compliance",
        "Advanced analytics",
        "White-label solution",
        "On-premise deployment",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const securitySolutions = [
    {
      industry: "Healthcare",
      solutions: [
        "HIPAA compliance automation",
        "Patient data protection",
        "Medical device security",
        "Phishing prevention",
        "Access control management"
      ]
    },
    {
      industry: "Finance",
      solutions: [
        "PCI DSS compliance",
        "Fraud detection systems",
        "Transaction monitoring",
        "Regulatory reporting",
        "Risk assessment tools"
      ]
    },
    {
      industry: "Manufacturing",
      solutions: [
        "OT security protection",
        "Supply chain security",
        "Intellectual property protection",
        "Industrial IoT security",
        "Production line security"
      ]
    },
    {
      industry: "Government",
      solutions: [
        "FedRAMP compliance",
        "Classified data protection",
        "Threat intelligence sharing",
        "Critical infrastructure security",
        "Compliance automation"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: "ISO 27001",
      description: "Information Security Management System",
      status: "Certified"
    },
    {
      name: "SOC 2 Type II",
      description: "Security, Availability, Processing Integrity",
      status: "Certified"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      status: "Compliant"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability",
      status: "Compliant"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant"
    },
    {
      name: "FedRAMP",
      description: "Federal Risk and Authorization Management Program",
      status: "Authorized"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      position: "CISO, SecureBank",
      company: "SecureBank",
      content: "Zion Tech Group's cybersecurity platform has transformed our security posture. We've reduced security incidents by 95% and achieved full compliance with all regulatory requirements.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      position: "Security Director, HealthTech Inc",
      company: "HealthTech Inc",
      content: "The AI-powered threat detection is incredible. We've prevented multiple sophisticated attacks and our security team can now focus on strategic initiatives.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      position: "CTO, Manufacturing Corp",
      company: "Manufacturing Corp",
      content: "Implementing this platform secured our entire production infrastructure. The OT security features are exactly what we needed for our manufacturing environment.",
      rating: 5
    }
  ];

  const threatStats = [
    { metric: "Threats Blocked", value: "2.5M+", description: "Daily threat prevention" },
    { metric: "Response Time", value: "<30s", description: "Average incident response" },
    { metric: "False Positives", value: "0.01%", description: "Industry-leading accuracy" },
    { metric: "Uptime", value: "99.99%", description: "Security service availability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {' '}Cybersecurity Platform
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Protect your business with the most advanced AI-driven cybersecurity platform. 
                Detect, prevent, and respond to threats with unprecedented speed and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-red-400 hover:text-red-400 transition-all duration-300"
                >
                  Security Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {threatStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.metric}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive protection powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet all regulatory requirements with our certified security platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{framework.name}</h3>
                <p className="text-slate-300 mb-4">{framework.description}</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {framework.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Security Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-red-400 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === 'Enterprise' ? '/contact' : '#contact'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored security solutions for your industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={solution.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.industry}</h3>
                <ul className="space-y-3">
                  {solution.solutions.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from organizations we protect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.position}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Don't wait until it's too late. Protect your organization with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-red-400 hover:text-red-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Security Experts at Your Service
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact our security team for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Emergency Hotline</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Security Team</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform;