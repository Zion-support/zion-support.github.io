<<<<<<< HEAD
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading AI-powered technology solutions for modern businesses. 
              Transform your digital future with cutting-edge innovation and enterprise-grade reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-2xl inline-block hover:scale-105"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl inline-block hover:scale-105"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
=======
<<<<<<< HEAD
import React from 'react';
=======
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { usePerformance } from '../hooks/usePerformance';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import { trackScrollDepth, trackButtonClick } from '../utils/analytics';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxSection from '../components/ParallaxSection';
import TypingAnimation from '../components/TypingAnimation';
import ParticleBackground from '../components/ParticleBackground';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';

const Home: React.FC = () => {
  usePerformance();

  // Track scroll depth
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        trackScrollDepth(25);
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        trackScrollDepth(50);
      } else if (scrollPercent > 75 && scrollPercent <= 90) {
        trackScrollDepth(75);
      } else if (scrollPercent > 90) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Services",
      description: "Custom AI solutions powered by machine learning and deep learning technologies",
      href: "/services/ai-services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive IT infrastructure and digital transformation solutions",
      href: "/services/it-services"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions for growing businesses",
      href: "/services/micro-saas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      href: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      href: "/services/cloud-solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform data into actionable insights with advanced analytics",
      href: "/services/data-analytics"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized solutions that deliver exceptional performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals with deep technical expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients"
    }
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Advanced Technology Solutions for the Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-foreground/70 leading-relaxed">
              Cutting-edge artificial intelligence solutions for modern businesses. 
              From machine learning models to intelligent automation systems.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl">☁️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-foreground/70 leading-relaxed">
              Scalable cloud infrastructure and deployment solutions. 
              Secure, reliable, and optimized for performance.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-foreground/70 leading-relaxed">
              Complete digital transformation strategies and implementation. 
              Modernize your business with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-xl border p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-foreground/70">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/70">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your business grow and succeed.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======
    </>
  );
};

export default Home;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
>>>>>>> merged-prs-20250907-203621
