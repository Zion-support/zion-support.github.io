import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ULTIMATE_INNOVATIVE_SERVICES_2027 } from '@/data/ultimateInnovativeServices2027';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Cpu, 
  Leaf, 
  Satellite,
  DollarSign,
  Users,
  Clock,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function UltimatePricing2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="h-5 w-5" /> },
    { id: 'AI & Automation', name: 'AI & Automation', icon: <Brain className="h-5 w-5" /> },
    { id: 'Emerging Tech', name: 'Emerging Tech', icon: <Rocket className="h-5 w-5" /> },
    { id: 'IT Services', name: 'IT Services', icon: <Cpu className="h-5 w-5" /> },
    { id: 'Security & Compliance', name: 'Security & Compliance', icon: <Shield className="h-5 w-5" /> },
    { id: 'Green Tech', name: 'Green Tech', icon: <Leaf className="h-5 w-5" /> },
    { id: 'Space Technology', name: 'Space Technology', icon: <Satellite className="h-5 w-5" /> }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2027.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getYearlyDiscount = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for yearly
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Ultimate Pricing 2027 - Zion Tech Group"
        description="Comprehensive pricing for our innovative AI, IT, and emerging technology services. Find the perfect plan for your business needs in 2027."
        keywords="pricing, AI services, IT solutions, emerging technology, micro SAAS, 2027, cost-effective solutions"
        canonical="https://ziontechgroup.com/ultimate-pricing-2027"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent mb-6">
              Ultimate Pricing 2027
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Transparent, competitive pricing for cutting-edge technology solutions. 
              Choose the perfect plan to accelerate your business transformation.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-purple/30'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                <span className="ml-2 text-zion-cyan text-sm font-medium">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-zion-blue-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-zion-slate-dark border-zion-cyan shadow-lg shadow-zion-cyan/25'
                    : 'bg-transparent text-white border-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-zion-blue/10 via-zion-purple/10 to-zion-cyan/10 backdrop-blur-sm border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {service.status}
                    </span>
                  </div>

                  {/* AI Score */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-1 bg-zion-cyan/20 backdrop-blur-sm rounded-full px-3 py-1 border border-zion-cyan/30">
                      <Brain className="h-4 w-4 text-zion-cyan" />
                      <span className="text-zion-cyan text-sm font-bold">{service.aiScore}</span>
                    </div>
                  </div>

                  {/* Service Header */}
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.category === 'AI & Automation' && <Brain className="h-10 w-10 text-white" />}
                      {service.category === 'Emerging Tech' && <Rocket className="h-10 w-10 text-white" />}
                      {service.category === 'IT Services' && <Cpu className="h-10 w-10 text-white" />}
                      {service.category === 'Security & Compliance' && <Shield className="h-10 w-10 text-white" />}
                      {service.category === 'Green Tech' && <Leaf className="h-10 w-10 text-white" />}
                      {service.category === 'Space Technology' && <Satellite className="h-10 w-10 text-white" />}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="space-y-6 mb-8">
                    {/* Starter Plan */}
                    <div className="bg-zion-blue/20 backdrop-blur-sm rounded-xl p-4 border border-zion-blue/30">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold">Starter</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">
                            ${billingCycle === 'monthly' ? service.price.starter : getYearlyDiscount(service.price.starter)}
                          </div>
                          <div className="text-zion-slate-light text-sm">
                            per {billingCycle === 'monthly' ? 'month' : 'year'}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                            <Check className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-zion-purple/20 backdrop-blur-sm rounded-xl p-4 border border-zion-purple/30 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold">Professional</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-purple-light">
                            ${billingCycle === 'monthly' ? service.price.professional : getYearlyDiscount(service.price.professional)}
                          </div>
                          <div className="text-zion-slate-light text-sm">
                            per {billingCycle === 'monthly' ? 'month' : 'year'}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {service.features.slice(0, 5).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                            <Check className="h-4 w-4 text-zion-purple-light mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-xl p-4 border border-zion-cyan/30">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold">Enterprise</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">
                            ${billingCycle === 'monthly' ? service.price.enterprise : getYearlyDiscount(service.price.enterprise)}
                          </div>
                          <div className="text-zion-slate-light text-sm">
                            per {billingCycle === 'monthly' ? 'month' : 'year'}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {service.features.slice(0, 7).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                            <Check className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-zion-cyan" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Delivery */}
                  <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                    <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-3 border border-zion-purple/30">
                      <div className="text-zion-cyan font-bold text-lg">{service.roi}</div>
                      <div className="text-zion-slate-light text-xs">ROI</div>
                    </div>
                    <div className="bg-zion-blue/20 backdrop-blur-sm rounded-lg p-3 border border-zion-blue/30">
                      <div className="text-zion-cyan font-bold text-lg">{service.estimatedDelivery}</div>
                      <div className="text-zion-slate-light text-xs">Delivery</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={service.website}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 px-6 rounded-lg font-bold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.title}`}
                      className="w-full border-2 border-zion-cyan/30 text-zion-cyan py-3 px-6 rounded-lg font-bold hover:bg-zion-cyan/10 transition-all duration-300 text-center"
                    >
                      Contact Sales
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-zion-purple/20 text-center">
                    <p className="text-zion-slate-light text-xs mb-3">Need custom pricing?</p>
                    <div className="flex flex-col gap-2 text-xs">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 flex items-center justify-center gap-1"
                      >
                        <Phone className="h-3 w-3" />
                        {service.contactInfo.phone}
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 flex items-center justify-center gap-1"
                      >
                        <Mail className="h-3 w-3" />
                        {service.contactInfo.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Solutions & Custom Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Need a custom solution or enterprise pricing? Our team will work with you to create the perfect package for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-zion-blue/20 backdrop-blur-sm rounded-xl p-6 border border-zion-blue/30">
                <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                <p className="text-zion-slate-light">Tailored services designed specifically for your business requirements</p>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30">
                <Shield className="h-12 w-12 text-zion-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Advanced security and compliance features for enterprise needs</p>
              </div>
              <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30">
                <Award className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Priority Support</h3>
                <p className="text-zion-slate-light">24/7 dedicated support and priority response times</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                Request Enterprise Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our team to discuss your needs and find the perfect solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="h-12 w-12 text-zion-purple-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-purple-light hover:text-zion-purple transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="bg-zion-blue/20 backdrop-blur-sm rounded-xl p-8 border border-zion-blue/30">
              <h3 className="text-2xl font-bold text-white mb-4">Special Launch Offer</h3>
              <p className="text-zion-slate-light mb-6">
                Get 30% off your first 3 months when you sign up for any annual plan. 
                Limited time offer for early adopters.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Launch Offer - 30% Off First 3 Months"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-bold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105"
              >
                Claim Your Discount
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}