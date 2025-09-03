<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { EnhancedSEO } from '@/components/EnhancedSEO'; import PerformanceDashboard from '@/components/PerformanceDashboard'; import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; import { Badge } from '@/components/ui/badge'; import { ; Zap,; Gauge,; TrendingUp,; Shield,; Cpu,; Database,; Globe,; Smartphone,; Cloud,; Lock;  } from 'lucide-react'; ; const Performance: React.FC = () => {; const performanceFeatures = [; {; icon: Zap,; title: "Real-time Monitoring",";"";" description: "Live performance metrics with Core Web Vitals tracking",";"";" color: "from-yellow-500 to-orange-500";";" },;";" {;"";" icon: Gauge,";"";" title: "Performance Scoring",";"";" description: "Automated performance grading from A to F with actionable insights",";"";" color: "from-blue-500 to-cyan-500";";" },;";" {;"";" icon: TrendingUp,";"";" title: "Optimization Recommendations",";"";" description: "AI-powered suggestions for performance improvements",";"";" color: "from-green-500 to-emerald-500";";" },;";" {;"";" icon: Shield,";"";" title: "Security Monitoring",";"";" description: "Comprehensive security metrics and threat detection",";"";" color: "from-red-500 to-pink-500";";" },;";" {;"";" icon: Cpu,";"";" title: "Resource Analysis",";"";" description: "Detailed CPU, memory, and network performance insights",";"";" color: "from-purple-500 to-indigo-500";";" },;";" {;"";" icon: Database,";"";" title: "Data Optimization",";"";" description: "Database performance and query optimization monitoring",";"";" color: "from-teal-500 to-blue-500"; }; ];" ;";" const optimizationStrategies = [;";" {;";"";" title: "Code Splitting",";"";" description: "Implement dynamic imports and route-based code splitting for faster initial loads",";"";" impact: "High",";"";" effort: "Medium";";" },;";" {;";"";" title: "Image Optimization",";"";" description: "Use WebP format, lazy loading, and responsive images for better performance",";"";" impact: "High",";"";" effort: "Low";";" },;";" {;";"";" title: "Bundle Optimization",";"";" description: "Tree shaking, minification, and compression for smaller bundle sizes",";"";" impact: "Medium",";"";" effort: "Low";";" },;";" {;";"";" title: "Caching Strategy",";"";" description: "Implement effective caching policies for static assets and API responses",";"";" impact: "High",";"";" effort: "Medium";";" },;";" {;";"";" title: "CDN Integration",";"";" description: "Use Content Delivery Networks for global performance optimization",";"";" impact: "High",";"";" effort: "Medium";";" },;";" {;";"";" title: "Database Indexing",";"";" description: "Optimize database queries and implement proper indexing strategies",";"";" impact: "Medium",";"";" effort: "High"; }; ];" ;";" return (;";" <>;"";" <EnhancedSEO";"";" title="Performance Monitoring & Optimization - Zion Tech Group";"";" description="Advanced performance monitoring, Core Web Vitals tracking, and AI-powered optimization recommendations.Transform your application's performance with real-time insights.";"";" keywords="performance monitoring, Core Web Vitals, optimization, performance dashboard, web performance, Zion Tech Group";"";" canonical="https:
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Performance = () => {
  return (
    <>
      <Head>
        <title>Performance - Zion Tech Group</title>
        <meta name="description" content="Professional Performance services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Performance
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Performance services and solutions
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
export default Performance
>>>>>>> main
