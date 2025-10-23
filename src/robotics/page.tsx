import React from 'react'

import { Cog } from 'lucide-react'
import { CheckCircle, Star, Zap, Brain, BarChart, Shield, Target, Helmet } from 'lucide-react'
import { Bot, Cpu, Settings } from 'lucide-react'

const RoboticsPage: React.FC = () => {
  const roboticsServices = [
import {Cog, CheckCircle, Star, Zap, Brain, BarChart, Target, Shield, Helmet} from 'lucide-react';;
constRoboticsPage: React.FC= () =>{constroboticsServices= [
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Automate repetitive business processes with intelligent software robots.',
      icon: '🤖',
      price: 'Starting at $2,50 0/month',
      features: ['Process automation', 'Data extraction', 'Workflow optimization', 'Error reduction', '2 4/7 operation'],
      benefits: ['Reduce costs by60%', 'Improve accuracy by95%', 'Free up human resources'],
      marketPrice: '$4,00 0-1 0,00 0/month',
      category: 'RPA',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate', 'Custom Bots']
   },
    {title: 'Industrial Robotics Solutions',
      description: 'Advanced robotic systems for manufacturing, assembly, and material handling.',
      icon: '🏭',
      price: 'Starting at $1 5,00 0/month',
      features: ['Assembly robots', 'Material handling', 'Quality inspection', 'Welding automation', 'Packaging systems'],
      benefits: ['Increase production by40%', 'Improve quality consistency', 'Reduce workplace injuries'],
      marketPrice: '$2 5,00 0-6 0,00 0/month',
      category: 'Industrial Robotics',
      technologies: ['ABB', 'KUKA', 'Fanuc', 'Yaskawa', 'Custom Solutions']
   },
    {title: 'Service Robotics',
      description: 'Intelligent service robots for customer interaction, cleaning, and assistance.',
      icon: '👥',
      price: 'Starting at $3,50 0/month',
      features: ['Customer service bots', 'Cleaning robots', 'Delivery systems', 'Security patrols', 'Maintenance robots'],
      benefits: ['Improve customer experience', 'Reduce operational costs', 'Enable24/7 service'],
      marketPrice: '$6,00 0-1 5,00 0/month',
      category: 'Service Robotics',
      technologies: ['ROS', 'Computer Vision', 'NLP', 'SLAM', 'AI/ML']
   },
    {title: 'Autonomous Mobile Robots (AMRs)',
      description: 'Self-navigating robots for warehouse, hospital, and facility operations.',
      icon: '🚛',
      price: 'Starting at $5,00 0/month',
      features: ['Autonomous navigation', 'Load transportation', 'Inventory management', 'Path optimization', 'Collision avoidance'],
      benefits: ['Improve logistics efficiency', 'Reduce manual labor', 'Optimize space utilization'],
      marketPrice: '$8,00 0-2 0,00 0/month',
      category: 'Mobile Robotics',
      technologies: ['SLAM', 'LiDAR', 'Computer Vision', 'Path Planning', 'Fleet Management']
   },
    {title: 'Collaborative Robots (Cobots)',
      description: 'Safe human-robot collaboration systems for shared workspaces.',
      icon: '🤝',
      price: 'Starting at $4,50 0/month',
      features: ['Human-robot collaboration', 'Safety systems', 'Force sensing', 'Easy programming', 'Flexible deployment'],
      benefits: ['Enhance human productivity', 'Improve workplace safety', 'Enable flexible manufacturing'],
      marketPrice: '$7,00 0-1 8,00 0/month',
      category: 'Collaborative Robotics',
      technologies: ['Universal Robots', 'Rethink Robotics', 'KUKA LBR', 'Safety Standards', 'Force Control']
   },
    {title: 'AI-Powered Robotics',
      description: 'Intelligent robots with machine learning capabilities for adaptive behavior.',
      icon: '🧠',
      price: 'Starting at $6,00 0/month',
      features: ['Machine learning', 'Adaptive behavior', 'Computer vision', 'Natural language processing', 'Predictive maintenance'],
      benefits: ['Improve robot intelligence', 'Enable autonomous learning', 'Reduce programming time'],
      marketPrice: '$1 0,00 0-2 5,00 0/month',
      category: 'AI Robotics',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'ROS', 'Edge Computing']
   },
    {title: 'Robotic Vision Systems',
      description: 'Advanced computer vision solutions for quality control and inspection.',
      icon: '👁️',
      price: 'Starting at $3,20 0/month',
      features: ['Quality inspection', 'Object recognition', 'Defect detection', '3 D vision', 'Real-time processing'],
      benefits: ['Improve quality control', 'Reduce inspection time', 'Eliminate human error'],
      marketPrice: '$5,00 0-1 2,00 0/month',
      category: 'Vision Systems',
      technologies: ['OpenCV', 'Halcon', 'Cognex', '3 D Cameras', 'Deep Learning']
   },
    {title: 'Robotic Integration Services',
      description: 'Complete integration of robotic systems into existing workflows and infrastructure.',
      icon: '🔧',
      price: 'Starting at $8,00 0/project',
      features: ['System integration', 'Workflow optimization', 'Safety implementation', 'Training & support', 'Maintenance'],
      benefits: ['Seamless integration', 'Minimize disruption', 'Ensure safety compliance'],
      marketPrice: '$1 5,00 0-4 0,00 0/project',
      category: 'Integration',
      technologies: ['PLC Integration', 'SCADA Systems', 'Safety Standards', 'Custom Software', 'API Development']
   },
    {title: 'Robotic Maintenance & Support',
      description: 'Comprehensive maintenance and support services for robotic systems.',
      icon: '🛠️',
      price: 'Starting at $1,50 0/month',
      features: ['Preventive maintenance', 'Remote monitoring', 'Parts replacement', 'Software updates', '2 4/7 support'],
      benefits: ['Maximize uptime', 'Reduce maintenance costs', 'Extend robot lifespan'],
      marketPrice: '$2,50 0-6,00 0/month',
      category: 'Maintenance',
      technologies: ['Predictive Analytics', 'Remote Diagnostics', 'Spare Parts', 'Software Updates', 'Technical Support']
   },
    {title: 'Robotic Consulting & Strategy',
      description: 'Strategic guidance for robotic automation ado ption and implementation.',
      icon: '💡',
      price: 'Starting at $30 0/hour',
      features: ['Automation assessment', 'ROI analysis', 'Technology selection', 'Implementation planning', 'Change management'],
      benefits: ['Make informed decisions', 'Optimize automation investments', 'Minimize implementation risks'],
      marketPrice: '$50 0-1,20 0/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'ROI Analysis', 'Technology Assessment', 'Change Management', 'Best Practices']
   },
    {title: 'Custom Robot Development',
      description: 'Bespoke robotic solutions designed for specific business requirements.',
      icon: '⚙️',
      price: 'Starting at $2 5,00 0/project',
      features: ['Custom design', 'Hardware development', 'Software programming', 'Testing & validation', 'Documentation'],
      benefits: ['Perfect fit for requirements', 'Competitive advantage', 'Optimized performance'],
      marketPrice: '$5 0,00 0-20 0,00 0/project',
      category: 'Custom Development',
      technologies: ['Mechanical Design', 'Electronics', 'Software Development', '3 D Printing', 'Prototyping']
   },
    {title: 'Robotic Training & Education',
      description: 'Comprehensive training programs for robotic systems operation and maintenance.',
      icon: '🎓',
      price: 'Starting at $2,00 0/course',
      features: ['Operator training', 'Programming courses', 'Maintenance training', 'Safety certification', 'Hands-on practice'],
      benefits: ['Build internal expertise', 'Reduce external dependencies', 'Improve system utilization'],
      marketPrice: '$3,50 0-8,00 0/course',
      category: 'Training',
      technologies: ['Simulation Software', 'Virtual Reality', 'Hands-on Labs', 'Certification Programs', 'Online Learning']
    }
  ]
  const categories = [...new Set(roboticsServices.map(service => service.category))]
  return (
    <>
      <Helmet>
        <title>Robotics & Automation Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced robotics and automation services including RPA, industrial robots, service robots, and AI-powered automation solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;robotics services, RPA, industrial automation, service robots, AI robotics, robotic process automation&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-teal-50&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20&quot;></section>
          <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
                Robotics & Automation Services
              </h1>
              <p className=&quot;text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto&quot;>
                Transform your operations with intelligent robots and advanced automation solutions
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <button className=&quot;bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors&quot;>
                  Explore Robotics Solutions
                </button>
                <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors&quot;>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Why Choose Our Robotics Services?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Expert robotics engineers delivering intelligent automation solutions that drive real business value
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Bot className=&quot;w-8 h-8 text-teal-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Robotics Experts</h3>
                <p className=&quot;text-gray-600&quot;>Certified engineers with deep expertise in robotics and automation</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Zap className=&quot;w-8 h-8 text-cyan-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Rapid Deployment</h3>
                <p className=&quot;text-gray-600&quot;>Fast implementation with proven methodologies and best practices</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Shield className=&quot;w-8 h-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Safety First</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive safety systems and compliance with industry standards</p>
              </div>
              <div className=&quot;text-center&quot;></div>
                <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <Target className=&quot;w-8 h-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Proven ROI</h3>
                <p className=&quot;text-gray-600&quot;>Average 300% ROI within 18 months of implementation</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className=&quot;py-16 bg-gray-50&quot;></section>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
              <div className=&quot;text-center mb-12&quot;></div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                  {category} Solutions
                </h2>
                <p className=&quot;text-xl text-gray-600&quot;>
                  Specialized {category.toLowerCase()} services for intelligent automation
                </p>
              </div>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
                {roboticsServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow&quot;></div>
                      <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                      <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>{service.title}</h3>
                      <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                      <div className=&quot;mb-4&quot;></div>
                        <div className=&quot;flex items-center justify-between mb-2&quot;></div>
                          <span className=&quot;text-2xl font-bold text-teal-600&quot;>{service.price}</span>
                          <span className=&quot;text-sm text-gray-500&quot;>Market: {service.marketPrice}</span>
                        </div>
                        <div className=&quot;text-sm text-green-600 font-semibold&quot;></div>
                          Save up to 40% vs market rates
                        </div>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className=&quot;mb-4&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                        <div className=&quot;flex flex-wrap gap-2&quot;></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className=&quot;bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded&quot;>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className=&quot;mb-6&quot;></div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Business Benefits:</h4>
                        <ul className=&quot;space-y-1&quot;>
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-600&quot;>
                              <Star className=&quot;w-4 h-4 text-yellow-500 mr-2 flex-shrink-0&quot; />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className=&quot;w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors&quot;>
                        Get Robotics Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
        {/* Robotics Capabilities Showcase */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-12&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Our Robotics Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                Comprehensive robotics solutions covering all aspects of intelligent automation
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg&quot;></div>
                <Bot className=&quot;w-12 h-12 text-teal-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Process Automation</h3>
                <p className=&quot;text-gray-600&quot;>Intelligent RPA solutions for business process automation</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg&quot;></div>
                <Cog className=&quot;w-12 h-12 text-blue-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Industrial Robotics</h3>
                <p className=&quot;text-gray-600&quot;>Advanced robotic systems for manufacturing and production</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg&quot;></div>
                <Brain className=&quot;w-12 h-12 text-green-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>AI-Powered Robots</h3>
                <p className=&quot;text-gray-600&quot;>Intelligent robots with machine learning capabilities</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg&quot;></div>
                <Settings className=&quot;w-12 h-12 text-purple-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Service Robotics</h3>
                <p className=&quot;text-gray-600&quot;>Customer service and assistance robots</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg&quot;></div>
                <BarChart className=&quot;w-12 h-12 text-orange-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Mobile Robotics</h3>
                <p className=&quot;text-gray-600&quot;>Autonomous mobile robots for logistics and transportation</p>
              </div>
              <div className=&quot;text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg&quot;></div>
                <Cpu className=&quot;w-12 h-12 text-pink-600 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Vision Systems</h3>
                <p className=&quot;text-gray-600&quot;>Advanced computer vision for quality control and inspection</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Automate Your Future?
            </h2>
            <p className=&quot;text-xl mb-8 text-teal-100&quot;>
              Contact our robotics experts for a free consultation and custom automation strategy
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center&quot;
              >
                📞 +1 302 464 0950
              </a>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors&quot;
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className=&quot;mt-8 text-sm text-teal-200&quot;></div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default RoboticsPage
