import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Database, 
  Lock, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Network,
  Code,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Wifi,
  Key,
  Eye,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  Globe2,
  ShieldCheck,
  Zap as Lightning,
  Palette,
  Camera,
  Video,
  Mic,
  Headphones,
  Printer,
  HardDrive,
  Wrench,
  Tool,
  Briefcase,
  Award,
  Heart,
  Clock,
  AlertTriangle,
  CheckSquare,
  FileCheck,
  UserCheck,
  UserPlus,
  UserX,
  UserCog,
  UserShield,
  UserVoice,
  UserSearch,
  UserEdit,
  UserMinus,
  UserClock,
  UserStar,
  UserHeart,
  UserZap,
  UserTarget,
  UserTrendingUp,
  UserSettings,
  UserCrown,
  UserAward,
  UserTrophy,
  UserMedal,
  UserBadge,
  UserCertificate,
  UserDiploma,
  UserDegree,
  UserGraduation,
  UserProfessor,
  UserTeacher,
  UserStudent,
  UserLearner,
  UserScholar,
  UserResearcher,
  UserScientist,
  UserEngineer,
  UserDeveloper,
  UserProgrammer,
  UserCoder,
  UserHacker,
  UserGuru,
  UserExpert,
  UserSpecialist,
  UserConsultant,
  UserAdvisor,
  UserMentor,
  UserCoach,
  UserTrainer,
  UserInstructor,
  UserGuide,
  UserLeader,
  UserManager,
  UserDirector,
  UserExecutive,
  UserCEO,
  UserCFO,
  UserCTO,
  UserCOO,
  UserCMO,
  UserCHRO,
  UserCLO,
  UserCISO,
  UserCDO,
  UserCAO,
  UserCRO,
  UserCCO,
  UserCPO,
  UserCQO,
  UserCSO,
  UserCTO2,
  UserCIO,
  UserCDO2,
  UserCMO2,
  UserCFO2,
  UserCEO2,
  UserPresident,
  UserVicePresident,
  UserSeniorVicePresident,
  UserExecutiveVicePresident,
  UserChief,
  UserPrincipal,
  UserPartner,
  UserAssociate,
  UserSenior,
  UserJunior,
  UserEntry,
  UserIntern,
  UserTrainee,
  UserApprentice,
  UserNovice,
  UserBeginner,
  UserIntermediate,
  UserAdvanced,
  UserExpert2,
  UserMaster,
  UserGuru2,
  UserLegend,
  UserIcon,
  UserHero,
  UserChampion,
  UserWinner,
  UserVictor,
  UserConqueror,
  UserWarrior,
  UserFighter,
  UserSoldier,
  UserGuard,
  UserProtector,
  UserDefender,
  UserKnight,
  UserPaladin,
  UserCrusader,
  UserTemplar,
  UserMonk,
  UserPriest,
  UserMage,
  UserWizard,
  UserSorcerer,
  UserWarlock,
  UserDruid,
  UserShaman,
  UserNecromancer,
  UserSummoner,
  UserConjurer,
  UserEnchanter,
  UserIllusionist,
  UserDiviner,
  UserAbjurer,
  UserEvoker,
  UserTransmuter,
  UserConjurer2,
  UserEnchanter2,
  UserIllusionist2,
  UserDiviner2,
  UserAbjurer2,
  UserEvoker2,
  UserTransmuter2,
  UserConjurer3,
  UserEnchanter3,
  UserIllusionist3,
  UserDiviner3,
  UserAbjurer3,
  UserEvoker3,
  UserTransmuter3,
  UserConjurer4,
  UserEnchanter4,
  UserIllusionist4,
  UserDiviner4,
  UserAbjurer4,
  UserEvoker4,
  UserTransmuter4,
  UserConjurer5,
  UserEnchanter5,
  UserIllusionist5,
  UserDiviner5,
  UserAbjurer5,
  UserEvoker5,
  UserTransmuter5
} from 'lucide-react';

const Services = () => {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const services = {
    ai: [
      {
        title: "AI Content Creation Suite",
        description: "Advanced AI-powered content generation for marketing, blogs, and social media with SEO optimization.",
        features: ["Multi-language support", "SEO optimization", "Brand voice consistency", "Plagiarism detection"],
        price: "$299/month",
        icon: FileText,
        link: "/services/ai-content-creation-suite",
        category: "Content & Marketing"
      },
      {
        title: "AI Customer Experience Analytics",
        description: "Real-time customer behavior analysis and sentiment tracking for improved customer satisfaction.",
        features: ["Sentiment analysis", "Behavior tracking", "Predictive insights", "Automated reporting"],
        price: "$499/month",
        icon: Users,
        link: "/services/ai-customer-experience-analytics",
        category: "Customer Analytics"
      },
      {
        title: "AI Financial Trading Platform",
        description: "Algorithmic trading platform with AI-powered market analysis and automated trading strategies.",
        features: ["Real-time market data", "Risk management", "Portfolio optimization", "Backtesting"],
        price: "$1,299/month",
        icon: TrendingUp,
        link: "/services/ai-financial-trading-platform",
        category: "Financial Services"
      },
      {
        title: "AI Healthcare Analytics Platform",
        description: "Comprehensive healthcare data analytics for patient care optimization and medical insights.",
        features: ["Patient data analysis", "Treatment optimization", "Predictive diagnostics", "HIPAA compliance"],
        price: "$899/month",
        icon: Heart,
        link: "/services/ai-healthcare-analytics-platform",
        category: "Healthcare"
      },
      {
        title: "AI Project Management",
        description: "Intelligent project management with automated task allocation and progress tracking.",
        features: ["Smart task assignment", "Progress tracking", "Resource optimization", "Risk prediction"],
        price: "$399/month",
        icon: Target,
        link: "/services/ai-project-management",
        category: "Project Management"
      },
      {
        title: "AI Cybersecurity Suite",
        description: "Advanced threat detection and prevention using machine learning and behavioral analysis.",
        features: ["Threat detection", "Behavioral analysis", "Incident response", "Compliance reporting"],
        price: "$799/month",
        icon: Shield,
        link: "/services/ai-cybersecurity-suite",
        category: "Cybersecurity"
      }
    ],
    microSaaS: [
      {
        title: "Micro CRM Platform",
        description: "Lightweight CRM solution for small businesses with essential customer management features.",
        features: ["Contact management", "Lead tracking", "Sales pipeline", "Email integration"],
        price: "$49/month",
        icon: Users,
        link: "/services/micro-crm",
        category: "Customer Management"
      },
      {
        title: "Helpdesk Platform",
        description: "Streamlined customer support platform with ticket management and knowledge base.",
        features: ["Ticket management", "Knowledge base", "Customer portal", "Analytics"],
        price: "$79/month",
        icon: MessageSquare,
        link: "/services/helpdesk-platform",
        category: "Customer Support"
      },
      {
        title: "Website Analytics Dashboard",
        description: "Comprehensive website analytics with real-time insights and performance monitoring.",
        features: ["Real-time analytics", "Performance monitoring", "SEO tracking", "Custom reports"],
        price: "$39/month",
        icon: BarChart3,
        link: "/services/website-analytics",
        category: "Analytics"
      },
      {
        title: "AI-Powered SEO Tool",
        description: "Intelligent SEO optimization with keyword research and content recommendations.",
        features: ["Keyword research", "Content optimization", "Rank tracking", "Competitor analysis"],
        price: "$89/month",
        icon: Search,
        link: "/services/ai-powered-seo",
        category: "Marketing"
      }
    ],
    it: [
      {
        title: "Cloud DevOps Automation",
        description: "Automated DevOps pipeline with CI/CD, infrastructure as code, and monitoring.",
        features: ["CI/CD pipelines", "Infrastructure as Code", "Monitoring", "Security scanning"],
        price: "$599/month",
        icon: Cloud,
        link: "/services/cloud-devops",
        category: "DevOps"
      },
      {
        title: "IT Infrastructure Management",
        description: "Comprehensive IT infrastructure monitoring and management for enterprise environments.",
        features: ["Infrastructure monitoring", "Performance optimization", "Capacity planning", "Disaster recovery"],
        price: "$699/month",
        icon: Server,
        link: "/services/it-infrastructure",
        category: "Infrastructure"
      },
      {
        title: "FinOps Advisor Platform",
        description: "Cloud cost optimization and financial operations management for cloud resources.",
        features: ["Cost optimization", "Resource allocation", "Budget management", "Usage analytics"],
        price: "$399/month",
        icon: DollarSign,
        link: "/services/finops-advisor",
        category: "Financial Operations"
      },
      {
        title: "Zero Trust Network Access",
        description: "Secure remote access solution with zero trust principles and advanced authentication.",
        features: ["Zero trust architecture", "Multi-factor authentication", "Access control", "Audit logging"],
        price: "$299/month",
        icon: Lock,
        link: "/services/zero-trust-network-access",
        category: "Security"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our cutting-edge AI, Micro SAAS, and IT services designed to transform your business operations and drive innovation.
          </motion.p>
          
          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={contactInfo.website} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Globe className="w-5 h-5" />
              <span>{contactInfo.website}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* AI Services */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-12 h-12 text-cyan-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">AI Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced artificial intelligence solutions to automate, optimize, and transform your business processes.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {services.ai.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <Link
                      to={service.link}
                      className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Micro SAAS Services */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-12 h-12 text-purple-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">Micro SAAS Solutions</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Lightweight, focused software solutions designed for specific business needs and rapid deployment.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {services.microSaaS.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <Link
                      to={service.link}
                      className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* IT Services */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-12 h-12 text-green-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">IT Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive IT infrastructure, security, and operations management for modern enterprises.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {services.it.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-green-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <Link
                      to={service.link}
                      className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us today to discuss how our services can help you achieve your business goals.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
