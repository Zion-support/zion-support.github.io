import React from 'react';
import { motion } from 'framer-motion';
import { UltimateInnovativeServicesShowcase2027 } from '@/components/UltimateInnovativeServicesShowcase2027';
import { EnhancedPricingSection2027 } from '@/components/EnhancedPricingSection2027';
import { SEO } from '@/components/SEO';
export default function UltimateServicesShowcase2027Page() {
  return (
<>
      <SEO
        title="Ultimate Innovative Services 2027 | Zion Tech Group"
        description="Discover our cutting-edge micro SAAS, IT, and AI services that are revolutionizing industries and driving the future of technology. From AI autonomous trading to quantum computing solutions."
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, healthcare technology, cybersecurity, emerging technology, Zion Tech Group"
        url="https://ziontechgroup.com/ultimate-services-2027"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ultimate <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Innovative Services</span> 2027
              </h1>
              <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of technology with our revolutionary micro SAAS, IT, and AI services. 
                From autonomous AI systems to quantum computing solutions, we're pushing the boundaries of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  Explore Services
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                  className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-medium hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Showcase */}
        <section id="services" className="py-20">
          <UltimateInnovativeServicesShowcase2027 />
        </section>
        {/* Pricing Section */}
        <section className="py-20">
          <EnhancedPricingSection2027 />
        </section>
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-8">
                Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
                Contact us today to discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-medium hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
</>
  );
}