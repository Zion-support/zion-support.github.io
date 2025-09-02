import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Bot, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Smartphone,
  Clock,
  Target,
  DollarSign,
  Eye,
  MousePointer,
  Palette,
  Database,
  Cpu,
  Network,
  Lock,
  Phone,
  MapPin,
  PieChart,
  Activity,
  CreditCard,
  UserCheck,
  Settings,
  BookOpen,
  Video,
  FileText,
  Headphones,
  Monitor,
  Brain,
  Lightbulb,
  Trophy,
  Calendar
} from 'lucide-react';

const AILearningManagementSystem = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Content Creation",
      description: "Automatically generate personalized learning content, quizzes, and assessments using advanced AI that adapts to individual learning styles."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Adaptive Learning Paths",
      description: "AI-driven personalized learning paths that adjust based on learner progress, strengths, and knowledge gaps for optimal outcomes."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Machine learning algorithms predict learner success, identify at-risk students, and recommend interventions for improved outcomes."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Intelligent Video Processing",
      description: "AI-powered video analysis for automatic transcription, captioning, and content summarization with multi-language support."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Assessment",
      description: "Smart assessment generation with automatic grading, feedback, and performance tracking across multiple learning objectives."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance & Security",
      description: "Built-in compliance with SCORM, xAPI, GDPR, and FERPA standards with enterprise-grade security and data protection."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 100 learners",
        "Basic AI features",
        "Standard content library",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing organizations",
      features: [
        "Up to 1,000 learners",
        "Advanced AI features",
        "Custom content creation",
        "Priority support",
        "Advanced analytics",
        "API access",
        "White-label options",
        "Integration with 50+ tools"
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
        "Unlimited learners",
        "Custom AI models",
        "Advanced reporting",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "45% Faster Learning",
      description: "AI-optimized learning paths and personalized content accelerate knowledge acquisition."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "90% Engagement Rate",
      description: "Interactive AI features and gamification keep learners engaged and motivated."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "70% Time Savings",
      description: "Automated content creation and assessment reduce administrative overhead."
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      title: "85% Completion Rate",
      description: "Personalized learning experiences and adaptive paths improve course completion."
    }
  ];

  const integrations = [
    { name: "Microsoft Teams", logo: "💼" },
    { name: "Slack", logo: "💬" },
    { name: "Zoom", logo: "📹" },
    { name: "Google Workspace", logo: "🌐" },
    { name: "Salesforce", logo: "☁️" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Workday", logo: "👥" },
    { name: "BambooHR", logo: "🌱" },
    { name: "ADP", logo: "📊" },
    { name: "Paycom", logo: "💰" },
    { name: "Cornerstone", logo: "🏢" },
    { name: "SuccessFactors", logo: "📈" }
  ];

  const learningFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Content",
      description: "Rich multimedia content with interactive elements, simulations, and virtual reality experiences."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Learning",
      description: "AI-enhanced video platform with automatic transcription, chapter markers, and progress tracking."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Management",
      description: "Smart document processing with AI-powered search, summarization, and knowledge extraction."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Learning",
      description: "Podcast-style learning with AI-generated audio content and voice-based assessments."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Virtual Classrooms",
      description: "AI-powered virtual classrooms with real-time collaboration and automated attendance tracking."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamification",
      description: "AI-driven gamification with personalized challenges, leaderboards, and achievement systems."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              AI-Powered Learning Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Learning Management
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> System</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your training and education with AI-powered personalized learning, automated content creation, and predictive analytics. 
              Achieve 45% faster learning and 90% engagement rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors">
                Watch Demo
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with proven learning methodologies to deliver exceptional educational outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Learning Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, deliver, and track engaging learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of organizations achieving remarkable learning outcomes with our AI-powered platform.
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
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms for a unified learning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors"
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="text-white font-medium">{integration.name}</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization size. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                  tier.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-gray-400 ml-1">
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of organizations using AI to create more effective and engaging learning programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-300 mb-6">
                  Ready to revolutionize your learning and training programs? Contact our team to learn more about our AI-powered LMS.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILearningManagementSystem;