import React, { useEffect, useState, useCallback }  from 'react';
import { Link }  from 'react-router-dom';
import { motion, useInView }  from 'framer-motion';
import { Helmet }  from 'react-helmet-async';
import { useNotifications }  from '../components/NotificationSystem';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';
import EnhancedContentAdvertising from '../components/EnhancedContentAdvertising';
import UltimateBreakthroughBanner from '../components/UltimateBreakthroughBanner';
import NeuralRealityBanner from '../components/NeuralRealityBanner';
import RevolutionaryTechAdvertisingBanner from '../components/RevolutionaryTechAdvertisingBanner';
import InteractiveTechShowcase from '../components/InteractiveTechShowcase';
import UltimateTechShowcase2027Banner from '../components/UltimateTechShowcase2027Banner';
import ComprehensiveServices2028Banner from '../components/ComprehensiveServices2028Banner';
import RevolutionaryTechBlog2027Banner from '../components/RevolutionaryTechBlog2027Banner';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: "true", margin: "-100px" });

  useEffect(() => {
    setIsLoaded(true);
    if (isInView) {
      setIsVisible(true);
    };
  }, [isInView]);

  const handleGetStarted = useCallback(() => {
    // Smooth scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  const handleLearnMore = useCallback(() => {
    // Smooth scroll to about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Zion Tech Group - Leading AI, Quantum Computing & Cybersecurity Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. Interactive AI calculator, enterprise case studies, and personalized recommendations." />
        <meta name="keywords" content="AI, artificial intelligence, quantum computing, cybersecurity, technology solutions, enterprise software" />
        <meta property="og:title" content="Zion Tech Group - Leading AI, Quantum Computing & Cybersecurity Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading AI, Quantum Computing & Cybersecurity Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          ref={ref};
          className="text-center"
          initial={{ opacity: "0", y: 50 }};
          animate={isVisible ? { opacity: "1", y: 0 } : { opacity: "0", y: 50 }};
          transition={{ duration: 0.8, ease: "easeOut" }};
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading AI, Quantum Computing & Cybersecurity Solutions
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
            Interactive AI calculator, enterprise case studies, and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Get started with our services"
            >
              Get Started
            </button>
            <button 
              onClick={handleLearnMore}
              className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Learn more about our company"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* NEW: Ultimate Tech Showcase 2027 Banner */}
        <div className="container mx-auto px-4">
          <UltimateTechShowcase2027Banner />
        </div>

        {/* NEW: Comprehensive Services 2028 Banner */}
        <div className="container mx-auto px-4">
          <ComprehensiveServices2028Banner />
        </div>

        {/* NEW: Revolutionary Tech Blog 2027 Banner */}
        <div className="container mx-auto px-4">
          <RevolutionaryTechBlog2027Banner />
        </div>

        {/* NEW: Ultimate Tech Showcase Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-3xl animate-pulse">🚀</span>
              <h3 className="text-3xl font-bold">ULTIMATE TECH SHOWCASE 2026</h3>
              <span className="text-3xl animate-pulse">🚀</span>
            </div>
            <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
              Discover the most comprehensive collection of cutting-edge technologies including
              Biotech AI, Space Technology, and Advanced Quantum Systems
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                🌟 Ultimate Tech Showcase →
              </a>
              <a href="/pages/ComprehensiveServicesShowcase2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                🚀 Comprehensive Services →
              </a>
              <a href="/pages/RevolutionaryTechBlog2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                📚 Tech Blog 2026 →
              </a>
            </div>
          </div>
        </div>

        {/* NEW: Ultimate Breakthrough Banner */}
        <div className="container mx-auto px-4">
          <UltimateBreakthroughBanner />
        </div>

        {/* NEW: Neural Reality Interface Banner */}
        <div className="container mx-auto px-4">
          <NeuralRealityBanner />
        </div>

        {/* Services Grid */}
        <div id="services" className="container mx-auto px-4 py-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Solutions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge technologies and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Solutions</h3>
              <p className="text-blue-100 mb-6 text-center">
                Advanced artificial intelligence solutions for enterprise and innovation
              </p>
              <div className="text-center">
                <a href="/pages/AdvancedAITransformation2026" className="text-blue-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Revolutionary quantum computing solutions for complex problem solving
              </p>
              <div className="text-center">
                <a href="/pages/QuantumComputingRevolution2026" className="text-cyan-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct brain-computer interface technology for seamless interaction
              </p>
              <div className="text-center">
                <a href="/pages/NeuralInterfaceRevolution2026" className="text-emerald-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
              <p className="text-purple-100 mb-6 text-center">
                Advanced biotechnology solutions for healthcare and human enhancement
              </p>
              <div className="text-center">
                <a href="/pages/AdvancedBiotechAI2026" className="text-purple-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
              <p className="text-orange-100 mb-6 text-center">
                Next-generation space technology for exploration and innovation
              </p>
              <div className="text-center">
                <a href="/pages/NextGenSpaceTech2026" className="text-orange-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Tech Insights</h3>
              <p className="text-indigo-100 mb-6 text-center">
                Stay updated with the latest technology trends and insights
              </p>
              <div className="text-center">
                <a href="/pages/RevolutionaryTechBlog2026" className="text-indigo-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Showcases */}
        <div className="container mx-auto px-4 py-20">
          <EnhancedContentShowcase />
        </div>

        <div className="container mx-auto px-4 py-20">
          <RevolutionaryContentShowcase />
        </div>

        {/* Enhanced Content Advertising */}
        <EnhancedContentAdvertising />

        {/* Revolutionary Tech Advertising Banner */}
        <RevolutionaryTechAdvertisingBanner />

        {/* Interactive Tech Showcase */}
        <InteractiveTechShowcase />

        {/* Call to Action */}
        <motion.section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution and discover how our cutting-edge technologies can transform your business and unlock unprecedented possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
        </motion.section>

        {/* Lazy Loaded Components */}
        <React.Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <CategoriesSection />
          <BenefitsSection />
          <HowItWorksSection />
          <NewsletterSection />
          <FeaturedListingsSection />
          <QuickAccess />
          <FeatureCTAs />
          <FeatureHighlights />
          <ITServiceRequestHero />
          <FloatingCTA />
          <PricingSection />
          <TechSolutionsSection />
          <CaseStudiesSection />
          <TeamExpertiseSection />
          <GlobalPresenceSection />
          <InnovationResearchSection />
          <ClientSuccessStoriesSection />
          <TechnologyStackSection />
          <SecurityComplianceSection />
          <AIServicesShowcase />
          <InteractiveTestimonials />
          <ServicesShowcase />
          <RevolutionaryContentShowcase2027 />
        </React.Suspense>

        {/* About Section */}
        <div id="about" className="container mx-auto px-4 py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Zion Tech Group</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We are pioneers in the field of artificial intelligence, quantum computing, and cybersecurity. 
              Our mission is to transform businesses through innovative technology solutions that drive growth, 
              enhance security, and unlock new possibilities.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">Cutting-edge technology solutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-400">Enterprise-grade security protocols</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-gray-400">Optimized for speed and efficiency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;
