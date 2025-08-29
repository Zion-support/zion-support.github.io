import React from 'react';
import { Zap, Target, TrendingUp, Shield, Globe, Cpu, Lightbulb, Atom, Wifi } from 'lucide-react';
const QuantumEdgeComputing = () => {
    const edgeFeatures = [
        {
            icon: Wifi,
            title: "Edge Processing",
            description: "Process data at the edge for real-time decision making",
            features: ["Local computation", "Reduced latency", "Bandwidth optimization", "Offline capability"]
        },
        {
            icon: Atom,
            title: "Quantum Enhancement",
            description: "Quantum algorithms for edge computing optimization",
            features: ["Quantum optimization", "Enhanced security", "Improved efficiency", "Future-proof technology"]
        },
        {
            icon: Zap,
            title: "Real-time Analytics",
            description: "Instant insights and decision making at the edge",
            features: ["Live data processing", "Instant responses", "Predictive analytics", "Actionable insights"]
        },
        {
            icon: Shield,
            title: "Edge Security",
            description: "Advanced security protocols for edge devices",
            features: ["Local encryption", "Secure communication", "Access control", "Threat detection"]
        }
    ];
    const useCases = [
        {
            title: "IoT Networks",
            description: "Intelligent edge processing for IoT device networks",
            icon: Wifi,
            benefits: ["Reduced latency", "Lower bandwidth costs", "Improved reliability", "Scalable deployment"]
        },
        {
            title: "Autonomous Vehicles",
            description: "Real-time decision making for autonomous systems",
            icon: Target,
            benefits: ["Instant response", "Safety enhancement", "Efficient routing", "Continuous operation"]
        },
        {
            title: "Smart Cities",
            description: "Intelligent infrastructure management and optimization",
            icon: Globe,
            benefits: ["Traffic optimization", "Energy efficiency", "Public safety", "Resource management"]
        },
        {
            title: "Industrial IoT",
            description: "Manufacturing and industrial process optimization",
            icon: Cpu,
            benefits: ["Predictive maintenance", "Quality control", "Efficiency improvement", "Cost reduction"]
        },
        {
            title: "Healthcare Monitoring",
            description: "Real-time health monitoring and alert systems",
            icon: Shield,
            benefits: ["Instant alerts", "Continuous monitoring", "Data privacy", "Improved outcomes"]
        },
        {
            title: "Financial Services",
            description: "High-frequency trading and risk assessment",
            icon: TrendingUp,
            benefits: ["Ultra-low latency", "Real-time risk", "Market analysis", "Fraud detection"]
        }
    ];
    const benefits = [
        "Ultra-low latency for real-time applications",
        "Reduced bandwidth costs and network congestion",
        "Enhanced privacy and data security",
        "Improved reliability and offline capabilities",
        "Scalable deployment across distributed networks",
        "Future-proof quantum-enhanced technology"
    ];
    const implementation = [
        {
            phase: "Edge Assessment",
            description: "Evaluate current edge infrastructure and requirements",
            duration: "2-3 weeks"
        },
        {
            phase: "Architecture Design",
            description: "Design quantum-enhanced edge computing architecture",
            duration: "4-6 weeks"
        },
        {
            phase: "Edge Development",
            description: "Build and configure edge computing nodes",
            duration: "8-12 weeks"
        },
        {
            phase: "Quantum Integration",
            description: "Integrate quantum algorithms and optimization",
            duration: "6-10 weeks"
        },
        {
            phase: "Network Deployment",
            description: "Deploy edge nodes across the network",
            duration: "4-8 weeks"
        },
        {
            phase: "Testing & Optimization",
            description: "Validate performance and optimize systems",
            duration: "3-6 weeks"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Wifi className="w-4 h-4 mr-2"/>
              Edge Computing Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Edge Computing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Bring quantum computing power to the edge for ultra-fast, 
              intelligent decision making across distributed networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#features" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Features
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Edge Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Quantum Edge Computing solution combines the power of edge 
              processing with quantum optimization for unprecedented performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {edgeFeatures.map((feature, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantum Edge Computing excels in applications requiring real-time 
              processing and intelligent decision making at the network edge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Quantum Edge Computing?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our solution provides the speed and intelligence needed for 
                next-generation edge computing applications.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (<li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-blue-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Edge Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Bring quantum computing power to the edge for intelligent, 
                  real-time decision making across your network.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Ultra-low latency</p>
                  <p>• Quantum optimization</p>
                  <p>• Real-time intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A structured approach to deploying quantum-enhanced edge computing 
            across your network infrastructure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementation.map((phase, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-300 mb-2">{phase.description}</p>
                <p className="text-sm text-blue-400">{phase.duration}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Edge Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your network with quantum-enhanced edge computing 
            for unprecedented speed and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Deployment
            </a>
            <a href="/solutions" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default QuantumEdgeComputing;
