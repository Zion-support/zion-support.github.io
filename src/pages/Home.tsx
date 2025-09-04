import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
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
  ArrowUpRight,
  Sparkles,
  Globe2,
  ShieldCheck,
  Heart,
  Atom,
  ShoppingCart
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      cta: "Explore AI Solutions",
      path: "/services/ai-business-intelligence"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"]
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      cta: "Learn More",
      path: "/services/micro-saas"
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
      description: "Transform data into actionable insights with our AI-powered analytics platform.",
      icon: Brain,
      path: "/services/ai-business-intelligence",
      category: "AI Solutions",
      price: "$2,500/mo",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"]
    },
    {
      title: "Cloud DevOps",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      icon: Cloud,
      path: "/services/cloud-devops",
      category: "Infrastructure",
      price: "$1,800/mo",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Security Best Practices"]
    },
    {
      title: "Digital Twin Platform",
      description: "Create virtual replicas of your physical systems for simulation and optimization.",
      icon: Globe,
      path: "/services/digital-twin",
      category: "Innovation",
      price: "$3,200/mo",
      features: ["3D Modeling", "Real-time Simulation", "Predictive Analytics", "IoT Integration"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Industries",
      content: "Zion Tech Group transformed our data infrastructure and implemented AI solutions that increased our efficiency by 40%. Their expertise and professionalism are unmatched.",
      rating: 5,
      avatar: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateSoft",
      content: "The micro-SaaS solutions we implemented have streamlined our operations significantly. The team at Zion Tech Group is responsive, knowledgeable, and delivers results.",
      rating: 5,
      avatar: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "HealthTech Solutions",
      content: "Working with Zion Tech Group on our healthcare analytics platform has been exceptional. They understand the industry requirements and deliver secure, compliant solutions.",
      rating: 5,
      avatar: "/images/testimonial-3.jpg"
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
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl lg:text-2xl text-cyan-300 mb-4 font-medium">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              {heroSlides[currentSlide].description}
            </p>
            
            {heroSlides[currentSlide].features && (
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {heroSlides[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={heroSlides[currentSlide].path}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Slide Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
          
          {/* Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover our most popular solutions that are transforming businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                    <div className="text-sm text-slate-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions and IT services can help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
