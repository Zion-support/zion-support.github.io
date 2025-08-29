import { Car, Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, CheckCircle, Star} from 'lucide-react';
import { SEO } from '../../components/SEO';

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
    <>
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
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Autonomous Vehicle Features
              </h2>
              <p className="text-xl text-gray-300">
                Experience the future of transportation with our AI-enhanced autonomous platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous Vehicle Platform Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the perfect plan for your autonomous vehicle journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1 ? 'border-blue-400/50 scale-105' : 'border-white/10'
                } hover:border-blue-400/50 transition-all duration-300`}>
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Transportation with Autonomous Vehicles
              </h2>
              <p className="text-xl text-gray-300">
                Discover how autonomous vehicles can revolutionize your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Autonomous Platform?
              </h2>
              <p className="text-xl text-gray-300">
                Unlock unprecedented transportation efficiency and safety
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300">
                Autonomous vehicle solutions for every sector
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Autonomous?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI-powered autonomous vehicle platform can transform your transportation business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-gray-300">Mobile: +1 302 464 0950</p>
                <p className="text-gray-300">Email: kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Our Site</h3>
                <p className="text-gray-300">https://ziontechgroup.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-300">Middletown DE 19709</p>
              </div>
            </div>
            <a 
              href="https://ziontechgroup.com/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}