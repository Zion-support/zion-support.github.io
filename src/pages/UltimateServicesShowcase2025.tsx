import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Brain,
  Zap,
  Shield,
  Database,
  Users,
  TrendingUp,
  Globe,
  Lock,
  Cloud,
  Briefcase,
  Scale,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  DollarSign,
  Clock,
  Award,
  Target,
  BarChart3,
  Cpu,
  Network,
  Smartphone,
  Monitor,
  Server,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  ExternalLink as ExternalLinkIcon,
  Search as SearchIcon
} from 'lucide-react';
import { ULTIMATE_REAL_SERVICES_2025, ULTIMATE_SERVICE_CATEGORIES_2025, ULTIMATE_SERVICE_SUBCATEGORIES_2025, ULTIMATE_PRICING_TIERS_2025, ULTIMATE_CONTACT_INFO_2025, ULTIMATE_SERVICE_GUARANTEES_2025 } from '@/data/ultimateRealServices2025';

export default function UltimateServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Object.keys(ULTIMATE_SERVICE_CATEGORIES_2025)];

  const filteredServices = ULTIMATE_REAL_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return ULTIMATE_SERVICE_CATEGORIES_2025[category]?.icon ? 
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_2025[category].icon}</span> : 
      <Rocket className="w-6 h-6" />;
  };

  const getCategoryIcon2 = (category: string) => {
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return ULTIMATE_SERVICE_CATEGORIES_2025[category]?.icon ? 
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_2025[category].icon}</span> : 
      <Rocket className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Ultimate Innovative Services 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ultimate Innovative
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Revolutionary AI-powered, quantum-secure, and autonomous business solutions that transform industries and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{ULTIMATE_REAL_SERVICES_2025.length}+</div>
              <div className="text-gray-300">Innovative Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-gray-300">Technology Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {getCategoryIcon(category)}
                <span className="ml-2 capitalize">{category}</span>
                {ULTIMATE_SERVICE_CATEGORIES_2025[category] && (
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {ULTIMATE_SERVICE_CATEGORIES_2025[category].count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {getCategoryIcon2(service.category)}
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400 capitalize">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-gray-400">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* AI Score */}
                <div className="flex items-center mb-4">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${service.aiScore}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-blue-400 font-medium">AI Score: {service.aiScore}%</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Pricing and ROI */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">${service.price.toLocaleString()}</div>
                    <div className="text-green-300 text-sm">Starting Price</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <div className="text-purple-400 font-bold text-lg">{service.roi}</div>
                    <div className="text-purple-300 text-sm">Expected ROI</div>
                  </div>
                </div>

                {/* Market Info */}
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-white font-medium">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white font-medium">{service.setupTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-white/10 text-white text-center py-2 px-4 rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Tiers</h2>
            <p className="text-xl text-gray-300">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(ULTIMATE_PRICING_TIERS_2025).map(([tier, details]) => (
              <div
                key={tier}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-600 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">{details.range}</div>
                <p className="text-gray-300 mb-6">{details.description}</p>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300">Get in touch with our experts today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{ULTIMATE_CONTACT_INFO_2025.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{ULTIMATE_CONTACT_INFO_2025.email}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{ULTIMATE_CONTACT_INFO_2025.address}</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
              <p className="text-gray-300">{ULTIMATE_CONTACT_INFO_2025.businessHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Guarantees */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Guarantees</h2>
            <p className="text-xl text-gray-300">We stand behind every solution we deliver</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(ULTIMATE_SERVICE_GUARANTEES_2025).map(([key, guarantee]) => (
              <div
                key={key}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-600"
              >
                <Award className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <p className="text-gray-300">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have already transformed their operations with our cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
