<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Brain,; Shield,; TrendingUp,; Zap,; Cloud,; Users,; BarChart3,; Target,; CheckCircle,; Star,; ArrowRight,; Headphones,; Lightbulb,; Globe,; Phone,; Mail,; MapPin,; Code,; Truck,; DollarSign,; Package,; Server,; Database,; Cpu,; Lock,; Eye,; MessageSquare,; PieChart,; GitBranch,; Monitor,; Settings,; Workflow,; AlertTriangle,; Calculator,; Warehouse;  } from 'lucide-react'; ; export default function ComprehensiveServicesShowcase() {; const aiServices = [; {; title: 'AI Customer Success Platform',; description: 'Transform customer relationships with intelligent automation and predictive analytics',; icon: Users,; color: 'blue',; price: 'From $299/month',; features: ['AI Customer Segmentation', 'Predictive Churn Prevention', 'Automated Success Metrics', 'Smart Workflow Automation'],; link: '/ai-services/ai-powered-customer-success-platform'; },; {; title: 'AI Cybersecurity Intelligence',; description: 'Next-generation cybersecurity powered by artificial intelligence',; icon: Shield,; color: 'red',; price: 'From $499/month',; features: ['AI Threat Detection', 'Behavioral Analytics', 'Automated Response', 'Zero Trust Security'],; link: '/ai-services/ai-cybersecurity-intelligence-platform'; },; {; title: 'AI Financial Analytics Platform',; description: 'Revolutionize financial decision-making with AI-powered analytics',; icon: TrendingUp,; color: 'green',; price: 'From $99/month',; features: ['AI Market Predictions', 'Real-time Analytics', 'Risk Assessment', 'Portfolio Management'],; link: '/micro-saas/ai-financial-analytics-platform'; }; ]; ; const itServices = [; {; title: 'AI DevOps Automation Platform',; description: 'Transform development operations with intelligent automation',; icon: Zap,; color: 'purple',; price: 'From $399/month',; features: ['AI-Powered Automation', 'Smart Code Analysis', 'Multi-Cloud Management', 'Infrastructure as Code'],; link: '/it-services/ai-devops-automation-platform'; },; {; title: 'AI Supply Chain Optimization',; description: 'Revolutionize supply chain operations with AI-powered optimization',; icon: Truck,; color: 'orange',; price: 'From $199/month',; features: ['Smart Logistics', 'Inventory Management', 'Global Supply Chain', 'Predictive Analytics'],; link: '/micro-saas/ai-supply-chain-optimization'; }; ]; ; const microSaasServices = [; {; title: 'AI Business Intelligence',; description: 'Intelligent analysis and predictive modeling for business growth',; icon: Brain,; color: 'indigo',; price: 'From $199/month',; features: ['AI-Powered Insights', 'Real-time Analytics', 'Automated Intelligence', 'Predictive Analytics'],; link: '/micro-saas/AIBusinessIntelligence'; },; {; title: 'Customer Experience Platform',; description: 'Deliver exceptional customer experiences with intelligent automation',; icon: MessageSquare,; color: 'pink',; price: 'From $149/month',; features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Automated Support', 'Personalization Engine'],; link: '/micro-saas/CustomerExperience'; }; ]; ; const allServices = [...aiServices, ...itServices, ...microSaasServices]; ; const getColorClasses = (color: string) => {; const colorMap: { [key: string]: string } = {; blue: 'border-blue-500 hover:border-blue-400 text-blue-400',; red: 'border-red-500 hover:border-red-400 text-red-400',; green: 'border-green-500 hover:border-green-400 text-green-400',; purple: 'border-purple-500 hover:border-purple-400 text-purple-400',; orange: 'border-orange-500 hover:border-orange-400 text-orange-400',; indigo: 'border-indigo-500 hover:border-indigo-400 text-indigo-400',; pink: 'border-pink-500 hover:border-pink-400 text-pink-400'; }; return colorMap[color] || 'border-gray-500 hover:border-gray-400 text-gray-400'; }; ; const getBgColorClasses = (color: string) => {; const colorMap: { [key: string]: string } = {; blue: 'bg-blue-600 hover:bg-blue-700',; red: 'bg-red-600 hover:bg-red-700',; green: 'bg-green-600 hover:bg-green-700',; purple: 'bg-purple-600 hover:bg-purple-700',; orange: 'bg-orange-600 hover:bg-orange-700',; indigo: 'bg-indigo-600 hover:bg-indigo-700',; pink: 'bg-pink-600 hover:bg-pink-700'; }; return colorMap[color] || 'bg-gray-600 hover:bg-gray-700'; }; ; return (; <div className="min-h-screen bg-futuristic">;"";" {}";"";" <section className="relative pt-32 pb-20 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-900"></div>";"";" <div className="container mx-auto px-4 relative z-10">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center max-w-6xl mx-auto";"";" >";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;";" Zion Tech Group;"";" </h1>";"";" <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">;";" Comprehensive AI, IT & Micro SAAS Solutions;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">;";" Discover our cutting-edge portfolio of intelligent services designed to transform your business operations,;";" enhance security, optimize processes, and drive growth through the power of artificial intelligence.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <a ";"";" href="https:
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const comprehensiveservicesshowcase = () => {
  return (
    <>
      <Head>
        <title>comprehensive-services-showcase - Zion Tech Group</title>
        <meta name="description" content="Professional comprehensive-services-showcase services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              comprehensive-services-showcase
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional comprehensive-services-showcase services and solutions
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
export default comprehensiveservicesshowcase
>>>>>>> main
