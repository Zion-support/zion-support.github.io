import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
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
  Lightbulb,
  TrafficCone,
  Leaf,
  Droplets,
  Gauge,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Phone,
  Mail
} from 'lucide-react';

const AISmartCityInfrastructureManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Smart City Infrastructure Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered smart city infrastructure management platform. Real-time monitoring, predictive maintenance, energy optimization, and intelligent urban planning for modern cities." />
        <meta name="keywords" content="AI smart city, infrastructure management, urban planning, energy optimization, traffic management, waste management, water systems" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-smart-city-infrastructure-management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart City
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Infrastructure Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your city into a sustainable, efficient, and intelligent urban ecosystem with AI-powered 
              infrastructure management, real-time monitoring, and predictive optimization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
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
              Revolutionary Smart City Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced urban infrastructure management capabilities ever created
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Energy Management */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Energy Management</h3>
              <p className="text-gray-300">
                Intelligent energy distribution, renewable integration, and demand forecasting reducing 
                energy costs by 35% and carbon emissions by 40%.
              </p>
            </div>

            {/* Traffic Management */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrafficCone className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Traffic Management</h3>
              <p className="text-gray-300">
                Real-time traffic optimization, intelligent signal control, and predictive congestion 
                management reducing travel time by 30% and emissions by 25%.
              </p>
            </div>

            {/* Water Management */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Intelligent Water Systems</h3>
              <p className="text-gray-300">
                Smart water distribution, leak detection, quality monitoring, and conservation optimization 
                saving 20% of water resources and reducing costs by 30%.
              </p>
            </div>

            {/* Waste Management */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Waste Management</h3>
              <p className="text-gray-300">
                AI-powered waste collection optimization, recycling automation, and landfill reduction 
                improving efficiency by 45% and sustainability by 60%.
              </p>
            </div>

            {/* Public Safety */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enhanced Public Safety</h3>
              <p className="text-gray-300">
                Intelligent surveillance, emergency response optimization, and predictive crime prevention 
                improving response times by 50% and public safety by 40%.
              </p>
            </div>

            {/* Environmental Monitoring */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <Gauge className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Environmental Monitoring</h3>
              <p className="text-gray-300">
                Real-time air quality, noise pollution, and environmental impact monitoring with 
                predictive analytics and automated response systems.
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
              Choose the perfect plan for your city's size and infrastructure requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small City Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Small City</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$1,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Up to 50,000 residents
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Core infrastructure modules
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Basic AI analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Medium City Plan */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Medium City</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$4,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Up to 500,000 residents
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Full infrastructure suite
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Advanced AI & ML capabilities
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Predictive analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Priority support
                </li>
              </ul>
              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Large City Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Large City</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Unlimited residents
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Complete AI infrastructure suite
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3"></div>
                  Custom development & integration
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
              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
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
              Why Choose Our Smart City Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency, sustainability, and citizen satisfaction with AI-powered urban management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">35% Reduction in Energy Costs</h3>
                  <p className="text-gray-300">
                    AI-powered energy management optimizes distribution, integrates renewables, and 
                    reduces waste through intelligent demand forecasting.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">30% Improvement in Traffic Flow</h3>
                  <p className="text-gray-300">
                    Intelligent traffic management reduces congestion, optimizes signal timing, and 
                    provides real-time routing recommendations for citizens.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Droplets className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">20% Water Conservation</h3>
                  <p className="text-gray-300">
                    Smart water systems detect leaks, optimize distribution, and implement intelligent 
                    conservation strategies for sustainable resource management.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Leaf className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">45% Increase in Waste Efficiency</h3>
                  <p className="text-gray-300">
                    AI-powered waste management optimizes collection routes, improves recycling rates, 
                    and reduces landfill dependency through smart sorting.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">50% Faster Emergency Response</h3>
                  <p className="text-gray-300">
                    Intelligent public safety systems provide real-time monitoring, predictive analytics, 
                    and optimized emergency response coordination.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Gauge className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Environmental Monitoring</h3>
                  <p className="text-gray-300">
                    Continuous monitoring of air quality, noise levels, and environmental factors with 
                    automated alerts and response systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance, scalability, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
              <p className="text-gray-300 text-sm">
                Local AI processing for real-time decision making and reduced latency
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">5G & IoT</h3>
              <p className="text-gray-300 text-sm">
                High-speed connectivity and massive IoT device integration
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Big Data Analytics</h3>
              <p className="text-gray-300 text-sm">
                Real-time processing of massive urban data streams
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Native</h3>
              <p className="text-gray-300 text-sm">
                Scalable, resilient, and globally distributed infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Smart City of Tomorrow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the revolution in urban infrastructure management with our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
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
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCityInfrastructureManagement;