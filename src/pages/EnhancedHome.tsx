import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Star,
  CheckCircle,
  Sparkles,
  Rocket,
  Target,
  Brain,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Award,
  Lightbulb,
  Cpu,
  Network,
  BarChart3,
  Code,
  Smartphone,
  Server,
  Wifi,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Download,
  Play,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ModernFeatures from '../components/ModernFeatures';
import EnhancedTestimonials from '../components/EnhancedTestimonials';
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor';

const EnhancedHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll tracking for parallax effects
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced machine learning and artificial intelligence to transform your business operations.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols to protect your data and infrastructure.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology for maximum speed.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Scalable cloud solutions that grow with your business needs.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision making.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and consultants dedicated to your success.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
    { number: '50+', label: 'Expert Engineers', icon: Users },
    { number: '24/7', label: 'Support Available', icon: MessageCircle },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.',
      avatar: '/avatars/sarah.jpg',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'Outstanding security and performance. They delivered exactly what we needed, on time and within budget.',
      avatar: '/avatars/michael.jpg',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, DataFlow',
      content: 'The team\'s expertise in cloud solutions is unmatched. Highly recommend their services.',
      avatar: '/avatars/emily.jpg',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading AI & IT Solutions | Transform Your Business</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge AI and IT solutions from Zion Tech Group. Enterprise security, AI innovation, and expert consulting services."
        />
        <meta name="keywords" content="AI solutions, IT consulting, enterprise security, digital transformation, machine learning, cloud services" />
        <meta property="og:title" content="Zion Tech Group - Leading AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)`,
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {' '}AI Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading-edge AI and IT solutions that drive digital transformation, 
                enhance security, and accelerate growth for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-pulse">
            <div className="w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
            <div className="w-32 h-32 bg-pink-500/20 rounded-full blur-xl" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise 
                to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their 
              digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                View Our Work
                <Eye className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders 
                say about working with Zion Tech Group.
              </p>
            </div>
            <EnhancedTestimonials />
          </div>
        </section>

        {/* Enhanced Performance Monitor */}
        <EnhancedPerformanceMonitor />
      </div>
    </>
  );
};

export default EnhancedHome;