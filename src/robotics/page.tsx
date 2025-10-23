import React from 'react';

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
  ];
  constcategories= [...new Set(roboticsServices.map(service=> service.category))];
  return (
  <><Helme t><titl e>Robotics & Automation Services - ZionTechGroup</titl><metaname="description"content="Advanced robotics and automation services including RPA, industrial robots, service robots, and AI-powered automationsolutions." /><metaname="keywords"content="robotics services, RPA, industrial automation, service robots, AI robotics, robotic processautomation" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-teal-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-teal-600to-cyan-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Robotics & Automation Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-teal-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-teal-100max-w-3xlmx-auto">Transform your operations with intelligent robots and advanced automation solutions
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-teal-600px-8 py-3 rounded-lg font-semiboldhover:bg-teal-50transition-colors"></className="bg-white text-teal-600px-8 py-3 rounded-lg font-semiboldhover:bg-teal-50transition-colors">Explore Robotics Solutions
              </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-teal-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-teal-600transition-colors">Schedule Demo
              </butto></di></di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our Robotics Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Expert robotics engineers delivering intelligent automation solutions that drive real business value
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-teal-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><BotclassName="w-8 h-8text-teal-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RoboticsExperts</h><pclassName="text-gray-600">Certified engineers with deep expertise in roboticsandautomation</p></di><divclassName="text-center"><divclassName="bg-cyan-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-cyan-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">RapidDeployment</h><pclassName="text-gray-600">Fast implementation with proven methodo logies andbestpractices</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">SafetyFirst</h><pclassName="text-gray-600">Comprehensive safety systems and compliance withindustrystandards</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><TargetclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ProvenROI</h><pclassName="text-gray-600">Average300% ROI within 18monthsofimplementation</p></di></di></di></sectio>{/* Services byCategory */}
        {categories.map(category=> (
       <sectionkey={category}className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">{category} Solutions
              </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Specialized {category.toLowerCase()} services for intelligent automation
              </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{roboticsServices
                  .filter(service=> service.category=== category)
                  .map((serviceindex) => (
                 <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xltransition-shadow"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-teal-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to40% vs market rates
                      </di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                         <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                          </l>))}
                      </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                          <key={techIndex}className="bg-teal-100text-teal-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-teal-100text-teal-800text-xs px-2py-1rounded">{tech}
                          </spa>))}
                      </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                         <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                          </l>))}
                      </u></di><spanclassName="w-full bg-teal-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-teal-700transition-colors"></spa></className="w-full bg-teal-600text-white py-2 px-4 rounded-lg font-semiboldhover:bg-teal-700transition-colors">Get Robotics Consultation
                    </butto></di>))}
            </di></di></sectio>))}
        {/* Robotics CapabilitiesShowcase */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Robotics Capabilities
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Comprehensive robotics solutions covering all aspects of intelligent automation
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-center p-6 bg-gradient-to-br from-teal-50to-cyan-100rounded-lg"><BotclassName="w-12h-1 2text-teal-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">ProcessAutomation</h><pclassName="text-gray-600">Intelligent RPA solutions for businessprocessautomation</p></di><divclassName="text-center p-6 bg-gradient-to-br from-blue-50to-indigo-100rounded-lg"><CogclassName="w-12h-1 2text-blue-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">IndustrialRobotics</h><pclassName="text-gray-600">Advanced robotic systems for manufacturingandproduction</p></di><divclassName="text-center p-6 bg-gradient-to-br from-green-50to-emerald-100rounded-lg"><BrainclassName="w-12h-1 2text-green-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">AI-PoweredRobots</h><pclassName="text-gray-600">Intelligent robots with machinelearningcapabilities</p></di><divclassName="text-center p-6 bg-gradient-to-br from-purple-50to-violet-100rounded-lg"><SettingsclassName="w-12h-1 2text-purple-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">ServiceRobotics</h><pclassName="text-gray-600">Customer service andassistancerobots</p></di><divclassName="text-center p-6 bg-gradient-to-br from-orange-50to-amber-100rounded-lg"><BarChartclassName="w-12h-1 2text-orange-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">MobileRobotics</h><pclassName="text-gray-600">Autonomous mobile robots for logisticsandtransportation</p></di><divclassName="text-center p-6 bg-gradient-to-br from-pink-50to-rose-100rounded-lg"><CpuclassName="w-12h-1 2text-pink-600mx-automb-4" /><h3className="text-xl font-semibold text-gray-900mb-2">VisionSystems</h><pclassName="text-gray-600">Advanced computer vision for quality controlandinspection</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-teal-600to-cyan-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Automate Your Future?
          </h><spanclassName="text-xl mb-8text-teal-100"></spa></className="text-xl mb-8text-teal-100">Contact our robotics experts for a free consultation and custom automation strategy
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="bg-white text-teal-600px-8 py-3 rounded-lg font-semiboldhover:bg-teal-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-teal-600transition-colors"
              >✉️ kleber@ziontechgroup.com
            </a></di><divclassName="mt-8 text-smtext-teal-200"><p>📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></di></>
  );
};
export default RoboticsPage;