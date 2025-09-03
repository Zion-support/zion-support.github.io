<<<<<<< HEAD
import React, { useState } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import { ; Brain,; Atom,; Shield,; Cloud,; Database,; Zap,; Users,; TrendingUp,; CheckCircle,; ArrowRight,; Cpu,; Lock,; Network,; Server,; Globe,; Rocket,; Target,; BarChart3,; Workflow,; Leaf,; Satellite,; Link as LinkIcon,; MessageCircle,; HelpCircle,; Smartphone,; ShoppingCart,; FileText,; Video,; GraduationCap,; TestTube,; Building2,; Car,; Factory,; Heart,; DollarSign,; ShoppingBag,; Plane,; Ship,; Truck,; Phone,; Mail,; MapPin,; ExternalLink,; Star,; Award,; Clock,; Users as UsersIcon,; Globe as GlobeIcon,; TrendingUp as TrendingUpIcon,; ChevronRight,; Play,; Download,; BookOpen,; Lightbulb,; Shield as ShieldIcon,; Zap as ZapIcon,; Globe as GlobeIcon2;  } from 'lucide-react'; import { allEnhancedZionServices2025 } from '../data/enhancedZionServices2025'; ; export default function NewServicesLanding2025() {; const [activeTab, setActiveTab] = useState('overview'); ; const stats = [; { label: 'New Services', value: '11+', icon: Rocket, color: 'text-blue-400' },; { label: 'Market Size', value: '$200B+', icon: TrendingUp, color: 'text-green-400' },; { label: 'ROI Range', value: '200-500%', icon: Target, color: 'text-purple-400' },; { label: 'Setup Time', value: '2-12 weeks', icon: Clock, color: 'text-orange-400' }; ]; ; const highlights = [; {; icon: Brain,; title: 'AI-Powered Solutions',; description: 'Cutting-edge artificial intelligence and machine learning platforms',; color: 'from-orange-500 to-red-500'; },; {; icon: Shield,; title: 'Enterprise Security',; description: 'Quantum-resistant cybersecurity and advanced threat protection',; color: 'from-purple-500 to-pink-500'; },; {; icon: Leaf,; title: 'Sustainability Tech',; description: 'Green technology solutions for environmental compliance',; color: 'from-green-500 to-blue-500'; },; {; icon: Building2,; title: 'Smart Infrastructure',; description: 'IoT and edge computing for modern city management',; color: 'from-blue-500 to-purple-500'; }; ]; ; return (; <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">;"";" <SEO ";"";" title="New Zion Services 2025 - Revolutionary Micro SAAS, IT & AI Solutions";"";" description="Discover Zion Tech Group's latest cutting-edge micro SAAS services, IT infrastructure solutions, and AI-powered platforms.Transform your business with innovative technology solutions.";"";" keywords="new services 2025, micro SAAS, IT services, AI services, Zion Tech Group, technology solutions, digital transformation";";" />;"";" {}";"";" <section className="relative py-20 px-4 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>";"";" <div className="relative max-w-7xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">";"";" <span className="text-blue-300 text-sm">🚀 NEW IN 2025</span>";"";" <ChevronRight className="w-4 h-4 text-blue-300" />;";" </div>;";"";" <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;";" Revolutionary New Services;"";" </h1>";"";" <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">;";" Introducing Zion Tech Group's latest micro SAAS, IT infrastructure, and AI services that will transform your business and drive unprecedented growth;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;"";" <a";"";" href="https:
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const NewServicesLanding2025 = () => {
  return (
    <>
      <Head>
        <title>New Services Landing2025 - Zion Tech Group</title>
        <meta name="description" content="Professional New Services Landing2025 services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              New Services Landing2025
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional New Services Landing2025 services and solutions
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
export default NewServicesLanding2025
>>>>>>> main
