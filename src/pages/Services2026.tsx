<<<<<<< HEAD
import React, { useMemo, useState } from 'react'; import { Link  } from 'react-router-dom'; import { motion  } from 'framer-motion'; import { Search,; ArrowRight,; DollarSign,; ExternalLink,; Workflow,; MessageSquare,; Globe,; Brain,; Shield,; Cloud,; Cpu,; Zap,; Rocket,; Heart,; Lock,; Users,; BarChart3,; Target,; TrendingUp,; Award,; Star,; CheckCircle,; Clock,; Phone,; Mail,; MapPin;  } from 'lucide-react'; import SEO from '@/components/SEO'; import { INNOVATIVE_MICRO_SAAS_SERVICES_2026, SPECIALIZED_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026'; ; const Services2026: React.FC = (): JSX.Element => {; const [query, setQuery] = useState(''); const [selectedCategory, setSelectedCategory] = useState('all'); const [sortBy, setSortBy] = useState('innovation'); ; const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2026, ...SPECIALIZED_SERVICES_2026]; ; const categories = [; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'all', name: 'All Services', icon: GitFork, count: allServices.length },; { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: allServices.filter(s => s.category === 'AI & Analytics').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'Quantum Computing', name: 'Quantum Computing', icon: Zap, count: allServices.filter(s => s.category === 'Quantum Computing').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'IoT & Edge Computing', name: 'IoT & Edge', icon: Cpu, count: allServices.filter(s => s.category === 'IoT & Edge Computing').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'AI & Content', name: 'AI & Content', icon: MessageSquare, count: allServices.filter(s => s.category === 'AI & Content').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'Digital Twin', name: 'Digital Twin', icon: Rocket, count: allServices.filter(s => s.category === 'Digital Twin').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'AI & HR', name: 'AI & HR', icon: Users, count: allServices.filter(s => s.category === 'AI & HR').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'Sustainability', name: 'Sustainability', icon: Heart, count: allServices.filter(s => s.category === 'Sustainability').length },; { id: anyanyanyanyanyanyanyanyanyanyanyanyany'AI & IoT', name: 'AI & IoT', icon: BarChart3, count: allServices.filter(s => s.category === 'AI & IoT').length }; ]; ; const filteredAndSorted = useMemo(() => {; let filtered = allServices; ;
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Services2026 = () => {
  return (
    <>
      <Head>
        <title>Services2026 - Zion Tech Group</title>
        <meta name="description" content="Professional Services2026 services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Services2026
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Services2026 services and solutions
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
export default Services2026
>>>>>>> main
