<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Globe,
  Building2,
  Heart,
  Factory,
  ShoppingCart
} from 'lucide-react';

export default function HomePage() {
  const heroFeatures = [
    'AI-Powered Solutions',
    'Enterprise Security',
    'Cloud Infrastructure',
    '24/7 Support'
  ];

  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      color: 'from-red-500 to-orange-500',
      href: '/services/cybersecurity'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and modern DevOps practices for rapid delivery.',
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud'
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      color: 'from-green-500 to-emerald-500',
      href: '/services/digital'
    }
  ];

  const industrySolutions = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'AI-powered diagnostics and patient management solutions.',
      href: '/solutions/healthcare'
    },
    {
      icon: TrendingUp,
      title: 'Financial Services',
      description: 'Secure, compliant fintech solutions for modern banking.',
      href: '/solutions/financial'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart manufacturing with IoT and Industry 4.0 technologies.',
      href: '/solutions/manufacturing'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Omnichannel retail solutions with AI personalization.',
      href: '/solutions/retail'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Building2 },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateTech',
      content: 'Their cybersecurity expertise helped us achieve compliance and protect our critical assets.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, CloudFlow',
      content: 'The cloud migration was seamless, and their DevOps practices improved our delivery speed significantly.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {' '}Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Leading provider of cutting-edge AI, cybersecurity, and cloud solutions that drive business growth and digital transformation.
              </p>
              
              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Zion Tech Group</h3>
                  <p className="text-blue-100">Empowering Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and accelerate your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed for the unique challenges and opportunities in your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {solution.description}
                </p>
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors font-medium">
                  Explore Solution
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Zion Tech Group.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">15+ years of experience in technology innovation and business transformation.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
              <p className="text-gray-600">Cutting-edge technology solutions that give you a competitive advantage.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Delivery</h3>
              <p className="text-gray-600">Worldwide delivery capabilities with local support and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative technology solutions can drive your success and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/case-studies"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
import React, { useState, useEffect, Suspense } from 'react'; import { Link  } from 'react-router-dom'; import { ; ArrowRight,; Star,; Users,; Award,; CheckCircle,; Play,; Sparkles,; Phone,; Mail,; ChevronRight,; ChevronUp,; Shield,; Globe,; MapPin,; Zap,; TrendingUp,; Target,; Rocket,; Plus,; Building2;  } from 'lucide-react'; import { motion, AnimatePresence  } from 'framer-motion'; import ServiceShowcase from '../components/ServiceShowcase'; import InnovativeServicesShowcase from '../components/InnovativeServicesShowcase'; import { contactInfo } from '../data/services'; ;
>>>>>>> main
>>>>>>> main
