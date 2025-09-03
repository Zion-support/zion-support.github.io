<<<<<<< HEAD
import React, { useState } from 'react';''; import { Link  } from 'react-router-dom'; import {}; Brain,; Cloud,; Shield,; Server,; Zap,; Globe,; Cpu,; Database,; Network,; Smartphone,; Code,; Chip,; Wifi,; Bot,; Eye,; Sparkles,; Atom,; Leaf,; Gamepad2,; Coins,; Satellite,; Activity,; BarChart3,; Users2,; Settings,; Palette,; Rocket,; Award,; TrendingUp,; GraduationCap,; MessageCircle,; HelpCircle,; Phone,; Mail,; MapPin,; Globe as GlobeIcon,; Lock,; DollarSign,; Users; } from 'lucide-react'; import { ADVANCED_INNOVATIVE_SERVICES_2025 } from "@/data/advancedInnovativeServices2025";"""; import { EMERGING_TECH_SERVICES_2025 } from '@/data/emergingTechServices2025'; ; export default function SimpleServicesPage(function SimpleServicesPage(function SimpleServicesPage() {): any {): any {}; const [searchQuery, setSearchQuery] = useState(''); const [selectedCategory, setSelectedCategory] = useState('all'); ; const categories: any = []; { id: 'all', name: 'All Services', icon: Zap, color: 'from-blue-500 to-cyan-500' },; { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },; { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-blue-500 to-cyan-500' },; { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-purple-500 to-blue-500' },; { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-cyan-500' },; { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-red-500' },; { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-pink-500 to-purple-500' },; { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-green-500 to-blue-500' },; { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-blue-500 to-purple-500' },; { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-orange-500 to-green-500' }; ]; ;
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const SimpleServicesPage = () => {
  return (
    <>
      <Head>
        <title>Simple Services Page - Zion Tech Group</title>
        <meta name="description" content="Professional Simple Services Page services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Simple Services Page
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Simple Services Page services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default SimpleServicesPage
>>>>>>> main
