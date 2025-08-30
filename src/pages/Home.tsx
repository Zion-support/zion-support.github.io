import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { HomeHero } from '../components/HomeHero';
import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud
} from 'lucide-react';

export default function Home() {
  const microSaaSProducts = [
    {
      name: 'AI Sales Copilot',
      description: 'Complete sales automation suite with AI-powered insights',
      icon: TrendingUp,
      href: '/services/ai-sales-copilot',
      price: '$299/month'
    },
    {
      name: 'AI Support Helpdesk',
      description: 'Intelligent customer support platform with 24/7 availability',
      icon: MessageCircle,
      href: '/services/ai-support-helpdesk',
      price: '$199/month'
    },
    {
      name: 'AI Content Generator',
      description: 'AI-powered content creation and optimization platform',
      icon: BookOpen,
      href: '/services/ai-content-generator',
      price: '$149/month'
    },
    {
      name: 'AI Lead Scoring',
      description: 'Machine learning-based lead prioritization and scoring',
      icon: Target,
      href: '/services/ai-lead-scoring',
      price: '$99/month'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our AI strategy. Their Enterprise Orchestrator increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Director of IT, HealthFirst',
      content: 'The AI Healthcare Analytics platform has revolutionized our diagnostic capabilities and patient care.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, FinTech Solutions',
      content: 'Outstanding cybersecurity solutions. Their AI-powered threat detection is cutting-edge and reliable.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <HomeHero />

        {/* Services Showcase */}
        <EnhancedServicesShowcase />

        {/* Micro SaaS Products Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Solutions</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-deploy AI-powered applications that scale with your business needs
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {microSaaSProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  variants={itemVariants}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{product.name}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  <Link
                    to={product.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Clients Say</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of satisfied customers who have transformed their businesses with our solutions
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Digital Transformation?</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Let's discuss how our cutting-edge AI solutions can revolutionize your business operations and drive unprecedented growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    to="/services"
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Explore All Services
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
