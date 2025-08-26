import React, { useState, useEffect, Suspense } from 'react';
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
import { SEOHead } from '../components/SEOHead';

// Lazy load components for better performance
const LazyServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const LazyFeaturesSection = React.lazy(() => import('../components/home/FeaturesSection'));
const LazyTestimonialsSection = React.lazy(() => import('../components/home/TestimonialsSection'));
const LazyCTASection = React.lazy(() => import('../components/home/CTASection'));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // SEO metadata for the home page
  const seoMetadata = {
    title: "AI-Powered Innovation & Enterprise Solutions",
    description: "Transform your business with cutting-edge AI solutions, comprehensive IT services, and digital transformation expertise. Leading technology consulting for modern enterprises.",
    keywords: "AI solutions, artificial intelligence, enterprise IT, cybersecurity, cloud computing, digital transformation, Zion Tech Group",
    type: "website" as const,
    url: "https://ziontechgroup.com"
  };

  const heroSlides = [
    {
      title: "AI-Powered Business Transformation",
      subtitle: "Revolutionize Your Business with Next-Generation AI Solutions",
      description: "Unlock unprecedented growth with our cutting-edge AI platforms. From autonomous systems to quantum computing, we deliver the future of business technology today.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Start Your AI Journey",
      path: "/ai-solutions",
      features: ["Autonomous AI Systems", "Quantum Computing", "Machine Learning", "Predictive Analytics"]
    },
    {
      title: "Enterprise-Grade IT Infrastructure",
      subtitle: "Scalable, Secure, and Future-Ready Technology Solutions",
      description: "Build a technology foundation that grows with your business. Our enterprise solutions ensure 99.9% uptime, military-grade security, and seamless scalability.",
      image: "/images/hero-it-services.jpg",
      cta: "Explore Infrastructure",
      path: "/services",
      features: ["Cloud-Native Architecture", "Zero-Trust Security", "DevOps Automation", "24/7 Global Support"]
    },
    {
      title: "Innovative Micro-SaaS Platform",
      subtitle: "Custom Software Solutions That Drive Results",
      description: "Transform your business processes with our innovative micro-SaaS solutions. Built for scale, designed for success, and optimized for your unique needs.",
      image: "/images/hero-saas.jpg",
      cta: "Discover SaaS Solutions",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "AI Integration", "Scalable Architecture", "Enterprise Security"]
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Global Clients", description: "Trusted by enterprises worldwide" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", description: "Proven track record of excellence" },
    { icon: Award, value: "15+", label: "Years Experience", description: "Deep industry expertise & innovation" },
    { icon: Globe, value: "50+", label: "Countries Served", description: "Global reach with local expertise" }
  ];

  const featuredServices = [
    {
      title: "AI Autonomous Business Platform",
      description: "Revolutionary AI platform that autonomously manages your entire business operations. From decision-making to process optimization, experience the future of business automation.",
      icon: Brain,
      path: "/services/ai-autonomous-systems",
      category: "AI Solutions",
      price: "$5,000/mo",
      rating: 4.9,
      reviewCount: 234,
      highlights: ["Autonomous Operations", "AI Decision Making", "Real-time Optimization", "Predictive Analytics"],
      features: ["Machine Learning", "Process Automation", "API Integration", "24/7 AI Support", "Custom AI Models", "Performance Monitoring"]
    },
    {
      title: "Quantum-Safe Cybersecurity",
      description: "Next-generation security platform built for the quantum era. Protect your data with quantum-resistant encryption and AI-powered threat detection.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$4,500/mo",
      rating: 4.9,
      reviewCount: 189,
      highlights: ["Quantum-Safe Encryption", "AI Threat Detection", "Zero-Trust Security", "24/7 Monitoring"],
      features: ["Quantum Cryptography", "Penetration Testing", "Incident Response", "Security Training", "Compliance Management", "Threat Intelligence"]
    },
    {
      title: "Enterprise Cloud Platform",
      description: "Multi-cloud infrastructure designed for enterprise scale and performance. Achieve 99.99% uptime with intelligent auto-scaling and cost optimization.",
      icon: Cloud,
      path: "/services/cloud-infrastructure",
      category: "Infrastructure",
      price: "$3,200/mo",
      rating: 4.8,
      reviewCount: 156,
      highlights: ["99.99% Uptime", "Intelligent Scaling", "Cost Optimization", "Global CDN"],
      features: ["Multi-Cloud Management", "Load Balancing", "Auto-scaling", "Monitoring", "Security Compliance", "Disaster Recovery"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with sub-100ms response times and 99.99% uptime guarantees"
    },
    {
      icon: Lock,
      title: "Military-Grade Security",
      description: "Zero-trust architecture with quantum-safe encryption and AI-powered threat detection"
    },
    {
      icon: Cpu,
      title: "Infinite Scalability",
      description: "Auto-scaling infrastructure that grows with your business, from startup to enterprise"
    },
    {
      icon: Database,
      title: "AI-Powered Insights",
      description: "Real-time analytics and predictive intelligence that transform data into actionable strategies"
    }
  ];

  const trustSignals = [
    { icon: Eye, label: "Transparent Pricing", description: "Clear, upfront costs with no hidden fees" },
    { icon: Heart, label: "Customer Success", description: "Your growth and success drive everything we do" },
    { icon: TargetIcon, label: "Results Guaranteed", description: "Measurable outcomes with performance guarantees" },
    { icon: Sparkles, label: "Innovation Pioneer", description: "Leading the future of business technology" }
  ];

  const aiServices = [
    {
      title: "AI Autonomous Business Systems",
      description: "Self-managing AI platforms that autonomously optimize your entire business operations",
      icon: Bot,
      path: "/services/ai-autonomous-systems",
      features: ["Self-Learning AI", "Autonomous Decision Making", "Continuous Optimization", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing for complex problem-solving and optimization",
      icon: Microchip,
      path: "/services/quantum-technology",
      features: ["Quantum Processing", "Quantum-Safe Security", "Quantum Algorithms", "Hybrid Computing"]
    },
    {
      title: "Advanced Machine Learning",
      description: "Custom ML models and AI solutions tailored to your specific business challenges",
      icon: Brain,
      path: "/ai-solutions",
      features: ["Custom AI Models", "Data Training", "Model Deployment", "AI Integration"]
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "AI-powered healthcare solutions",
      icon: ShieldCheck,
      path: "/solutions/healthcare",
      features: ["Patient Care", "Diagnostics", "Administrative Efficiency"]
    },
    {
      title: "Finance",
      description: "Financial technology innovations",
      icon: BarChart,
      path: "/solutions/enterprise",
      features: ["Risk Management", "Fraud Detection", "Automated Trading"]
    },
    {
      title: "Manufacturing",
      description: "Smart manufacturing solutions",
      icon: Cpu,
      path: "/solutions/enterprise",
      features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization"]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, heroSlides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...seoMetadata} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
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
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
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
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and customer success has made us a trusted partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <signal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{signal.label}</h3>
                <p className="text-gray-300">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <LazyServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <LazyFeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>
    </div>
  );
}

export default Home;