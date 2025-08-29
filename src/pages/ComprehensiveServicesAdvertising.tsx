import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Sparkles,
  Target,
  BarChart3,
  Heart,
  Factory,
  ShoppingCart,
  DollarSign as DollarSignIcon,
  Heart as HeartIcon,
  Factory as FactoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon2,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Target as TargetIcon,
  BarChart3 as BarChart3Icon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function ComprehensiveServicesAdvertising() {
  const featuredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => service.featured);
  const highROIServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
    const roi = service.roi;
    if (typeof roi === 'string') {
      const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
      return roiNumber > 500;
    }
    return false;
  });

  const serviceCategories = [
    {
      name: "AI & Business Intelligence",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category.includes('AI')).length
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Cybersecurity').length
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Cloud & DevOps').length
    },
    {
      name: "Quantum Computing",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Quantum Computing').length
    },
    {
      name: "Emerging Technology",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Emerging Technology').length
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Advertising - Zion Tech Group"
        description="Discover our comprehensive range of innovative AI, IT, and emerging technology services. Expert solutions with proven ROI, competitive pricing, and world-class support."
        keywords="AI services, IT solutions, cybersecurity, cloud computing, quantum computing, emerging technology, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Technology Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI, IT, and emerging technology solutions. 
              Proven ROI, competitive pricing, and expert support from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <DollarSignIcon className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white/5 backdrop-blur-sm py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-blue-400" />
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MailIcon className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPinIcon className="w-6 h-6 text-pink-400" />
              <div>
                <p className="text-gray-300 text-sm">Address</p>
                <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.count} services available</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Explore Services
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and high-impact technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400">({service.reviewCount})</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                    {service.aiScore}% AI
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-green-400">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-yellow-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-blue-400">{service.setupTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High ROI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              High ROI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Services delivering exceptional returns on investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {highROIServices.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.roi}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-gray-400 text-sm">Price:</span>
                    <p className="text-white font-semibold">${service.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Setup Time:</span>
                    <p className="text-blue-400">{service.setupTime}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">AI Score:</span>
                    <p className="text-green-400">{service.aiScore}%</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Category:</span>
                    <p className="text-purple-400">{service.category}</p>
                  </div>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  View Details
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the way in innovative technology solutions with proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Expertise",
                description: "15+ years of experience in cutting-edge technology solutions"
              },
              {
                icon: Users,
                title: "Global Reach",
                description: "Serving clients worldwide with 24/7 support and expertise"
              },
              {
                icon: TrendingUp,
                title: "High ROI",
                description: "Average 800% ROI across our service portfolio"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security and compliance standards"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our innovative technology solutions today. 
              Contact us for a free consultation and discover how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Contact Us Now
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <EyeIcon className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>

            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MailIcon className="w-5 h-5 text-purple-400" />
                  <div className="text-left">
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-pink-400" />
                  <div className="text-left">
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}