import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Cpu, 
  Rocket,
  DollarSign,
  ChartLine,
  Lock,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

export default function AIQuantumFinance() {
  const features = [
    {
      icon: Brain,
      title: "Quantum AI Trading Algorithms",
      description: "Advanced quantum computing-powered trading algorithms that process market data at unprecedented speeds",
      benefits: ["Sub-millisecond execution", "Quantum pattern recognition", "Multi-dimensional analysis"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Market Analytics",
      description: "AI-driven market forecasting using quantum-enhanced machine learning models",
      benefits: ["95%+ accuracy rate", "Real-time predictions", "Risk assessment"]
    },
    {
      icon: Shield,
      title: "Quantum-Secure Transactions",
      description: "Next-generation security protocols using quantum cryptography",
      benefits: ["Unbreakable encryption", "Quantum key distribution", "Future-proof security"]
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-fast trading execution with quantum computing optimization",
      benefits: ["Microsecond latency", "Scalable infrastructure", "Regulatory compliance"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$5,000",
      period: "/month",
      description: "Perfect for small trading firms",
      features: [
        "Basic quantum AI algorithms",
        "Market data feeds",
        "Standard security protocols",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "/month",
      description: "Ideal for growing financial institutions",
      features: [
        "Advanced quantum algorithms",
        "Real-time market analytics",
        "Quantum security suite",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$50,000",
      period: "/month",
      description: "For large-scale financial operations",
      features: [
        "Full quantum computing access",
        "Custom algorithm development",
        "Dedicated support team",
        "White-label solutions",
        "Regulatory compliance tools"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, Quantum Capital",
      content: "ZION's AI Quantum Finance platform has revolutionized our trading operations. The quantum algorithms provide insights we never had before.",
      rating: 5,
      company: "Quantum Capital"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Trading, Global Markets",
      content: "The predictive analytics accuracy is incredible. We've seen a 40% improvement in our trading performance since implementation.",
      rating: 5,
      company: "Global Markets"
    },
    {
      name: "Dr. Emily Watson",
      role: "Quantitative Analyst, FinTech Labs",
      content: "The quantum security features give us confidence in handling high-value transactions. Truly cutting-edge technology.",
      rating: 5,
      company: "FinTech Labs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-zion-cyan/30 to-zion-blue/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 px-4 py-2 rounded-full border border-zion-cyan/30 mb-6">
              <Brain className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">AI Quantum Finance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Quantum AI Finance
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Revolutionize your financial operations with the world's first quantum AI-powered trading and analytics platform. 
              Experience unprecedented speed, accuracy, and security in financial markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">40ms</div>
                <div className="text-zion-slate-light">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2">95%+</div>
                <div className="text-zion-slate-light">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">$2B+</div>
                <div className="text-zion-slate-light">Traded</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of financial technology with our cutting-edge quantum AI capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your financial institution's needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan scale-105' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'border-2 border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Trusted by Financial Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what industry experts say about our AI Quantum Finance platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-cyan">{testimonial.role}</div>
                    <div className="text-xs text-zion-slate-light">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Transform Your Finance?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the quantum revolution in financial technology. Start your free trial today and experience the future of AI-powered finance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            <div className="mt-8 text-zion-slate-light">
              <p>Questions? Contact our team at <span className="text-zion-cyan">kleber@ziontechgroup.com</span></p>
              <p>Or call us at <span className="text-zion-cyan">+1 302 464 0950</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}