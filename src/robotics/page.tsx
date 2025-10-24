"use client";
import React from 'react';

import { Cog } from 'lucide-react'
import { CheckCircle, Star, Zap, Brain, BarChart, Shield, Target, Helmet } from 'lucide-react'
import { Bot, Cpu, Settings } from 'lucide-react'

const RoboticsPage: React.FC = () => {
  const roboticsServices = [
  return (
    <>
      <Helmet>
        <title>Robotics & Automation Services - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics and automation services including RPA, industrial robots, service robots, and AI-powered automation solutions." />
        <meta name="keywords" content="robotics services, RPA, industrial automation, service robots, AI robotics, robotic process automation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50"></div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20"></section>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Robotics & Automation Services</h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto">
                Transform your operations with intelligent robots and advanced automation solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                  Explore Robotics Solutions</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                  Schedule Demo</button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Robotics Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert robotics engineers delivering intelligent automation solutions that drive real business value</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Bot className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Robotics Experts</h3>
                <p className="text-gray-600">Certified engineers with deep expertise in robotics and automation</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Fast implementation with proven methodologies and best practices</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600">Comprehensive safety systems and compliance with industry standards</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 18 months of implementation</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50"></section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions</h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services for intelligent automation</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {roboticsServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold"></div>
                          Save up to 40% vs market rates
                        </div>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2"></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                        Get Robotics Consultation</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* Robotics Capabilities Showcase */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Robotics Capabilities</h2>
              <p className="text-xl text-gray-600">
                Comprehensive robotics solutions covering all aspects of intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg"></div>
                <Bot className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Automation</h3>
                <p className="text-gray-600">Intelligent RPA solutions for business process automation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"></div>
                <Cog className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Robotics</h3>
                <p className="text-gray-600">Advanced robotic systems for manufacturing and production</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Robots</h3>
                <p className="text-gray-600">Intelligent robots with machine learning capabilities</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Robotics</h3>
                <p className="text-gray-600">Customer service and assistance robots</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <BarChart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Robotics</h3>
                <p className="text-gray-600">Autonomous mobile robots for logistics and transportation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div>
                <Cpu className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision Systems</h3>
                <p className="text-gray-600">Advanced computer vision for quality control and inspection</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Future?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Contact our robotics experts for a free consultation and custom automation strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950</a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-8 text-sm text-teal-200"></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}
export default RoboticsPage;
   }
  ];
  constcategories= [...new Set(roboticsServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>Robotics & Automation Services - ZionTechGroup</titl><metaname="description"content="Advanced robotics and automation services including RPA, industrial robots, service robots, and AI-powered automationsolutions." /><metaname="keywords"content="robotics services, RPA, industrial automation, service robots, AI robotics, robotic processautomation" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-teal-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-teal-600to-cyan-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Robotics & Automation Services</h><spanclassName="text-xlmd:text-2 xl mb-8 text-teal-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-teal-100max-w-3xlmx-auto">Transform your operations with intelligent robots and advanced automation solutions</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-teal-600px-8 py-3 rounded-lg font-semiboldhover:bg-teal-50transition-colors"></className="bg-white text-teal-600px-8 py-3 rounded-lg font-semiboldhover:bg-teal-50transition-colors">Explore Robotics Solutions</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-teal-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-teal-600transition-colors">Schedule Demo</butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Robotics Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Expert robotics engineers delivering intelligent automation solutions that drive real business value</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-teal-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><BotclassName="w-8 h-8text-teal-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RoboticsExperts</h><pclassName="text-gray-600">Certified engineers with deep expertise in roboticsandautomation</p></di><divclassName="text-center"><divclassName="bg-cyan-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-cyan-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RapidDeployment</h><pclassName="text-gray-600">Fast implementation with proven methodo logies andbestpractices</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">SafetyFirst</h><pclassName="text-gray-600">Comprehensive safety systems and compliance withindustrystandards</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ProvenROI</h><pclassName="text-gray-600">Average300% ROI within 18monthsofimplementation</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Solutions</h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} services for intelligent automation</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{roboticsServices;
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-teal-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to40% vs market rates</di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-teal-100text-teal-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-teal-100text-teal-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-teal-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-teal-700transition-colors"></spa></className="w-full bg-teal-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-teal-700transition-colors">Get Robotics Consultation</butto></di>))}
            </di></di></sectio>))}
        {/* Robotics CapabilitiesShowcase */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Robotics Capabilities</h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive robotics solutions covering all aspects of intelligent automation</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-teal-50to-cyan-100rounded-lg"><BotclassName="w-12h-1 2text-teal-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">ProcessAutomation</h><pclassName="text-gray-600">Intelligent RPA solutions for businessprocessautomation</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-indigo-100rounded-lg"><CogclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">IndustrialRobotics</h><pclassName="text-gray-600">Advanced robotic systems for manufacturingandproduction</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><BrainclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">AI-PoweredRobots</h><pclassName="text-gray-600">Intelligent robots with machinelearningcapabilities</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-violet-100rounded-lg"><SettingsclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">ServiceRobotics</h><pclassName="text-gray-600">Customer service andassistancerobots</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><BarChartclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">MobileRobotics</h><pclassName="text-gray-600">Autonomous mobile robots for logisticsandtransportation</p></di><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><CpuclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">VisionSystems</h><pclassName="text-gray-600">Advanced computer vision for quality controlandinspection</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-teal-600to-cyan-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Automate Your Future?
          </h><spanclassName="text-xl mb-8text-teal-100"></spa></className="text-xl mb-8text-teal-100">Contact our robotics experts for a free consultation and custom automation strategy</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-teal-600px-8 py-3 rounded-lg font-semiboldhover:bg-teal-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-teal-600transition-colors"
              >✉️ kleber@ziontechgroup.com</a></di><divclassName="mt-8 text-smtext-teal-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default RoboticsPage;
