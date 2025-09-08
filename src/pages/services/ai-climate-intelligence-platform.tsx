import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Users,
  BarChart3,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Target,
  Heart,
  Eye,
  Activity,
  Code,
  Server,
  Network,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Sparkles,
  Atom,
  AlertTriangle,
  Bug,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  Info,
  Key,
  Fingerprint,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Timer,
  Stopwatch,
  Thermometer,
  Compass,
  Map,
  Navigation,
  Leaf,
  TreePine,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Snowflake,
  Umbrella,
  Mountain,
  Waves,
  Flame,
  Snowflake as SnowflakeIcon,
  Cloud as CloudIcon,
  Sun as SunIcon,
  Wind as WindIcon,
  Droplets as DropletsIcon,
  TreePine as TreePineIcon,
  Leaf as LeafIcon,
  Mountain as MountainIcon,
  Waves as WavesIcon,
  Flame as FlameIcon,
  Thermometer as ThermometerIcon,
  BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon,
  AlertCircle as AlertCircleIcon,
  CheckSquare as CheckSquareIcon,
  FileCheck as FileCheckIcon,
  ClipboardCheck as ClipboardCheckIcon,
  BookMarked as BookMarkedIcon,
  GraduationCap as GraduationCapIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  BarChart3 as BarChart3Icon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Cloud as CloudIcon2,
  Rocket as RocketIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Chip as ChipIcon,
  Wifi as WifiIcon,
  ShieldCheck as ShieldCheckIcon,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Atom as AtomIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Activity as ActivityIcon,
  MessageCircle as MessageCircleIcon,
  BarChart as BarChartIcon2,
  Users2 as Users2Icon,
  Settings as SettingsIcon2,
  Palette as PaletteIcon
} from 'lucide-react';

export function AIClimateIntelligencePlatform() {
  const features = [
    {
      icon: Satellite,
      title: 'Satellite Data Integration',
      description: 'Real-time climate data from multiple satellite sources and ground sensors',
      benefits: ['Global coverage', 'High-resolution data', 'Continuous monitoring', 'Historical analysis']
    },
    {
      icon: Brain,
      title: 'AI Climate Modeling',
      description: 'Advanced machine learning models for climate prediction and risk assessment',
      benefits: ['Predictive analytics', 'Risk modeling', 'Scenario planning', 'Trend analysis']
    },
    {
      icon: BarChart3,
      title: 'Climate Risk Assessment',
      description: 'Comprehensive risk evaluation for assets, operations, and supply chains',
      benefits: ['Asset vulnerability', 'Supply chain risks', 'Operational impacts', 'Financial exposure']
    },
    {
      icon: Leaf,
      title: 'Sustainability Analytics',
      description: 'Track and optimize environmental impact and sustainability initiatives',
      benefits: ['Carbon footprint', 'ESG metrics', 'Compliance reporting', 'Improvement tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Climate Starter',
      price: '$399/month',
      description: 'Essential climate monitoring for small businesses',
      features: [
        'Basic climate data access',
        'Monthly risk reports',
        'Weather alerts',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Climate Professional',
      price: '$899/month',
      description: 'Advanced climate intelligence for growing organizations',
      features: [
        'Advanced climate modeling',
        'Real-time risk monitoring',
        'Custom dashboards',
        'API access',
        'Priority support',
        'Training sessions'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Climate Enterprise',
      price: '$2,499/month',
      description: 'Enterprise-grade climate intelligence platform',
      features: [
        'Full climate intelligence suite',
        'Custom integrations',
        'Dedicated support team',
        'White-label solutions',
        'Advanced analytics',
        'Consulting services'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Agriculture',
      description: 'Optimize crop planning and irrigation based on climate predictions',
      icon: TreePine,
      benefits: ['Crop yield optimization', 'Water management', 'Pest control', 'Harvest timing']
    },
    {
      title: 'Energy & Utilities',
      description: 'Plan energy production and grid management around weather patterns',
      icon: Zap,
      benefits: ['Renewable energy optimization', 'Grid stability', 'Demand forecasting', 'Maintenance planning']
    },
    {
      title: 'Insurance',
      description: 'Assess climate risks for property and casualty insurance underwriting',
      icon: Shield,
      benefits: ['Risk assessment', 'Premium calculation', 'Claims prediction', 'Portfolio management']
    },
    {
      title: 'Supply Chain',
      description: 'Monitor climate impacts on logistics and supply chain operations',
      icon: Truck,
      benefits: ['Route optimization', 'Inventory management', 'Risk mitigation', 'Cost optimization']
    }
  ];

  const climateData = [
    {
      metric: 'Temperature Anomalies',
      value: '+1.1°C',
      change: '+0.2°C',
      trend: 'up',
      description: 'Global average temperature increase since pre-industrial levels'
    },
    {
      metric: 'Sea Level Rise',
      value: '3.3mm/year',
      change: '+0.4mm/year',
      trend: 'up',
      description: 'Current rate of global sea level rise'
    },
    {
      metric: 'Carbon Concentration',
      value: '417 ppm',
      change: '+2.5 ppm',
      trend: 'up',
      description: 'Atmospheric CO2 concentration'
    },
    {
      metric: 'Extreme Weather Events',
      value: '42%',
      change: '+15%',
      trend: 'up',
      description: 'Increase in frequency of extreme weather events'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Chief Sustainability Officer, GreenTech Corp',
      content: 'The AI Climate Intelligence Platform has revolutionized our sustainability strategy. We can now make data-driven decisions about climate risks and opportunities.',
      rating: 5
    },
    {
      name: 'James Chen',
      role: 'Operations Director, AgriSolutions',
      content: 'This platform has increased our crop yields by 25% through better climate-informed decision making. The predictive capabilities are game-changing.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Risk Manager, Global Insurance',
      content: 'The climate risk assessment tools have transformed our underwriting process. We can now accurately price climate-related risks.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-green-900/20 to-cyan-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30">
                <Satellite className="w-4 h-4 mr-2" />
                Climate Intelligence
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI-Powered Climate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-green-400"> Intelligence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Harness the power of AI and satellite data to monitor, predict, and adapt to climate changes. 
              Make informed decisions about sustainability, risk management, and operational resilience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-green-400 text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Climate Data Overview */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Real-Time Climate Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-zion-slate-light max-w-3xl mx-auto"
            >
              Live climate data and trends from our global monitoring network
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-zion-slate-light mb-2">{data.metric}</h3>
                <div className="text-3xl font-bold text-white mb-1">{data.value}</div>
                <div className={`text-sm mb-3 ${
                  data.trend === 'up' ? 'text-red-400' : 'text-green-400'
                }`}>
                  {data.change} from last year
                </div>
                <p className="text-xs text-zion-slate-light">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Climate Intelligence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Our platform provides end-to-end climate monitoring, prediction, and risk assessment capabilities
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-green-400 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Industry Applications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Our climate intelligence platform serves diverse industries with specialized climate monitoring needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-green-400 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Transparent Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Choose the plan that fits your organization's climate intelligence needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-green-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{plan.price}</div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/signup'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-green-400 text-white hover:from-zion-cyan-dark hover:to-green-500'
                      : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Trusted by Climate Leaders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              See how organizations are transforming their climate strategy with AI-powered intelligence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-green-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Ready to Master Climate Intelligence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Join leading organizations in building climate-resilient and sustainable operations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-zion-slate-light text-sm">Phone</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-zion-slate-light text-sm">Address</p>
                  <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIClimateIntelligencePlatform;