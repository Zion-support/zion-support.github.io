import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Monitor,
  Smartphone,
  Globe,
  Server,
  HardDrive,
  Network,
  Key,
  Fingerprint,
  ShieldCheck,
  Activity,
  Award,
  Lightbulb,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap,
  Shield,
  Eye,
  Heart,
  DollarSign,
  PieChart,
  LineChart,
  UserCheck,
  UserPlus,
  MessageCircle,
  PhoneCall,
  MailOpen,
  CalendarDays,
  Clock3,
  Target,
  Award,
  TrendingUp,
  BarChart,
  PieChart3,
  Activity,
  Zap,
  Shield,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Star,
  Globe,
  Building,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISalesAssistant() {
  const features = [
    {
      icon: Target,
      title: 'Intelligent Lead Qualification',
      description: 'AI-powered lead scoring and qualification to identify high-value prospects automatically.',
      benefits: ['Higher conversion rates', 'Reduced sales cycle time', 'Better resource allocation']
    },
    {
      icon: MessageSquare,
      title: 'Personalized Outreach',
      description: 'Automated, personalized communication that resonates with each prospect individually.',
      benefits: ['Improved response rates', 'Better engagement', 'Higher conversion']
    },
    {
      icon: TrendingUp,
      title: 'Sales Performance Analytics',
      description: 'Comprehensive insights into sales activities, pipeline health, and team performance.',
      benefits: ['Data-driven decisions', 'Performance optimization', 'Revenue growth']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for sales teams with shared insights and best practices.',
      benefits: ['Improved team efficiency', 'Knowledge sharing', 'Better customer experience']
    }
  ];

  const capabilities = [
    {
      category: 'Lead Management',
      items: [
        'AI-powered lead scoring and qualification',
        'Automated lead nurturing campaigns',
        'Intelligent lead routing and assignment',
        'Lead lifecycle tracking and management',
        'Duplicate lead detection and merging',
        'Lead source attribution and analytics'
      ]
    },
    {
      category: 'Sales Automation',
      items: [
        'Automated email sequences and follow-ups',
        'Smart scheduling and calendar management',
        'Automated task creation and reminders',
        'Workflow automation and triggers',
        'Integration with CRM systems',
        'Multi-channel communication automation'
      ]
    },
    {
      category: 'Customer Intelligence',
      items: [
        '360-degree customer view and insights',
        'Behavioral analysis and prediction',
        'Purchase intent scoring',
        'Customer segmentation and targeting',
        'Personalization recommendations',
        'Churn prediction and prevention'
      ]
    },
    {
      category: 'Performance Analytics',
      items: [
        'Real-time sales dashboard and metrics',
        'Pipeline health and forecasting',
        'Sales team performance tracking',
        'Conversion rate optimization',
        'Revenue attribution and analysis',
        'Predictive analytics and insights'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '3x Faster Sales',
      description: 'Accelerate your sales process with AI-powered automation and insights.',
      metric: '3x'
    },
    {
      icon: Shield,
      title: '95% Lead Accuracy',
      description: 'Improve lead quality and conversion rates with intelligent qualification.',
      metric: '95%'
    },
    {
      icon: TrendingUp,
      title: '40% Revenue Growth',
      description: 'Drive significant revenue growth through optimized sales processes.',
      metric: '40%'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss an opportunity with round-the-clock lead engagement.',
      metric: '24/7'
    }
  ];

  const useCases = [
    {
      industry: 'B2B Sales',
      description: 'Streamline enterprise sales processes and improve deal velocity.',
      examples: ['Software sales', 'Consulting services', 'Enterprise solutions', 'SaaS subscriptions']
    },
    {
      industry: 'E-commerce',
      description: 'Enhance customer engagement and increase conversion rates.',
      examples: ['Online retail', 'Digital products', 'Subscription services', 'Marketplace platforms']
    },
    {
      industry: 'Real Estate',
      description: 'Qualify leads and nurture prospects through the buying journey.',
      examples: ['Residential sales', 'Commercial properties', 'Rental management', 'Property investment']
    },
    {
      industry: 'Financial Services',
      description: 'Improve customer acquisition and retention in competitive markets.',
      examples: ['Banking services', 'Insurance products', 'Investment solutions', 'Credit services']
    }
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$149',
      period: 'per month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 5 sales users',
        'Basic lead qualification',
        'Email automation',
        'Standard reporting',
        'Email support',
        'CRM integration'
      ],
      cta: 'Get Started',
      popular: false
    },
    professional: {
      name: 'Professional',
      price: '$399',
      period: 'per month',
      description: 'Ideal for growing sales organizations',
      features: [
        'Up to 25 sales users',
        'Advanced AI qualification',
        'Multi-channel automation',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Team collaboration tools',
        'Advanced reporting'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited sales users',
        'Full AI capabilities',
        'Custom AI models',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO
        title="AI Sales Assistant - Intelligent Sales Automation | Zion Tech Group"
        description="Transform your sales process with our AI-powered Sales Assistant. Automated lead qualification, personalized outreach, and performance analytics."
        canonical="/services/ai-sales-assistant"
        keywords="AI sales assistant, sales automation, lead qualification, sales performance, customer intelligence"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Sales Automation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Sales{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                  Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Revolutionize your sales process with AI-powered automation that qualifies leads, 
                personalizes outreach, and drives revenue growth through intelligent insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                AI-Powered Sales Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Sales Assistant combines cutting-edge artificial intelligence with deep sales expertise 
                to transform how you engage prospects and close deals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive Sales Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From lead generation to deal closure, our AI assistant handles every aspect of your sales process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Sales Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented sales growth with AI-powered automation and intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Perfect for Every Sales Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're selling software, services, or products, our AI assistant adapts to your industry needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.industry}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sales team size and business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([key, plan], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105'
                      : 'bg-slate-700/50 border-slate-600/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-slate-600 text-white hover:bg-slate-500'
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
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sales Process?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of sales teams who have already accelerated their growth with our AI assistant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Ready to revolutionize your sales process? Our team is here to help you get started.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-700/50 rounded-xl border border-slate-600/50"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Request a Demo
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Tell us about your sales needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Request Demo
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}