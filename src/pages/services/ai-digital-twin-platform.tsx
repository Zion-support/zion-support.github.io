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
  Box,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Server as ServerIcon,
  Building as BuildingIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Warehouse as WarehouseIcon,
  Cog,
  Settings,
  BarChart,
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
  Lock as LockIcon,
  Cloud as CloudIcon2,
  Rocket as RocketIcon,
  Code as CodeIcon,
  Chip as ChipIcon,
  Wifi as WifiIcon,
  ShieldCheck as ShieldCheckIcon,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Activity as ActivityIcon,
  MessageCircle as MessageCircleIcon,
  BarChart as BarChartIcon2,
  Users2 as Users2Icon,
  Settings as SettingsIcon2,
  Palette as PaletteIcon
} from 'lucide-react';

export function AIDigitalTwinPlatform() {
  const features = [
    {
      icon: Box,
      title: '3D Digital Twin Creation',
      description: 'Create high-fidelity 3D digital replicas of physical assets and environments',
      benefits: ['Real-time synchronization', 'High-resolution modeling', 'Multi-scale representation', 'Interactive visualization']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning for predictive maintenance and optimization',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Performance optimization', 'Intelligent insights']
    },
    {
      icon: Network,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT sensors and real-time data streams',
      benefits: ['Real-time monitoring', 'Sensor fusion', 'Data synchronization', 'Edge computing']
    },
    {
      icon: BarChart3,
      title: 'Performance Simulation',
      description: 'Run simulations and what-if scenarios to optimize operations',
      benefits: ['Scenario modeling', 'Risk assessment', 'Optimization testing', 'Performance prediction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Digital Twin Starter',
      price: '$599/month',
      description: 'Perfect for small businesses starting with digital twin technology',
      features: [
        'Basic 3D modeling',
        'IoT sensor integration',
        'Real-time monitoring',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Digital Twin Professional',
      price: '$1,299/month',
      description: 'Advanced digital twin capabilities for growing organizations',
      features: [
        'Advanced 3D modeling',
        'AI-powered analytics',
        'Predictive maintenance',
        'Custom dashboards',
        'API access',
        'Priority support',
        'Training sessions'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Digital Twin Enterprise',
      price: '$3,499/month',
      description: 'Enterprise-grade digital twin platform with full customization',
      features: [
        'Full digital twin suite',
        'Custom integrations',
        'Advanced simulations',
        'Dedicated support team',
        'White-label solutions',
        'Consulting services'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Create digital twins of production lines for optimization and predictive maintenance',
      icon: Factory,
      benefits: ['Production optimization', 'Predictive maintenance', 'Quality control', 'Efficiency improvement']
    },
    {
      title: 'Smart Cities',
      description: 'Build digital twins of urban infrastructure for planning and management',
      icon: Building2,
      benefits: ['Infrastructure planning', 'Traffic optimization', 'Resource management', 'Emergency response']
    },
    {
      title: 'Healthcare',
      description: 'Develop digital twins of medical devices and patient monitoring systems',
      icon: Heart,
      benefits: ['Device optimization', 'Patient monitoring', 'Treatment planning', 'Research simulation']
    },
    {
      title: 'Energy & Utilities',
      description: 'Create digital twins of power plants and distribution networks',
      icon: Zap,
      benefits: ['Grid optimization', 'Predictive maintenance', 'Energy efficiency', 'Load balancing']
    }
  ];

  const digitalTwinCapabilities = [
    {
      category: '3D Modeling',
      capabilities: ['High-fidelity rendering', 'Real-time updates', 'Multi-scale views', 'Interactive manipulation']
    },
    {
      category: 'Data Integration',
      capabilities: ['IoT sensors', 'SCADA systems', 'ERP integration', 'Real-time databases']
    },
    {
      category: 'Analytics',
      capabilities: ['Predictive maintenance', 'Performance optimization', 'Anomaly detection', 'Trend analysis']
    },
    {
      category: 'Simulation',
      capabilities: ['What-if scenarios', 'Risk assessment', 'Performance testing', 'Optimization modeling']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Robert Chen',
      role: 'CTO, SmartManufacturing Inc',
      content: 'The AI Digital Twin Platform has transformed our manufacturing operations. We can now predict equipment failures before they happen and optimize production in real-time.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Smart City Director, MetroTech',
      content: 'This platform has revolutionized our urban planning. The digital twin of our city infrastructure provides insights we never had before.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      role: 'Operations Manager, PowerGrid Solutions',
      content: 'The predictive maintenance capabilities have reduced our downtime by 40% and saved millions in operational costs.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30">
                <Box className="w-4 h-4 mr-2" />
                Digital Twin Technology
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI-Powered Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-indigo-400"> Twin Platform</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Create virtual replicas of physical assets and processes with AI-powered analytics. 
              Monitor, simulate, and optimize operations in real-time with our comprehensive digital twin platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-indigo-400 text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
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

      {/* Digital Twin Capabilities */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Comprehensive Digital Twin Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-zion-slate-light max-w-3xl mx-auto"
            >
              Our platform provides end-to-end digital twin creation, monitoring, and optimization
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalTwinCapabilities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-zion-cyan mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {capability}
                    </li>
                  ))}
                </ul>
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
              Advanced Digital Twin Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              Our platform provides comprehensive digital twin capabilities for any industry or use case
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
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-indigo-400 rounded-lg flex items-center justify-center mb-4">
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
              Our digital twin platform serves diverse industries with specialized modeling and simulation needs
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
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-indigo-400 rounded-lg flex items-center justify-center mb-4">
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
              Choose the plan that fits your organization's digital twin needs
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
                    <span className="bg-gradient-to-r from-zion-cyan to-indigo-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-zion-cyan to-indigo-400 text-white hover:from-zion-cyan-dark hover:to-indigo-500'
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
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            >
              See how organizations are transforming their operations with digital twin technology
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
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-indigo-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Ready to Build Your Digital Twin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Join leading organizations in creating virtual replicas for optimization and innovation
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

export default AIDigitalTwinPlatform;