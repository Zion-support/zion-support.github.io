import { AnimatePresence, motion } from 'framer-motion',
import {
import Link from 'next/link',
import React, { useEffect, useState } from 'react',
import { advancedAIAutomationServices20o26 as advancedAIAutomationServices } from '../data/20o26-advanced-ai-automation-services',
import { advancedCybersecurityServices20o26 as advancedCybersecurityServices } from '../data/20o26-advanced-cybersecurity-services',
import { emergingTechServices20o26 } from '../data/20o26-emerging-tech-services',
import { innovativeMicroSaasServices20o26 } from '../data/20o26-innovative-micro-saas-expansion',
import { specializedITSolutions20o26 } from '../data/20o26-specialized-it-solutions',
import UltraFuturisticBackground20o26 from './backgrounds/UltraFuturisticBackground20o26',
"use client",
  ArrowRight;
  Atom;
  BarChart3;
  Brain;
  Cloud;
  Globe;
  Lock;
  Rocket;
  Shield;
  Star;
  TrendingUp;
  Users;
  Zap} from 'lucide-react',
  emergingTechServicesEnhanced20o25} from '../data/20o25-emerging-tech-services-enhanced',
  innovativeAIServicesEnhanced20o25} from '../data/20o25-innovative-ai-services-enhanced',
  innovativeITServicesEnhanced20o25} from '../data/20o25-innovative-it-services-enhanced',
  innovativeRealMicroSaasServices20o25} from '../data/20o25-innovative-real-micro-saas-services',
interface Homepage20o25Props { showInternalNav?: boolean }
,
const Homepage20o25: React.FC<Homepage20o25Props> = ({ showInternalNav = true }) => {
  const [activeSection, setActiveSection] = useState('hero'),
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0),
  const [isVisible, setIsVisible] = useState(false),
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
  useEffect(() => {
    setIsVisible(true),
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices20o25.length)}, 50o00),
    return () => clearInterval(interval)}, []),
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId),
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }),
      setActiveSection(sectionId),
      setIsMobileMenuOpen(false)}
  };
  const allServices = [
    ...innovativeRealMicroSaasServices20o25;
    ...innovativeAIServicesEnhanced20o25;
    ...innovativeITServicesEnhanced20o25;
    ...emergingTechServicesEnhanced20o25;
    ...advancedAIAutomationServices;
    ...advancedCybersecurityServices;
    ...innovativeMicroSaasServices20o26;
    ...specializedITSolutions20o26;
    ...emergingTechServices20o26],
  const featuredServices = allServices.filter(service => service.popular).slice(0, 12),
  const latestInsights = [
    {
      title: 'GenAI for Regulated Industries (20o25)';
      href: '/blog/genai-20o25-practical-compliance-patterns';
      tag: 'Compliance';
      gradient: 'from-emerald-50o0 to-cyan-50o0'};
    {
      title: 'Agentic CRM: Autonomous Revenue Workflows';
      href: '/blog/agentic-crm-autonomous-revenue-workflows-20o25';
      tag: 'RevOps';
      gradient: 'from-fuchsia-50o0 to-indigo-50o0'};
    {
      title: 'AI 20o26: Real-Time Retrieval Architectures';
      href: '/blog/ai-20o26-real-time-retrieval-architectures';
      tag: 'Article';
      gradient: 'from-purple-50o0 to-blue-50o0'};
    {
      title: 'AI 20o26: Autonomous Ops Playbook';
      href: '/content/ai-20o26-autonomous-ops-playbook';
      tag: 'Playbook';
      gradient: 'from-cyan-50o0 to-blue-60o0'}
  ],
  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' };
    { id: 'services', label: 'Micro SAAS', icon: '🚀' };
    { id: 'ai', label: 'AI Services', icon: '🧠' };
    { id: 'automation', label: 'AI Automation', icon: '⚡' };
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' };
    { id: 'it', label: 'IT Solutions', icon: '💻' };
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' };
    { id: 'contact', label: 'Contact', icon: '📞' }
  ],
  const features = [
    {
      title: "AI-Powered Innovation";
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth";
      icon: Brain};
    {
      title: "Quantum Computing";
      description: "Next-generation quantum solutions for complex problem-solving and advanced cryptography";
      icon: Atom};
    {
      title: "Cybersecurity Excellence";
      description: "Enterprise-grade security solutions with AI-powered threat detection and response";
      icon: Shield};
    {
      title: "Process Automation";
      description: "Intelligent automation that streamlines operations and enhances productivity";
      icon: Zap}
  ],
  const itemVariants ={
    initial: { opacity: 0, y: 20 };
    animate: { opacity: 1, y: 0 };
    transition: { duration: 0.6 }
  };
  const staggerContainer ={
    initial: {};
    animate: {
      transition: {
        staggerChildren: 0.1}
    }
  };
  return (
    <UltraFuturisticBackground20o26 intensity="medium" theme="quantum">,
      {showInternalNav && (
        <>,
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">,
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
              <div className="flex justify-between items-center h-16">,
                <motion.div,
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2">,
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-lg"></div>,
                  <span className="text-white font-bold text-xl">ZionTech Group</span>,
                </motion.div>,
                {/* Desktop Navigation */}
                <div className="hidden lg: flex space-x-8">,
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-2 text-sm font-medium transition-all duration-30o0 ${
                        activeSection === section.id,
                          ? 'text-cyan-40o0 border-b-2 border-cyan-40o0',
                          : 'text-gray-30o0 hover: text-cyan-40o0'}`}
                    >,
                      <span>{section.icon}</span>,
                      <span>{section.label}</span>,
                    </button>))}
                </div>,
                {/* Contact Info */}
                <motion.div,
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden md: flex items-center space-x-4">,
                  <a
                    href="tel:+130o24640950",
                    className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors text-sm">,
                    +1 30o2 464 0950,
                  </a>,
                  <a
                    href="mailto:kleber@ziontechgroup.com",
                    className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-4 py-2 rounded-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-30o0 text-sm">,
                    Contact Us,
                  </a>,
                </motion.div>,
                {/* Mobile Menu Button */}
                <button
                  className="lg: hidden text-white p-2",
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >,
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"  />,
                  </svg>,
                </button>,
              </div>,
              {/* Mobile Navigation Menu */}
              <AnimatePresence>,
                {isMobileMenuOpen && (
                  <motion.div,
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg: hidden border-t border-white/10">,
                    <div className="py-4 space-y-2">,
                      {navigationSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-30o0 ${
                            activeSection === section.id,
                              ? 'bg-cyan-40o0/20 text-cyan-40o0',
                              : 'text-gray-30o0 hover: bg-white/10'}`}
                        >,
                          <span>{section.icon}</span>,
                          <span>{section.label}</span>,
                        </button>))}
                      <div className="pt-4 border-t border-white/10">,
                        <a
                          href="tel: +130o24640950",
                          className="flex items-center space-x-3 px-4 py-2 text-cyan-40o0 hover:bg-white/10 rounded-lg transition-all duration-30o0">,
                          <span>📱</span>,
                          <span>+1 30o2 464 0950</span>,
                        </a>,
                        <a
                          href="mailto:kleber@ziontechgroup.com",
                          className="flex items-center space-x-3 px-4 py-2 text-cyan-40o0 hover:bg-white/10 rounded-lg transition-all duration-30o0">,
                          <span>✉️</span>,
                          <span>kleber@ziontechgroup.com</span>,
                        </a>,
                      </div>,
                    </div>,
                  </motion.div>)}
              </AnimatePresence>,
            </div>,
          </nav>,
        </>)}
,
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm: px-6 lg:px-8 pt-16">,
        <div className="text-center z-10 max-w-6xl mx-auto">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto relative z-10">,
            <motion.div,
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-40o0 rounded-full flex justify-center">,
              <motion.div,
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 rounded-full text-cyan-40o0 text-lg font-medium backdrop-blur-sm">,
                <Star className="w-5 h-5"  />,
                <span>Innovation Leader 20o25-20o26</span>,
              </motion.div>,
              <h1 className="text-6xl md: text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
                Zion Tech Group,
              </h1>,
              <p className="text-2xl md:text-3xl text-gray-30o0 mb-10 max-w-3xl mx-auto leading-relaxed">,
                Pioneering the future of technology with innovative solutions that drive business transformation,
              </p>,
              {/* Enhanced CTA Section */}
              <motion.div,
                variants={itemVariants}
                className="flex flex-col sm: flex-row gap-4 justify-center mb-8">,
                <Link href="/comprehensive-services-showcase-20o26">,
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25">,
                    <span className="flex items-center gap-2">,
                      Explore 20o26 Services,
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"  />,
                    </span>,
                  </button>,
                </Link>,
                <Link href="/comprehensive-services-showcase-20o25">,
                  <button className="px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                    20o25 Services Showcase,
                  </button>,
                </Link>,
                <Link href="/get-started">,
                  <button className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                    Get Started,
                  </button>,
                </Link>,
              </motion.div>,
              {/* Trust Indicators */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-40o0">,
                <div className="flex items-center space-x-2">,
                  <Shield className="w-4 h-4 text-green-40o0"  />,
                  <span>Enterprise Security</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <Globe className="w-4 h-4 text-blue-40o0"  />,
                  <span>Global Reach</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <TrendingUp className="w-4 h-4 text-purple-40o0"  />,
                  <span>Proven Results</span>,
                </div>,
              </motion.div>,
            </motion.div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Latest Insights */}
      <section className="py-20 px-4">,
        <div className="max-w-7xl mx-auto">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-8">,
            <div>,
              <h2 className="text-3xl md: text-4xl font-bold text-white">Latest Insights</h2>,
              <p className="text-gray-30o0 mt-2">New guides and blueprints from our experts</p>,
            </div>,
            <Link href="/blog" className="text-cyan-40o0 hover:text-cyan-30o0">View all</Link>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">,
            {latestInsights.map((post, index) => (
              <motion.a,
                key={post.href}
                href={post.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.0o5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6">,
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover: opacity-10 transition-opacity duration-30o0`}  />,
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-cyan-30o0">,
                  <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10">{post.tag}</span>,
                </div>,
                <h3 className="mt-4 text-lg font-semibold text-white group-hover: text-cyan-30o0 transition-colors">,
                  {post.title}
                </h3>,
                <span className="mt-4 inline-flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 text-sm">,
                  Read more,
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"  />,
                </span>,
              </motion.a>))}
          </div>,
        </div>,
      </section>,
      {/* Features Section */}
      <section className="py-20 px-4 relative">,
        <div className="max-w-7xl mx-auto">,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20">,
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Comprehensive Technology Solutions,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
              From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">,
            {features.map((feature, index) => (
              <motion.div,
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8",
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.0o2 }}
              >,
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-blue-50o0/5 opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0"  />,
                <div className="relative">,
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50o0 to-blue-60o0 p-3 mb-6">,
                    <feature.icon className="w-full h-full text-white"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>,
                  <p className="text-gray-30o0 leading-relaxed">{feature.description}</p>,
                </div>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Enhanced Services Preview */}
      <section className="py-20 px-4">,
        <div className="max-w-6xl mx-auto">,
          <motion.div,
            className="text-center mb-16",
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,
              Our Revolutionary 20o26 Services,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
              From AI-powered business intelligence to quantum computing and emerging technologies, we're building the future today,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {[
              { title: "AI Business Intelligence", description: "Transform data into actionable insights with AI-powered analytics", icon: Brain, gradient: "from-purple-50o0 to-pink-50o0", link: "/comprehensive-services-showcase-20o26" };
              { title: "Cloud Infrastructure", description: "Automate cloud infrastructure deployment and management", icon: Cloud, gradient: "from-cyan-50o0 to-blue-50o0", link: "/comprehensive-services-showcase-20o26" };
              { title: "Cybersecurity Intelligence", description: "Advanced threat detection and response with AI", icon: Shield, gradient: "from-red-50o0 to-orange-50o0", link: "/comprehensive-services-showcase-20o26" };
              { title: "Data Engineering", description: "Streamline data pipelines and analytics with AI", icon: BarChart3, gradient: "from-emerald-50o0 to-teal-50o0", link: "/comprehensive-services-showcase-20o26" };
              { title: "Quantum Computing", description: "Access quantum computing power through the cloud", icon: Atom, gradient: "from-indigo-50o0 to-purple-50o0", link: "/comprehensive-services-showcase-20o26" };
              { title: "Blockchain Intelligence", description: "Intelligent blockchain analytics and DeFi optimization", icon: Lock, gradient: "from-yellow-50o0 to-orange-50o0", link: "/comprehensive-services-showcase-20o26" }
            ].map((service, index) => (
              <motion.div,
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer",
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.0o2 }}
                onClick={() => window.location.href = service.link}
              >,
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover: opacity-10 transition-opacity duration-30o0`}  />,
                <div className="relative p-6">,
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>,
                    <service.icon className="w-full h-full text-white"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>,
                  <p className="text-gray-30o0 leading-relaxed mb-4">{service.description}</p>,
                  <a href={service.link} className="flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors">,
                    <span className="text-sm font-medium">Explore Service</span>,
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />,
                  </a>,
                </div>,
              </motion.div>))}
          </div>,
          {/* Call to Action for Services Showcase */}
          <motion.div,
            className="text-center mt-16",
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >,
            <a
              href="/comprehensive-services-showcase-20o26",
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-xl hover: from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-purple-50o0/25">,
              <Rocket className="w-5 h-5 mr-2"  />,
              View All 20o26 Services,
              <ArrowRight className="w-5 h-5 ml-2"  />,
            </a>,
          </motion.div>,
        </div>,
      </section>,
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">,
        <div className="max-w-6xl mx-auto">,
          <motion.div,
            className="text-center mb-16",
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >,
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,
              Ready to Transform Your Business?,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
              Get in touch with our team to discuss how our innovative services can help you achieve your goals.,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">,
            <div className="text-center">,
              <div className="w-16 h-16 bg-cyan-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">,
                <Users className="w-8 h-8 text-cyan-40o0"  />,
              </div>,
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>,
              <p className="text-gray-30o0 text-sm">Dedicated professionals ready to help</p>,
            </div>,
            <div className="text-center">,
              <div className="w-16 h-16 bg-blue-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">,
                <Zap className="w-8 h-8 text-blue-40o0"  />,
              </div>,
              <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>,
              <p className="text-gray-30o0 text-sm">Quick setup and deployment</p>,
            </div>,
            <div className="text-center">,
              <div className="w-16 h-16 bg-purple-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">,
                <Shield className="w-8 h-8 text-purple-40o0"  />,
              </div>,
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>,
              <p className="text-gray-30o0 text-sm">Round-the-clock assistance</p>,
            </div>,
          </div>,
          <motion.div,
            className="text-center",
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <a
                href="mailto:kleber@ziontechgroup.com",
                className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0">,
                Email Us,
              </a>,
              <a
                href="tel:+130o24640950",
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-30o0">,
                Call Us,
              </a>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">,
        <div className="max-w-6xl mx-auto text-center">,
          <div className="text-gray-40o0 mb-4">,
            <p>© 20o25-20o26 ZionTech Group. All rights reserved.</p>,
            <p className="mt-2">,
              Address: 364 E Main St STE 10o08 Middletown DE 19709 |,
              Phone: +1 30o2 464 0950 |,
              Email: kleber@ziontechgroup.com,
            </p>,
          </div>,
          <div className="flex justify-center space-x-6">,
            <a href="/comprehensive-services-showcase-20o26" className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">,
              20o26 Services,
            </a>,
            <a href="/comprehensive-services-showcase-20o25" className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">,
              20o25 Services,
            </a>,
            <a href="https://ziontechgroup.com" className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">,
              Website,
            </a>,
          </div>,
        </div>,
      </footer>,
    </UltraFuturisticBackground20o26>)};
export default Homepage20o25;