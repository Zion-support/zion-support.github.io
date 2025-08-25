import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart
} from 'lucide-react';

const AIAutonomousVehiclesPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent  A I Autonomous Vehicles Platform",
      description: "AI-powered  a i autonomous vehicles platform system that leverages advanced machine learning algorithms for optimal performance."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced forecasting models that predict trends and optimize  a i autonomous vehicles platform operations with 95%+ accuracy."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance frameworks to protect your  a i autonomous vehicles platform operations."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast processing capabilities that handle  a i autonomous vehicles platform tasks in real-time with minimal latency."
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Comprehensive dashboards and analytics that provide real-time insights into  a i autonomous vehicles platform performance."
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive interfaces and seamless integration that enhance user experience across all  a i autonomous vehicles platform touchpoints."
    }
  ];

  const benefits = [
    "Increase efficiency by up to 300%",
    "Reduce operational costs by 40%",
    "Improve accuracy and reduce errors",
    "24/7 autonomous operation",
    "Scalable across all business units",
    "Real-time optimization and adaptation"
  ];

  const useCases = [
    {
      title: "Enterprise Solutions",
      description: "Large-scale  a i autonomous vehicles platform implementations for Fortune 500 companies and enterprise organizations."
    },
    {
      title: "SME Applications",
      description: "Tailored  a i autonomous vehicles platform solutions for small and medium enterprises looking to scale efficiently."
    },
    {
      title: "Startup Innovation",
      description: "Cutting-edge  a i autonomous vehicles platform technology for startups and innovative companies disrupting traditional industries."
    },
    {
      title: "Government & Public Sector",
      description: "Secure and compliant  a i autonomous vehicles platform solutions for government agencies and public sector organizations."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      features: [
        "Basic  A I Autonomous Vehicles Platform features",
        "Up to 3 business processes",
        "Standard analytics dashboard",
        "Email support",
        "Basic training"
      ]
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      features: [
        "Advanced  A I Autonomous Vehicles Platform capabilities",
        "Up to 15 business processes",
        "Custom analytics dashboard",
        "Priority support",
        "Full training & onboarding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Full  A I Autonomous Vehicles Platform system",
        "Unlimited business processes",
        "Custom integrations",
        "Dedicated support team",
        "White-label solution",
        "Custom AI model training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
               A I Autonomous Vehicles Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your business with our cutting-edge  A I Autonomous Vehicles Platform solution. 
              Leverage the power of artificial intelligence to automate, optimize, and transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

const AIAutonomousVehiclesPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20 opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              A I Autonomous Vehicles Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage the power of artificial intelligence with our advanced a i autonomous vehicles platform platform. Automate, optimize, and innovate like never before.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Get Started Today
            </Link>
            <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300">
              Watch Demo
            </button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our  A I Autonomous Vehicles Platform combines cutting-edge artificial intelligence with 
              advanced business logic to create the most intelligent solution in the market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented growth and efficiency with our AI-powered  A I Autonomous Vehicles Platform solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform delivers cutting-edge capabilities to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Built with cutting-edge technology to deliver exceptional performance and reliability.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Grow your operations seamlessly with our scalable and flexible platform.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Get 24/7 support from our team of experts to ensure your success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security and compliance built into every solution.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly integrate with your existing systems and workflows.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Stay ahead with regular updates and new features.
              </p>
            </div>
            
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our  A I Autonomous Vehicles Platform is designed to work across all industries, 
              providing tailored solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-cyan-500/50 bg-gradient-to-br from-gray-800/80 to-cyan-900/20' : 'border-gray-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400' : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20'}`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our solutions are revolutionizing various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-300">
                    Transform large-scale operations with enterprise-grade capabilities and support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Small Business</h3>
                  <p className="text-gray-300">
                    Level the playing field with affordable, powerful solutions designed for growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Startups</h3>
                  <p className="text-gray-300">
                    Accelerate your growth with innovative solutions that scale with your business.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="space-y-8">
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Government</h3>
                  <p className="text-gray-300">
                    Meet strict compliance requirements while delivering exceptional citizen services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-gray-300">
                    Improve patient outcomes with secure, compliant, and innovative solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300">
                    Enhance learning experiences with cutting-edge technology and tools.
                  </p>
                </div>
              </div>
              
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI to automate and optimize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
              Contact Us
            </Link>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our cutting-edge AI solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousVehiclesPlatform;
