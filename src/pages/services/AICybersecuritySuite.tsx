import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  Eye, 
  Zap, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  BarChart3, 
  Globe, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Cpu,
  Network,
  Database,
  Key,
  Fingerprint,
  ShieldCheck,
  Activity,
  Clock,
  Calendar,
  DollarSign,
  CreditCard,
  Wallet
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Threat Detection",
    description: "Advanced machine learning algorithms that detect and analyze threats in real-time with 99.9% accuracy",
    benefits: ["Zero-day threat detection", "Behavioral analysis", "Pattern recognition", "Continuous learning"]
  },
  {
    icon: Eye,
    title: "Real-Time Security Monitoring",
    description: "24/7 comprehensive monitoring of your entire digital infrastructure with instant alerting",
    benefits: ["Live threat feeds", "Instant notifications", "Visual dashboards", "Custom alert rules"]
  },
  {
    icon: Zap,
    title: "Automated Incident Response",
    description: "Intelligent automation that responds to security incidents within seconds, not hours",
    benefits: ["Instant threat containment", "Automated remediation", "Playbook execution", "Response orchestration"]
  },
  {
    icon: Lock,
    title: "Compliance Management",
    description: "Automated compliance reporting for SOC 2, ISO 27001, GDPR, HIPAA, and other standards",
    benefits: ["Automated reporting", "Compliance dashboards", "Audit trail management", "Regulatory updates"]
  },
  {
    icon: ShieldCheck,
    title: "Vulnerability Assessment",
    description: "Continuous vulnerability scanning and assessment with prioritized remediation recommendations",
    benefits: ["Automated scanning", "Risk scoring", "Remediation guides", "Progress tracking"]
  },
  {
    icon: Users,
    title: "Security Awareness Training",
    description: "AI-powered security training programs that adapt to user behavior and knowledge gaps",
    benefits: ["Personalized learning", "Phishing simulations", "Progress tracking", "Compliance reporting"]
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: 199,
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "AI threat detection",
      "Basic security monitoring",
      "Email support",
      "Standard compliance reports",
      "Up to 100 endpoints",
      "Basic incident response"
    ],
    popular: false,
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Professional",
    price: 399,
    period: "month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Advanced AI threat detection",
      "Real-time monitoring",
      "Automated incident response",
      "Full compliance suite",
      "Up to 1000 endpoints",
      "Priority support",
      "Custom security policies",
      "Advanced analytics"
    ],
    popular: true,
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "Enterprise",
    price: 799,
    period: "month",
    description: "For large organizations with complex security needs",
    features: [
      "Enterprise AI security",
      "24/7 SOC monitoring",
      "Custom incident response",
      "Dedicated compliance manager",
      "Unlimited endpoints",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees"
    ],
    popular: false,
    color: "from-orange-600 to-red-600"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "85% Reduction in Security Incidents",
    description: "Our AI-powered platform prevents threats before they become incidents"
  },
  {
    icon: Clock,
    title: "Instant Response Times",
    description: "Automated responses within seconds, not hours or days"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Security",
    description: "Reduce security operations costs by up to 60%"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Protection",
    description: "Bank-level security with 99.9% uptime guarantee"
  }
];

const useCases = [
  {
    title: "Financial Services",
    description: "Protect customer data and meet strict regulatory requirements",
    icon: DollarSign,
    features: ["PCI DSS compliance", "Fraud detection", "Transaction monitoring", "Regulatory reporting"]
  },
  {
    title: "Healthcare",
    description: "Secure patient data and maintain HIPAA compliance",
    icon: Users,
    features: ["HIPAA compliance", "Patient data protection", "Medical device security", "Audit trails"]
  },
  {
    title: "E-commerce",
    description: "Protect customer transactions and prevent fraud",
    icon: ShoppingCart,
    features: ["Payment security", "Fraud prevention", "Customer data protection", "Compliance management"]
  },
  {
    title: "Enterprise",
    description: "Comprehensive security for large organizations",
    icon: Building,
    features: ["Multi-site security", "Custom policies", "Advanced analytics", "Dedicated support"]
  }
];

export default function AICybersecuritySuite() {
  return (
    <>
      <SEO 
        title="AI Cybersecurity Suite Pro - Zion Tech Group"
        description="Advanced AI-powered cybersecurity platform with threat detection, automated response, and compliance monitoring. Protect your business with intelligent security solutions."
        canonical="/services/ai-cybersecurity-suite"
        url="https://ziontechgroup.com/services/ai-cybersecurity-suite"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Security
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your business with intelligent threat detection, automated incident response, and comprehensive compliance monitoring powered by advanced AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                <Link to="/request-quote">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to Expert
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive cybersecurity suite combines cutting-edge AI technology with enterprise-grade security practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Cybersecurity Suite Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of cybersecurity with AI-powered protection that adapts and learns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for your industry's unique challenges and compliance requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' 
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'
                  }`}
                >
                  <Link to="/request-quote">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses that trust Zion Tech Group for their cybersecurity needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                <Link to="/request-quote">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-pink-500 mb-4" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-pink-500 mb-4" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-pink-500 mb-4" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}