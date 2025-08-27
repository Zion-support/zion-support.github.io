import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Zap, 
  Snowflake, 
  HardDrive, 
  Shield,
  Settings,
  Building,
  Cpu,
  Bot
} from 'lucide-react';

export default function EquipmentPage() {
  const equipmentCategories = [
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Servers",
      description: "High-performance servers for enterprise workloads",
      count: 24
    },
    {
      icon: <Network className="w-8 h-8 text-green-400" />,
      title: "Networking",
      description: "Switches, routers, and network infrastructure",
      count: 18
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Power",
      description: "UPS systems and power management solutions",
      count: 12
    },
    {
      icon: <Snowflake className="w-8 h-8 text-cyan-400" />,
      title: "Cooling",
      description: "HVAC and cooling systems for datacenters",
      count: 15
    },
    {
      icon: <HardDrive className="w-8 h-8 text-purple-400" />,
      title: "Storage",
      description: "Storage arrays and backup solutions",
      count: 22
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Security",
      description: "Physical and digital security systems",
      count: 16
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "Management",
      description: "Monitoring and management tools",
      count: 14
    },
    {
      icon: <Building className="w-8 h-8 text-indigo-400" />,
      title: "Infrastructure",
      description: "Racks, cabinets, and infrastructure components",
      count: 20
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-400" />,
      title: "AI",
      description: "AI and machine learning hardware",
      count: 8
    },
    {
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: "Robotics",
      description: "Automation and robotics equipment",
      count: 6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Server className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Datacenter Equipment
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Browse professional hardware for modern datacenter and network deployments. 
            From servers to security systems, we have the equipment you need.
          </p>
        </motion.div>

        {/* Equipment Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -2, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{category.description}</p>
                <div className="text-zion-cyan font-semibold">{category.count} items</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Need Specific Equipment?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team can help you source the right equipment 
              for your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Contact Sales Team
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
