import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Brain, 
  Zap, 
  Cpu, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Monitor,
  Clock,
  DollarSign,
  Star,
  Award,
  Rocket,
  Smartphone,
  Cloud,
  Target,
  TrendingUp,
  Lightbulb,
  Heart,
  Sparkles,
  Play,
  BarChart3,
  Activity,
  Network,
  Database,
  Shield,
  Gauge,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  Code,
  Palette,
  Wrench,
  Cog,
  HardDrive,
  Layers,
  Workflow,
  Eye,
  Lock,
  Key,
  Server,
  Car,
  Pill,
  Utensils
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIAutonomousManufacturingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Production Optimization",
      description: "Advanced machine learning algorithms that continuously optimize production processes for maximum efficiency and quality."
    },
    {
      icon: Factory,
      title: "Autonomous Manufacturing Lines",
      description: "Self-operating production lines with intelligent quality control and predictive maintenance capabilities."
    },
    {
      icon: Cpu,
      title: "Smart IoT Integration",
      description: "Seamless integration with IoT sensors and devices for real-time monitoring and control."
    },
    {
      icon: Settings,
      title: "Predictive Maintenance",
      description: "AI-driven equipment monitoring that predicts failures before they occur, reducing downtime by 80%."
    },
    {
      icon: Activity,
      title: "Quality Assurance Automation",
      description: "Automated quality control with computer vision and AI algorithms ensuring 99.9% defect detection."
    },
    {
      icon: Workflow,
      title: "Supply Chain Optimization",
      description: "Intelligent supply chain management with demand forecasting and inventory optimization."
    }
  ];

  const benefits = [
    "Increase production efficiency by up to 45% with AI optimization",
    "Reduce manufacturing costs by 30% through automation",
    "Achieve 99.9% quality control accuracy",
    "Minimize downtime with predictive maintenance",
    "Real-time production monitoring and analytics",
    "Seamless integration with existing MES and ERP systems"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small manufacturing operations",
      features: [
        "AI production optimization",
        "Basic quality control",
        "Up to 10 production lines",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing manufacturers",
      features: [
        "Advanced AI optimization",
        "Full quality control automation",
        "Up to 50 production lines",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large manufacturing enterprises",
      features: [
        "Enterprise AI manufacturing",
        "Custom optimization models",
        "Unlimited production lines",
        "Dedicated support team",
        "Custom analytics",
        "API access & integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Optimize assembly lines with AI-powered quality control and predictive maintenance.",
      icon: Car
    },
    {
      title: "Electronics Production",
      description: "Ensure precision manufacturing with automated quality assurance and defect detection.",
      icon: Smartphone
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Maintain strict quality standards with AI-powered compliance monitoring.",
      icon: Pill
    },
    {
      title: "Food & Beverage",
      description: "Optimize production efficiency while maintaining food safety standards.",
      icon: Utensils
    }
  ];

  const industries = [
    "Automotive & Aerospace",
    "Electronics & Semiconductors",
    "Pharmaceuticals & Healthcare",
    "Food & Beverage",
    "Chemical & Materials",
    "Energy & Utilities"
  ];

  return (
    <>
      <SEO 
        title="AI Autonomous Manufacturing Platform | Zion Tech Group"
        description="Revolutionary AI-powered autonomous manufacturing platform. Increase efficiency by 45%, reduce costs by 30%, and achieve 99.9% quality control. Transform your manufacturing operations today."
        keywords="AI manufacturing, autonomous manufacturing, production optimization, quality control, predictive maintenance, manufacturing AI, Industry 4.0"
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
                <Factory className="w-4 h-4 mr-2" />
                AI-Powered Autonomous Manufacturing
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Autonomous
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Manufacturing</span>
                <br />Platform
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your manufacturing operations with autonomous AI that never sleeps. 
                Increase efficiency by 45%, reduce costs by 30%, and achieve 99.9% quality 
                control with cutting-edge artificial intelligence.
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
                Revolutionary Manufacturing Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with autonomous capabilities 
                to provide unmatched manufacturing optimization.
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
                Experience unprecedented manufacturing efficiency with autonomous AI that continuously 
                learns, optimizes, and improves your production processes.
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
                Choose the plan that fits your manufacturing needs. All plans include 
                our core AI-powered optimization features.
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
                Our platform is designed to meet the unique manufacturing challenges 
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

        {/* Industries Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI manufacturing platform is trusted by leading companies across 
                multiple industries worldwide.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-zion-slate-light text-sm font-medium">{industry}</span>
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
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join thousands of manufacturers that trust our AI-powered 
                autonomous manufacturing platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Factory className="w-5 h-5 mr-2" />
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