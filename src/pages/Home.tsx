import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import QuickAccess from '../components/home/QuickAccess';
import UltimateServicesShowcase2025 from '../components/UltimateServicesShowcase2025';
import { FeatureHighlights } from '../components/home/FeatureHighlights';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import StatsSection from '../components/home/StatsSection';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

// Lazy load heavy components for better performance
const TeamExpertiseSection = React.lazy(() => import('../components/TeamExpertiseSection'));
const TechSolutionsSection = React.lazy(() => import('../components/TechSolutionsSection'));
const TechnologyStackSection = React.lazy(() => import('../components/TechnologyStackSection'));

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const sectionVariants = {
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
    <motion.div
      className="min-h-screen bg-futuristic"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section variants={sectionVariants}>
        <EnhancedHeroSection />
      </motion.section>

      {/* Quick Access Section */}
      <motion.section 
        variants={sectionVariants}
        className="py-16"
      >
        <div className="container-responsive">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Quick Access to Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our comprehensive range of AI-powered solutions, IT services, and innovative micro SaaS platforms
            </motion.p>
          </div>
          <QuickAccess />
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        variants={sectionVariants}
        className="py-16 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10"
      >
        <div className="container-responsive">
          <StatsSection />
        </div>
      </motion.section>

      {/* Services Showcase */}
      <motion.section 
        variants={sectionVariants}
        className="py-16"
      >
        <div className="container-responsive">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Comprehensive Services
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From AI solutions to infrastructure management, we provide end-to-end technology services
            </motion.p>
          </div>
          <UltimateServicesShowcase2025 />
        </div>
      </motion.section>

      {/* Feature Highlights */}
      <motion.section 
        variants={sectionVariants}
        className="py-16 bg-gradient-to-r from-zion-purple/10 via-zion-blue/10 to-zion-cyan/10"
      >
        <div className="container-responsive">
          <FeatureHighlights />
        </div>
      </motion.section>

      {/* Team Expertise Section */}
      <motion.section 
        variants={sectionVariants}
        className="py-16"
      >
        <div className="container-responsive">
          <Suspense fallback={<LoadingSpinner />}>
            <TeamExpertiseSection />
          </Suspense>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        variants={sectionVariants}
        className="py-16 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10"
      >
        <div className="container-responsive">
          <Suspense fallback={<LoadingSpinner />}>
            <TechnologyStackSection />
          </Suspense>
        </div>
      </motion.section>

      {/* Tech Solutions */}
      <motion.section 
        variants={sectionVariants}
        className="py-16"
      >
        <div className="container-responsive">
          <Suspense fallback={<LoadingSpinner />}>
            <TechSolutionsSection />
          </Suspense>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        variants={sectionVariants}
        className="py-16 bg-gradient-to-r from-zion-purple/10 via-zion-blue/10 to-zion-cyan/10"
      >
        <div className="container-responsive">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
          </div>
          <Testimonials />
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        variants={sectionVariants}
        className="py-16"
      >
        <div className="container-responsive">
          <CTASection />
        </div>
      </motion.section>
    </motion.div>
  );
}
