import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Zap,
  Crown,
  Sparkles,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  Cpu,
  Database,
  Network,
  Lock,
  Key,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Antenna,
  GraduationCap,
  Briefcase,
  Industry,
  Code,
  GitBranch,
  RefreshCw,
  BarChart,
  ShieldCheck,
  Atom,
  BrainCircuit,
  BrainCircuit2,
  Search,
  Filter,
  Tag,
  Eye,
  Brain,
  Shield,
  Cloud,
  Heart,
  Globe,
  Building,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  FileText,
  Image,
  Video,
  Mic,
  Camera,
  Headphones,
  Settings,
  Signal,
  Battery,
  Power,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  LifeBuoy,
  PhoneCall,
  MessageSquare,
  Voicemail,
  PhoneOff,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneForwarded,
  PhoneCallIncoming,
  PhoneCallOutgoing,
  PhoneCallMissed,
  PhoneCallForwarded,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Percent,
  Calculator,
  Receipt,
  Wallet,
  PiggyBank,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  LineChart,
  PieChart as PieChartIcon,
  BarChart3 as BarChart3Icon,
  Activity as ActivityIcon,
  Zap as ZapIcon,
  Flash,
  Thunder,
  Lightning,
  Storm,
  Hurricane,
  Tornado,
  Earthquake,
  Volcano,
  Fire,
  Flame,
  Smoke,
  Steam,
  Water,
  Droplets,
  Waves,
  Ocean,
  Lake,
  River,
  Stream,
  Waterfall,
  Ice,
  Snow,
  Hail,
  Rain,
  Cloud,
  Sun,
  Moon,
  Star as StarIcon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';

export default function DigitalTransformation() {
  const transformationAreas = [
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization',
      icon: RefreshCw,
      color: 'from-blue-600 to-cyan-600',
      benefits: [
        'Reduce manual tasks by 80%',
        'Improve process efficiency by 60%',
        'Eliminate human errors',
        '24/7 operational capability'
      ]
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Transform raw data into actionable insights for strategic business decisions',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
      benefits: [
        'Real-time analytics dashboards',
        'Predictive modeling capabilities',
        'Automated reporting systems',
        'Data visualization tools'
      ]
    },
    {
      title: 'Customer Experience Enhancement',
      description: 'Create seamless, personalized customer journeys across all touchpoints',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      benefits: [
        '360-degree customer view',
        'Personalized recommendations',
        'Omnichannel integration',
        'Customer satisfaction improvement'
      ]
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Move to cloud-native architectures for scalability and cost optimization',
      icon: Cloud,
      color: 'from-orange-600 to-red-600',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Enhanced security and compliance',
        'Faster deployment cycles'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      description: 'Digital health records, telemedicine, AI diagnostics, and patient engagement platforms',
      useCases: [
        'Electronic Health Records (EHR)',
        'Telemedicine & Remote Care',
        'AI-Powered Diagnostics',
        'Patient Portal Solutions'
      ]
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      description: 'Digital banking, fintech integration, risk management, and compliance automation',
      useCases: [
        'Digital Banking Platforms',
        'Risk Assessment & Management',
        'Compliance Automation',
        'Customer Onboarding'
      ]
    },
    {
      name: 'Manufacturing',
      icon: Industry,
      color: 'from-blue-600 to-cyan-600',
      description: 'Industry 4.0, smart factories, predictive maintenance, and supply chain optimization',
      useCases: [
        'Smart Factory Implementation',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Quality Control Automation'
      ]
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-purple-600 to-pink-600',
      description: 'Omnichannel retail, personalized shopping, inventory management, and customer analytics',
      useCases: [
        'Omnichannel Retail Solutions',
        'Personalized Shopping Experience',
        'Inventory Management Systems',
        'Customer Analytics & Insights'
      ]
    }
  ];

  const methodology = [
    {
      phase: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current state, pain points, and transformation opportunities',
      duration: '2-4 weeks',
      deliverables: [
        'Current State Assessment',
        'Gap Analysis Report',
        'Transformation Roadmap',
        'ROI Projections'
      ],
      icon: Search,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      phase: 'Strategy & Planning',
      description: 'Develop detailed transformation strategy, architecture, and implementation plan',
      duration: '3-6 weeks',
      deliverables: [
        'Digital Strategy Document',
        'Technology Architecture',
        'Implementation Timeline',
        'Resource Requirements'
      ],
      icon: Target,
      color: 'from-purple-600 to-pink-600'
    },
    {
      phase: 'Implementation & Deployment',
      description: 'Execute transformation initiatives with agile methodology and continuous feedback',
      duration: '12-24 weeks',
      deliverables: [
        'Pilot Programs',
        'Phased Rollouts',
        'User Training Programs',
        'Performance Monitoring'
      ],
      icon: Rocket,
      color: 'from-green-600 to-emerald-600'
    },
    {
      phase: 'Optimization & Scale',
      description: 'Continuous improvement, performance optimization, and scaling successful initiatives',
      duration: 'Ongoing',
      deliverables: [
        'Performance Analytics',
        'Optimization Recommendations',
        'Scaling Strategies',
        'Continuous Improvement Plans'
      ],
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const successMetrics = [
    {
      metric: 'Operational Efficiency',
      improvement: '40-60%',
      description: 'Streamlined processes and automated workflows',
      icon: Activity,
      color: 'from-green-600 to-emerald-600'
    },
    {
      metric: 'Cost Reduction',
      improvement: '25-40%',
      description: 'Optimized resource utilization and automation',
      icon: DollarSign,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      metric: 'Customer Satisfaction',
      improvement: '30-50%',
      description: 'Enhanced customer experience and engagement',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      metric: 'Time to Market',
      improvement: '50-70%',
      description: 'Faster product development and deployment',
      icon: Clock,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group"
        description="Transform your business with our comprehensive digital transformation services. We help organizations modernize operations, enhance customer experience, and drive innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Transformation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Transform your business for the digital age. Our comprehensive digital transformation 
              services help organizations modernize operations, enhance customer experience, and drive innovation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Strategic Planning</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Process Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Customer Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Transformation Areas</h2>
            <p className="text-lg text-slate-300">Comprehensive digital transformation across all aspects of your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                    <p className="text-slate-300">{area.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-lg">Key Benefits</h4>
                  {area.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-lg text-slate-300">Tailored digital transformation solutions for your specific industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                    <p className="text-slate-300 text-sm">{industry.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Use Cases</h4>
                  {industry.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Methodology</h2>
            <p className="text-lg text-slate-300">Proven approach to successful digital transformation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.phase}</h3>
                <p className="text-slate-300 text-sm mb-3">{phase.description}</p>
                <p className="text-cyan-400 font-semibold text-sm mb-3">{phase.duration}</p>
                
                <div className="space-y-2">
                  {phase.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="text-slate-400 text-xs">
                      • {deliverable}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Expected Outcomes</h2>
            <p className="text-lg text-slate-300">Measurable improvements across key business metrics</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{metric.metric}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{metric.improvement}</div>
                <p className="text-slate-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-cyan-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our digital transformation services can help your organization 
              modernize operations, enhance customer experience, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
