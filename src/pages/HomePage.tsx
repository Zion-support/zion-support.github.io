import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ; ArrowRight,; Star,; Users,; Award,; CheckCircle,; Play,; Sparkles,; Phone,; Mail,; ChevronRight,; ChevronUp,; Shield,; Globe,; MapPin,; Zap,; TrendingUp,; Target,; Rocket,; Plus,; Building2; } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceShowcase from '../components/ServiceShowcase';
import InnovativeServicesShowcase from '../components/InnovativeServicesShowcase';
import { contactInfo } from '../data/services';
;
// Optimized futuristic animated background component with reduced re-renders;
const FuturisticBackground: React.FC = React.memo(() => {;
  const particles = React.useMemo(() =>;
    Array.from({ length: 15 }, (_, i) => ({;
      id: i,;
      left: `${Math.random() * 100}%`,;
      top: `${Math.random() * 100}%`,;
      duration: 3 + Math.random() * 4,;
      delay: Math.random() * 2;
    })), [];
  );
;
  return (;
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">;"
      {/* Animated grid with neon effect */}";"
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>;
      {/* Optimized floating particles */};
      {particles.map((particle) => (;
        <motion.div;"
          key={particle.id}";"
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50";
          style={{;
            left: particle.left,;
            top: particle.top;
          }};
          animate={{;
            y: [0, -20, 0],;
            opacity: [0.8, 0.4, 0.8];
          }};
          transition={{;
            duration: particle.duration,;
            delay: particle.delay,;"
            repeat: Infinity,";"
            ease: "easeInOut";
          }};
        />;
      ))};
    </div>;
  );
});
;
FuturisticBackground.displayName = 'FuturisticBackground';
;
// Enhanced Floating Action Button Component with better UX;
const FloatingActionButton: React.FC = React.memo(() => {;
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
;
  useEffect(() => {;
    const toggleVisibility = () => {;
      if (window.pageYOffset > 300) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      };
    };
;
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
;
  const handleContactClick = (type: 'phone' | 'email') => {;
    if (type === 'phone') {;
      window.location.href = `tel:${contactInfo.mobile}`;
    } else {;
      window.location.href = `mailto:${contactInfo.email}`;
    };
  };
;
  return (;
    <AnimatePresence>;
      {isVisible && (;
        <motion.div;
          initial={{ opacity: 0, scale: 0.8, y: 20 }};
          animate={{ opacity: 1, scale: 1, y: 0 }};"
          exit={{ opacity: 0, scale: 0.8, y: 20 }}";"
          className="fixed bottom-6 right-6 z-50";"
        >";"
          <div className="relative">;
            {/* Main FAB */};
            <motion.button;"
              onClick={() => setIsExpanded(!isExpanded)}";"
              className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-200";
              whileHover={{ scale: 1.1 }};
              whileTap={{ scale: 0.9 }};
            >;
              <motion.div;
                animate={{ rotate: isExpanded ? 45 : 0 }};
                transition={{ duration: 0.2 }};"
              >";"
                <Plus className="w-8 h-8" />;
              </motion.div>;
            </motion.button>;
            {/* Expanded Actions */};
            <AnimatePresence>;
              {isExpanded && (;
                <motion.div;
                  initial={{ opacity: 0, scale: 0.8, y: 10 }};
                  animate={{ opacity: 1, scale: 1, y: 0 }};"
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}";"
                  className="absolute bottom-full right-0 mb-4 space-y-3";
                >;
                  {/* Phone Action */};
                  <motion.button;
                    onClick={() => handleContactClick('phone')};
                    className="w-12 h-12 bg-green-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-200";
                    whileHover={{ scale: 1.1 }};
                    whileTap={{ scale: 0.9 }};
                  >;
                    <Phone className="w-6 h-6" />;
                  </motion.button>;
                  {/* Email Action */};
                  <motion.button;
                    onClick={() => handleContactClick('email')};
                    className="w-12 h-12 bg-blue-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-200";
                    whileHover={{ scale: 1.1 }};
                    whileTap={{ scale: 0.9 }};
                  >;
                    <Mail className="w-6 h-6" />;
                  </motion.button>;
                </motion.div>;
              )};
            </AnimatePresence>;
          </div>;
        </motion.div>;
      )};
    </AnimatePresence>;
  );
});
;
FloatingActionButton.displayName = 'FloatingActionButton';
;
// Enhanced Stats Section with better animations;
const StatsSection: React.FC = React.memo(() => {;
  const stats = [;
    { number: '500+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500', icon: Users },;
    { number: '50+', label: 'Expert Team', color: 'from-purple-500 to-pink-500', icon: Award },;
    { number: '99.9%', label: 'Uptime', color: 'from-green-500 to-emerald-500', icon: Shield },;
    { number: '24/7', label: 'Support', color: 'from-orange-500 to-red-500', icon: Globe };
  ];
;
  return (;
    <section className="py-20 bg-slate-900">;
      <div className="container mx-auto px-4">;
        <motion.div;
          className="text-center mb-16";
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6 }};
          viewport={{ once: true }};"
        >;"
          <h2 className="text-4xl font-bold text-white mb-6">;
            Trusted by Industry Leaders;
          </h2>;"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Our track record speaks for itself - delivering exceptional results across diverse industries;
          </p>;"
        </motion.div>;"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
          {stats.map((stat, index) => (;
            <motion.div;
              key={index}";
              className="text-center group";
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: index * 0.1 }};
              viewport={{ once: true }};
              whileHover={{ y: -5 }};
            >;"
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>";"
                <stat.icon className="w-10 h-10 text-white" />;"
              </div>;"
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;"
              <div className="text-gray-400">{stat.label}</div>;
            </motion.div>;
          ))};
        </div>;"
      </div>;"
    </section>;"
  );
});
;
StatsSection.displayName = 'StatsSection';
;
// Enhanced Hero Section with better content and CTAs;
const HeroSection: React.FC = React.memo(() => {;"
  return (";"
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
      <FuturisticBackground />;"
      ";"
      <div className="relative z-10 container mx-auto px-4 text-center">;
        <motion.div;
          initial={{ opacity: 0, y: 30 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
        >;
          <motion.h1;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.8, delay: 0.2 }}";"
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight";
          >;"
            Welcome to{' '}";"
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Zion Tech Group;
            </span>;
          </motion.h1>;
          <motion.p;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.8, delay: 0.4 }}";"
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed";
          >;
            Pioneering the future with cutting-edge AI, cybersecurity, and space technology solutions.;
            Transform your business with our innovative services and expert guidance.;
          </motion.p>;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.8, delay: 0.6 }}";"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center";
          >;"
            <Link";"
              to="/services";"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl";
            >;"
              Explore Our Services";"
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
            </Link>;"
            <Link";"
              to="/contact";"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg";
            >;
              Get Started Today;
            </Link>;
          </motion.div>;
          {/* Trust Indicators */};
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.8, delay: 0.8 }}";"
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400";"
          >;"
            <div className="flex items-center gap-2">;"
              <CheckCircle className="w-5 h-5 text-green-400" />;"
              <span>ISO 27001 Certified</span>;"
            </div>;"
            <div className="flex items-center gap-2">;"
              <CheckCircle className="w-5 h-5 text-green-400" />;"
              <span>SOC2 Type II Compliant</span>;"
            </div>;"
            <div className="flex items-center gap-2">;"
              <CheckCircle className="w-5 h-5 text-green-400" />;"
              <span>24/7 Support</span>;
            </div>;
          </motion.div>;
        </motion.div>;
      </div>;"
    </section>;"
  );
});
;
HeroSection.displayName = 'HeroSection';
;
// New Features Section Component;
const FeaturesSection: React.FC = React.memo(() => {;
  const features = [;
    {;"
      icon: Zap,";"
      title: "Lightning Fast",";"
      description: "Optimized performance with cutting-edge technologies";
    },;"
    {;"
      icon: Shield,";"
      title: "Enterprise Security",";"
      description: "Bank-grade security with SOC2 compliance";
    },;"
    {;"
      icon: TrendingUp,";"
      title: "Scalable Solutions",";"
      description: "Grow with confidence using our scalable architecture";
    },;"
    {;"
      icon: Target,";"
      title: "Results Driven",";"
      description: "Focused on delivering measurable business outcomes";
    };"
  ];"
;"
  return (";"
    <section className="py-20 bg-slate-800">";"
      <div className="container mx-auto px-4">;"
        <motion.div";"
          className="text-center mb-16";
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6 }};
          viewport={{ once: true }};"
        >";"
          <h2 className="text-4xl font-bold text-white mb-6">;
            Why Choose Zion Tech Group?;"
          </h2>;"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            We combine innovation with reliability to deliver exceptional results;
          </p>;"
";"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
          {features.map((feature, index) => (;"
            <motion.div;"
              key={index}";"
              className="text-center group";
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.5, delay: index * 0.1 }};
              viewport={{ once: true }};
              whileHover={{ y: -5 }};"
            >";"
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">";"
                <feature.icon className="w-8 h-8 text-white" />;"
              </div>;"
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;"
              <p className="text-gray-400">{feature.description}</p>;
            </motion.div>;
          ))};
        </div>;"
      </div>;"
    </section>;"
  );
});
;
FeaturesSection.displayName = 'FeaturesSection';
;
// Main Home Component with Suspense for better performance;
const HomePage: React.FC = () => {;"
  return (";"
    <div className="min-h-screen">;
      <HeroSection />;
      <FeaturesSection />;"
      <Suspense fallback={";"
        <div className="py-20 bg-slate-900">";"
          <div className="container mx-auto px-4 text-center">";"
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>";"
            <p className="text-gray-400">Loading services...</p>;
          </div>;"
        </div>;"
      }>;"
        <InnovativeServicesShowcase />;
      </Suspense>;
      <Suspense fallback={";"
        <div className="py-20 bg-slate-900">";"
          <div className="container mx-auto px-4 text-center">";"
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>";"
            <p className="text-gray-400">Loading legacy services...</p>;
          </div>;"
        </div>;"
      }>;"
        <ServiceShowcase />;
      </Suspense>;
      <StatsSection />;
      <FloatingActionButton />;
    </div>;"
  );
};
;
export default HomePage
