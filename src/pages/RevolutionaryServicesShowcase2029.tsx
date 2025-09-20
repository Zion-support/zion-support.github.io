import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Star, Users, TrendingUp, Zap, Shield, Brain, Rocket, Globe, Cpu, Database, Cloud, Lock, Target, BarChart3, Code, Palette, Truck, Car, Plane, Dna, Atom, Link, Box } from "lucide-react"
import { SEO } from "@/components/SEO"
import { REVOLUTIONARY_2029_CUTTING_EDGE_SERVICES } from "../../data/revolutionary-2029-cutting-edge-services"
import { REVOLUTIONARY_2029_EMERGING_TECH_SERVICES } from "../../data/revolutionary-2029-emerging-tech-services"
export default function RevolutionaryServicesShowcase2029() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [sortBy, setSortBy] = useState('popularity'),;

  const allServices = [...REVOLUTIONARY_2029_CUTTING_EDGE_SERVICES, ...REVOLUTIONARY_2029_EMERGING_TECH_SERVICES]

  const categories = [;
    'allAI & Analytics',;
    'AI & AutomationAI & Cybersecurity',;
    'AI & MarketingAI & Healthcare',;
    'AI & DevelopmentAI & Supply Chain',;
    'AI & FinTechAI & Legal Tech',;
    'AI & Customer SuccessSpace Technology & AI',;
    'Quantum Technology & SecurityNeurotechnology & AI',;
    'AI & Autonomous SystemsAI & Biotechnology',;
    'Quantum Computing & AIAI & Autonomous Vehicles',;
    'AI & Digital TwinsAI & Blockchain',;
    'AI & Metaverse'
  ],;

  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory,;&& matchesCategory,; matchesCategory,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),;
      case 'price-high':;
        return parseFloat(b.price.replace('$', '').replace(, '')) - parseFloat(a.price.replace('$', '').replace(, ''));
      case 'rating':;
        return b.rating - a.rating
      case 'customers':;
        return b.customers - a.customers
      default: return b.popular ? 1 : -1
    };
  });
  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React.ReactNode } = {;
      'AI & Analytics': <[^>]*/>
      'AI & Automation': <Zap className="w-5 h-5" />,;
      'AI & Cybersecurity': <Shield className="w-5 h-5" />,;
      'AI & Marketing': <Target className="w-5 h-5" />,;
      'AI & Healthcare': <Brain className="w-5 h-5" />,;
      'AI & Development': <Code className="w-5 h-5" />,;
      'AI & Supply Chain': <Truck className="w-5 h-5" />,;
      'AI & FinTech': <TrendingUp className="w-5 h-5" />,;
      'AI & Legal Tech': <Shield className="w-5 h-5" />,;
      'AI & Customer Success': <Users className="w-5 h-5" />,;
      'Space Technology & AI': <Rocket className="w-5 h-5" />,;
      'Quantum Technology & Security': <Atom className="w-5 h-5" />,;
      'Neurotechnology & AI': <Brain className="w-5 h-5" />,;
      'AI & Autonomous Systems': <Plane className="w-5 h-5" />,;
      'AI & Biotechnology': <Dna className="w-5 h-5" />,;
      'Quantum Computing & AI': <Atom className="w-5 h-5" />,;
      'AI & Autonomous Vehicles': <Car className="w-5 h-5" />,;
      'AI & Digital Twins': <Box className="w-5 h-5" />,;
      'AI & Blockchain': <Link className="w-5 h-5" />,;
      'AI & Metaverse': <[^>]*/>
    },;
    return iconMap[category] || <Cpu className="w-5 h-5" />,
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Revolutionary 2029 Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge AI, quantum computing, space technology, and emerging tech services that are revolutionizing industries worldwide."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              Revolutionary;
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 2029</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Cutting-edge AI, quantum computing, space technology, and emerging tech services that are reshaping the future of business and technology.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Explore Services;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Stats Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="text-4xl font-bold text-blue-400 mb-2">{allServices.length}</[^>]*>
            <div className="text-gray-400">Revolutionary Services</[^>]*>
          </[^>]*>
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.1 }};
            className="[^"]*"
          >;
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</[^>]*>
            <div className="text-gray-400">Technology Categories</[^>]*>
          </[^>]*>
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.2 }};
            className="[^"]*"
          >;
            <div className="text-4xl font-bold text-green-400 mb-2">4.8+</[^>]*>
            <div className="text-gray-400">Average Rating</[^>]*>
          </[^>]*>
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.3 }};
            className="[^"]*"
          >;
            <div className="text-4xl font-bold text-orange-400 mb-2">1000+</[^>]*>
            <div className="text-gray-400">Happy Customers</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">;
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Search */};
            <div className="flex-1">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
            </[^>]*>

            {/* Category Filter */};
            <div className="lg:w-64">;
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-800 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Sort */};
            <div className="lg:w-48">;
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="popularity" className="bg-slate-800 text-white">Most Popular</[^>]*>
                <option value="rating" className="bg-slate-800 text-white">Highest Rated</[^>]*>
                <option value="customers" className="bg-slate-800 text-white">Most Customers</[^>]*>
                <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</[^>]*>
                <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {sortedServices.map((service, index) => (;
            <motion.div
              key={service.id};
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
              className="[^"]*"
            >;
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">;
                {/* Header */};
                <div className="flex items-start justify-between mb-4">;
                  <div className="text-3xl">{service.icon}</[^>]*>
                  {service.popular && (;&& (; (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">;
                      Popular;
                    </[^>]*>
                  )};
                </[^>]*>

                {/* Title and Category */};
                <div className="mb-4">;
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">;
                    {service.name};
                  </[^>]*>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">;
                    {getCategoryIcon(service.category)};
                    <span>{service.category}</[^>]*>
                  </[^>]*>
                  <p className="text-gray-300 text-sm">{service.tagline}</[^>]*>
                </[^>]*>

                {/* Price */};
                <div className="mb-4">;
                  <div className="text-2xl font-bold text-white">;
                    {service.price};
                    <span className="text-gray-400 text-lg">{service.period}</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Description */};
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>

                {/* Features */};
                <div className="mb-4">;
                  <h4 className="text-white font-semibold mb-2">Key Features:</[^>]*>
                  <div className="space-y-1">;
                    {service.features.slice(0, 3).map((feature, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">;
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></[^>]*>
                        {feature};
                      </[^>]*>
                    ))};
                    {service.features.length > 3 && (;&& (; (
                      <div className="text-gray-500 text-sm">+{service.features.length - 3} more features</[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>

                {/* Stats */};
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span>{service.rating}</[^>]*>
                    <span>({service.reviews})</[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span>{service.customers} customers</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Benefits */};
                <div className="mb-6">;
                  <h4 className="text-white font-semibold mb-2">Key Benefits:</[^>]*>
                  <div className="space-y-1">;
                    {service.benefits.slice(0, 2).map((benefit, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">;
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></[^>]*>
                        {benefit};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Market Info */};
                <div className="mb-6 p-3 bg-white/5 rounded-lg">;
                  <div className="grid grid-cols-2 gap-3 text-xs">;
                    <div>;
                      <div className="text-gray-400">Market Size</[^>]*>
                      <div className="text-white font-semibold">{service.marketSize}</[^>]*>
                    </[^>]*>
                    <div>;
                      <div className="text-gray-400">Growth Rate</[^>]*>
                      <div className="text-white font-semibold">{service.growthRate}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* CTA Button */};
                <div className="flex gap-3">;
                  <a;
                    href={service.link};
                    className="[^"]*"
                  >;
                    Learn More;
                  </[^>]*>
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready to Revolutionize Your Business?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
            Our cutting-edge AI and emerging technology services are designed to give you a competitive advantage in the rapidly evolving digital landscape.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <motion.button
              whileHover={{ scale: 1.05 }};
              whileTap={{ scale: 0.95 }};
              className="[^"]*"
            >;
              Schedule a Demo;
            </[^>]*>
            <motion.button
              whileHover={{ scale: 1.05 }};
              whileTap={{ scale: 0.95 }};
              className="[^"]*"
            >;
              Contact Sales Team;
            </[^>]*>
          </[^>]*>
          <div className="mt-8 text-gray-300">;
            <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</[^>]*>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};