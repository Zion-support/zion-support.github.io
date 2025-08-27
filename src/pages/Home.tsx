import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill
} from 'lucide-react';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with innovative technology",
      color: "from-yellow-500 to-green-500"
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: "Fast Implementation",
      description: "Get your solutions up and running in weeks, not months"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Trusted by Fortune 500 companies worldwide"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions that grow with your business needs"
    },
    {
      icon: CheckCircle,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance"
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Zion Tech Group delivers cutting-edge technology solutions that drive innovation, 
              enhance security, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
<<<<<<< HEAD
            Pioneering the future of technology with cutting-edge AI, cybersecurity, and digital transformation solutions
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
=======
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-blue-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<<<<<<< HEAD
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
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in delivering innovative technology solutions that drive business growth 
              and digital transformation across industries.
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
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
=======
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all duration-300 transform hover:scale-105">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions 
              that exceed expectations and drive measurable results.
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
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
<<<<<<< HEAD
};

export default Home;
=======
}
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
