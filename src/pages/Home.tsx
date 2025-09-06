import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import ParticleBackground from '../components/ParticleBackground';
<<<<<<< HEAD
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  Zap,
  Target
=======
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';
=======
import { BackToTopButton } from '../components/BackToTopButton';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onMenuClick={() => {}} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <GradientHeading text="Welcome to Zion Tech Group" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Leading provider of AI-powered technology solutions and enterprise services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
=======
    <div className="relative">
      <ParticleBackground particleCount={30} />
      <motion.div 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <div className="container mx-auto px-4 py-16">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" onClick={() => window.location.href = '/services'}>
              Explore Our Services
            </Button>
            <Button variant="secondary" size="large" onClick={() => window.location.href = '/contact'}>
              Get Started
            </Button>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={itemVariants}>
          <ServiceCard
            title="AI Services"
            description="Transform your business with cutting-edge AI solutions."
            icon="✨"
            features={["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]}
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions."
            icon="🔒"
            features={["Threat Detection", "Data Encryption", "Security Audits", "Incident Response"]}
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions."
            icon="☁️"
            features={["Cloud Migration", "Auto Scaling", "Load Balancing", "Disaster Recovery"]}
          />
        </motion.div>

        {/* Statistics Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Team</div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Innovation" description="Pioneering the next generation of technology." />
            <Card title="Expertise" description="Team of industry-leading professionals." />
            <Card title="Reliability" description="Trusted solutions for critical operations." />
            <Card title="Scalability" description="Solutions designed to grow with you." />
            <Card title="Security" description="Robust protection for all your data." />
            <Card title="Support" description="24/7 dedicated customer assistance." />
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-12 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations."
              </p>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-gray-400 text-sm">CEO, TechCorp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "Outstanding cybersecurity implementation. Our data has never been safer."
              </p>
              <div className="text-white font-semibold">Michael Chen</div>
              <div className="text-gray-400 text-sm">CTO, SecureData</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "The cloud migration was seamless. Highly recommend their expertise."
              </p>
              <div className="text-white font-semibold">Emily Rodriguez</div>
              <div className="text-gray-400 text-sm">VP Operations, CloudFirst</div>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Zion Tech Group for their technology needs. 
            Let's build the future together.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href = '/contact'}>
            Start Your Journey
          </Button>
        </motion.div>
      </div>
<<<<<<< HEAD
    </>
=======
      </motion.div>
      <BackToTopButton />
    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
  );
};

export default Home;