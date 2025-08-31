import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageSquare, 
  Heart, 
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
  Rocket,
  Brain,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AICustomerExperiencePlatform: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "AI-Powered Personalization",
      description: "Advanced machine learning that delivers personalized experiences for every customer"
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Engagement",
      description: "Seamless customer interactions across all channels and touchpoints"
    },
    {
      icon: Heart,
      title: "Sentiment Analysis",
      description: "Real-time emotion detection and customer satisfaction monitoring"
    },
    {
      icon: Shield,
      title: "Customer Data Protection",
      description: "Enterprise-grade security with GDPR and CCPA compliance"
    }
  ];

  const services = [
    {
      title: "Customer Journey Mapping",
      description: "Visualize and optimize every touchpoint in your customer's experience",
      icon: MapPin,
      features: ["Journey visualization", "Touchpoint analysis", "Optimization recommendations", "A/B testing"]
    },
    {
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that provide instant, accurate customer support",
      icon: Bot,
      features: ["Natural language processing", "24/7 availability", "Multi-language support", "Seamless handoff"]
    },
    {
      title: "Customer Analytics",
      description: "Deep insights into customer behavior, preferences, and satisfaction",
      icon: BarChart,
      features: ["Behavioral analysis", "Satisfaction metrics", "Predictive modeling", "Real-time dashboards"]
    },
    {
      title: "Automated Marketing",
      description: "Personalized marketing campaigns that drive engagement and conversions",
      icon: Target,
      features: ["Segmentation", "Personalized content", "Automated workflows", "Performance tracking"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$1,899",
      period: "/month",
      description: "Perfect for small businesses starting their customer experience journey",
      features: [
        "Up to 1,000 customers",
        "Basic AI personalization",
        "Email support",
        "Standard analytics",
        "2 channels integration",
        "Basic chatbot"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "/month",
      description: "Ideal for growing businesses with advanced customer experience needs",
      features: [
        "Up to 10,000 customers",
        "Advanced AI personalization",
        "Priority support",
        "Advanced analytics",
        "Unlimited channels",
        "Advanced chatbot",
        "Sentiment analysis",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$8,000",
      period: "/month",
      description: "Complete solution for large enterprises with unlimited scalability",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label solution",
        "Custom development",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const integrations = [
    { name: "Shopify", icon: "🛒", category: "E-commerce" },
    { name: "WooCommerce", icon: "🛍️", category: "E-commerce" },
    { name: "Mailchimp", icon: "📧", category: "Email Marketing" },
    { name: "Slack", icon: "💬", category: "Communication" },
    { name: "Microsoft Teams", icon: "👥", category: "Communication" },
    { name: "Zapier", icon: "🔗", category: "Automation" },
    { name: "Salesforce", icon: "☁️", category: "CRM" },
    { name: "HubSpot", icon: "🎯", category: "Marketing" },
    { name: "Intercom", icon: "💬", category: "Customer Support" },
    { name: "Zendesk", icon: "🎧", category: "Customer Support" },
    { name: "Google Analytics", icon: "📊", category: "Analytics" },
    { name: "Facebook Pixel", icon: "📱", category: "Advertising" }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "VP of Customer Success",
      company: "E-commerce Plus",
      content: "The AI Customer Experience Platform has transformed how we interact with customers. Personalization has increased our conversion rates by 45%.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Customer Experience Director",
      company: "TechStart Inc",
      content: "The omnichannel capabilities are incredible. Our customers can seamlessly switch between channels without losing context.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Manager",
      company: "Retail Solutions",
      content: "The sentiment analysis helps us understand our customers better than ever. We can now proactively address issues before they escalate.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Average ROI", value: "350%", description: "within 8 months" },
    { label: "Customer Satisfaction", value: "94%", description: "improvement" },
    { label: "Response Time", value: "90%", description: "faster" },
    { label: "Customer Retention", value: "85%", description: "increase" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Experience & Engagement Platform | Zion Tech Group"
        description="Transform your customer experience with our AI-powered platform. Personalized interactions, omnichannel engagement, and sentiment analysis for modern businesses."
        keywords="AI customer experience, customer engagement, personalization, sentiment analysis, omnichannel, customer analytics, chatbot, customer journey"
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
            <div className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered Customer Experience
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Experience & Engagement Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationships with AI-powered personalization, omnichannel engagement, 
              and intelligent sentiment analysis. Deliver exceptional experiences that drive loyalty and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>AI Personalization</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center text-purple-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>350% ROI</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Customer Experience Platform Inquiry"
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
              Powerful Customer Experience Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to create exceptional customer experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
              Comprehensive Customer Experience Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From journey mapping to intelligent chatbots, we provide end-to-end customer experience solutions.
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
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
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
              Connect with your favorite tools and platforms for a unified customer experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-purple-500/50 transition-all duration-300 text-center"
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
              Choose the perfect plan for your customer experience needs. All plans include our core AI features.
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
                    ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/20 to-transparent' 
                    : 'border-white/20'
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
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
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
              Join thousands of businesses that have transformed their customer experience with our AI platform.
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
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Get started with our AI-powered customer experience platform and create lasting relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Customer Experience Platform Inquiry"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-purple-100 text-sm">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 https://ziontechgroup.com/ai-customer-experience</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerExperiencePlatform;
