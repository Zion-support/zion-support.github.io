import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Brain, Zap, Users, Target, ArrowRight, CheckCircle, Star, Lightbulb, Database, Globe, Rocket, Network, Wifi, Server, Activity } from 'lucide-react';

export default function IoTEdgeComputing() {
  const features = [
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "Real-time data processing at the network edge for instant insights"
    },
    {
      icon: Brain,
      title: "AI at the Edge",
      description: "Machine learning models deployed directly on IoT devices"
    },
    {
      icon: Network,
      title: "5G Integration",
      description: "Ultra-low latency connectivity for critical IoT applications"
    },
    {
      icon: Server,
      title: "Distributed Computing",
      description: "Scalable edge infrastructure across multiple locations"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant data analysis and decision-making capabilities"
    },
    {
      icon: Target,
      title: "Predictive Maintenance",
      description: "AI-powered equipment monitoring and failure prediction"
    }
  ];

  const benefits = [
    "Reduce latency by 90% compared to cloud processing",
    "Lower bandwidth costs by 70%",
    "Improve reliability by 95%",
    "Enable real-time decision making",
    "Reduce cloud dependency by 80%",
    "Scale IoT deployments efficiently"
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Energy Management"]
    },
    {
      industry: "Smart Cities",
      applications: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Infrastructure"]
    },
    {
      industry: "Healthcare",
      applications: ["Patient Monitoring", "Medical Devices", "Hospital Management", "Telemedicine"]
    },
    {
      industry: "Transportation",
      applications: ["Fleet Management", "Autonomous Vehicles", "Logistics", "Safety Systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-teal-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">IoT Edge Computing</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              IoT Edge
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Computing Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IoT infrastructure with edge computing. Process data locally, reduce latency, 
              and enable real-time decision-making with our intelligent edge computing platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge edge computing with IoT expertise to deliver unprecedented performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your IoT Infrastructure with Edge Computing
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our IoT Edge Computing Platform delivers measurable improvements across all aspects of IoT operations, 
                from data processing to decision-making and system reliability.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                    <div className="text-sm text-gray-300">Latency Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                    <div className="text-sm text-gray-300">Bandwidth Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">95%</div>
                    <div className="text-sm text-gray-300">Reliability Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                    <div className="text-sm text-gray-300">Cloud Independence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how IoT Edge Computing transforms operations across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg w-fit mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, name: "Edge Processors", description: "High-performance computing" },
              { icon: Network, name: "5G Networks", description: "Ultra-low latency connectivity" },
              { icon: Database, name: "Edge Storage", description: "Local data persistence" },
              { icon: Globe, name: "Distributed", description: "Multi-location deployment" },
              { icon: Shield, name: "Security", description: "Edge-to-edge protection" },
              { icon: Zap, name: "Performance", description: "Real-time processing" },
              { icon: Users, name: "Scalability", description: "Flexible infrastructure" },
              { icon: Rocket, name: "Innovation", description: "Continuous advancement" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 mb-4 group-hover:border-blue-500/50 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IoT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the edge computing revolution and optimize your IoT operations with our intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}