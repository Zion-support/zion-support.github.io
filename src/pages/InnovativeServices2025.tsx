import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Users, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Rocket
} from 'lucide-react';

export default function InnovativeServices2025() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services',
      benefits: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Excellence',
      description: 'Scalable cloud infrastructure and streamlined development operations',
      benefits: ['Multi-Cloud Strategy', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity',
      description: 'Next-generation security solutions for modern threats',
      benefits: ['Threat Intelligence', 'Zero Trust Architecture', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Globe,
      title: 'Global Digital Transformation',
      description: 'End-to-end digital transformation services',
      benefits: ['Process Automation', 'Data Strategy', 'Change Management', 'Technology Consulting']
    }
  ];

  const services = [
    {
      name: 'AI & Machine Learning',
      description: 'Custom AI solutions for business automation and insights',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern applications',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security for digital assets',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Digital Transformation',
      description: 'Strategic technology consulting and implementation',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure with their innovative AI solutions.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, StartupXYZ',
      content: 'Their cloud expertise helped us scale from startup to enterprise seamlessly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of IT, GlobalCorp',
      content: 'Outstanding cybersecurity implementation that exceeded our expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <SEO 
        title="Innovative Services 2025 - Zion Tech Group"
        description="Discover our cutting-edge technology services for 2025. AI, cloud, cybersecurity, and digital transformation solutions that drive business innovation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=)] opacity-20"></div>
        
        <div className="container-responsive relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">2025 Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative Services 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the future of technology with cutting-edge AI, cloud solutions, and digital transformation services that drive business innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Innovative Services?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results that drive business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                
                <button className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by leading companies worldwide for our innovative technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative services designed for 2025 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}