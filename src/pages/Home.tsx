
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { ExpandedServicesPreview } from "@/components/home/ExpandedServicesPreview";

const stats = [
  { number: '10K+', label: 'Active Users', icon: '👥' },
  { number: '500+', label: 'AI Services', icon: '🤖' },
  { number: '99.9%', label: 'Uptime', icon: '⚡' },
  { number: '24/7', label: 'Support', icon: '🛡️' }
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. AI-powered matching for your tech needs."
        keywords={[
          "AI marketplace", 
          "tech services", 
          "artificial intelligence", 
          "IT services", 
          "AI developers", 
          "technology marketplace", 
          "AI solutions", 
          "machine learning", 
          "digital transformation",
          "tech hiring",
          "AI matching",
          "IT consulting",
          "software development",
          "data science",
          "cloud services"
        ]}
        canonical="https://app.ziontechgroup.com/"
        ogType="website"
        structuredData={{
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://app.ziontechgroup.com",
          "description": "The world's first free marketplace dedicated to high-tech and artificial intelligence",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://app.ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <ExpandedServicesPreview />
      
      <CategoriesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/60"
                >
                  <span className="text-xl">🚀</span>
                  Get Started Today
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/ultimate-services-showcase-2026"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60"
                >
                  <span className="text-xl">🔮</span>
                  Ultimate Services 2026
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/comprehensive-pricing-2026"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 border border-green-500/30 hover:border-green-500/60"
                >
                  <span className="text-xl">💰</span>
                  View Pricing
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-semibold text-lg py-4 px-8 rounded-xl border border-white/30 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300 shadow-lg"
                >
                  <span className="text-xl">🔍</span>
                  View All Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <NewsletterSection />
    </div>
  );
}