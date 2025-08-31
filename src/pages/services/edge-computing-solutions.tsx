import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Network, 
  Database, 
  Globe,
  Users,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Server,
  Wifi,
  Activity,
  Monitor,
  Smartphone,
  Cloud,
  Lock
} from 'lucide-react';

export default function EdgeComputingSolutions() {
  const features = [
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Deploy AI models at the edge for real-time inference and reduced latency."
    },
    {
      icon: Network,
      title: "5G Edge Integration",
      description: "Seamlessly integrate with 5G networks for ultra-low latency applications."
    },
    {
      icon: Database,
      title: "Edge Data Management",
      description: "Efficient data processing and storage at the edge with intelligent caching."
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols and threat detection at the network edge."
    },
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Distributed edge computing infrastructure across multiple geographic locations."
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Instant data processing and analytics at the edge for immediate insights."
    }
  ];

  const useCases = [
    {
      title: "IoT & Smart Cities",
      description: "Real-time monitoring and control of urban infrastructure and IoT devices",
      icon: Smartphone
    },
    {
      title: "Autonomous Vehicles",
      description: "Low-latency processing for self-driving cars and transportation systems",
      icon: Activity
    },
    {
      title: "Industrial IoT",
      description: "Manufacturing automation and predictive maintenance at the edge",
      icon: Server
    },
    {
      title: "Healthcare Monitoring",
      description: "Real-time patient monitoring and medical device management",
      icon: Monitor
    }
  ];

  const benefits = [
    "Reduced latency for real-time applications",
    "Lower bandwidth costs and improved efficiency",
    "Enhanced privacy and data security",
    "Scalable and distributed computing power",
    "Improved user experience and responsiveness",
    "Cost-effective infrastructure deployment"
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with edge computing solutions. Reduce latency, improve performance, and enable real-time applications with our edge infrastructure." />
        <meta name="keywords" content="edge computing, edge AI, 5G edge, IoT edge, real-time processing" />
        <link rel="canonical" href="https://ziontechgroup.com/services/edge-computing-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Edge Computing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Bring computing power closer to your data sources with edge computing solutions. 
                Reduce latency, improve performance, and enable real-time applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive edge computing capabilities designed for modern applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real-world applications where edge computing delivers measurable business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your business operations with edge computing advantages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Edge?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your applications with edge computing solutions that bring computing power closer to your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Start Edge Journey
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}