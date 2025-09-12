import React from 'react';
import { SEO } from '../components/SEO';
 from 'lucide - react';
// Optimized futuristic animated background component;
const FuturisticBackground = React.memo(() => {;
  const particles = useMemo(() =>;
    [...Array(20) ].map((_, i) => ({;
      id: i,
      left: `${Math.random () * 100}%`,
      top: `${Math.random () * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3;
}) ) , []) ;
  return (<div  className="fixed inset - 0 overflow-hidden pointer - events -none" aria-hidden="true">;
      {/* Animated grid with neon effect */}
      <div  className="absolute inset - 0 bg-[linear - gradient (rgba (6,182,212,0.15) _1px,transparent_1px) ,linear - gradient(90deg,rgba (6,182,212,0.15) _1px,transparent_1px) ] bg-[size:50px_50px] animate -pulse"></div>;

      {/* Optimized floating particles */}
      {particles.map((particle) => (<motion.div;
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan - 400 rounded-full opacity - 80 shadow-lg shadow-cyan -400 / 50";
          style={{;
            left: particle.left,
            top: particle.top;
}}
          animate={{;
            y: [0, -20, 0],
            opacity: [0.8, 0.4, 0.8];
}}
          transition={{;
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut";
}}
        />) ) }

      {/* Subtle gradient overlays */}
      <div  className="absolute inset - 0 bg-gradient - to - br from - transparent via - transparent to - cyan -900 / 10"></div>;
      <div  className="absolute inset - 0 bg-gradient - to - tl from - transparent via - transparent to - blue -900 / 10"></div>;
    </div>) ;
}) ;
// Floating Action Button Component;
const FloatingActionButton = React.memo(() => {;
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    const toggleVisibility = () => {;
      if(window.pageYOffset > 300) {;
        setIsVisible(true) ;
} else {;
        setIsVisible(false) ;
}
    };
    window.addEventListener('scroll', toggleVisibility) ;
    return () => window.removeEventListener('scroll', toggleVisibility) ;
}, []) ;
  const scrollToTop = () => {;
    window.scrollTo({;
      top: 0,
      behavior: 'smooth';
}) ;
};
  return (<AnimatePresence>;
      {isVisible && (<motion.div;
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom - 6 right - 6 z -50">;
          <div  className="relative">;
            {/* Expanded menu */}
            <AnimatePresence>;
              {isExpanded && (<motion.div;
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom - 16 right - 0 space - y-2">;
                  <motion.button;
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items - center justify - center w-12 h-12 bg-gradient - to - r from - blue - 600 to - purple - 600 text-white rounded-full shadow-lg hover:shadow-xl transition - all duration -200";
                    onClick={ () => window.open('mailto:contact@ziontechgroup.com') }

                  >;
                    <Mail className="h-5 w-5" />;
                  </motion.button>;
                  <motion.button;
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items - center justify - center w-12 h-12 bg-gradient - to - r from - green - 600 to - blue - 600 text-white rounded-full shadow-lg hover:shadow-xl transition - all duration -200";
                    onClick={ () => window.open('tel:+15551234567') }

                  >;
                    <Phone className="h-5 w-5" />;
                  </motion.button>;
                  <motion.button;
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items - center justify - center w-12 h-12 bg-gradient - to - r from - orange - 600 to - red - 600 text-white rounded-full shadow-lg hover:shadow-xl transition - all duration -200";
                    onClick={ () => window.open('/help', '_blank') }

                  >;
                    <HelpCircle className="h-5 w-5" />;
                  </motion.button>;
                </motion.div>) }
            </AnimatePresence>;

            {/* Main FAB */}
            <motion.button;
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items - center justify - center w-14 h-14 bg-gradient - to - r from - purple - 600 to - pink - 600 text-white rounded-full shadow-lg hover:shadow-xl transition - all duration -200";
              onClick={ () => setIsExpanded(!isExpanded) }

            >;
              {isExpanded ? (<ChevronUp className="h-6 w-6" />) : (<MessageSquare className="h-6 w-6" />) }
            </motion.button>;
          </div>;
        </motion.div>) }
    </AnimatePresence>) ;
}) ;
FloatingActionButton.displayName = 'FloatingActionButton';
// Enhanced hero section component;
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const heroSlides = [{;
      title: "AI - Powered Innovation",
      subtitle: "Transform your business with cutting - edge artificial intelligence solutions",
      description: "From autonomous research assistants to quantum computing platforms, we deliver the future of technology today.",
      cta: "Explore AI Solutions",
      link: "/services / ai - solutions",
      icon: Brain,
      color: "from - purple - 500 to - pink - 500";
},
    {;
      title: "Quantum Computing Excellence",
      subtitle: "Unlock unprecedented computational power",
      description: "Harness the power of quantum mechanics to solve complex problems that were once impossible.",
      cta: "Discover Quantum",
      link: "/services / quantum - computing",
      icon: Atom,
      color: "from - blue - 500 to - cyan - 500";
},
    {;
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services / ai - healthcare - analytics',
      color: 'from - green - 600 to - emerald - 600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization'];
}
  ], []) ;
  // Auto - advance slides;
  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    if(!isPlaying) return;
    const interval = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length) ;
}, 5000) ;
    return () => clearInterval(interval) ;
}, [isPlaying, heroSlides.length]) ;
  const togglePlayPause = () => setIsPlaying(!isPlaying) ;
  const serviceCategories = [{;
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from - purple - 600 to - pink - 600',
      services: [;
        { name: 'AI Business Intelligence', href: '/services / ai - business - intelligence' },
        { name: 'AI Content Generation', href: '/services / ai - content - generation - platform' },
        { name: 'AI Marketing Automation', href: '/services / ai - marketing - automation' },
        { name: 'AI Project Management', href: '/services / ai - project - management - platform' }
      ];
},
    {;
      name: 'Cybersecurity',
      icon: Shield,
      color: "from - red - 500 to - orange - 500";
}
  ];
  useEffect(() => {
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    const timer = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length) ;
}, 5000) ;
    return () => clearInterval(timer) ;
}, [heroSlides.length]) ;
  const heroStats = [{ label: 'AI Solutions', value: '50+', icon: Brain, description: 'Cutting - edge AI services' },
    { label: 'Micro SaaS', value: '25+', icon: Rocket, description: 'Innovative products' },
    { label: 'Enterprise Clients', value: '100+', icon: Building, description: 'Trusted partnerships' },
    { label: 'Success Rate', value: '99%', icon: CheckCircle, description: 'Proven results' }
  ];
  return (<section className="relative min - h-screen flex items - center justify - center overflow-hidden">;
      <FuturisticBackground />;

      <div  className="relative z - 10 container mx - auto px-4 text-center">;
        <AnimatePresence mode="wait">;
          <motion.div;
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max - w-5xl mx -auto">;
            <div  className={`w-24 h-24 bg-gradient - to - r ${heroSlides[currentSlide].color} rounded-3xl flex items - center justify - center mx - auto mb-8`}>;
              {React.createElement (heroSlides[currentSlide].icon, { className: "w-12 h-12 text-white" }) }
            </div>;

            <h1 className="text-5xl md:text-7xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 via - blue - 400 to - purple - 400 bg-clip - text text-transparent">;
              {heroSlides[currentSlide].title}
            </h1>;
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">;
              Leading technology solutions provider specializing in AI, cybersecurity,
              cloud infrastructure, and digital transformation services.</p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a ;
                href="/services" ;
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">;
                Our Services;
              </a>;
              <a ;
                href="/contact" ;
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">;
                Get Started;
              </a>;
import { motion } from 'framer-motion';
import { ;
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Cloud,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Rocket;
} from 'lucide-react';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {;
  const features = [;
    {;
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for business transformation";
},
    {;
      icon: <Shield className="w-8 h-8 text-zion-purple" />,
      title: "Enterprise Security",
      description: "Military-grade cybersecurity and compliance solutions";
},
    {;
      icon: <Brain className="w-8 h-8 text-zion-green" />,
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics";
},
    {;
      icon: <Cloud className="w-8 h-8 text-zion-cyan-light" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses";
}
  ];
  const stats = [;
    { number: "500+", label: "Global Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Countries" }
  ];
  const services = [;
    {;
      title: "AI Autonomous Systems",
      description: "Self-learning AI platforms for business automation",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-services";
},
    {;
      title: "Cybersecurity Solutions",
      description: "Advanced threat detection and prevention",
      icon: <Shield className="w-6 h-6" />,
      link: "/cybersecurity";
},
    {;
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment automation",
      icon: <Cloud className="w-6 h-6" />,
      link: "/cloud-devops";
},
    {;
      title: "Digital Transformation",
      description: "End-to-end business modernization services",
      icon: <Rocket className="w-6 h-6" />,
      link: "/digital-transformation"    }
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">;
      {/* Hero Section */}
      <section className="relative py-20 px-4">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 via-zion-purple/20 to-zion-cyan/20"></div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1 ;
            className="futuristic-heading mb-6";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Zion Tech Group;
          </motion.h1>;
          <motion.p ;
            className="futuristic-text text-xl md:text-2xl mb-8 max-w-3xl mx-auto">;
                Our Services,
              </a>";
                href="/contact" ";
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors";
                Get Started,
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Stats Section */}
      <section className="py-20 bg-black/20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Pioneering the future of technology with cutting-edge AI, cybersecurity, and digital transformation solutions;
          </motion.p>;
          <motion.div ;
            className="flex flex-col sm:flex-row gap-4 justify-center"            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <Link to="/services" className="futuristic-button">;
              Explore Services;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
            <Link to="/contact" className="futuristic-button-outline">;
              Get Started;
            </Link>;
          </motion.div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            className="text-center mb-16";
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="futuristic-heading text-3xl md:text-4xl mb-4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="futuristic-text text-lg max-w-2xl mx-auto">;
              We combine innovation with reliability to deliver solutions that drive business growth            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div;
                key={index}
                className="futuristic-card text-center";
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >;
                <div className="mb-4 flex justify-center">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-semibold mb-3 text-white">;
                  {feature.title}
                </h3>;
                <p className="futuristic-text">;
                  {feature.description}
                </p>;
              </motion.div>;
            ))}
          </div>;
        </section>;
      </div>;
    </>;
  );
};
export default Home;        </section>;
    </>;
  )},
  );
export default function Home() {return (";
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">";
      <SEO title="Home - Zion Tech Group" description="Professional Home services by Zion Tech Group"  />";
      <div className="container mx-auto px-4 py-20">";
        <h1 className="text-4xl font-bold text-white mb-8">Home</h1>";
        <p className="text-gray-300 text-lg">;
          Professional Home services to help your business grow.;
        </p>;
  )};next/link";react"framer - motion",react - router-dom",../components / SEO",../components/EnhancedHero;
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle,
  Phone, Mail, MapPin} from &apos;lucide-react";&apos;&apos,
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star,
  Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, ";
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle,
  Phone, Mail, MapPin } from "lucide-react;
export default React.memo(function Home() {;
  const features = []";
  const stats = []&apos;
  const stats = []  const stats = []  const services = []  return ( <> <SEO title="Zion Tech Group - Leading AI & Quantum Technology Solutions" description="Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future." keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"" /">"{}" <EnhancedHero /"> {}"" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">"" <div className="container mx - auto px - 4">"" <div className="grid grid - cols - 2 md: grid - cols - 4 gap - 8"> {stats.map ( (stat, index) => ( <motion .div" key={stat.label}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text - center"">"" <div className="bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20">"" <stat .icon className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" /">"" <div className="text - 3xl font - bold text - white mb - 2">{stat.number}</div>"" <div className="text - gray - 300">{stat.label}</div> </div> </motion.div>) ) }" </div>" </div>" </section> {}"" <section className="py - 20">"" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">"" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Why Choose Zion Tech Group?" </h2>"" <p className="text - xl text - gray - 300 max - w-3xl mx - auto"> We combine cutting - edge technology with proven business strategies to deliver" solutions that transform industries and drive success." </p>" </motion.div>"" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {features.map ( (feature, index) => ( <motion.div" key={feature.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105">"" <div className="{"w" - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6"}">"" <feature .icon className="w - 8 h - 8 text - white" /">" </div>"" <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>"" <p className="text - gray - 300 leading - relaxed">{feature.description}</p> </motion.div>) ) }" </div>" </div>" </section> {}"" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">"" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">"" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Our Core Services" </h2>"" <p className="text - xl text - gray - 300 max - w-3xl mx - auto">" Comprehensive technology solutions designed to meet the evolving needs of modern businesses" </p>" </motion.div>"" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {services.map ( (service, index) => ( <motion .div" key={service.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"">"" <Link to="{service.href}" className="block">"" <div className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full">"" <div className="{"w" - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6"}">"" <service .icon className="w - 8 h - 8 text - white" /">" </div>"" <h3 className="text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors">"{service.title}" </h3>"" <p className="text - gray - 300 leading - relaxed">{service.description}</p>"" <div className="mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors">"" <span className="text - sm font - medium">Learn More</span>"" <ArrowRight className="w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform" /"> </div> </div> </Link> </motion.div>) ) }" </div>" </div>" </section> {}"" <section className="py - 20">"" <div className="container mx - auto px - 4">"" <div className="max - w-4xl mx - auto text - center"> <motion .div" initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }}"; transition="{{" duration: 0.8 }}">"" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 6">", Ready to Transform Your Business?" </h2>"" <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">", Join hundreds of companies already leveraging our AI - powered solutions", to drive growth and innovation." </p>"" <div className="flex flex - col sm: flex - row gap - 4 justify - center">"" <Link " to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105"">"" <MessageCircle className="w - 5 h - 5 mr - 2" /">", Get Started Today" </Link>" <Link " to="/about" className="inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200"">"" <Users className="w - 5 h - 5 mr - 2" /"> Learn About Us </Link> </div> </motion.div>" </div>" </div>" </section> {}"" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">"" <div className="container mx - auto px - 4">"" <div className="max - w-4xl mx - auto">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 12"">"" <h2 className="text - 3xl md: text - 4xl font - bold text - white mb - 4">", Get in Touch" </h2>"" <p className="text - lg text - gray - 300">" Ready to discuss your technology needs? Contact us today." </p>" </motion.div>"" <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8">" <motion .div", initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.1 }}" className="text - center"">"" <div className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">"" <Phone className="w - 8 h - 8 text - white" /">" </div>"" <h3 className="text - xl font - bold text - white mb - 2">Phone</h3>"" <p className="text - gray - 300">+1 302 464 0950</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.2 }}" className="text - center"">"" <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">"" <Mail className="w - 8 h - 8 text - white" /">" </div>"" <h3 className="text - xl font - bold text - white mb - 2">Email</h3>"" <p className="text - gray - 300">kleber@ziontechgroup.com</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.3 }}" className="text - center"">"" <div className="w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">"" <MapPin className="w - 8 h - 8 text - white" /">" </div>"" <h3 className="text - xl font - bold text - white mb - 2">Address</h3>"" <p className="text - gray - 300">364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>" </section>" </>")  }","""";
  { title: "AI Services", description: "Comprehensive AI solutions for business automation and intelligence", href: "/ai - services", icon: Brain, color: "from - purple - 500 to - pink - 500" } { title: "IT Infrastructure", description: "Enterprise - grade IT solutions and cloud architecture", href: "/it - services", icon: Server, color: "from - green - 500 to - emerald - 500" } { title: "Quantum Solutions", description: "Cutting - edge quantum computing and technology services", href: "/services / quantum - computing", icon: Atom, color: "from - orange - 500 to - red - 500" } { title: "Micro SAAS", description: "Innovative software solutions for modern businesses", href: "/micro - saas", icon: Rocket, color: "from - blue - 500 to - cyan - 500" } ]  return ( <> <SEO title="Zion Tech Group - Leading AI & Quantum Technology Solutions" description="Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future." keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"" /">"{}" <EnhancedHero /"> {}""" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">""" <div className="container mx - auto px - 4">""" <div className="grid grid - cols - 2 md: grid - cols - 4 gap - 8"> {stats.map ( (stat, index) => ( <motion .div" key={stat.label}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text - center"">""" <div className="bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20">""" <stat .icon className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" /">""" <div className="text - 3xl font - bold text - white mb - 2">{stat.number}</div>""" <div className="text - gray - 300">{stat.label}</div> </div> </motion.div>) ) }" </div>" </div>" </section> {}""" <section className="py - 20">""" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">""" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Why Choose Zion Tech Group?"" </h2>""" <p className="text - xl text - gray - 300 max - w-3xl mx - auto"> We combine cutting - edge technology with proven business strategies to deliver" solutions that transform industries and drive success." </p>" </motion.div>""" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {features.map ( (feature, index) => ( <motion.div" key={feature.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105">"" <div className="{"w" - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6"}">""" <feature .icon className="w - 8 h - 8 text - white" /">"" </div>""" <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>""" <p className="text - gray - 300 leading - relaxed">{feature.description}</p> </motion.div>) ) }" </div>" </div>" </section> {}""" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">""" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">""" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Our Core Services"" </h2>""" <p className="text - xl text - gray - 300 max - w-3xl mx - auto">" Comprehensive technology solutions designed to meet the evolving needs of modern businesses" </p>" </motion.div>""" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {services.map ( (service, index) => ( <motion .div" key={service.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"">""" <Link to="{service.href}" className="block">""" <div className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full">"" <div className="{"w" - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6"}">""" <service .icon className="w - 8 h - 8 text - white" /">"" </div>""" <h3 className="text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors">"{service.title}"" </h3>""" <p className="text - gray - 300 leading - relaxed">{service.description}</p>""" <div className="mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors">""" <span className="text - sm font - medium">Learn More</span>""" <ArrowRight className="w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform" /"> </div> </div> </Link> </motion.div>) ) }" </div>" </div>" </section> {}""" <section className="py - 20">""" <div className="container mx - auto px - 4">""" <div className="max - w-4xl mx - auto text - center"> <motion .div" initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }}"; transition="{{" duration: 0.8 }}">""" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 6">", Ready to Transform Your Business?"" </h2>""" <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">", Join hundreds of companies already leveraging our AI - powered solutions", to drive growth and innovation."" </p>""" <div className="flex flex - col sm: flex - row gap - 4 justify - center">"" <Link " to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105"">""" <MessageCircle className="w - 5 h - 5 mr - 2" /">", Get Started Today" </Link>"" <Link " to="/about" className="inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200"">""" <Users className="w - 5 h - 5 mr - 2" /"> Learn About Us </Link> </div> </motion.div>" </div>" </div>" </section> {}""" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">""" <div className="container mx - auto px - 4">""" <div className="max - w-4xl mx - auto">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 12"">""" <h2 className="text - 3xl md: text - 4xl font - bold text - white mb - 4">", Get in Touch"" </h2>""" <p className="text - lg text - gray - 300">" Ready to discuss your technology needs? Contact us today." </p>" </motion.div>""" <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8">" <motion .div", initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.1 }}" className="text - center"">""" <div className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">""" <Phone className="w - 8 h - 8 text - white" /">"" </div>""" <h3 className="text - xl font - bold text - white mb - 2">Phone</h3>""" <p className="text - gray - 300">+1 302 464 0950</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.2 }}" className="text - center"">""" <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">""" <Mail className="w - 8 h - 8 text - white" /">"" </div>""" <h3 className="text - xl font - bold text - white mb - 2">Email</h3>""" <p className="text - gray - 300">kleber@ziontechgroup.com</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.3 }}" className="text - center"">""" <div className="w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">""" <MapPin className="w - 8 h - 8 text - white" /">"" </div>""" <h3 className="text - xl font - bold text - white mb - 2">Address</h3>""" <p className="text - gray - 300">364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>" </section>" </>")  }",""""";
  { title: "AI Services", description: "Comprehensive AI solutions for business automation and intelligence", href: "/ai - services", icon: Brain, color: "from - purple - 500 to - pink - 500" } { title: "IT Infrastructure", description: "Enterprise - grade IT solutions and cloud architecture", href: "/it - services", icon: Server, color: "from - green - 500 to - emerald - 500" } { title: "Quantum Solutions", description: "Cutting - edge quantum computing and technology services", href: "/services / quantum - computing", icon: Atom, color: "from - orange - 500 to - red - 500" } { title: "Micro SAAS", description: "Innovative software solutions for modern businesses", href: "/micro - saas", icon: Rocket, color: "from - blue - 500 to - cyan - 500" } ]  return ( <> <SEO title="Zion Tech Group - Leading AI & Quantum Technology Solutions" description="Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future." keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"" /">" {}"; <EnhancedHero /"> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <div className="grid grid - cols - 2 md: grid - cols - 4 gap - 8"> {stats.map ( (stat, index) => ( <motion .div" key={stat.label}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text - center"">" <div className="bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20">" <stat .icon className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" /">" <div className="text - 3xl font - bold text - white mb - 2">{stat.number}</div>" <div className="text - gray - 300">{stat.label}</div> </div> </motion.div>) ) }" </div>"; </div>"; </section> {}" <section className="py - 20">" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Why Choose Zion Tech Group? </h2>" <p className="text - xl text - gray - 300 max - w-3xl mx - auto"> We combine cutting - edge technology with proven business strategies to deliver" solutions that transform industries and drive success.", </p>", </motion.div>","" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {features.map ( (feature, index) => ( <motion.div" key={feature.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="{"bg" - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105"> <div className="{"w" - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6"}">"} <feature .icon className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>" <p className="text - gray - 300 leading - relaxed">{feature.description}</p> </motion.div>) ) }" </div>"; </div>"; </section> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Our Core Services </h2>" <p className="text - xl text - gray - 300 max - w-3xl mx - auto">" Comprehensive technology solutions designed to meet the evolving needs of modern businesses", </p>", </motion.div>","" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {services.map ( (service, index) => ( <motion .div" key={service.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"">" <Link to="{service.href}" className="block">" <div className="{"bg" - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full"> <div className="{"w" - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6"}">"} <service .icon className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors">" {service.title} </h3>" <p className="text - gray - 300 leading - relaxed">{service.description}</p>" <div className="mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors">" <span className="text - sm font - medium">Learn More</span>" <ArrowRight className="w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform" /"> </div> </div> </Link> </motion.div>) ) }" </div>"; </div>"; </section> {}" <section className="py - 20">" <div className="container mx - auto px - 4">" <div className="max - w-4xl mx - auto text - center"> <motion .div" initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }}"; transition="{{" duration: 0.8 }}">" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 6">"; Ready to Transform Your Business? </h2>" <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">"; Join hundreds of companies already leveraging our AI - powered solutions", to drive growth and innovation. </p>" <div className="flex flex - col sm: flex - row gap - 4 justify - center"> <Link " to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105"">" <MessageCircle className="w - 5 h - 5 mr - 2" /">", Get Started Today", </Link> <Link " to="/about" className="inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200"">" <Users className="w - 5 h - 5 mr - 2" /"> Learn About Us </Link> </div> </motion.div>" </div>", </div>", </section> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <div className="max - w-4xl mx - auto">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 12"">" <h2 className="text - 3xl md: text - 4xl font - bold text - white mb - 4">"; Get in Touch </h2>" <p className="text - lg text - gray - 300">" Ready to discuss your technology needs? Contact us today.", </p>", </motion.div>","" <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8">" <motion .div", initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.1 }}" className="text - center"">" <div className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <Phone className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 2">Phone</h3>" <p className="text - gray - 300">+1 302 464 0950</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.2 }}" className="text - center"">" <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <Mail className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 2">Email</h3>" <p className="text - gray - 300">kleber@ziontechgroup.com</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.3 }}" className="text - center"">" <div className="w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <MapPin className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 2">Address</h3>" <p className="text - gray - 300">364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>" </section>"; </>")  }";"""";
  { title: "AI Services", description: "Comprehensive AI solutions for business automation and intelligence", href: "/ai - services", icon: Brain, color: "from - purple - 500 to - pink - 500" } { title: "IT Infrastructure", description: "Enterprise - grade IT solutions and cloud architecture", href: "/it - services", icon: Server, color: "from - green - 500 to - emerald - 500" } { title: "Quantum Solutions", description: "Cutting - edge quantum computing and technology services", href: "/services / quantum - computing", icon: Atom, color: "from - orange - 500 to - red - 500" } { title: "Micro SAAS", description: "Innovative software solutions for modern businesses", href: "/micro - saas", icon: Rocket, color: "from - blue - 500 to - cyan - 500" } ]  return ( <> <SEO title="Zion Tech Group - Leading AI & Quantum Technology Solutions" description="Transform your business with Zion Tech Group & apos;s cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise - grade technology solutions for the future." keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions"" /">" {}"; <EnhancedHero /"> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <div className="grid grid - cols - 2 md: grid - cols - 4 gap - 8"> {stats.map ( (stat, index) => ( <motion .div" key={stat.label}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="text - center"">" <div className="bg - gradient - to - br from - cyan - 500 / 20 to - purple - 500 / 20 rounded - xl p - 6 border border - cyan - 400 / 20">" <stat .icon className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" /">" <div className="text - 3xl font - bold text - white mb - 2">{stat.number}</div>" <div className="text - gray - 300">{stat.label}</div> </div> </motion.div>) ) }" </div>"; </div>"; </section> {}" <section className="py - 20">" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Why Choose Zion Tech Group? </h2>" <p className="text - xl text - gray - 300 max - w-3xl mx - auto"> We combine cutting - edge technology with proven business strategies to deliver" solutions that transform industries and drive success.", </p>", </motion.div>","" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {features.map ( (feature, index) => ( <motion.div" key={feature.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 hover: border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105"> <div className="{"w" - 16 h - 16 bg - gradient - to - br ${feature.color} rounded - xl flex items - center justify - center mb - 6"}">" <feature .icon className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>" <p className="text - gray - 300 leading - relaxed">{feature.description}</p> </motion.div>) ) }" </div>"; </div>"; </section> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 16"">" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 4">", Our Core Services </h2>" <p className="text - xl text - gray - 300 max - w-3xl mx - auto">" Comprehensive technology solutions designed to meet the evolving needs of modern businesses", </p>", </motion.div>","" <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8"> {services.map ( (service, index) => ( <motion .div" key={service.title}"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: index * 0.1 }}" className="group"">" <Link to="{service.href}" className="block">" <div className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 rounded - xl p - 6 border border - slate - 600 / 50 group - hover: border - cyan - 400 / 50 transition - all duration - 300 group - hover:scale - 105 h - full"> <div className="{"w" - 16 h - 16 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center mb - 6"}">" <service .icon className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 3 group - hover: text - cyan - 400 transition - colors">" {service.title} </h3>" <p className="text - gray - 300 leading - relaxed">{service.description}</p>" <div className="mt - 4 flex items - center text - cyan - 400 group - hover: text - cyan - 300 transition - colors">" <span className="text - sm font - medium">Learn More</span>" <ArrowRight className="w - 4 h - 4 ml - 2 group - hover: translate - x-1 transition - transform" /"> </div> </div> </Link> </motion.div>) ) }" </div>"; </div>"; </section> {}" <section className="py - 20">" <div className="container mx - auto px - 4">" <div className="max - w-4xl mx - auto text - center"> <motion .div" initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }}"; transition="{{" duration: 0.8 }}">" <h2 className="text - 4xl md: text - 5xl font - bold text - white mb - 6">"; Ready to Transform Your Business? </h2>" <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">"; Join hundreds of companies already leveraging our AI - powered solutions", to drive growth and innovation. </p>" <div className="flex flex - col sm: flex - row gap - 4 justify - center"> <Link " to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 text - white font - semibold rounded - lg hover: from - cyan - 500 hover:to - blue - 600 transition - all duration - 200 hover:scale - 105"">" <MessageCircle className="w - 5 h - 5 mr - 2" /">", Get Started Today", </Link> <Link " to="/about" className="inline - flex items - center px - 8 py - 4 border border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover: bg - cyan - 400 hover:text - white transition - all duration - 200"">" <Users className="w - 5 h - 5 mr - 2" /"> Learn About Us </Link> </div> </motion.div>" </div>", </div>", </section> {}" <section className="py - 20 bg - gradient - to - r from - slate - 800 / 50 to - slate - 700 / 50">" <div className="container mx - auto px - 4">" <div className="max - w-4xl mx - auto">" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8 }}" className="text - center mb - 12"">" <h2 className="text - 3xl md: text - 4xl font - bold text - white mb - 4">"; Get in Touch </h2>" <p className="text - lg text - gray - 300">" Ready to discuss your technology needs? Contact us today.", </p>", </motion.div>","" <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8">" <motion .div", initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.1 }}" className="text - center"">" <div className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <Phone className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 2">Phone</h3>" <p className="text - gray - 300">+1 302 464 0950</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.2 }}" className="text - center"">" <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <Mail className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 2">Email</h3>" <p className="text - gray - 300">kleber@ziontechgroup.com</p> </motion.div>" <motion .div"; initial="{{" opacity: 0, y: 20 }}"; whileInView="{{" opacity: 1, y: 0 }} transition="{{" duration: 0.8, delay: 0.3 }}" className="text - center"">" <div className="w - 16 h - 16 bg - gradient - to - br from - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center mx - auto mb - 4">" <MapPin className="w - 8 h - 8 text - white" /"> </div>" <h3 className="text - xl font - bold text - white mb - 2">Address</h3>" <p className="text - gray - 300">364 E Main St STE 1008 < br / / / / / / />Middletown DE 19709</p> </motion.div> </div> </div> </div>" </section>"; </>")  }";""";
";
""