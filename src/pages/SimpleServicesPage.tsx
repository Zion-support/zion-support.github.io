import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {}
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  Code,
  Chip,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Rocket,
  Award,
  TrendingUp,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Lock,
  DollarSign,
  Users;
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from "@/data/advancedInnovativeServices2025";
import { EMERGING_TECH_SERVICES_2025 } from "@/data/emergingTechServices2025";

export default function SimpleServicesPage(function SimpleServicesPage() {): any {}
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories: any = []
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-purple-500 to-blue-500' },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-cyan-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-red-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-pink-500 to-purple-500' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-green-500 to-blue-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-blue-500 to-purple-500' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-orange-500 to-green-500' }
  ];

  // Combine all services;
  const allServices: any = []
    ...ADVANCED_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025;
  ];
  
  const filteredServices: any = allServices.filter(service => {}
    const title: any = service.title || service.name || '';
    const matchesSearch: any = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory: any = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Tech Group Services;
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more;
          </p>
          <p className="text-lg text-blue-600 font-semibold">
            Total Services: {allServices.length}+
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input;
              type="text""
              placeholder="Search services...""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
            />
            <select;
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div;
              key={service.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200""
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title || service.name}
                  </h3>
                  <p className="text-sm text-gray-500">{service.category}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-bold">
                  {service.currency}{service.price}/{service.pricingModel}
                </span>
                <span className="text-sm text-gray-500">
                  {service.estimatedDelivery}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.features?.slice(0, 3).map((feature, index) => (
                    <span;
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full""
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <p>ROI: {service.roi}</p>
                  <p>Market: {service.marketPrice}</p>
                </div>
                <Link;
                  to={`/contact?service=${service.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200""
                >
                  Get Quote;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our technology experts to discuss your specific needs;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link;
              to="/contact""
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300""
            >
              Get Free Consultation;
            </Link>
            <a;
              href="tel:+13024640950""
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300""
            >
              Call Now: +1 302 464 0950;
            </a>
          </div>
          <div className="mt-8 text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}