
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ITServiceRequestHero } from "@/components/ITServiceRequestHero";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - AI-Powered Technology Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, expert talent, and innovative services. Leading provider of technology solutions for startups to enterprises. Get started today!"
        keywords="AI solutions, technology services, digital transformation, AI consulting, cloud services, cybersecurity, enterprise solutions, micro SAAS, startup technology"
        canonical="https://ziontechgroup.com/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <HeroSection />
        
        {/* Service Categories Overview */}
        <motion.section 
          className="py-16 sm:py-20 bg-white/5 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="service-categories-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 id="service-categories-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Service Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-zion-slate-light max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="region"
              aria-label="Service categories grid"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="group"
                >
                  <Link to={category.href} className="block focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 rounded-2xl">
                    <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift group-hover:shadow-zion-glow">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl sm:text-2xl" aria-hidden="true">{category.icon}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-center mb-4 text-sm sm:text-base">
                        {category.description}
                      </p>
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-xs sm:text-sm font-medium">
                          {category.count} Services
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services */}
        <motion.section 
          className="py-16 sm:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="featured-services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 id="featured-services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="gradient-text">Featured Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover our most innovative and in-demand technology solutions
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="region"
              aria-label="Featured services grid"
            >
              {featuredServices.map((service, index) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

      <HeroSection />
      
      <StatsSection />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}

export default Home;