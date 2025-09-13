import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Heart, 
  Scale, 
  Truck, 
  Calendar, 
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  TrendingUp,
  Rocket,
  Target,
  Award,
  Clock,
  DollarSign,
  Crown,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export default function ComprehensiveServicesLanding2025() {
  // Filter for the new innovative services (last 10 services added)
  const newInnovativeServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(-10);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
          {getServiceIcon(service.category)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="text-sm text-cyan-400">{service.category}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</span>
        <span className="text-gray-400">/{service.pricingModel}</span>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-600"}`} />
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">(4.9/5)</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center text-green-400 text-sm mb-2">
          <TrendingUp className="h-4 w-4 mr-2" />
          ROI: {service.roi}
        </div>
        <div className="flex items-center text-blue-400 text-sm">
          <Clock className="h-4 w-4 mr-2" />
          Delivery: {service.estimatedDelivery}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
        <ul className="space-y-1">
          {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-center text-xs text-gray-300">
              <CheckCircle className="h-3 w-3 text-cyan-400 mr-2 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-2">
        <Link
          to={`/services/${service.id}`}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <a
          href="https://ziontechgroup.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'AI & Security':
        return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'AI & Marketing':
        return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'AI & Support':
        return <MessageSquare className="w-6 h-6 text-cyan-400" />;
      case 'AI & Finance':
        return <BarChart3 className="w-6 h-6 text-cyan-400" />;
      case 'AI & Healthcare':
        return <Heart className="w-6 h-6 text-cyan-400" />;
      case 'AI & Legal':
        return <Scale className="w-6 h-6 text-cyan-400" />;
      case 'AI & Supply Chain':
        return <Truck className="w-6 h-6 text-cyan-400" />;
      case 'AI & Project Management':
        return <Calendar className="w-6 h-6 text-cyan-400" />;
      case 'AI & HR':
        return <Users className="w-6 h-6 text-cyan-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  const stats = [
    { label: "AI Services", value: "50+", icon: Brain },
    { label: "Success Rate", value: "99.9%", icon: Target },
    { label: "Client Satisfaction", value: "4.9/5", icon: Award },
    { label: "ROI Average", value: "300%+", icon: TrendingUp }
  ];

  const serviceCategories = [
    {
      title: "AI & Automation",
      description: "Transform business operations with intelligent automation",
      icon: Brain,
      count: 12,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "AI & Security",
      description: "Advanced cybersecurity powered by artificial intelligence",
      icon: Shield,
      count: 8,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "AI & Marketing",
      description: "Revolutionize your marketing with AI-driven insights",
      icon: FileText,
      count: 15,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "AI & Finance",
      description: "Intelligent financial analytics and trading solutions",
      icon: BarChart3,
      count: 10,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "AI & Healthcare",
      description: "Next-generation healthcare analytics and insights",
      icon: Heart,
      count: 6,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "AI & Legal",
      description: "Streamline legal operations with intelligent automation",
      icon: Scale,
      count: 4,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive AI Services Landing 2025 - Zion Tech Group" 
        description="Discover our comprehensive portfolio of AI-powered services and solutions. Transform your business with cutting-edge technology from Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Comprehensive AI Services 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">AI-Powered Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of innovative AI services designed to drive growth, 
              efficiency, and competitive advantage. From autonomous operations to intelligent analytics, 
              we deliver solutions that transform businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered services across all major business domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{category.title}</h3>
                <p className="text-gray-300 text-center mb-4">{category.description}</p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {category.count} Services
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative AI services that are transforming businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newInnovativeServices.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/innovative-services-showcase-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation First",
                description: "We stay ahead of the curve with cutting-edge AI and emerging technologies."
              },
              {
                icon: Target,
                title: "Proven Results",
                description: "Our services deliver measurable ROI and competitive advantages."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2, ISO 27001, and industry-leading security standards."
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Rapid deployment with our proven development methodologies."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "24/7 support from our team of AI and technology experts."
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                description: "We stand behind our work with comprehensive warranties."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of businesses already leveraging our innovative AI services. 
              Get started today and experience the future of business technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-center">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                </div>
              </div>

              <div className="flex items-center justify-center text-center">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mr-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>

              <div className="flex items-center justify-center text-center">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mr-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Website</div>
                  <div className="text-white font-semibold">ziontechgroup.com</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Visit Our Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}