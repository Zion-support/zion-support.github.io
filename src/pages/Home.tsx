import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EnhancedHeroSection } from '../components/EnhancedHeroSection';
import {
  Users,
  TrendingUp,
  Award,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette
} from 'lucide-react';

// Enhanced Hero Section Component
const HeroSection = () => (
  <EnhancedHeroSection
    title="Transform Your Business with AI-Powered Solutions"
    subtitle="Leading the Future of Technology"
    description="Zion Tech Group delivers cutting-edge AI solutions, quantum computing services, and innovative micro SAAS platforms that drive digital transformation and business growth."
    primaryCTA={{
      text: "Get Started",
      href: "/contact"
    }}
    secondaryCTA={{
      text: "Watch Demo",
      href: "#demo"
    }}
    features={[
      {
        icon: <Brain className="w-6 h-6" />,
        title: "AI-Powered",
        description: "Advanced artificial intelligence solutions"
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        title: "Cloud-Native",
        description: "Scalable cloud infrastructure"
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise-Grade",
        description: "Security and compliance focused"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Lightning Fast",
        description: "Optimized for performance"
      }
    ]}
    showVideo={true}
    backgroundType="particles"
  />
);

export default function Home() {

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  const services = [
    {
      title: "AI Autonomous Research",
      description: "Intelligent research automation that discovers insights across multiple sources",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/services/AIAutonomousBusinessOperations"
    },
    {
      title: "Quantum Edge Computing",
      description: "Revolutionary quantum-enhanced edge computing platform",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      link: "/services/quantum-edge-computing-solutions"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Transform customer relationships with AI-powered analytics",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-customer-experience-analytics"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-zinc-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <Link
                      to={service.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-8">
              Join the future of business with our cutting-edge AI solutions. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-blue-500/20 text-blue-300 font-semibold rounded-xl hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}