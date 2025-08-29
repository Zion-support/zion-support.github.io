import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Star, CheckCircle, Rocket, Target, TrendingUp } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/EnhancedHeroSection";
import { EnhancedServicesShowcase } from "@/components/EnhancedServicesShowcase";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">{message}</p>
    </div>
  </div>
);

// Service categories data
const serviceCategories = [
  {
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    href: "/services/ai-business-intelligence",
    icon: Brain,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security and compliance solutions",
    href: "/services/ai-cybersecurity-suite",
    icon: Shield,
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    href: "/services/cloud-devops-solutions",
    icon: Zap,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business transformation services",
    href: "/services/digital-transformation",
    icon: Rocket,
    color: "from-green-500 to-teal-600"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Categories Section */}
      <Suspense fallback={<LoadingFallback message="Loading categories..." />}>
        <CategoriesSection />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<LoadingFallback message="Loading benefits..." />}>
        <BenefitsSection />
      </Suspense>

      {/* How It Works Section */}
      <Suspense fallback={<LoadingFallback message="Loading process..." />}>
        <HowItWorksSection />
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<LoadingFallback message="Loading newsletter..." />}>
        <NewsletterSection />
      </Suspense>

      {/* Featured Listings Section */}
      <Suspense fallback={<LoadingFallback message="Loading listings..." />}>
        <FeaturedListingsSection />
      </Suspense>

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Quick Access Section */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Access to Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get instant access to our most popular services and solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link
                    to={category.href}
                    className="block p-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 group-hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Suspense>

      {/* Feature Highlights */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-First Approach",
                  description: "We leverage artificial intelligence to solve complex business challenges and drive innovation."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Your data and systems are protected with industry-leading security measures and compliance standards."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized performance and rapid deployment ensure your solutions are up and running quickly."
                },
                {
                  icon: Star,
                  title: "Proven Excellence",
                  description: "Track record of successful implementations and satisfied clients across various industries."
                },
                {
                  icon: Rocket,
                  title: "Scalable Solutions",
                  description: "Our solutions grow with your business, adapting to changing needs and requirements."
                },
                {
                  icon: Target,
                  title: "Results-Driven",
                  description: "We focus on measurable outcomes and tangible business value for every project."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Suspense>

      {/* IT Service Request Hero */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Let our team of experts help you implement cutting-edge solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Suspense>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <Star className="w-5 h-5 mr-2" />
          Get Quote
        </Link>
      </div>
    </>
  );
}
