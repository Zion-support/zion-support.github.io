import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const StartupSolutionsPage: React.FC = () => {
  const startupSolutions = [
    {
      title: "MVP Development",
      description: "Rapid development of minimum viable products to validate your ideas and get to market quickly.",
      icon: "🚀",
      features: ["Rapid Prototyping", "Agile Development", "User Testing", "Iterative Improvement"],
    },
    {
      title: "Scalable Architecture",
      description: "Build your startup on a foundation that can scale from prototype to enterprise without major rewrites.",
      icon: "📈",
      features: ["Microservices Architecture", "Cloud-Native Design", "Auto-scaling", "Performance Optimization"],
    },
    {
      title: "AI Integration",
      description: "Leverage artificial intelligence to differentiate your product and create competitive advantages.",
      icon: "🤖",
      features: ["AI-Powered Features", "Machine Learning Models", "Natural Language Processing", "Predictive Analytics"],
    },
    {
      title: "Growth Analytics",
      description: "Data-driven insights to understand user behavior, optimize conversion, and drive sustainable growth.",
      icon: "📊",
      features: ["User Analytics", "Conversion Tracking", "A/B Testing", "Growth Metrics"],
    },
    {
      title: "Technical Co-founder Services",
      description: "Get the technical expertise you need without hiring a full-time CTO through our co-founder services.",
      icon: "👨‍💻",
      features: ["Technical Strategy", "Architecture Planning", "Team Building", "Technology Decisions"],
    },
    {
      title: "Funding Support",
      description: "Technical documentation and demos to support your fundraising efforts and investor presentations.",
      icon: "💰",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Startup Solutions - Zion Tech Group</title>
        <meta name="description" content="Agile technology solutions for startups including MVP development, scalable architecture, AI integration, and growth analytics." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Solutions</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Agile solutions to help startups scale quickly and efficiently from idea to market leader.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupSolutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-orange-600 font-semibold hover:text-orange-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Startup Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Solutions designed specifically for startup needs and constraints
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Speed to Market</h3>
                <p className="text-gray-600">
                  Rapid development and deployment to get your product to market faster than competitors.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
                <p className="text-gray-600">
                  Cutting-edge technologies and approaches to help you build innovative and differentiated products.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Startup-Friendly Pricing</h3>
                <p className="text-gray-600">
                  Flexible pricing models designed for startup budgets and growth stages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Journey */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Startup Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We support you at every stage of your startup's growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ideation</h3>
                <p className="text-gray-600">Validate your idea and create a technical roadmap</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">MVP Development</h3>
                <p className="text-gray-600">Build and launch your minimum viable product</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600">Scale your product and optimize for growth</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scale</h3>
                <p className="text-gray-600">Build enterprise-grade solutions for scale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Startup Success Metrics</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results from startups using our solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">90% Success Rate</h3>
                <p className="text-gray-600 text-sm">
                  Startups that successfully raise funding after using our technical co-founder services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">50% Faster Launch</h3>
                <p className="text-gray-600 text-sm">
                  Average reduction in time-to-market for startups using our MVP development services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">300% Growth</h3>
                <p className="text-gray-600 text-sm">
                  Average user growth rate for startups implementing our growth analytics solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Startup?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Let's discuss how our startup solutions can help you build, launch, and scale your innovative product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupSolutionsPage;