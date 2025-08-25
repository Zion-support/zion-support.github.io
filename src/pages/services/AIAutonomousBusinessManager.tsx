import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  BookOpen,
  Headphones,
  Clock,
  DollarSign,
  TrendingUp,
  Target,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Code,
  Palette,
  Heart,
  Building,
  Briefcase,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAutonomousBusinessManager: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "AI-powered business decisions based on real-time data analysis and predictive modeling"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Automated team coordination, task assignment, and performance optimization"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive business metrics and KPI tracking with actionable insights"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlined workflows and automated business processes for maximum efficiency"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive risk identification and mitigation strategies"
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Multi-location business management with unified oversight"
    }
  ];

  const benefits = [
    "24/7 autonomous business operations",
    "Real-time performance monitoring",
    "Predictive analytics and forecasting",
    "Automated decision-making processes",
    "Cost reduction through efficiency gains",
    "Scalable business management solutions"
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Automated production planning, quality control, and supply chain management"
    },
    {
      industry: "Healthcare",
      description: "Patient care optimization, resource allocation, and compliance management"
    },
    {
      industry: "Finance",
      description: "Risk assessment, portfolio management, and regulatory compliance"
    },
    {
      industry: "Retail",
      description: "Inventory management, customer behavior analysis, and sales optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Autonomous Business Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              AI Autonomous Business Manager
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with intelligent, autonomous management systems that work 24/7 to optimize performance, reduce costs, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Intelligent Business Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Business Manager provides comprehensive tools to streamline and optimize every aspect of your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI Autonomous Business Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and growth with our autonomous business management solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Business Manager is designed to work across various industries, providing tailored solutions for specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  {useCase.industry}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous business management and experience unprecedented growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
            
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of AI-powered technology solutions and autonomous business management systems.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
                <li><Link to="/services/cybersecurity" className="hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
                <li><Link to="/services/quantum-technology" className="hover:text-cyan-400 transition-colors">Quantum Technology</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link to="/team" className="hover:text-cyan-400 transition-colors">Team</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>Middletown, DE 19709</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAutonomousBusinessManager;