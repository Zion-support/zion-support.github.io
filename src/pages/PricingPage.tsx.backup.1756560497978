import React, { useState } from 'react.ts';
import { motion            } from 'framer-motion.ts';
import { CheckCircle,
  Star,
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap,
  Brain,
  Atom,
  Eye,
  Cloud,
  Code,
  TrendingUp,
  Briefcase,
  Heart,
  Phone,
  Mail,
  Globe,
  MapPin,
  Award,
  TrendingDown,
  Sparkles,
  Crown,
  Gem,
  Diamond,
  Target,
  Rocket,
  Cpu,
  Lock,
  Database,
  Server,
  Network,
  Activity,
  BarChart3,
  FileText,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver
           } from 'lucide-react.ts';
import { COMPREHENSIVE_PRICING_GUIDE_2025            } from '../data/comprehensivePricingGuide2025';

export function PricingPage(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-600' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-cyan-500 to-blue-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-green-500 to-teal-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Code, color: 'from-yellow-500 to-orange-600' },
    { id: 'Marketing & Sales', name: 'Marketing & Sales', icon: TrendingUp, color: 'from-indigo-500 to-purple-600' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-indigo-600' },
    { id: 'Customer Service', name: 'Customer Service', icon: Users, color: 'from-green-500 to-emerald-600' },
    { id: 'Compliance & Governance', name: 'Compliance & Governance', icon: Lock, color: 'from-gray-500 to-slate-600' },
    { id: 'Business Operations', name: 'Business Operations', icon: Briefcase, color: 'from-amber-500 to-yellow-600' },
    { id: 'Financial Services', name: 'Financial Services', icon: DollarSign, color: 'from-emerald-500 to-green-600' }
  ];

  const filteredServices = COMPREHENSIVE_PRICING_GUIDE_2025.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanystring)            => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: anyanyanyanyanyanyanyanyanyanyanystring)            => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Comprehensive Pricing Guide</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Transparent, competitive pricing for all our revolutionary AI-powered services. 
              Choose the plan that fits your business needs and budget.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-6 py-3">
                <span className="text-green-400 font-semibold">Transparent Pricing</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg px-6 py-3">
                <span className="text-blue-400 font-semibold">No Hidden Fees</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-6 py-3">
                <span className="text-purple-400 font-semibold">Flexible Plans</span>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg px-6 py-3">
                <span className="text-yellow-400 font-semibold">Volume Discounts</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Pricing Grid */}
        <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index)            => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                          {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/80">Starting from</div>
                    <div className="text-2xl font-bold text-white">
                      ${Math.min(...service.pricingTiers.map(tier => tier.price)).toLocaleString()}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Pricing Tiers */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {service.pricingTiers.map((tier, tierIndex) => (
                    <div
                      key={tier.name}
                      className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        selectedService === `${service.id}-${tier.name}`
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-gray-600 hover:border-cyan-500/50'
                      }`}
                      onClick={() => setSelectedService(`${service.id}-${tier.name}`)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">{tier.name}</h4>
                        {tier.popular && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">
                        ${tier.price.toLocaleString()}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{tier.bestFor}</p>
                      <div className="space-y-2">
                        {tier.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {tier.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{tier.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Market Comparison */}
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Comparison</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Competitors:</span>
                      <span className="text-gray-300">{service.marketComparison.competitors.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-gray-300">{service.marketComparison.averageMarketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Our Advantage:</span>
                      <span className="text-green-400">{service.marketComparison.ourAdvantage}</span>
                    </div>
                  </div>
                </div>

                {/* ROI and Implementation */}
                <div className="bg-gray-700 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400 mb-1">ROI</div>
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Implementation</div>
                      <div className="text-cyan-400 font-semibold">{service.implementationTime}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Pricing Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Special Pricing Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get more value with our bundled packages designed for different business needs and sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {SPECIAL_PRICING_PACKAGES.map((package_, index)            => (
              <motion.div
                key={package_.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
              >
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                    BEST VALUE
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{package_.name}</h3>
                  <p className="text-gray-400 text-sm">{package_.description}</p>
                </div>

                {package_.pricing === "Custom pricing based on requirements" ? (
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">Custom Pricing</div>
                    <div className="text-sm text-gray-400">Based on your specific requirements</div>
                  </div>
                ) : (
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2">${package_.discountedPrice?.toLocaleString()}</div>
                    <div className="text-sm text-gray-400 line-through">${package_.originalPrice?.toLocaleString()}</div>
                    <div className="text-sm text-green-400 font-semibold">{package_.savings}</div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">What's Included:</h4>
                  <div className="space-y-2">
                    {package_.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:${package_.contactInfo.email}?subject=Inquiry about ${package_.name} Package`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-400 text-sm">Cutting-edge AI and quantum technologies that give you a competitive edge</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm">Bank-level security and compliance for your most sensitive data</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-400 text-sm">24/7 support from certified professionals who understand your business</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-400 text-sm">Measurable results and rapid return on investment for all our services</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Contact our team of experts to discuss your needs and discover how our revolutionary AI-powered 
              services can drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400">{CONTACT_INFORMATION.phone}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-purple-400">{CONTACT_INFORMATION.email}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <a href={CONTACT_INFORMATION.website} className="text-green-400 hover:text-green-300 transition-colors">
                {CONTACT_INFORMATION.website.replace('https://', '')}
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-yellow-400">{CONTACT_INFORMATION.supportHours}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{CONTACT_INFORMATION.address}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${CONTACT_INFORMATION.email}?subject=Pricing Inquiry`}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Send Email
              </a>
              <a
                href={`tel:${CONTACT_INFORMATION.phone}`}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                Call Now
              </a>
              <a
                href={CONTACT_INFORMATION.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}