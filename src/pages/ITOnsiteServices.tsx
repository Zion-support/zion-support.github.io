import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Heart, 
  Eye,
  ArrowRight,
  Zap,
  Cpu,
  Server,
  Network,
  Shield,
  Cloud,
  Rocket,
  Monitor,
  HardDrive,
  Wifi,
  Router,
  Building2,
  CheckCircle,
  Plus,
  Phone,
  Mail,
  Users,
  Globe,
  Shield,
  Lock,
  Settings,
  BarChart3,
  Truck,
  Tool,
  Calendar,
  Award,
  TrendingUp,
  Headphones,
  FileText,
  Database,
  Key,
  AlertTriangle,
  RefreshCw,
  Power,
  Activity
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'deployment',
    title: 'Deployment Services',
    description: 'Professional installation and setup of IT infrastructure',
    icon: Server,
    count: '24/7',
    color: 'from-blue-600 to-cyan-600',
    services: ['Server Installation', 'Network Setup', 'Workstation Deployment', 'Cloud Migration']
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Regular maintenance and proactive system monitoring',
    icon: Wrench,
    count: '24/7',
    color: 'from-green-600 to-emerald-600',
    services: ['Preventive Maintenance', 'System Updates', 'Performance Optimization', 'Health Checks']
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Rapid response to technical issues and emergencies',
    icon: AlertTriangle,
    count: '2hr Response',
    color: 'from-red-600 to-orange-600',
    services: ['Emergency Response', 'Issue Diagnosis', 'Quick Fixes', 'Root Cause Analysis']
  },
  {
    id: 'security',
    title: 'Security Services',
    description: 'Cybersecurity assessments and infrastructure hardening',
    icon: Shield,
    count: '24/7',
    color: 'from-purple-600 to-pink-600',
    services: ['Security Audits', 'Penetration Testing', 'Compliance Checks', 'Threat Response']
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic technology planning and optimization',
    icon: Users,
    count: 'Flexible',
    color: 'from-indigo-600 to-purple-600',
    services: ['Technology Roadmaps', 'Capacity Planning', 'Cost Optimization', 'Best Practices']
  },
  {
    id: 'training',
    title: 'Training & Knowledge Transfer',
    description: 'Staff training and documentation services',
    icon: FileText,
    count: 'Custom',
    color: 'from-yellow-600 to-orange-600',
    services: ['User Training', 'Admin Training', 'Documentation', 'Knowledge Transfer']
  }
];

const servicePackages = [
  {
    id: 1,
    name: 'Basic Support Package',
    description: 'Essential onsite support for small businesses',
    price: '$150/hr',
    responseTime: '4 hours',
    coverage: 'Business Hours',
    features: [
      'Onsite troubleshooting',
      'Basic maintenance',
      'Emergency response',
      'Monthly health checks',
      'Email support'
    ],
    bestFor: 'Small businesses with basic IT needs',
    featured: false
  },
  {
    id: 2,
    name: 'Professional Support Package',
    description: 'Comprehensive support for growing organizations',
    price: '$200/hr',
    responseTime: '2 hours',
    coverage: 'Extended Hours',
    features: [
      'Priority response',
      'Preventive maintenance',
      'Security assessments',
      'Performance optimization',
      '24/7 emergency support',
      'Monthly reports'
    ],
    bestFor: 'Medium businesses requiring reliable IT support',
    featured: true
  },
  {
    id: 3,
    name: 'Enterprise Support Package',
    description: 'Premium support for large organizations',
    price: '$250/hr',
    responseTime: '1 hour',
    coverage: '24/7',
    features: [
      'Dedicated engineer',
      'Comprehensive maintenance',
      'Advanced security',
      'Capacity planning',
      'Strategic consulting',
      'Custom SLAs',
      'Quarterly reviews'
    ],
    bestFor: 'Large enterprises with critical IT infrastructure',
    featured: false
  }
];

const coverageAreas = [
  {
    region: 'North America',
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
    responseTime: '2-4 hours'
  },
  {
    region: 'Europe',
    cities: ['London', 'Berlin', 'Paris', 'Madrid', 'Rome', 'Amsterdam', 'Brussels', 'Vienna', 'Zurich', 'Stockholm'],
    responseTime: '4-6 hours'
  },
  {
    region: 'Asia Pacific',
    cities: ['Tokyo', 'Singapore', 'Sydney', 'Seoul', 'Hong Kong', 'Bangkok', 'Mumbai', 'Jakarta', 'Manila', 'Kuala Lumpur'],
    responseTime: '4-8 hours'
  }
];

const ITOnsiteServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = serviceCategories.filter(service => {
    if (selectedCategory !== 'all' && service.id !== selectedCategory) {
      return false;
    }
    if (searchQuery && !service.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !service.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}IT Onsite Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Expert technicians at your location for deployment, maintenance, troubleshooting, 
              and strategic IT consulting. Fast response times and comprehensive support coverage.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for services, expertise, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>2-4 Hour Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Certified Technicians</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Categories</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive onsite IT services covering all aspects of technology infrastructure, 
              from initial deployment to ongoing maintenance and strategic consulting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
                onClick={() => setSelectedCategory(selectedCategory === service.id ? 'all' : service.id)}
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl h-full relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80 font-semibold">{service.count}</span>
                      <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.services.slice(0, 3).map((serviceItem, serviceIndex) => (
                        <span key={serviceIndex} className="px-3 py-1 bg-white/20 rounded-full text-white/90 text-sm">
                          {serviceItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Packages</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose from our flexible service packages designed to meet the needs of organizations 
              of all sizes, from startups to enterprise corporations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  pkg.featured 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-500/30'
                } transition-all duration-300`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <p className="text-slate-300 mb-6">{pkg.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                  <div className="text-slate-400 text-sm mb-4">{pkg.responseTime} response time</div>
                  <div className="text-slate-400 text-sm">{pkg.coverage} coverage</div>
                </div>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-slate-400 text-sm text-center">
                    <strong className="text-white">Best for:</strong> {pkg.bestFor}
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    to="/request-quote"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      pkg.featured
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-slate-700/50 text-white hover:bg-slate-600/50 border border-slate-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Global Coverage</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our certified technicians are available in major cities worldwide, 
              providing fast response times and local expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{area.region}</h3>
                  <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{area.responseTime}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {area.cities.slice(0, 6).map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span className="text-sm">{city}</span>
                    </div>
                  ))}
                  {area.cities.length > 6 && (
                    <div className="text-slate-400 text-sm text-center pt-2">
                      +{area.cities.length - 6} more cities
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We combine technical expertise with exceptional service to deliver 
              reliable, efficient, and cost-effective IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Certified Experts',
                description: 'All technicians are certified and experienced in enterprise technologies'
              },
              {
                icon: Clock,
                title: 'Fast Response',
                description: 'Guaranteed response times from 1-4 hours depending on service level'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous quality standards and comprehensive testing procedures'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Personal account managers and dedicated support teams'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Professional IT Support?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get expert onsite support, fast response times, and comprehensive coverage 
              for all your IT infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
                Get Service Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-slate-700/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITOnsiteServices;