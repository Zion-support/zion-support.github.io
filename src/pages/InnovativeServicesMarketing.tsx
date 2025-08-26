=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Video,
  Palette,
  Car,
  Plane,
  Leaf,
  Atom,
  Satellite,
  Microscope,
  Beaker,
  Lightbulb,
  ShieldCheck,
  UserCheck,
  FileText,
  Home,
  Stethoscope,
  Droplets,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Play,
  Award,
  Users2,
  Globe2,
  Zap as ZapIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, NEW_INNOVATIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES, NEW_INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';

export default function InnovativeServicesMarketing() {
  const [activeTab, setActiveTab] = useState('all');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...NEW_INNOVATIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...NEW_INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

=======
  // Filter services by category
  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'Blockchain & Web3': Network,
      'Internet of Things': Cpu,
      'Customer Experience': Users,
      'Supply Chain Management': ShoppingCart,
      'Human Resources': Users,
      'Financial Technology': DollarSign,
      'Legal Technology': FileText,
      'Real Estate Technology': Home,
      'Healthcare Technology': Stethoscope,
      'Energy Management': Zap,
      'Creative Design': Palette,
      'AI & Creative Technology': Video,
      'Autonomous Systems': Car,
      'AI & Education': BookOpen,
      'AI & Healthcare': Heart,
      'Quantum Computing': Atom,
      'Emerging Computing': Cpu,
      'Molecular Computing': Microscope,
      'Quantum Technology': Atom,
      'Biotechnology': Beaker,
      'Energy Technology': Zap,
      'Neurotechnology': Brain,
      'Space Technology': Satellite,
      'Materials Science': Microscope,
      'Climate Technology': Leaf,
      'Digital Technology': Sparkles
    };
    return iconMap[category] || Target;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud & Infrastructure': 'from-blue-500 to-indigo-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'Internet of Things': 'from-cyan-500 to-blue-500',
      'Customer Experience': 'from-orange-500 to-yellow-500',
      'Supply Chain Management': 'from-indigo-500 to-purple-500',
      'Human Resources': 'from-pink-500 to-rose-500',
      'Financial Technology': 'from-emerald-500 to-green-500',
      'Legal Technology': 'from-slate-500 to-gray-500',
      'Real Estate Technology': 'from-amber-500 to-orange-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Energy Management': 'from-yellow-500 to-orange-500',
      'Creative Design': 'from-purple-500 to-indigo-500',
      'AI & Creative Technology': 'from-pink-500 to-purple-500',
      'Autonomous Systems': 'from-blue-500 to-cyan-500',
      'AI & Education': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-rose-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'Emerging Computing': 'from-violet-500 to-purple-500',
      'Molecular Computing': 'from-emerald-500 to-teal-500',
      'Quantum Technology': 'from-blue-500 to-indigo-500',
      'Biotechnology': 'from-green-500 to-emerald-500',
      'Energy Technology': 'from-yellow-500 to-orange-500',
      'Neurotechnology': 'from-purple-500 to-pink-500',
      'Space Technology': 'from-slate-500 to-gray-500',
      'Materials Science': 'from-amber-500 to-yellow-500',
      'Climate Technology': 'from-emerald-500 to-green-500',
      'Digital Technology': 'from-cyan-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <span className="text-lg font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                #1 in Innovation
              </span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of {allServices.length}+ innovative micro SAAS services, 
              AI-powered solutions, and emerging technology platforms designed to drive digital transformation 
              and competitive advantage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">{allServices.length}+</div>
                <div className="text-sm text-blue-100">Innovative Services</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Expert Support</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-blue-100">Uptime Guarantee</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-blue-100">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services-showcase"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Explore All Services
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovation Consultation"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

=======
      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another technology company. We're your innovation partner, 
              committed to delivering cutting-edge solutions that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
              <p className="text-gray-600">
                Award-winning solutions with a track record of delivering measurable business impact 
                and ROI for clients across industries.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                World-class engineers, designers, and business strategists with deep expertise 
                in emerging technologies and industry best practices.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Serving clients worldwide with localized support, 24/7 availability, 
                and multi-language capabilities for seamless global operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Tabs */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI and machine learning to quantum computing and emerging technologies, 
              we offer comprehensive solutions across all major technology domains.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.slice(0, 9).map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="h-8 w-8" />
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          {service.supportLevel}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{service.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2">{service.description}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900">
                          ${service.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Market: <span className="font-semibold">{service.marketPrice}</span>
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.estimatedDelivery}
                      </div>
                      <div className="flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-1" />
                        {service.supportLevel}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          {filteredServices.length > 9 && (
            <div className="text-center mt-12">
              <Link
                to="/services-showcase"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                View All {filteredServices.length} Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our innovative solutions have transformed businesses across industries, 
              delivering measurable results and competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing Efficiency</h3>
              <p className="text-gray-600 mb-4">
                "Our AI-powered supply chain optimization reduced costs by 30% and improved 
                delivery times by 40% within 6 months."
              </p>
              <div className="text-sm text-gray-500">- Fortune 500 Manufacturing Company</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity Transformation</h3>
              <p className="text-gray-600 mb-4">
                "Zion's quantum-safe cybersecurity platform reduced security incidents by 90% 
                and ensured compliance with new regulations."
              </p>
              <div className="text-sm text-gray-500">- Global Financial Institution</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Growth</h3>
              <p className="text-gray-600 mb-4">
                "Our AI business intelligence suite increased sales conversion by 35% and 
                improved customer retention by 25%."
              </p>
              <div className="text-sm text-gray-500">- E-commerce Platform</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies that have already transformed their 
            operations with our innovative technology solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us Today</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
              <p className="text-sm text-blue-200">Available 24/7</p>
            </div>
            
=======
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
              <p className="text-sm text-blue-200">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Our Website</h3>
              <p className="text-blue-100">ziontechgroup.com</p>
              <p className="text-sm text-blue-200">Explore our full portfolio</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Headquarters</h3>
            <p className="text-blue-100">
              364 E Main St STE 1008<br />
              Middletown DE 19709<br />
              United States
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Innovation Consultation Request"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </a>
            <Link
              to="/services-showcase"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Missing icon components
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.523 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
  </svg>
);