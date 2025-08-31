import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Eye, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Server,
  Database,
  Network,
  Activity,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  Award,
  Rocket,
  Cpu,
  Fingerprint,
  Key,
  Monitor,
  Smartphone,
  Cloud,
  ShieldCheck,
  Bug,
  FileText,
  Code,
  Palette,
  Target,
  TrendingUp,
  Lightbulb,
  Heart,
  Sparkles,
  Play,
  Factory
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutonomousCybersecurityPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that continuously learn and adapt to new cyber threats in real-time."
    },
    {
      icon: Shield,
      title: "Autonomous Response System",
      description: "Self-healing security infrastructure that automatically responds to threats without human intervention."
    },
    {
      icon: Eye,
      title: "360° Security Monitoring",
      description: "Comprehensive monitoring across all endpoints, networks, and cloud environments with predictive analytics."
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Implements zero-trust security principles with continuous verification and least-privilege access."
    },
    {
      icon: Activity,
      title: "Behavioral Analytics",
      description: "AI-driven user and entity behavior analytics to detect anomalies and insider threats."
    },
    {
      icon: Network,
      title: "Network Traffic Analysis",
      description: "Deep packet inspection and network flow analysis for threat detection and prevention."
    }
  ];

  const benefits = [
    "99.9% threat detection accuracy with AI learning",
    "Real-time autonomous threat response",
    "Reduced security operations costs by 60%",
    "24/7 automated security monitoring",
    "Compliance with SOC2, ISO27001, GDPR",
    "Seamless integration with existing infrastructure"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "AI threat detection",
        "Basic autonomous response",
        "Up to 100 endpoints",
        "Email support",
        "Standard compliance reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing organizations",
      features: [
        "Advanced AI threat detection",
        "Full autonomous response",
        "Up to 500 endpoints",
        "Priority support",
        "Advanced compliance reports",
        "Custom security policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises",
      features: [
        "Enterprise-grade AI security",
        "Custom autonomous workflows",
        "Unlimited endpoints",
        "Dedicated security team",
        "Custom compliance frameworks",
        "API access & integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Protect sensitive financial data with AI-powered fraud detection and compliance automation.",
      icon: DollarSign
    },
    {
      title: "Healthcare",
      description: "Secure patient data with HIPAA-compliant autonomous security and threat prevention.",
      icon: Heart
    },
    {
      title: "Manufacturing",
      description: "Protect industrial systems with OT security and autonomous incident response.",
      icon: Factory
    },
    {
      title: "Government",
      description: "Secure critical infrastructure with autonomous cybersecurity and compliance management.",
      icon: Shield
    }
  ];

  return (
    <>
      <SEO 
        title="AI Autonomous Cybersecurity Platform | Zion Tech Group"
        description="Next-generation autonomous cybersecurity platform powered by AI. Real-time threat detection, autonomous response, and 99.9% accuracy. Protect your business with cutting-edge security technology."
        keywords="AI cybersecurity, autonomous security, threat detection, cybersecurity platform, AI security, cyber defense, security automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Autonomous Security
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Autonomous
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Cybersecurity</span>
                <br />Platform
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Experience the future of cybersecurity with our autonomous AI platform. 
                Real-time threat detection, intelligent response, and 99.9% accuracy - 
                all powered by cutting-edge artificial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rounded-full"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with autonomous capabilities 
                to provide unmatched cybersecurity protection.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Experience unprecedented security with autonomous AI that never sleeps, 
                never gets tired, and continuously improves.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the plan that fits your security needs. All plans include 
                our core AI-powered security features.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-zion-slate-dark border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-purple/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-zion-slate-light mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                        : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our platform is designed to meet the unique security challenges 
                of various industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-zion-slate-light">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join thousands of organizations that trust our AI-powered 
                autonomous cybersecurity platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}