import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, Shield, Brain, Zap, Globe, Users, TrendingUp, 
  Award, Clock, CheckCircle, ArrowRight, Play, 
  BarChart3, Cpu, Network, Satellite, MapPin, 
  Smartphone, Database, Server, Lock, Eye, 
  Shield, Activity, Target, Star, Rocket, Lightbulb,
  Wifi, Car, Tree, Droplets, Sun
} from 'lucide-react';

export default function AISmartCityInfrastructureManagement() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Intelligent data processing for real-time city monitoring and decision making'
    },
    {
      icon: Network,
      title: 'IoT Integration',
      description: 'Seamless connectivity of smart sensors and devices across city infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Framework',
      description: 'Advanced security protocols to protect critical city infrastructure systems'
    },
    {
      icon: BarChart3,
      title: 'Predictive Maintenance',
      description: 'AI-driven insights for proactive infrastructure maintenance and optimization'
    },
    {
      icon: Globe,
      title: 'Sustainability Monitoring',
      description: 'Real-time tracking of environmental impact and resource consumption'
    },
    {
      icon: Users,
      title: 'Citizen Engagement',
      description: 'Digital platforms for citizen participation and service delivery'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 35%',
    'Improve energy efficiency by 40%',
    'Enhance public safety and emergency response',
    'Optimize traffic flow and reduce congestion',
    'Increase citizen satisfaction and quality of life',
    'Enable data-driven urban planning decisions'
  ];

  const infrastructureAreas = [
    {
      title: 'Smart Energy Grid',
      description: 'Intelligent power distribution and renewable energy integration',
      icon: Zap
    },
    {
      title: 'Traffic Management',
      description: 'AI-powered traffic optimization and intelligent transportation systems',
      icon: Car
    },
    {
      title: 'Water Management',
      description: 'Smart water distribution, quality monitoring, and leak detection',
      icon: Droplets
    },
    {
      title: 'Waste Management',
      description: 'Automated waste collection and recycling optimization',
      icon: Tree
    },
    {
      title: 'Public Lighting',
      description: 'Adaptive street lighting with energy efficiency optimization',
      icon: Lightbulb
    },
    {
      title: 'Public Safety',
      description: 'Advanced surveillance and emergency response systems',
      icon: Shield
    }
  ];

  const useCases = [
    {
      title: 'Metropolitan Cities',
      description: 'Large-scale urban infrastructure management and optimization',
      icon: Building
    },
    {
      title: 'Smart Communities',
      description: 'Residential areas with integrated smart home and community systems',
      icon: Users
    },
    {
      title: 'Industrial Zones',
      description: 'Smart manufacturing and industrial infrastructure management',
      icon: Target
    },
    {
      title: 'Transportation Hubs',
      description: 'Intelligent airports, ports, and transportation centers',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              <span>AI Smart City Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Smart City
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Infrastructure Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform urban environments with our AI-powered smart city infrastructure management platform. 
              Create sustainable, efficient, and livable cities through intelligent technology integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Infrastructure Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform integrates cutting-edge AI with comprehensive city management capabilities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Areas Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Infrastructure Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Manage all aspects of city infrastructure with our integrated platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-300">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Building the Cities of Tomorrow
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our smart city platform delivers measurable improvements in efficiency, sustainability, 
                and quality of life while reducing operational costs and environmental impact.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 p-8 rounded-2xl border border-green-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Smart City Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">35%</div>
                      <div className="text-gray-300">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">40%</div>
                      <div className="text-gray-300">Energy Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Diverse Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform serves various urban environments and infrastructure needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Smart Cities?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your urban infrastructure with Zion Tech Group's intelligent city management platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}