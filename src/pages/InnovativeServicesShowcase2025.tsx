import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Rocket,
  Target,
  BarChart3,
  Users,
  Globe,
  Chip,
  Sparkles,
  Eye,
  Workflow,
  Activity,
  Monitor,
  Server,
  Cloud,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Heart,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  Wifi,
  Smartphone,
  Tablet,
  Laptop,
  Bot,
  Settings,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  MessageCircle,
  Bell,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  User,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Activity as ActivityIcon,
  PieChart,
  LineChart,
  BarChart as BarChartIcon,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  Search,
  Filter,
  Download,
  Share,
  Bookmark,
  Star as StarIcon,
  Heart as HeartIcon,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  Home,
  Building2,
  Factory,
  Store,
  Hospital,
  School,
  Bank,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Walk,
  Run,
  Swim,
  Gym,
  Coffee,
  Food,
  Music,
  Video,
  Camera,
  Gamepad,
  Book,
  Newspaper,
  Magazine,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
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
  Calendar as CalendarIcon2
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const innovativeServices = [
    {
      name: "AI Quantum Neural Network Platform",
      description: "Revolutionary hybrid quantum-classical neural networks for unprecedented AI performance",
      icon: Brain,
      href: "/services/ai-quantum-neural-network-platform",
      color: "from-purple-600 to-pink-600",
      features: [
        "Quantum neural processing with 50-1000+ qubits",
        "Hybrid AI architecture combining classical and quantum computing",
        "Real-time learning and adaptation",
        "Quantum-resistant security protocols",
        "1000x faster processing than classical AI",
        "15-40% accuracy improvement"
      ],
      pricing: {
        starter: "$2,999/month",
        professional: "$7,999/month",
        enterprise: "$19,999/month"
      },
      useCases: [
        "Financial modeling and risk assessment",
        "Drug discovery and molecular simulation",
        "Climate modeling and environmental impact",
        "Logistics and supply chain optimization"
      ],
      benefits: [
        "Solve previously impossible problems",
        "Unprecedented computational power",
        "Future-proof quantum technology",
        "Competitive advantage in research"
      ]
    },
    {
      name: "AI Autonomous Business Operations Platform",
      description: "Fully autonomous AI operations that work 24/7 making intelligent business decisions",
      icon: Bot,
      href: "/services/ai-autonomous-business-operations-platform",
      color: "from-blue-600 to-cyan-600",
      features: [
        "Autonomous decision making without human intervention",
        "End-to-end process automation",
        "Predictive analytics and forecasting",
        "24/7 intelligent monitoring and alerting",
        "Multi-agent AI coordination",
        "Real-time business optimization"
      ],
      pricing: {
        starter: "$1,999/month",
        professional: "$4,999/month",
        enterprise: "$12,999/month"
      },
      useCases: [
        "Financial operations automation",
        "Human resources and recruitment",
        "Supply chain management",
        "Customer service automation",
        "Marketing operations optimization",
        "IT operations and cybersecurity"
      ],
      benefits: [
        "85% reduction in manual tasks",
        "300% increase in operational efficiency",
        "60% cost savings on operations",
        "24/7 business operations availability"
      ]
    },
    {
      name: "AI Customer Experience Analytics Platform",
      description: "AI-powered analytics platform that reveals the true voice of your customers",
      icon: Heart,
      href: "/services/ai-customer-experience-analytics-platform",
      color: "from-green-600 to-emerald-600",
      features: [
        "Real-time sentiment analysis across all touchpoints",
        "Predictive customer behavior forecasting",
        "Omnichannel journey mapping and optimization",
        "Intelligent feedback processing and categorization",
        "Advanced customer experience metrics",
        "Seamless integration with existing tools"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$1,999/month"
      },
      useCases: [
        "E-commerce experience optimization",
        "Healthcare patient experience improvement",
        "Financial services customer satisfaction",
        "Hospitality guest experience enhancement"
      ],
      benefits: [
        "40% increase in customer satisfaction",
        "35% reduction in customer churn",
        "50% faster issue resolution",
        "25% increase in customer lifetime value"
      ]
    }
  ];

  const industrySolutions = [
    {
      name: "Healthcare",
      icon: Heart,
      services: [
        "AI-powered diagnostic support",
        "Patient care optimization",
        "Resource allocation and scheduling",
        "Compliance and regulatory automation",
        "Predictive health analytics"
      ]
    },
    {
      name: "Finance",
      icon: DollarSign,
      services: [
        "Risk assessment and fraud detection",
        "Automated trading operations",
        "Portfolio optimization",
        "Compliance automation",
        "Customer experience analytics"
      ]
    },
    {
      name: "Manufacturing",
      icon: Building,
      services: [
        "Predictive maintenance",
        "Quality assurance automation",
        "Supply chain optimization",
        "Production planning",
        "Inventory management"
      ]
    },
    {
      name: "Retail",
      icon: ShoppingCart,
      services: [
        "Customer segmentation",
        "Inventory optimization",
        "Sales forecasting",
        "Personalized marketing",
        "Customer journey optimization"
      ]
    }
  ];

  const technologyStack = [
    {
      category: "AI & Machine Learning",
      technologies: [
        "TensorFlow & PyTorch",
        "Quantum Computing Libraries",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        "AWS, Azure, Google Cloud",
        "Kubernetes & Docker",
        "Microservices Architecture",
        "Serverless Computing",
        "Edge Computing"
      ]
    },
    {
      category: "Data & Analytics",
      technologies: [
        "Big Data Processing",
        "Real-time Analytics",
        "Data Visualization",
        "Predictive Modeling",
        "Business Intelligence"
      ]
    },
    {
      category: "Security & Compliance",
      technologies: [
        "Zero Trust Architecture",
        "Quantum-resistant Encryption",
        "SOC2 Compliance",
        "GDPR Compliance",
        "Threat Intelligence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-purple/20 text-zion-cyan border border-zion-purple/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Innovation Showcase 2025
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Experience the future of technology with our cutting-edge AI services that combine 
              quantum computing, autonomous operations, and intelligent analytics to transform your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/zion-cutting-edge-services-2031"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View 2031 Vision
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Three groundbreaking services that represent the pinnacle of AI innovation in 2025
            </p>
          </div>
          
          <div className="space-y-12">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-8 lg:p-12 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column - Service Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{service.name}</h3>
                        <p className="text-zion-slate-light text-lg">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Use Cases</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <div key={useCaseIndex} className="text-zion-slate-light text-sm">
                            • {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Pricing & Benefits */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Pricing Plans</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-zion-blue-dark rounded-lg">
                          <span className="text-zion-slate-light">Starter</span>
                          <span className="text-white font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-zion-blue-dark rounded-lg">
                          <span className="text-zion-slate-light">Professional</span>
                          <span className="text-white font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-zion-blue-dark rounded-lg">
                          <span className="text-zion-slate-light">Enterprise</span>
                          <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                            <Star className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.href}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored AI solutions designed for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                
                <ul className="space-y-2">
                  {industry.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on cutting-edge technologies and frameworks for maximum performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{tech.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.technologies.map((technology, techIndex) => (
                    <div key={techIndex} className="flex items-center text-zion-slate-light text-sm">
                      <Chip className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {technology}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the AI revolution and transform your business with the most advanced 
              technology solutions available. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
