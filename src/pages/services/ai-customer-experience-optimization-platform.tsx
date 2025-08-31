import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Rocket, 
  Target, 
  Handshake, 
  Lightbulb, 
  Cpu, 
  Database, 
  Network, 
  Smartphone, 
  Lock, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Wifi, 
  ShieldCheck, 
  Globe2, 
  Bot, 
  Workflow, 
  Eye, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  DollarSign, 
  Atom, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Satellite, 
  Activity, 
  FileText, 
  MessageCircle, 
  Search, 
  BarChart, 
  Users2, 
  Settings, 
  Palette, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock3, 
  Target,
  Heart,
  Smile,
  ThumbsUp,
  Monitor,
  Smartphone as MobileIcon,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Headphones,
  Camera,
  Video,
  Mic,
  Map,
  Navigation,
  Compass,
  Calendar,
  Clock as TimeIcon,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarEvent,
  CalendarUser,
  CalendarSettings,
  CalendarSearch,
  CalendarEdit,
  CalendarTrash,
  CalendarLock,
  CalendarUnlock,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarCopy,
  CalendarPaste,
  CalendarCut,
  CalendarMove,
  CalendarRotate,
  CalendarFlip,
  CalendarZoom,
  CalendarMinimize,
  CalendarMaximize,
  CalendarFullscreen,
  CalendarExitFullscreen,
  CalendarGrid,
  CalendarList,
  CalendarColumns,
  CalendarRows,
  CalendarSort,
  CalendarFilter,
  CalendarGroup,
  CalendarUngroup,
  CalendarSelect,
  CalendarUnselect,
  CalendarSelectAll,
  CalendarUnselectAll,
  CalendarInvert,
  CalendarClear,
  CalendarRefresh,
  CalendarSync,
  CalendarCloud,
  CalendarCloudOff,
  CalendarWifi,
  CalendarWifiOff,
  CalendarBluetooth,
  CalendarBluetoothOff,
  CalendarSignal,
  CalendarSignalOff,
  CalendarBattery,
  CalendarBatteryOff,
  CalendarPower,
  CalendarPowerOff,
  CalendarVolume,
  CalendarVolumeOff,
  CalendarMute,
  CalendarUnmute,
  CalendarPlay,
  CalendarPause,
  CalendarStop,
  CalendarSkipBack,
  CalendarSkipForward,
  CalendarRewind,
  CalendarFastForward,
  CalendarShuffle,
  CalendarRepeat,
  CalendarRepeat1,
  CalendarRepeatOff,
  CalendarShuffleOff,
  CalendarShuffleOn,
  CalendarRepeatOn,
  CalendarRepeatOnce,
  CalendarRepeatAll,
  CalendarRepeatOff,
  CalendarShuffleOff,
  CalendarShuffleOn,
  CalendarRepeatOn,
  CalendarRepeatOnce,
  CalendarRepeatAll
} from 'lucide-react';

const AICustomerExperienceOptimizationPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Insights",
      description: "Advanced machine learning algorithms analyze customer behavior patterns, preferences, and sentiment to provide actionable insights for personalized experiences.",
      benefits: [
        "Real-time customer behavior analysis",
        "Predictive customer journey mapping",
        "Sentiment analysis across all touchpoints",
        "Personalization recommendations engine"
      ]
    },
    {
      icon: Eye,
      title: "Multi-Channel Experience Tracking",
      description: "Comprehensive monitoring across web, mobile, social media, and offline interactions to create seamless omnichannel experiences.",
      benefits: [
        "Cross-platform user journey tracking",
        "Real-time experience monitoring",
        "Unified customer profile creation",
        "Seamless channel transitions"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics & Optimization",
      description: "Leverage historical data and AI algorithms to predict customer needs and automatically optimize experiences for maximum engagement and satisfaction.",
      benefits: [
        "Predictive customer churn prevention",
        "Automated A/B testing optimization",
        "Dynamic content personalization",
        "Performance forecasting and planning"
      ]
    },
    {
      icon: Users,
      title: "Personalized Customer Journeys",
      description: "Create unique, adaptive customer experiences that evolve based on individual preferences, behavior, and real-time interactions.",
      benefits: [
        "Dynamic journey orchestration",
        "Contextual content delivery",
        "Adaptive user interfaces",
        "Behavioral trigger automation"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reporting and analytics tools providing deep insights into customer experience metrics, conversion rates, and ROI.",
      benefits: [
        "Real-time performance monitoring",
        "Custom KPI dashboards",
        "Advanced segmentation analysis",
        "ROI measurement and attribution"
      ]
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Built with privacy and compliance at the core, ensuring customer data protection while maintaining personalization capabilities.",
      benefits: [
        "GDPR and CCPA compliance",
        "Zero-party data collection",
        "Transparent data usage policies",
        "Secure data encryption"
      ]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize product recommendations, streamline checkout processes, and create personalized shopping experiences that increase conversion rates and customer lifetime value.",
      metrics: ["25% increase in conversion rates", "40% improvement in customer retention", "35% boost in average order value"]
    },
    {
      industry: "Financial Services",
      description: "Enhance digital banking experiences, personalize financial advice, and improve customer satisfaction while maintaining security and compliance standards.",
      metrics: ["30% improvement in customer satisfaction", "45% reduction in support tickets", "50% increase in digital adoption"]
    },
    {
      industry: "Healthcare",
      description: "Create patient-centric digital experiences, optimize appointment scheduling, and improve patient engagement while ensuring HIPAA compliance.",
      metrics: ["40% improvement in patient engagement", "35% reduction in no-shows", "50% increase in patient satisfaction"]
    },
    {
      industry: "Travel & Hospitality",
      description: "Personalize travel recommendations, optimize booking experiences, and create memorable customer journeys that drive loyalty and repeat business.",
      metrics: ["30% increase in booking conversions", "45% improvement in customer loyalty", "40% boost in upsell opportunities"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their customer experience optimization journey",
      features: [
        "Up to 10,000 monthly active users",
        "Basic AI insights and analytics",
        "3 customer journey templates",
        "Email and chat support",
        "Standard integrations (5 platforms)",
        "Basic reporting dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced customer experience needs",
      features: [
        "Up to 100,000 monthly active users",
        "Advanced AI insights and predictive analytics",
        "Unlimited customer journey templates",
        "Priority support with dedicated manager",
        "Advanced integrations (25+ platforms)",
        "Custom reporting and analytics",
        "A/B testing and optimization tools",
        "Multi-channel experience tracking"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Comprehensive solution for large organizations with complex customer experience requirements",
      features: [
        "Unlimited monthly active users",
        "Custom AI model training and optimization",
        "Advanced journey orchestration",
        "24/7 dedicated support team",
        "Custom integrations and API access",
        "Advanced security and compliance features",
        "Multi-tenant architecture",
        "Custom development and consulting",
        "SLA guarantees and performance monitoring"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Customer Experience",
      company: "Global Retail Corp",
      content: "The AI Customer Experience Optimization Platform transformed how we understand and serve our customers. We've seen a 40% improvement in customer satisfaction scores and a 35% increase in repeat purchases.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Director of Digital Strategy",
      company: "FinTech Innovations",
      content: "This platform has revolutionized our digital banking experience. The predictive analytics help us anticipate customer needs, resulting in a 50% reduction in support tickets and significantly higher customer engagement.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Patient Experience",
      company: "Healthcare Plus",
      content: "Implementing this platform has dramatically improved our patient engagement. The personalized journey mapping and automated optimization have led to a 45% improvement in patient satisfaction and better health outcomes.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>AI Customer Experience Optimization Platform - Zion Tech Group</title>
        <meta name="description" content="Transform customer experiences with our AI-powered optimization platform. Personalized journeys, predictive analytics, and seamless omnichannel experiences." />
        <meta name="keywords" content="AI customer experience, customer journey optimization, predictive analytics, personalization, omnichannel experience" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-experience-optimization-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                AI-Powered Customer Experience
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Customer Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Optimization Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionize customer experiences with AI-powered insights, predictive analytics, and personalized journey optimization. 
                Create seamless omnichannel experiences that drive engagement, loyalty, and business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Customer Experiences with AI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with deep customer insights to create 
                personalized, engaging experiences that drive measurable business results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry-Leading Results
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how organizations across industries are transforming customer experiences 
                and achieving remarkable business outcomes with our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-purple-400">
                        <TrendingUp className="w-4 h-4 mr-3" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the perfect plan for your customer experience optimization needs. 
                Start with a free trial and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border hover:border-purple-400/50 transition-all duration-300 ${
                    plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/25 scale-105' : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-400 hover:to-blue-400 transform hover:scale-105'
                      : 'bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400/20'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say 
                about our AI Customer Experience Optimization Platform.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-3xl p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Customer Experiences?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                  Join hundreds of organizations that have already revolutionized their customer 
                  experiences with our AI-powered platform. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                    <span className="flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
                
                <div className="flex justify-center">
                  <button className="group px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Contact Sales Team
                    </span>
                  </button>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>14-Day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-blue-400" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span>Custom Implementation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerExperienceOptimizationPlatform;