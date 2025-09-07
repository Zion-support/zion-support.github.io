import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Car, 
  Shield, 
  MapPin, 
  BarChart3, 
  Zap, 
  Users, 
  Globe, 
  Lock,
  TrendingUp,
  Cpu,
  Network,
  Activity,
  Eye,
  Settings,
  Smartphone,
  Database,
  Cloud,
  Server,
  Wifi,
  Satellite,
  DollarSign,
  Phone,
  Mail
} from 'lucide-react';

const AIAutonomousVehicleManagementPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Vehicle Management Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous vehicle management platform. Real-time monitoring, predictive maintenance, fleet optimization, and intelligent routing for autonomous vehicles." />
        <meta name="keywords" content="AI autonomous vehicles, fleet management, predictive maintenance, autonomous driving, vehicle monitoring, fleet optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-vehicle-management-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Vehicle
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Management Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your autonomous vehicle fleet with AI-powered management, real-time monitoring, 
              predictive maintenance, and intelligent optimization. The future of transportation is here.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced autonomous vehicle management capabilities ever created
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Monitoring */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Vehicle Monitoring</h3>
              <p className="text-gray-300">
                Live tracking of vehicle location, status, performance metrics, and environmental conditions 
                with sub-second latency and 99.99% uptime.
              </p>
            </div>

            {/* AI-Powered Predictive Maintenance */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Predictive Maintenance</h3>
              <p className="text-gray-300">
                Machine learning algorithms predict component failures up to 30 days in advance, 
                reducing downtime by 85% and maintenance costs by 60%.
              </p>
            </div>

            {/* Intelligent Fleet Optimization */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Intelligent Fleet Optimization</h3>
              <p className="text-gray-300">
                AI algorithms optimize routes, schedules, and vehicle assignments in real-time, 
                improving efficiency by up to 40% and reducing fuel consumption by 25%.
              </p>
            </div>

            {/* Advanced Safety Systems */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Safety Systems</h3>
              <p className="text-gray-300">
                Multi-layered safety protocols, emergency response systems, and real-time risk assessment 
                ensuring the highest safety standards for autonomous operations.
              </p>
            </div>

            {/* Edge Computing Integration */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Edge Computing Integration</h3>
              <p className="text-gray-300">
                On-board AI processing capabilities for real-time decision making, reducing latency 
                and ensuring continuous operation even with network interruptions.
              </p>
            </div>

            {/* Comprehensive Analytics */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Analytics</h3>
              <p className="text-gray-300">
                Deep insights into fleet performance, operational efficiency, cost analysis, and 
                predictive trends with customizable dashboards and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your autonomous vehicle fleet size and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Up to 10 vehicles
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Basic monitoring & alerts
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Standard analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$799</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Up to 50 vehicles
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Advanced monitoring & AI insights
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Predictive maintenance
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Fleet optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Priority support
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Unlimited vehicles
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Full AI suite & customization
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Dedicated support team
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency, safety, and cost savings with AI-powered autonomous vehicle management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">85% Reduction in Downtime</h3>
                  <p className="text-gray-300">
                    AI-powered predictive maintenance prevents unexpected failures and keeps your fleet 
                    running at peak efficiency around the clock.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">40% Increase in Fleet Efficiency</h3>
                  <p className="text-gray-300">
                    Intelligent routing and scheduling algorithms optimize every aspect of your operations, 
                    maximizing productivity and minimizing costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">99.99% Safety Record</h3>
                  <p className="text-gray-300">
                    Multi-layered safety systems and real-time monitoring ensure the highest safety standards 
                    for autonomous vehicle operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">60% Reduction in Maintenance Costs</h3>
                  <p className="text-gray-300">
                    Predictive maintenance and optimized operations significantly reduce maintenance expenses 
                    while extending vehicle lifespan.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Global Scalability</h3>
                  <p className="text-gray-300">
                    Cloud-native architecture supports global operations with local edge computing for 
                    optimal performance and compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Lock className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-300">
                    Military-grade encryption, zero-trust architecture, and comprehensive compliance 
                    ensure your data and operations remain secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fleet?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous vehicle management with our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            No credit card required • 30-day free trial • Full support included
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousVehicleManagementPlatform;