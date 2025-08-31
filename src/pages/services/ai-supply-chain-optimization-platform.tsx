import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Rocket, 
  Target, 
  Handshake, 
  Lightbulb, 
  Cpu, 
  Database, 
  Network, 
  Smartphone, 
  Lock, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Wifi, 
  ShieldCheck, 
  Globe2, 
  Bot, 
  Workflow, 
  Eye, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  DollarSign, 
  Atom, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Satellite, 
  Activity, 
  FileText, 
  MessageCircle, 
  Search, 
  BarChart, 
  Users2, 
  Settings, 
  Palette, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock3, 
  Target,
  Truck,
  Package,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Bike
} from 'lucide-react';

const AISupplyChainOptimizationPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95%+ accuracy, enabling optimal inventory management and production planning.",
      benefits: [
        "Multi-factor demand prediction models",
        "Seasonal and trend analysis",
        "Real-time demand signal processing",
        "Automated forecast updates"
      ]
    },
    {
      icon: Workflow,
      title: "Intelligent Route Optimization",
      description: "AI algorithms optimize transportation routes, reducing costs by up to 30% while improving delivery times and sustainability.",
      benefits: [
        "Multi-modal transportation optimization",
        "Real-time traffic and weather integration",
        "Dynamic route recalculation",
        "Carbon footprint reduction"
      ]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics & Risk Management",
      description: "Identify potential supply chain disruptions before they occur and implement proactive mitigation strategies.",
      benefits: [
        "Supplier risk assessment",
        "Geopolitical risk monitoring",
        "Natural disaster prediction",
        "Supply chain resilience scoring"
      ]
    },
    {
      icon: Network,
      title: "End-to-End Visibility",
      description: "Real-time tracking and monitoring across the entire supply chain network, from raw materials to final delivery.",
      benefits: [
        "IoT sensor integration",
        "Blockchain traceability",
        "Real-time status updates",
        "Comprehensive audit trails"
      ]
    },
    {
      icon: Zap,
      title: "Automated Inventory Management",
      description: "AI-driven inventory optimization that reduces carrying costs by 25% while maintaining 99.9% service levels.",
      benefits: [
        "Dynamic safety stock calculation",
        "Automated reorder triggers",
        "Multi-location optimization",
        "Seasonal demand adaptation"
      ]
    },
    {
      icon: Shield,
      title: "Compliance & Sustainability",
      description: "Ensure regulatory compliance and meet sustainability goals with automated monitoring and reporting.",
      benefits: [
        "Regulatory compliance tracking",
        "Sustainability metrics monitoring",
        "Automated reporting generation",
        "ESG performance optimization"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Optimize production schedules, manage raw material procurement, and streamline distribution networks for maximum efficiency and cost savings.",
      metrics: ["30% reduction in production costs", "40% improvement in on-time delivery", "25% decrease in inventory carrying costs"]
    },
    {
      industry: "Retail & E-commerce",
      description: "Optimize omnichannel inventory, streamline last-mile delivery, and enhance customer experience through intelligent supply chain management.",
      metrics: ["35% improvement in order fulfillment", "45% reduction in stockouts", "30% increase in customer satisfaction"]
    },
    {
      industry: "Healthcare & Pharmaceuticals",
      description: "Ensure critical medical supplies availability, optimize cold chain logistics, and maintain compliance with strict regulatory requirements.",
      metrics: ["50% improvement in supply availability", "40% reduction in waste", "99.9% compliance rate"]
    },
    {
      industry: "Food & Beverage",
      description: "Optimize perishable goods logistics, reduce food waste, and ensure food safety through intelligent supply chain management.",
      metrics: ["30% reduction in food waste", "45% improvement in shelf life", "40% decrease in logistics costs"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small to medium businesses starting their supply chain optimization journey",
      features: [
        "Up to 5,000 SKUs",
        "Basic demand forecasting",
        "Route optimization (up to 100 routes/month)",
        "Email and chat support",
        "Standard integrations (10 platforms)",
        "Basic reporting dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with complex supply chain operations",
      features: [
        "Up to 50,000 SKUs",
        "Advanced AI demand forecasting",
        "Unlimited route optimization",
        "Priority support with dedicated manager",
        "Advanced integrations (50+ platforms)",
        "Custom reporting and analytics",
        "Risk management tools",
        "Multi-location optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Comprehensive solution for large organizations with global supply chain networks",
      features: [
        "Unlimited SKUs and locations",
        "Custom AI model training",
        "Advanced risk management",
        "24/7 dedicated support team",
        "Custom integrations and API access",
        "Advanced security and compliance features",
        "Multi-tenant architecture",
        "Custom development and consulting",
        "SLA guarantees and performance monitoring"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "VP of Supply Chain",
      company: "Global Manufacturing Corp",
      content: "The AI Supply Chain Optimization Platform has transformed our operations. We've achieved a 30% reduction in logistics costs and improved our on-time delivery from 85% to 98%.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Lisa Rodriguez",
      role: "Director of Operations",
      company: "E-commerce Retail Plus",
      content: "This platform has revolutionized our inventory management. The AI-powered demand forecasting has reduced our stockouts by 45% and improved our customer satisfaction significantly.",
      rating: 5,
      avatar: "LR"
    },
    {
      name: "James Wilson",
      role: "Head of Logistics",
      company: "Healthcare Supply Solutions",
      content: "The platform's risk management capabilities have been invaluable for our pharmaceutical supply chain. We've maintained 99.9% compliance while reducing costs by 25%.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI-powered optimization. Demand forecasting, route optimization, risk management, and end-to-end visibility." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, route optimization, inventory management, logistics AI" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-supply-chain-optimization-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Truck className="w-4 h-4 mr-2 text-blue-400" />
                AI-Powered Supply Chain
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Supply Chain <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Optimization Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your supply chain operations with AI-powered optimization, predictive analytics, and intelligent automation. 
                Reduce costs, improve efficiency, and enhance customer satisfaction through data-driven decision making.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimize Every Aspect of Your Supply Chain
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with deep supply chain expertise to deliver 
                measurable improvements in efficiency, cost reduction, and customer satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-green-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry-Leading Results
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how organizations across industries are transforming their supply chain operations 
                and achieving remarkable business outcomes with our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-blue-400">
                        <TrendingUp className="w-4 h-4 mr-3" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the perfect plan for your supply chain optimization needs. 
                Start with a free trial and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border hover:border-blue-500/50 transition-all duration-300 ${
                    plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/25 scale-105' : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-400 hover:to-green-400 transform hover:scale-105'
                      : 'bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400/20'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-green-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what supply chain leaders have to say 
                about our AI Supply Chain Optimization Platform.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 border border-blue-400/30 rounded-3xl p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Optimize Your Supply Chain?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                  Join hundreds of organizations that have already transformed their supply chain operations 
                  with our AI-powered platform. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                    <span className="flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
                
                <div className="flex justify-center">
                  <button className="group px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Contact Sales Team
                    </span>
                  </button>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>14-Day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-blue-400" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target2 className="w-4 h-4 text-green-400" />
                    <span>Custom Implementation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainOptimizationPlatform;