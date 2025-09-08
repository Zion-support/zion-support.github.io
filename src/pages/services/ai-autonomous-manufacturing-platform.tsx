import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer, defaultSEO } from '../../components/SEOOptimizer';
import { 
  Brain, 
  Factory, 
  Cpu, 
  Settings, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  Users,
  BarChart3,
  Globe,
  Target,
  TrendingUp,
  Lock,
  Database,
  Network,
  Cloud,
  Activity,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Gauge,
  Wifi,
  Server,
  Workflow,
  Robot,
  Cog,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Leaf,
  Coins,
  Satellite,
  Gamepad2,
  Palette,
  Sparkles,
  Atom,
  Code,
  Bot
} from 'lucide-react';

const seoConfig = {
  ...defaultSEO,
  title: "AI Autonomous Manufacturing Platform | Zion Tech Group",
  description: "Revolutionary AI-powered manufacturing platform that autonomously optimizes production processes, quality control, and supply chain management. Transform your manufacturing operations with intelligent automation.",
  keywords: "AI manufacturing, autonomous manufacturing, smart factory, Industry 4.0, manufacturing automation, quality control AI, Zion Tech Group",
  url: "https://ziontechgroup.com/services/ai-autonomous-manufacturing-platform"
};

export default function AIAutonomousManufacturingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Production Control",
      description: "AI automatically adjusts production parameters, schedules, and resource allocation for optimal efficiency"
    },
    {
      icon: Factory,
      title: "Smart Factory Management",
      description: "Intelligent monitoring and control of all manufacturing processes with real-time optimization"
    },
    {
      icon: Cpu,
      title: "Predictive Maintenance",
      description: "AI predicts equipment failures and schedules maintenance to prevent costly downtime"
    },
    {
      icon: Settings,
      title: "Quality Control Automation",
      description: "Computer vision and AI algorithms automatically inspect products and maintain quality standards"
    },
    {
      icon: Clock,
      title: "Real-time Optimization",
      description: "Continuous monitoring and adjustment of production parameters for maximum efficiency"
    },
    {
      icon: Shield,
      title: "Supply Chain Intelligence",
      description: "AI-powered supply chain optimization with demand forecasting and inventory management"
    }
  ];

  const benefits = [
    "Increase production efficiency by 40%",
    "Reduce manufacturing costs by 25%",
    "Improve product quality by 60%",
    "Minimize downtime with predictive maintenance",
    "Optimize inventory and reduce waste",
    "Enable 24/7 autonomous operation"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$1,499",
      period: "/month",
      description: "Perfect for small manufacturing facilities",
      features: [
        "Up to 10 production lines",
        "Basic AI optimization",
        "Quality control automation",
        "Email support",
        "Standard reporting"
      ]
    },
    {
      plan: "Professional",
      price: "$3,999",
      period: "/month",
      description: "Ideal for mid-size manufacturing companies",
      features: [
        "Up to 50 production lines",
        "Advanced AI optimization",
        "Predictive maintenance",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ]
    },
    {
      plan: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large manufacturing enterprises",
      features: [
        "Unlimited production lines",
        "Full autonomous capabilities",
        "Dedicated support team",
        "Custom AI models",
        "Advanced analytics dashboard",
        "Multi-site management"
      ]
    }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Optimize assembly lines, quality control, and supply chain for automotive production",
      icon: Car
    },
    {
      title: "Electronics Production",
      description: "AI-powered PCB assembly, testing, and quality assurance for electronic devices",
      icon: Cpu
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Ensure compliance and quality in pharmaceutical production with AI monitoring",
      icon: Pill
    },
    {
      title: "Food & Beverage",
      description: "Optimize food processing, packaging, and quality control with intelligent automation",
      icon: Utensils
    }
  ];

  return (
    <>
      <SEOOptimizer config={seoConfig} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
                <Factory className="w-4 h-4 mr-2" />
                Industry 4.0 Manufacturing
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous
                <span className="text-zion-cyan"> Manufacturing Platform</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                Transform your manufacturing operations with autonomous AI that optimizes production, 
                quality control, and supply chain management 24/7. Experience the future of smart manufacturing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Manufacturing Intelligence
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Our platform combines cutting-edge AI with Industry 4.0 technologies to deliver 
                unprecedented manufacturing efficiency and automation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Manufacturing Operations
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Experience unprecedented efficiency, quality, and cost savings with AI-powered manufacturing.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
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
                    transition={{ duration: 0.8, delay: index * 0.1 }}
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

        {/* Use Cases Section */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Manufacturing Industry
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                From automotive to pharmaceuticals, our platform adapts to your specific manufacturing needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <useCase.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-zion-slate-light text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Manufacturing Solutions
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that best fits your manufacturing scale and requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-zion-slate-dark/80 border rounded-xl p-8 ${
                    index === 1 
                      ? 'border-zion-cyan scale-105' 
                      : 'border-zion-purple/30'
                  }`}
                >
                  {index === 1 && (
                    <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      index === 1
                        ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                        : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Revolutionize Your Manufacturing?
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
                Join leading manufacturers that are already using our AI platform to transform 
                their operations and gain competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 (302) 464-0950</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Add missing icon components
const Car = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Pill = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const Utensils = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);