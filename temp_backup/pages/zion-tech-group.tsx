import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';
=======
import Head from 'next/head';
>>>>>>> origin/auto/autonomy-17186719616
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
<<<<<<< HEAD
  Database, Globe, Shield, Cpu, Users2, Award,
  CheckCircle, Target, BarChart3, TrendingUp, Lock,
  Server, Network, Monitor, Settings, RefreshCw,
  Play, Pause, AlertTriangle, CheckCircle2, Building,
  Wifi, HardDrive, Cloud, Smartphone, Link, Blocks,
  Wallet, CreditCard, PiggyBank, Building2, Activity,
  Waves, Zap, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, Target, Users2, FileText2, PieChart,
  Atom, Cpu, Brain, Zap, Target, BarChart3, Users,
  TrendingUp, Shield, Globe, Database, Network, Building,
  Users, Globe, Shield, Cpu, Award, CheckCircle,
  Target, BarChart3, TrendingUp, Lock, Server, Cloud
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zion Tech Group | Revolutionary Quantum AI Technology Solutions',
  description: 'Leading provider of quantum-powered AI solutions, autonomous systems, and cutting-edge technology platforms for the future.',
  keywords: 'Zion Tech Group, quantum AI, autonomous systems, AI technology, quantum computing, artificial intelligence, technology solutions',
  openGraph: {
    title: 'Zion Tech Group | Revolutionary Quantum AI Technology Solutions',
    description: 'Leading provider of quantum-powered AI solutions, autonomous systems, and cutting-edge technology platforms for the future.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-zion-tech-group.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | Revolutionary Quantum AI Technology Solutions',
    description: 'Leading provider of quantum-powered AI solutions, autonomous systems, and cutting-edge technology platforms for the future.',
    images: ['https://ziontechgroup.com/og-image-zion-tech-group.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function ZionTechGroup() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary Technology
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future with revolutionary quantum-powered AI solutions, autonomous systems, 
              and cutting-edge technology platforms that transform industries and redefine possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#about" 
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              About Zion Tech Group
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to pushing the boundaries of what's possible 
              through quantum computing, artificial intelligence, and autonomous systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Innovation</h3>
              <p className="text-gray-400">
                Leading the charge in quantum computing applications and quantum AI fusion technologies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Excellence</h3>
              <p className="text-gray-400">
                Developing cutting-edge AI solutions that solve complex real-world problems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Systems</h3>
              <p className="text-gray-400">
                Creating intelligent autonomous platforms that operate independently and efficiently.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-400">
                Delivering transformative solutions across industries and continents.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-400">
                World-class engineers, scientists, and innovators driving technological breakthroughs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future-Focused</h3>
              <p className="text-gray-400">
                Continuously evolving and adapting to meet tomorrow's technological challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Core Technologies & Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive portfolio of cutting-edge technologies and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Quantum Computing</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Quantum AI Fusion</li>
                <li>• Quantum Bio-Computing</li>
                <li>• Quantum Compliance</li>
                <li>• Quantum Creativity</li>
                <li>• Quantum Networks</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Artificial Intelligence</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• AI Marketing Platforms</li>
                <li>• AI Content Creation</li>
                <li>• AI Customer Intelligence</li>
                <li>• AI Healthcare Diagnostics</li>
                <li>• AI Financial Analytics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Autonomous Systems</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Autonomous Marketing</li>
                <li>• Autonomous DevOps</li>
                <li>• Autonomous Vehicles</li>
                <li>• Autonomous IT Operations</li>
                <li>• Autonomous Robotics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Security & Compliance</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Enterprise Security</li>
                <li>• Threat Detection</li>
                <li>• Identity Verification</li>
                <li>• Compliance Automation</li>
                <li>• Risk Management</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Digital Innovation</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Metaverse Development</li>
                <li>• Blockchain Platforms</li>
                <li>• Supply Chain Intelligence</li>
                <li>• Talent Acquisition</li>
                <li>• Entertainment Solutions</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Infrastructure</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Cloud Platforms</li>
                <li>• API Development</li>
                <li>• DevOps Automation</li>
                <li>• IT Operations</li>
                <li>• Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our revolutionary technologies transform operations across diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-400">
                Banking, insurance, investment management, and fintech solutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Pharma</h3>
              <p className="text-gray-400">
                Medical diagnostics, pharmaceutical research, and healthcare automation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-400">
                Industrial automation, smart manufacturing, and supply chain optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technology</h3>
              <p className="text-gray-400">
                Software development, cloud computing, and digital transformation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Logistics & Transportation</h3>
              <p className="text-gray-400">
                Supply chain management, autonomous vehicles, and route optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Entertainment & Media</h3>
              <p className="text-gray-400">
                Content creation, gaming, virtual reality, and digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We stand apart through our commitment to innovation, excellence, and transformative results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-Edge Innovation</h3>
              <p className="text-gray-400">
                Pioneering the latest technologies in quantum computing and AI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
              <p className="text-gray-400">
                Decades of combined experience in technology and innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-400">
                Serving clients worldwide with localized expertise and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-gray-400">
                Focused on delivering measurable business impact and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of technology with Zion Tech Group's revolutionary solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to explore how Zion Tech Group can transform your business? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Technology Consultation</h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your technology challenges and how our revolutionary solutions can drive your success.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
=======
  Database, Users2, Award, Lock, Server, Network, 
  Monitor, Settings, RefreshCw, Play, Pause, 
  AlertTriangle, CheckCircle2, Building, Wifi, 
  HardDrive, Cloud, Smartphone, Blocks, Wallet, 
  CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, FileText2, PieChart, Atom,
  Truck, ChevronRight, Home
} from 'lucide-react';

export default function ZionTechGroupPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>
        <meta name="description" content="Discover Zion Tech Group's mission to revolutionize technology with quantum AI, autonomous systems, and cutting-edge platforms. Learn about our innovative solutions and global impact." />
        <meta name="keywords" content="Zion Tech Group, about us, quantum AI, autonomous systems, technology innovation, company mission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/zion-tech-group" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/" className="text-gray-300 hover:text-white">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="ml-4 text-sm font-medium text-white">About Zion Tech Group</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
                <span className="block text-purple-400">Zion Tech Group</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We are the architects of tomorrow, building revolutionary quantum AI solutions and autonomous systems that will define the next decade of innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate human progress through revolutionary quantum AI technology, autonomous systems, and cutting-edge platforms that solve humanity's greatest challenges.
                </p>
                <p className="text-gray-300">
                  We believe that technology should serve humanity, not replace it. Our solutions are designed to augment human capabilities, enhance decision-making, and create a more sustainable and prosperous future for all.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in quantum AI innovation, creating a world where artificial intelligence and human intelligence work in perfect harmony to solve complex problems.
                </p>
                <p className="text-gray-300">
                  We envision a future where our technology platforms enable breakthroughs in healthcare, climate change, space exploration, and countless other fields that will shape the destiny of our species.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape the culture of our organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, embracing cutting-edge technologies and unconventional thinking.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ethical Responsibility</h3>
                <p className="text-gray-300">
                  We develop technology with a deep commitment to ethical principles, ensuring our solutions benefit humanity and protect our future.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Human-Centric Design</h3>
                <p className="text-gray-300">
                  Every solution we create is designed with human needs at the center, ensuring technology serves people, not the other way around.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-gray-300">
                  We think globally and act locally, creating solutions that can scale to benefit communities around the world.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of quality in everything we do, from research and development to customer support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Future-Focused</h3>
                <p className="text-gray-300">
                  We don't just adapt to change; we anticipate it and create the technologies that will define tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the most advanced technologies available to create revolutionary solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">
                  Next-generation quantum processors and algorithms for unprecedented computational power.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Advanced machine learning, neural networks, and AI systems that learn and adapt.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm">
                  Scalable, secure cloud platforms built for the most demanding applications.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">
                  Quantum-resistant encryption and AI-powered threat detection systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Company Statistics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our impact in numbers - showcasing the scale and reach of our technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts who are driving innovation at Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
                <p className="text-purple-400 mb-2">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with over a decade of experience in quantum computing and AI innovation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Sarah Chen</h3>
                <p className="text-purple-400 mb-2">Chief Technology Officer</p>
                <p className="text-gray-300 text-sm">
                  Quantum computing expert with PhD from MIT and 15+ years in advanced AI research.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marcus Rodriguez</h3>
                <p className="text-purple-400 mb-2">Chief Security Officer</p>
                <p className="text-gray-300 text-sm">
                  Cybersecurity specialist with expertise in quantum-resistant encryption and threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Join the Future?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-100">
              Discover how Zion Tech Group can transform your business with revolutionary technology solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700">
                Schedule Consultation
>>>>>>> origin/auto/autonomy-17186719616
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>
    </div>
=======

        {/* Footer */}
        <footer className="bg-black/40">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-300 text-base">
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Quantum AI
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Autonomous Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Technology Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2025 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
>>>>>>> origin/auto/autonomy-17186719616
  );
}