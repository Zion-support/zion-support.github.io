import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  ArrowRight,
  Users,
  Server,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
  HardDrive,
  Monitor,
  Network,
  Printer,
  Brain,
  Palette,
  Globe,
  Lock,
  BarChart3,
  Workflow
} from 'lucide-react';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 'software',
      name: 'Software Solutions',
      description: 'Enterprise software, applications, and development tools.',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      count: 156,
      popular: ['Enterprise Apps', 'Development Tools', 'Analytics Platforms', 'Security Software']
    },
    {
      id: 'hardware',
      name: 'Hardware & Equipment',
      description: 'Servers, workstations, networking, and storage solutions.',
      icon: Server,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      count: 89,
      popular: ['Servers', 'Workstations', 'Storage Arrays', 'Network Equipment']
    },
    {
      id: 'cloud',
      name: 'Cloud Services',
      description: 'Cloud infrastructure, platforms, and managed services.',
      icon: Cloud,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      count: 67,
      popular: ['Cloud Hosting', 'SaaS Solutions', 'DevOps Tools', 'Cloud Security']
    },
    {
      id: 'mobile',
      name: 'Mobile & Apps',
      description: 'Mobile applications, development kits, and mobile solutions.',
      icon: Smartphone,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
      count: 94,
      popular: ['Mobile Apps', 'Development Kits', 'Testing Tools', 'App Analytics']
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Cybersecurity solutions, compliance tools, and security services.',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-600/20',
      count: 73,
      popular: ['Firewalls', 'Antivirus', 'Compliance Tools', 'Security Auditing']
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      description: 'Data management, analytics platforms, and business intelligence.',
      icon: Database,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-600/20',
      count: 58,
      popular: ['Data Warehouses', 'Analytics Tools', 'BI Platforms', 'Data Visualization']
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      description: 'Artificial intelligence, machine learning, and automation tools.',
      icon: Brain,
      color: 'text-pink-400',
      bgColor: 'bg-pink-600/20',
      count: 42,
      popular: ['ML Platforms', 'AI Tools', 'Automation Software', 'Predictive Analytics']
    },
    {
      id: 'design',
      name: 'Design & Creative',
      description: 'Design tools, creative software, and multimedia solutions.',
      icon: Palette,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
      count: 35,
      popular: ['Design Software', 'Creative Tools', '3D Modeling', 'Video Editing']
    },
    {
      id: 'networking',
      name: 'Networking & Infrastructure',
      description: 'Network equipment, infrastructure solutions, and connectivity.',
      icon: Network,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-600/20',
      count: 81,
      popular: ['Switches', 'Routers', 'Cabling', 'Network Security']
    },
    {
      id: 'storage',
      name: 'Storage Solutions',
      description: 'Data storage, backup solutions, and storage management.',
      icon: HardDrive,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-600/20',
      count: 64,
      popular: ['SSDs', 'HDDs', 'Backup Systems', 'Storage Management']
    },
    {
      id: 'workstations',
      name: 'Workstations & PCs',
      description: 'Professional workstations, desktops, and computing solutions.',
      icon: Monitor,
      color: 'text-amber-400',
      bgColor: 'bg-amber-600/20',
      count: 47,
      popular: ['Desktop PCs', 'All-in-Ones', 'Thin Clients', 'Gaming PCs']
    },
    {
      id: 'peripherals',
      name: 'Peripherals & Accessories',
      description: 'Monitors, printers, input devices, and accessories.',
      icon: Printer,
      color: 'text-rose-400',
      bgColor: 'bg-rose-600/20',
      count: 112,
      popular: ['Monitors', 'Keyboards', 'Mice', 'Printers']
    }
  ];

  const featuredCategories = categories.slice(0, 6);
  const allCategories = categories;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Package className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Marketplace
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Categories
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our comprehensive marketplace organized by technology categories. 
            Find the perfect solutions for your business needs across all domains.
          </p>
        </motion.div>

        {/* Featured Categories */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`${category.bgColor} rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-200 cursor-pointer group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => window.location.href = `/marketplace/${category.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <span className="text-sm text-gray-400">{category.count} items</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Popular Items:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.popular.slice(0, 2).map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                  <span className="text-sm font-medium">Explore Category</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Categories */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-blue-500 transition-colors duration-200 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                onClick={() => window.location.href = `/marketplace/${category.id}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{category.name}</h3>
                    <span className="text-xs text-gray-400">{category.count} items</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-3 line-clamp-2">{category.description}</p>
                
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                  <span className="text-xs font-medium">Browse</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Navigation */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/marketplace/products"
                className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200"
              >
                <Package className="h-8 w-8 text-blue-400 mb-2" />
                <span className="text-white text-sm font-medium">Products</span>
              </a>
              <a
                href="/marketplace/talent"
                className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200"
              >
                <Users className="h-8 w-8 text-purple-400 mb-2" />
                <span className="text-white text-sm font-medium">Talent</span>
              </a>
              <a
                href="/marketplace/equipment"
                className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200"
              >
                <Server className="h-8 w-8 text-green-400 mb-2" />
                <span className="text-white text-sm font-medium">Equipment</span>
              </a>
              <a
                href="/marketplace"
                className="flex flex-col items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200"
              >
                <Globe className="h-8 w-8 text-cyan-400 mb-2" />
                <span className="text-white text-sm font-medium">All Items</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You Need?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect solution or create a custom category 
              tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Sales Team
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Request Custom Category
              </a>
              <a
                href="/marketplace"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <ArrowRight className="inline mr-2 h-5 w-5" />
                Browse All Items
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Categories;