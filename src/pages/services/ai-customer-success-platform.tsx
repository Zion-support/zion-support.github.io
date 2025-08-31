import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Star,
  Target,
  Clock,
  DollarSign,
  Activity,
  Brain,
  Workflow,
  Database,
  Cloud,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Link as LinkIcon,
  Copy,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Percent,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserHeart2,
  UserStar2
} from 'lucide-react';

const AICustomerSuccessPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Insights",
      description: "Advanced analytics and machine learning to predict customer behavior, churn risk, and growth opportunities"
    },
    {
      icon: Workflow,
      title: "Automated Success Workflows",
      description: "Intelligent automation of customer onboarding, training, and success milestones with personalized touchpoints"
    },
    {
      icon: BarChart3,
      title: "Real-Time Success Metrics",
      description: "Comprehensive dashboards tracking customer health scores, adoption rates, and success indicators"
    },
    {
      icon: Users,
      title: "Proactive Customer Engagement",
      description: "AI-driven recommendations for optimal engagement timing, content, and communication strategies"
    },
    {
      icon: Database,
      title: "Unified Customer Data",
      description: "Centralized customer information with 360-degree view across all touchpoints and interactions"
    },
    {
      icon: Shield,
      title: "Predictive Churn Prevention",
      description: "Early warning systems and automated interventions to prevent customer churn before it happens"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their customer success journey",
      features: [
        "Up to 500 customers",
        "Basic success metrics",
        "Email automation",
        "Standard reporting",
        "Email support",
        "Cloud hosting included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with advanced customer success needs",
      features: [
        "Up to 2,000 customers",
        "Advanced AI insights",
        "Custom workflows",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Full-featured solution for large enterprises with complex customer success requirements",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label options",
        "Dedicated success manager",
        "On-premise option",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "40% Higher Retention",
      description: "Proactive customer success strategies reduce churn and increase lifetime value"
    },
    {
      icon: Users,
      title: "3x Faster Onboarding",
      description: "Streamlined processes and AI-powered guidance accelerate customer time-to-value"
    },
    {
      icon: Star,
      title: "90% Customer Satisfaction",
      description: "Personalized experiences and proactive support drive customer happiness"
    },
    {
      icon: DollarSign,
      title: "2.5x Revenue Growth",
      description: "Expansion revenue from existing customers through success-driven strategies"
    }
  ];

  const useCases = [
    {
      industry: "SaaS & Technology",
      description: "Optimize product adoption, reduce churn, and drive expansion revenue",
      icon: Zap
    },
    {
      industry: "E-commerce",
      description: "Enhance customer loyalty, improve retention, and increase repeat purchases",
      icon: ShoppingCart
    },
    {
      industry: "Financial Services",
      description: "Build trust, improve satisfaction, and increase customer lifetime value",
      icon: DollarSign
    },
    {
      industry: "Healthcare",
      description: "Improve patient outcomes, enhance satisfaction, and reduce readmissions",
      icon: Heart
    }
  ];

  const successMetrics = [
    {
      metric: "Customer Health Score",
      description: "AI-powered scoring system measuring customer satisfaction and success likelihood",
      icon: Activity
    },
    {
      metric: "Time to Value",
      description: "Track how quickly customers achieve their first success milestone",
      icon: Clock
    },
    {
      metric: "Adoption Rate",
      description: "Monitor feature usage and product adoption across customer segments",
      icon: TrendingUp
    },
    {
      metric: "Expansion Revenue",
      description: "Track additional revenue from existing customers through upsells and cross-sells",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered Customer Success Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Success with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Proactively manage customer relationships, prevent churn, and drive growth with intelligent automation, 
              predictive analytics, and personalized success strategies powered by artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
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
              Powerful Features for Customer Success Teams
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to deliver exceptional customer experiences and drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
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
              Proven Business Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See measurable results with our AI-powered customer success platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zion-cyan mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
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
              Key Success Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Track the metrics that matter most for customer success and business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{metric.metric}</h3>
                <p className="text-zion-slate-light">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that best fits your customer success needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
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
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored customer success solutions for various industries and business types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Customer Success?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already using AI-powered customer success to drive growth and retention
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSuccessPlatform;