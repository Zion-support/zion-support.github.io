import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Globe,
  Rocket,
  Star,
  Phone,
  Mail,
  MapPin,
  Eye,
  MessageCircle,
  Heart,
  Target,
  Lightbulb,
  PieChart,
  Activity,
  ShoppingCart
} from 'lucide-react';

const AICustomerExperienceAnalyticsPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Customer Insights",
      description: "Monitor customer behavior and sentiment across all touchpoints in real-time"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "Advanced AI algorithms that understand customer emotions and feedback"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast customer needs and behavior patterns before they happen"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize the complete customer experience journey"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$799",
      period: "/month",
      features: [
        "Basic customer analytics",
        "Up to 10,000 customer interactions/month",
        "Standard sentiment analysis",
        "Email support",
        "Basic dashboard",
        "Up to 50GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      features: [
        "Advanced analytics & insights",
        "Up to 100,000 customer interactions/month",
        "Advanced sentiment analysis",
        "Priority support",
        "Custom dashboards",
        "Up to 500GB data storage",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$6,999",
      period: "/month",
      features: [
        "Full customer experience suite",
        "Unlimited customer interactions",
        "Custom AI model training",
        "24/7 dedicated support",
        "White-label solutions",
        "Unlimited data storage",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce & Retail",
      description: "Optimize online shopping experiences, reduce cart abandonment, and increase conversion rates",
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      title: "Financial Services",
      description: "Improve customer satisfaction, reduce churn, and enhance digital banking experiences",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Enhance patient experience, improve care quality, and optimize healthcare delivery",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "SaaS & Technology",
      description: "Increase user engagement, reduce support tickets, and improve product adoption",
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increased Revenue",
      description: "Boost customer lifetime value by up to 40% through better experiences"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Retention",
      description: "Reduce churn rates by up to 35% with proactive customer experience management"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with real-time customer insights and predictive analytics"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Operational Efficiency",
      description: "Streamline customer service operations and reduce support costs by up to 50%"
    }
  ];

  const metrics = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Customer Satisfaction Score",
      description: "Real-time NPS, CSAT, and customer happiness metrics"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Engagement Analytics",
      description: "Track customer interactions, time spent, and feature usage patterns"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Sentiment Tracking",
      description: "Monitor customer emotions and feedback across all channels"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion Optimization",
      description: "Identify and fix friction points in customer journeys"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6"
            >
              <Users className="w-4 h-4 mr-2" />
              Customer Experience Intelligence
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Customer Experience
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Analytics Platform
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your customer experience with AI-powered analytics that understand your customers 
              better than ever before. Get real-time insights, predict customer needs, and deliver 
              exceptional experiences that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-purple/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Customer Analytics?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover how AI-powered customer analytics can transform your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-zion-cyan/30 transition-colors">
                  <div className="text-zion-cyan">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Cutting-edge capabilities that revolutionize how you understand and serve your customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-zion-cyan">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-zion-slate-light text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Metrics & Analytics
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Track the metrics that matter most for customer experience optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-zion-cyan/30 transition-colors">
                  <div className="text-zion-cyan">
                    {metric.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {metric.title}
                </h3>
                <p className="text-zion-slate-light">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform transforms customer experiences across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-zion-cyan">
                      {useCase.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-zion-slate-light text-lg">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your customer experience analytics needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-cyan-dark text-slate-900 hover:from-zion-cyan-light hover:to-zion-cyan'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple hover:bg-zion-purple hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Results & ROI
              </h2>
              <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                Our clients see measurable improvements in customer experience and business outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-zion-blue-dark/50 rounded-xl p-6">
                <div className="text-4xl font-bold text-zion-cyan mb-2">40%</div>
                <div className="text-white font-semibold mb-2">Revenue Increase</div>
                <div className="text-zion-slate-light text-sm">through better CX</div>
              </div>
              <div className="bg-zion-blue-dark/50 rounded-xl p-6">
                <div className="text-4xl font-bold text-zion-cyan mb-2">35%</div>
                <div className="text-white font-semibold mb-2">Churn Reduction</div>
                <div className="text-zion-slate-light text-sm">improved retention</div>
              </div>
              <div className="bg-zion-blue-dark/50 rounded-xl p-6">
                <div className="text-4xl font-bold text-zion-cyan mb-2">50%</div>
                <div className="text-white font-semibold mb-2">Support Cost Cut</div>
                <div className="text-zion-slate-light text-sm">operational efficiency</div>
              </div>
              <div className="bg-zion-blue-dark/50 rounded-xl p-6">
                <div className="text-4xl font-bold text-zion-cyan mb-2">60 Days</div>
                <div className="text-white font-semibold mb-2">ROI Timeline</div>
                <div className="text-zion-slate-light text-sm">to see positive returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Experience?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join the customer experience revolution and deliver exceptional experiences that drive growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerExperienceAnalyticsPlatform;