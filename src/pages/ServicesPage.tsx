import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple' }
  ];

  const services = [
    {
      id: 1,
      title: "AI-Powered Business Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      category: "AI & Analytics",
      price: 2500,
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "API integration"],
      icon: Brain,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      id: 2,
      title: "Cybersecurity Threat Detection",
      description: "Advanced security monitoring and threat detection for enterprise networks.",
      category: "Cybersecurity",
      price: 3500,
      features: ["24/7 monitoring", "Threat intelligence", "Incident response", "Compliance reporting"],
      icon: Shield,
      color: "from-zion-purple to-zion-red"
    },
    {
      id: 3,
      title: "Quantum Computing Solutions",
      description: "Cutting-edge quantum computing services for complex problem solving.",
      category: "Quantum Computing",
      price: 8000,
      features: ["Quantum algorithms", "Optimization problems", "Research collaboration", "Custom solutions"],
      icon: Rocket,
      color: "from-zion-blue to-zion-cyan"
    },
    {
      id: 4,
      title: "Blockchain Development",
      description: "Custom blockchain solutions for secure and transparent business operations.",
      category: "Blockchain",
      price: 4000,
      features: ["Smart contracts", "DApp development", "Token creation", "DeFi solutions"],
      icon: Lock,
      color: "from-zion-purple to-zion-blue"
    },
    {
      id: 5,
      title: "IoT Edge Computing",
      description: "Intelligent edge computing solutions for IoT device management.",
      category: "IoT & Edge",
      price: 3000,
      features: ["Device management", "Data processing", "Real-time analytics", "Scalable architecture"],
      icon: Cpu,
      color: "from-zion-green to-zion-cyan"
    },
    {
      id: 6,
      title: "AI Content Generation",
      description: "Automated content creation powered by advanced language models.",
      category: "Content Creation",
      price: 1500,
      features: ["Multi-format content", "SEO optimization", "Brand voice training", "Content scheduling"],
      icon: Code,
      color: "from-zion-orange to-zion-purple"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-zion-cyan">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions designed to transform your business 
            and drive innovation in the digital age.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light/50 focus:outline-none focus:border-zion-cyan"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 border border-zion-cyan/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25 group"
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </div>
                    <button className="px-6 py-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors flex items-center gap-2 group-hover:gap-3">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-zion-slate-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-zion-slate-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors"
                >
                  View All Services
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
