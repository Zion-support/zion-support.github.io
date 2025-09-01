import React, { useState } from 'react';'export default ServicesShowcasePage;'export function ServicesShowcasePage () {
import {;
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '../data / comprehensivePricingGuide2025';'import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data / innovativeMicroSaasServices2025';'import { motion } from 'framer - motion';''  Brain, Shield,
  Cpu, Rocket,
  Zap, ArrowRight,
  CheckCircle, Star,
  Users, BarChart3,
  Heart, Eye,
  Atom, Activity,
  Code, Database,
  Server, Network,
  Lock, Cloud,
  Target, TrendingUp,
  Briefcase, Globe,
  Phone, Mail,
  MapPin, Search,
  Filter, DollarSign,
  Clock, Award,
  TrendingDown, Sparkles,
  Lightbulb, Zap as ZapIcon,
  Shield as ShieldIcon, Cpu as CpuIcon,
  Rocket as RocketIcon, Brain as BrainIcon,
  Atom as AtomIcon, Eye as EyeIcon,
  Code as CodeIcon, BarChart3 as BarChartIcon,
  Users as UsersIcon, Heart as HeartIcon,
  Globe as GlobeIcon, TrendingUp as TrendingUpIcon,
} from 'lucide - react';''  const [searchTerm, setSearchTerm] = useState ('') ;'  const [selectedCategory, setSelectedCategory] = useState ('all') ;'  const [priceRange, setPriceRange] = useState ('all') ;'  const [sortBy, setSortBy] = useState ('innovation') ;''  const categories = [;
    {
      id: 'all', name: 'All Categories','      icon: Globe, color: 'from - blue - 500 to - cyan - 600','    }, {'      id: 'AI & Analytics','      name: 'AI & Analytics', icon: Brain,'      color: 'from - purple - 500 to - pink - 600', },'    {'      id: 'Quantum Computing', name: 'Quantum Computing','      icon: Atom, color: 'from - cyan - 500 to - blue - 600','    }, {'      id: 'Cybersecurity','      name: 'Cybersecurity', icon: Shield,'      color: 'from - red - 500 to - orange - 600', },'    {'      id: 'Blockchain & Web3', name: 'Blockchain & Web3','      icon: Code, color: 'from - green - 500 to - emerald - 600','    }, {'      id: 'Marketing & Sales','      name: 'Marketing & Sales', icon: TrendingUp,'      color: 'from - yellow - 500 to - orange - 600', },'    {'      id: 'IoT & Edge Computing', name: 'IoT & Edge Computing','      icon: Cpu, color: 'from - indigo - 500 to - purple - 600','    }, {'      id: 'Cloud & DevOps','      name: 'Cloud & DevOps', icon: Cloud,'      color: 'from - teal - 500 to - green - 600', },'    {'      id: 'Customer Service', name: 'Customer Service','      icon: Users, color: 'from - pink - 500 to - red - 600','    }, {'      id: 'Compliance & Governance','      name: 'Compliance & Governance', icon: Lock,'      color: 'from - gray - 500 to - slate - 600', },'  ];'
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' }, { id: 'low', name: 'Under $1, 000', range: '< $1, 000' },'    { id: 'medium', name: '$1,000 - $3, 000', range: '$1, 000 - $3,000' }, { id: 'high', name: 'Over $3, 000', range: '> $3, 000' },'  ];'
  const sortOptions = [;
    { id: 'innovation', name: 'Innovation Level', icon: Sparkles }, { id: 'price', name: 'Price', icon: DollarSign },'    { id: 'roi', name: 'ROI', icon: TrendingUp }, { id: 'delivery', name: 'Delivery Time', icon: Clock },'  ];'
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter (service => {;
      const matchesSearch = service.title.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
        service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ||
        service.category.toLowerCase () .includes (searchTerm.toLowerCase () ) ;

      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;''      let matchesPrice = true;
      if (priceRange === 'low') {'        matchesPrice = service.price < 1000;'      } else if (priceRange === 'medium') {'        matchesPrice = service.price >= 1000 && service.price <= 3000;'      } else if (priceRange === 'high') {'        matchesPrice = service.price > 3000;'      }

      return matchesSearch && matchesCategory && matchesPrice;
    }) ;

  const sortedServices = [...filteredServices].sort ( (a, b) => {;
    switch (sortBy) {
      case 'innovation': const innovationOrder = {'          Revolutionary: 3, 'Cutting - edge': 2,'          Advanced: 1, };'        return ( (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] ||
            0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] ||
            0) ) ;
      case 'price': return a.price - b.price;'      case 'roi': const aRoi = parseInt (a.roi.split ('-') [0]) ;'        const bRoi = parseInt (b.roi.split ('-') [0]) ;'        return bRoi - aRoi;'      case 'delivery': const aDelivery = parseInt (a.estimatedDelivery.split ('-') [0]) ;'        const bDelivery = parseInt (b.estimatedDelivery.split ('-') [0]) ;'        return aDelivery - bDelivery;'      default: return 0;
    }
  }) ;

  const getCategoryIcon = (category: string) => {;
    const categoryData = categories.find (cat => cat.id === category) ;
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {;
    const categoryData = categories.find (cat => cat.id === category) ;
    return categoryData ? categoryData.color : 'from - gray - 500 to - slate - 600';'  };'
  const getPriceRange = (price: number) => {;
    if (price < 1000) return 'low';'    if (price <= 3000) return 'medium';'    return 'high';'  };'
  const getPriceColor = (price: number) => {;
    const range = getPriceRange (price) ;
    switch (range) {
      case 'low': return 'text - green - 400';'      case 'medium': return 'text - yellow - 400';'      case 'high': return 'text - red - 400';'      default: return 'text - gray - 400';'    }'  };

  const getInnovationColor = (level: string) => {;
    switch (level) {
      case 'Revolutionary': return 'text - purple - 400';'      case 'Cutting - edge': return 'text - blue - 400';'      case 'Advanced': return 'text - green - 400';'      default: return 'text - gray - 400';'    }'  };

  return (<div className="min - h-screen py - 8">"      <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8">"        {/* Header */}"        <div className="text - center mb - 12">"          <motion.div"            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text - 5xl font - bold text - white mb - 4">"              Revolutionary AI & Technology Services"            </h1>
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed">"              Discover our cutting - edge micro SAAS services that are"              transforming industries worldwide. From AI - powered solutions to
              quantum computing platforms, we deliver innovative technology that
              drives business growth and competitive advantage.
            </p>
            <div className="mt - 8 flex justify - center space - x-4">"              <div className="flex items - center space - x-2 text - cyan - 400">"                <Sparkles className="w - 5 h - 5" />"                <span > Revolutionary Technology</span>"              </div>
              <div className="flex items - center space - x-2 text - green - 400">"                <Award className="w - 5 h - 5" />"                <span > Proven ROI</span>"              </div>
              <div className="flex items - center space - x-2 text - purple - 400">"                <ZapIcon className="w - 5 h - 5" />"                <span > Fast Implementation</span>"              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="bg - gray - 800 rounded - xl p - 6 mb - 8 border border - gray - 700">"          <div className="grid grid - cols - 1 md: grid - cols - 4 gap - 4">"            {/* Search */}"            <div className="relative">"              <Search className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />"              <input"                type="text""                placeholder="Search services...""                value={searchTerm}"                onChange={e => setSearchTerm (e.target.value) }
                className="w - full pl - 10 pr - 4 py - 2 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - cyan - 500""              />"            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory (e.target.value) }
              className="px - 4 py - 2 bg - gray - 700 border border - gray - 600 rounded - lg text - white focus: outline - none focus:ring - 2 focus:ring - cyan - 500""            >"              {categories.map (category => (<option key={category.id} value={category.id}>
                  {category.name}
                </option>) ) }
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={e => setPriceRange (e.target.value) }
              className="px - 4 py - 2 bg - gray - 700 border border - gray - 600 rounded - lg text - white focus: outline - none focus:ring - 2 focus:ring - cyan - 500""            >"              {priceRanges.map (range => (<option key={range.id} value={range.id}>
                  {range.name}
                </option>) ) }
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={e => setSortBy (e.target.value) }
              className="px - 4 py - 2 bg - gray - 700 border border - gray - 600 rounded - lg text - white focus: outline - none focus:ring - 2 focus:ring - cyan - 500""            >"              {sortOptions.map (option => (<option key={option.id} value={option.id}>
                  {option.name}
                </option>) ) }
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid - cols - 1 lg: grid - cols - 2 xl:grid - cols - 3 gap - 8">"          {sortedServices.map ( (service, index) => (<motion.div"              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg - gray - 800 rounded - xl p - 6 border border - gray - 700 hover:border - cyan - 500 transition - all duration - 300 hover:shadow - 2xl hover:shadow - cyan - 500 / 20""            >"              {/* Service Header */}
              <div className="flex items - start justify - between mb - 4">"                <div"                  className={`w - 16 h - 16 bg - gradient - to - r ${getCategoryColor (service.category) } rounded - xl flex items - center justify - center`}`                >
                  {React.createElement (getCategoryIcon (service.category) , {;
                    className: 'w - 8 h - 8 text - white','                  }) }'                </div>
                <div className="text - right">"                  <span"                    className={`inline - flex items - center px - 2.5 py - 0.5 rounded - full text - xs font - medium ${getInnovationColor (service.innovationLevel) } bg - gray - 700`}`                  >
                    {service.innovationLevel}
                  </span>
                </div>
              </div>

              {/* Service Title & Description */}
              <h3 className="text - xl font - bold text - white mb - 2">"                {service.title}"              </h3>
              <p className="text - gray - 400 text - sm mb - 4 line - clamp - 3">"                {service.description}"              </p>

              {/* Category & Price */}
              <div className="flex items - center justify - between mb - 4">"                <span className="text - sm text - gray - 500">"                  {service.category}"                </span>
                <span
                  className={`text - lg font - bold ${getPriceColor (service.price) }`}`                >
                  ${service.price.toLocaleString () }/month
                </span>
              </div>

              {/* Key Features */}
              <div className="mb - 4">"                <h4 className="text - sm font - semibold text - gray - 300 mb - 2">"                  Key Features: </h4>"                <div className="space - y-1">"                  {service.features.slice (0, 3) .map ( (feature, idx) => (<div"                      key={idx}
                      className="flex items - center space - x-2 text - sm text - gray - 400""                    >"                      <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />"                      <span className="line - clamp - 1">{feature}</span>"                    </div>) ) }"                  {service.features.length > 3 && (<div className="text - sm text - cyan - 400">"                      +{service.features.length - 3} more features"                    </div>) }
                </div>
              </div>

              {/* Benefits & ROI */}
              <div className="mb - 4">"                <div className="flex items - center justify - between text - sm">"                  <span className="text - gray - 500">ROI: </span>"                  <span className="text - green - 400 font - semibold">"                    {service.roi}"                  </span>
                </div>
                <div className="flex items - center justify - between text - sm">"                  <span className="text - gray - 500">Delivery:</span>"                  <span className="text - blue - 400">"                    {service.estimatedDelivery}"                  </span>
                </div>
              </div>

              {/* Market Info */}
              <div className="mb - 4 p - 3 bg - gray - 700 rounded - lg">"                <div className="text - xs text - gray - 400 space - y-1">"                  <div className="flex justify - between">"                    <span > Market Price:</span>"                    <span className="text - white">{service.marketPrice}</span>"                  </div>"                  <div className="flex justify - between">"                    <span > Market Size:</span>"                    <span className="text - white">{service.marketSize}</span>"                  </div>"                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space - x-2">"                <a"                  href={service.demoUrl}
                  target="_blank""                  rel="noopener noreferrer""                  className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - medium hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 text - center""                >"                  View Demo
                </a>
                <a
                  href={`mailto:${service.contactInfo.email}?subject = Inquiry about ${service.title}`}`                  className="flex - 1 bg - gray - 700 text - white px - 4 py - 2 rounded - lg text - sm font - medium hover:bg - gray - 600 transition - all duration - 300 text - center""                >"                  Contact Us
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt - 4 pt - 4 border - t border - gray - 700">"                <div className="text - xs text - gray - 500 space - y-1">"                  <div className="flex items - center space - x-2">"                    <Phone className="w - 3 h - 3" />"                    <span>{service.contactInfo.phone}</span>"                  </div>
                  <div className="flex items - center space - x-2">"                    <Mail className="w - 3 h - 3" />"                    <span>{service.contactInfo.email}</span>"                  </div>
                  <div className="flex items - center space - x-2">"                    <Globe className="w - 3 h - 3" />"                    <span>{service.contactInfo.website}</span>"                  </div>
                </div>
              </div>
            </motion.div>) ) }
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt - 16 text - center""        >"          <div className="bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - 2xl p - 8">"            <h2 className="text - 3xl font - bold text - white mb - 4">"              Ready to Transform Your Business?"            </h2>
            <p className="text - xl text - cyan - 100 mb - 6 max - w-2xl mx - auto">"              Join thousands of businesses already leveraging our cutting - edge"              AI and technology services. Get started today and experience the
              future of business innovation.
            </p>
            <div className="flex flex - col sm:flex - row justify - center space - y-4 sm:space - y-0 sm:space - x-4">"              <a"                href="mailto:kleber@ziontechgroup.com?subject = Business Transformation Inquiry""                className="bg - white text - cyan - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - gray - 100 transition - all duration - 300""              >"                Get Started Today
              </a>
              <a
                href="tel:+13024640950""                className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - cyan - 600 transition - all duration - 300""              >"                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>) ;
}

