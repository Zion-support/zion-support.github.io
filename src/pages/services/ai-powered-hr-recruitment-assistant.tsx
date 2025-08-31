import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  BarChart3,
  Activity,
  Eye,
  Shield,
  Mail,
  Phone,
  MapPin,
  Play,
  Calendar,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Network,
  UserCheck,
  UserPlus,
  Search,
  Filter,
  MessageCircle,
  FileText,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  Building2,
  Globe
} from 'lucide-react';

const AIPoweredHRRecruitmentAssistant = () => {
  const features = [
    {
      title: "AI Candidate Screening",
      description: "Automatically screen resumes and applications with 95% accuracy using advanced AI algorithms",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "Smart Job Matching",
      description: "Intelligent matching of candidates to job requirements based on skills, experience, and culture fit",
      icon: Target,
      color: "text-green-500"
    },
    {
      title: "Automated Interview Scheduling",
      description: "Streamline interview coordination with AI-powered scheduling and calendar management",
      icon: Calendar,
      color: "text-purple-500"
    },
    {
      title: "Candidate Experience Analytics",
      description: "Track and optimize the candidate journey with comprehensive analytics and insights",
      icon: BarChart3,
      color: "text-orange-500"
    },
    {
      title: "Diversity & Inclusion Tools",
      description: "Ensure fair hiring practices with AI-powered bias detection and diversity analytics",
      icon: Users,
      color: "text-yellow-500"
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with ATS, HRIS, and other recruitment tools for maximum efficiency",
      icon: Network,
      color: "text-indigo-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Startup",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses hiring up to 20 positions annually",
      features: [
        "Up to 20 job postings/month",
        "Basic AI screening",
        "Standard job matching",
        "Email support",
        "Basic analytics dashboard",
        "Resume parsing",
        "Interview scheduling",
        "3 user accounts"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Growth",
      price: "$699",
      period: "/month",
      description: "Ideal for growing companies hiring up to 100 positions annually",
      features: [
        "Up to 100 job postings/month",
        "Advanced AI screening",
        "Smart job matching",
        "Priority support",
        "Advanced analytics",
        "Multi-channel posting",
        "Candidate scoring",
        "Unlimited users",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "Comprehensive solution for large organizations with unlimited hiring needs",
      features: [
        "Unlimited job postings",
        "Custom AI model training",
        "Advanced candidate analytics",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "Advanced security features",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      title: "Reduce Time-to-Hire by 60%",
      description: "Accelerate the recruitment process with AI-powered automation and smart screening",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      title: "Improve Quality of Hire by 40%",
      description: "Better candidate matching leads to higher retention and performance",
      icon: Star,
      color: "text-green-500"
    },
    {
      title: "Reduce Recruitment Costs by 50%",
      description: "Automate manual tasks and reduce agency fees with AI-powered recruitment",
      icon: DollarSign,
      color: "text-purple-500"
    },
    {
      title: "Enhance Candidate Experience",
      description: "Provide faster feedback and better communication throughout the hiring process",
      icon: UserCheck,
      color: "text-orange-500"
    }
  ];

  const useCases = [
    {
      title: "High-Volume Hiring",
      description: "Scale recruitment efforts for seasonal hiring, expansion, or rapid growth",
      icon: Users,
      examples: ["Seasonal hiring", "Mass recruitment", "Campus recruitment", "International hiring"]
    },
    {
      title: "Technical Recruitment",
      description: "Specialized AI for technical roles with skill assessment and coding challenges",
      icon: Cpu,
      examples: ["Software engineers", "Data scientists", "DevOps engineers", "Product managers"]
    },
    {
      title: "Executive Search",
      description: "AI-powered executive recruitment with culture fit and leadership assessment",
      icon: Building2,
      examples: ["C-level positions", "Board members", "Senior executives", "Department heads"]
    },
    {
      title: "Diversity Hiring",
      description: "Ensure inclusive hiring practices with bias detection and diversity analytics",
      icon: Globe,
      examples: ["Gender diversity", "Ethnic diversity", "Age diversity", "Neurodiversity"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered HR Recruitment Assistant
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Transform your recruitment process with AI-powered automation. Find the best 
                candidates faster, reduce costs, and improve hiring quality with intelligent AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Recruitment AI Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge recruitment technology with comprehensive 
              automation to transform how you find and hire talent.
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
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-slate-600/50 mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Recruitment Process
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Stop spending hours on manual recruitment tasks and start focusing on 
              what matters most - building your dream team.
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
                className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className={`p-3 rounded-lg bg-slate-600/50 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recruitment Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered recruitment platform is designed to serve organizations 
              across various industries and hiring needs.
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
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 mr-4">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recruitment Platform Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that fits your recruitment needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-700/50 p-8 rounded-xl border ${
                  tier.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-slate-700/50 to-blue-900/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zinc-400">{tier.period}</span>
                  </div>
                  <p className="text-zinc-300 mb-4">{tier.description}</p>
                  {tier.savings && (
                    <p className="text-green-400 text-sm font-semibold">{tier.savings}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-green-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations that have transformed their hiring process 
              with our AI-powered recruitment platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zinc-300 hover:text-white transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zinc-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zinc-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredHRRecruitmentAssistant;