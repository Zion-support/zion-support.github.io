import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Zap,
  Globe,
  Lock,
  Target,
  BarChart3,
  Lightbulb,
  Eye,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Activity,
  PieChart,
  LineChart,
  ArrowUpRight,
  Play,
  Download,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';

const InnovativeServicesShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, count: INNOVATIVE_MICRO_SAAS_SERVICES.length },
    { id: 'AI & Content Marketing', name: 'AI & Content', icon: Brain, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'AI & Content Marketing').length },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Shield, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'Blockchain & Supply Chain').length },
    { id: 'Cybersecurity', name: 'Security', icon: Lock, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'Cybersecurity').length },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Cpu, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'AI & IoT').length },
    { id: 'VR/AR & Training', name: 'VR/AR', icon: Eye, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'VR/AR & Training').length },
    { id: 'AI & Finance', name: 'AI Finance', icon: BarChart3, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'AI & Finance').length },
    { id: 'IoT & Energy', name: 'Energy', icon: Zap, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'IoT & Energy').length },
    { id: 'AI & Legal Tech', name: 'Legal Tech', icon: BookOpen, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: Target, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'Autonomous Systems').length }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const heroSlides = [
    {
      title: "Innovative Micro SAAS Solutions",
      subtitle: "Cutting-edge technology services for modern businesses",
      description: "Discover our revolutionary micro SAAS services powered by AI, blockchain, and emerging technologies.",
      cta: "Explore Services",
      path: "#services",
      icon: Rocket,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with intelligent automation",
      description: "Leverage the power of artificial intelligence to streamline operations and drive growth.",
      cta: "View AI Services",
      path: "#ai-services",
      icon: Brain,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Future-Ready Solutions",
      subtitle: "Stay ahead with emerging technologies",
      description: "From quantum security to autonomous systems, we deliver tomorrow's solutions today.",
      cta: "Discover More",
      path: "#emerging-tech",
      icon: Zap,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Micro SAAS Services Showcase - Zion Tech Group" 
        description="Explore our comprehensive portfolio of AI-powered micro SAAS solutions across industries. From business intelligence to healthcare analytics, we deliver innovative technology solutions."
        keywords="micro SAAS, AI services, business intelligence, customer service, marketing automation, HR solutions, legal tech, financial analytics, healthcare AI, supply chain optimization"
        canonical="https://ziontechgroup.com/services/innovative-services-showcase"
      />

      {/* Hero Section with Futuristic Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Revolutionary Micro SAAS Solutions
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d82c
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 animate-pulse">
            Innovative Micro SAAS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary technology solutions that transform businesses through AI, blockchain, and emerging technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="#services"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {heroSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 p-12 md:p-20">
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${slide.color} mb-6`}>
                      <slide.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">{slide.subtitle}</p>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                    <Link
                      to={slide.path}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-cyan-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of innovative micro SAAS solutions
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                    : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/10'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-300 group-hover:bg-gray-600">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{service.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-cyan-400 cursor-pointer hover:underline">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price}
                      <span className="text-sm text-gray-400 font-normal">/{service.pricingModel}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    {service.demoUrl && (
                      <Link
                        to={service.demoUrl}
                        className="p-2 bg-gray-700/50 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 rounded-lg transition-all duration-300"
                        title="View Demo"
                      >
                        <Play className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      to={`/services/${service.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how our innovative micro SAAS solutions can drive your business forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase;

// Search icon component
function Search({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}