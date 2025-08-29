import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Server,
  Network,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Satellite,
  Router,
  HardDrive,
  Activity
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function EdgeComputingPlatform() {
  const features = [
    {
      icon: Cpu,
      title: "Distributed Edge Nodes",
      description: "Deploy computing resources closer to data sources for ultra-low latency processing"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Process data at the edge for instant insights and immediate decision-making"
    },
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Worldwide infrastructure with automatic failover and load balancing"
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols with encrypted data transmission and access control"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Auto-scaling edge nodes based on demand and performance requirements"
    },
    {
      icon: Users,
      title: "Multi-tenant Support",
      description: "Isolated environments for different applications and organizations"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Reduce response times by up to 90% with edge processing",
      metric: "90%"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Deploy across 50+ countries with automatic routing optimization",
      metric: "50+"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Reduce bandwidth costs by processing data locally at the edge",
      metric: "60%"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Local data processing reduces exposure and improves privacy",
      metric: "100%"
    }
  ];

  const useCases = [
    {
      title: "IoT & Smart Cities",
      description: "Process sensor data locally for real-time traffic management and environmental monitoring",
      icon: Smartphone
    },
    {
      title: "Content Delivery",
      description: "Deliver media content with minimal latency for streaming and gaming applications",
      icon: Monitor
    },
    {
      title: "Financial Trading",
      description: "Ultra-low latency processing for high-frequency trading and real-time analytics",
      icon: TrendingUp
    },
    {
      title: "Healthcare IoT",
      description: "Process medical device data locally for immediate patient monitoring and alerts",
      icon: Activity
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small applications and development teams",
      features: [
        "Up to 5 edge nodes",
        "Basic monitoring",
        "Standard support",
        "100GB bandwidth",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for production applications with moderate traffic",
      features: [
        "Up to 25 edge nodes",
        "Advanced monitoring",
        "Priority support",
        "1TB bandwidth",
        "Advanced analytics",
        "24/7 support",
        "Custom domains"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale deployments with custom requirements",
      features: [
        "Unlimited edge nodes",
        "Custom monitoring",
        "Dedicated support",
        "Unlimited bandwidth",
        "Custom analytics",
        "SLA guarantees",
        "On-premise options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="Edge Computing Platform - Zion Tech Group"
        description="Deploy computing resources closer to your users with our global edge computing platform. Reduce latency, improve performance, and scale globally."
        canonical="/services/edge-computing-platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Global Edge Computing
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Edge Computing
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Platform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Deploy computing resources closer to your users worldwide. Reduce latency, improve performance, and scale globally with our intelligent edge computing platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Edge Computing?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your applications with distributed computing that brings resources closer to your users
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See the measurable impact of edge computing on your application performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Powerful Use Cases</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how edge computing can transform your applications and user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-slate-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Map */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Global Edge Network</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deploy your applications across our worldwide infrastructure for optimal performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">50+ Countries</h3>
              <p className="text-slate-300">Global presence with edge nodes in major metropolitan areas</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">&lt;10ms Latency</h3>
              <p className="text-slate-300">Ultra-low latency for real-time applications and gaming</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">99.99% Uptime</h3>
              <p className="text-slate-300">Enterprise-grade reliability with automatic failover</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your edge computing needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-purple-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Global?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join leading companies already using edge computing to deliver superior user experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}