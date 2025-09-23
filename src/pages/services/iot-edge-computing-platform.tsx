import React from 'react';
import { SEO } from '../../components/SEO';
import { Cpu, Zap, Brain, Target, TrendingUp, Users, Wifi, Globe } from 'lucide-react';

export default function IoTEdgeComputingPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing Platform - Zion Tech Group"
        description="Transform your IoT infrastructure with edge computing solutions. Process data closer to the source for faster insights and reduced latency."
        keywords="IoT edge computing, edge analytics, IoT platform, edge processing, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
              <Cpu className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IoT Edge Computing Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your IoT infrastructure with edge computing that processes data closer to the source. 
            Reduce latency, improve performance, and enable real-time decision making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <Cpu className="h-5 w-5 mr-2" />
              Get Started
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Advanced IoT edge processing for real-time insights and automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Local Processing</h3>
              <p className="text-gray-300">
                Process IoT data locally at the edge for faster response times and reduced bandwidth usage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Analytics</h3>
              <p className="text-gray-300">
                Analyze data in real-time at the edge for immediate insights and automated responses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-300">
                Scale your edge computing infrastructure to handle growing IoT device networks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-4">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Edge Connectivity</h3>
              <p className="text-gray-300">
                Seamless connectivity between edge devices and cloud infrastructure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Deployment</h3>
              <p className="text-gray-300">
                Deploy edge computing nodes globally for distributed IoT processing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Low Latency</h3>
              <p className="text-gray-300">
                Ultra-low latency processing for time-critical IoT applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT Edge Computing Use Cases
            </h2>
            <p className="text-xl text-gray-300">
              Transform industries with edge computing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Industrial IoT</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Predictive maintenance and equipment monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Quality control and defect detection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Energy optimization and smart grids</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Supply chain tracking and logistics</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Smart Cities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Traffic management and smart parking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Environmental monitoring and air quality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Public safety and emergency response</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Smart lighting and energy management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Edge Computing?
            </h2>
            <p className="text-xl text-gray-300">
              Transform your IoT infrastructure with edge processing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Reduced Latency</h3>
              <p className="text-gray-300">
                Process data locally for faster response times and real-time decision making
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost Efficiency</h3>
              <p className="text-gray-300">
                Reduce bandwidth costs and cloud processing expenses
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Processing</h3>
              <p className="text-gray-300">
                AI-powered edge analytics for smarter IoT applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IoT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start processing data at the edge for faster insights and better performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <Cpu className="h-5 w-5 mr-2" />
              Start Edge Computing
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Contact Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}