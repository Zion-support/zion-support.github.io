import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  Zap,
  Target,
  Users,
  BarChart3,
  Brain,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Lock,
  Cpu,
  Cloud,
  Smartphone,
  Monitor,
  Satellite,
  Telescope
} from 'lucide-react';

export function SpaceTechnologyPage() {
  const spaceServices = [
    {
      title: 'Satellite Technology',
      description: 'Advanced satellite systems for communication and observation',
      icon: Satellite,
      href: '/services/satellite-technology',
      features: ['Communication Satellites', 'Earth Observation', 'Navigation Systems', 'Satellite Operations'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Space Data Analytics',
      description: 'Process and analyze space-based data for insights',
      icon: BarChart3,
      href: '/services/space-data-analytics',
      features: ['Remote Sensing', 'Climate Data', 'Geospatial Analysis', 'Predictive Modeling'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Space Communications',
      description: 'Secure and reliable space communication systems',
      icon: Network,
      href: '/services/space-communications',
      features: ['Deep Space Communication', 'Satellite Networks', 'Ground Stations', 'Signal Processing'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Space Robotics',
      description: 'Autonomous robotics for space exploration and operations',
      icon: Cpu,
      href: '/services/space-robotics',
      features: ['Rover Systems', 'Autonomous Navigation', 'Remote Operations', 'AI Integration'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Space Mining',
      description: 'Extract resources from asteroids and celestial bodies',
      icon: Activity,
      href: '/services/space-mining',
      features: ['Resource Detection', 'Mining Operations', 'Processing Systems', 'Transport Logistics'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Space Tourism',
      description: 'Commercial space travel and tourism infrastructure',
      icon: Users,
      href: '/services/space-tourism',
      features: ['Spacecraft Design', 'Safety Systems', 'Training Programs', 'Experience Management'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const spaceCapabilities = [
    {
      title: 'Space Systems Engineering',
      description: 'Design and develop complex space systems',
      icon: Rocket,
      features: ['System Architecture', 'Mission Planning', 'Risk Assessment', 'Performance Optimization']
    },
    {
      title: 'Space Propulsion',
      description: 'Advanced propulsion systems for space exploration',
      icon: Zap,
      features: ['Chemical Propulsion', 'Electric Propulsion', 'Nuclear Propulsion', 'Solar Sails']
    },
    {
      title: 'Space Habitation',
      description: 'Design sustainable living environments in space',
      icon: Building,
      features: ['Life Support Systems', 'Radiation Protection', 'Resource Management', 'Human Factors']
    },
    {
      title: 'Space Manufacturing',
      description: 'Manufacturing capabilities in microgravity environments',
      icon: TestTube,
      features: ['3D Printing', 'Material Processing', 'Assembly Systems', 'Quality Control']
    }
  ];

  const industries = [
    { name: 'Telecommunications', icon: Network, description: 'Global satellite communication networks' },
    { name: 'Agriculture', icon: Globe, description: 'Precision farming with satellite data' },
    { name: 'Transportation', icon: Rocket, description: 'Space-based navigation and logistics' },
    { name: 'Defense', icon: Shield, description: 'Space-based security and surveillance' },
    { name: 'Research', icon: TestTube, description: 'Scientific research and exploration' },
    { name: 'Entertainment', icon: Star, description: 'Space tourism and experiences' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Space Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneer the future of space exploration and commercialization. Our space technology 
              solutions enable new frontiers in satellite systems, space communications, and 
              interplanetary exploration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore Space</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Space Technology Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive space technology platform provides the expertise and infrastructure 
              to advance humanity's presence in space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaceCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Space Technology Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of space technology services designed to 
              advance space exploration and commercialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Transform</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our space technology solutions are revolutionizing industries by enabling 
              new capabilities and opportunities beyond Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            The Future of Space
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Space technology is enabling new frontiers in exploration, commerce, and 
            human achievement beyond our planet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Space Exploration</h3>
              <p className="text-purple-100">Discover new worlds and expand human presence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Earth Benefits</h3>
              <p className="text-purple-100">Space technology improving life on Earth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Commercial Space</h3>
              <p className="text-purple-100">New economic opportunities in space</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Join Space Revolution</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Reach for the Stars?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Pioneer the future of space technology. Our space experts are ready to help 
            you build the next generation of space systems and capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Launch Your Mission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpaceTechnologyPage;