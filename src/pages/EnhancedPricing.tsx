import React, { useState  from "react", import { motion } from "framer-moti, on";import { Check, Star;
  TrendingUp;
  Zap;
  Shield;
  Brain;
  Cpu;
  Database;
  Network;
  Rocket;
  Users;
  BarChart3;
  Code;
  Server;
  Chip;
  Globe;
  Lock;
  ShieldCheck;
  Phone;
  Mail;
  Globe as GlobeIcon;
  Award;
  Clock;
  DollarSign;
  Target;
  Handshake;
  Lightbulb;
  ArrowRight
} from "lucide-react";import { ENHANCED_MICRO_SAAS_SERVICES_2025 } from "../data/enhancedMicroSaasServices20, 25";import { SEO } from "../components/S, EO";const EnhancedPricing: React.FC  = () => {
  const [selectedCatego,
    r;y;
    setSelectedCategory] = useState('all')const [sortBysetSortBy] = useState('price')const allServices  = ENHANCED_MICRO_SAAS_SERVICES_2025const categories  = [
    { id: 'all, ', name: 'All Services,'; icon: '🚀',
     }{ id: 'AI & Analytics, ', name: 'AI & Analytics, ', icon: '🤖',  }{ id: 'AI & Legal Tech, ', name: 'AI & Legal Tech, ', icon: '⚖️',  }{ id: 'Quantum Computing, ', name: 'Quantum Computing, ', icon: '⚛️',  }{ id: 'AI & Healthcare, ', name: 'AI & Healthcare, ', icon: '🏥',  }{ id: 'Blockchain, ', name: 'Blockchain, ', icon: '🔗',  }{ id: 'IoT & Smart Cities, ', name: 'IoT & Smart Cities, ', icon: '🌐',  }{ id: 'Cybersecurity, ', name: 'Cybersecurity, ', icon: '🛡️',  },
    { id: 'Metaverse, ', name: 'Metaverse, ', icon: '🌍',  }
  ]const filteredServices  = selectedCategory === 'all' 
    ? allServices: allServices.filter(service => service.category === selectedCategory),
    const sortedServices  = [...filteredServices].sort((ab) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.pricecase 'roi':
        return parseFloat(b.roi.replace('%, ', '')) - parseFloat(a.roi.replace('%'; ''))case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel)default: return 0
   ,
     }
  })const getCategoryIcon = () => {
    switch (category) {
      case 'AI & Analytics': return <Brain className="w-6 h-6" />case 'AI & Legal Tech': return <Shield className="w-6 h-6" /, >,
      case 'Quantum Computing': return <Cpu className="w-6 h-6" />,
      case 'AI & Healthcare': return <Users className="w-6 h-6" />,
      case 'Blockchain': return <Database className="w-6 h-6" />
  }case 'IoT & Smart Cities': return <Network className="w-6 h-6" />case 'Cybersecurity': return <ShieldCheck className="w-6 h-6" />case 'Metaverse': return <Globe className="w-6 h-6" />default: return <Rocket className="w-6 h-6" /,
    >
   }
  }const getInnovationBadge  = () => {
    const colors = {
      'Advanced': 'bg-blue-500Cutting-edge': 'bg-purple-500Revolutionary': 'bg-red-500'
   }return (
      <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${colors[level as keyof typeof colors] || 'bg-gray-500'}`}>
        {level}
      </span>
    ),
  },

  const getROIColor = () => {
    const roiValue = parseFloat(roi.replace('%, ', '')),
    if (roiValue >= 500) return 'text-red-400'
  }if (roiValue >= 300) return 'text-orange-400'if (roiValue >= 200) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Micro SAAS Services Pricing - Zion Tech Group"
        description="Comprehensive pricing for our innovative micro SAAS services. Discover competitive pricing for AIQuantum Computing, Blockchain, IoT, and more with exceptional ROI."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0,
    y: 20,  }}
              animate={{ opacity: 1,
    y: 0,  }}
              transition={{ duration: 0.8,
     }}
              className="text-5xl md: text-6xl font-bold text-white mb-6"
            >
              Transparent Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                Innovative Solutions
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0,
    y: 20,  }}
              animate={{ opacity: 1,
    y: 0,  }}
              transition={{ duration: 0.8,
    delay: 0.2,  }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Our micro SAAS services are priced competitively to deliver exceptional value and ROI. 
              Each service includes comprehensive featuressupport, and continuous updates.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0,
    y: 20,  }}
              animate={{ opacity: 1,
    y: 0,  }}
              transition={{ duration: 0.8,
    delay: 0.4,  }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <GlobeIcon className="w-6 h-6 text-zion-cyan mb-2" />
                  <p className="text-sm text-gray-300">Website</p>
                  <p className="text-white font-semibold">ziontechgroup.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section *, /}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">
        {/* Filters *, /}
        <div className="mb-8">
          <div className="flex flex-col lg: flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.i, d}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover: bg-white/20'
                 ,  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
              <option value="innovation">Sort by Innovation</option>
            </select>
          </div>
        </div>

        {/* Services Grid *,
    /}
        <div className="grid gap-6 grid-cols-1 lg: grid-cols-2 xl:grid-cols-3">
          {sortedServices.map((service,
    index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0,
    y: 20,  }}
              animate={{ opacity: 1,
    y: 0,  }}
              transition={{ duration: 0.5,
    delay: index * 0.1,  }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Header *, /}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  {getCategoryIcon(service.category)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  {getInnovationBadge(service.innovationLevel)}
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-1">
                  ${service.price.toLocaleString()}
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-400">{service.pricingModel} billing</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</p>

              {/* Key Metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">ROI: </span>
                  <span className={`text-sm font-semibold ${getROIColor(service.roi)}`}>
                    {service.roi} return </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Market Price: </span>
                  <span className="text-sm text-gray-300">{service.marketPric, e}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Delivery: </span>
                  <span className="text-sm text-gray-300">{service.estimatedDelive,
    ry}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Support: </span>
                  <span className="text-sm text-gray-300 capitalize">{service.supportLeve,
    l}</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Benefits: </h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0,
    4).map((benefi, t, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zion-cyan mb-3">Top Features: </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0,
    6).map((featur, e, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={`mailto: kleber@ziontechgroup.com?subject=Inquiry about ${service.titl,
    e}&body=HiI'm interested in learning more about your ${service.title} service. Please provide more details about pricing, features, and implementation.`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover: from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 w-full justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ),
    )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0,
    y: 20,  }}
          animate={{ opacity: 1,
    y: 0,  }}
          transition={{ duration: 0.8,
    delay: 0.6,  }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer flexible pricing options for enterprise customers and custom solutions. 
              Contact us to discuss your specific requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Custom Quote
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Pricing Inquiry&body=Hi,
    I'm interested in custom pricing for your services. Please provide more details about enterprise options and custom solutions."
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover: bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),
};
export default EnhancedPricin;g;