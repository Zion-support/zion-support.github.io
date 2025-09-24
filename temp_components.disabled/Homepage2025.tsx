import React, { useEffect, useState, useCallback } from 'react',
import Layout from './layout/Layout',
import UltraFuturisticServiceCard20o26 from './ui/UltraFuturisticServiceCard20o26',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {,
  ArrowRight, Star,;
  Brain, Atom, Shield, Zap,
} from 'lucide-react',
import { innovative20o25MicroSaasBatch } from '../data/innovative-20o25-micro-saas-batch',
,
interface Homepage20o25Props { showInternalNav?: boolean }
,
const Homepage20o25: React.FC<Homepage20o25Props> = ({ showInternalNav = true ,}) => {,
  const [activeSection, setActiveSection] = useState('hero'),
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0),
  const [isVisible, setIsVisible] = useState(false),
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
,
  useEffect(() => {,
    setIsVisible(true),
    const interval = setInterval(() => {,
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices20o25.length),
    }, 50o00),
    return () => clearInterval(interval),
  }, []),
,
  const scrollToSection = (sectionId: string) => {,
    const element = document.getElementById(sectionId),
    if (element) {,
      element.scrollIntoView({ behavior: 'smooth' ,}),
      setActiveSection(sectionId),
      setIsMobileMenuOpen(false),
    }
  };
,
  const allServices = [,
    ...innovativeRealMicroSaasServices20o25,;
    ...innovativeAIServicesEnhanced20o25,;
    ...innovativeITServicesEnhanced20o25,;
    ...emergingTechServicesEnhanced20o25,;
    ...advancedAIAutomationServices,;
    ...quantumCybersecurityServices,
  ],
,
  const featuredServices = allServices.filter(service => service.popular).slice(0, 12),
,
  const navigationSections = [,
    { id: 'hero', label: 'Home', icon: '🏠' ,},;
    { id: 'services', label: 'Micro SAAS', icon: '🚀' ,},;
    { id: 'ai', label: 'AI Services', icon: '🧠' ,},;
    { id: 'automation', label: 'AI Automation', icon: '⚡' ,},;
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' ,},;
    { id: 'it', label: 'IT Solutions', icon: '💻' ,},;
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' ,},;
    { id: 'contact', label: 'Contact', icon: '📞' ,}
  ],
,
  return (,
    <UltraFuturisticBackground20o26 intensity="medium" theme="quantum">,
      {showInternalNav && (,
      <>,
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="flex justify-between items-center h-16">,
            <motion.div,
              initial={{ opacity: 0, x: -20 ,}}
              animate={{ opacity: 1, x: 0 ,}}
              className="flex items-center space-x-2",
            >,
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-lg"></div>,
              <span className="text-white font-bold text-xl">ZionTech Group</span>,
            </motion.div>,
            {/* Desktop Navigation */}
            <div className="hidden lg: flex space-x-8">,
              {navigationSections.map((section) => (,
                <button,
                  key={section.id,}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-all duration-30o0 ${,
                    activeSection === section.id,
                      ? 'text-cyan-40o0 border-b-2 border-cyan-40o0',
                      : 'text-gray-30o0 hover: text-cyan-40o0',
                  ,}`}
                >,
                  <span>{section.icon}</span>,
                  <span>{section.label}</span>,
                </button>,
              ))}
            </div>,
            {/* Contact Info */}
            <motion.div,
              initial={{ opacity: 0, x: 20 ,}}
              animate={{ opacity: 1, x: 0 ,}}
              className="hidden md: flex items-center space-x-4",
            >,
              <a,
                href="tel:+130o24640950",
                className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors text-sm",
              >,
                +1 30o2 464 0950,
              </a>,
              <a,
                href="mailto:kleber@ziontechgroup.com",
                className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-4 py-2 rounded-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-30o0 text-sm",
              >,
                Contact Us,
              </a>,
            </motion.div>,
            {/* Mobile Menu Button */,}
            <button,
              className="lg: hidden text-white p-2",
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen),}
              aria-controls="mobile-navigation",
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >,
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"  />,
              </svg>,
            </button>,
          </div>,
          {/* Mobile Navigation Menu */}
          <AnimatePresence>,
            {isMobileMenuOpen && (,
              <motion.div,
                initial={{ opacity: 0, height: 0 ,}}
                animate={{ opacity: 1, height: 'auto' ,}}
                exit={{ opacity: 0, height: 0 ,}}
                className="lg: hidden border-t border-white/10",
                id="mobile-navigation",
              >,
                <div className="py-4 space-y-2">,
                  {navigationSections.map((section) => (,
                    <button,
                      key={section.id,}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-30o0 ${,
                        activeSection === section.id,
                          ? 'bg-cyan-40o0/20 text-cyan-40o0',
                          : 'text-gray-30o0 hover: bg-white/10',
                      ,}`}
                    >,
                      <span>{section.icon}</span>,
                      <span>{section.label}</span>,
                    </button>,
                  ))}
                  <div className="pt-4 border-t border-white/10">,
                    <a,
                      href="tel: +130o24640950",
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-40o0 hover:bg-white/10 rounded-lg transition-all duration-30o0",
                    >,
                      <span>📱</span>,
                      <span>+1 30o2 464 0950</span>,
                    </a>,
                    <a,
                      href="mailto:kleber@ziontechgroup.com",
                      className="flex items-center space-x-3 px-4 py-2 text-cyan-40o0 hover:bg-white/10 rounded-lg transition-all duration-30o0",
                    >,
                      <span>✉️</span>,
                      <span>kleber@ziontechgroup.com</span>,
                    </a>,
                  </div>,
                </div>,
              </motion.div>,
            ),}
          </AnimatePresence>,
        </div>,
      </nav>,
      </>,
      )}
,
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm: px-6 lg:px-8 pt-16">,
        <div className="text-center z-10 max-w-6xl mx-auto">,
          <motion.h1,
            initial={{ opacity: 0, y: 30 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight",
          >,
            The Future of,
            <span className="block bg-gradient-to-r from-cyan-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent">,
              Technology,
            </span>,
            is Here,
          </motion.h1>,
          <div className="text-center max-w-6xl mx-auto relative z-10">,
            <motion.div,
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity ,}}
              className="w-6 h-10 border-2 border-cyan-40o0 rounded-full flex justify-center",
            >,
              <motion.div,
                initial={{ opacity: 0, scale: 0.8 ,}}
                animate={{ opacity: 1, scale: 1 ,}}
                transition={{ duration: 0.6, delay: 0.2 ,}}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 rounded-full text-cyan-40o0 text-lg font-medium backdrop-blur-sm",
              >,
                <Star className="w-5 h-5"  />,
                <span>Innovation Leader 20o25</span>,
              </motion.div>,
              <h1 className="text-6xl md: text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
                Zion Tech Group,
              </h1>,
              <p className="text-2xl md:text-3xl text-gray-30o0 mb-10 max-w-3xl mx-auto leading-relaxed">,
                Pioneering the future of technology with innovative solutions that drive business transformation,
              </p>,
              {/* Enhanced CTA Section */,}
              <motion.div,
                variants={itemVariants}
                className="flex flex-col sm: flex-row gap-4 justify-center mb-8",
              >,
                <Link href="/get-started" aria-label="Get started with our services">,
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25 focus:outline-none focus:ring-2 focus:ring-cyan-30o0 focus:ring-offset-2 focus:ring-offset-black">,
                    <span className="flex items-center gap-2">,
                      Get Started,
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"  />,
                    </span>,
                  </button>,
                </Link>,
                <Link href="/comprehensive-20o25-innovative-services-showcase">,
                  <button className="px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                    20o25 Innovative Services,
                  </button>,
                </Link>,
                <Link href="/comprehensive-20o25-services-showcase">,
                  <button className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                    20o25 Services Showcase,
                  </button>,
                </Link>,
              </div>,
              {/* Trust Indicators */,}
              <motion.div,
                initial={{ opacity: 0, y: 20 ,}}
                animate={{ opacity: 1, y: 0 ,}}
                transition={{ duration: 0.8, delay: 0.4 ,}}
                className="flex items-center justify-center space-x-6 text-sm text-gray-40o0",
              >,
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
        </section>,
        {/* Features Section */}
        <section className="py-20 px-4 relative">,
          <div className="max-w-7xl mx-auto">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}}
              className="text-center mb-20",
            >,
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
                Comprehensive Technology Solutions,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.,
              </p>,
            </motion.div>,
            <motion.div,
              className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              variants={staggerContainer,}
              initial="initial",
              whileInView="animate",
              viewport={{ once: true ,}}
              className="grid grid-cols-2 md: grid-cols-4 gap-8 text-center",
            >,
              <Suspense fallback={,
                <div className="h-80 bg-gray-80o0/50 rounded-2xl animate-pulse flex items-center justify-center">,
                  <div className="text-gray-40o0">Loading...</div>,
                </div>,
              ,}>,
                <UltraFuturisticServiceCard20o26,
                  service={{,
                    id: 'ai-ml',;
                    name: 'AI & Machine Learning',;
                    tagline: 'Advanced artificial intelligence solutions',;
                    description: 'Revolutionary AI and machine learning solutions that transform how businesses operate, make decisions, and serve customers',;
                    price: '$999',;
                    period: 'month',;
                    features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics'],;
                    popular: true,;
                    category: 'AI',;
                    icon: '🧠',
                  ,}}
                  variant="ai",
                 />,
              </Suspense>,
              <Suspense fallback={,
                <div className="h-80 bg-gray-80o0/50 rounded-2xl animate-pulse flex items-center justify-center">,
                  <div className="text-gray-40o0">Loading...</div>,
                </div>,
              }>,
                <UltraFuturisticServiceCard20o26,
                  key={service.id}
                  service={service}
                  variant={service.category.includes('AI') ? 'ai' :,
                          service.category.includes('Quantum') ? 'quantum' :,
                          service.category.includes('Space') ? 'space' :,
                          service.category.includes('Cybersecurity') ? 'cybersecurity' : 'default'}
                 />,
              ))}
            </div>,
            {/* View All Services CTA */}
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.4 ,}}
              viewport={{ once: true ,}}
              className="text-center mt-12 space-y-4",
            >,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/innovative-20o36-services-showcase">,
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-lg hover:from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5 flex items-center gap-2 shadow-lg shadow-purple-50o0/25">,
                    <Star className="w-5 h-5"  />,
                    Innovative 20o36 Services,
                    <ArrowRight className="w-5 h-5"  />,
                  </button>,
                </Link>,
                <Link href="/services">,
                  <button className="px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                    View All Services,
                  </button>,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
              <Suspense fallback={,
                <div className="h-80 bg-gray-80o0/50 rounded-2xl animate-pulse flex items-center justify-center">,
                  <div className="text-gray-40o0">Loading...</div>,
                </div>,
              ,}>,
                <UltraFuturisticServiceCard20o26,
                  service={{,
                    id: 'process-automation',;
                    name: 'Process Automation',;
                    tagline: 'Intelligent automation solutions',;
                    description: 'Intelligent automation that streamlines operations, reduces costs, and enhances productivity across your organization',;
                    price: '$799',;
                    period: 'month',;
                    features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics', 'Process Mining'],;
                    popular: true,;
                    category: 'Automation',;
                    icon: '⚡',
                  ,}}
                  variant="automation",
                 />,
              </Suspense>,
              <Suspense fallback={,
                <div className="h-80 bg-gray-80o0/50 rounded-2xl animate-pulse flex items-center justify-center">,
                  <div className="text-gray-40o0">Loading...</div>,
                </div>,
              }>,
                <UltraFuturisticServiceCard20o26,
                  service={{,
                    id: 'quantum-security',;
                    name: 'Quantum Security',;
                    tagline: 'Future-proof security solutions',;
                    description: 'Quantum-secure infrastructure and post-quantum cryptography to protect against future quantum threats',;
                    price: '$2999',;
                    period: 'month',;
                    features: ['Post-Quantum Crypto', 'Quantum Key Distribution', 'Zero Trust', 'Compliance'],;
                    popular: true,;
                    category: 'Security',;
                    icon: '🔐',
                  ,}}
                  variant="it",
                 />,
              </Suspense>,
            </motion.div>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {features.map((feature, index) => (,
                <motion.div,
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8",
                  initial={{ opacity: 0, y: 40 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.6, delay: index * 0.1 ,}}
                  viewport={{ once: true ,}}
                  whileHover={{ y: -10, scale: 1.0o2 ,}}
                >,
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-blue-50o0/5 opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0"  />,
                  <div className="relative">,
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50o0 to-blue-60o0 p-3 mb-6">,
                      <feature.icon className="w-full h-full text-white"  />,
                    </div>,
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title,}</h3>,
                    <p className="text-gray-30o0 leading-relaxed">{feature.description}</p>,
                  </div>,
                </motion.div>,
              ))}
            </div>,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.2 ,}}
              viewport={{ once: true ,}}
              className="text-center mt-12",
            >,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <Link href="/comprehensive-20o36-services-showcase">,
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-lg hover:from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5 flex items-center gap-2">,
                    <Star className="w-5 h-5"  />,
                    20o36 Services Showcase,
                    <ArrowRight className="w-5 h-5"  />,
                  </button>,
                </Link>,
                <Link href="/services">,
                  <button className="px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5 flex items-center gap-2">,
                    View All Services,
                    <ArrowRight className="w-5 h-5"  />,
                  </button>,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Enhanced Services Preview */,}
        <section className="py-20 px-4">,
          <div className="max-w-6xl mx-auto">,
            <motion.div,
              className="text-center mb-16",
              initial={{ opacity: 0, y: 40 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,
                Our Revolutionary 20o25 Services,
              </h2>,
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">,
                From AI-powered autonomous systems to quantum computing solutions, we're building the future today,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {[,
                { title: "AI Content Autonomy", description: "Fully autonomous content creation and management", icon: Brain, color: "from-purple-50o0 to-pink-50o0", link: "/innovative-20o25-services-showcase" ,},;
                { title: "Quantum Cloud Hybrid", description: "Seamless quantum-classical computing integration", icon: Cpu, color: "from-cyan-50o0 to-blue-50o0", link: "/innovative-20o25-services-showcase" ,},;
                { title: "Cyber Immune Security", description: "Self-defending systems that adapt to threats", icon: Shield, color: "from-red-50o0 to-orange-50o0", link: "/innovative-20o25-services-showcase" ,},;
                { title: "Edge Intelligence", description: "Distributed AI processing at the edge", icon: Cloud, color: "from-emerald-50o0 to-teal-50o0", link: "/innovative-20o25-services-showcase" ,},;
                { title: "AI Research Scout", description: "Intelligent research automation and discovery", icon: BarChart3, color: "from-indigo-50o0 to-purple-50o0", link: "/innovative-20o25-services-showcase" ,},;
                { title: "Autonomous DevOps", description: "Self-healing infrastructure with zero downtime", icon: Lock, color: "from-yellow-50o0 to-orange-50o0", link: "/innovative-20o25-services-showcase" ,}
              ].map((service, index) => (,
                <motion.div,
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer",
                  initial={{ opacity: 0, y: 40 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.6, delay: index * 0.1 ,}}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer",
                  whileHover={{ y: -10, scale: 1.0o2 ,}}
                  onClick={() => window.location.href = service.href}
                >,
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover: opacity-10 transition-opacity duration-30o0`,}  />,
                  <div className="relative p-6">,
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>,
                      <service.icon className="w-full h-full text-white" aria-hidden="true"  />,
                    </div>,
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>,
                    <p className="text-gray-30o0 leading-relaxed mb-4">{service.description}</p>,
                    <a href={service.link} className="flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors">,
                      <span className="text-sm font-medium">Explore Service</span>,
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />,
                    </a>,
                  </div>,
                </motion.div>,
              )),}
            </div>,
            {/* Call to Action for Services Showcase */}
            <motion.div,
              className="text-center mt-16",
              initial={{ opacity: 0, y: 40 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6, delay: 0.3 ,}}
              viewport={{ once: true ,}}
            >,
              <a,
                href="/innovative-20o25-services-showcase",
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-xl hover: from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-purple-50o0/25",
              >,
                <Rocket className="w-5 h-5 mr-2"  />,
                View All 20o25 Services,
                <ArrowRight className="w-5 h-5 ml-2"  />,
              </a>,
            </motion.div>,
          </div>,
        </section>,
        {/* Enhanced CTA Section */,}
        <section className="py-20 px-4" aria-labelledby="cta-heading">,
          <div className="max-w-4xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}}
              className="space-y-8",
            >,
              <h2 className="text-4xl md: text-5xl font-bold bg-gradient-to-r from-cyan-40o0 to-purple-50o0 bg-clip-text text-transparent">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">,
                Get in touch with our team to discuss how our innovative services can drive your success,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <a,
                  href="tel:+130o24640950",
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25 flex items-center justify-center space-x-2",
                >,
                  <Zap className="w-5 h-5"  />,
                  <span>Call Now: +1 30o2 464 0950</span>,
                </a>,
                <a,
                  href="mailto:kleber@ziontechgroup.com",
                  className="px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5",
                >,
                  Email Us,
                </a>,
              </div>,
              <div className="text-sm text-gray-40o0">,
                <p>Address: 364 E Main St STE 10o08, Middletown DE 19709</p>,
                <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-40o0 hover:text-cyan-30o0">https://ziontechgroup.com</a></p>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Service Categories Section */,}
        <section,
          className="py-24 px-4 relative",
          aria-labelledby="categories-heading",
        >,
          <div className="max-w-7xl mx-auto">,
            <motion.div,
              className="text-center mb-20",
              initial={{ opacity: 0, y: 40 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              viewport={{ once: true ,}}
              transition={{ duration: 0.6 ,}}
            >,
              <h2,
                id="categories-heading",
                className="text-4xl md: text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent",
              >,
                Our Service Categories,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Comprehensive solutions across all major technology domains,
              </p>,
            </motion.div>,
            <motion.div,
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              variants={staggerContainer,}
              initial="initial",
              whileInView="animate",
              viewport={{ once: true ,}}
            >,
              {[,
                {,
                  icon: '🧠',;
                  title: "AI & Machine Learning",;
                  description: "Advanced artificial intelligence solutions for business transformation",;
                  services: "50+ AI Services",;
                  color: "from-cyan-50o0 to-blue-60o0",
                ,},;
                {,
                  icon: '⚛️',;
                  title: "Quantum Technology",;
                  description: "Breakthrough quantum computing and quantum-secure solutions",;
                  services: "25+ Quantum Services",;
                  color: "from-purple-50o0 to-pink-60o0",
                ,},;
                {,
                  icon: '🛡️',;
                  title: "Cybersecurity",;
                  description: "Enterprise-grade security and compliance solutions",;
                  services: "40+ Security Services",;
                  color: "from-red-50o0 to-orange-60o0",
                ,},;
                {,
                  icon: '🌐',;
                  title: "IT Infrastructure",;
                  description: "Scalable and secure enterprise infrastructure solutions",;
                  services: "35+ Infrastructure Services",;
                  color: "from-green-50o0 to-emerald-60o0",
                ,},;
                {,
                  icon: '📱',;
                  title: "Micro SAAS",;
                  description: "Innovative business solutions for modern enterprises",;
                  services: "60+ Micro SAAS Services",;
                  color: "from-yellow-50o0 to-amber-60o0",
                ,},;
                {,
                  icon: '🚀',;
                  title: "Emerging Tech",;
                  description: "Cutting-edge technologies for future-ready businesses",;
                  services: "30+ Emerging Tech Services",;
                  color: "from-indigo-50o0 to-violet-60o0",
                ,}
              ].map((category, index) => (,
                <motion.div,
                  key={index}
                  className="group p-8 rounded-2xl bg-gray-80o0/30 backdrop-blur-sm border border-gray-70o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5 cursor-pointer",
                  variants={fadeInUp,}
                  whileHover={{ y: -10 ,}}
                >,
                  <div className="mb-6 flex justify-center">,
                    <div className={`text-6xl group-hover: scale-110 transition-transform duration-30o0`,}>,
                      {category.icon}
                    </div>,
                  </div>,
                  <h3 className="text-2xl font-bold mb-3 text-white text-center">{category.title}</h3>,
                  <p className="text-gray-30o0 text-center mb-4">{category.description}</p>,
                  <div className={`text-center text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>,
                    {category.services}
                  </div>,
                </motion.div>,
              ))}
            </motion.div>,
          </div>,
        </section>,
      </main>,
      {/* Video Modal */}
      <AnimatePresence>,
        {isVideoModalOpen && (,
          <motion.div,
            initial={{ opacity: 0 ,}}
            animate={{ opacity: 1 ,}}
            exit={{ opacity: 0 ,}}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            onClick={() => setIsVideoModalOpen(false)}
          >,
            <motion.div,
              initial={{ scale: 0.9, opacity: 0 ,}}
              animate={{ scale: 1, opacity: 1 ,}}
              exit={{ scale: 0.9, opacity: 0 ,}}
              className="relative w-full max-w-4xl aspect-video bg-gray-90o0 rounded-2xl overflow-hidden",
              onClick={(e) => e.stopPropagation()}
            >,
              <button,
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover: bg-black/70 rounded-full transition-colors",
                aria-label="Close video modal",
              >,
                <X className="w-6 h-6 text-white"  />,
              </button>,
              <div className="w-full h-full flex items-center justify-center">,
                <div className="text-center text-white">,
                  <Play className="w-20 h-20 mx-auto mb-4 text-cyan-40o0"  />,
                  <p className="text-xl">Company Overview Video</p>,
                  <p className="text-gray-40o0 mt-2">Video content would be embedded here</p>,
                </div>,
              </div>,
            </motion.div>,
          </motion.div>,
        ),}
      </AnimatePresence>,
    </Layout>,
  ),
}),
,
Homepage20o25.displayName = 'Homepage20o25',
,
export default Homepage20o25,