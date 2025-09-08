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

export default function AIAutonomousVehiclePlatform() {
  const features = [
    'Advanced computer vision and sensor fusion',
    'Real-time decision making and path planning',
    'Predictive maintenance and fleet optimization',
    'Multi-vehicle coordination and traffic management',
    'Safety-first autonomous driving algorithms',
    'Cloud-based vehicle monitoring and control'
  ];

  const tiers = [
    {
      name: 'Developer',
      price: '$2,499/mo',
      description: 'Perfect for autonomous vehicle development teams',
      details: [
        'Up to 5 vehicle simulations',
        'Basic autonomous driving algorithms',
        'Standard support (8/5)',
        'API access and documentation',
        'Community forum access',
        'Basic safety testing tools'
      ]
    },
    {
      name: 'Business',
      price: '$5,999/mo',
      description: 'Ideal for fleet operators and transportation companies',
      details: [
        'Up to 25 vehicle management',
        'Advanced autonomous algorithms',
        'Priority support (12/7)',
        'Custom route optimization',
        'Dedicated account manager',
        'Fleet analytics dashboard',
        'Safety compliance monitoring'
      ]
    },
    {
      name: 'Enterprise',
      price: '$15,999/mo',
      description: 'Full-scale autonomous vehicle platform',
      details: [
        'Unlimited vehicle management',
        'Custom autonomous algorithms',
        '24/7 dedicated support',
        'On-premise deployment options',
        'Custom integrations and APIs',
        'White-label solutions available',
        'Regulatory compliance tools'
      ]
    }
  ];

  const useCases = [
    'Ride-sharing and taxi services',
    'Logistics and delivery fleets',
    'Public transportation systems',
    'Mining and construction vehicles',
    'Agricultural machinery automation',
    'Emergency response vehicles'
  ];

  const benefits = [
    'Reduce transportation costs by 40-60% through automation',
    'Improve safety by eliminating human error factors',
    'Increase fleet efficiency and utilization rates',
    'Enable 24/7 operation without driver fatigue',
    'Reduce carbon emissions through optimized routing'
  ];

  const industries = [
    'Transportation and Logistics',
    'Automotive Manufacturing',
    'Ride-sharing Services',
    'Public Transit',
    'Construction and Mining',
    'Agriculture and Farming'
  ];

  return (
  {/* Empty JSX fragment */}
      <SEO 
        title="AI Autonomous Vehicle Platform | Zion Tech Group"
        description="Revolutionary AI-powered autonomous vehicle platform for safe, efficient, and intelligent transportation. Advanced computer vision, sensor fusion, and fleet management."
        keywords="AI autonomous vehicles, self-driving cars, autonomous fleet management, computer vision, sensor fusion, transportation automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full">
                <Car className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Autonomous Vehicle Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize transportation with our cutting-edge autonomous vehicle platform. 
              Advanced AI algorithms ensure safety, efficiency, and intelligent fleet management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our  A I Autonomous Vehicle Platform combines cutting-edge artificial intelligence with 
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
                  <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
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
              Experience unprecedented growth and efficiency with our AI-powered  A I Autonomous Vehicle Platform solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our  A I Autonomous Vehicle Platform is designed to work across all industries, 
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
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://ziontechgroup.com/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                  >
                    Get Started
                  </a>
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
