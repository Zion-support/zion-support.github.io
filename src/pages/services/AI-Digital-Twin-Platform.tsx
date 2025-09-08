import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Cpu, Zap, Shield, Brain, Cloud, Database, Network, Activity,
  BarChart3, CheckCircle, ArrowRight, Star, Users, Globe, Lock,
  Eye, Sparkles, Rocket, Target, TrendingUp, DollarSign, Clock,
  Award, Lightbulb, Code, Server, Chip, Satellite, Leaf, Atom,
  Gamepad2, Coins, MessageCircle, BarChart, Settings, Palette,
  Workflow, Bot, ShieldCheck, Building2, Heart, ShoppingCart
} from 'lucide-react';

export default function AIDigitalTwinPlatform() {
  const features = [
    {
      title: "Real-time Simulation",
      description: "Live digital replicas with real-time data synchronization",
      icon: Activity,
      benefits: ["Instant updates", "Live monitoring", "Predictive modeling"]
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning insights for optimization and prediction",
      icon: Brain,
      benefits: ["Predictive maintenance", "Performance optimization", "Risk assessment"]
    },
    {
      title: "IoT Integration",
      description: "Seamless connection with sensors and devices",
      icon: Network,
      benefits: ["Sensor data", "Device management", "Protocol support"]
    },
    {
      title: "3D Visualization",
      description: "Immersive 3D models with interactive controls",
      icon: Eye,
      benefits: ["3D modeling", "Interactive controls", "VR/AR support"]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Production line optimization and predictive maintenance",
      icon: Cpu,
      examples: ["Equipment monitoring", "Quality control", "Energy optimization"]
    },
    {
      title: "Smart Cities",
      description: "Urban infrastructure management and planning",
      icon: Building2,
      examples: ["Traffic management", "Utility monitoring", "Urban planning"]
    },
    {
      title: "Healthcare",
      description: "Patient monitoring and treatment optimization",
      icon: Heart,
      examples: ["Patient tracking", "Treatment planning", "Resource optimization"]
    },
    {
      title: "Energy",
      description: "Grid optimization and renewable energy management",
      icon: Zap,
      examples: ["Grid monitoring", "Load balancing", "Renewable integration"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$3,000",
      period: "/month",
      description: "Perfect for small businesses exploring digital twins",
      features: [
        "Up to 5 digital twins",
        "Basic AI analytics",
        "Standard visualization",
        "Email support",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,500",
      period: "/month",
      description: "Ideal for growing enterprises with moderate digital twin needs",
      features: [
        "Up to 25 digital twins",
        "Advanced AI analytics",
        "3D visualization",
        "Priority support",
        "Custom dashboards",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$18,000",
      period: "/month",
      description: "For large organizations requiring maximum digital twin capabilities",
      features: [
        "Unlimited digital twins",
        "Custom AI models",
        "VR/AR support",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Digital Twin Platform - Zion Tech Group"
        description="Revolutionary AI-powered digital twin platform for real-time simulation, predictive analytics, and IoT integration. Transform your business with digital twins."
        keywords="AI digital twin, digital twin platform, IoT, real-time simulation, predictive analytics, 3D visualization"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              AI Digital Twin Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Twins
              <span className="block text-zion-cyan">Powered by AI</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Create intelligent digital replicas of your physical assets with real-time 
              data synchronization and AI-powered predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Twin Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform provides comprehensive digital twin functionality with 
              AI-powered insights and real-time monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how digital twins are transforming industries across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light">
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect plan for your digital twin needs. All plans include 
              our core digital twin capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark'
                    : 'bg-zion-purple/20 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Digital Twin?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that are already leveraging digital twins for 
              competitive advantage and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}