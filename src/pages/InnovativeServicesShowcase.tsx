import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
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
  Zap as ZapIcon,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const InnovativeServicesShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const innovativeServices = [
    {
      id: "ai-financial-services-platform",
      title: "AI-Powered Financial Services Platform",
      description: "Comprehensive AI-driven financial platform offering automated trading, risk assessment, fraud detection, and personalized financial planning with real-time market analysis.",
      category: "AI & Financial Technology",
      price: "$899/month",
      marketPrice: "$899 - $3,500/month",
      features: ["AI-powered algorithmic trading", "Real-time risk assessment", "Advanced fraud detection", "Portfolio optimization"],
      benefits: ["Increase trading efficiency by 300%", "Reduce fraud losses by 95%", "Improve portfolio returns by 25%"],
      icon: BarChart3,
      path: "/ai-financial-services-platform",
      technology: ["Python", "TensorFlow", "PyTorch", "React", "AWS"],
      compliance: ["SOX", "Basel III", "Dodd-Frank", "GDPR", "SOC 2"],
      roi: "500% within 6 months"
    },
    {
      id: "sustainable-technology-platform",
      title: "Sustainable Technology Solutions Platform",
      description: "Comprehensive platform for monitoring, managing, and optimizing environmental impact across organizations using IoT sensors, AI analytics, and sustainability metrics.",
      category: "Sustainability & Green Tech",
      price: "$599/month",
      marketPrice: "$599 - $2,000/month",
      features: ["Carbon footprint tracking", "Energy consumption monitoring", "Waste management optimization", "Sustainability scorecards"],
      benefits: ["Reduce carbon footprint by 40%", "Lower energy costs by 30%", "Achieve sustainability certifications faster"],
      icon: Globe,
      path: "/sustainable-technology-platform",
      technology: ["IoT sensors", "React", "Python", "Machine Learning", "Cloud computing"],
      compliance: ["ISO 14001", "LEED", "BREEAM", "Environmental regulations"],
      roi: "200% within 12 months"
    },
    {
      id: "edge-computing-iot-platform",
      title: "Edge Computing & IoT Services Platform",
      description: "Advanced edge computing platform that processes data locally using distributed computing, AI inference, and real-time analytics for IoT devices and edge networks.",
      category: "Edge Computing & IoT",
      price: "$799/month",
      marketPrice: "$799 - $2,500/month",
      features: ["Distributed edge computing", "Real-time AI inference", "IoT device management", "Low-latency processing"],
      benefits: ["Reduce latency by 90%", "Lower bandwidth costs by 60%", "Improve reliability with local processing"],
      icon: Cpu,
      path: "/edge-computing-iot-platform",
      technology: ["Kubernetes", "Docker", "Python", "Rust", "React", "Edge AI frameworks"],
      compliance: ["ISO 27001", "SOC 2", "GDPR", "Industry-specific standards"],
      roi: "400% within 8 months"
    },
    {
      id: "advanced-healthcare-ai-platform",
      title: "Advanced Healthcare AI Solutions Platform",
      description: "Comprehensive AI platform for healthcare providers offering diagnostic assistance, patient monitoring, drug discovery, and personalized treatment recommendations.",
      category: "AI & Healthcare",
      price: "$1,299/month",
      marketPrice: "$1,299 - $5,000/month",
      features: ["AI-powered diagnostic imaging", "Patient monitoring and alerts", "Drug discovery acceleration", "Personalized treatment plans"],
      benefits: ["Improve diagnostic accuracy by 30%", "Reduce treatment costs by 25%", "Accelerate drug discovery by 50%"],
      icon: Shield,
      path: "/advanced-healthcare-ai-platform",
      technology: ["TensorFlow", "PyTorch", "React", "Python", "Medical imaging libraries"],
      compliance: ["HIPAA", "FDA", "CE marking", "ISO 13485", "SOC 2"],
      roi: "300% within 12 months"
    },
    {
      id: "green-energy-management-system",
      title: "Green Energy Management System",
      description: "Intelligent energy management platform that optimizes renewable energy usage, manages microgrids, and provides real-time energy analytics for sustainable operations.",
      category: "Green Energy & Sustainability",
      price: "$699/month",
      marketPrice: "$699 - $2,200/month",
      features: ["Renewable energy optimization", "Microgrid management", "Energy storage optimization", "Predictive energy analytics"],
      benefits: ["Reduce energy costs by 35%", "Increase renewable energy usage by 50%", "Lower carbon emissions by 40%"],
      icon: Zap,
      path: "/green-energy-management-system",
      technology: ["IoT sensors", "Machine Learning", "React", "Python", "Energy management protocols"],
      compliance: ["ISO 50001", "LEED", "Energy Star", "Local energy regulations"],
      roi: "250% within 18 months"
    },
    {
      id: "smart-city-infrastructure-platform",
      title: "Smart City Infrastructure Solutions Platform",
      description: "Comprehensive platform for managing smart city infrastructure including traffic management, public safety, utilities, and citizen services using IoT, AI, and data analytics.",
      category: "Smart Cities & Infrastructure",
      price: "$999/month",
      marketPrice: "$999 - $3,500/month",
      features: ["Intelligent traffic management", "Public safety monitoring", "Utility infrastructure management", "Citizen service portals"],
      benefits: ["Reduce traffic congestion by 25%", "Improve public safety response by 40%", "Lower infrastructure costs by 20%"],
      icon: Network,
      path: "/smart-city-infrastructure-platform",
      technology: ["IoT sensors", "AI/ML", "React", "Python", "GIS systems", "5G networks"],
      compliance: ["Government security standards", "Data privacy regulations", "Infrastructure safety codes"],
      roi: "300% within 24 months"
    },
    {
      id: "advanced-robotics-automation",
      title: "Advanced Robotics & Automation Platform",
      description: "Next-generation robotics platform that combines AI, computer vision, and advanced automation for manufacturing, logistics, healthcare, and service industries.",
      category: "Robotics & Automation",
      price: "$1,499/month",
      marketPrice: "$1,499 - $5,000/month",
      features: ["AI-powered computer vision", "Advanced motion planning", "Collaborative robotics", "Predictive maintenance"],
      benefits: ["Increase production efficiency by 45%", "Reduce operational costs by 30%", "Improve product quality by 25%"],
      icon: Bot,
      path: "/advanced-robotics-automation",
      technology: ["ROS", "Computer Vision", "Machine Learning", "Python", "C++", "React"],
      compliance: ["ISO 13482", "ANSI/RIA R15.06", "Safety standards", "Industry regulations"],
      roi: "400% within 18 months"
    },
    {
      id: "quantum-machine-learning-platform",
      title: "Quantum Machine Learning Platform",
      description: "Revolutionary platform that combines quantum computing with machine learning to solve complex optimization problems, accelerate drug discovery, and advance scientific research.",
      category: "Quantum Computing & AI",
      price: "$1,999/month",
      marketPrice: "$1,999 - $8,000/month",
      features: ["Quantum algorithm optimization", "Hybrid quantum-classical ML", "Quantum neural networks", "Optimization problem solving"],
      benefits: ["Solve previously intractable problems", "Accelerate research by 1000x", "Enable breakthrough discoveries"],
      icon: Microchip,
      path: "/quantum-machine-learning-platform",
      technology: ["Qiskit", "Cirq", "PennyLane", "Python", "Quantum algorithms"],
      compliance: ["Research ethics", "Data security", "Intellectual property protection"],
      roi: "1000% within 36 months"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % innovativeServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + innovativeServices.length) % innovativeServices.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Innovative Technology Services Showcase - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, robotics, and sustainable technology solutions. Transform your business with our innovative micro SAAS services."
        keywords="AI solutions, quantum computing, robotics, sustainable technology, edge computing, smart cities, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Innovative Technology
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI, quantum computing, robotics, and sustainable technology solutions that will transform your business and drive innovation across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured Innovative Services
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 p-8">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {innovativeServices[currentSlide].title}
                  </h3>
                  <p className="text-gray-300">{innovativeServices[currentSlide].category}</p>
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 mb-6 text-lg">
                    {innovativeServices[currentSlide].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {innovativeServices[currentSlide].features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl font-bold text-white">{innovativeServices[currentSlide].price}</div>
                    <div className="text-gray-400">Market: {innovativeServices[currentSlide].marketPrice}</div>
                  </div>
                  
                  <Link
                    to={innovativeServices[currentSlide].path}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
                    <innovativeServices[currentSlide].icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">ROI</div>
                    <div className="text-cyan-400 font-semibold">{innovativeServices[currentSlide].roi}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {innovativeServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            All Innovative Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">ROI: {service.roi}</div>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how our innovative technology solutions can drive your business forward and create competitive advantages in your industry.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="w-8 h-8 text-cyan-400 mr-3" />
              <div className="text-left">
                <div className="text-white font-semibold">Phone</div>
                <div className="text-cyan-400">+1 302 464 0950</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <Mail className="w-8 h-8 text-cyan-400 mr-3" />
              <div className="text-left">
                <div className="text-white font-semibold">Email</div>
                <div className="text-cyan-400">kleber@ziontechgroup.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <MapPin className="w-8 h-8 text-cyan-400 mr-3" />
              <div className="text-left">
                <div className="text-white font-semibold">Address</div>
                <div className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase;