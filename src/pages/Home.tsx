import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Services",
      description: "Advanced AI-powered solutions including machine learning, natural language processing, and computer vision for modern businesses.",
      features: ["Custom AI Models", "Chatbot Development", "Data Analytics", "Predictive Insights"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive managed IT and cybersecurity solutions to protect and optimize your business infrastructure.",
      features: ["Network Security", "Cloud Migration", "System Monitoring", "24/7 Support"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Scalable software solutions and custom applications designed to grow with your business needs.",
      features: ["Custom Development", "API Integration", "Scalable Architecture", "Maintenance & Support"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our AI capabilities. Their solutions increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      content: "Outstanding IT support and security implementation. We sleep better knowing our systems are protected.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthCo",
      content: "The custom SAAS solution they built scales perfectly with our business. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
              <a href="/about" className="hover:text-blue-300 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a>
              <a href="/contact" className="hover:text-blue-300 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
                <a href="/about" className="hover:text-blue-300 transition-colors">About</a>
                <a href="#testimonials" className="hover:text-blue-300 transition-colors">Testimonials</a>
                <a href="/contact" className="hover:text-blue-300 transition-colors">Contact</a>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Innovative IT Solutions & AI Services for the Modern Enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
              <span>Explore Services</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-semibold">
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-sm text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-sm text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">99%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-200 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 px-6 py-3 rounded-full hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-200 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-blue-300">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/contact" className="border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-blue-200 text-sm">
                Innovative IT solutions and AI services for the modern enterprise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="/services" className="hover:text-white transition-colors">AI Services</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">IT Services</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Micro SAAS</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-blue-200">
            <p>&copy; 2024 Zion Tech Group. All rights reserved. Successfully built and deployed on Netlify! 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;