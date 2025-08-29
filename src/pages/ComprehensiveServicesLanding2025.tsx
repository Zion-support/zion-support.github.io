import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Globe, 
  Cpu, 
  Database,
  Lock,
  Code,
  Users,
  Search,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Heart,
  Zap,
  Target,
  Award,
  BarChart3,
  Settings,
  Smartphone,
  Cloud,
  Server,
  Network,
  Eye,
  Key,
  Satellite,
  Plane,
  Scale,
  Leaf,
  MessageCircle,
  Building,
  Truck,
  Factory,
  ShoppingCart,
  Car,
  Plane,
  Ship,
  Train,
  Wifi,
  Bluetooth,
  Radio,
  Monitor,
  Camera,
  Microphone,
  Speaker,
  Battery,
  Power,
  Lightbulb,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Umbrella,
  Compass,
  Navigation,
  Map,
  Location,
  Pin,
  Home,
  Office,
  Store,
  Hospital,
  School,
  Bank,
  Government,
  Military,
  Police,
  Fire,
  Ambulance,
  Rescue,
  Security,
  Privacy,
  Safety,
  Health,
  Fitness,
  Medical,
  Dental,
  Pharmacy,
  Laboratory,
  Research,
  Science,
  Technology,
  Innovation,
  Creativity,
  Design,
  Art,
  Music,
  Video,
  Photo,
  Document,
  File,
  Folder,
  Archive,
  Backup,
  Sync,
  Share,
  Download,
  Upload,
  Import,
  Export,
  Print,
  Scan,
  Fax,
  Copy,
  Paste,
  Cut,
  Undo,
  Redo,
  Save,
  Load,
  New,
  Open,
  Close,
  Exit,
  Enter,
  Login,
  Logout,
  Register,
  Signup,
  Profile,
  Account,
  Settings as SettingsIcon,
  Preferences,
  Configuration,
  Setup,
  Install,
  Uninstall,
  Update,
  Upgrade,
  Downgrade,
  Version,
  Release,
  Beta,
  Alpha,
  Stable,
  Development,
  Production,
  Testing,
  Debug,
  Error,
  Warning,
  Info,
  Success,
  Failure,
  Pass,
  Fail,
  Yes,
  No,
  True,
  False,
  On,
  Off,
  Enable,
  Disable,
  Activate,
  Deactivate,
  Start,
  Stop,
  Pause,
  Resume,
  Play,
  Record,
  Live,
  Stream,
  Broadcast,
  Publish,
  Subscribe,
  Follow,
  Like,
  Love,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Comment,
  Reply,
  Forward,
  Back,
  Next,
  Previous,
  First,
  Last,
  Top,
  Bottom,
  Left,
  Right,
  Up,
  Down,
  Center,
  Middle,
  Front,
  Behind,
  Inside,
  Outside,
  Above,
  Below,
  Near,
  Far,
  Close as CloseIcon,
  Distance,
  Time,
  Date,
  Calendar,
  Schedule,
  Reminder,
  Alarm,
  Timer,
  Stopwatch,
  Hourglass,
  Watch,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Schedule as ScheduleIcon,
  Reminder as ReminderIcon,
  Alarm as AlarmIcon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon,
  Watch as WatchIcon
} from 'lucide-react';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '@/data/revolutionaryMicroSaasServices2025';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '@/data/revolutionaryMicroSaasServices2025';

export default function ComprehensiveServicesLanding2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services
  const allServices = [
    ...REVOLUTIONARY_MICRO_SAAS_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: allServices.length },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Automation')).length },
    { id: 'quantum-technology', name: 'Quantum Technology', icon: Rocket, color: 'from-zion-purple to-zion-blue', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-blue to-zion-cyan', count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length },
    { id: 'space-technology', name: 'Space Technology', icon: Satellite, color: 'from-zion-blue to-zion-cyan', count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green', count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { id: 'financial-technology', name: 'Financial Technology', icon: DollarSign, color: 'from-zion-green to-zion-blue', count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan', count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge')).length },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-zion-green to-zion-blue', count: allServices.filter(s => s.category.includes('Sustainability')).length },
    { id: 'legal-technology', name: 'Legal Technology', icon: Scale, color: 'from-zion-blue to-zion-purple', count: allServices.filter(s => s.category.includes('Legal')).length },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck, color: 'from-zion-green to-zion-purple', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Drone, color: 'from-zion-blue to-zion-purple', count: allServices.filter(s => s.category.includes('Autonomous')).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
        service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category.toLowerCase().replace(' ', '-'));
    return categoryData ? categoryData.icon : Zap;
  };

  const getInnovationBadgeColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      default:
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
    }
  };

  const stats = [
    { label: 'Total Services', value: allServices.length, icon: Zap },
    { label: 'Revolutionary Level', value: allServices.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Rocket },
    { label: 'Average ROI', value: '400%+', icon: TrendingUp },
    { label: 'Market Coverage', value: '$2T+', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent"
          >
            Comprehensive Services 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Discover our complete portfolio of revolutionary micro SAAS services designed to transform your business. 
            From AI-powered automation to quantum computing solutions, we provide cutting-edge technology 
            that drives innovation and growth.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <div className="text-2xl font-bold text-zion-cyan">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <GlobeIcon className="h-5 w-5" />
              <span>ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 bg-zion-slate">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/20'
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate-light hover:text-zion-slate-dark'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <span className="px-2 py-1 bg-zion-slate rounded text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-zion-slate-light">
              {filteredServices.length} revolutionary services to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate rounded-xl p-6 border border-zion-slate-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getInnovationBadgeColor(service.innovationLevel)}`}>
                      {getCategoryIcon(service.category.toLowerCase().replace(' ', '-')) && 
                        React.createElement(getCategoryIcon(service.category.toLowerCase().replace(' ', '-')), {
                          className: "h-6 w-6 text-white"
                        })
                      }
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationBadgeColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Service Highlights */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Starting Price:</span>
                    <span className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">ROI Potential:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Delivery:</span>
                    <span className="text-zion-slate-light">{service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-zion-cyan">+{service.features.length - 3} more features</span>
                    )}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-slate-dark text-xs text-zion-slate-light rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-semibold text-center block hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-zion-cyan/20"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-zion-slate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation, 
              offering cutting-edge solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Revolutionary Innovation</h3>
              <p className="text-zion-slate-light">
                Our services are built on the latest technologies, from quantum computing to autonomous AI systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-zion-slate-light">
                Our clients achieve an average ROI of 400%+ with measurable business improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-green to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-zion-slate-light">
                Dedicated support team with deep expertise in cutting-edge technologies and business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our comprehensive suite of revolutionary services is designed to give you a competitive edge. 
            Contact us today to learn how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Comprehensive Services Inquiry"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="/revolutionary-services-2025"
              className="border-2 border-zion-cyan text-zion-cyan py-4 px-8 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}