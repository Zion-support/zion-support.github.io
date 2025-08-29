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

// New AI Services Data
const newAIServices = [
  {
    title: "AI Legal Document Automation",
    description: "Streamline legal document creation, review, and compliance with AI-powered automation",
    icon: "⚖️",
    path: "/services/ai-legal-document-automation",
    features: [
      "Automated contract generation",
      "Legal compliance monitoring",
      "Document review & analysis",
      "Smart legal templates"
    ]
  },
  {
    title: "AI Healthcare Predictive Analytics",
    description: "Advanced healthcare analytics and predictive modeling for improved patient outcomes",
    icon: "🏥",
    path: "/services/ai-healthcare-predictive-analytics",
    features: [
      "Predictive diagnostics",
      "Patient monitoring",
      "Population health analytics",
      "Treatment optimization"
    ]
  },
  {
    title: "AI Financial Trading & Risk Management",
    description: "AI-powered trading algorithms and comprehensive risk management solutions",
    icon: "📈",
    path: "/services/ai-financial-trading-risk-management",
    features: [
      "AI trading algorithms",
      "Risk assessment",
      "Market analysis",
      "Compliance monitoring"
    ]
  }
];

// Stats data
const stats = [
  {
    value: "500+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    icon: "👥"
  },
  {
    value: "50+",
    label: "AI Services",
    description: "Cutting-edge AI solutions",
    icon: "🤖"
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable infrastructure",
    icon: "⚡"
  },
  {
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance",
    icon: "🛟"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Zion Tech Group - Leading AI, IT & Micro SaaS Solutions"
        description="Transform your business with cutting-edge AI services, IT solutions, and innovative micro SaaS platforms. Expert consulting and implementation services."
        keywords="AI services, IT solutions, micro SaaS, business transformation, technology consulting"
        ogImage="/og-image.jpg"
        canonicalUrl="https://ziontechgroup.com"
      />

      <HeroSection />

      {/* New AI Services Showcase */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest AI-powered solutions designed to transform industries and drive innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newAIServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/60 backdrop-blur border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-400/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors text-white">
                  {category.name}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{category.count} services</span>
                  <Link 
                    to={category.href}
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge solutions 
              to drive innovation and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/schedule-demo"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component-based sections */}
      <Suspense fallback={<LoadingFallback message="Loading categories..." />}>
        <CategoriesSection />
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
