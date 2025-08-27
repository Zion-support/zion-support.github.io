import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for business transformation"
    },
    {
      icon: <Shield className="w-8 h-8 text-zion-purple" />,
      title: "Enterprise Security",
      description: "Military-grade cybersecurity and compliance solutions"
    },
    {
      icon: <Brain className="w-8 h-8 text-zion-green" />,
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics"
    },
    {
      icon: <Cloud className="w-8 h-8 text-zion-cyan-light" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses"
    }
  ];

  const stats = [
    { number: "500+", label: "Global Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Countries" }
  ];

  const services = [
    {
      title: "AI Autonomous Systems",
      description: "Self-learning AI platforms for business automation",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-services"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced threat detection and prevention",
      icon: <Shield className="w-6 h-6" />,
      link: "/cybersecurity"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment automation",
      icon: <Cloud className="w-6 h-6" />,
      link: "/cloud-devops"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business modernization services",
      icon: <Rocket className="w-6 h-6" />,
      link: "/digital-transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="futuristic-heading mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.p 
            className="futuristic-text text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering the future of technology with cutting-edge AI, cybersecurity, and digital transformation solutions
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/services" className="futuristic-button">
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="futuristic-button-outline">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="futuristic-heading text-3xl md:text-4xl mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              We combine innovation with reliability to deliver solutions that drive business growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="futuristic-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="futuristic-text">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-blue/10 via-zion-purple/10 to-zion-cyan/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">
                  {stat.number}
                </div>
                <div className="futuristic-text">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="futuristic-heading text-3xl md:text-4xl mb-4">
              Our Core Services
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="futuristic-card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link to={service.link} className="block">
                  <div className="mb-4 text-zion-cyan group-hover:text-zion-purple transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="futuristic-text mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="futuristic-heading text-3xl md:text-4xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="futuristic-text text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging Zion Tech Group's innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="futuristic-button">
                Start Your Journey
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/about" className="futuristic-button-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;