
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
  MapPin
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

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

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  const featuredServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform.",
      icon: Brain,
      path: "/services/ai-business-intelligence",
      category: "AI Solutions",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
      features: ["Machine Learning", "Data Visualization", "API Integration", "24/7 Support"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise-grade performance and reliability.",
      icon: Cloud,
      path: "/services/cloud-infrastructure",
      category: "Infrastructure",
      price: "$1,800/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["Auto-scaling", "99.9% Uptime", "Global CDN"],
      features: ["Load Balancing", "Database Management", "Security", "Monitoring"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and maintain compliance.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$3,200/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Threat Detection", "Compliance", "24/7 Monitoring"],
      features: ["Penetration Testing", "Incident Response", "Training", "Audit Support"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      icon: Zap,
      path: "/services/digital-transformation",
      category: "Consulting",
      price: "$5,000/mo",
      rating: 4.7,
      reviewCount: 73,
      highlights: ["Process Optimization", "Technology Integration", "Change Management"],
      features: ["Strategy Planning", "Implementation", "Training", "Ongoing Support"]
    }
  ];

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms provide real-time insights and predictive analytics.",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      title: "Cloud-Native Architecture",
      description: "Built on modern cloud technologies for scalability, reliability, and performance.",
      icon: Cloud,
      color: "text-blue-400"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2 compliance and advanced threat protection.",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for your critical systems.",
      icon: Clock,
      color: "text-yellow-400"
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% while improving system reliability to 99.9%. The team\'s expertise and dedication are unmatched.',
      rating: 5,
      avatar: '/avatars/sarah.jpg',
      logo: '/logos/techflow.png'
    },
    {
      name: 'Michael Chen',
      position: 'VP of Engineering',
      company: 'InnovateCorp',
      content: 'Working with Zion has been a game-changer for our development team. Their micro SAAS solutions and cloud expertise helped us scale from startup to enterprise in just 18 months. Highly recommended!',
      rating: 5,
      avatar: '/avatars/michael.jpg',
      logo: '/logos/innovatecorp.png'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Director of Digital Transformation',
      company: 'Global Retail Inc.',
      content: 'Zion\'s digital transformation services revolutionized our customer experience. Their AI-driven insights helped us increase online sales by 65% and improve customer satisfaction scores significantly.',
      rating: 5,
      avatar: '/avatars/emily.jpg',
      logo: '/logos/globalretail.png'
    }
  ];

  // Auto-advance hero slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        config={{
          title: "AI-Powered Innovation & Enterprise Solutions",
          description: "Transform your business with cutting-edge artificial intelligence solutions, comprehensive IT services, and digital transformation expertise.",
          keywords: "AI solutions, artificial intelligence, enterprise IT, cybersecurity, cloud computing, digital transformation",
          type: "website"
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
            opacity: 0.3
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {heroSlides[currentSlide].title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
            {heroSlides[currentSlide].subtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {heroSlides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={heroSlides[currentSlide].path}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              aria-label={`Learn more about ${heroSlides[currentSlide].title}`}
            >
              {heroSlides[currentSlide].cta}
            </Link>
            
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Explore all our services"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-500 scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-8 right-8 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlaying ? (
            <div className="w-4 h-4 border-2 border-white border-l-transparent rounded-full animate-spin" />
          ) : (
            <div className="w-4 h-4 border-2 border-white border-l-transparent rounded-full" />
          )}
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most popular solutions that are transforming businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Highlights:</h4>
                  <div className="space-y-1">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={service.path}
                  className="block w-full text-center py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gray-600 rounded-lg ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
