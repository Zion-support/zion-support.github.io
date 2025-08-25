import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Network, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Wifi } from 'lucide-react';
=======
<<<<<<< HEAD
import { 
  Wifi, 
  Zap, 
  Shield, 
  Globe, 
  Network, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Building,
  Rocket,
  Star,
  Clock,
  Target,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
=======
import { Network, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Wifi } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import SEOHead from '../components/SEOHead';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Network,
      title: "5G Network Infrastructure",
      description: "Enterprise-grade 5G network deployment and optimization for maximum performance."
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-millisecond latency for real-time applications and critical business operations."
=======
<<<<<<< HEAD
      icon: Wifi,
      title: "Private 5G Networks",
      description: "Deploy secure, dedicated 5G networks for your enterprise with ultra-low latency and high bandwidth capabilities.",
      color: "from-blue-500 to-purple-600"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    },
    {
      icon: Shield,
      title: "Enterprise Security",
<<<<<<< HEAD
=======
      description: "Advanced security protocols and encryption to protect your 5G network infrastructure and data transmission.",
      color: "from-green-500 to-blue-600"
=======
      icon: Network,
      title: "5G Network Infrastructure",
      description: "Enterprise-grade 5G network deployment and optimization for maximum performance."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
<<<<<<< HEAD
      description: "Achieve sub-millisecond latency for real-time applications like autonomous systems and industrial automation.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Network,
      title: "Network Slicing",
      description: "Create multiple virtual networks on a single physical infrastructure to optimize for different use cases.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Deploy computing resources at the edge of your 5G network for faster processing and reduced latency.",
      color: "from-red-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "IoT Integration",
      description: "Seamlessly connect and manage millions of IoT devices with massive machine-type communications.",
      color: "from-teal-500 to-blue-600"
=======
      description: "Sub-millisecond latency for real-time applications and critical business operations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      description: "Advanced security protocols and network segmentation for enterprise environments."
    },
    {
      icon: TrendingUp,
      title: "Scalable Bandwidth",
      description: "Dynamic bandwidth allocation to meet growing enterprise demands."
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const useCases = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Smart Manufacturing",
      description: "Enable Industry 4.0 with real-time monitoring, predictive maintenance, and autonomous production systems.",
      benefits: ["Real-time monitoring", "Predictive maintenance", "Autonomous operations", "Quality control"]
    },
    {
      title: "Smart Cities",
      description: "Transform urban infrastructure with intelligent traffic management, smart lighting, and emergency response systems.",
      benefits: ["Traffic optimization", "Smart lighting", "Emergency response", "Environmental monitoring"]
    },
    {
      title: "Healthcare",
      description: "Support telemedicine, remote patient monitoring, and real-time medical device connectivity.",
      benefits: ["Remote patient care", "Real-time monitoring", "Medical device connectivity", "Emergency response"]
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize supply chains with real-time tracking, autonomous vehicles, and smart warehouse management.",
      benefits: ["Real-time tracking", "Autonomous vehicles", "Smart warehouses", "Route optimization"]
    }
  ];

  const benefits = [
    "99.99% network reliability and uptime",
    "10x faster data transmission speeds",
    "Sub-millisecond latency for critical applications",
    "Enhanced security with end-to-end encryption",
    "Scalable infrastructure for future growth",
    "24/7 monitoring and support",
    "Compliance with industry standards",
    "Cost-effective deployment and maintenance"
  ];

  return (
    <>
      <SEOHead 
        title="5G Enterprise Solutions | Zion Tech Group"
        description="Transform your business with our cutting-edge 5G enterprise solutions. Private networks, ultra-low latency, and advanced security for the future of connectivity."
        keywords="5G enterprise, private 5G networks, enterprise connectivity, network slicing, edge computing, IoT integration"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                Next-Generation Connectivity
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                5G Enterprise
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Unlock the power of 5G for your enterprise with our comprehensive solutions. From private networks to edge computing, 
                we deliver the connectivity infrastructure your business needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center gap-2"
                >
                  Schedule Demo
                  <Rocket className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced 5G Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5G enterprise solutions provide the foundation for next-generation applications and services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how 5G enterprise solutions are transforming industries and enabling new possibilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="space-y-3">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the advantages of working with a leading 5G technology provider.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our 5G enterprise solutions and unlock the potential of next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/20 inline-flex items-center gap-2"
              >
                View Pricing
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: "Industrial IoT",
      description: "Connect and manage thousands of IoT devices with reliable 5G connectivity."
    },
    {
      title: "Remote Work",
      description: "Enable seamless remote work with high-speed, low-latency connections."
    },
    {
      title: "Edge Computing",
      description: "Deploy edge computing solutions with ultra-fast 5G backhaul."
    },
    {
      title: "Video Conferencing",
      description: "Crystal-clear video calls with minimal latency and maximum reliability."
    }
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Finance",
    "Retail",
    "Transportation",
    "Education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="5G Enterprise Solutions - Zion Tech Group"
        description="Revolutionary 5G enterprise solutions providing ultra-fast connectivity, low latency, and scalable network infrastructure for modern businesses."
        keywords="5G enterprise, 5G solutions, enterprise networking, 5G infrastructure, network optimization, enterprise connectivity"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Network className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            5G Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our revolutionary 5G enterprise solutions that provide 
            ultra-fast connectivity, ultra-low latency, and scalable network infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/it-infrastructure"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our 5G solutions combine cutting-edge technology with enterprise-grade reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how 5G technology transforms enterprise operations and connectivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our 5G solutions are designed to transform operations across diverse industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge 5G technologies for maximum performance and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Network, name: "5G Core" },
              { icon: Wifi, name: "RAN" },
              { icon: Cpu, name: "Edge Computing" },
              { icon: Database, name: "Network Slicing" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 mx-auto w-fit">
                  <tech.icon className="h-8 w-8 text-cyan-500 mx-auto" />
                </div>
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the 5G revolution and transform your enterprise connectivity and operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/it-infrastructure"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Infrastructure Services
            </Link>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
};

export default FiveGEnterpriseSolutions;