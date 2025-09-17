import LatestContentPromotion2029 from '@/components/LatestContentPromotion2029';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import NewContentPromotionBanner2026 from '../components/NewContentPromotionBanner2026';
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';
import { useNotifications } from '../context/notifications/NotificationContext';

<<<<<<< HEAD
const Home: React.FC = () => {
  const { addNotification } = useNotifications();

  useEffect(() => {
    addNotification({
      type: 'info',
      title: 'Welcome to Zion Tech Group 2026!',
      message: 'Explore our revolutionary AI, quantum computing, and cybersecurity solutions.',
      duration: 5000,
    });
  }, [addNotification]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <NewContentPromotionBanner2026 />
      <Helmet>
        <title>Zion Tech Group 2026 - Revolutionary AI, Quantum Computing & Cybersecurity Solutions</title>
        <meta name="description" content="Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions. Discover the next generation of technology that will transform your business." />
        <meta name="keywords" content="AI solutions, quantum computing, cybersecurity, technology innovation, Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <LatestContentPromotion2029 />
        </div>
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Zion Tech Group 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Leading the future with revolutionary AI, quantum computing, and cybersecurity solutions. Discover the next generation of technology that will transform your business and reshape reality itself.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link to="/pages/RevolutionaryAIServices2026" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">🚀 Revolutionary AI Services</Link>
            <Link to="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">⚛️ Quantum Computing Revolution</Link>
            <Link to="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">🛡️ Cybersecurity Solutions</Link>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6 text-center">Revolutionary AI systems that exhibit true consciousness and self-awareness, capable of independent thought and creative problem-solving.</p>
            <div className="text-center">
              <Link to="/pages/RevolutionaryAIServices2026" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">Explore AI Services →</Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Quantum Computing</h3>
            <p className="text-gray-300 mb-6 text-center">Ultra-fast quantum processing that transcends classical limitations, enabling computations across multiple dimensions and realities.</p>
            <div className="text-center">
              <Link to="/pages/QuantumComputingRevolution2026" className="text-purple-400 hover:text-purple-300 font-semibold text-lg">Discover Quantum Tech →</Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="text-6xl mb-6 text-center">🔒</div>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">AI Cybersecurity</h3>
            <p className="text-gray-300 mb-6 text-center">Advanced AI-powered security systems that predict and prevent threats before they occur, protecting across all dimensions.</p>
            <div className="text-center">
              <Link to="/pages/CybersecurityFortress2025" className="text-green-400 hover:text-green-300 font-semibold text-lg">Secure Your Future →</Link>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-20">
          <EnhancedContentShowcase />
        </div>

        <div className="container mx-auto px-4 py-20">
          <RevolutionaryContentShowcase />
        </div>

        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">🔥 Latest Revolutionary Content 2026</h2>
            <p className="text-xl text-gray-300">Explore our newest groundbreaking content and technologies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Trends 2026 Insights</h3>
              <p className="text-gray-300 mb-6">Discover the revolutionary AI technologies shaping the future</p>
              <Link to="/pages/AITrends2026Insights" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300">Explore Trends →</Link>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Case Studies</h3>
              <p className="text-gray-300 mb-6">Explore groundbreaking success stories across industries</p>
              <Link to="/pages/RevolutionaryCaseStudies2026" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300">View Success Stories →</Link>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultimate Tech Showcase</h3>
              <p className="text-gray-300 mb-6">Experience the pinnacle of revolutionary technologies</p>
              <Link to="/pages/UltimateTechShowcase2026" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300">Explore Technologies →</Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">New: 2026 AI Executive Strategy</h3>
              <p className="text-gray-300 mb-6">A concise guide for leaders to adopt AI responsibly and effectively.</p>
              <Link to="/pages/AIExecutiveStrategy2026" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300">Read the Strategy →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">🚀 AI 2026: Enterprise Automation</h3>
              <p className="text-gray-300 mb-6">Transform your business with next-generation AI automation that learns and scales autonomously.</p>
              <Link to="/pages/AI2026EnterpriseAutomation" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300">Explore Now →</Link>
            </div>
          </div>
        </div>

        <motion.div className="text-center bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl p-12 border border-cyan-400/30 mt-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Reality?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join the revolution and experience the future of technology. Our revolutionary solutions are changing the world, one breakthrough at a time.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/pages/RevolutionaryAIServices2026" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">Explore All Services</Link>
            <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">Get Started Today</Link>
          </div>
        </motion.div>
      </div>
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Code, 
  Cloud, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Lock
} from 'lucide-react';

export default function Home() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: Rocket },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: Shield },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: Zap },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: Brain },
  ];

  const services = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable, focused software solutions for specific business needs',
      icon: '💼',
      features: ['Custom Development', 'API Integration', 'Cloud Deployment', '24/7 Support'],
      link: '/services/micro-saas'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business automation',
      icon: '🧠',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      link: '/services/ai-ml'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions for scalability and reliability',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Disaster Recovery'],
      link: '/services/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: '🔒',
      features: ['Threat Detection', 'Penetration Testing', 'Compliance Auditing', 'Incident Response'],
      link: '/services/cybersecurity'
    }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️', description: 'Modern web development' },
    { name: 'Node.js & Python', icon: '🐍', description: 'Backend & AI development' },
    { name: 'AWS & Azure', icon: '☁️', description: 'Cloud infrastructure' },
    { name: 'Docker & Kubernetes', icon: '🐳', description: 'Container orchestration' },
    { name: 'TensorFlow & PyTorch', icon: '🤖', description: 'Machine learning' },
    { name: 'Blockchain & Web3', icon: '⛓️', description: 'Decentralized solutions' }
  ];

  const quickActions = [
    { title: 'Get Started', description: 'Start your free trial today', action: 'Start Free Trial', link: '/signup', icon: Rocket },
    { title: 'View Services', description: 'Explore our service catalog', action: 'Browse Services', link: '/services', icon: Code },
    { title: 'Contact Sales', description: 'Talk to our experts', action: 'Contact Us', link: '/contact', icon: Users },
    { title: 'Documentation', description: 'Learn how to use our platform', action: 'View Docs', link: '/docs', icon: Database }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow Inc',
      company: 'TechFlow Inc',
      content: 'Zion Tech Group transformed our entire tech infrastructure. Their micro SaaS solutions are game-changing.',
      rating: 5,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Founder at StartupXYZ',
      company: 'StartupXYZ',
      content: 'The AI solutions they implemented saved us 40% on operational costs. Highly recommended!',
      rating: 5,
      avatar: '/avatars/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director at GlobalCorp',
      company: 'GlobalCorp',
      content: 'Outstanding cybersecurity implementation. We feel completely secure with their solutions.',
      rating: 5,
      avatar: '/avatars/emily.jpg'
    }
  ];

  const performanceMetrics = [
    { metric: '99.99%', label: 'Uptime', description: 'Guaranteed reliability' },
    { metric: '<100ms', label: 'Response Time', description: 'Lightning fast performance' },
    { metric: '24/7', label: 'Support', description: 'Always available' },
    { metric: '21 Days', label: 'Free Trial', description: 'Risk-free testing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Zion Tech Group - Revolutionary Technology Solutions" 
        description="Transform your business with Zion Tech Group's cutting-edge micro SaaS, AI, cloud infrastructure, and cybersecurity solutions. Start your free trial today."
        keywords="AI, technology, micro SaaS, cloud infrastructure, cybersecurity, machine learning, business automation"
        url="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge micro SaaS, AI-powered automation, and enterprise-grade infrastructure. 
              Join the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickActions.map((action, index) => (
              <div key={action.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <action.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                <a 
                  href={action.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  {action.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{tech.icon}</div>
                <div className="text-white font-medium">{tech.name}</div>
                <div className="text-gray-400 text-sm">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Performance <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Metrics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in these key performance indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-blue-100 font-semibold mb-1">{item.label}</div>
                <div className="text-blue-200 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from the businesses we&apos;ve transformed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.role}</div>
                    <div className="text-blue-300 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-16" aria-label="Contact Information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">📱</div>
                <div className="font-semibold text-lg mb-2">Mobile</div>
                <a 
                  href="tel:+13024640950" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  aria-label="Call us at +1 302 464 0950"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">✉️</div>
                <div className="font-semibold text-lg mb-2">Email</div>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">📍</div>
                <div className="font-semibold text-lg mb-2">Address</div>
                <address className="text-blue-100 not-italic">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </address>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <a 
                href="/contact" 
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Get started with us"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </div>
      </section>
>>>>>>> origin/website-improvements-v2
    </div>
  );
};

export default Home;

