import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Globe, Shield, Cpu, Users2, Award,
  CheckCircle, Target, BarChart3, TrendingUp, Lock,
  Server, Network, Monitor, Settings, RefreshCw,
  Play, Pause, AlertTriangle, CheckCircle2, Building,
  Wifi, HardDrive, Cloud, Smartphone, Link, Blocks,
  Wallet, CreditCard, PiggyBank, Building2, Activity,
  Waves, Zap, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, Target, Users2, FileText2, PieChart,
  Atom, Cpu, Brain, Zap, Target, BarChart3, Users,
  TrendingUp, Shield, Globe, Database, Network, Truck,
  Package, MapPin, Route, Clock, Activity, BarChart3,
  TrendingUp, Shield, Lock, Eye, Server, Cloud, Factory
} from 'lucide-react';

export const metadata: Metadata ={
  title: 'Quantum Supply Chain Intelligence | Zion Tech Group',
  description: 'Revolutionary quantum-powered supply chain intelligence platform with AI-driven optimization, real-time tracking, and predictive analytics.',
  keywords: 'quantum supply chain intelligence, AI supply chain, supply chain optimization, quantum logistics, supply chain analytics, logistics intelligence, quantum tracking',
  openGraph: {
    title: 'Quantum Supply Chain Intelligence | Zion Tech Group',
    description: 'Revolutionary quantum-powered supply chain intelligence platform with AI-driven optimization, real-time tracking, and predictive analytics.',
    url: 'https://ziontechgroup.com/quantum-supply-chain-intelligence',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-quantum-supply-chain.jpg',
        width: 120o0,
        height: 630,
        alt: 'Quantum Supply Chain Intelligence'},
    ],
    locale: 'en_US',
    type: 'website'},
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Supply Chain Intelligence | Zion Tech Group',
    description: 'Revolutionary quantum-powered supply chain intelligence platform with AI-driven optimization, real-time tracking, and predictive analytics.',
    images: ['https://ziontechgroup.com/og-image-quantum-supply-chain.jpg']},
  alternates: {
    canonical: 'https://ziontechgroup.com/quantum-supply-chain-intelligence'}};

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function QuantumSupplyChainIntelligence() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-90o0/20 via-red-90o0/20 to-pink-90o0/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50o0/20 border border-orange-50o0/30 text-orange-30o0 text-sm font-medium mb-8">
              <Truck className="w-4 h-4 mr-2"  />
              Quantum Supply Chain
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-40o0 via-red-40o0 to-pink-40o0 bg-clip-text text-transparent">
              Quantum Supply Chain Intelligence
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
              Experience the future of supply chain management with our revolutionary quantum-powered 
              platform featuring AI-driven optimization and real-time intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-60o0 to-red-60o0 rounded-xl font-semibold text-white hover:from-orange-70o0 hover:to-red-70o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                Optimize Supply Chain
                <ArrowRight className="ml-2 w-5 h-5"  />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-orange-50o0/30 rounded-xl font-semibold text-orange-30o0 hover:bg-orange-50o0/10 transition-all duration-30o0"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-90o0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary Supply Chain Intelligence
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our quantum supply chain intelligence platform combines cutting-edge quantum computing with 
              AI-driven optimization for unprecedented supply chain visibility and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-90o0/20 to-red-90o0/20 border border-orange-50o0/20">
              <div className="w-12 h-12 bg-orange-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-6 h-6 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Optimization</h3>
              <p className="text-gray-40o0">
                Advanced quantum algorithms for complex supply chain optimization and route planning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-pink-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Driven Intelligence</h3>
              <p className="text-gray-40o0">
                Intelligent algorithms that provide real-time supply chain insights and predictions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-purple-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-40o0">
                Live visibility into every aspect of your supply chain operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-indigo-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-40o0">
                Advanced forecasting for demand, inventory, and supply chain disruptions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-blue-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Route className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Route Optimization</h3>
              <p className="text-gray-40o0">
                Quantum-powered route planning for maximum efficiency and cost savings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-cyan-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Visibility</h3>
              <p className="text-gray-40o0">
                Worldwide supply chain monitoring and cross-border logistics optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Supply Chain Intelligence Capabilities
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our platform provides comprehensive supply chain solutions powered by quantum computing and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-90o0/20 to-red-90o0/20 border border-orange-50o0/20">
              <div className="w-12 h-12 bg-orange-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-40o0">Inventory Management</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Real-time tracking</li>
                <li>• Demand forecasting</li>
                <li>• Stock optimization</li>
                <li>• Reorder automation</li>
                <li>• Multi-location sync</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-pink-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-40o0">Logistics Optimization</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Route planning</li>
                <li>• Carrier selection</li>
                <li>• Cost optimization</li>
                <li>• Delivery tracking</li>
                <li>• Last-mile solutions</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-purple-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-40o0">Analytics & Reporting</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Performance metrics</li>
                <li>• Cost analysis</li>
                <li>• Efficiency reports</li>
                <li>• Trend analysis</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-indigo-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-40o0">Risk Management</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Disruption detection</li>
                <li>• Supplier monitoring</li>
                <li>• Contingency planning</li>
                <li>• Compliance tracking</li>
                <li>• Risk scoring</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-blue-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-40o0">Supplier Management</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Performance tracking</li>
                <li>• Quality monitoring</li>
                <li>• Cost analysis</li>
                <li>• Relationship management</li>
                <li>• Contract compliance</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-cyan-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-40o0">Process Automation</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Workflow automation</li>
                <li>• Order processing</li>
                <li>• Invoice management</li>
                <li>• Document handling</li>
                <li>• Integration APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-90o0 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Supply Chain Applications & Industries
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our quantum supply chain intelligence serves diverse industries and logistics needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-90o0/20 to-red-90o0/20 border border-orange-50o0/20">
              <div className="w-12 h-12 bg-orange-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-40o0">
                Production planning, raw material sourcing, and finished goods distribution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-pink-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail & E-commerce</h3>
              <p className="text-gray-40o0">
                Inventory management, order fulfillment, and last-mile delivery optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-purple-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Logistics & Transportation</h3>
              <p className="text-gray-40o0">
                Route optimization, fleet management, and cross-border logistics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-indigo-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare & Pharma</h3>
              <p className="text-gray-40o0">
                Medical supply chains, temperature-controlled logistics, and regulatory compliance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-blue-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Food & Agriculture</h3>
              <p className="text-gray-40o0">
                Cold chain logistics, perishable goods, and farm-to-table supply chains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-cyan-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction & Materials</h3>
              <p className="text-gray-40o0">
                Material sourcing, project logistics, and heavy equipment transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Quantum Supply Chain Intelligence Works
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our platform seamlessly integrates quantum computing with advanced supply chain analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-40o0">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-40o0">
                AI systems collect and analyze supply chain data from multiple sources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-40o0">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Processing</h3>
              <p className="text-gray-40o0">
                Quantum algorithms process complex supply chain optimization problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-40o0">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-40o0">
                AI analyzes patterns and generates optimization recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-40o0">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Execution</h3>
              <p className="text-gray-40o0">
                System executes optimized supply chain strategies in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-gray-90o0 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Supply Chain Intelligence Use Cases
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our platform serves various supply chain scenarios with tailored intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-90o0/20 to-red-90o0/20 border border-orange-50o0/20">
              <div className="w-12 h-12 bg-orange-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Demand Forecasting</h3>
              <p className="text-gray-40o0">
                Predictive analytics for accurate demand planning and inventory optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-pink-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Route className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Route Optimization</h3>
              <p className="text-gray-40o0">
                Quantum-powered route planning for maximum efficiency and cost savings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-purple-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
              <p className="text-gray-40o0">
                Proactive identification and mitigation of supply chain disruptions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-indigo-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
              <p className="text-gray-40o0">
                AI-driven cost analysis and optimization across the entire supply chain.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-blue-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Time Reduction</h3>
              <p className="text-gray-40o0">
                Optimization of production and delivery schedules for faster turnaround.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-cyan-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Sourcing</h3>
              <p className="text-gray-40o0">
                Intelligent supplier selection and global sourcing optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-90o0/20 via-red-90o0/20 to-pink-90o0/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Quantum Supply Chain Intelligence?
          </h2>
          <p className="text-xl text-gray-30o0 mb-8">
            Experience the future of supply chain management with our revolutionary quantum platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-60o0 to-red-60o0 rounded-xl font-semibold text-white hover:from-orange-70o0 hover:to-red-70o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              Optimize Supply Chain
              <ArrowRight className="ml-2 w-5 h-5"  />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-orange-50o0/30 rounded-xl font-semibold text-orange-30o0 hover:bg-orange-50o0/10 transition-all duration-30o0"
            >
              <Phone className="mr-2 w-5 h-5"  />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-40o0 mb-8">
                Ready to revolutionize your supply chain operations? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-40o0"  />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-30o0 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-40o0"  />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-30o0 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-40o0"  />
                  <span className="text-gray-30o0">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-90o0/20 to-red-90o0/20 rounded-2xl p-8 border border-orange-50o0/20">
              <h3 className="text-xl font-semibold mb-4">Supply Chain Consultation</h3>
              <p className="text-gray-40o0 mb-6">
                Let's discuss your supply chain challenges and how quantum intelligence can optimize your operations.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-60o0 to-red-60o0 rounded-xl font-semibold text-white hover:from-orange-70o0 hover:to-red-70o0 transition-all duration-30o0"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4"  />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}