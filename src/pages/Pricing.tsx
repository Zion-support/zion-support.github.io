import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Atom, 
  Space, 
  Shield, 
  Heart, 
  Leaf, 
  Lock,
  ArrowRight,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2025 } from '../data/revolutionaryServices2025';
import { SEO } from '../components/SEO';

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const allServices = REVOLUTIONARY_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Green Technology', name: 'Green Technology', icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Blockchain', name: 'Blockchain', icon: '🔗', color: 'from-zion-green to-zion-emerald' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getAnnualDiscount = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.15); // 15% annual discount
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Brain className="w-5 h-5" />;
      case 'Quantum Computing': return <Atom className="w-5 h-5" />;
      case 'AI & Healthcare': return <Heart className="w-5 h-5" />;
      case 'Green Technology': return <Leaf className="w-5 h-5" />;
      case 'Space Technology': return <Space className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'AI & Content': return <Globe className="w-5 h-5" />;
      case 'Edge Computing': return <Rocket className="w-5 h-5" />;
      case 'Blockchain': return <Lock className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Transparent Pricing - Zion Tech Group"
        description="Discover our transparent pricing for revolutionary AI, Quantum Computing, Space Technology, and micro SAAS solutions. Compare with market prices and see the value."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transparent
              </span>
              <br />
              <span className="text-white">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary technology shouldn't come with hidden costs. See exactly what you're paying for 
              and how our solutions compare to market alternatives.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'annual' ? 32 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 text-cyan-400 text-sm font-medium">Save 15%</span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filteredServices.filter(s => s.category === category.id).length}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${
                    service.innovationLevel === 'Revolutionary' 
                      ? 'from-purple-500 to-pink-500' 
                      : 'from-cyan-500 to-blue-500'
                  }`}>
                    {getCategoryIcon(service.category)}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4">{service.category}</p>
                
                {/* Innovation Badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  service.innovationLevel === 'Revolutionary' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                }`}>
                  <Sparkles className="w-3 h-3 mr-1" />
                  {service.innovationLevel}
                </span>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="mb-2">
                  <span className="text-4xl font-bold text-cyan-400">
                    ${billingCycle === 'annual' 
                      ? Math.round(service.price * 12 * 0.85).toLocaleString()
                      : service.price.toLocaleString()
                    }
                  </span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                
                {billingCycle === 'annual' && (
                  <div className="text-green-400 text-sm font-medium">
                    Save ${getAnnualDiscount(service.price).toLocaleString()} annually
                  </div>
                )}
                
                <div className="text-gray-400 text-sm">
                  Market price: {service.marketPrice}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 text-center">Key Features</h4>
                <div className="space-y-3">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 5 && (
                    <div className="text-cyan-400 text-sm font-medium text-center">
                      +{service.features.length - 5} more features
                    </div>
                  )}
                </div>
              </div>

              {/* ROI and Delivery */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg">{service.roi}</div>
                  <div className="text-gray-400 text-xs">ROI</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400 font-bold text-lg">{service.estimatedDelivery}</div>
                  <div className="text-gray-400 text-xs">Delivery</div>
                </div>
              </div>

              {/* Market Comparison */}
              <div className="mb-8 p-4 bg-white/5 rounded-lg">
                <h5 className="text-white font-semibold mb-3 text-center">Market Comparison</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Our Price:</span>
                    <span className="text-cyan-400 font-medium">
                      ${billingCycle === 'annual' 
                        ? Math.round(service.price * 12 * 0.85).toLocaleString()
                        : service.price.toLocaleString()
                      }/month
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Average:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Savings:</span>
                    <span className="text-green-400 font-medium">
                      {service.competitors && service.competitors.length > 0 ? 'Up to 60%' : 'Significant'}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 mb-16"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our revolutionary services offer unprecedented value with transparent pricing, 
              cutting-edge technology, and proven ROI that far exceeds market alternatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300">
                  Our services deliver 200-1200% ROI, far exceeding industry standards
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Revolutionary Technology</h3>
                <p className="text-gray-300">
                  First-to-market solutions with quantum computing and advanced AI
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security with quantum encryption and AI threat detection
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and get a custom quote 
              tailored to your business requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
