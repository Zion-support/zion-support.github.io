import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  MapPin,
  Users,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Eye,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Code,
  Server,
  Wifi,
  Activity,
  FileText,
  MessageCircle,
  Settings,
  Palette,
  Scale,
  Gauge,
  PenTool,
  Brain,
  Cloud,
  ShieldCheck,
  Bot,
  Workflow,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Heart,
  Home,
  Target2,
  Monitor,
  Smartphone as Mobile,
  Globe2,
  Link,
  Hash,
  Tag,
  MousePointer,
  Calendar,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle
} from 'lucide-react';

export default function AIPoweredSEO() {
  const features = [
    {
      title: "AI Content Optimization",
      description: "Advanced AI algorithms that analyze and optimize your content for maximum search engine visibility and user engagement",
      icon: PenTool,
      benefits: ["Keyword density optimization", "Content readability scoring", "Semantic analysis", "Competitor content insights"]
    },
    {
      title: "Intelligent Keyword Research",
      description: "AI-powered keyword discovery that identifies high-opportunity, low-competition keywords for your industry",
      icon: Search,
      benefits: ["Long-tail keyword discovery", "Search volume analysis", "Competition assessment", "Seasonal trend prediction"]
    },
    {
      title: "Automated Technical SEO",
      description: "Comprehensive technical SEO auditing and optimization with automated fixes and monitoring",
      icon: Settings,
      benefits: ["Site speed optimization", "Mobile responsiveness", "Schema markup generation", "Core Web Vitals monitoring"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models that predict search ranking changes and provide actionable insights",
      icon: TrendingUp,
      benefits: ["Ranking prediction", "Traffic forecasting", "Competitor analysis", "Algorithm update impact"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Up to 5 websites",
        "Basic keyword research",
        "Content optimization",
        "Monthly SEO reports",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 25 websites",
        "Advanced AI optimization",
        "Competitor analysis",
        "Technical SEO audits",
        "API access",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large-scale SEO operations",
      features: [
        "Unlimited websites",
        "Full AI automation",
        "Custom AI training",
        "White-label reports",
        "24/7 dedicated support",
        "On-premise deployment",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Traffic Increase",
      value: "300%",
      description: "Average increase in organic search traffic within 6 months"
    },
    {
      title: "Ranking Improvement",
      value: "85%",
      description: "Of keywords show improved rankings within 3 months"
    },
    {
      title: "Conversion Rate",
      value: "45%",
      description: "Higher conversion rates from optimized landing pages"
    },
    {
      title: "ROI Improvement",
      value: "400%",
      description: "Return on investment compared to traditional SEO methods"
    }
  ];

  const seoTools = [
    {
      name: "AI Content Writer",
      description: "Generate SEO-optimized content with AI assistance",
      price: "$49/month",
      features: ["AI-powered content creation", "SEO optimization", "Plagiarism checking", "Content templates"]
    },
    {
      name: "Keyword Research Pro",
      description: "Advanced keyword research and analysis tools",
      price: "$79/month",
      features: ["Long-tail keyword discovery", "Competition analysis", "Search volume data", "Keyword clustering"]
    },
    {
      name: "Technical SEO Auditor",
      description: "Comprehensive technical SEO analysis and fixes",
      price: "$99/month",
      features: ["Site speed optimization", "Mobile optimization", "Schema markup", "Core Web Vitals"]
    },
    {
      name: "Ranking Tracker",
      description: "Monitor keyword rankings and competitor analysis",
      price: "$69/month",
      features: ["Real-time tracking", "Competitor monitoring", "Ranking alerts", "Historical data"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered SEO Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your SEO with our AI-powered platform. Increase organic traffic by 300%, improve rankings by 85%, and achieve 400% ROI improvement." />
        <meta name="keywords" content="AI SEO, artificial intelligence SEO, automated SEO, keyword research, content optimization, technical SEO" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-powered-seo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              AI-Powered SEO
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> SEO Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your search engine optimization with cutting-edge AI that analyzes, optimizes, and predicts 
              SEO performance. Increase organic traffic by 300% and improve rankings by 85% within months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Video className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI SEO platform has delivered measurable improvements for businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-zion-cyan mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI SEO Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence to revolutionize your search engine optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized SEO Tools
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose individual tools or get the complete platform for maximum SEO success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{tool.description}</p>
                <div className="text-2xl font-bold text-zion-cyan mb-4">{tool.price}</div>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full block text-center py-2 px-4 bg-zion-purple/20 text-zion-purple border border-zion-purple/30 rounded-lg hover:bg-zion-purple/30 transition-all duration-300 text-sm font-medium"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Platform Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your SEO needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  tier.popular
                    ? 'bg-zion-slate-dark border-zion-cyan/40 scale-105'
                    : 'bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-cyan/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">
                    {tier.price}
                    <span className="text-lg text-zion-slate-light">{tier.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already using our AI platform to increase traffic, 
              improve rankings, and grow their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}