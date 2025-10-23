import React from 'react';

import { Cog } from 'lucide-react';
const RoboticsPage: React.FC = () => {
  const roboticsServices = [
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Automate repetitive business processes with intelligent software robots.',
      icon: '🤖',
      price: 'Starting at $2,500/month',
      features: ['Process automation', 'Data extraction', 'Workflow optimization', 'Error reduction', '24/7 operation'],
      benefits: ['Reduce costs by 60%', 'Improve accuracy by 95%', 'Free up human resources'],
      marketPrice: '$4,000-10,000/month',
      category: 'RPA',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate', 'Custom Bots']
    },
    {
      title: 'Industrial Robotics Solutions',
      description: 'Advanced robotic systems for manufacturing, assembly, and material handling.',
      icon: '🏭',
      price: 'Starting at $15,000/month',
      features: ['Assembly robots', 'Material handling', 'Quality inspection', 'Welding automation', 'Packaging systems'],
      benefits: ['Increase production by 40%', 'Improve quality consistency', 'Reduce workplace injuries'],
      marketPrice: '$25,000-60,000/month',
      category: 'Industrial Robotics',
      technologies: ['ABB', 'KUKA', 'Fanuc', 'Yaskawa', 'Custom Solutions']
    },
    {
      title: 'Service Robotics',
      description: 'Intelligent service robots for customer interaction, cleaning, and assistance.',
      icon: '👥',
      price: 'Starting at $3,500/month',
      features: ['Customer service bots', 'Cleaning robots', 'Delivery systems', 'Security patrols', 'Maintenance robots'],
      benefits: ['Improve customer experience', 'Reduce operational costs', 'Enable 24/7 service'],
      marketPrice: '$6,000-15,000/month',
      category: 'Service Robotics',
      technologies: ['ROS', 'Computer Vision', 'NLP', 'SLAM', 'AI/ML']
    },
    {
      title: 'Autonomous Mobile Robots (AMRs)',
      description: 'Self-navigating robots for warehouse, hospital, and facility operations.',
      icon: '🚛',
      price: 'Starting at $5,000/month',
      features: ['Autonomous navigation', 'Load transportation', 'Inventory management', 'Path optimization', 'Collision avoidance'],
      benefits: ['Improve logistics efficiency', 'Reduce manual labor', 'Optimize space utilization'],
      marketPrice: '$8,000-20,000/month',
      category: 'Mobile Robotics',
      technologies: ['SLAM', 'LiDAR', 'Computer Vision', 'Path Planning', 'Fleet Management']
    },
    {
      title: 'Collaborative Robots (Cobots)',
      description: 'Safe human-robot collaboration systems for shared workspaces.',
      icon: '🤝',
      price: 'Starting at $4,500/month',
      features: ['Human-robot collaboration', 'Safety systems', 'Force sensing', 'Easy programming', 'Flexible deployment'],
      benefits: ['Enhance human productivity', 'Improve workplace safety', 'Enable flexible manufacturing'],
      marketPrice: '$7,000-18,000/month',
      category: 'Collaborative Robotics',
      technologies: ['Universal Robots', 'Rethink Robotics', 'KUKA LBR', 'Safety Standards', 'Force Control']
    },
    {
      title: 'AI-Powered Robotics',
      description: 'Intelligent robots with machine learning capabilities for adaptive behavior.',
      icon: '🧠',
      price: 'Starting at $6,000/month',
      features: ['Machine learning', 'Adaptive behavior', 'Computer vision', 'Natural language processing', 'Predictive maintenance'],
      benefits: ['Improve robot intelligence', 'Enable autonomous learning', 'Reduce programming time'],
      marketPrice: '$10,000-25,000/month',
      category: 'AI Robotics',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'ROS', 'Edge Computing']
    },
    {
      title: 'Robotic Vision Systems',
      description: 'Advanced computer vision solutions for quality control and inspection.',
      icon: '👁️',
      price: 'Starting at $3,200/month',
      features: ['Quality inspection', 'Object recognition', 'Defect detection', '3D vision', 'Real-time processing'],
      benefits: ['Improve quality control', 'Reduce inspection time', 'Eliminate human error'],
      marketPrice: '$5,000-12,000/month',
      category: 'Vision Systems',
      technologies: ['OpenCV', 'Halcon', 'Cognex', '3D Cameras', 'Deep Learning']
    },
    {
      title: 'Robotic Integration Services',
      description: 'Complete integration of robotic systems into existing workflows and infrastructure.',
      icon: '🔧',
      price: 'Starting at $8,000/project',
      features: ['System integration', 'Workflow optimization', 'Safety implementation', 'Training & support', 'Maintenance'],
      benefits: ['Seamless integration', 'Minimize disruption', 'Ensure safety compliance'],
      marketPrice: '$15,000-40,000/project',
      category: 'Integration',
      technologies: ['PLC Integration', 'SCADA Systems', 'Safety Standards', 'Custom Software', 'API Development']
    },
    {
      title: 'Robotic Maintenance & Support',
      description: 'Comprehensive maintenance and support services for robotic systems.',
      icon: '🛠️',
      price: 'Starting at $1,500/month',
      features: ['Preventive maintenance', 'Remote monitoring', 'Parts replacement', 'Software updates', '24/7 support'],
      benefits: ['Maximize uptime', 'Reduce maintenance costs', 'Extend robot lifespan'],
      marketPrice: '$2,500-6,000/month',
      category: 'Maintenance',
      technologies: ['Predictive Analytics', 'Remote Diagnostics', 'Spare Parts', 'Software Updates', 'Technical Support']
    },
    {
      title: 'Robotic Consulting & Strategy',
      description: 'Strategic guidance for robotic automation adoption and implementation.',
      icon: '💡',
      price: 'Starting at $300/hour',
      features: ['Automation assessment', 'ROI analysis', 'Technology selection', 'Implementation planning', 'Change management'],
      benefits: ['Make informed decisions', 'Optimize automation investments', 'Minimize implementation risks'],
      marketPrice: '$500-1,200/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'ROI Analysis', 'Technology Assessment', 'Change Management', 'Best Practices']
    },
    {
      title: 'Custom Robot Development',
      description: 'Bespoke robotic solutions designed for specific business requirements.',
      icon: '⚙️',
      price: 'Starting at $25,000/project',
      features: ['Custom design', 'Hardware development', 'Software programming', 'Testing & validation', 'Documentation'],
      benefits: ['Perfect fit for requirements', 'Competitive advantage', 'Optimized performance'],
      marketPrice: '$50,000-200,000/project',
      category: 'Custom Development',
      technologies: ['Mechanical Design', 'Electronics', 'Software Development', '3D Printing', 'Prototyping']
    },
    {
      title: 'Robotic Training & Education',
      description: 'Comprehensive training programs for robotic systems operation and maintenance.',
      icon: '🎓',
      price: 'Starting at $2,000/course',
      features: ['Operator training', 'Programming courses', 'Maintenance training', 'Safety certification', 'Hands-on practice'],
      benefits: ['Build internal expertise', 'Reduce external dependencies', 'Improve system utilization'],
      marketPrice: '$3,500-8,000/course',
      category: 'Training',
      technologies: ['Simulation Software', 'Virtual Reality', 'Hands-on Labs', 'Certification Programs', 'Online Learning']
    }
  ];
  const categories = [...new Set(roboticsServices.map(service => service.category))];
  return (
    <>
      <Helmet><>
</Helmet>
<title>Robotics & Automation Services - Zion Tech Group</title><>
<//title>
<meta name="description" content="Advanced robotics and automation services including RPA, industrial robots, service robots, and AI-powered automation solutions." /><>
</meta name="description" content="Advanced robotics and automation services including RPA, industrial robots, service robots, and AI-powered automation solutions." />
<meta name="keywords" content="robotics services, RPA, industrial automation, service robots, AI robotics, robotic process automation" /><>
</meta name="keywords" content="robotics services, RPA, industrial automation, service robots, AI robotics, robotic process automation" />
</Helmet><>
<//Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50"></div><//div>
        {/* Hero Section */}</div><>
<//div>
<section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20"><>
</section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20">
<div className="absolute inset-0 bg-black opacity-20"></div><>
<//div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold mb-6"></h1><//h1>
                Robotics & Automation Services</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto"></p><//p>
                Transform your operations with intelligent robots and advanced automation solutions</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"></button><//button>
                  Explore Robotics Solutions</button><>
<//button>
</button><>
<//button>
<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"></button><//button>
                  Schedule Demo</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Key Benefits */}
        <section className="py-16 bg-white"><>
</section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h1><//h1>
                Why Choose Our Robotics Services?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-600"></p><//p>
                Expert robotics engineers delivering intelligent automation solutions that drive real business value</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<Bot className="w-8 h-8 text-teal-600" /><>
</Bot className="w-8 h-8 text-teal-600" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Robotics Experts</h3><>
<//h3>
<p className="text-gray-600">Certified engineers with deep expertise in robotics and automation</p><>
<//p>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<Zap className="w-8 h-8 text-cyan-600" /><>
</Zap className="w-8 h-8 text-cyan-600" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3><>
<//h3>
<p className="text-gray-600">Fast implementation with proven methodologies and best practices</p><>
<//p>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<Shield className="w-8 h-8 text-green-600" /><>
</Shield className="w-8 h-8 text-green-600" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3><>
<//h3>
<p className="text-gray-600">Comprehensive safety systems and compliance with industry standards</p><>
<//p>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<Target className="w-8 h-8 text-orange-600" /><>
</Target className="w-8 h-8 text-orange-600" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3><>
<//h3>
<p className="text-gray-600">Average 300% ROI within 18 months of implementation</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50"><>
</section key={category} className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h1><//h1>
                  {category} Solutions</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-600"></p><//p>
                  Specialized {category.toLowerCase()} services for intelligent automation</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roboticsServices
                  .filter(service => service.category === category)</div><//div>
                  .map((service, index) => (</div><>
<//div>
<div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div><>
<//div>
<div className="text-4xl mb-4">{service.icon}</div><>
<//div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3><>
<//h3>
<p className="text-gray-600 mb-4">{service.description}</p><>
<//p>
<div className="mb-4"></div><>
<//div>
<div className="flex items-center justify-between mb-2"></div><>
<//div>
<span className="text-2xl font-bold text-teal-600">{service.price}</span><>
<//span>
<span className="text-sm text-gray-500">Market: {service.marketPrice}</span><>
<//span>
</div><>
<//div>
<div className="text-sm text-green-600 font-semibold"></div><//div>
                          Save up to 40% vs market rates</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="mb-4"></div><>
<//div>
<h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4><>
<//h4>
<ul className="space-y-1"></ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600"><>
</li key={featureIndex} className="flex items-center text-sm text-gray-600">
<CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li><//li>
                          ))}
                        </ul><>
<//ul>
</div><>
<//div>
<div className="mb-4"></div><>
<//div>
<h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4><>
<//h4>
<div className="flex flex-wrap gap-2"></div><//div>
                          {service.technologies.map((tech, techIndex) => (</div><>
<//div>
<span key={techIndex} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded"></span key={techIndex} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span><//span>
                          ))}
                        </div><>
<//div>
</div><>
<//div>
<div className="mb-6"></div><>
<//div>
<h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4><>
<//h4>
<ul className="space-y-1"></ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600"><>
</li key={benefitIndex} className="flex items-center text-sm text-gray-600">
<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" /></Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li><//li>
                          ))}
                        </ul><>
<//ul>
</div><>
<//div>
<button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"></button><//button>
                        Get Robotics Consultation</button><>
<//button>
</button><>
<//button>
</div><//div>
                  ))}
              </div><>
<//div>
</div><>
<//div>
</section><//section>
        ))}
        {/* Robotics Capabilities Showcase */}
        <section className="py-16 bg-white"><>
</section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h1><//h1>
                Our Robotics Capabilities</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-600"></p><//p>
                Comprehensive robotics solutions covering all aspects of intelligent automation</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><>
<//div>
<div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg"></div><>
<//div>
<Bot className="w-12 h-12 text-teal-600 mx-auto mb-4" /><>
</Bot className="w-12 h-12 text-teal-600 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">Process Automation</h3><>
<//h3>
<p className="text-gray-600">Intelligent RPA solutions for business process automation</p><>
<//p>
</div><>
<//div>
<div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"></div><>
<//div>
<Cog className="w-12 h-12 text-blue-600 mx-auto mb-4" /><>
</Cog className="w-12 h-12 text-blue-600 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Robotics</h3><>
<//h3>
<p className="text-gray-600">Advanced robotic systems for manufacturing and production</p><>
<//p>
</div><>
<//div>
<div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div><>
<//div>
<Brain className="w-12 h-12 text-green-600 mx-auto mb-4" /><>
</Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Robots</h3><>
<//h3>
<p className="text-gray-600">Intelligent robots with machine learning capabilities</p><>
<//p>
</div><>
<//div>
<div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div><>
<//div>
<Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" /><>
</Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">Service Robotics</h3><>
<//h3>
<p className="text-gray-600">Customer service and assistance robots</p><>
<//p>
</div><>
<//div>
<div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div><>
<//div>
<BarChart className="w-12 h-12 text-orange-600 mx-auto mb-4" /><>
</BarChart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Robotics</h3><>
<//h3>
<p className="text-gray-600">Autonomous mobile robots for logistics and transportation</p><>
<//p>
</div><>
<//div>
<div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div><>
<//div>
<Cpu className="w-12 h-12 text-pink-600 mx-auto mb-4" /><>
</Cpu className="w-12 h-12 text-pink-600 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-gray-900 mb-2">Vision Systems</h3><>
<//h3>
<p className="text-gray-600">Advanced computer vision for quality control and inspection</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white"><>
</section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold mb-4"></h1><//h1>
              Ready to Automate Your Future?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl mb-8 text-teal-100"></p><//p>
              Contact our robotics experts for a free consultation and custom automation strategy</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a 
                href="tel:+13024640950"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center"
              ></a 
                href="tel:+13024640950"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a><>
<//a>
<a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              ></a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a><>
<//a>
</div><>
<//div>
<div className="mt-8 text-sm text-teal-200"></div><>
<//div>
<p>📍 364 E Main St STE 1008, Middletown DE 19709</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
</><//>
  );
};
export default RoboticsPage;