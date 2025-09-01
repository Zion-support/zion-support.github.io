import { Link  } from 'react-router-dom';
 from 'react';
export default function Home () {}
export default Home;
import { motion, AnimatePresence  } from 'framer-motion';

import {}
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
  Pause''
} from 'lucide-react';

// Optimized futuristic animated background component;
const FuturisticBackground: any = React.memo(() => {}
  const particles: any = useMemo(() =>
    [...Array(20) ].map((_, i) => ({}
      id: i,
      left: `${Math.random () * 100}%`,
      top: `${Math.random () * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3;
    }) ) , []) ;

  return (<div  className="fixed inset - 0 overflow-hidden pointer - events -none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div  className="absolute inset - 0 bg-[linear - gradient (rgba (6,182,212,0.15) _1px,transparent_1px) ,linear - gradient(90deg,rgba (6,182,212,0.15) _1px,transparent_1px) ] bg-[size:50px_50px] animate -pulse"></div>

  return()
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">""
      {/* Animated grid with neon effect */}"""
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div""
          key={particle.id}"""
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50""
          style={{}
            left: particle.left,
            top: particle.top;
          }}
          animate={{}
            y: [0, -20, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{}
            duration: particle.duration,
            delay: particle.delay,""
            repeat: Infinity,"""
            ease: "easeInOut""
          }}
        />) ) }
""
      {/* Subtle gradient overlays */}"""
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-900/10"></div>"""
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10"></div>
    </div>
  )});

// Floating Action Button Component;
const FloatingActionButton: any = React.memo(() => {}
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [isExpanded, setIsExpanded] = useState (false) ;

  useEffect ( () => {}
      } else {}
        setIsVisible(false) ;
      }
    };
'
    window.addEventListener('scroll', toggleVisibility);'
    return () => window.removeEventListener('scroll', toggleVisibility)}, [])};

  const scrollToTop: any = () => {}
    window.scrollTo({}
      top: 0,
      behavior: 'smooth'
    }) ;
  };

  return (<AnimatePresence>
      {isVisible && (<motion.div;
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}""
          exit={{ opacity: 0, scale: 0 }}"""
          className="fixed bottom-6 right-6 z-50"""
        >"""
          <div className="relative">
            {/* Expanded menu */}
            <AnimatePresence>
              {isExpanded && (<motion.div;
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}""
                  exit={{ opacity: 0, y: 20 }}"""
                  className="absolute bottom-16 right-0 space-y-2""
                >
                  <motion.button;
                    whileHover={{ scale: 1.1 }}""
                    whileTap={{ scale: 0.9 }}"'""
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"''""
                    onClick={() => window.open('mailto:contact@ziontechgroup.com')}"""
                    aria-label="Contact us via email"""
                  >"""
                    <Mail className="h-5 w-5"  />
                  </motion.button>
                  <motion.button;
                    whileHover={{ scale: 1.1 }}""
                    whileTap={{ scale: 0.9 }}"'""
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"''""
                    onClick={() => window.open('tel:+15551234567')}"""
                    aria-label="Call us"""
                  >"""
                    <Phone className="h-5 w-5"  />
                  </motion.button>
                  <motion.button;
                    whileHover={{ scale: 1.1 }}""
                    whileTap={{ scale: 0.9 }}"'""
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"''""
                    onClick={() => window.open('/help',_blank')}"""
                    aria-label="Get help"""
                  >"""
                    <HelpCircle className="h-5 w-5"  />
                  </motion.button>
                </motion.div>) }
            </AnimatePresence>

            {/* Main FAB */}
            <motion.button;
              whileHover={{ scale: 1.1 }}""
              whileTap={{ scale: 0.9 }}"""
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"""
              onClick={() => setIsExpanded(!isExpanded)}"""
              aria-label="Quick actions menu""
            >""
              {isExpanded ? ("""
                <ChevronUp className="h-6 w-6"  />""
              ) : ("""
                <MessageSquare className="h-6 w-6"  />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )});
'
FloatingActionButton.displayName = 'FloatingActionButton';

// Enhanced hero section component;
const HeroSection: any = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {}
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides: any = [{}
      title: "AI - Powered Innovation",
      subtitle: "Transform your business with cutting - edge artificial intelligence solutions",
      description: "From autonomous research assistants to quantum computing platforms, we deliver the future of technology today.",
      cta: "Explore AI Solutions",
      link: "/services / ai - solutions",
      icon: Brain,
      color: "from - purple - 500 to - pink - 500""
    },
    {}
      title: "Quantum Computing Excellence",
      subtitle: "Unlock unprecedented computational power",
      description: "Harness the power of quantum mechanics to solve complex problems that were once impossible.",
      cta: "Discover Quantum",
      link: "/services / quantum - computing",
      icon: Atom,
      color: "from - blue - 500 to - cyan - 500""
    },
    {}
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services / ai - healthcare - analytics',
      color: 'from - green - 600 to - emerald - 600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization']
    }
  ], []) ;

  // Auto - advance slides;
  useEffect(() => {}
    if(!isPlaying) return;

    return () => clearInterval (interval) }, [isPlaying, heroSlides.length]) ;

  useEffect ( () => {}
    }, 5000) ;

  ""
  return ("""
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FuturisticBackground  />""
      """
      <div className="relative z-10 container mx-auto px-4 text-center">"""
        <AnimatePresence mode="wait">          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}""
            transition={{ duration: 0.8 }}"""
            className="max-w-5xl mx-auto""
          >`"`
            <div className={`w-24 h-24 bg-gradient-to-r ${heroSlides[currentSlide].color} rounded-3xl flex items-center justify-center mx-auto mb-8`}>"""
              {React.createElement(heroSlides[currentSlide].icon, { className: "w-12 h-12 text-white" })}            </div>""
            """
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI & Technology Services;
            </h1>""
            """
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Transform Your Business with Cutting-Edge Solutions;
            </h2>""
            """
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of innovative micro SAAS, IT, and AI services;
              designed to drive business growth and competitive advantage.
            </p>""
            """
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link""
                to={heroSlides[currentSlide].link}"                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl""
              >
                Explore Services;
              </Link>""
              <Link"""
                to="/contact""""
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"              >
                View Pricing;
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
""
        {/* Slide Indicators */}"""
        <div className="flex justify-center mt-12 space-x-2">
          {heroSlides.map((_, index) => (
            <button;
              key={index}`
              onClick={() => setCurrentSlide(index)}``
              className={`w-3 h-3 rounded-full transition-all duration-300 ${}
'`
                index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/30'``
              }`}
            />) ) }            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}""
              transition={{ duration: 0.5, delay: index * 0.1 }}"""
              className="group""
            >""
              <Link to={feature.link}>""`
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">`"`
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>"""
                    <feature.icon className="w-8 h-8 text-white" />""
                  </div>"""
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}""
                  </h3>"""
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}""
                  </p>"""
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">"""
                    <span className="font-medium">Learn More</span>"""
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />
                  </div>
                </div>
              </Link>

            </motion.div>) ) }
        </div>
      </div>
    </section>) ;

};

// Stats Section Component;
""
  return ("""
    <section className="py-24 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800">"""
      <div className="container mx-auto px-4">"""
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div;
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}""
              transition={{ duration: 0.5, delay: index * 0.1 }}"""
              className="text-center"""
            >"""
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">"""
                <stat.icon className="w-10 h-10 text-white" />""
              </div>"""
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>"""
              <div className="text-gray-300">{stat.label}</div>            </motion.div>

            {/* Quantum Computing */}
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}""
              className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300""
            >""
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">""
                <Atom className="w-8 h-8 text-white"   />
              </div>""
              <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>""
              <p className="text-gray-400 mb-4">
                Revolutionary quantum algorithms and machine learning solutions for complex problems.
              </p>""
              <Link to="/services-showcase" className="text-cyan-400 hover:text-cyan-300 flex items-center">""
                Learn More <ArrowRight className="w-4 h-4 ml-2"   />
              </Link>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}""
              className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300""
            >""
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">""
                <Shield className="w-8 h-8 text-white"   />
              </div>""
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>""
              <p className="text-gray-400 mb-4">
                Military-grade security solutions with advanced threat detection and zero-trust architecture.
              </p>""
              <Link to="/services-showcase" className="text-cyan-400 hover:text-cyan-300 flex items-center">""
                Learn More <ArrowRight className="w-4 h-4 ml-2"   />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>) ;
};

// CTA Section Component;
const CTASection: any = () => {}
  return (<section className="py-24 bg-gradient - to - br from - cyan - 900 via - blue - 900 to - indigo -900">
      <div  className="container mx - auto px-4 text-center">

        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          transition={{ duration: 0.8 }}
          className="max - w-4xl mx -auto""
        >
          <h2 className="text-4xl md:text-5xl font - bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray - 300 mb-12 max - w-3xl mx -auto">
            Join hundreds of organizations that have already transformed their operations with our AI - powered solutions.Let's discuss how we can help you achieve your technology goals.</p>
          <div  className="flex flex - col sm:flex - row gap-4 justify -center">
            <Link;
              to="/contact""
              className="bg-gradient - to - r from - cyan - 500 to - blue - 500 text-white px-8 py-4 rounded-lg font - semibold text-lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 transform hover:-translate - y-1 shadow-lg hover:shadow-xl""
            >
              Get Started Today;
            </Link>
            <Link;
              to="/services""
              className="border-2 border-cyan - 500 text-cyan - 400 px-8 py-4 rounded-lg font - semibold text-lg hover:bg-cyan - 500 hover:text-white transition - all duration -200""
            >
              Explore Services;
            </Link>
          </div>

          {/* Contact Information */}
          <div  className="mt-12 grid md:grid - cols - 3 gap-8 max - w-2xl mx -auto">
            <div  className="flex items - center justify - center space - x-3 text-gray -300">
              <Phone className="w-5 h-5 text-cyan -400" />
              <span>+1 302 464 0950</span>
            </div>
            <div  className="flex items - center justify - center space - x-3 text-gray -300">
              <Mail className="w-5 h-5 text-cyan -400" />
              <span > kleber@ziontechgroup.com</span>
            </div>
            <div  className="flex items - center justify - center space - x-3 text-gray -300">
              <MapPin className="w-5 h-5 text-cyan -400" />
              <span > Middletown, DE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>) ;

};

// Main Home component;
  return ({/* Services Showcase */}
        <ServicesShowcase />

        {/* Micro SaaS Products */}
        <MicroSaaSProducts  />
""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}""
                  className="text-center""
                >`
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>""
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>""
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">""
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}""
              className="text-4xl md:text-5xl font-bold text-white mb-6""
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}""
              className="text-xl text-gray-300 mb-8""
            >
              Get started with our comprehensive AI solutions and take your business to the next level;
            </motion.p>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}""
              className="flex flex-col sm:flex-row gap-4 justify-center""
            >
              <Link""
                to="/comprehensive-services-showcase-2026"""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105""
              >
                <span>Explore 2026 Services</span>""
                <ArrowRight className="w-5 h-5 ml-2"  />
              </Link>
              <Link""
                to="/contact"""
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105""
              >
                <span>Contact Us</span>""
                <MessageCircle className="w-5 h-5 ml-2"  />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Sections */}""
        <Suspense fallback={<LoadingFallback message="Loading additional sections..."  />}>
          <TechSolutionsSection  />
          <CaseStudiesSection  />
          <TeamExpertiseSection  />
          <GlobalPresenceSection  />
          <InnovationResearchSection  />
          <ClientSuccessStoriesSection  />
          <TechnologyStackSection  />
          <SecurityComplianceSection  />
          <AIServicesShowcase  />
          <InteractiveTestimonials  />
          <ServicesShowcase  />
          <BenefitsSection  />
          <HowItWorksSection  />
          <NewsletterSection  />
          <FeaturedListingsSection  />
          <FeatureHighlights  />
          <FeatureCTAs  />
          <ITServiceRequestHero  />
          <FloatingCTA  />
          <PricingSection  />
        </Suspense>
      </div>
    </>) ;
};

export default Home;'"`
'"`'"`
