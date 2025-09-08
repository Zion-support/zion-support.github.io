import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Leaf, 
  Droplets, 
  Sun, 
  Target, 
  Zap, 
  Shield, 
  BarChart3,
  Clock,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  MessageCircle,
  Video,
  FileText,
  Search,
  Settings,
  Palette,
  Monitor,
  Smartphone,
  Network,
  Activity,
  Eye,
  Cog,
  Rocket,
  DollarSign,
  Handshake,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Sprout,
  TreePine,
  Wheat,
  Carrot,
  Apple,
  Grape,
  Corn,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star,
  Heart,
  Diamond,
  CircleDot,
  SquareDot
} from 'lucide-react';

export default function AIAutonomousAgriculturePlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      <Helmet>
        <title>AI Autonomous Agriculture Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous agriculture platform that optimizes crop production, monitors soil health, and automates farming operations for maximum yield and sustainability." />
        <meta name="keywords" content="AI agriculture, autonomous farming, smart agriculture, precision farming, crop optimization, soil monitoring, sustainable farming, Zion Tech Group" />
        <meta property="og:title" content="AI Autonomous Agriculture Platform - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered autonomous agriculture platform for optimized crop production." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-autonomous-agriculture-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered Agriculture
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"> Agriculture Platform</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Revolutionizing farming with autonomous AI that optimizes crop production, monitors soil health, 
              and automates farming operations for maximum yield and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-500/90 hover:to-green-600/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-green-100">Yield Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-green-100">Water Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-green-100">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-green-100">Crop Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with proven agricultural methodologies 
              to create the most advanced farming experience available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Crop Management</h3>
              <p className="text-green-100">
                AI automatically manages crop cycles, irrigation, fertilization, and pest control 
                based on real-time data and predictive analytics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Irrigation Systems</h3>
              <p className="text-green-100">
                Intelligent water management that optimizes usage based on soil moisture, weather forecasts, and crop needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Soil Health Monitoring</h3>
              <p className="text-green-100">
                Continuous monitoring of soil composition, pH levels, nutrient content, and microbial activity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Weather Integration</h3>
              <p className="text-green-100">
                Real-time weather data integration for predictive farming decisions and risk management.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pest & Disease Detection</h3>
              <p className="text-green-100">
                AI-powered early detection of pests, diseases, and crop stress for proactive intervention.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sustainable Practices</h3>
              <p className="text-green-100">
                Eco-friendly farming methods that reduce environmental impact while maximizing productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Supported Crop Types
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our platform supports a wide variety of crops, from traditional staples to specialty and medicinal plants.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Grains */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300">
              <Wheat className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Grains</div>
              <div className="text-green-100 text-sm">Wheat, Rice, Corn, Oats</div>
            </div>

            {/* Vegetables */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300">
              <Carrot className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Vegetables</div>
              <div className="text-green-100 text-sm">Carrots, Tomatoes, Peppers</div>
            </div>

            {/* Fruits */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300">
              <Apple className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Fruits</div>
              <div className="text-green-100 text-sm">Apples, Grapes, Berries</div>
            </div>

            {/* Herbs */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300">
              <Basil className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Herbs</div>
              <div className="text-green-100 text-sm">Basil, Mint, Rosemary</div>
            </div>

            {/* Medicinal */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300">
              <Sprout className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Medicinal</div>
              <div className="text-green-100 text-sm">Ginseng, Turmeric, Moringa</div>
            </div>

            {/* Specialty */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-4 text-center hover:border-green-400/50 transition-all duration-300">
              <TreePine className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Specialty</div>
              <div className="text-green-100 text-sm">Quinoa, Amaranth, Hemp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experience unprecedented improvements in crop yields, resource efficiency, and farming sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Increased Crop Yields</h3>
                    <p className="text-green-100">
                      AI optimization leads to 40% higher yields through precise resource management and timing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Resource Efficiency</h3>
                    <p className="text-green-100">
                      Reduce water usage by 60% and fertilizer by 30% through intelligent monitoring and automation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                    <p className="text-green-100">
                      Continuous monitoring ensures optimal growing conditions and early problem detection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Sustainable Farming</h3>
                    <p className="text-green-100">
                      Eco-friendly practices that protect soil health and reduce environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-8 border border-green-400/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-green-100">Crop Yield</span>
                      <span className="text-green-400 font-semibold">+40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-100">Water Savings</span>
                      <span className="text-green-400 font-semibold">+60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-100">Fertilizer Use</span>
                      <span className="text-green-400 font-semibold">-30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-100">Labor Costs</span>
                      <span className="text-green-400 font-semibold">-50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Choose the plan that best fits your farm's size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Small Farm</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$199</div>
                <div className="text-green-100">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Up to 50 acres
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Basic AI monitoring
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  20 crop types
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Basic analytics
                </li>
              </ul>
              <button className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-500/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-green-800/30 border-2 border-green-400 rounded-xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Medium Farm</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$499</div>
                <div className="text-green-100">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Up to 500 acres
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Advanced AI monitoring
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  All 100+ crop types
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Custom crop plans
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-500/90 hover:to-green-600/90 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-green-800/30 border border-green-600/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Large Farm</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">Custom</div>
                <div className="text-green-100">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Unlimited acres
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Custom AI models
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  White-label solution
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Dedicated support
                </li>
                <li className="flex items-center text-green-100">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  API access
                </li>
              </ul>
              <button className="w-full py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers already using our AI platform to revolutionize agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-500/90 hover:to-green-600/90 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Have questions about our AI Agriculture Platform? Our team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <div className="text-green-100">+1 302 464 0950</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <div className="text-green-100">kleber@ziontechgroup.com</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-green-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
          <button className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-500/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}