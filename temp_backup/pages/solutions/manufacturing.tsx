import React from 'react',
import Layout from '../../components/layout/Layout',
import { motion } from 'framer-motion',
import { 
      title: "Manufacturing AI & Machine Learning",
      description: "AI-powered manufacturing optimization with predictive maintenance and quality control",
      icon: <Brain className="w-8 h-8" />,
      features: ["Predictive maintenance", "Quality control automation", "Production optimization", "Supply chain intelligence"],
      href: "/services?category=ai-ml"
    },
    {
      title: "Manufacturing Cybersecurity",
      description: "Industrial-grade security for manufacturing environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["OT security", "Industrial IoT protection", "Compliance automation", "Threat detection"],
      href: "/services?category=security"
    },
    {
      title: "Manufacturing Cloud Infrastructure",
      description: "Cloud solutions designed for manufacturing operations",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Industrial cloud platforms", "Edge computing", "Data integration", "Scalable infrastructure"],
      href: "/services?category=cloud"
    },
    {
      title: "Manufacturing Analytics & BI",
      description: "Real-time manufacturing analytics and business intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Performance analytics", "Predictive insights", "Executive dashboards"],
      href: "/services?category=bi"
    }
  ],

      description="Advanced technology solutions for manufacturing. AI, cybersecurity, cloud infrastructure, and analytics designed for the manufacturing sector."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <UltraFuturisticBackground>
        <div className="min-h-screen bg-black text-white relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Manufacturing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your manufacturing operations with cutting-edge technology solutions designed for 
                efficiency, quality, and innovation. Built for the future of manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
  Cpu, Zap, Brain, Shield, Globe, Cog, 
  TrendingUp, CheckCircle, ArrowRight, BarChart3, Settings
} from 'lucide-react',

export default function ManufacturingSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>manufacturing | Zion Tech Group</title>
        <meta name="description" content="manufacturing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">manufacturing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  ),
},
export default manufacturing,