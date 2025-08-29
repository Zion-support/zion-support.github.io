import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Globe,
  Server,
  Smartphone,
  Monitor,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Eye,
  Target,
  Key,
  Network,
  Bug,
  Fingerprint,
  Rocket,
  Wifi,
  Bluetooth,
  Satellite,
  Sensor
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IoTEdgeComputing() {
  const features = [
    {
      title: 'Edge Processing',
      description: 'Real-time data processing at the edge for instant insights and faster response times',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IoT Device Management',
      description: 'Centralized management of thousands of connected devices and sensors',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-time Analytics',
      description: 'Instant data analysis and decision-making at the edge of the network',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Low Latency Communication',
      description: 'Ultra-fast data transmission with minimal network delays',
      icon: Wifi,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Flexible edge computing infrastructure that grows with your needs',
      icon: Server,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Security & Privacy',
      description: 'Advanced security protocols and data privacy protection at the edge',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and predictive maintenance for industrial equipment',
      icon: Factory,
      benefits: ['Predictive maintenance', 'Quality control', 'Energy optimization', 'Production efficiency']
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent infrastructure management and urban planning',
      icon: Building,
      benefits: ['Traffic optimization', 'Energy management', 'Public safety', 'Environmental monitoring']
    },
    {
      title: 'Healthcare IoT',
      description: 'Connected medical devices and patient monitoring systems',
      icon: Heart,
      benefits: ['Patient monitoring', 'Device management', 'Data security', 'Real-time alerts']
    },
    {
      title: 'Retail & Logistics',
      description: 'Inventory management and supply chain optimization',
      icon: ShoppingCart,
      benefits: ['Inventory tracking', 'Supply chain visibility', 'Customer analytics', 'Automated ordering']
    }
  ];

  const benefits = [
    'Reduced latency by 90%',
    'Lower bandwidth costs by 60%',
    'Real-time decision making',
    'Enhanced data privacy',
    'Improved reliability',
    'Scalable architecture'
  ];

  const technologies = [
    'Edge Computing Platforms',
    'IoT Device Protocols',
    'Real-time Data Processing',
    'Machine Learning at Edge',
    '5G & LPWAN Networks',
    'Edge Security Frameworks'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Transform your IoT infrastructure with edge computing solutions. Real-time processing, low latency, and intelligent device management for the connected world."
        keywords="IoT edge computing, edge processing, real-time analytics, device management, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Edge Computing Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IoT Edge
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bring intelligence to the edge of your network with our IoT edge computing platform. 
              Process data in real-time, reduce latency, and enable instant decision-making 
              across your connected ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Edge Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Latency Reduction</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-indigo-400/20 rounded-xl">
              <div className="text-3xl font-bold text-indigo-400 mb-2">Real-time</div>
              <div className="text-gray-300">Processing</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Edge Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT edge computing platform combines cutting-edge technology 
              with intelligent processing to deliver unprecedented performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how IoT edge computing transforms industries and enables 
              new possibilities across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                    <useCase.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose IoT Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of edge computing 
              that revolutionize how you process and analyze IoT data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Edge Computing Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge edge computing and IoT technologies 
              to deliver reliable and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech}</h3>
                <p className="text-gray-300 text-sm">
                  Advanced edge computing technology for optimal performance and reliability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Edge Your IoT?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the edge computing revolution and transform your IoT infrastructure. 
              Process data faster, reduce costs, and enable real-time intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Start Edge Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Edge Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon components
const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);