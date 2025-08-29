
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load components for better performance
const CategoriesSection = React.lazy(() => import("@/components/CategoriesSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"));
const NewsletterSection = React.lazy(() => import("@/components/NewsletterSection"));
const FeaturedListingsSection = React.lazy(() => import("@/components/FeaturedListingsSection"));
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"));
const FeatureCTAs = React.lazy(() => import("@/components/home/FeatureCTAs"));
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"));
const ITServiceRequestHero = React.lazy(() => import("@/components/home/ITServiceRequestHero"));
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"));
const PricingSection = React.lazy(() => import("@/components/PricingSection"));
const TechSolutionsSection = React.lazy(() => import("@/components/TechSolutionsSection"));
const CaseStudiesSection = React.lazy(() => import("@/components/CaseStudiesSection"));
const TeamExpertiseSection = React.lazy(() => import("@/components/TeamExpertiseSection"));
const GlobalPresenceSection = React.lazy(() => import("@/components/GlobalPresenceSection"));
const InnovationResearchSection = React.lazy(() => import("@/components/InnovationResearchSection"));
const ClientSuccessStoriesSection = React.lazy(() => import("@/components/ClientSuccessStoriesSection"));
const TechnologyStackSection = React.lazy(() => import("@/components/TechnologyStackSection"));
const SecurityComplianceSection = React.lazy(() => import("@/components/SecurityComplianceSection"));
const AIServicesShowcase = React.lazy(() => import("@/components/AIServicesShowcase"));
const InteractiveTestimonials = React.lazy(() => import("@/components/InteractiveTestimonials"));
const ServicesShowcase = React.lazy(() => import("@/components/ServicesShowcase"));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>
        <p className="text-slate-400 mt-4">{message}</p>
      </div>
    </div>
  </div>
);

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-services",
    count: 20,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Edge & IoT",
    description: "Ultra-low latency edge computing and IoT platform solutions",
    icon: "⚡",
    href: "/services/edge-computing-platform",
    count: 8,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 12,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 10,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Data Governance",
    description: "AI-powered data protection and compliance management",
    icon: "🛡️",
    href: "/services/ai-data-governance",
    count: 6,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Customer Success",
    description: "AI-driven customer engagement and retention platforms",
    icon: "💝",
    href: "/services/ai-customer-success-platform",
    count: 5,
    color: "from-yellow-500 to-orange-600"
  }
];
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                2030
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions 
              designed to transform industries and drive unprecedented growth.
            </p>
            <Link 
              to="/revolutionary-services-2030" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Revolutionary Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum AI Hybrid Platform",
                description: "Revolutionary platform combining quantum computing with advanced AI",
                icon: Brain,
                color: "from-cyan-500 to-blue-600",
                price: "$25,000/month"
              },
              {
                title: "AI Cybersecurity Platform",
                description: "Next-generation cybersecurity using AI and machine learning",
                icon: Shield,
                color: "from-red-500 to-orange-600",
                price: "$8,999/month"
              },
              {
                title: "Autonomous AI Operations",
                description: "Platform that autonomously manages business operations",
                icon: Zap,
                color: "from-green-500 to-emerald-600",
                price: "$15,999/month"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800/60 backdrop-blur border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-400/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {service.price}
                </div>
                <div className="text-sm text-slate-400">
                  Starting price • Enterprise support included
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular solutions trusted by businesses worldwide
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400">({service.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting-Edge Technology Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary solutions that define the future of technology and business innovation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <div className="text-2xl">⚛️</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Quantum Computing</h3>
                  <p className="text-cyan-400 font-semibold">Revolutionary Technology</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Access quantum computing power for cryptography, machine learning, and optimization problems that are impossible for classical computers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Starting Price</div>
                  <div className="text-lg font-bold text-cyan-400">$2,500/month</div>
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">ROI</div>
                  <div className="text-lg font-bold text-green-400">200-400%</div>
                </div>
              </div>
              <Link 
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <div className="text-2xl">🧠</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Healthcare Diagnostics</h3>
                  <p className="text-cyan-400 font-semibold">Medical Innovation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Advanced medical diagnostics using AI to analyze medical images, predict diseases, and provide treatment recommendations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Starting Price</div>
                  <div className="text-lg font-bold text-cyan-400">$4,500/month</div>
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">ROI</div>
                  <div className="text-lg font-bold text-green-400">350-600%</div>
                </div>
              </div>
              <Link 
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                Explore Healthcare AI
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                  <div className="text-2xl">🛡️</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Threat Detection</h3>
                  <p className="text-cyan-400 font-semibold">Cybersecurity</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Real-time cybersecurity threat detection using machine learning to identify and respond to advanced persistent threats.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Starting Price</div>
                  <div className="text-lg font-bold text-cyan-400">$3,999/month</div>
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">ROI</div>
                  <div className="text-lg font-bold text-green-400">300-500%</div>
                </div>
              </div>
              <Link 
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                Explore Security Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <div className="text-2xl">🏗️</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Smart City IoT</h3>
                  <p className="text-cyan-400 font-semibold">Urban Innovation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive IoT platform for smart cities that optimizes urban services and improves citizen quality of life.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Starting Price</div>
                  <div className="text-lg font-bold text-cyan-400">$3,800/month</div>
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-gray-400">ROI</div>
                  <div className="text-lg font-bold text-green-400">280-450%</div>
                </div>
              </div>
              <Link 
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                Explore Smart City Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Cutting-Edge Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={solution.path}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and customer success has made us a trusted partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <signal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{signal.label}</h3>
                <p className="text-gray-300">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <LazyServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <LazyFeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>

      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
import { AnimatedBackground, FloatingParticles } from "@/components/ui/AnimatedBackground";

// Lazy load heavy components for better performance
const InteractiveServiceShowcase = React.lazy(() => import('@/components/InteractiveServiceShowcase'));
>>>>>>> 829a8669c1e (Add cutting-edge technology showcase section to Home page)

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

// Stats data
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Global Clients",
    description: "Trusted worldwide"
  },
  {
    icon: Rocket,
    value: "1000+",
    label: "Projects Delivered",
    description: "Successfully completed"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise reliability"
  },
  {
    icon: Star,
    value: "24/7",
    label: "Expert Support",
    description: "Always available"
  }
];

// AI Services data
const aiServices = [
  {
    icon: Brain,
    title: "AI Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    path: "/services/ai-business-intelligence",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Automated Reporting",
      "Custom ML Models"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud DevOps",
    description: "Streamline your development pipeline with automated cloud infrastructure.",
    path: "/services/cloud-devops",
    features: [
      "CI/CD Automation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Security Integration"
    ]
  },
  {
    icon: Shield,
    title: "AI Cybersecurity",
    description: "Protect your business with intelligent threat detection and response systems.",
    path: "/services/ai-cybersecurity-suite",
    features: [
      "Threat Intelligence",
      "Automated Response",
      "Zero Trust Architecture",
      "Compliance Monitoring"
    ]
  }
];

// Why Choose Us data
const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of proven technology leadership and innovation"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 50+ countries with 24/7 support"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance standards"
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "98% customer satisfaction with dedicated success managers"
  }
];

// Trust Signals data
const trustSignals = [
  {
    icon: Award,
    label: "ISO 27001 Certified",
    description: "Information security management"
  },
  {
    icon: Shield,
    label: "SOC 2 Compliant",
    description: "Security, availability, and confidentiality"
  },
  {
    icon: Globe,
    label: "GDPR Ready",
    description: "Data protection compliance"
  },
  {
    icon: Star,
    label: "99.9% Uptime",
    description: "Enterprise-grade reliability"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Service Categories Overview */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-slate-300 text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/30">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Featured Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI-Powered Solutions */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                    <p className="text-cyan-400 text-sm font-medium">Most Popular</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.
                </p>
                <Link 
                  to="/ai-services" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore AI Solutions
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                    <p className="text-blue-400 text-sm font-medium">Enterprise Ready</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Build, deploy, and scale your applications with our enterprise-grade cloud infrastructure and automated DevOps practices.
                </p>
                <Link 
                  to="/services/cloud-devops" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Cloud Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <CategoriesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <FeatureHighlights />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <FeatureCTAs />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading benefits..." />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading how it works..." />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading tech solutions..." />}>
        <TechSolutionsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading case studies..." />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading team expertise..." />}>
        <TeamExpertiseSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading global presence..." />}>
        <GlobalPresenceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading innovation research..." />}>
        <InnovationResearchSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading client stories..." />}>
        <ClientSuccessStoriesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <InteractiveTestimonials />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading technology stack..." />}>
        <TechnologyStackSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading security compliance..." />}>
        <SecurityComplianceSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading pricing..." />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading featured listings..." />}>
        <FeaturedListingsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading newsletter..." />}>
        <NewsletterSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading IT service request..." />}>
        <ITServiceRequestHero />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading floating CTA..." />}>
        <FloatingCTA />
      </Suspense>
    </div>
  );
}
