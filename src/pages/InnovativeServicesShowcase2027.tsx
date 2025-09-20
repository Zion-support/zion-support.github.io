import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  Cloud, ;
  Shield, ;
  Rocket, ;
  Zap, ;
  Users, ;
  Globe, ;
  Cpu,;
  Lock,;
  Heart,;
  Star,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  MessageSquare,;
  FileText,;
  ShoppingCart,;
  Headphones,;
  Mail,;
  Search,;
  HelpCircle,;
  ShieldCheck,;
  Globe2,;
  Leaf,;
  Sparkles,;
  Target,;
  DollarSign,;
  Clock,;
  Award,;
  Phone,;
  Mail as MailIcon,;
  MapPin,;
  Infinity,;
  Atom,;
  Satellite,;
  Car,;
  Bot,;
  Eye,;
  CpuIcon,;
  ZapIcon,;
  ShieldIcon,;
  CloudIcon,;
  BrainIcon,;
  RocketIcon,;
  LeafIcon,;
  GlobeIcon,;
  CodeIcon,;
  DatabaseIcon,;
  NetworkIcon,;
  SmartphoneIcon,;
  BarChartIcon,;
  MessageSquareIcon,;
  FileTextIcon,;
  ShoppingCartIcon,;
  HeadphonesIcon,;
  MailIcon as MailIcon2,;
  SearchIcon,;
  HelpCircleIcon,;
  ShieldCheckIcon,;
  Globe2Icon,;
  LeafIcon as LeafIcon2,;
  SparklesIcon,;
  TargetIcon,;
  DollarSignIcon,;
  ClockIcon,;
  AwardIcon,;
  PhoneIcon,;
  MapPinIcon,;
  InfinityIcon;
} from "lucide-react"
import { SEO } from "../components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from "../data/innovativeMicroSaasServices2027"
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027 } from "../data/innovativeITInfrastructureServices2027"
import { EMERGING_TECHNOLOGY_SERVICES_2027 } from "../data/emergingTechnologyServices2027"
export default function InnovativeServicesShowcase2027() {;
  const [activeCategory, setActiveCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [sortBy, setSortBy] = useState('rating'),;

  //[^;]*
  const allServices = [;
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2027
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES_2027
    ...EMERGING_TECHNOLOGY_SERVICES_2027
  ];
  //[^;]*
  const categories = [;
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' };
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' };
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: allServices.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' };
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' };
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: allServices.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' };
    { id: 'FinTech', name: 'FinTech', count: allServices.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' };
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' };
    { id: 'IT Infrastructure', name: 'IT Infrastructure', count: allServices.filter(s => s.category === 'IT Infrastructure').length, icon: '🏗️', color: 'from-gray-500 to-slate-500' };
    { id: 'AI & Computing', name: 'AI & Computing', count: allServices.filter(s => s.category === 'AI & Computing').length, icon: '🧠', color: 'from-purple-500 to-indigo-500' };
    { id: 'Biotechnology', name: 'Biotechnology', count: allServices.filter(s => s.category === 'Biotechnology').length, icon: '🧬', color: 'from-green-500 to-blue-500' };
    { id: 'Energy Technology', name: 'Energy Technology', count: allServices.filter(s => s.category === 'Energy Technology').length, icon: '⚡', color: 'from-yellow-500 to-orange-500' };
    { id: 'Metaverse & AR/VR', name: 'Metaverse & AR/VR', count: allServices.filter(s => s.category === 'Metaverse & AR/VR').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' };
    { id: 'Neurotechnology', name: 'Neurotechnology', count: allServices.filter(s => s.category === 'Neurotechnology').length, icon: '🧠', color: 'from-blue-500 to-purple-500' };
    { id: 'Quantum Technology', name: 'Quantum Technology', count: allServices.filter(s => s.category === 'Quantum Technology').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' };
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: allServices.filter(s => s.category === 'Autonomous Systems').length, icon: '🤖', color: 'from-gray-500 to-blue-500' };
    { id: 'Robotics & Automation', name: 'Robotics & Automation', count: allServices.filter(s => s.category === 'Robotics & Automation').length, icon: '🦾', color: 'from-blue-500 to-gray-500' };
  ];
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'rating':;
        return b.rating - a.rating,;
      case 'price':;
        return a.price - b.price,;
      case 'reviews':;
        return b.reviewCount - a.reviewCount,;
      case 'name':;
        return a.title.localeCompare(b.title),;
      default: return b.rating - a.rating
    };
  });
  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React.ReactNode } = {;
      'AI & Business Intelligence': <[^>]*/>
      'Cybersecurity': <Shield className="w-6 h-6" />,;
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,;
      'AI & Healthcare': <Heart className="w-6 h-6" />,;
      'Blockchain & Web3': <Link className="w-6 h-6" />,;
      'IoT & Edge Computing': <Network className="w-6 h-6" />,;
      'Quantum Computing': <Atom className="w-6 h-6" />,;
      'Space Technology': <Satellite className="w-6 h-6" />,;
      'Sustainable Technology': <Leaf className="w-6 h-6" />,;
      'AI & Legal Tech': <FileText className="w-6 h-6" />,;
      'FinTech': <DollarSign className="w-6 h-6" />,;
      'AI & Content': <MessageSquare className="w-6 h-6" />,;
      'IT Infrastructure': <Database className="w-6 h-6" />,;
      'AI & Computing': <Cpu className="w-6 h-6" />,;
      'Biotechnology': <Dna className="w-6 h-6" />,;
      'Energy Technology': <Zap className="w-6 h-6" />,;
      'Metaverse & AR/VR': <Globe className="w-6 h-6" />,;
      'Neurotechnology': <Brain className="w-6 h-6" />,;
      'Quantum Technology': <Atom className="w-6 h-6" />,;
      'Autonomous Systems': <Car className="w-6 h-6" />,;
      'Robotics & Automation': <[^>]*/>
    },;
    return iconMap[category] || <Star className="w-6 h-6" />,
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      <SEO ;
        title="Innovative Services Showcase 2027 | Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, space technology, and emerging tech services. Transform your business with Zion Tech Group's innovative solutions."
        keywords="AI services, quantum computing, space technology, emerging tech, innovative solutions, Zion Tech Group"
      />;

      {/* Hero Section */};
      <section className="relative py-20 px-4 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1 ;
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Innovative Services;
            </[^>]*>
            <[^>]*/>
            <span className="text-white">Showcase 2027</[^>]*>
          </[^>]*>
          ;
          <motion.p ;
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            Discover the future of technology with our cutting-edge AI, quantum computing, space technology, and emerging tech services. Transform your business with Zion Tech Group's innovative solutions.;
          </[^>]*>

          <motion.div ;
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
            className="[^"]*"
          >;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              Get Started Today;
            </[^>]*>
            <a;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              <[^>]*/>
              Call Now;
            </[^>]*>
          </[^>]*>

          {/* Contact Information */};
          <motion.div ;
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
            className="[^"]*"
          >;
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
              <[^>]*/>
              <h3 className="text-white font-semibold mb-2">Phone</[^>]*>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                +1 302 464 0950;
              </[^>]*>
            </[^>]*>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
              <[^>]*/>
              <h3 className="text-white font-semibold mb-2">Email</[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
              <[^>]*/>
              <h3 className="text-white font-semibold mb-2">Address</[^>]*>
              <p className="text-green-400 text-sm">;
                364 E Main St STE 1008<[^>]*/>
                Middletown DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Overview */};
      <section className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Revolutionary Technology Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              From AI-powered business solutions to quantum computing and space technology;
              we offer the most advanced services to drive your digital transformation.;
            </[^>]*>
          </[^>]*>

          {/* Service Categories */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">;
            {categories.slice(1).map((category, index) => (;
              <motion.div
                key={category.id};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`};
                onClick={() => setActiveCategory(category.id)};
              >;
                <div className="text-4xl mb-3">{category.icon}</[^>]*>
                <h3 className="font-semibold text-lg mb-2">{category.name}</[^>]*>
                <p className="text-sm opacity-90">{category.count} services</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* Search and Filter */};
          <motion.div ;
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <div className="flex flex-col md:flex-row gap-4">;
              <div className="flex-1 relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="rating">Sort by Rating</[^>]*>
                <option value="price">Sort by Price</[^>]*>
                <option value="reviews">Sort by Reviews</[^>]*>
                <option value="name">Sort by Name</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Services Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center gap-3">;
                    {getCategoryIcon(service.category)};
                    <span className="text-sm text-gray-300 bg-white/10 px-2 py-1 rounded-full">;
                      {service.category};
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span className="text-white text-sm">{service.rating}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</[^>]*>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</[^>]*>

                <div className="space-y-3 mb-6">;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-400 text-sm">Price:</[^>]*>
                    <span className="text-cyan-400 font-semibold">;
                      {service.currency}{service.price.toLocaleString()};
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-400 text-sm">Market Price:</[^>]*>
                    <span className="text-green-400 text-sm">{service.marketPrice}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-400 text-sm">ROI:</[^>]*>
                    <span className="text-yellow-400 text-sm">{service.roi}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-400 text-sm">Setup Time:</[^>]*>
                    <span className="text-blue-400 text-sm">{service.setupTime}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="flex flex-wrap gap-2 mb-6">;
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (;
                    <span;
                      key={tagIndex};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>

                <div className="flex items-center justify-between">;
                  <Link;
                    to={`/services/${service.id}`};
                    className="[^"]*"
                  >;
                    Learn More;
                  </[^>]*>
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`};
                    className="[^"]*"
                  >;
                    Get Quote;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* Call to Action */};
          <motion.div ;
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/20">;
              <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </[^>]*>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Join the future of technology with Zion Tech Group. Our innovative services ;
                are designed to give you a competitive edge in the digital age.;
              </[^>]*>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Start Your Journey;
                </[^>]*>
                <a;
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  Visit Our Website;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

//[^;]*
function Dna({ className }: { className?: string }) {;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">;
      <[^>]*/>
    </[^>]*>
  );
};
