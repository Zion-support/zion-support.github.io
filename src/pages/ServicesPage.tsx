import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Shield,
  Brain,
  Cloud,
  Lock,
  Zap,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Atom,
  Blockchain,
  Heart,
  Home,
  Truck,
  Target,
  Calendar,
  Settings,
  Bot
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";
import { ADVANCED_ENTERPRISE_SOLUTIONS_2025 } from "@/data/advancedEnterpriseSolutions2025";
import { NEXT_GEN_AI_SERVICES_2025 } from "@/data/nextGenAIServices2025";
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from "@/data/specializedIndustrySolutions2025";
import { IOT_EDGE_COMPUTING_SERVICES_2025 } from "@/data/iotEdgeComputingServices2025";
import { map2026ServicesToExistingStructure } from "@/utils/serviceMapper";
export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-zion-blue to-zion-purple' }
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', icon: Code, color: 'from-zion-orange to-zion-pink' },
    { id: 'data-privacy-compliance', name: 'Data Privacy & Compliance', icon: Lock, color: 'from-zion-red to-zion-purple' },
    { id: 'green-tech-sustainability', name: 'Green Tech & Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'remote-work-collaboration', name: 'Remote Work & Collaboration', icon: Users, color: 'from-zion-blue to-zion-purple' },
    { id: 'ecommerce-retail', name: 'E-commerce & Retail', icon: ShoppingCart, color: 'from-zion-green to-zion-orange' },
    { id: 'healthcare-technology', name: 'Healthcare Technology', icon: Heart, color: 'from-zion-pink to-zion-red' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-orange to-zion-blue' },
    { id: 'supply-chain-logistics', name: 'Supply Chain & Logistics', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support', name: 'Customer Support', icon: MessageCircle, color: 'from-zion-blue to-zion-pink' }
  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];
  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'innovation', name: 'Innovation Level' }
  ];
  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_ENTERPRISE_SOLUTIONS_2025,
    ...NEXT_GEN_AI_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...IOT_EDGE_COMPUTING_SERVICES_2025,
    ...map2026ServicesToExistingStructure()
  ];
  // Filter and sort services
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    return matchesSearch && matchesCategory && matchesPrice;
  });
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      case 'innovation':
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel] || 0) - (innovationOrder[a.innovationLevel] || 0);
      default:
        return 0;
    }
  });
  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };
  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };
  // Get category statistics
  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    INNOVATIVE_MICRO_SAAS_SERVICES_2025.forEach(service => {
      const category = service.category.toLowerCase().replace(' ', '-');
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  };
  const categoryStats = getCategoryStats();
  return (
    <>
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, Healthcare AI, Legal Tech, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-zion-green rounded-full animate-pulse delay-3000"></div>
        </div>
        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Innovative Micro SAAS</span>
              <br />
              <span className="text-white">Services & Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered analytics to quantum computing, 
              blockchain applications to healthcare AI, discover the future of business technology with our comprehensive micro SAAS platform.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length - 1}</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </motion.div>
=======
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {COMPREHENSIVE_SERVICES_CATALOG_2025.length} services
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25 group"
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </div>
                    <button className="px-6 py-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors flex items-center gap-2 group-hover:gap-3">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-zion-slate-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-zion-slate-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors"
                >
                  View All Services
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
