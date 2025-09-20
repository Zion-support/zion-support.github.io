import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {;
  Brain,;
  Shield,;
  Zap,;
  Cloud,;
  Lock,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  TrendingUp,;
  Users,;
  Building2,;
  Leaf,;
  Car,;
  Heart,;
  Scale,;
  Eye,;
  Search,;
  Filter,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink;
} from "lucide-react"
import { INNOVATIVE_SERVICES } from "../data/servicesData"
export default function InnovativeServicesShowcase2026() {;
  const [selectedCategory, setSelectedCategory] = useState('All'),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [sortBy, setSortBy] = useState('innovation'),;

  const categories = ['AllAI & Automation', 'Quantum ComputingBlockchain', 'CybersecurityIoT', 'AI & ContentDevOps', 'FinanceSustainability']

  const sortedServices = useMemo(() => {;
    let filtered = INNOVATIVE_SERVICES;

    //[^;]*
    if (searchQuery) {;
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      ),;
    };

    //[^;]*
    if (selectedCategory !== 'All') {;
      filtered = filtered.filter(service => service.category === selectedCategory),;
    };

    //[^;]*
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return a.price - b.price
        case 'innovation':;
          return b.innovationLevel === 'Revolutionary' ? 1 : -1
        case 'roi':;
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
        default: return 0;
      };
    });
    return filtered,;
  }, [searchQuery, selectedCategory, sortBy]),;

  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Automation':;
        return <[^>]*/>
      case 'Quantum Computing':;
        return <Zap className="w-5 h-5" />,;
      case 'Blockchain':;
        return <Database className="w-5 h-5" />,;
      case 'Cybersecurity':;
        return <Shield className="w-5 h-5" />,;
      case 'IoT':;
        return <Globe className="w-5 h-5" />,;
      case 'AI & Content':;
        return <Cpu className="w-5 h-5" />,;
      case 'DevOps':;
        return <Database className="w-5 h-5" />,;
      case 'Finance':;
        return <TrendingUp className="w-5 h-5" />,;
      case 'Sustainability':;
        return <Leaf className="w-5 h-5" />,;
      default: return <[^>]*/>
    };
  };
  const getInnovationBadge = (level: string) => {;
    const colors = {;
      'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600Cutting-Edge': 'bg-gradient-to-r from-green-600 to-emerald-600'
    };
    return (
      <span className={`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
        {level};
      </[^>]*>
    ),;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Animated Background */};
      <div className="fixed inset-0 overflow-hidden pointer-events-none">;
        <div className="absolute -inset-10 opacity-20">;
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></[^>]*>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></[^>]*>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Header Section */};
      <motion.div
        className="[^"]*"
        initial={{ opacity: 0, y: -20 }};
        animate={{ opacity: 1, y: 0 }};
        transition={{ duration: 0.8 }};
      >;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.h1
            className="[^"]*"
            initial={{ opacity: 0, scale: 0.8 }};
            animate={{ opacity: 1, scale: 1 }};
            transition={{ duration: 1, delay: 0.2 }};
          >;
            Innovative Services 2026;
          </[^>]*>
          <motion.p
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            Discover cutting-edge micro SAAS solutions that transform industries and drive innovation.;
            From AI-powered platforms to quantum-safe cybersecurity, we deliver the future of technology.;
          </[^>]*>
          {/* Contact Information */};
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
          >;
            <div className="flex items-center gap-2 text-cyan-400">;
              <[^>]*/>
              <span>+1 302 464 0950</[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2 text-cyan-400">;
              <[^>]*/>
              <span>kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <div className="flex items-center gap-2 text-cyan-400">;
              <[^>]*/>
              <span>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Filters and Search */};
      <motion.div
        className="[^"]*"
        initial={{ opacity: 0, y: 20 }};
        animate={{ opacity: 1, y: 0 }};
        transition={{ duration: 0.8, delay: 0.8 }};
      >;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">;
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
              {/* Search */};
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
              {/* Category Filter */};
              <div className="flex items-center gap-2">;
                <[^>]*/>
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map(category => (;
                    <option key={category} value={category}>{category}</[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Sort Filter */};
              <div className="flex items-center gap-2">;
                <span className="text-slate-400 text-sm">Sort by:</[^>]*>
                <select;
                  value={sortBy};
                  onChange={(e) => setSortBy(e.target.value)};
                  className="[^"]*"
                >;
                  <option value="innovation">Innovation Level</[^>]*>
                  <option value="price">Price</[^>]*>
                  <option value="roi">ROI</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section;
        className="[^"]*"
      >;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Innovation Level Badge */};
                <div className="absolute top-4 right-4">;
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${;
                    service.innovationLevel === 'Cutting-edge'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : service.innovationLevel === 'Advanced'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  }`}>;
                    {service.innovationLevel};
                  </[^>]*>
                </[^>]*>

                {/* Title and Description */};
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">;
                  {service.title};
                </[^>]*>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>

                {/* Key Features */};
                <div className="mb-4">;
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key Features:</[^>]*>
                  <div className="flex flex-wrap gap-1">;
                    {service.features.slice(0, 3).map((feature, idx) => (;
                      <span;
                        key={idx};
                        className="[^"]*"
                      >;
                        {feature};
                      </[^>]*>
                    ))};
                    {service.features.length > 3 && (;&& (; (
                      <span className="text-xs text-slate-400 px-2 py-1">;
                        +{service.features.length - 3} more;
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>

                {/* Pricing and ROI */};
                <div className="flex items-center justify-between mb-4">;
                  <div className="text-2xl font-bold text-cyan-400">;
                    ${service.price.toLocaleString()};
                    <span className="text-sm text-slate-400 font-normal">/mo</[^>]*>
                  </[^>]*>
                  <div className="text-right">;
                    <div className="text-sm font-semibold text-green-400">;
                      ROI: {service.roi};
                    </[^>]*>
                    <div className="text-xs text-slate-400">;
                      {service.marketPrice};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Benefits */};
                <div className="mb-4">;
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key Benefits:</[^>]*>
                  <ul className="space-y-1">;
                    {service.benefits.slice(0, 2).map((benefit, idx) => (;
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">;
                        <span className="text-cyan-400 mt-1">•</[^>]*>
                        {benefit};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Tags */};
                <div className="flex flex-wrap gap-1 mb-4">;
                  {service.tags.slice(0, 4).map((tag, idx) => (;
                    <span;
                      key={idx};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>

                {/* Contact and CTA */};
                <div className="border-t border-slate-700 pt-4">;
                  <div className="flex items-center justify-between mb-3">;
                    <div className="text-xs text-slate-400">;
                      Delivery: {service.estimatedDelivery};
                    </[^>]*>
                    <div className="text-xs text-slate-400">;
                      Support: {service.supportLevel};
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="flex items-center justify-between">;
                    <div className="text-xs text-slate-400">;
                      <a ;
                        href={`tel:${service.contactInfo.phone}`};
                        className="[^"]*"
                      >;
                        {service.contactInfo.phone};
                      </[^>]*>
                    </[^>]*>
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 group">;
                      Get Started;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>
      {/* Call to Action */};
      <section;
        className="[^"]*"
      >;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Let's discuss how our innovative solutions can drive your success.;
              Get in touch with our experts today.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Email Us;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</[^>]*>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">;
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. ;
              Let's discuss how we can help you achieve your goals.;
            </[^>]*>
            ;
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold mb-2">Call Us</[^>]*>
                <p className="text-slate-400">;
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">;
                    +1 302 464 0950;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold mb-2">Email Us</[^>]*>
                <p className="text-slate-400">;
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">;
                    kleber@ziontechgroup.com
                  </[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="text-center">;
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold mb-2">Visit Us</[^>]*>
                <p className="text-slate-400">;
                  364 E Main St STE 1008<[^>]*/>
                  Middletown DE 19709;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="bg-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">;
              <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</[^>]*>
              <div className="grid md:grid-cols-2 gap-6 text-left">;
                <div className="space-y-3">;
                  <div className="flex items-start gap-3">;
                    <[^>]*/>
                    <div>;
                      <div className="font-semibold">Cutting-Edge Innovation</[^>]*>
                      <div className="text-sm text-slate-400">Access to the latest AI, quantum computing, and emerging technologies</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-start gap-3">;
                    <[^>]*/>
                    <div>;
                      <div className="font-semibold">Enterprise Security</[^>]*>
                      <div className="text-sm text-slate-400">SOC 2, ISO 27001, and industry-leading security standards</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="space-y-3">;
                  <div className="flex items-start gap-3">;
                    <[^>]*/>
                    <div>;
                      <div className="font-semibold">Proven ROI</[^>]*>
                      <div className="text-sm text-slate-400">Average 300-800% return on investment across our services</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-start gap-3">;
                    <[^>]*/>
                    <div>;
                      <div className="font-semibold">Global Support</[^>]*>
                      <div className="text-sm text-slate-400">24/7 support and implementation across multiple time zones</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  ),;
},;

export default InnovativeServicesShowcase2026;