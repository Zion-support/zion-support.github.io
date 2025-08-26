
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveHero from '../components/InteractiveHero';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityPanel from '../components/AccessibilityPanel';
import UIEnhancer from '../components/UIEnhancer';
import SEOEnhancer from '../components/SEOEnhancer';

export default function Home() {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(true);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsAccessibilityOpen(!isAccessibilityOpen);
      }
      if (e.altKey && e.key === 'p') {
        e.preventDefault();
        setShowPerformanceMonitor(!showPerformanceMonitor);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAccessibilityOpen, showPerformanceMonitor]);

  return (
    <>
      <SEOEnhancer 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. We help businesses thrive in the digital age."
        keywords={['AI solutions', 'technology consulting', 'digital transformation', 'cloud computing', 'cybersecurity', 'machine learning']}
        type="website"
      />
      
      {/* Performance Monitor */}
      {showPerformanceMonitor && (
        <PerformanceMonitor autoHide={false} />
      )}

      {/* Accessibility Panel */}
      <AccessibilityPanel 
        isOpen={isAccessibilityOpen}
        onToggle={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
      />

      {/* UI Enhancer */}
      <UIEnhancer 
        showFloatingActions={true}
        enableParticles={true}
        enableScrollEffects={true}
      />

      {/* Interactive Hero Section */}
      <InteractiveHero
        title="Welcome to Zion Tech Group"
        subtitle="🚀 Leading AI & Technology Solutions"
        description="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. We help businesses thrive in the digital age with cutting-edge AI, cloud computing, and cybersecurity solutions."
        primaryAction={{
          text: "Start Your Transformation",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Explore Services",
          href: "/services"
        }}
        stats={[
          { value: '500+', label: 'Happy Clients', color: 'text-blue-400' },
          { value: '1000+', label: 'Projects Delivered', color: 'text-green-400' },
          { value: '99.9%', label: 'Uptime SLA', color: 'text-purple-400' },
          { value: '24/7', label: 'Support Available', color: 'text-cyan-400' }
        ]}
      />

      {/* Enhanced Services Preview */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward and stay ahead of the competition
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: 'AI Solutions',
                description: 'Machine learning, natural language processing, and computer vision solutions to automate and optimize your business processes.',
                features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision Systems', 'Predictive Analytics'],
                color: 'blue',
                href: '/services/ai'
              },
              {
                icon: '☁️',
                title: 'Cloud & DevOps',
                description: 'Cloud migration, infrastructure automation, and DevOps practices to accelerate your development and deployment cycles.',
                features: ['Cloud Migration & Strategy', 'Infrastructure as Code', 'CI/CD Pipeline Automation', 'Container Orchestration'],
                color: 'green',
                href: '/services/cloud'
              },
              {
                icon: '🔒',
                title: 'Cybersecurity',
                description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance frameworks.',
                features: ['Threat Detection & Response', 'Vulnerability Assessment', 'Compliance & Governance', 'Security Architecture'],
                color: 'red',
                href: '/services/cybersecurity'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-${service.color}-400/50 transition-all duration-300 backdrop-blur-sm`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${service.color}-500 to-${service.color === 'red' ? 'pink' : service.color === 'green' ? 'emerald' : 'cyan'}-500 rounded-lg flex items-center justify-center mb-6 text-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-gray-400 text-sm mb-6 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className={`text-${service.color}-400 hover:text-${service.color}-300 font-medium transition-colors duration-300 inline-flex items-center group`}
                >
                  Learn More 
                  <motion.svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-lg group"
            >
              View All Services
              <motion.svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Zion Tech Group
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We are a team of passionate technologists dedicated to helping businesses 
                navigate the complex landscape of modern technology. With years of experience 
                in AI, cloud computing, and digital transformation, we deliver solutions 
                that drive real business value.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission is to empower organizations with cutting-edge technology 
                solutions that enable growth, efficiency, and innovation in an ever-evolving digital world.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'ISO 27001 & SOC 2 Type II Certified',
                  'Microsoft Gold Partner & AWS Advanced Partner',
                  'Expert Team with 15+ Years Experience'
                ].map((certification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {certification}
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-white font-bold text-3xl">Z</span>
                  </motion.div>
                  <p className="text-white/80 text-lg">Innovation • Excellence • Growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CTO, TechCorp',
                testimonial: 'Zion Tech Group transformed our infrastructure and helped us achieve 40% cost savings while improving performance.',
                avatar: 'J',
                color: 'blue'
              },
              {
                name: 'Sarah Johnson',
                role: 'CEO, InnovateLab',
                testimonial: 'Their AI solutions helped us automate 70% of our manual processes, saving us countless hours every week.',
                avatar: 'S',
                color: 'green'
              },
              {
                name: 'Mike Chen',
                role: 'VP Engineering, DataFlow',
                testimonial: 'The cybersecurity implementation was seamless and gave us peace of mind with our sensitive data.',
                avatar: 'M',
                color: 'purple'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-slate-700/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${testimonial.color}-500 rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition. Get a free consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Get Started Today
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-block"
              >
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm"
          >
            Free consultation • No commitment required • Response within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Keyboard Shortcuts Info */}
      <div className="fixed bottom-4 left-32 z-30 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 text-xs text-white/70">
        <div className="flex items-center space-x-2">
          <span>Alt + A:</span>
          <span>Accessibility</span>
          <span>•</span>
          <span>Alt + P:</span>
          <span>Performance</span>
        </div>
      </div>
    </>
  );
}
