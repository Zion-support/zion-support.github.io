import { 
  Cpu, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  BarChart
} from 'lucide-react';

const AIAutonomousBusinessPlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Intelligent Core Engine",
      description: "Advanced AI algorithms that power autonomous decision-making and business optimization"
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Connect with existing systems and tools through our comprehensive API ecosystem"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Real-time data processing and analytics for actionable business insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2 compliance and advanced threat protection"
    }
  ];

  const capabilities = [
    {
      title: "Business Process Automation",
      description: "Automate complex workflows and business processes with AI intelligence",
      icon: Zap
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with machine learning",
      icon: Brain
    },
    {
      title: "Customer Experience Optimization",
      description: "Personalize customer interactions and improve satisfaction scores",
      icon: Users
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Intuitive interfaces and seamless integration that enhance user experience across all  a i autonomous business platform touchpoints."
    "Increase efficiency by up to 300%",
    "Reduce operational costs by 40%",
    "Improve accuracy and reduce errors",
    "24/7 autonomous operation",
    "Scalable across all business units",
    "Real-time performance monitoring"
  ];

  const pricing = {
    starter: {
      price: "$3,000/month",
      features: [
        "Core AI platform",
        "Up to 10 business processes",
        "Basic analytics dashboard",
        "Email support",
        "Monthly reports"
      ]
    },
    professional: {
      price: "$6,500/month",
      features: [
        "Advanced AI capabilities",
        "Up to 50 business processes",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Weekly optimization"
      ]
    },
    enterprise: {
      price: "$15,000/month",
      features: [
        "Full AI platform suite",
        "Unlimited processes",
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Custom development"
      ]
    }
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
               A I Autonomous Business Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your business with our cutting-edge  A I Autonomous Business Platform solution. 
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
              Our AI Autonomous Business Platform is a comprehensive solution that transforms your entire business 
              into an intelligent, self-operating system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
      {/* Platform Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrated Business Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of your business is covered with our comprehensive suite of AI-powered modules
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <p className="text-gray-300 text-sm">{module.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented growth and efficiency with our AI Autonomous Business Platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join the future of autonomous business management. Our AI platform is ready to scale your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
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
export default AIAutonomousBusinessPlatform;
