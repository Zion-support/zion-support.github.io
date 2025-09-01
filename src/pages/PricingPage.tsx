import {
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Rocket,
  Brain,
  Atom,
  Code,
  Cloud,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';

export function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  
  
  
    return categoryData ? categoryData.icon : Globe};

  
    return categoryData ? categoryData.color : 'from-gray-500 to-slate-600'};

  
    if (price <= 3000) return 'text-yellow-400';
    return 'text-red-400'};

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Transparent Pricing for Revolutionary Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. Our pricing is designed to provide 
              maximum value with flexible options that scale with your growth.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Sparkles className="w-5 h-5"  />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Award className="w-5 h-5"  />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Rocket className="w-5 h-5"  />
                <span>Fast Implementation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-xl p-2 border border-gray-700">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {React.createElement(category.icon, { className: "w-4 h-4" })}
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
        </div>
        </div>

        {/* Services Pricing */}
        <div className="space-y-12">
          {filteredServices.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-10 h-10 text-white" })}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">{service.description}</p>
                <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <TrendingUpIcon className="w-4 h-4"  />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4"  />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4"  />
                    <span>Support: {service.supportLevel}</span>
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.pricingTiers.map((tier, tierIndex) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: tierIndex * 0.1 }}
                    className={`relative bg-gray-700 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                      tier.popular 
                        ? 'border-cyan-500 bg-gradient-to-br from-gray-700 to-gray-800' 
                        : 'border-gray-600 hover:border-cyan-500'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Tier Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-white mb-1">
                        ${tier.price.toLocaleString()}
                        <span className="text-lg text-gray-400 font-normal">/{tier.billingCycle}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{tier.bestFor}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"  />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Market Information */}
              <div className="mt-8 p-6 bg-gray-700 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-4">Market Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Market Price Range:</span>
                    <span className="text-white font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Implementation Time:</span>
                    <span className="text-blue-400 font-semibold">{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Support Level:</span>
                    <span className="text-purple-400 font-semibold capitalize">{service.supportLevel}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-6 text-center">
                <div className="text-sm text-gray-400 space-y-2">
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4"  />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4"  />
                      <span>{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4"  />
                      <span>{service.contactInfo.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-cyan-100 mb-6 max-w-2xl mx-auto">
              Our team of experts can create a tailored solution that perfectly fits your business needs. 
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Solution Inquiry"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Request Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Call for Consultation: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}

export default PricingPage;