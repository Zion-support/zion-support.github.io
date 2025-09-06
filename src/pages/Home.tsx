import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import ParticleBackground from '../components/ParticleBackground';
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';
import { BackToTopButton } from '../components/BackToTopButton';

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
      </motion.div>
      <BackToTopButton />
    </div>
  );
};


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">
          Leading provider of innovative technology solutions, AI services, and IT solutions
          for businesses worldwide.
        </p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;