import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  Target,
  Award,
  Headphones,
  Calendar,
  Bell,
  Mail,
  Phone,
  Video,
  FileText,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Health Scoring",
      description: "Advanced machine learning algorithms that automatically assess customer health, predict churn risk, and identify expansion opportunities",
      benefits: ["Predictive churn prevention", "Automated health scoring", "Intelligent risk assessment"]
    },
    {
      icon: Users,
      title: "Intelligent Customer Journey Mapping",
      description: "AI-driven insights into customer behavior patterns, touchpoints, and engagement optimization opportunities",
      benefits: ["Behavioral analysis", "Journey optimization", "Personalized touchpoints"]
    },
    {
      icon: MessageCircle,
      title: "Automated Customer Communication",
      description: "Smart communication workflows that trigger personalized messages based on customer behavior and health scores",
      benefits: ["Automated outreach", "Personalized messaging", "Multi-channel communication"]
    },
    {
      icon: BarChart3,
      title: "Real-time Success Metrics Dashboard",
      description: "Live monitoring of key customer success metrics including NPS, CSAT, expansion rates, and churn indicators",
      benefits: ["Live metrics tracking", "Custom dashboards", "Automated reporting"]
    },
    {
      icon: Target,
      title: "Proactive Success Planning",
      description: "AI-powered recommendations for customer success strategies, onboarding optimization, and value realization",
      benefits: ["Strategic recommendations", "Onboarding optimization", "Value realization tracking"]
    },
    {
      icon: Zap,
      title: "Intelligent Workflow Automation",
      description: "Automated workflows for customer onboarding, check-ins, QBRs, and renewal processes",
      benefits: ["Workflow automation", "Process optimization", "Efficiency gains"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for growing companies with up to 100 customers",
      features: [
        "Up to 100 customers",
        "Basic health scoring",
        "Standard dashboards",
        "Email support",
        "Basic automation",
        "Core metrics tracking"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for established companies with advanced customer success needs",
      features: [
        "Up to 500 customers",
        "Advanced AI health scoring",
        "Custom dashboards",
        "Priority support",
        "Advanced automation",
        "Multi-channel communication",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,199",
      period: "/month",
      description: "For large organizations requiring enterprise-grade customer success solutions",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "Advanced analytics",
        "24/7 dedicated support",
        "Custom workflows",
        "Advanced security features",
        "API access",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "SaaS",
      description: "Reduce churn, increase expansion revenue, and optimize customer lifetime value through intelligent success management",
      metrics: ["Churn rate reduction", "Expansion revenue", "Customer lifetime value"]
    },
    {
      industry: "Enterprise Software",
      description: "Manage complex customer relationships, track value realization, and ensure successful enterprise deployments",
      metrics: ["Value realization", "Deployment success", "Relationship health"]
    },
    {
      industry: "E-commerce",
      description: "Improve customer retention, optimize post-purchase experience, and increase repeat purchase rates",
      metrics: ["Customer retention", "Repeat purchases", "Customer satisfaction"]
    },
    {
      industry: "Financial Services",
      description: "Enhance customer engagement, reduce account closures, and increase cross-selling opportunities",
      metrics: ["Account retention", "Cross-selling success", "Customer engagement"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Customer Retention",
      description: "Reduce churn by up to 40% through proactive customer success management and early risk detection"
    },
    {
      icon: DollarSign,
      title: "Boost Expansion Revenue",
      description: "Identify and capitalize on expansion opportunities to increase revenue per customer by 25-35%"
    },
    {
      icon: Users,
      title: "Improve Customer Satisfaction",
      description: "Enhance customer experience through personalized touchpoints and proactive support, leading to higher NPS scores"
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Automate routine tasks and workflows, allowing your team to focus on high-value customer interactions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Success with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our AI-powered customer success platform helps you proactively manage customer relationships, 
              prevent churn, and drive expansion revenue through intelligent automation and predictive insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Customer Success
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to build a world-class customer success operation
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven results and measurable impact on your customer success metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your customer success needs
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
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored customer success solutions for various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Key Metrics:</h4>
                  <ul className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center text-gray-300">
                        <BarChart3 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have revolutionized their customer success operations with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}