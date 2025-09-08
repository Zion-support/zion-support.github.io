import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Target as TargetIcon,
  Bot,
  Microchip,
  Globe2,
  BarChart,
  ShieldCheck,
  Zap as ZapIcon
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. 40% cost reduction and improved performance.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Their cybersecurity expertise helped us achieve SOC 2 compliance in record time. Highly recommended!",
      rating: 5,
      company: "DataFlow"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, CloudScale",
      content: "The team's expertise in cloud migration saved us months of development time and significantly reduced costs.",
      rating: 5,
      company: "CloudScale"
    }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "We leverage cutting-edge AI and machine learning to deliver intelligent solutions that adapt and improve over time."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2 compliance, zero-trust architecture, and 24/7 threat monitoring."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with edge computing, CDN acceleration, and real-time analytics."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide presence with local expertise, multi-language support, and 24/7 availability."
    }
  ];

  const featuredServices = [
    {
      title: "AI Content Hub Pro",
      description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
      icon: Brain,
      path: "/services/ai-content-hub-pro",
      category: "AI & Content Creation",
      price: "$2,999/mo"
    },
    {
      title: "Quantum Neural Networks",
      description: "Advanced quantum computing solutions for complex computational problems and AI model training.",
      icon: Cpu,
      path: "/quantum-neural-network-platform",
      category: "Quantum Computing",
      price: "$4,999/mo"
    },
    {
      title: "Autonomous Business Platform",
      description: "Fully autonomous business operations with AI-driven decision making and process automation.",
      icon: Rocket,
      path: "/autonomous-business-operations-platform",
      category: "AI & Automation",
      price: "$3,999/mo"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zion-purple/3 to-transparent"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-zion-purple/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-zion-cyan/8 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

=======
    <div className="min-h-screen bg-background relative">
      <FuturisticBackground intensity="low" />
      
=======
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Leading Tech & AI Marketplace - Connect with World-Class Talent & Services" 
        description="Zion Tech Group is the premier marketplace for AI talent, IT services, and cutting-edge technology solutions. Connect with 10,000+ verified professionals, get 24/7 global IT support, and accelerate your digital transformation."
        keywords="AI marketplace, tech talent, IT services, software development, artificial intelligence, technology consulting, digital transformation, tech recruitment, AI solutions, enterprise technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
        type="website"
        ogImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center"
        tags={["AI", "Technology", "Marketplace", "IT Services", "Digital Transformation"]}
=======
        title="Zion Tech Group - Premier AI & Tech Marketplace" 
        description="Discover cutting-edge AI services, tech talent, and innovative micro SAAS solutions. Transform your business with our comprehensive ecosystem of technology services."
        keywords="AI services, machine learning, cloud migration, cybersecurity, data analytics, tech talent, micro SAAS, IT services"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Transform your business with cutting-edge AI services, IT solutions, and intelligent automation tools."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, IT consulting, business automation, cloud migration, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - Premier Tech & AI Marketplace" 
        description="Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. Connect with top talent and transform your business with next-generation technology."
        keywords="AI services, IT solutions, SaaS platforms, technology marketplace, enterprise solutions, AI consulting, cloud services, cybersecurity, digital transformation"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Future of Tech Solutions" 
        description="Discover cutting-edge AI services, innovative IT solutions, and transformative business tools. Zion Tech Group - Where innovation meets excellence."
        keywords="AI services, IT solutions, business automation, cloud services, cybersecurity, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Animated Background */}
      <AnimatedBackground variant="particles" intensity="medium" />
      <FloatingElements />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular solutions trusted by businesses worldwide
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400">({service.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={solution.path}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our cutting-edge technology solutions that are shaping 
              the future of business and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Master</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks we use to deliver exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-medium text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      <HeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <EnhancedHeroSection />
=======
      <FuturisticHero />

      <EnhancedServicesShowcase />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasShowcase />
=======
      <MicroSaasShowcase />
      
      <FeatureHighlights />
      
      <ServicesOverview />
=======
      <ServicesShowcase />
=======
      <TestimonialCarousel />
=======
      <ComprehensiveServicesShowcase />
=======
      <ServicesOverview />
=======
      <ServicesOverview />
      
      <ServiceRecommendations maxRecommendations={6} />
=======
      <AdvancedServicesShowcase />
=======
      <MicroSaasShowcase />
=======
      <ServicesShowcase />
=======
      <EnhancedServicesShowcase />
=======
      <ServicesShowcase />
=======
      <EnhancedServicesShowcase />
      
      <CategoriesSection />
      <ServicesShowcase />
=======
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent neon-pulse">
                  Tech Services
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover the world's premier marketplace for cutting-edge AI services, 
                technology solutions, and innovative micro SAAS offerings. 
                Transform your business with our expert ecosystem.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/services">
                  <Button size="lg" className="cyber-button px-8 py-4 text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Explore Services
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                {STATS_DATA.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.number}</div>
                    <div className="text-sm text-zion-slate-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="w-96 h-96 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl absolute -top-20 -left-20"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl absolute -bottom-20 -right-20"></div>
                
                {/* Floating service cards */}
                <div className="relative space-y-4">
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-4 float">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8 text-zion-cyan" />
                      <div>
                        <h4 className="text-white font-semibold">AI Development</h4>
                        <p className="text-zion-slate-light text-sm">Custom ML models</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-4 float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <Cloud className="w-8 h-8 text-zion-purple" />
                      <div>
                        <h4 className="text-white font-semibold">Cloud Migration</h4>
                        <p className="text-zion-slate-light text-sm">Seamless transition</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-4 float" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-zion-cyan" />
                      <div>
                        <h4 className="text-white font-semibold">Cybersecurity</h4>
                        <p className="text-zion-slate-light text-sm">Threat protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Premier Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of cutting-edge technology services, 
              each designed to address specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-fade-in">
            {SERVICE_HIGHLIGHTS.map((service, index) => (
              <Link 
                key={service.title} 
                to={service.link}
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {tech.price}
                    </span>
                  </div>
                  
                  <Link
                    to={tech.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Explore Technology
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through our comprehensive service ecosystem and expert team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-zion-cyan font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">4.8+</span>
                  </div>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      <FloatingCTA />
=======
    <div className="min-h-screen bg-background" id="main-content">
      <CategoriesSection />
      <ServicesShowcase />
=======
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


"`



