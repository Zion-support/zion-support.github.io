import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const MarketingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [stats, setStats] = useState({
    users: 0,
    projects: 0,
    satisfaction: 0,
    uptime: 0
  });

  const tabs = [
    {
      id: 0,
      title: "AI Solutions",
      content: {
        headline: "Revolutionary AI That Transforms Your Business",
        description: "Our cutting-edge artificial intelligence solutions automate complex processes, predict trends, and optimize operations with unprecedented accuracy.",
        features: [
          "Advanced Machine Learning Algorithms",
          "Real-time Predictive Analytics",
          "Automated Decision Making",
          "Natural Language Processing",
          "Computer Vision Capabilities"
        ],
        image: "🤖",
        color: "from-purple-500 to-pink-500"
      }
    },
    {
      id: 1,
      title: "Blockchain",
      content: {
        headline: "Secure, Transparent, Decentralized",
        description: "Leverage the power of blockchain technology to create secure, transparent, and immutable systems that build trust with your customers.",
        features: [
          "Smart Contract Development",
          "DeFi Integration",
          "NFT Marketplace Solutions",
          "Cryptocurrency Payment Systems",
          "Supply Chain Transparency"
        ],
        image: "🔗",
        color: "from-blue-500 to-cyan-500"
      }
    },
    {
      id: 2,
      title: "Cloud Services",
      content: {
        headline: "Scalable Infrastructure for Modern Businesses",
        description: "Deploy, scale, and manage your applications with our enterprise-grade cloud infrastructure designed for performance and reliability.",
        features: [
          "Auto-scaling Infrastructure",
          "Global CDN Network",
          "Database Management",
          "DevOps Automation",
          "24/7 Monitoring & Support"
        ],
        image: "☁️",
        color: "from-green-500 to-emerald-500"
      }
    }
  ];

  useEffect(() => {
    // Animate stats on component mount
    const animateStats = () => {
      const targetStats = {
        users: 15000,
        projects: 2500,
        satisfaction: 98,
        uptime: 99.9
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          users: Math.floor(targetStats.users * progress),
          projects: Math.floor(targetStats.projects * progress),
          satisfaction: Math.floor(targetStats.satisfaction * progress),
          uptime: parseFloat((targetStats.uptime * progress).toFixed(1))
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    animateStats();
  }, []);

  const currentTab = tabs[activeTab];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Users, label: "Active Users", value: stats.users.toLocaleString(), suffix: "+" },
            { icon: TrendingUp, label: "Projects Completed", value: stats.projects.toLocaleString(), suffix: "+" },
            { icon: Award, label: "Customer Satisfaction", value: stats.satisfaction, suffix: "%" },
            { icon: Shield, label: "Uptime Guarantee", value: stats.uptime, suffix: "%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-12">
                  <div className="text-6xl mb-6">{currentTab.content.image}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {currentTab.content.headline}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {currentTab.content.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {currentTab.content.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 bg-gradient-to-r ${currentTab.content.color} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </motion.button>
                  </div>
                </div>

                {/* Visual */}
                <div className={`bg-gradient-to-br ${currentTab.content.color} p-12 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-center relative z-10">
                    <div className="text-8xl mb-6 opacity-80">
                      {currentTab.content.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {currentTab.title}
                    </h3>
                    <p className="text-lg opacity-90">
                      Experience the future of technology
                    </p>
                  </div>
                  
                  {/* Background decorations */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to drive innovation, increase efficiency, and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;