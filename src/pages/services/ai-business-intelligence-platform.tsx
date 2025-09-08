import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Cpu,
  Network,
  Cloud,
  Lock,
  Eye,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  AlertTriangle,
  Calendar,
  FileText,
  Download,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBusinessIntelligencePlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns, trends, and anomalies in your data",
      benefits: ["Predictive insights", "Automated pattern recognition", "Real-time anomaly detection"]
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Customizable, real-time dashboards that provide actionable insights at a glance",
      benefits: ["Drag-and-drop customization", "Real-time data updates", "Mobile-responsive design"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using advanced statistical models and AI algorithms",
      benefits: ["Sales forecasting", "Demand prediction", "Risk assessment"]
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect and consolidate data from multiple sources and platforms",
      benefits: ["Multi-source connectivity", "Real-time synchronization", "Data quality assurance"]
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with customizable templates and scheduling",
      benefits: ["Scheduled delivery", "Custom templates", "Multi-format export"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control and data encryption",
      benefits: ["Role-based permissions", "Data encryption", "Audit trails"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with BI",
      features: [
        "Up to 5 users",
        "Basic analytics dashboard",
        "Data integration (3 sources)",
        "Standard reporting",
        "Email support",
        "5GB data storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies with advanced BI needs",
      features: [
        "Up to 25 users",
        "Advanced AI analytics",
        "Unlimited data sources",
        "Custom dashboards",
        "Predictive modeling",
        "Priority support",
        "50GB data storage"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade BI solutions",
      features: [
        "Unlimited users",
        "Full AI suite",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "Unlimited storage",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Sales Performance Analytics",
      description: "Track sales metrics, identify top performers, and optimize sales strategies",
      metrics: ["Revenue growth", "Conversion rates", "Sales cycle length"]
    },
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer preferences, predict churn, and improve retention",
      metrics: ["Customer lifetime value", "Churn prediction", "Engagement scores"]
    },
    {
      title: "Operational Efficiency",
      description: "Monitor operational metrics and identify areas for improvement",
      metrics: ["Process efficiency", "Resource utilization", "Cost optimization"]
    },
    {
      title: "Market Intelligence",
      description: "Analyze market trends, competitor performance, and market opportunities",
      metrics: ["Market share", "Competitive analysis", "Trend forecasting"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Analytics, TechCorp",
      company: "TechCorp Inc.",
      content: "Zion Tech's AI BI platform transformed our data strategy. We now have real-time insights that drive our decision-making process.",
      rating: 5,
      results: "40% increase in data-driven decisions"
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Operations, InnovateLab",
      company: "InnovateLab",
      content: "The predictive analytics capabilities have given us a competitive edge. We can now anticipate market changes before they happen.",
      rating: 5,
      results: "25% improvement in forecasting accuracy"
    },
    {
      name: "Emily Watson",
      role: "Head of Strategy, GrowthCo",
      company: "GrowthCo",
      content: "Implementation was seamless and the ROI was immediate. Our team can now focus on insights rather than data preparation.",
      rating: 5,
      results: "60% reduction in reporting time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Business Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Business Intelligence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business data into actionable intelligence with our advanced AI-powered analytics platform. 
                Get real-time insights, predictive analytics, and automated reporting that drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-full text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI BI Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business intelligence with AI-powered insights that transform how you make decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-400/50 bg-blue-500/10' 
                    : 'border-white/10 hover:border-blue-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI BI platform transforms different aspects of your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-semibold mb-3">Key Metrics:</h4>
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-blue-400 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have achieved with our AI BI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-blue-400 font-semibold text-sm">{testimonial.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of companies already using our AI BI platform to make smarter, data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
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

export default AIBusinessIntelligencePlatform;