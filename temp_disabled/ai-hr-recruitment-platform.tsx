import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Shield,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Rocket,
  Sparkles,
  FileText,
  Code,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Eye,
  Search,
  Filter,
  Clipboard,
  PenTool,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserEdit,
  UserSearch,
  UserCog,
  UserShield,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheck2,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserEdit2,
  UserSearch2,
  UserCog2,
  UserShield2,
  UserVoice2,
  UserHeart2,
  UserStar2,
  Calendar,
  Clock2,
  Timer,
  Stopwatch,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarEdit,
  CalendarSearch,
  CalendarClock,
  CalendarRange,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarSettings,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarCopy,
  CalendarTrash,
  CalendarArchive,
  CalendarUnarchive,
  CalendarPin,
  CalendarUnpin,
  CalendarBookmark,
  CalendarUnbookmark,
  CalendarFlag,
  CalendarUnflag,
  CalendarReport,
  CalendarBlock,
  CalendarUnblock,
  CalendarMute,
  CalendarUnmute,
  CalendarHide,
  CalendarShow,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarUnkey,
  CalendarShield,
  CalendarUnshield,
  CalendarCheck2,
  CalendarX2,
  CalendarPlus2,
  CalendarMinus2,
  CalendarEdit2,
  CalendarSearch2,
  CalendarClock2,
  CalendarRange2,
  CalendarHeart2,
  CalendarStar2,
  CalendarUser2,
  CalendarSettings2,
  CalendarDownload2,
  CalendarUpload2,
  CalendarShare2,
  CalendarCopy2,
  CalendarTrash2,
  CalendarArchive2,
  CalendarUnarchive2,
  CalendarPin2,
  CalendarUnpin2,
  CalendarBookmark2,
  CalendarUnbookmark2,
  CalendarFlag2,
  CalendarUnflag2,
  CalendarReport2,
  CalendarBlock2,
  CalendarUnblock2,
  CalendarMute2,
  CalendarUnmute2,
  CalendarHide2,
  CalendarShow2,
  CalendarLock2,
  CalendarUnlock2,
  CalendarKey2,
  CalendarUnkey2,
  CalendarShield2,
  CalendarUnshield2,
  MessageSquare,
  Play
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AIHRRecruitmentPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms match candidates to job requirements with 95% accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: UserCheck,
      title: "Automated Screening",
      description: "Intelligent resume parsing and candidate evaluation using NLP",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Hiring Analytics",
      description: "AI-driven insights into candidate success probability and retention",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Diversity & Inclusion AI",
      description: "Bias-free hiring with AI-powered diversity optimization",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Smart Job Posting",
      description: "AI-optimized job descriptions that attract the best candidates",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description: "Automated compliance checking for hiring regulations and requirements",
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time to Hire",
      description: "Reduce time to hire by 65%",
      metric: "65%"
    },
    {
      icon: DollarSign,
      title: "Cost per Hire",
      description: "Lower recruitment costs by 50%",
      metric: "50%"
    },
    {
      icon: TrendingUp,
      title: "Quality of Hire",
      description: "Improve candidate quality by 40%",
      metric: "40%"
    },
    {
      icon: Users,
      title: "Retention Rate",
      description: "Increase employee retention by 35%",
      metric: "35%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 25 job postings",
        "AI candidate matching",
        "Basic screening automation",
        "Standard reporting",
        "Email support",
        "5 user accounts",
        "Basic compliance tools"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 job postings",
        "Advanced AI analytics",
        "Full screening automation",
        "Advanced reporting & dashboards",
        "Priority support",
        "Unlimited user accounts",
        "Advanced compliance features",
        "API access",
        "Custom integrations",
        "Diversity analytics"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "Full AI suite access",
        "Custom AI model training",
        "Enterprise compliance",
        "Dedicated support manager",
        "White-label options",
        "Advanced security features",
        "Custom development",
        "Multi-location support",
        "Advanced analytics"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Tech Recruitment",
      description: "AI-powered technical assessment and skill matching for developers",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Executive Search",
      description: "Advanced candidate profiling and cultural fit analysis",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mass Hiring",
      description: "Automated screening for high-volume recruitment campaigns",
      icon: UserPlus,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Remote Hiring",
      description: "AI-powered remote candidate assessment and onboarding",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI HR & Recruitment Platform - Zion Tech Group"
        description="Revolutionary AI-powered HR and recruitment platform that automates hiring processes, improves candidate quality, and reduces time to hire by 65%."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered HR &
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Recruitment Platform
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your hiring process with intelligent automation, predictive analytics, 
              and AI-driven insights that reduce time to hire by 65% and improve quality by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with intuitive HR tools 
              to deliver unprecedented efficiency and insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of companies that have transformed their hiring processes 
              with our AI-powered platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-blue-500 mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial 
              and our industry-leading AI technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-gray-700'
                } hover:border-gray-600 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
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
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/demo"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform is designed to work across all industries and company sizes, 
              providing tailored solutions for your specific hiring needs.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${useCase.color} mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of HR and recruitment with AI-powered automation that 
              delivers real results and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-lg text-gray-300 mb-8">
                Ready to revolutionize your hiring process? Our AI experts are here 
                to help you implement the perfect solution for your organization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Request a Custom Demo
              </h3>
              <p className="text-gray-300 mb-6">
                See how our AI platform can transform your specific hiring needs.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 w-full justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}