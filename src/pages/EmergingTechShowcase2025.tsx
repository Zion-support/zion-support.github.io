import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Atom, 
  Zap, 
  Rocket, 
  Eye, 
  Globe, 
  Car, 
  Dna, 
  Microscope, 
  Bot,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025";

const EmergingTechShowcase2025: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Globe, color: 'from-blue-500 to-purple-600' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-purple-500 to-pink-600' },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic', icon: Brain, color: 'from-green-500 to-blue-600' },
    { id: 'Brain-Computer Interfaces', name: 'BCI', icon: Eye, color: 'from-red-500 to-orange-600' },
    { id: 'Synthetic Biology', name: 'Synthetic Biology', icon: Dna, color: 'from-emerald-500 to-teal-600' },
    { id: 'Fusion Energy', name: 'Fusion Energy', icon: Zap, color: 'from-yellow-500 to-orange-600' },
    { id: 'Space Mining', name: 'Space Mining', icon: Rocket, color: 'from-indigo-500 to-purple-600' },
    { id: 'Digital Twins', name: 'Digital Twins', icon: Eye, color: 'from-cyan-500 to-blue-600' },
    { id: 'Metaverse Infrastructure', name: 'Metaverse', icon: Globe, color: 'from-pink-500 to-rose-600' },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: Car, color: 'from-gray-500 to-slate-600' },
    { id: 'Biocomputing', name: 'Biocomputing', icon: Cpu, color: 'from-lime-500 to-green-600' },;
    { id: 'Nanotechnology', name: 'Nanotechnology', icon: Microscope, color: 'from-amber-500 to-yellow-600' },;
    { id: 'Advanced Robotics', name: 'Robotics', icon: Bot, color: 'from-slate-500 to-gray-600' };
  ];

    const filteredServices = selectedCategory === 'all';
    ? EMERGING_TECH_SERVICES_2025;
    : EMERGING_TECH_SERVICES_2025.filter(service => service.category === selectedCategory);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {;
        setCurrentSlide((prev) => (prev + 1) % filteredServices.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, filteredServices.length]);

  const getCategoryIcon = (category: string) => {;
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {;
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-blue-500 to-purple-600';
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            animate = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Emerging Tech
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the cutting-edge technologies that will shape the future. 
              From quantum computing to synthetic biology, explore revolutionary solutions 
              that are transforming industries and creating new possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Technologies</h2>
            <p className="text-xl text-gray-300">Explore our most revolutionary emerging tech solutions</p>
          </div>
          
          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="flex gap-4">
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                >
                  {autoPlay ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                </button>
                <button
                  onClick={() => setCurrentSlide(0)}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                >
                  <RotateCcw className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial = {
  { opacity: 0,
  x: 100 


}}
                animate = {
  { opacity: 1,
  x: 0 


}}
                exit = {
  { opacity: 0,
  x: -100 


}}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(filteredServices[currentSlide]?.category)}`}>
                        {React.createElement(getCategoryIcon(filteredServices[currentSlide]?.category), { className: "w-6 h-6 text-white" })}
                      </div>
                      <span className="text-sm text-gray-400 uppercase tracking-wider">
                        {filteredServices[currentSlide]?.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {filteredServices[currentSlide]?.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {filteredServices[currentSlide]?.description}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-blue-400">
                        {filteredServices[currentSlide]?.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        per {filteredServices[currentSlide]?.billing}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      {filteredServices[currentSlide]?.ctaLabel}
                    </motion.button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {filteredServices[currentSlide]?.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Market Size</h4>
                      <div className="text-2xl font-bold text-green-400">
                        {filteredServices[currentSlide]?.marketSize}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {filteredServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">All Emerging Technologies</h2>
            <p className="text-xl text-gray-300">Comprehensive overview of our cutting-edge solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 


}}
                animate = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 


}}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <div className="text-sm text-gray-400">per {service.billing}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>{service.marketSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{service.targetAudience}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {service.ctaLabel}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to learn more about our emerging technology services and how they can transform your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/10 rounded-full">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/10 rounded-full">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/10 rounded-full">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial = {
  { scale: 0.9,
  opacity: 0 


}}
              animate = {
  { scale: 1,
  opacity: 1 


}}
              exit = {
  { scale: 0.9,
  opacity: 0 


}}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()};
            >;
              {(() => {;
                const service = EMERGING_TECH_SERVICES_2025.find(s => s.id === selectedService);
                if (!service) return null;
                
                return (
                  <div>
                    <div className = "flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                          {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                        </div>
                        <div>
                          <span className="text-sm text-gray-400 uppercase tracking-wider">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                        <div className="space-y-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="font-semibold text-white mb-2">Market Size</h4>
                        <p className="text-2xl font-bold text-green-400">{service.marketSize}</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="font-semibold text-white mb-2">Pricing</h4>
                        <p className="text-2xl font-bold text-blue-400">{service.price}</p>
                        <p className="text-sm text-gray-400">per {service.billing}</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="font-semibold text-white mb-2">Target Audience</h4>
                        <p className="text-gray-300 text-sm">{service.targetAudience}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                      >
                        {service.ctaLabel}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedService(null)}
                        className="px-8 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all"
                      >
                        Close
                      </motion.button>;
                    </div>;
                  </div>;
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmergingTechShowcase2025;