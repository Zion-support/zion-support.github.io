import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
  DollarSign,
  Eye,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Play,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  FileText,
  Calendar,
  UserCheck,
  TrendingDown,
  Percent,
  Clock,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Activity,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Calculator
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AICybersecurityThreatIntelligence = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and analyze cyber threats in real-time with 99.7% accuracy"
    },
    {
      icon: Eye,
      title: "Real-time Threat Intelligence",
      description: "Live monitoring of global threat landscape with instant alerts and predictive threat modeling"
    },
    {
      icon: Shield,
      title: "Zero-Day Vulnerability Protection",
      description: "AI-driven identification and protection against unknown threats before they can exploit systems"
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to threats within milliseconds, minimizing damage and downtime"
    },
    {
      icon: Globe,
      title: "Global Threat Correlation",
      description: "Cross-platform threat intelligence sharing and correlation across multiple organizations and industries"
    },
    {
      icon: Lock,
      title: "Advanced Encryption & Compliance",
      description: "Enterprise-grade security with SOC 2, ISO 27001, and GDPR compliance for maximum protection"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Threat Detection",
      value: "99.7%",
      description: "Unprecedented accuracy in identifying cyber threats"
    },
    {
      icon: TrendingDown,
      title: "Response Time",
      value: "<100ms",
      description: "Lightning-fast automated threat response"
    },
    {
      icon: Percent,
      title: "Risk Reduction",
      value: "85-95%",
      description: "Significant reduction in cybersecurity risks"
    },
    {
      icon: Clock,
      title: "Downtime Prevention",
      value: "99.9%",
      description: "Near-perfect uptime protection"
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299/mo',
      features: [
        'Up to 100 endpoints',
        'Basic AI threat detection',
        'Standard reporting',
        'Email support',
        'Daily threat updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/mo',
      features: [
        'Up to 1000 endpoints',
        'Advanced AI analytics',
        'Real-time threat alerts',
        'Priority support',
        'Custom dashboards',
        'API access',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499/mo',
      features: [
        'Unlimited endpoints',
        'Full AI threat intelligence',
        'Custom AI model training',
        'Dedicated security team',
        'Advanced compliance tools',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CISO",
      company: "GlobalTech Solutions",
      content: "The AI threat intelligence platform has transformed our security posture. We've reduced incident response time by 90% and prevented multiple zero-day attacks.",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      role: "Security Director",
      company: "FinTech Innovations",
      content: "Real-time threat correlation and AI-driven insights help us stay ahead of sophisticated cyber attacks. The ROI has been incredible.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "IT Security Manager",
      company: "Healthcare Systems Inc",
      content: "Compliance features and automated incident response have saved us countless hours. Our security team can now focus on strategic initiatives.",
      rating: 5
    }
  ];

  const integrations = [
    { name: "SIEM Systems", icon: Monitor, description: "Splunk, QRadar, ELK Stack" },
    { name: "Firewalls", icon: Shield, description: "Palo Alto, Cisco, Fortinet" },
    { name: "EDR Solutions", icon: Activity, description: "CrowdStrike, SentinelOne" },
    { name: "Cloud Platforms", icon: Cloud, description: "AWS, Azure, GCP" },
    { name: "Identity Providers", icon: UserCheck, description: "Okta, Azure AD, Ping" },
    { name: "Vulnerability Scanners", icon: AlertTriangle, description: "Nessus, Qualys, Rapid7" }
  ];

  const useCases = [
    "Financial Services Threat Protection",
    "Healthcare Data Security",
    "Manufacturing OT Security",
    "Government Cybersecurity",
    "Retail Payment Protection",
    "Education Institution Security"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Cybersecurity Threat Intelligence - Zion Tech Group"
        description="Advanced AI-powered cybersecurity threat intelligence platform. Real-time threat detection, automated response, and 99.7% accuracy. Start from $299/month."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2 text-red-400" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                AI Cybersecurity
              </span>
              <br />
              <span className="text-white">Threat Intelligence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Stay ahead of cyber threats with AI-powered intelligence that detects, analyzes, and responds to 
              security incidents in real-time with 99.7% accuracy and automated incident response.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-red-400/30 text-red-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-400/10 transition-all duration-300 flex items-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI cybersecurity can have on your security posture
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-red-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-red-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Advanced Security Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity capabilities powered by cutting-edge AI technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-red-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your security needs and budget
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                    <p className="text-gray-400">per month</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-red-400 hover:to-orange-400 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Trusted by Security Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what cybersecurity professionals are saying about our AI platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-red-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing security infrastructure and tools
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Industry Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for various industries and use cases
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-white/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white font-medium">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust our AI-powered threat intelligence platform 
              to protect their digital assets and stay ahead of evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-red-400/30 text-red-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-red-400 hover:text-red-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityThreatIntelligence;
