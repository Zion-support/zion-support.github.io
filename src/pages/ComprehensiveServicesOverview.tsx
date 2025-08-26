import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Shield, 
  Search, 
  DollarSign, 
  Heart, 
  Cpu, 
  Zap, 
  BookOpen, 
  GraduationCap, 
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Eye,
  BarChart3,
  Calculator,
  Crown,
  Building,
  Gauge,
  Activity,
  Network,
  Leaf,
  Database,
  Cloud,
  Lock,
  Scale,
  Stethoscope,
  Car,
  Building2,
  Flask,
  Rocket as RocketIcon,
  Lock as LockIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  BookOpen as BookOpenIcon,
  GraduationCap as GraduationCapIcon,
  FileText as FileTextIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  Crown as CrownIcon,
  Building as BuildingIcon,
  Gauge as GaugeIcon,
  Activity as ActivityIcon,
  Network as NetworkIcon,
  Leaf as LeafIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Scale as ScaleIcon,
  Stethoscope as StethoscopeIcon,
  Car as CarIcon,
  Building2 as Building2Icon,
  Flask as FlaskIcon,
  Rocket as RocketIconIcon
} from 'lucide-react';
// Service categories with descriptions and icons
const SERVICE_CATEGORIES = [
  {
    id: 'quantum-ai-business',
    name: 'Quantum AI & Business Automation',
    description: 'Revolutionary quantum-powered AI solutions for business process automation, decision-making, and strategic planning.',
    icon: <Brain className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-500',
    services: ['AI Autonomous Business Platform', 'Quantum Decision Engine', 'Intelligent Process Automation'],
    features: ['Quantum Computing Integration', 'Real-time Analytics', 'Predictive Modeling'],
    benefits: ['500% ROI Increase', '90% Process Efficiency', 'Real-time Decision Making']
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI & Cybersecurity',
    description: 'Advanced AI-powered security solutions protecting against evolving cyber threats with autonomous defense systems.',
    icon: <Shield className="h-8 w-8" />,
    color: 'from-red-500 to-orange-500',
    services: ['AI Autonomous Cybersecurity Defense', 'Threat Intelligence Platform', 'Zero-Trust Security Framework'],
    features: ['Machine Learning Detection', 'Behavioral Analysis', 'Automated Response'],
    benefits: ['99.9% Threat Detection', 'Zero False Positives', '24/7 Autonomous Protection']
  },
  {
    id: 'ai-research',
    name: 'AI & Research',
    description: 'Cutting-edge AI research platforms accelerating scientific discovery and innovation across all domains.',
    icon: <Search className="h-8 w-8" />,
    color: 'from-blue-500 to-cyan-500',
    services: ['Autonomous AI Research Platform', 'Scientific Data Analysis', 'Research Automation Tools'],
    features: ['Natural Language Processing', 'Data Mining', 'Hypothesis Generation'],
    benefits: ['10x Research Speed', 'Cross-domain Insights', 'Automated Discovery']
  },
  {
    id: 'quantum-fintech',
    name: 'Quantum AI & Financial Technology',
    description: 'Quantum-powered financial solutions for trading, risk management, and portfolio optimization.',
    icon: <DollarSign className="h-8 w-8" />,
    color: 'from-yellow-500 to-amber-500',
    services: ['Quantum Financial Trading Platform', 'AI Risk Management', 'Portfolio Optimization'],
    features: ['Quantum Algorithms', 'Real-time Market Analysis', 'Predictive Trading'],
    benefits: ['300% Trading Returns', 'Zero Risk Exposure', '24/7 Market Coverage']
  },
  {
    id: 'ai-healthcare',
    name: 'AI & Healthcare',
    description: 'AI-powered healthcare solutions improving diagnosis, treatment, and patient care outcomes.',
    icon: <Heart className="h-8 w-8" />,
    color: 'from-pink-500 to-rose-500',
    services: ['AI Autonomous Healthcare Platform', 'Diagnostic AI', 'Treatment Planning'],
    features: ['Medical Image Analysis', 'Patient Data Analytics', 'Predictive Healthcare'],
    benefits: ['95% Diagnosis Accuracy', '30% Treatment Cost Reduction', 'Personalized Care']
  },
  {
    id: 'ai-manufacturing',
    name: 'AI & Manufacturing',
    description: 'Intelligent manufacturing solutions optimizing production, quality control, and supply chain management.',
    icon: <Cpu className="h-8 w-8" />,
    color: 'from-green-500 to-emerald-500',
    services: ['Autonomous AI Manufacturing Platform', 'Predictive Maintenance', 'Quality Control AI'],
    features: ['IoT Integration', 'Predictive Analytics', 'Automated Quality Control'],
    benefits: ['40% Production Increase', 'Zero Defects', 'Predictive Maintenance']
  },
  {
    id: 'quantum-edge',
    name: 'Quantum AI & Edge Computing',
    description: 'Quantum-enhanced edge computing solutions for real-time processing and distributed intelligence.',
    icon: <Zap className="h-8 w-8" />,
    color: 'from-indigo-500 to-purple-500',
    services: ['Quantum Edge Computing Platform', 'Distributed AI', 'Real-time Processing'],
    features: ['Quantum Processing Units', 'Edge AI Models', 'Low-latency Computing'],
    benefits: ['100x Processing Speed', 'Zero Latency', 'Distributed Intelligence']
  },
  {
    id: 'ai-legal',
    name: 'AI & Legal Technology',
    description: 'AI-powered legal solutions for document analysis, contract review, and legal research automation.',
    icon: <BookOpen className="h-8 w-8" />,
    color: 'from-orange-500 to-red-500',
    services: ['AI Autonomous Legal Platform', 'Contract Analysis AI', 'Legal Research Assistant'],
    features: ['Document Processing', 'Legal Analytics', 'Compliance Monitoring'],
    benefits: ['80% Time Savings', '100% Accuracy', 'Automated Compliance']
  },
  {
    id: 'ai-education',
    name: 'AI & Education',
    description: 'Intelligent education platforms personalizing learning experiences and improving educational outcomes.',
    icon: <GraduationCap className="h-8 w-8" />,
    color: 'from-teal-500 to-cyan-500',
    services: ['Autonomous AI Education Platform', 'Personalized Learning', 'Student Analytics'],
    features: ['Adaptive Learning', 'Progress Tracking', 'Performance Analytics'],
    benefits: ['50% Learning Speed', 'Personalized Curriculum', 'Real-time Feedback']
  },
  {
    id: 'quantum-content',
    name: 'Quantum AI & Content Creation',
    description: 'Quantum-enhanced content creation tools generating high-quality, engaging content across all media types.',
    icon: <FileText className="h-8 w-8" />,
    color: 'from-violet-500 to-purple-500',
    services: ['Quantum AI Content Creation Platform', 'Multi-media Generation', 'Content Optimization'],
    features: ['Natural Language Generation', 'Visual Content Creation', 'SEO Optimization'],
    benefits: ['10x Content Speed', 'SEO Optimized', 'Multi-format Output']
  }
];
export default function ComprehensiveServicesOverview() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('services-overview');
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  const filteredCategories = SERVICE_CATEGORIES.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Comprehensive <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services Overview</span>
            </h1>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our complete portfolio of revolutionary AI, Quantum, and technology services designed to transform your business 
            and drive unprecedented growth and innovation.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl p-6 border border-zion-cyan/30"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">10+</div>
              <div className="text-zion-slate-light">Service Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-zion-purple/20 to-zion-pink/20 rounded-xl p-6 border border-zion-purple/30"
            >
              <div className="text-3xl font-bold text-zion-purple mb-2">50+</div>
              <div className="text-zion-slate-light">Individual Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-zion-green/20 to-zion-emerald/20 rounded-xl p-6 border border-zion-green/30"
            >
              <div className="text-3xl font-bold text-zion-green mb-2">500%+</div>
              <div className="text-zion-slate-light">Average ROI</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-zion-orange/20 to-zion-red/20 rounded-xl p-6 border border-zion-orange/30"
            >
              <div className="text-3xl font-bold text-zion-orange mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </motion.div>
          </div>
        </div>
      </motion.header>
      {/* Main Content */}
      <main id="services-overview" className="py-20">
        <div className="container mx-auto px-4">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services and categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-slate-light/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/60 rounded-2xl p-8 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl text-white`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                {/* Services List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-zion-cyan" />
                    Key Services
                  </h4>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-green flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-zion-purple" />
                    Core Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-zion-green" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                        <Award className="h-4 w-4 text-zion-yellow flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/pricing-guide?category=${category.id}`}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calculator className="h-5 w-5" />
                    View Pricing
                  </Link>
                  <Link
                    to={`/contact?service=${category.id}`}
                    className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-6 py-3 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* No Results */}
          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              className="text-center py-12"
            >
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Our team of experts is ready to help you implement these revolutionary solutions. 
                Contact us today to discuss your specific needs and get started on your transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Contact Us Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-slate-dark/50 text-zion-cyan border border-zion-cyan/30 px-8 py-3 rounded-lg font-medium hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
// Helper component for graduation cap icon
function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
