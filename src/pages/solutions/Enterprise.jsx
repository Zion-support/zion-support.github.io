import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Globe, Zap, Users, BarChart3, Lock } from 'lucide-react';


      {/* Core Solutions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Enterprise Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (<div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{solution.description}</p>

                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>))}
                  </ul>

                  <Link to={solution.href} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>);
        })}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Industry-Specific Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (<div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold">{industry.name}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{industry.description}</p>

                  <div className="grid grid-cols-1 gap-3">
                    {industry.solutions.map((solution, solutionIndex) => (<div key={solutionIndex} className="bg-gray-700/50 rounded-lg p-3">
                        <span className="text-gray-300">{solution}</span>
                      </div>))}
                  </div>
                </div>);
        })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
                title: 'Scalable Architecture',
                description: 'Our solutions grow with your business, from startup to enterprise.',
                icon: Building2
            },
            {
                title: 'Security First',
                description: 'Enterprise-grade security with compliance certifications.',
                icon: Shield
            },
            {
                title: '24/7 Support',
                description: 'Round-the-clock support with dedicated account managers.',
                icon: Users
            }
        ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (<div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>);
        })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Enterprise Demo
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;

export { EnterpriseSolutions, Icon, Icon, Icon };

export { EnterpriseSolutions, Icon, Icon, Icon };

export { EnterpriseSolutions, Icon, Icon, Icon };

export { EnterpriseSolutions, Icon, Icon, Icon };

export { EnterpriseSolutions, Icon, Icon, Icon };
