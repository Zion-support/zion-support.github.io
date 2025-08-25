import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Database, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Lock,
  Eye,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBusinessIntelligence = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis for strategic decision-making",
      benefits: [
        "Accurate revenue forecasting",
        "Market trend predictions",
        "Risk assessment models",
        "Customer behavior analysis"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Live monitoring and visualization of key business metrics",
      benefits: [
        "Instant performance insights",
        "Customizable KPI tracking",
        "Interactive data exploration",
        "Mobile-responsive design"
      ]
    },
    {
      icon: Target,
      title: "Intelligent Reporting",
      description: "Automated report generation with AI-driven insights",
      benefits: [
        "Natural language summaries",
        "Automated insights discovery",
        "Scheduled report delivery",
        "Custom report templates"
      ]
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep understanding of customer behavior and preferences",
      benefits: [
        "Customer segmentation",
        "Lifetime value prediction",
        "Churn prevention",
        "Personalization insights"
      ]
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless connection to all your data sources",
      benefits: [
        "Multi-source data fusion",
        "Real-time data streaming",
        "Data quality management",
        "Automated data pipelines"
      ]
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI continuously discovers hidden patterns and opportunities",
      benefits: [
        "Anomaly detection",
        "Pattern recognition",
        "Opportunity identification",
        "Proactive alerts"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: [
        "Credit risk assessment",
        "Fraud detection",
        "Portfolio optimization",
        "Market analysis"
      ],
      icon: TrendingUp
    },
    {
      industry: "Healthcare",
      applications: [
        "Patient outcome prediction",
        "Resource optimization",
        "Disease pattern analysis",
        "Treatment effectiveness"
      ],
      icon: Users
    },
    {
      industry: "Manufacturing",
      applications: [
        "Predictive maintenance",
        "Quality control",
        "Supply chain optimization",
        "Production planning"
      ],
      icon: Cpu
    },
    {
      industry: "Retail",
      applications: [
        "Inventory optimization",
        "Customer segmentation",
        "Price optimization",
        "Demand forecasting"
      ],
      icon: Target
    }
  ];

  const benefits = [
    {
      metric: "300%",
      description: "Faster decision-making",
      icon: Zap
    },
    {
      metric: "85%",
      description: "Improved accuracy",
      icon: Target
    },
    {
      metric: "$2.5M",
      description: "Average annual savings",
      icon: TrendingUp
    },
    {
      metric: "24/7",
      description: "Continuous monitoring",
      icon: Eye
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, Global Manufacturing Corp",
      quote: "The AI Business Intelligence platform transformed our decision-making process. We now have insights that were previously impossible to uncover.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      title: "CIO, Regional Health System",
      quote: "Real-time analytics and predictive insights have improved our patient outcomes and operational efficiency significantly.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      title: "Head of Analytics, International Bank",
      quote: "The automated insights and predictive capabilities have given us a competitive edge in the market.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable intelligence with our advanced AI-powered analytics platform. 
              Discover hidden patterns, predict future trends, and make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Data into Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform delivers unprecedented insights and predictive capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to turn your business data into actionable intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how AI Business Intelligence transforms operations across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((application, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A simple three-step process to transform your business intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Connect Data</h3>
              <p className="text-gray-300">
                Seamlessly integrate with your existing data sources - databases, APIs, cloud services, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Analysis</h3>
              <p className="text-gray-300">
                Our AI algorithms analyze patterns, detect anomalies, and generate predictive insights automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Actionable Insights</h3>
              <p className="text-gray-300">
                Get real-time dashboards, automated reports, and actionable recommendations to drive growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that are already leveraging AI-powered insights to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;