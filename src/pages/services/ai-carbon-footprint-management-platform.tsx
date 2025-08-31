import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer, defaultSEO } from '../../components/SEOOptimizer';
import { 
  Brain, 
  Leaf, 
  TrendingDown, 
  BarChart3, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  Users,
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
  Coins,
  Satellite,
  Gamepad2,
  Palette,
  Sparkles,
  Atom,
  Code,
  Bot,
  TreePine,
  Recycle,
  Sun,
  Wind,
  Zap as ZapIcon,
  Car,
  Factory,
  Building2,
  Droplets
} from 'lucide-react';

const seoConfig = {
  ...defaultSEO,
  title: "AI Carbon Footprint Management Platform | Zion Tech Group",
  description: "Revolutionary AI-powered platform that autonomously tracks, analyzes, and optimizes carbon footprint across organizations. Achieve sustainability goals with intelligent carbon management.",
  keywords: "AI carbon footprint, carbon management, sustainability AI, ESG platform, carbon tracking, climate tech, Zion Tech Group",
  url: "https://ziontechgroup.com/services/ai-carbon-footprint-management-platform"
};

export default function AICarbonFootprintManagementPlatform() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Carbon Tracking",
      description: "AI automatically monitors and tracks carbon emissions across all business operations in real-time"
    },
    {
      icon: Leaf,
      title: "Sustainability Intelligence",
      description: "Advanced analytics and insights to identify carbon reduction opportunities and optimize sustainability strategies"
    },
    {
      icon: BarChart3,
      title: "ESG Reporting Automation",
      description: "Automated generation of comprehensive ESG reports and sustainability disclosures for stakeholders"
    },
    {
      icon: Target,
      title: "Carbon Reduction Planning",
      description: "AI-powered recommendations for carbon reduction strategies and sustainability initiatives"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Continuous tracking of carbon metrics with instant alerts and predictive analytics"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensure compliance with environmental regulations and sustainability standards across jurisdictions"
    }
  ];

  const benefits = [
    "Reduce carbon footprint by 30-50%",
    "Achieve carbon neutrality faster",
    "Improve ESG ratings and investor appeal",
    "Reduce compliance risks and penalties",
    "Optimize sustainability investments",
    "Enhance brand reputation and customer loyalty"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 carbon sources",
        "Basic carbon tracking",
        "Standard ESG reporting",
        "Email support",
        "Monthly sustainability insights"
      ]
    },
    {
      plan: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing companies and organizations",
      features: [
        "Up to 1,000 carbon sources",
        "Advanced AI analytics",
        "Comprehensive ESG reporting",
        "Priority support",
        "Custom sustainability dashboards",
        "Carbon reduction recommendations"
      ]
    },
    {
      plan: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large corporations and multinational companies",
      features: [
        "Unlimited carbon sources",
        "Full AI autonomous capabilities",
        "Dedicated sustainability team",
        "Custom integrations",
        "Advanced analytics dashboard",
        "Multi-site and global operations"
      ]
    }
  ];

  const useCases = [
    {
      title: "Corporate Sustainability",
      description: "Comprehensive carbon management for large corporations with complex operations",
      icon: Building2
    },
    {
      title: "Manufacturing & Industry",
      description: "Track and optimize carbon emissions in manufacturing processes and supply chains",
      icon: Factory
    },
    {
      title: "Financial Services",
      description: "ESG reporting and carbon risk assessment for financial institutions",
      icon: Coins
    },
    {
      title: "Real Estate & Construction",
      description: "Monitor carbon footprint of buildings and construction projects",
      icon: Home
    }
  ];

  const sustainabilityMetrics = [
    { metric: "CO2 Emissions", value: "Real-time tracking", icon: Leaf },
    { metric: "Energy Consumption", value: "AI optimization", icon: ZapIcon },
    { metric: "Waste Management", value: "Automated reporting", icon: Recycle },
    { metric: "Water Usage", value: "Conservation insights", icon: Droplets },
    { metric: "Supply Chain", value: "Carbon footprint analysis", icon: Network },
    { metric: "Transportation", value: "Emission optimization", icon: Car }
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
                <Leaf className="w-4 h-4 mr-2" />
                AI-Powered Sustainability
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Carbon Footprint
                <span className="text-zion-cyan"> Management Platform</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                Transform your sustainability efforts with autonomous AI that tracks, analyzes, and optimizes 
                carbon footprint across your entire organization. Achieve your ESG goals with intelligent carbon management.
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
                Revolutionary Sustainability Intelligence
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Our platform combines cutting-edge AI with sustainability expertise to deliver 
                unprecedented carbon management capabilities and insights.
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

        {/* Sustainability Metrics Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Sustainability Tracking
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Monitor and optimize every aspect of your environmental impact with AI-powered insights.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sustainabilityMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/80 border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.metric}</h3>
                  <p className="text-zion-slate-light text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Sustainability Impact
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Experience unprecedented efficiency and results in carbon management and sustainability.
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
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                From startups to multinational corporations, our platform adapts to your sustainability needs.
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
        <section className="py-16 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Sustainability Solutions
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that best fits your sustainability goals and organizational scale.
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
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Lead in Sustainability?
              </h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
                Join leading organizations that are already using our AI platform to transform 
                their sustainability efforts and achieve their ESG goals.
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
        <section className="py-16 bg-zion-slate-dark/50">
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
const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const Droplets = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);