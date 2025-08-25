import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Database,
  Cpu,
  Eye,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Clock,
  Globe,
  Award,
  DollarSign
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';

const AIBusinessIntelligence: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Advanced ML algorithms that learn from your data to provide predictive insights and automated decision-making capabilities.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards and reports that update in real-time, giving you instant visibility into your business performance.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using historical data patterns and advanced statistical modeling.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI-powered recommendations and alerts that help you make data-driven decisions faster than ever before.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with encryption, access controls, and compliance with industry standards.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Team-based analytics with role-based access, sharing capabilities, and collaborative dashboards.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const benefits = [
    "Increase revenue by 15-25% through data-driven insights",
    "Reduce operational costs by 20-30% with process optimization",
    "Improve customer satisfaction by 40% with predictive analytics",
    "Accelerate decision-making by 60% with real-time dashboards",
    "Reduce risk by 35% with predictive risk modeling",
    "Boost team productivity by 45% with automated reporting"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 5 users",
        "Basic ML models",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "Data integration (3 sources)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 20 users",
        "Advanced ML models",
        "Custom dashboards",
        "Priority support",
        "Weekly reports",
        "Data integration (10 sources)",
        "Custom integrations",
        "Advanced security features"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large enterprises requiring maximum performance and customization",
      features: [
        "Unlimited users",
        "Custom ML models",
        "White-label dashboards",
        "24/7 dedicated support",
        "Real-time reporting",
        "Unlimited data sources",
        "Custom AI training",
        "Advanced compliance",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "Zion Tech Group's AI Business Intelligence platform transformed how we make decisions. We're now 40% more efficient and our revenue has increased by 22%.",
      rating: 5,
      avatar: "/images/testimonials/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations",
      company: "Global Retail Corp",
      content: "The predictive analytics capabilities have given us unprecedented insights into customer behavior. Our inventory optimization alone saved us $2.3M last year.",
      rating: 5,
      avatar: "/images/testimonials/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Data Scientist",
      company: "HealthTech Innovations",
      content: "The machine learning models are incredibly accurate and the platform is so intuitive that our team adopted it in just two weeks.",
      rating: 5,
      avatar: "/images/testimonials/emily-watson.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEOHead 
        title="AI Business Intelligence Solutions | Zion"
        description="Transform your business with AI-powered analytics, predictive insights, and automated decision-making. Get real-time dashboards and machine learning models."
        keywords="AI business intelligence, predictive analytics, machine learning, data analytics, business insights, AI dashboards"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Business Intelligence
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your data into actionable insights with AI-powered analytics, 
              predictive modeling, and automated decision-making capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to turn your data into strategic business advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-gray-400">
                See measurable results in weeks, not months
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven Results Across Industries
              </h2>
              <p className="text-xl text-gray-400">
                Join hundreds of companies already transforming their business with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Increased Efficiency</h3>
                <p className="text-gray-400">Automate manual processes and optimize operations for maximum productivity</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Better Decisions</h3>
                <p className="text-gray-400">Make data-driven decisions with confidence using AI-powered insights</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Savings</h3>
                <p className="text-gray-400">Reduce operational costs and increase ROI through intelligent automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our AI Business Intelligence platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;