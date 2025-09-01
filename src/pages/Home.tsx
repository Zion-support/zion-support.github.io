import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';'
import { motion, AnimatePresence } from 'framer-motion';'
import { Link } from 'react-router-dom';

import {

  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 

  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,

  Phone,
  Mail,
  MapPin,
  ChevronUp,
  MessageSquare,
  HelpCircle,
  Play,
  Pause'
} from 'lucide-react';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({

      id: i,
      left: `${Math.random() * 100}%`,`
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return()
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}"
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}"
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          style={{

            left: particle.left,
            top: particle.top
          }}
          animate={{

            y: [0, -20, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{

            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,"
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle gradient overlays */}"
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-900/10"></div>"
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10"></div>
    </div>
  );
});


// Floating Action Button Component
const FloatingActionButton = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {

        setIsVisible(true);
      } else {

        setIsVisible(false);
      }
    };
'
    window.addEventListener('scroll', toggleVisibility);'
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({

      top: 0,'
      behavior: 'smooth'
    });
  };

  return()
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}"
          className="fixed bottom-6 right-6 z-50"
        >"
          <div className="relative">
            {/* Expanded menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}"
                  className="absolute bottom-16 right-0 space-y-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"'
                    onClick={() => window.open('mailto:contact@ziontechgroup.com')}"
                    aria-label="Contact us via email"
                  >"
                    <Mail className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"'
                    onClick={() => window.open('tel:+15551234567')}"
                    aria-label="Call us"
                  >"
                    <Phone className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"'
                    onClick={() => window.open('/help', '_blank')}"
                    aria-label="Get help"
                  >"
                    <HelpCircle className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}"
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setIsExpanded(!isExpanded)}"
              aria-label="Quick actions menu"
            >
              {isExpanded ? ("
                <ChevronUp className="h-6 w-6" />
              ) : ("
                <MessageSquare className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
'
FloatingActionButton.displayName = 'FloatingActionButton';

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const heroSlides = [
    {
"
      title: "AI-Powered Innovation","
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions","
      description: "From autonomous research assistants to quantum computing platforms, we deliver the future of technology today.","
      cta: "Explore AI Solutions","
      link: "/services/ai-solutions",
      icon: Brain,"
      color: "from-purple-500 to-pink-500"
    },
    {
"
      title: "Quantum Computing Excellence","
      subtitle: "Unlock unprecedented computational power","
      description: "Harness the power of quantum mechanics to solve complex problems that were once impossible.","
      cta: "Discover Quantum","
      link: "/services/quantum-computing",
      icon: Atom,"
      color: "from-blue-500 to-cyan-500"
    },
    {
'
      name: 'AI Healthcare Analytics','
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,'
      href: '/services/ai-healthcare-analytics','
      color: 'from-green-600 to-emerald-600','
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization']
    }
  ], []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const serviceCategories = [
    {
'
      name: 'AI & Analytics',
      icon: Brain,'
      color: 'from-purple-600 to-pink-600',
      services: ['
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },'
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform' },'
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },'
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' }
      ]
    },
    {
'
      name: 'Cybersecurity',
      icon: Shield,"
      color: "from-red-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const heroStats = ['
    { label: 'AI Solutions', value: '50+', icon: Brain, description: 'Cutting-edge AI services' },'
    { label: 'Micro SaaS', value: '25+', icon: Rocket, description: 'Innovative products' },'
    { label: 'Enterprise Clients', value: '100+', icon: Building, description: 'Trusted partnerships' },'
    { label: 'Success Rate', value: '99%', icon: CheckCircle, description: 'Proven results' }
  ];

  return ("
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FuturisticBackground />
      "
      <div className="relative z-10 container mx-auto px-4 text-center">"
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}"
            className="max-w-5xl mx-auto"
          >`
            <div className={`w-24 h-24 bg-gradient-to-r ${heroSlides[currentSlide].color} rounded-3xl flex items-center justify-center mx-auto mb-8`}>"
              {React.createElement(heroSlides[currentSlide].icon, { className: "w-12 h-12 text-white" })}
            </div>
            "
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {heroSlides[currentSlide].title}
            </h1>
            "
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {heroSlides[currentSlide].subtitle}
            </h2>
            "
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            "
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={heroSlides[currentSlide].link}"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                {heroSlides[currentSlide].cta}
              </Link>
              <Link"
                to="/contact""
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}"
        <div className="flex justify-center mt-12 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}`
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
'
                index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/30'`
              }`}
            />
          ))}
        </div>

        {/* Enhanced Stats with animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}"
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {heroStats.map((stat, index) => (
            <motion.div 
              key={stat.label} "
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >"
              <div className="flex justify-center mb-3">"
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20">"
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
              </div>"
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>"
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide indicators */}"
        <div className="flex justify-center mt-8 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}`
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
'
                index === currentSlide ? 'bg-blue-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'`
              }`}`
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <button
            onClick={togglePlayPause}"
            className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"'
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >"
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};


// Features Section Component
const FeaturesSection = () => {
  const features = [
    {

      icon: Brain,"
      title: "AI & Machine Learning","
      description: "Cutting-edge artificial intelligence solutions that learn, adapt, and evolve with your business needs.","
      color: "from-purple-500 to-pink-500","
      link: "/services/ai-solutions"
    },
    {

      icon: Atom,"
      title: "Quantum Computing","
      description: "Revolutionary quantum algorithms and computing platforms for solving complex computational problems.","
      color: "from-blue-500 to-cyan-500","
      link: "/services/quantum-computing"
    },
    {

      icon: Shield,"
      title: "Cybersecurity","
      description: "Advanced security solutions with zero-trust architecture and real-time threat detection.","
      color: "from-red-500 to-orange-500","
      link: "/services/cybersecurity"
    },
    {

      icon: Cloud,"
      title: "Cloud Infrastructure","
      description: "Scalable cloud solutions designed for modern enterprise needs and digital transformation.","
      color: "from-green-500 to-emerald-500","
      link: "/services/cloud-infrastructure"
    },
    {

      icon: Lock,"
      title: "Blockchain & Web3","
      description: "Secure, decentralized solutions for the next generation of digital applications.","
      color: "from-indigo-500 to-purple-500","
      link: "/services/blockchain-web3"
    },
    {

      icon: Zap,"
      title: "Digital Transformation","
      description: "End-to-end digital transformation services to modernize your business operations.","
      color: "from-yellow-500 to-orange-500","
      link: "/services/digital-transformation"

    }
  ];

  return()
"
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">"
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}"
          className="text-center mb-16"
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

            Our Core Services
          </h2>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and accelerate your business growth
          </p>
        </motion.div>
"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}"
              className="group"
            >
              <Link to={feature.link}>"
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">`
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>"
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>"
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>"
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">"
                    <span className="font-medium">Learn More</span>"
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

// Stats Section Component
const StatsSection = () => {
  const stats = ["
    { number: "500+", label: "Projects Completed", icon: CheckCircle },"
    { number: "50+", label: "Team Members", icon: Users },"
    { number: "25+", label: "Countries Served", icon: Globe },"
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  return ("
    <section className="py-24 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800">"
      <div className="container mx-auto px-4">"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}"
              className="text-center"
            >"
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">"
                <stat.icon className="w-10 h-10 text-white" />
              </div>"
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>"
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return ("
    <section className="py-24 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">"
      <div className="container mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          transition={{ duration: 0.8 }}"
          className="max-w-4xl mx-auto"
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>"
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join hundreds of organizations that have already transformed their operations with our AI-powered solutions. '
            Let's discuss how we can help you achieve your technology goals.

          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link"
              to="/contact"
"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link"
              to="/services""
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"

            >
              Explore Services
            </Link>
          </div>

          {/* Contact Information */}"
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">"
            <div className="flex items-center justify-center space-x-3 text-gray-300">"
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>"
            <div className="flex items-center justify-center space-x-3 text-gray-300">"
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>"
            <div className="flex items-center justify-center space-x-3 text-gray-300">"
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

};

// Main Home component
export default function Home() {
  return()
        {/* Services Showcase */}
        <ServicesShowcase />

        {/* Micro SaaS Products */}
        <MicroSaaSProducts />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />

        {/* Floating Action Button */}
        <FloatingActionButton />
      </div>
    </>
  );
};

export default Home;

'"`