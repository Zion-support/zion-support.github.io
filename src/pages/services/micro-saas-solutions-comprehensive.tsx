import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Workflow,
  Database,
  Cloud,
  Lock,
  Globe,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Search,
  FileText,
  MessageCircle,
  CreditCard,
  Settings,
  Monitor,
  Activity,
  PieChart,
  LineChart,
  Calendar,
  Mail as MailIcon,
  ShoppingCart,
  UserCheck,
  ShieldCheck,
  Globe2,
  Bot,
  Code,
  Server,
  Network,
  Database as DatabaseIcon,
  BarChart,
  TrendingDown,
  DollarSign,
  Percent,
  Target as TargetIcon,
  Users2,
  Building,
  Rocket,
  Lightbulb,
  Cog,
  Wrench,
  Palette,
  Eye,
  Lock as LockIcon,
  Key,
  Fingerprint,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  Share2,
  ExternalLink,
  ArrowUpRight,
  ChevronRight,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  MessageSquare,
  PhoneCall,
  VideoCall,
  Mail as MailIcon2,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  User,
  UserPlus,
  UserMinus,
  UserX,
  UserCheck as UserCheckIcon,
  UserCog,
  UserEdit,
  UserSettings,
  UserShield,
  UserVoice,
  UserSearch,
  UserList,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCheck2,
  UserCog2,
  UserEdit2,
  UserSettings2,
  UserShield2,
  UserVoice2,
  UserSearch2,
  UserList2
} from 'lucide-react';

export default function MicroSaaSSolutionsComprehensive() {
  const microSaaSServices = [
    {
      icon: Brain,
      title: "AI Sales Copilot",
      description: "Intelligent sales automation and lead management",
      price: "$299/month",
      features: ["Lead scoring", "Email automation", "Sales analytics", "CRM integration"],
      category: "Sales & Marketing",
      link: "/services/ai-sales-copilot"
    },
    {
      icon: Cloud,
      title: "Cloud FinOps Optimizer",
      description: "Cloud cost optimization and financial management",
      price: "$499/month",
      features: ["Cost tracking", "Resource optimization", "Budget alerts", "ROI analysis"],
      category: "Cloud & DevOps",
      link: "/services/cloud-finops-optimizer"
    },
    {
      icon: Shield,
      title: "AI Compliance Assistant",
      description: "Automated regulatory compliance management",
      price: "$399/month",
      features: ["GDPR compliance", "CCPA compliance", "Audit trails", "Policy management"],
      category: "Compliance & Security",
      link: "/services/ai-compliance-assistant"
    },
    {
      icon: BarChart3,
      title: "AI Business Intelligence",
      description: "Advanced analytics and business insights",
      price: "$599/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
      category: "Analytics & BI",
      link: "/services/ai-business-intelligence"
    },
    {
      icon: MessageCircle,
      title: "AI Customer Support",
      description: "Intelligent customer service automation",
      price: "$249/month",
      features: ["Chatbot support", "Ticket management", "Knowledge base", "Multi-language"],
      category: "Customer Support",
      link: "/services/ai-customer-support-automation"
    },
    {
      icon: Workflow,
      title: "AI Project Management",
      description: "AI-powered project planning and execution",
      price: "$349/month",
      features: ["Task automation", "Resource allocation", "Progress tracking", "Risk management"],
      category: "Project Management",
      link: "/services/ai-project-management-platform"
    },
    {
      icon: Database,
      title: "AI Content Optimizer Pro",
      description: "Advanced content optimization and SEO",
      price: "$199/month",
      features: ["SEO optimization", "Content analysis", "Keyword research", "Performance tracking"],
      category: "Content & SEO",
      link: "/services/ai-content-optimizer-pro"
    },
    {
      icon: Lock,
      title: "AI Cybersecurity Suite",
      description: "Comprehensive security monitoring and threat detection",
      price: "$799/month",
      features: ["Threat detection", "Vulnerability scanning", "Security monitoring", "Incident response"],
      category: "Cybersecurity",
      link: "/services/ai-cybersecurity-suite"
    },
    {
      icon: Server,
      title: "AI DevOps Automation",
      description: "Intelligent CI/CD and deployment automation",
      price: "$449/month",
      features: ["Automated testing", "Deployment pipelines", "Monitoring", "Performance optimization"],
      category: "DevOps",
      link: "/services/ai-devops-automation-platform"
    },
    {
      icon: Users,
      title: "AI HR Platform",
      description: "Intelligent human resources management",
      price: "$399/month",
      features: ["Recruitment automation", "Performance management", "Employee analytics", "Compliance tracking"],
      category: "Human Resources",
      link: "/services/ai-hr-platform"
    },
    {
      icon: Globe,
      title: "AI IoT Edge Computing",
      description: "Edge computing and IoT device management",
      price: "$699/month",
      features: ["Device management", "Data processing", "Real-time analytics", "Edge AI"],
      category: "IoT & Edge Computing",
      link: "/services/ai-iot-edge-computing-platform"
    },
    {
      icon: TrendingUp,
      title: "AI Financial Trading Platform",
      description: "Intelligent trading and financial analysis",
      price: "$899/month",
      features: ["Algorithmic trading", "Risk management", "Market analysis", "Portfolio optimization"],
      category: "Financial Services",
      link: "/services/ai-financial-trading-platform"
    }
  ];

  const categories = [
    "All Services",
    "Sales & Marketing",
    "Cloud & DevOps",
    "Compliance & Security",
    "Analytics & BI",
    "Customer Support",
    "Project Management",
    "Content & SEO",
    "Cybersecurity",
    "DevOps",
    "Human Resources",
    "IoT & Edge Computing",
    "Financial Services"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Get up and running in minutes, not months"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Start small and scale as you grow"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for all solutions"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Expert support team available 24/7"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 3 micro SaaS solutions",
        "Basic integrations",
        "Email support",
        "Standard features",
        "Community forum access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 micro SaaS solutions",
        "Advanced integrations",
        "Priority support",
        "Custom configurations",
        "API access",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited micro SaaS solutions",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label options",
        "On-premise deployment",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Micro SaaS Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Micro SaaS
              </span>
              <br />Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our suite of intelligent micro SaaS solutions. 
              From AI-powered automation to advanced analytics, we've got everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View All Solutions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The advantages of our micro SaaS approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of intelligent solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-purple-500"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using our micro SaaS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}