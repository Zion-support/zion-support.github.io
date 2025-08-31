import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  Globe,
  Smartphone,
  Cloud,
  BarChart3,
  Settings
} from 'lucide-react';

const IoTSolutions = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Smart Connectivity",
      description: "Seamless integration of devices across multiple protocols and networks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IoT Security",
      description: "End-to-end encryption and advanced threat protection for connected devices"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Local data processing for faster response times and reduced latency"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Real-time insights and predictive analytics from IoT sensor data"
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "Traffic management, environmental monitoring, and public safety systems",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Industrial IoT",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "Healthcare IoT",
      description: "Patient monitoring, medical device integration, and telemedicine",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Smart Buildings",
      description: "Energy management, security systems, and occupant comfort",
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  const technologies = [
    "MQTT Protocol",
    "LoRaWAN Networks",
    "5G IoT Connectivity",
    "Edge Computing Platforms",
    "IoT Security Frameworks",
    "Machine Learning Integration",
    "Cloud IoT Platforms",
    "Real-time Analytics"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Retail",
    "Transportation",
    "Energy",
    "Agriculture",
    "Smart Cities",
    "Logistics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <Wifi className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                for the Connected World
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with Zion Tech Group's comprehensive IoT solutions. 
              Connect, monitor, and optimize your operations with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT Platform Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the powerful capabilities that make our IoT platform 
              the choice for enterprise solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how IoT is revolutionizing industries and creating new 
              opportunities for growth and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our IoT platform leverages cutting-edge technologies to deliver 
              reliable, scalable, and secure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-green-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From manufacturing to healthcare, our IoT solutions are designed 
              to meet the unique challenges of every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the benefits of a comprehensive IoT platform designed 
              for enterprise success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Increased Efficiency</h3>
              <p className="text-gray-400">
                Automate processes, reduce manual work, and optimize operations 
                for maximum productivity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Scalable Architecture</h3>
              <p className="text-gray-400">
                Grow your IoT deployment seamlessly with our cloud-native 
                and edge computing solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-400">
                Protect your data and devices with industry-leading security 
                protocols and encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the IoT revolution and discover how connected devices can 
            transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTSolutions;