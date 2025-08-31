import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  DollarSign,
  Target,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Heart,
  BookOpen,
  GraduationCap,
  Factory,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2,
  ShoppingCart,
  Zap,
  Shield,
  Cloud,
  Users,
  Rocket
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIBusinessIntelligencePlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that provide real-time insights and predictive analytics"
    },
    {
      icon: BarChart3,
      title: "Real-time Business Intelligence",
      description: "Live dashboards and reports that update automatically with your business data"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends, identify opportunities, and make data-driven decisions with confidence"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance standards"
    }
  ];

  const services = [
    {
      title: "Data Integration",
      description: "Seamlessly connect and integrate data from multiple sources including CRM, ERP, and cloud platforms",
      icon: Database,
      features: ["Multi-source data integration", "Real-time data synchronization", "API connectivity", "Data validation"]
    },
    {
      title: "Advanced Analytics",
      description: "Powerful analytics engine with machine learning capabilities for deep insights",
      icon: BarChart,
      features: ["Machine learning models", "Statistical analysis", "Custom algorithms", "Performance optimization"]
    },
    {
      title: "Interactive Dashboards",
      description: "Beautiful, customizable dashboards that provide actionable insights at a glance",
      icon: PieChart,
      features: ["Drag-and-drop interface", "Real-time updates", "Mobile responsive", "Custom branding"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with scheduling and distribution",
      icon: FileText,
      features: ["Scheduled reports", "Email distribution", "PDF export", "Custom templates"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 10 data sources",
        "5 user licenses",
        "Basic AI analytics",
        "Standard dashboards",
        "Email support",
        "Monthly reports"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "25 user licenses",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time reporting",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "Complete solution for large enterprises with unlimited scalability",
      features: [
        "Unlimited data sources",
        "Unlimited user licenses",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const integrations = [
    { name: "Salesforce", icon: "🔴", category: "CRM" },
    { name: "HubSpot", icon: "🟠", category: "Marketing" },
    { name: "QuickBooks", icon: "🟢", category: "Accounting" },
    { name: "Google Analytics", icon: "🔵", category: "Web Analytics" },
    { name: "Shopify", icon: "🟣", category: "E-commerce" },
    { name: "Stripe", icon: "⚫", category: "Payments" },
    { name: "Microsoft 365", icon: "🔵", category: "Productivity" },
    { name: "Slack", icon: "🟡", category: "Communication" },
    { name: "Zapier", icon: "🟠", category: "Automation" },
    { name: "AWS", icon: "🟠", category: "Cloud" },
    { name: "Azure", icon: "🔵", category: "Cloud" },
    { name: "Google Cloud", icon: "🔵", category: "Cloud" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "The AI Business Intelligence Platform has transformed how we make decisions. The predictive analytics have helped us increase revenue by 35% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Director",
      company: "Global Retail Inc",
      content: "Real-time insights and automated reporting have saved us countless hours. The platform is intuitive and powerful.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      company: "Manufacturing Plus",
      content: "The integration capabilities are outstanding. We connected all our systems seamlessly and now have a complete view of our operations.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Average ROI", value: "400%", description: "within 6 months" },
    { label: "Data Sources", value: "100+", description: "supported integrations" },
    { label: "Processing Speed", value: "10x", description: "faster than traditional BI" },
    { label: "Customer Satisfaction", value: "98%", description: "based on reviews" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence & Analytics Platform | Zion Tech Group"
        description="Transform your business with our AI-powered business intelligence platform. Real-time analytics, predictive insights, and automated reporting for data-driven decision making."
        keywords="AI business intelligence, analytics platform, predictive analytics, real-time insights, automated reporting, data visualization, machine learning, business analytics"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence & Analytics Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with advanced AI-powered analytics, real-time insights, and predictive intelligence. 
              Make data-driven decisions with confidence using our comprehensive business intelligence platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center text-purple-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>400% ROI</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Business Intelligence Platform Inquiry"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to transform your data into actionable insights.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From data integration to advanced analytics, we provide end-to-end business intelligence solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a unified analytics experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="text-2xl mb-2">{integration.icon}</div>
                <div className="text-white font-semibold text-sm">{integration.name}</div>
                <div className="text-gray-400 text-xs">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI analytics features.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  tier.popular 
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/20 to-transparent' 
                    : 'border-white/20'
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their operations with our AI platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Get started with our AI-powered analytics platform and unlock the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Business Intelligence Platform Inquiry"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-blue-100 text-sm">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 https://ziontechgroup.com/ai-business-intelligence</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligencePlatform;
