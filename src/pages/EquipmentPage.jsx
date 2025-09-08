import React from 'react';
import { SEO } from "@/components/SEO";
import { 
  Server, 
  Network, 
  Zap, 
  Snowflake, 
  HardDrive, 
  Shield, 
  Settings, 
  Database, 
  Brain, 
  Bot,
  Star,
  ShoppingCart,
  Filter,
  SortAsc
} from 'lucide-react';

export default function EquipmentPage() {
  const equipmentCategories = [
    { icon: Server, label: "Servers", value: "servers" },
    { icon: Network, label: "Networking", value: "networking" },
    { icon: Zap, label: "Power", value: "power" },
    { icon: Snowflake, label: "Cooling", value: "cooling" },
    { icon: HardDrive, label: "Storage", value: "storage" },
    { icon: Shield, label: "Security", value: "security" },
    { icon: Settings, label: "Management", value: "management" },
    { icon: Database, label: "Infrastructure", value: "infrastructure" },
    { icon: Brain, label: "AI", value: "ai" },
    { icon: Bot, label: "Robotics", value: "robotics" }
  ];

  const sampleEquipment = [
    {
      id: 1,
      title: "High-Performance Server Rack",
      category: "Servers",
      brand: "ZionTech",
      price: 2499,
      rating: 4.8,
      reviewCount: 156,
      availability: "In Stock",
      description: "Enterprise-grade server rack with advanced cooling and power management systems."
    },
    {
      id: 2,
      title: "Network Switch 48-Port",
      category: "Networking",
      brand: "ZionNet",
      price: 899,
      rating: 4.6,
      reviewCount: 89,
      availability: "In Stock",
      description: "High-speed network switch with PoE support and advanced management features."
    },
    {
      id: 3,
      title: "UPS Power System",
      category: "Power",
      brand: "ZionPower",
      price: 599,
      rating: 4.7,
      reviewCount: 234,
      availability: "Limited Stock",
      description: "Uninterruptible power supply with extended battery life and monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Equipment & Infrastructure - Zion Tech Group" 
        description="High-quality IT equipment and infrastructure solutions for enterprise needs. Servers, networking, power systems, and more." 
        keywords="IT equipment, servers, networking, infrastructure, Zion Tech Group" 
        canonical="https://ziontechgroup.com/equipment"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Equipment & Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              High-quality IT equipment and infrastructure solutions designed for enterprise performance and reliability
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {equipmentCategories.map((category) => (
              <div key={category.value} className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <category.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-sm font-medium text-white">{category.label}</h3>
              </div>
            ))}
          </div>

          {/* Featured Equipment */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleEquipment.map((item) => (
                <div key={item.id} className="bg-white/5 rounded-lg border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-sm mb-2">{item.category}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          {item.brand}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">${item.price?.toLocaleString()}</div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.availability === "In Stock" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {item.availability}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                    <span className="text-white font-medium">{item.rating}</span>
                    <span className="text-zinc-400 text-sm">({item.reviewCount} reviews)</span>
                  </div>
                  
                  <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team can help you design and source the perfect equipment for your specific needs. 
              Get in touch for personalized recommendations.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
