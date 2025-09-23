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
  Wifi, HardDrive, Database, Cloud, Smartphone
} from 'lucide-react';

export const metadata: Metadata ={
  title: 'Autonomous IT Operations | Zion Tech Group',
  description: 'AI-powered autonomous IT operations platform for automated infrastructure management and system optimization.',
  keywords: 'autonomous IT operations, AI IT management, infrastructure automation, system monitoring, IT optimization',
  openGraph: {
    title: 'Autonomous IT Operations | Zion Tech Group',
    description: 'AI-powered autonomous IT operations platform for automated infrastructure management and system optimization.',
    url: 'https://ziontechgroup.com/autonomous-it-operations',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-it-operations.jpg',
        width: 120o0,
        height: 630,
        alt: 'Autonomous IT Operations'},
    ],
    locale: 'en_US',
    type: 'website'},
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous IT Operations | Zion Tech Group',
    description: 'AI-powered autonomous IT operations platform for automated infrastructure management and system optimization.',
    images: ['https://ziontechgroup.com/og-image-it-operations.jpg']},
  alternates: {
    canonical: 'https://ziontechgroup.com/autonomous-it-operations'}};

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AutonomousITOperations() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-90o0/20 via-blue-90o0/20 to-indigo-90o0/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50o0/20 border border-cyan-50o0/30 text-cyan-30o0 text-sm font-medium mb-8">
              <Server className="w-4 h-4 mr-2"  />
              AI-Powered IT Operations
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-indigo-40o0 bg-clip-text text-transparent">
              Autonomous IT Operations
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
              Transform your IT infrastructure with AI-powered automation that handles monitoring, 
              maintenance, and optimization autonomously for maximum efficiency and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-60o0 to-blue-60o0 rounded-xl font-semibold text-white hover:from-cyan-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5"  />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-cyan-50o0/30 rounded-xl font-semibold text-cyan-30o0 hover:bg-cyan-50o0/10 transition-all duration-30o0"
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
              Revolutionary IT Operations
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our AI platform continuously monitors and optimizes your IT infrastructure, automatically 
              handling maintenance, scaling, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-90o0/20 to-blue-90o0/20 border border-cyan-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Monitoring</h3>
              <p className="text-gray-40o0">
                AI-powered monitoring that predicts issues before they impact your systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-indigo-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Maintenance</h3>
              <p className="text-gray-40o0">
                Proactive maintenance and updates that keep your systems running optimally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-purple-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Optimization</h3>
              <p className="text-gray-40o0">
                Intelligent network management with automatic traffic optimization and load balancing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-pink-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Automation</h3>
              <p className="text-gray-40o0">
                Automated security monitoring, threat detection, and incident response.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-red-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Healing Systems</h3>
              <p className="text-gray-40o0">
                Automatic detection and resolution of common IT issues without human intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-orange-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-red-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-40o0">
                Continuous optimization of system performance, resource allocation, and capacity planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Operations Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              IT Operations Capabilities
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our platform provides comprehensive IT operations automation across all infrastructure components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-90o0/20 to-blue-90o0/20 border border-cyan-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-40o0">Server Management</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Automated provisioning</li>
                <li>• Performance monitoring</li>
                <li>• Capacity planning</li>
                <li>• Load balancing</li>
                <li>• Failover management</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-indigo-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-40o0">Network Operations</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Traffic optimization</li>
                <li>• Bandwidth management</li>
                <li>• QoS automation</li>
                <li>• Network security</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-purple-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-40o0">Database Operations</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Performance tuning</li>
                <li>• Backup automation</li>
                <li>• Replication management</li>
                <li>• Query optimization</li>
                <li>• Capacity scaling</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-pink-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-40o0">Cloud Operations</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Multi-cloud management</li>
                <li>• Resource optimization</li>
                <li>• Cost management</li>
                <li>• Auto-scaling</li>
                <li>• Cloud security</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-red-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-40o0">Security Operations</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Threat detection</li>
                <li>• Vulnerability scanning</li>
                <li>• Incident response</li>
                <li>• Compliance monitoring</li>
                <li>• Access management</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-orange-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-orange-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-40o0">Analytics & Reporting</h3>
              <ul className="text-gray-40o0 space-y-2">
                <li>• Performance metrics</li>
                <li>• Capacity analytics</li>
                <li>• Cost analysis</li>
                <li>• Trend forecasting</li>
                <li>• Operational insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-90o0 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Autonomous IT Operations Works
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our AI-powered platform continuously monitors and optimizes your IT infrastructure automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-40o0">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-gray-40o0">
                AI continuously monitors all IT infrastructure components and system performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-40o0">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Analysis</h3>
              <p className="text-gray-40o0">
                Machine learning algorithms analyze patterns and predict potential issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-40o0">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Actions</h3>
              <p className="text-gray-40o0">
                Platform automatically executes appropriate IT operations based on analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50o0/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-40o0">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-40o0">
                Continuous learning and optimization of IT operations and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              IT Operations Use Cases
            </h2>
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
              Our platform serves various organizations with tailored IT operations automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-90o0/20 to-blue-90o0/20 border border-cyan-50o0/20">
              <div className="w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Small Businesses</h3>
              <p className="text-gray-40o0">
                Automated IT management with minimal overhead and maximum efficiency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-90o0/20 to-indigo-90o0/20 border border-blue-50o0/20">
              <div className="w-12 h-12 bg-blue-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprises</h3>
              <p className="text-gray-40o0">
                Large-scale IT operations with compliance, security, and governance features.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-90o0/20 to-purple-90o0/20 border border-indigo-50o0/20">
              <div className="w-12 h-12 bg-indigo-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Growth Companies</h3>
              <p className="text-gray-40o0">
                Scalable IT operations that grow with your business and handle complexity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-90o0/20 to-pink-90o0/20 border border-purple-50o0/20">
              <div className="w-12 h-12 bg-purple-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Location Operations</h3>
              <p className="text-gray-40o0">
                Unified IT operations across multiple locations and data centers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-90o0/20 to-red-90o0/20 border border-pink-50o0/20">
              <div className="w-12 h-12 bg-pink-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulated Industries</h3>
              <p className="text-gray-40o0">
                IT operations with built-in compliance, audit trails, and security controls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-90o0/20 to-orange-90o0/20 border border-red-50o0/20">
              <div className="w-12 h-12 bg-orange-50o0/20 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-semibold mb-3">Legacy Modernization</h3>
              <p className="text-gray-40o0">
                Gradual migration to modern IT operations with automated transformation tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-90o0/20 via-blue-90o0/20 to-indigo-90o0/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Automate Your IT Operations?
          </h2>
          <p className="text-xl text-gray-30o0 mb-8">
            Join the future of IT operations where AI-powered automation meets intelligent infrastructure management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-60o0 to-blue-60o0 rounded-xl font-semibold text-white hover:from-cyan-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5"  />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-cyan-50o0/30 rounded-xl font-semibold text-cyan-30o0 hover:bg-cyan-50o0/10 transition-all duration-30o0"
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
                Ready to revolutionize your IT operations? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-40o0"  />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-30o0 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-40o0"  />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-30o0 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-40o0"  />
                  <span className="text-gray-30o0">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-90o0/20 to-blue-90o0/20 rounded-2xl p-8 border border-cyan-50o0/20">
              <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
              <p className="text-gray-40o0 mb-6">
                Let's discuss your IT operations automation needs. Schedule a consultation with our team today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-60o0 to-blue-60o0 rounded-xl font-semibold text-white hover:from-cyan-70o0 hover:to-blue-70o0 transition-all duration-30o0"
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
