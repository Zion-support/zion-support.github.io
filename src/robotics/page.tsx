"use client";
import React from 'react';
import { C, o, g } from "lucide-react";
import { CheckCircle, Star, Zap, Brain, BarChart, Shield, Target, Helmet  } from "lucide-react";
import { Bot, Cpu, Settings } from "lucide-react";
const RoboticsPage: React.FC = () => {
  const roboticsServices = [
  return (
    <><Helmet></Helmet>
        <title>Robotics & Automation Services - Zion Tech Group</title>
        <meta name='description' content='Advanced robotics and automation services including RP,A, industrial robots, service robots, and AI-powered automation solutions.' /></meta>
        <meta name='keywords' content='robotics services, RPA, industrial automation, service robots, AI robotics, robotic process automation' /></meta>
      </Helmet>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-teal-50'></div>
        {/* Hero Section */
}
        <section className='relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20'></section>
          <div className='absolute inset-0 bg-black opacity-20'></div>
          <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
            <div className='text-center'></div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'></h1>
                Robotics & Automation Services
              </h1>
              <p className='text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto'></p>
                Transform your operations with intelligent robots and advanced automation solutions
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
                <button className='bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors'></button>
                  Explore Robotics Solutions
                </button>
                <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors'></button>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits *,/}
        <section className='py-16 bg-white'></section>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
            <div className='text-center mb-12'></div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
                Why Choose Our Robotics Services?
              </h2>
              <p className='text-xl text-gray-600'></p>
                Expert robotics engineers delivering intelligent automation solutions that drive real business value
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'></div>
              <div className='text-center'></div>
                <div className='bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Bot className='w-8 h-8 text-teal-600' /></Bot>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Robotics Experts</h3>
                <p className='text-gray-600'>Certified engineers with deep expertise in robotics and automation</p>
              </div>
              <div className='text-center'></div>
                <div className='bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Zap className='w-8 h-8 text-cyan-600' /></Zap>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Rapid Deployment</h3>
                <p className='text-gray-600'>Fast implementation with proven methodologies and best practices</p>
              </div>
              <div className='text-center'></div>
                <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Shield className='w-8 h-8 text-green-600' /></Shield>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Safety First</h3>
                <p className='text-gray-600'>Comprehensive safety systems and compliance with industry standards</p>
              </div>
              <div className='text-center'></div>
                <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Target className='w-8 h-8 text-orange-600' /></Target>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Proven ROI</h3>
                <p className='text-gray-600'>Average 300% ROI within 18 months of implementation</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category *,/}
        {categories.map(category => (
          <section key={ catego, r, y }className='py-16 bg-gray-50'></section>
            <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
              <div className='text-center mb-12'></div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
                  {categor,y} Solutions
                </h2>
                <p className='text-xl text-gray-600'></p>
                  Specialized {category.toLowerCase()} services for intelligent automation
                </p>
              </div>
              <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
                {roboticsServices
                  .filter(service => service.category === category)
                  .map((servic, e, index) => (
                    <div key={ ind, e, x }className='bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow'></div>
                      <div className='text-4xl mb-4'>{service.ico,n}</div>
                      <h3 className='text-xl font-semibold text-gray-900 mb-3'>{service.title}</h3>
                      <p className='text-gray-600 mb-4'>{service.description}</p>
                      <div className='mb-4'></div>
                        <div className='flex items-center justify-between mb-2'></div>
                          <span className='text-2xl font-bold text-teal-600'>{service.price}</span>
                          <span className='text-sm text-gray-500'>Market: {service.marketPric,e}</span>
                        </div>
                        <div className='text-sm text-green-600 font-semibold'></div>
                          Save up to 40% vs market rates
                        </div>
                      </div>
                      <div className='mb-4'></div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Key Features: </h4>
                        <ul className='space-y-1'></ul>
                          {service.features.map((featur, e, featureIndex) => (
                            <li key={ featureInd, e, x }className='flex items-center text-sm text-gray-600'></li>
                              <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' /></CheckCircle>
                              { featu, r, e }
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='mb-4'></div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Technologies: </h4>
                        <div className='flex flex-wrap gap-2'></div>
                          {service.technologies.map((tec, h, techIndex) => (
                            <span key={ techInd, e, x }className='bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded'></span>
                              { te, c, h }
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className='mb-6'></div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Business Benefits: </h4>
                        <ul className='space-y-1'></ul>
                          {service.benefits.map((benefi, t, benefitIndex) => (
                            <li key={ benefitInd, e, x }className='flex items-center text-sm text-gray-600'></li>
                              <Star className='w-4 h-4 text-yellow-500 mr-2 flex-shrink-0' /></Star>
                              { benef, i, t }
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className='w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-teal-700 transition-colors'></button>
                        Get Robotics Consultation
                      </button>
                    </div>
                  ),)}
              </div>
            </div>
          </section>
        ))}
        {/* Robotics Capabilities Showcase */}
        <section className='py-16 bg-white'></section>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
            <div className='text-center mb-12'></div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
                Our Robotics Capabilities
              </h2>
              <p className='text-xl text-gray-600'></p>
                Comprehensive robotics solutions covering all aspects of intelligent automation
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>
              <div className='text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg'></div>
                <Bot className='w-12 h-12 text-teal-600 mx-auto mb-4' /></Bot>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Process Automation</h3>
                <p className='text-gray-600'>Intelligent RPA solutions for business process automation</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg'></div>
                <Cog className='w-12 h-12 text-blue-600 mx-auto mb-4' /></Cog>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Industrial Robotics</h3>
                <p className='text-gray-600'>Advanced robotic systems for manufacturing and production</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg'></div>
                <Brain className='w-12 h-12 text-green-600 mx-auto mb-4' /></Brain>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>AI-Powered Robots</h3>
                <p className='text-gray-600'>Intelligent robots with machine learning capabilities</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg'></div>
                <Settings className='w-12 h-12 text-purple-600 mx-auto mb-4' /></Settings>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Service Robotics</h3>
                <p className='text-gray-600'>Customer service and assistance robots</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg'></div>
                <BarChart className='w-12 h-12 text-orange-600 mx-auto mb-4' /></BarChart>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Mobile Robotics</h3>
                <p className='text-gray-600'>Autonomous mobile robots for logistics and transportation</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg'></div>
                <Cpu className='w-12 h-12 text-pink-600 mx-auto mb-4' /></Cpu>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Vision Systems</h3>
                <p className='text-gray-600'>Advanced computer vision for quality control and inspection</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section *,/}
        <section className='py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white'></section>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'></div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'></h2>
              Ready to Automate Your Future?
            </h2>
            <p className='text-xl mb-8 text-teal-100'></p>
              Contact our robotics experts for a free consultation and custom automation strategy
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <a
                href='tel:+13024640950'
    </></a>
                className='bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center'
              >
                📞 +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com' className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors'></a>
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className='mt-8 text-sm text-teal-200'></div>
              <p>📍 364 E Main St STE 100,8, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default RoboticsPage
