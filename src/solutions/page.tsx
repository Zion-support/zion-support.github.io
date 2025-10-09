'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SolutionsPage: React.FC = () =>{
  const [activeTab, setActiveTab] = useState('ai')
        return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Our Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Comprehensive technology solutions designed to transform your business operations
              and drive innovation across every aspect of your organization.
            </p>
          </div>
          {/* Solution Categories Tabs */}
          <div>
            <div>
              {solutionCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
            <div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {solutionCategories.find(cat => cat.id === activeTab)?.description}
              </p>
            </div>
          </div>
          {/* Solutions Grid */}
          <div>
            <div>
              {solutions[activeTab as keyof typeof solutions].map((solution, index) => (
                <div>
                  <div>
                    <div>
                      <solution.icon className={`w-6 h-6 ${solution.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div>
                      {solution.pricing}
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                    >Learn More<ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Benefits Section */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Solutions?
            </h2>
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Get a free consultation and discover how our solutions can revolutionize your operations
              and drive unprecedented growth.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />Get Free Consultation</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default SolutionsPage