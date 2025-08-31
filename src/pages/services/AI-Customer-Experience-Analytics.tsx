import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  Wifi, 
  Database, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Chip,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Handshake,
  Building2,
  FileText,
  HelpCircle,
  Award,
  Heart,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Monitor,
  Gauge,
  Layers,
  RefreshCw,
  AlertTriangle,
  CheckSquare,
  PieChart,
  LineChart,
  BarChart3 as BarChartIcon,
  Activity as ActivityIcon,
  User,
  Smile,
  Frown,
  TrendingDown,
  Target as TargetIcon,
  MousePointer,
  Smartphone as PhoneIcon,
  Globe as GlobeIcon,
  Calendar,
  Clock as ClockIcon,
  Filter,
  Search,
  Download,
  Share2,
  Bell,
  Settings as SettingsIcon,
  Zap as ZapIcon,
  Award as AwardIcon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Mail as MailIcon,
  Phone as PhoneCallIcon,
  Video,
  Camera,
  Microphone,
  Headphones,
  Monitor as MonitorIcon,
  Tablet,
  Smartphone as MobileIcon
} from 'lucide-react';

export default function AICustomerExperienceAnalytics() {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Instant analysis of customer emotions and satisfaction levels across all touchpoints",
      icon: Smile,
      benefits: ["Live sentiment tracking", "Emotion detection", "Mood analysis"]
    },
    {
      title: "Omnichannel Journey Mapping",
      description: "Complete customer journey visualization across all platforms and interactions",
      icon: Network,
      benefits: ["Cross-platform tracking", "Journey optimization", "Touchpoint analysis"]
    },
    {
      title: "Predictive Customer Behavior",
      description: "AI-powered predictions of customer actions and churn risk",
      icon: Brain,
      benefits: ["Churn prediction", "Behavior forecasting", "Proactive engagement"]
    },
    {
      title: "Personalization Engine",
      description: "Dynamic content and experience personalization based on real-time insights",
      icon: Target,
      benefits: ["Dynamic content", "Personalized experiences", "A/B testing"]
    }
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Enhance online shopping experiences with personalized recommendations",
      icon: ShoppingCart,
      examples: ["Product recommendations", "Cart abandonment analysis", "Personalized offers"]
    },
    {
      title: "Customer Support",
      description: "Improve support quality and response times with AI insights",
      icon: MessageSquare,
      examples: ["Support ticket analysis", "Response optimization", "Customer satisfaction"]
    },
    {
      title: "Marketing Campaigns",
      description: "Optimize marketing efforts with customer behavior insights",
      icon: Target,
      examples: ["Campaign performance", "Audience segmentation", "ROI optimization"]
    },
    {
      title: "Product Development",
      description: "Guide product decisions with customer feedback and usage data",
      icon: Lightbulb,
      examples: ["Feature prioritization", "User feedback analysis", "Product roadmap"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses starting with CX analytics",
      features: [
        "Up to 10,000 monthly interactions",
        "Basic sentiment analysis",
        "Standard reporting",
        "Email support",
        "Core analytics dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,500",
      period: "/month",
      description: "Ideal for growing businesses with advanced CX needs",
      features: [
        "Up to 100,000 monthly interactions",
        "Advanced AI analytics",
        "Omnichannel tracking",
        "Priority support",
        "Custom dashboards",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large enterprises with complex CX requirements",
      features: [
        "Unlimited interactions",
        "Custom AI models",
        "Advanced personalization",
        "24/7 support",
        "White-label options",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "NLTK", "SpaCy", "BERT",
    "Apache Kafka", "Redis", "Elasticsearch", "PostgreSQL", "MongoDB", "InfluxDB",
    "React", "Vue.js", "Angular", "Node.js", "Python", "Java", "Scala",
    "AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform"
  ];

  const benefits = [
    {
      title: "Increased Customer Satisfaction",
      description: "Deliver personalized experiences that exceed customer expectations",
      icon: Smile,
      metrics: ["25% improvement in NPS", "40% higher satisfaction scores", "Improved retention"]
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimize customer journeys to maximize conversion opportunities",
      icon: TrendingUp,
      metrics: ["30% increase in conversions", "Reduced cart abandonment", "Higher engagement"]
    },
    {
      title: "Reduced Customer Churn",
      description: "Identify and address customer issues before they lead to churn",
      icon: Heart,
      metrics: ["20% reduction in churn", "Proactive issue resolution", "Better retention"]
    },
    {
      title: "Improved ROI",
      description: "Maximize marketing and customer experience investment returns",
      icon: DollarSign,
      metrics: ["35% higher marketing ROI", "Optimized resource allocation", "Better targeting"]
    }
  ];

  const analyticsFeatures = [
    {
      title: "Real-time Dashboards",
      description: "Live monitoring of customer experience metrics and KPIs",
      icon: BarChart3,
      features: ["Live data updates", "Custom KPIs", "Interactive charts"]
    },
    {
      title: "Advanced Segmentation",
      description: "AI-powered customer segmentation for targeted experiences",
      icon: Users,
      features: ["Behavioral segmentation", "Demographic analysis", "Predictive clustering"]
    },
    {
      title: "Automated Insights",
      description: "AI-generated insights and recommendations for optimization",
      icon: Lightbulb,
      features: ["Automated reporting", "Smart recommendations", "Trend detection"]
    },
    {
      title: "Integration Hub",
      description: "Seamless integration with your existing tools and platforms",
      icon: Network,
      features: ["API-first approach", "Webhook support", "Custom integrations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI Customer Experience Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Understand Your Customers
              <span className="block text-zion-cyan">Like Never Before</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform customer experience with AI-powered analytics that provide real-time insights, 
              predictive behavior modeling, and personalized engagement strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Schedule Demo
              </a>
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
              Advanced CX Analytics Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive analytics to deliver 
              unprecedented insights into customer behavior and satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
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
              Powerful Analytics Platform
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive analytics tools designed to give you complete visibility into 
              your customer experience and business performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light">
                      <CheckSquare className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable Business Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              AI-powered customer experience analytics deliver tangible results that directly 
              impact your bottom line and customer relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6">{benefit.description}</p>
                <div className="space-y-3">
                  {benefit.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light">
                      <CheckSquare className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Customer experience analytics are transforming industries across the globe, 
              enabling data-driven decisions and personalized experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-zion-slate-light">
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Choose the plan that fits your customer experience analytics needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/20'
                }">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver 
              exceptional performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-colors"
              >
                <span className="text-sm text-zion-slate-light font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that are already leveraging AI-powered analytics 
              to gain competitive advantages and drive customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Phone</span>
              <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light text-sm">Address</span>
              <span className="text-white text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}