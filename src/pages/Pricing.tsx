import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Heart, 
  Scale, 
  Eye, 
  Leaf, 
  Globe, 
  Lock, 
  Cpu, 
  Atom, 
  TrendingUp, 
  Users, 
  Building, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  Sparkles,
  Crown,
  Flame
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: allServices.filter(s => s.category === 'AI & Green Tech').length, icon: '🌱' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: allServices.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍' },
    { id: 'AI & Blockchain', name: 'AI & Blockchain', count: allServices.filter(s => s.category === 'AI & Blockchain').length, icon: '🔗' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', count: allServices.filter(s => s.category === 'AI & Edge Computing').length, icon: '🌐' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: allServices.filter(s => s.category === 'AI & Space Tech').length, icon: '🚀' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return <Brain className="w-5 h-5" />;
      case 'AI & Legal Tech': return <Scale className="w-5 h-5" />;
      case 'AI & Healthcare': return <Heart className="w-5 h-5" />;
      case 'AI & Research': return <Eye className="w-5 h-5" />;
      case 'AI & Green Tech': return <Leaf className="w-5 h-5" />;
      case 'AI & Metaverse': return <Globe className="w-5 h-5" />;
      case 'AI & Blockchain': return <Lock className="w-5 h-5" />;
      case 'AI & Edge Computing': return <Cpu className="w-5 h-5" />;
      case 'Quantum Computing': return <Atom className="w-5 h-5" />;
      case 'AI & Space Tech': return <Rocket className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return 'from-purple-500 to-cyan-500';
      case 'AI & Legal Tech': return 'from-blue-500 to-indigo-500';
      case 'AI & Healthcare': return 'from-red-500 to-pink-500';
      case 'AI & Research': return 'from-purple-500 to-violet-500';
      case 'AI & Green Tech': return 'from-green-500 to-emerald-500';
      case 'AI & Metaverse': return 'from-purple-500 to-indigo-500';
      case 'AI & Blockchain': return 'from-green-500 to-emerald-500';
      case 'AI & Edge Computing': return 'from-blue-500 to-cyan-500';
      case 'Quantum Computing': return 'from-purple-500 to-pink-500';
      case 'AI & Space Tech': return 'from-indigo-500 to-purple-500';
      default: return 'from-cyan-500 to-blue-500';
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container-responsive py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI services with clear, competitive pricing. Choose the perfect solution for your business needs with our comprehensive pricing guide.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-16 h-8 bg-slate-700 rounded-full p-1 transition-colors duration-300"
              >
                <div className={`w-6 h-6 bg-cyan-500 rounded-full transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-8' : ''
                }`}></div>
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-2 text-sm text-cyan-400">Save 20%</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container-responsive py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-lg shadow-cyan-500/25'
                  : 'border-slate-700 bg-slate-800/50 text-gray-300 hover:border-slate-600 hover:bg-slate-700/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-2 px-2 py-1 bg-slate-700/50 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-responsive py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              {/* Service Header */}
              <div className={`p-6 bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">
                      ${billingCycle === 'annual' ? Math.round(service.price * 0.8) : service.price}
                    </div>
                    <div className="text-white/80 text-sm">
                      per {billingCycle === 'annual' ? 'month (annual)' : 'month'}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Top Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-6 text-sm text-gray-400">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Delivery
                    </span>
                    <span className="text-white">{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Support
                    </span>
                    <span className="text-white capitalize">{service.supportLevel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      ROI
                    </span>
                    <span className="text-cyan-400 font-semibold">{service.roi}</span>
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-white font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-gray-400">Innovation Level:</span>
                    <span className="text-cyan-400 font-semibold">{service.innovationLevel}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-lg transition-all duration-300"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Enterprise Section */}
      <div className="container-responsive py-16">
        <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-cyan-400/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need a custom solution? Our enterprise team can create tailored AI solutions that perfectly fit your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
              <p className="text-gray-300">Tailored AI solutions built specifically for your business needs</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-gray-300">24/7 dedicated support team and account management</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SLA Guarantees</h3>
              <p className="text-gray-300">Service level agreements with guaranteed uptime and performance</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Contact Enterprise Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-responsive py-16">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Choosing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI experts are here to help you find the perfect solution for your business. Get in touch for personalized recommendations and pricing.
              </p>
              
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call Us</div>
                    <div>{contactInfo.phone}</div>
                  </div>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email Us</div>
                    <div>{contactInfo.email}</div>
                  </div>
                </a>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-3 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Visit Us</div>
                    <div className="text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Your Custom Quote</h3>
              <p className="text-gray-300 mb-6">
                Tell us about your project and we'll provide a personalized quote tailored to your specific needs.
              </p>
              
              <Link
                to="/request-quote"
                className="block w-full text-center py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Request Custom Quote
              </Link>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                Response within 24 hours • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Get answers to common questions about our pricing and services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "What's included in the pricing?",
              answer: "All our services include the core platform, API access, basic support, and regular updates. Enterprise plans include additional features like custom integrations, dedicated support, and SLA guarantees."
            },
            {
              question: "Can I switch between plans?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
            },
            {
              question: "Do you offer volume discounts?",
              answer: "Yes, we offer significant discounts for annual billing and volume purchases. Contact our sales team for enterprise pricing."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, bank transfers, and can accommodate custom payment terms for enterprise customers."
            },
            {
              question: "Is there a free trial available?",
              answer: "Yes, most of our services offer a 14-day free trial. No credit card required to start your trial."
            },
            {
              question: "What kind of support do you provide?",
              answer: "We provide email support for all plans, with phone and priority support for higher tiers. Enterprise customers get dedicated account management."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
