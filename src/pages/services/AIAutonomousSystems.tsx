import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Code,
  Lock,
  Cloud,
  Microchip,
  Settings,
  Monitor,
  AlertTriangle,
  RefreshCw,
  Eye,
  Heart,
  Star
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const AIAutonomousSystems: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Self-Learning Capabilities",
      description: "Advanced machine learning algorithms that continuously improve performance based on data patterns and user interactions."
    },
    {
      icon: Bot,
      title: "Autonomous Decision Making",
      description: "AI systems that can make complex decisions independently while maintaining human oversight and control."
    },
    {
      icon: RefreshCw,
      title: "Continuous Optimization",
      description: "Real-time performance monitoring and automatic system optimization for maximum efficiency."
    },
    {
      icon: Shield,
      title: "Built-in Security",
      description: "Enterprise-grade security protocols integrated into every autonomous system component."
    }
  ];

  const useCases = [
    {
      title: "Business Process Automation",
      description: "Streamline operations with AI systems that handle repetitive tasks and complex workflows.",
      icon: Settings,
      benefits: ["24/7 Operation", "Error Reduction", "Cost Savings", "Scalability"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and identify opportunities with autonomous data analysis systems.",
      icon: BarChart3,
      benefits: ["Real-time Insights", "Pattern Recognition", "Risk Assessment", "Strategic Planning"]
    },
    {
      title: "Customer Service",
      description: "Intelligent chatbots and support systems that provide personalized assistance.",
      icon: Users,
      benefits: ["Instant Response", "Personalization", "Multi-language Support", "Learning from Interactions"]
    },
    {
      title: "Supply Chain Management",
      description: "Optimize logistics and inventory with autonomous systems that adapt to market changes.",
      icon: Network,
      benefits: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Cost Optimization"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate complex processes and reduce manual intervention by up to 80%"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Lower operational costs through automation and optimized resource allocation"
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Continuous operation without breaks, holidays, or human limitations"
    },
    {
      icon: Target,
      title: "Improved Accuracy",
      description: "Reduce human errors and improve decision-making accuracy by leveraging data"
    }
  ];

  const technologies = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Robotic Process Automation",
    "Edge Computing",
    "IoT Integration",
    "Blockchain Security",
    "Quantum Computing Ready"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead 
        title="AI Autonomous Systems - Zion Tech Group"
        description="Transform your business with self-managing AI systems that operate independently. Our autonomous AI solutions drive efficiency, reduce costs, and enable 24/7 operations."
        keywords="AI autonomous systems, self-managing AI, autonomous decision making, business automation, AI optimization"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              AI Autonomous Systems
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Self-Managing AI Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Deploy intelligent systems that operate independently, learn continuously, and optimize your business operations 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous AI systems are built with cutting-edge technology to deliver exceptional performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous AI systems are transforming industries and revolutionizing business operations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Autonomous AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of deploying self-managing AI systems in your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technologies that ensure reliability, security, and performance
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Microchip className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Deploy Autonomous AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Transform your business operations with self-managing AI systems that work around the clock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSystems;