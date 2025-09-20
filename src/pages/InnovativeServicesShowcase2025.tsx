import { useCallback  } from "react";
import React from "react"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
import {
  Search;
  Star,
  TrendingUp,
  Zap;
  Brain;
  Globe;
  Shield;
  Cpu;
  Network;
  Database;
  Cloud;
  Lock;
  Eye;
  Rocket;
  Award;
  CheckCircle;
  ExternalLink;
  Phone;
  Mail;
  MapPin;
  ArrowRight;
  Clock;
  Target;
}
}
 } from "lucide-react";
import { SEO   } from "@/components/SEO";
import { ADVANCED_MICRO_SAAS_SERVICES_2025   } from "../data/advancedMicroSaasServices2025";
import { EMERGING_TECH_SERVICES_2025   } from "../data/emergingTechServices2025";
export default function InnovativeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all')
  const allServices = [
  ...ADVANCED_MICRO_SAAS_SERVICES_2025;
    ...EMERGING_TECH_SERVICES_2025;
]
  const innovationLevels = [
  { val,
  u: e: 'all', lab,
  e: l: 'All Innovation Levels', col,
  o: r: 'bg-gray-500' },
  },
  { val,
  u: e: 'Advanced', lab,
  e: l: 'Advanced', col,
  o: r: 'bg-blue-500' },
  },
  { val,
  u: e: 'Cutting-edge', lab,
  e: l: 'Cutting-edge', col,
  o: r: 'bg-purple-500' },
  },
  { val,
  u: e: 'Revolutionary', lab,
  e: l: 'Revolutionary', col,
  o: r: 'bg-red-500' },
  },
  ]
  const filteredServices = allServices.filter(service () => {
  const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    return matchesSearch && matchesInnovation;
})

  const getInnovationColor = (lev,
  e: l: string) () => {
  switch (level) {
  case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'Cutting-edge': return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      case 'Revolutionary': return 'bg-red-500/20 text-red-300 border-red-500/30'
      defaul,
  t: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
},
  }
  const getInnovationIcon = (lev,
  e: l: string) () => {
  switch (level) {
  case 'Advanced': return <Zap className="w-5 h-5" />
      case 'Cutting-edge': return <Brain className="w-5 h-5" />
      case 'Revolutionary': return <Rocket className="w-5 h-5" />
      defaul,
  t: return <Star className="w-5 h-5" />
    },
  }
  const featuredServices = filteredServices.filter(service => 
    service.innovationLevel === 'Revolutionary' || service.innovationLevel === 'Cutting-edge'
)

  return (
    <>
      <SEO;
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our most innovative and revolutionary technology services. From quantum computing to AI-powered platforms, explore cutting-edge solutions that will transform your business."
      />
      
      {/* Hero Section */},
  }
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-24">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-medium">Innovation Leader 2025</span>
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Innovative Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
                Showcase 2025;
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of technology with our most revolutionary and cutting-edge services. 
              From quantum computing breakthroughs to AI-powered innovations, discover solutions that redefine what's possible.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Industry Innovation Award</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>500% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Eye className="w-5 h-5 text-blue-400" />
                <span>Patent-Pending Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-4">
            {/* Search */},
  }
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input;
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm},
  }
                onChange={(e) => setSearchTerm(e.target.value)},
  }
                className="className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-purple-500 focu,
  s:border-transparent";"
              />
            </div>

            {/* Innovation Level Filter */},
  }
            <div>
              <select;
                value={selectedInnovationLevel},
  }
                onChange={(e) => setSelectedInnovationLevel(e.target.value)},
  }
                className="className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-purple-500 focu,
  s:border-transparent";"
              >
                {innovationLevels.map(level => (
  <option key={level.value} value={level.value} className="bg-slate-800 text-white">
                    {level.label},
  }
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Revolutionary Services */},
  },
  {featuredServices.length > 0 && (
  <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Featured Revolutionary Services;
            </h2>
            <p className="text-gray-300">
              Our most innovative and game-changing solutions;
            </p>
          </div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {featuredServices.slice(0, 4).map((service, index) => (
  <motion.div;
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                animate={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.2 },
  }
                className="className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20,
  hove: r: border-purple-500/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getInnovationColor(service.innovationLevel)}`}>
                    {getInnovationIcon(service.innovationLevel)},
  }
                    <span className="text-sm font-medium">{service.innovationLevel}</span>
                  </div>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-white">
                      ${service.price.toLocaleString()},
  }
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-xs text-gray-400">Starting Price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold text-xl">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Innovations</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
  <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature},
  }
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium,
  hove: r: from-purple-700,
  hove: r:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    Explore Innovation;
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-3 border border-white/30 text-white rounded-lg hove,
  r:bg-white/10 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )},
  {/* All Services Grid */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Innovative Services;
          </h2>
          <p className="text-gray-300">
            Complete portfolio of cutting-edge technology solutions;
          </p>
        </div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
  <motion.div;
              key={service.id},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
              className="className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20,
  hove: r: border-purple-500/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
            >
              {/* Service Header */},
  }
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getInnovationColor(service.innovationLevel)}`}>
                    {getInnovationIcon(service.innovationLevel)},
  }
                    <span className="text-xs font-medium">{service.innovationLevel}</span>
                  </div>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              </div>

              {/* Price and ROI */},
  }
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-white">
                  ${service.price.toLocaleString()},
  }
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{service.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>

              {/* Features */},
  }
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
  <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature},
  }
                    </div>
                  ))},
  {service.features.length > 3 && (
  <div className="text-xs text-gray-400 mt-1">
                      +{service.features.length - 3} more features;
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */},
  }
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, idx) => (
  <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {tag},
  }
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specs */},
  },
  {service.technicalSpecs && (
  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-2">Technical Highlights</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    <div>
                      <span className="text-gray-400">Upti,
  m: e: </span> {service.technicalSpecs.uptime},
  }
                    </div>
                    <div>
                      <span className="text-gray-400">AP,
  I: s:</span> {service.technicalSpecs.apiEndpoints},
  }
                    </div>
                  </div>
                </div>
              )},
  {/* Market Info */},
  },
  {service.marketSize && (
  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-gray-300">
                    <span className="text-gray-400">Market,
  Siz: e:</span> {service.marketSize},
  }
                  </div>
                </div>
              )},
  {/* Contact and CTA */},
  }
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.estimatedDelivery},
  }
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {service.supportLevel},
  }
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium,
  hove: r: from-purple-700,
  hove: r:to-blue-700 transition-all duration-200">
                    Get Quote;
                  </button>
                  <button className="px-4 py-2 border border-white/30 text-white rounded-lg hove,
  r:bg-white/10 transition-all duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
  <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button;
              onClick={() () => {
                setSearchTerm('')
                setSelectedInnovationLevel('all')
              },
  }
              className="className="text-purple-400,
  hove: r:text-purple-300 underline";"
            >
              Clear all filters;
            </button>
          </div>
        )}
      </div>

      {/* Innovation Stats */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Innovation by the Numbers;
            </h2>
            <p className="text-xl text-gray-300">
              Our commitment to pushing technological boundaries;
            </p>
          </div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Patent-Pending Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */},
  }
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Lead the Innovation?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the companies that are already transforming their industries with our revolutionary technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center">
            <a;
              href="htt,
  p: s://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-purple-700 hove,
  r:to-blue-700 transition-all duration-200";"
            >
              Visit Our Website;
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}