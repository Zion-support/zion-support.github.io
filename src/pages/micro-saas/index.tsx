import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Lock, 
  Users, 
  Globe,
  Zap,
  BarChart3,
  MessageCircle,
  FileText,
  Heart
} from 'lucide-react';

const microSaasSolutions = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Business Intelligence",
    description: "Advanced analytics platform with machine learning capabilities for data-driven decision making",
    features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "API Integration"],
    price: "$2,500/month",
    href: "/micro-saas/ai-business-intelligence"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Experience Platform",
    description: "Comprehensive customer engagement and relationship management solution",
    features: ["Customer Journey Mapping", "Feedback Management", "Loyalty Programs", "Multi-channel Support"],
    price: "$1,800/month",
    href: "/micro-saas/customer-experience"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Quantum Computing Solutions",
    description: "Next-generation computing platform for complex optimization problems",
    features: ["Quantum Algorithms", "Optimization Engine", "Simulation Tools", "API Access"],
    price: "$5,000/month",
    href: "/micro-saas/quantum-computing"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Supply Chain Management",
    description: "End-to-end supply chain visibility and optimization platform",
    features: ["Real-time Tracking", "Demand Forecasting", "Inventory Optimization", "Supplier Management"],
    price: "$3,200/month",
    href: "/micro-saas/supply-chain"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity Suite",
    description: "Comprehensive security solution for enterprise protection",
    features: ["Threat Detection", "Compliance Management", "24/7 Monitoring", "Incident Response"],
    price: "$2,800/month",
    href: "/micro-saas/cybersecurity"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "IoT Edge Computing",
    description: "Edge computing platform for real-time data processing and analytics",
    features: ["Sensor Management", "Edge Analytics", "Real-time Processing", "Cloud Sync"],
    price: "$3,500/month",
    href: "/micro-saas/iot-edge"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Content Creation Platform",
    description: "AI-powered content generation and management system",
    features: ["AI Writing Assistant", "Content Templates", "SEO Optimization", "Multi-format Export"],
    price: "$1,500/month",
    href: "/micro-saas/content-creation"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "HR Platform",
    description: "Modern human resources management and employee engagement solution",
    features: ["Employee Portal", "Performance Management", "Recruitment Tools", "Analytics Dashboard"],
    price: "$2,200/month",
    href: "/micro-saas/hr-platform"
  }
];

export default function MicroSAASPage() {
  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Micro-SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Scalable, focused software solutions designed to solve specific business challenges
            </p>
            <p className="text-lg text-zion-slate-light/80 max-w-3xl mx-auto">
              Our micro-SaaS platforms provide enterprise-grade functionality with startup simplicity. 
              Each solution is designed to integrate seamlessly with your existing systems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">8</div>
              <div className="text-zion-slate-light">Specialized Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">API</div>
              <div className="text-zion-slate-light">First Design</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Micro-SaaS Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our specialized solutions designed to address specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zion-slate-light/5 to-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-zion-cyan mb-6">
                    {solution.price}
                  </div>

                  {/* CTA */}
                  <Link 
                    to={solution.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <Zap className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you implement the perfect micro-SaaS solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-cyan rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}