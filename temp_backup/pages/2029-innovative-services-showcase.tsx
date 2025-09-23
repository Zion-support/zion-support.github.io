import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Target, ArrowRight, CheckCircle, Star, 
  Phone, Mail, MapPin
} from 'lucide-react';
import UltraFuturisticNavigation20o29 from '../components/layout/UltraFuturisticNavigation20o29';
import UltraFuturisticFooter20o29 from '../components/layout/UltraFuturisticFooter20o29';
import { aiAutonomousEcosystemServices20o29 } from '../data/20o29-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices20o29 } from '../data/20o29-emerging-tech-breakthroughs';
import { practicalBusinessSolutionServices20o29 } from '../data/20o29-practical-business-solutions';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function InnovativeServicesShowcase20o29() {
  const allServices = [
    ...aiAutonomousEcosystemServices20o29,
    ...emergingTechBreakthroughServices20o29,
    ...practicalBusinessSolutionServices20o29
  ];

  const serviceCategories = [
    {
      title: '🚀 AI Autonomous Ecosystem',
      icon: Brain,
      color: 'from-violet-60o0 via-purple-60o0 to-indigo-60o0',
      services: aiAutonomousEcosystemServices20o29
    },
    {
      title: '⚛️ Emerging Tech Breakthroughs',
      icon: Atom,
      color: 'from-indigo-60o0 via-blue-60o0 to-cyan-60o0',
      services: emergingTechBreakthroughServices20o29
    },
    {
      title: '🎯 Practical Business Solutions',
      icon: Target,
      color: 'from-cyan-60o0 via-teal-60o0 to-emerald-60o0',
      services: practicalBusinessSolutionServices20o29
    }
  ];

  return (
    <>
      <Head>
        <title>20o29 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 20o29 innovative services including AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transform your business with next-generation technology."  />
        <meta name="keywords" content="20o29 services, AI autonomous, emerging technology, business solutions, Zion Tech Group"  />
        <link rel="canonical" href="https://ziontechgroup.com/20o29-innovative-services-showcase"  />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        <UltraFuturisticNavigation20o29  />

        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-black via-purple-90o0/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-blue-40o0 bg-clip-text text-transparent mb-8">
                20o29 Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary AI autonomous ecosystems, 
                emerging tech breakthroughs, and practical business solutions that will transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5"  />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-purple-50o0 text-purple-40o0 font-semibold rounded-full hover:bg-purple-50o0 hover:text-white transition-all duration-30o0">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-90o0">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
