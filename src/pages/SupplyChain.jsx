import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Settings,
  Palette
} from 'lucide-react';
;
const SupplyChain = () => {
  const supplyChainSolutions = [
    {
      id: 1,
      title: "Supply Chain Visibility",
      description: "Real-time tracking and monitoring of goods across the entire supply chain network.",
      icon: Eye,
      features: [
        "End-to-end tracking",
        "Real-time monitoring",
        "Status updates",
        "Exception alerts"
      ],
      price: "From $100,000",
      timeline: "20-32 weeks",
      category: "Visibility",
      technologies: ["IoT Sensors", "GPS Tracking", "Real-time Analytics", "Cloud Platforms"]
    },
    {
      id: 2,
      title: "Inventory Management",
      description: "Intelligent inventory optimization and demand forecasting systems.",
      icon: Warehouse,
      features: [
        "Demand forecasting",
        "Stock optimization",
        "Automated reordering",
        "Inventory analytics"
      ],
      price: "From $80,000",
      timeline: "16-24 weeks",
      category: "Inventory",
      technologies: ["AI/ML", "Predictive Analytics", "ERP Integration", "Real-time Data"]
    },
    {
      id: 3,
      title: "Route Optimization",
      description: "AI-powered route planning and optimization for transportation and delivery.",
      icon: Route,
      features: [
        "Dynamic routing",
        "Traffic optimization",
        "Fuel efficiency",
        "Delivery scheduling"
      ],
      price: "From $60,000",
      timeline: "12-20 weeks",
      category: "Routing",
      technologies: ["AI Algorithms", "GPS Integration", "Traffic Data", "Optimization Engines"]
    },
    {
      id: 4,
      title: "Warehouse Management",
      description: "Automated warehouse operations and inventory control systems.",
      icon: Building,
      features: [
        "Automated picking",
        "Space optimization",
        "Order fulfillment",
        "Quality control"
      ],
      price: "From $120,000",
      timeline: "24-36 weeks",
      category: "Warehouse",
      technologies: ["WMS", "Automation", "IoT Sensors", "Robotics Integration"]
    },
    {
      id: 5,
      title: "Supplier Management",
      description: "Comprehensive supplier relationship and performance management platforms.",
      icon: Users,
      features: [
        "Supplier onboarding",
        "Performance tracking",
        "Risk assessment",
        "Compliance monitoring"
      ],
      price: "From $70,000",
      timeline: "16-24 weeks",
      category: "Supplier Management",
      technologies: ["SRM Platforms", "Analytics", "Risk Management", "Compliance Tools"]
    },
    {
      id: 6,
      title: "Logistics Analytics",
      description: "Advanced analytics and reporting for supply chain performance optimization.",
      icon: BarChart3,
      features: [
        "Performance metrics",
        "Cost analysis",
        "Trend identification",
        "Predictive insights"
      ],
      price: "From $90,000",
      timeline: "16-24 weeks",
      category: "Analytics",
      technologies: ["Business Intelligence", "Data Visualization", "Predictive Models", "Real-time Dashboards"]
    }
  ];

  const successStories = [
    {
      logo: "🚛",
      comp: "Global Logistics Corp",
      industry: "Logistics & Transportation",
      challenge: "Complex supply chain with poor visibility and high operational costs.",
      solution: "Implemented end-to-end supply chain visibility platform with real-time tracking and analytics.",
      results: "30% reduction in operational costs, 40% improvement in delivery times, 25% increase in customer satisfaction."
    },
    {
      logo: "🏭",
      comp: "Manufacturing Solutions Inc.",
      industry: "Manufacturing",
      challenge: "Inefficient inventory management leading to stockouts and excess inventory.",
      solution: "Deployed AI-powered inventory management system with demand forecasting and automated reordering.",
      results: "35% reduction in inventory costs, 50% decrease in stockouts, 20% improvement in order fulfillment."
    },
    {
      logo: "📦",
      comp: "E-commerce Express",
      industry: "E-commerce",
      challenge: "Poor route optimization causing delayed deliveries and high fuel costs.",
      solution: "Implemented AI-driven route optimization with real-time traffic data and dynamic routing.",
      results: "25% reduction in delivery times, 30% decrease in fuel costs, 40% improvement in customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain with intelligent technology solutions
              that enhance visibility, efficiency, and performance across all operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Optimize Supply Chain
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Supply Chain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From visibility to optimization, we provide end-to-end
              supply chain technology solutions for every industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyChainSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-sm text-blue-400">{solution.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{solution.description}</p>

                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-blue-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400 font-semibold">{solution.price}</span>
                  <span className="text-gray-400">{solution.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our supply chain solutions have transformed operations
              across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.comp}</h3>
                    <p className="text-gray-300 text-sm">{story.industry}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Results</h4>
                    <p className="text-gray-300 text-sm">{story.results}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how intelligent supply chain technology can transform your operations,
              reduce costs, and improve customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Supply Chain Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Supply Chain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
;
export { SupplyChain };
export default SupplyChain;
