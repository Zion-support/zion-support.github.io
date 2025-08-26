import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  innovativeMicroSaasSolutions2025 
} from '@/data/2025-innovative-micro-saas-solutions';
import { 
  cuttingEdgeAIServices2025 
} from '@/data/2025-cutting-edge-ai-services';

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

export default function ComprehensiveServicesOverview2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    if (category === 'all') return acc;
    acc[category] = allServices.filter(service => service.category === category);
    return acc;
  }, {} as Record<string, typeof allServices>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Overview 2026 - Zion Tech Group" 
        description="Explore our complete portfolio of AI services, micro SAAS solutions, and innovative technology platforms. Transform your business with cutting-edge solutions."
        keywords="AI services, micro SAAS, technology solutions, business transformation, digital innovation, enterprise solutions"
        canonical="https://ziontechgroup.com/comprehensive-services-overview-2026"
      />

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Services
            </span>
            <br />
            <span className="text-white">Overview 2026</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Discover our complete portfolio of cutting-edge AI services, micro SAAS solutions, and innovative technology platforms designed to transform your business
          </motion.p>
          
          {/* Service Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">{allServices.length} Services</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">{categories.length - 1} Categories</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">AI-Powered</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Enterprise Ready</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Banner */}
      <motion.section 
        className="py-8 bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter */}
      <motion.section 
        className="py-8 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
              <span className="absolute right-3 top-3 text-white/60">🔍</span>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services by Category */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'all' ? (
            // Show all categories
            <div className="space-y-16">
              {Object.entries(servicesByCategory).map(([category, services]) => (
                <motion.div key={category} variants={itemVariants}>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {category}
                    </h2>
                    <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                      {getCategoryDescription(category)}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Show filtered services
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {selectedCategory}
                </h2>
                <p className="text-blue-100 text-xl">
                  {filteredServices.length} services found
                </p>
              </div>
              
              {filteredServices.length === 0 ? (
                <div className="text-center py-20">
                  <h3 className="text-2xl text-white mb-4">No services found</h3>
                  <p className="text-blue-100">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.section>

      {/* Service Categories Overview */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat !== 'all').map((category) => (
              <motion.div
                key={category}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                  <p className="text-blue-100 mb-6">
                    {getCategoryDescription(category)}
                  </p>
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {servicesByCategory[category]?.length || 0}
                  </div>
                  <div className="text-blue-200 text-sm">Services Available</div>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    View Services
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to discuss how our comprehensive services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              📱 Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-200">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/25 h-full">
        {/* Service Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
            {service.icon}
          </div>
          {service.popular && (
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
              POPULAR
            </span>
          )}
        </div>

        {/* Service Info */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-blue-100 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-blue-200">{service.period}</span>
          </div>
          <p className="text-blue-100 text-sm">Free {service.trialDays}-day trial</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <li key={idx} className="text-blue-100 text-sm flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                {feature}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-blue-200 text-sm">
                +{service.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* ROI */}
        <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div className="text-green-400 text-xs mb-1 font-semibold">ROI</div>
          <p className="text-green-300 text-sm">{service.roi}</p>
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Link
            to={service.link}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Learn More
          </Link>
          <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
            Demo
          </button>
        </div>

        {/* Category Badge */}
        <div className="mt-4 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full border border-white/20">
            {service.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Helper functions
function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'AI Legal & Compliance': 'Advanced AI solutions for legal document automation, compliance, and risk assessment',
    'AI Healthcare & Medicine': 'Intelligent healthcare analytics, predictive diagnostics, and personalized medicine',
    'AI Financial Services': 'AI-powered trading, portfolio optimization, and financial risk management',
    'AI Supply Chain & Logistics': 'Intelligent supply chain optimization, logistics, and demand forecasting',
    'AI Customer Service': 'Automated customer service, chatbots, and intelligent support systems',
    'Quantum AI & Machine Learning': 'Quantum computing and advanced AI for next-generation applications',
    'AI Business Operations': 'Autonomous business operations, process optimization, and decision making',
    'AI IT Infrastructure': 'Intelligent IT asset management, optimization, and monitoring',
    'AI Security & Compliance': 'Advanced security monitoring, compliance automation, and risk assessment',
    'AI Research & Analytics': 'Autonomous research, data analysis, and insights generation',
    '5G Network Solutions': 'Next-generation 5G enterprise networks and optimization',
    'AI Creative & Media': 'AI-powered content creation, video production, and creative tools',
    'AI 3D & Design': 'Intelligent 3D modeling, design optimization, and visualization',
    'AI Gaming & Entertainment': 'AI-generated game assets, mechanics, and intelligent gameplay',
    'AI Fashion & Retail': 'Trend prediction, design generation, and retail optimization',
    'AI Architecture & Construction': 'Building optimization, energy efficiency, and sustainable design',
    'AI Education & Training': 'Personalized learning, adaptive curricula, and intelligent tutoring',
    'AI Agriculture & Food': 'Precision farming, crop monitoring, and agricultural optimization',
    'AI Energy & Sustainability': 'Energy management, consumption optimization, and sustainability'
  };
  return descriptions[category] || 'Innovative technology solutions for modern businesses';
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'AI Legal & Compliance': '⚖️',
    'AI Healthcare & Medicine': '🏥',
    'AI Financial Services': '📈',
    'AI Supply Chain & Logistics': '🚚',
    'AI Customer Service': '🤖',
    'Quantum AI & Machine Learning': '🧠',
    'AI Business Operations': '🏢',
    'AI IT Infrastructure': '💻',
    'AI Security & Compliance': '🔒',
    'AI Research & Analytics': '🔬',
    '5G Network Solutions': '📡',
    'AI Creative & Media': '🎬',
    'AI 3D & Design': '🎨',
    'AI Gaming & Entertainment': '🎮',
    'AI Fashion & Retail': '👗',
    'AI Architecture & Construction': '🏗️',
    'AI Education & Training': '🎓',
    'AI Agriculture & Food': '🌾',
    'AI Energy & Sustainability': '⚡'
  };
  return icons[category] || '🚀';
}