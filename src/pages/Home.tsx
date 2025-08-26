import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Code,
  Rocket
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"]
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"]
    },
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images/hero-green-it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: Brain,
      path: "/services/ai-solutions",
      category: "AI Solutions",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "AI Insights"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability and performance.",
      icon: Cloud,
      path: "/services/cloud",
      category: "Infrastructure",
      price: "$1,800/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["99.9% Uptime", "Auto-scaling", "Security First", "Cost Optimization"]
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with enterprise-grade security solutions. From threat detection to compliance management, we've got you covered.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$3,200/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Threat Detection", "24/7 Monitoring", "Compliance", "Incident Response"]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that scales with your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2 compliance and regular audits"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with our distributed infrastructure"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Intelligent automation and insights that drive business growth"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Solutions",
      content: "Zion Tech Group transformed our business operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings.",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The team at Zion delivered exceptional results. Their expertise in cloud infrastructure and cybersecurity gave us the confidence to scale rapidly.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow Inc",
      content: "Working with Zion has been a game-changer. Their AI-powered insights have helped us make better decisions and improve customer satisfaction.",
      rating: 5,
      company: "DataFlow"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {heroSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                      <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                          {slide.title}
                        </h1>
                        <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                          {slide.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={slide.path}
                          className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
                        >
                          {slide.cta}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                      <div className="bg-zion-blue-light/20 rounded-xl h-64 flex items-center justify-center">
                        <span className="text-zion-slate-light text-lg">{slide.image}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-zion-cyan' : 'bg-zion-slate-light/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-zion-cyan mb-2">{stat.label}</p>
                <p className="text-zion-slate-light">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.path}
                  className="block w-full text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate/50 to-zion-slate/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              From AI and quantum computing to blockchain and IoT, we offer cutting-edge solutions that drive innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Analytics */}
            <div className="card-futuristic group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Analytics</h3>
              <p className="text-zion-cyan/70 mb-4">Advanced artificial intelligence and machine learning solutions for data-driven decision making.</p>
              <ul className="text-sm text-zion-cyan/60 mb-6 space-y-2">
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Deep Learning</li>
              </ul>
              <Link to="/services/ai-analytics" className="text-zion-cyan hover:text-white transition-colors font-medium">
                Explore AI Solutions →
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="card-futuristic group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
              <p className="text-zion-cyan/70 mb-4">Revolutionary quantum computing solutions for complex optimization and cryptography.</p>
              <ul className="text-sm text-zion-cyan/60 mb-6 space-y-2">
                <li>• Quantum Algorithms</li>
                <li>• Quantum Machine Learning</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Internet</li>
              </ul>
              <Link to="/services/quantum-computing" className="text-zion-cyan hover:text-white transition-colors font-medium">
                Discover Quantum →
              </Link>
            </div>

            {/* Blockchain & Web3 */}
            <div className="card-futuristic group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue/20 to-zion-cyan/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Blockchain & Web3</h3>
              <p className="text-zion-cyan/70 mb-4">Next-generation decentralized applications and DeFi platforms.</p>
              <ul className="text-sm text-zion-cyan/60 mb-6 space-y-2">
                <li>• Smart Contracts</li>
                <li>• DeFi Platforms</li>
                <li>• NFT Marketplaces</li>
                <li>• Web3 Development</li>
              </ul>
              <Link to="/services/blockchain" className="text-zion-cyan hover:text-white transition-colors font-medium">
                Build on Blockchain →
              </Link>
            </div>

            {/* IoT & Edge Computing */}
            <div className="card-futuristic group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-green/20 to-zion-cyan/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-zion-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IoT & Edge Computing</h3>
              <p className="text-zion-cyan/70 mb-4">Intelligent edge computing solutions for real-time data processing.</p>
              <ul className="text-sm text-zion-cyan/60 mb-6 space-y-2">
                <li>• Edge AI Processing</li>
                <li>• Smart Sensors</li>
                <li>• Real-time Analytics</li>
                <li>• Predictive Maintenance</li>
              </ul>
              <Link to="/services/iot-edge" className="text-zion-cyan hover:text-white transition-colors font-medium">
                Connect Everything →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="card-futuristic group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-red/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-zion-red" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-zion-cyan/70 mb-4">Advanced security solutions with AI-powered threat detection.</p>
              <ul className="text-sm text-zion-cyan/60 mb-6 space-y-2">
                <li>• AI Threat Detection</li>
                <li>• Zero-trust Security</li>
                <li>• Incident Response</li>
                <li>• Compliance Management</li>
              </ul>
              <Link to="/services/cybersecurity" className="text-zion-cyan hover:text-white transition-colors font-medium">
                Secure Your Business →
              </Link>
            </div>

            {/* Digital Twin */}
            <div className="card-futuristic group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Digital Twin</h3>
              <p className="text-zion-cyan/70 mb-4">Virtual replicas for real-time monitoring and simulation.</p>
              <ul className="text-sm text-zion-cyan/60 mb-6 space-y-2">
                <li>• 3D Visualization</li>
                <li>• Real-time Monitoring</li>
                <li>• Predictive Analytics</li>
                <li>• Simulation Engine</li>
              </ul>
              <Link to="/services/digital-twin" className="text-zion-cyan hover:text-white transition-colors font-medium">
                Create Virtual Worlds →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 font-medium transform hover:scale-105"
            >
              View All 100+ Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-futuristic text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-cyan/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                    <span className="text-zion-cyan font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                    <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already transformed their operations 
            with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
