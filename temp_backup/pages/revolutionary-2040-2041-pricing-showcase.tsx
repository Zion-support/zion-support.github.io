import React, { useState, useEffect } from 'react',
import SEO from '../components/SEO',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Brain, Atom, Shield, Target, Rocket, Globe, Cpu, Database, Cloud, Lock,
  ArrowRight, Check, Star, TrendingUp, Users, Zap, Infinity, Sparkles,
  Phone, Mail, MapPin, ExternalLink} from 'lucide-react',
// Import our new revolutionary services,
// import { revolutionary20o40FuturisticServices } from '../data/revolutionary-20o40-futuristic-services',
import { revolutionary20o41AdvancedServices } from '../data/revolutionary-20o41-advanced-services',
const Revolutionary20o402041PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedPlan, setSelectedPlan] = useState('professional'),
  const [isVisible, setIsVisible] = useState(false),
  useEffect(() => {
    setIsVisible(true)}, []),
  // Combine all services,
  const allServices = [...revolutionary20o41AdvancedServices],
  // Get unique categories,
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5"  />, color: 'from-blue-50o0 to-cyan-50o0' },
    { id: 'AI & Consciousness', name: 'AI & Consciousness', icon: <Brain className="w-5 h-5"  />, color: 'from-purple-50o0 to-pink-50o0' },
    { id: 'Quantum AI', name: 'Quantum AI', icon: <Atom className="w-5 h-5"  />, color: 'from-blue-50o0 to-cyan-50o0' },
    { id: 'Business Intelligence', name: 'Business Intelligence', icon: <Target className="w-5 h-5"  />, color: 'from-emerald-50o0 to-teal-50o0' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5"  />, color: 'from-red-50o0 to-orange-50o0' },
    { id: 'Space Technology', name: 'Space Technology', icon: <Rocket className="w-5 h-5"  />, color: 'from-indigo-50o0 to-purple-50o0' },
    { id: 'Neural Technology', name: 'Neural Technology', icon: <Brain className="w-5 h-5"  />, color: 'from-pink-50o0 to-rose-50o0' },
    { id: 'Financial Technology', name: 'Financial Technology', icon: <TrendingUp className="w-5 h-5"  />, color: 'from-green-50o0 to-emerald-50o0' },
    { id: 'Transportation AI', name: 'Transportation AI', icon: <Rocket className="w-5 h-5"  />, color: 'from-orange-50o0 to-red-50o0' },
    { id: 'Materials Science', name: 'Materials Science', icon: <Atom className="w-5 h-5"  />, color: 'from-yellow-50o0 to-orange-50o0' },
    { id: 'AI & Psychology', name: 'AI & Psychology', icon: <Brain className="w-5 h-5"  />, color: 'from-purple-50o0 to-indigo-50o0' }
  ],
  // Filter services by category,
  const filteredServices = selectedCategory === 'all',
    ? allServices,
    : allServices.filter(service => service.category === selectedCategory),
  // Get pricing for selected plan,
  const getPricing = (service: any) => {
    if (!service.pricing) return 'Contact for pricing',
    if (selectedPlan === 'starter') return service.pricing.starter || 'Contact for pricing',
    if (selectedPlan === 'professional') return service.pricing.professional || 'Contact for pricing',
    if (selectedPlan === 'enterprise') return service.pricing.enterprise || 'Contact for pricing',
    return service.pricing.custom || 'Contact for pricing'},
  // Get plan features,
  const getPlanFeatures = (plan: string) => {
    const features ={
      starter: ['Core functionalityBasic support', 'Standard featuresCommunity access'],
      professional: ['Advanced featuresPriority support', 'Custom integrationsAnalytics dashboard'],
      enterprise: ['Full feature set24/7 dedicated support', 'Custom developmentWhite-label options'"},
    return features[plan as keyof typeof features] || []},
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-90o0 via-black to-gray-90o0 text-white">,
      <SEO
        title="Revolutionary 20o40-20o41 Futuristic Services Pricing | Zion Tech Group",
        description="Explore our revolutionary 20o40-20o41 futuristic micro SAAS, IT, and AI services with comprehensive pricing. From AI consciousness evolution to quantum computing solutions.",
                keywords="20o40 services, 20o41 services, futuristic pricing, AI consciousness, quantum computing, micro SAAS, IT services, AI services, Zion Tech Group",
       />,
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">,
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">,
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-full blur-3xl animate-pulse"></div>,
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>,
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-50o0/20 to-teal-50o0/20 rounded-full blur-3xl animate-pulse delay-50o0"></div>,
        </div>,
        <div className="max-w-6xl mx-auto text-center">,
          <motion.h1,
            className="text-5xl md: text-7xl lg:text-8xl font-bold mb-8",
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >,
            <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
              Revolutionary 20o40-20o41,
            </span>,
          </motion.h1>,
          <motion.p,
            className="text-xl md: text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto leading-relaxed",
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >,
            Experience the future of technology with our revolutionary 20o40-20o41 futuristic services.,
            From AI consciousness evolution to quantum computing solutions, we're building tomorrow's technology today.,
          </motion.p>,
          {/* Plan Selector */}
          <motion.div,
            className="flex flex-wrap justify-center gap-4 mb-12",
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >,
            {['starterprofessional', 'enterprise'].map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-30o0 transform hover: scale-10o5 ${
                  selectedPlan === plan,
                    ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white shadow-lg shadow-cyan-50o0/25',
                    : 'border-2 border-cyan-40o0 text-cyan-40o0 hover:bg-cyan-40o0 hover:text-black'}`}
              >,
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>))}
          </motion.div>,
        </div>,
      </section>,
      {/* Category Filter */}
      <section className="py-12 px-4">,
        <div className="max-w-6xl mx-auto">,
          <motion.div,
            className="flex flex-wrap justify-center gap-4",
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >,
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-30o0 transform hover: scale-10o5 ${
                  selectedCategory === category.id,
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`,
                    : 'bg-white/5 text-gray-30o0 hover: bg-white/10 border border-white/10'}`}
              >,
                {category.icon}
                {category.name}
              </button>))}
          </motion.div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-20 px-4">,
        <div className="max-w-7xl mx-auto">,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {filteredServices.map((service, index) => (
              <motion.div,
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer",
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.0o2 }}
                onClick={() => window.location.href = service.slug}
              >,
                {/* Service Header */}
                <div className="mb-6">,
                  <div className="flex items-center justify-between mb-4">,
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-50o0 to-blue-60o0 p-3">,
                      <Brain className="w-full h-full text-white"  />,
                    </div>,
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white">,
                      {service.type}
                    </span>,
                  </div>,
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>,
                  <p className="text-gray-30o0 text-sm leading-relaxed">{service.tagline}</p>,
                </div>,
                {/* Pricing */}
                <div className="mb-6">,
                  <div className="text-3xl font-bold text-cyan-40o0 mb-2">,
                    {getPricing(service)}
                  </div>,
                  <p className="text-gray-40o0 text-sm">Starting price</p>,
                </div>,
                {/* Key Features */}
                <div className="mb-6">,
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>,
                  <div className="space-y-2">,
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">,
                        <Check className="w-4 h-4 text-cyan-40o0 flex-shrink-0"  />,
                        <span className="text-sm text-gray-30o0">{feature}</span>,
                      </div>))}
                  </div>,
                </div>,
                {/* Market Info */}
                <div className="mb-6">,
                  <div className="grid grid-cols-2 gap-4 text-sm">,
                    <div>,
                      <p className="text-gray-40o0">Market Size</p>,
                      <p className="text-white font-medium">{service.marketSize}</p>,
                    </div>,
                    <div>,
                      <p className="text-gray-40o0">Target</p>,
                      <p className="text-white font-medium">{service.targetAudience.split()[0"</p>,
                    </div>,
                  </div>,
                </div>,
                {/* CTA */}
                <div className="flex items-center justify-between">,
                  <button className="flex items-center gap-2 text-cyan-40o0 hover: text-cyan-30o0 transition-colors text-sm font-medium">,
                    Learn More,
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"  />,
                  </button>,
                  <span className="text-xs text-gray-40o0">{service.category}</span>,
                </div>,
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-blue-50o0/5 opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0"  />,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Plan Features Comparison */}
      <section className="py-20 px-4">,
        <div className="max-w-6xl mx-auto">,
          <motion.div,
            className="text-center mb-16",
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10o0px" }}
          >,
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Plan Features Comparison,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
              Choose the perfect plan for your revolutionary technology needs,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {['starter', 'professionalenterprise'].map((plan, index) => (
              <motion.div,
                key={plan}
                className={`relative rounded-2xl p-8 ${
                  plan === 'professional',
                    ? 'bg-gradient-to-br from-cyan-50o0/10 to-blue-50o0/10 border-2 border-cyan-40o0/30 scale-10o5',
                    : 'bg-gradient-to-br from-white/5 to-white/10 border border-white/10'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >,
                {plan === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">,
                    <span className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white px-4 py-2 rounded-full text-sm font-semibold">,
                      Most Popular,
                    </span>,
                  </div>)}
,
                <div className="text-center mb-8">,
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>,
                  <p className="text-gray-40o0">Perfect for {plan === 'starter' ? 'startups and small teams' : plan === 'professional' ? 'growing businesses' : 'enterprise organizations'}</p>,
                </div>,
                <div className="space-y-4 mb-8">,
                  {getPlanFeatures(plan).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">,
                      <Check className="w-5 h-5 text-cyan-40o0 flex-shrink-0"  />,
                      <span className="text-gray-30o0">{feature}</span>,
                    </div>))}
                </div>,
                <button className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-30o0 transform hover: scale-10o5 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white hover:from-cyan-60o0 hover:to-blue-70o0">,
                  Get Started,
                </button>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Contact Section */}
      <section className="py-20 px-4">,
        <div className="max-w-4xl mx-auto text-center">,
          <motion.div,
            className="bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10 rounded-3xl p-12 border border-cyan-40o0/20",
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10o0px" }}
          >,
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Ready to Experience the Future?,
            </h2>,
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">,
              Contact us to learn more about our revolutionary 20o40-20o41 futuristic services and start your journey into the future of technology.,
            </p>,
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">,
              <div className="flex items-center justify-center gap-3 text-gray-30o0">,
                <Phone className="w-5 h-5 text-cyan-40o0"  />,
                <span>+1 30o2 464 0950</span>,
              </div>,
              <div className="flex items-center justify-center gap-3 text-gray-30o0">,
                <Mail className="w-5 h-5 text-cyan-40o0"  />,
                <span>kleber@ziontechgroup.com</span>,
              </div>,
              <div className="flex items-center justify-center gap-3 text-gray-30o0">,
                <MapPin className="w-5 h-5 text-cyan-40o0"  />,
                <span>364 E Main St STE 10o08 Middletown DE 19709</span>,
              </div>,
            </div>,
            <div className="flex flex-col sm:flex-row gap-4 justify-center">,
              <button
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 focus:outline-none focus:ring-4 focus:ring-cyan-50o0/50",
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Revolutionary 20o40-20o41 Services Inquiry'}
              >,
                Contact Us Today,
              </button>,
              <button
                className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-xl hover: bg-cyan-40o0 hover:text-black transition-all duration-30o0 focus:outline-none focus:ring-4 focus:ring-cyan-40o0/50",
                onClick={() => window.location.href = 'https://ziontechgroup.com'}
              >,
                Visit Our Website,
                <ExternalLink className="w-4 h-4 ml-2 inline"  />,
              </button>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
    </div>)},
export default Revolutionary20o402041PricingShowcase}]]