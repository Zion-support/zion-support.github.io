import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart, 
  Building,
  ArrowRight,
  Star,
  CheckCircle,
  Target,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for business automation and intelligence",
      href: "/services/ai-ml"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      href: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and migration services",
      href: "/services/cloud-computing"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology",
      href: "/services/digital-transformation"
    }
  ];

  const categories = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern web applications and websites",
      count: "150+ Services"
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Custom software solutions",
      count: "200+ Services"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data science and business intelligence",
      count: "100+ Services"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Cybersecurity and compliance",
      count: "80+ Services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The world's first free marketplace dedicated to high-tech and artificial intelligence. 
            Connecting innovators, talent, and cutting-edge technology worldwide.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/marketplace"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Marketplace
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide cutting-edge technology solutions that transform businesses and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.href}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover a wide range of technology services and solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <category.icon className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-zion-slate-light mb-4">
                  {category.description}
                </p>
                <div className="text-zion-cyan text-sm font-medium">
                  {category.count}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}