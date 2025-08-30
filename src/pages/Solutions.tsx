import React, { useState } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';
import { Building, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  CheckCircle,
  ArrowRight,
  Play
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';

<<<<<<< HEAD
const Solutions: React.FC = (): JSX.Element => {;
  const [selectedIndustry, setSelectedIndustry] = useState('all');
=======
const solutionCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Chatbots & Virtual Assistants',
      'Machine Learning Models'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your digital assets with enterprise-grade security solutions',
    color: 'from-red-500 to-pink-600',
    solutions: [
      'Threat Detection & Response',
      'Identity & Access Management',
      'Security Compliance',
      'Penetration Testing',
      'Security Training',
      'Incident Response'
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Scale your infrastructure with flexible and cost-effective cloud solutions',
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Container Orchestration',
      'Serverless Computing',
      'Multi-cloud Strategy',
      'Cloud Security'
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: TrendingUp,
    description: 'Turn your data into actionable insights for better decision making',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      'Business Intelligence',
      'Data Warehousing',
      'Real-time Analytics',
      'Predictive Modeling',
      'Data Visualization',
      'Big Data Processing'
    ]
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: Zap,
    description: 'Connect devices and process data closer to the source for real-time insights',
    color: 'from-yellow-500 to-orange-600',
    solutions: [
      'IoT Device Management',
      'Edge Computing Platforms',
      'Sensor Networks',
      'Real-time Monitoring',
      'Predictive Maintenance',
      'Smart City Solutions'
    ]
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: Globe,
    description: 'Modernize your business processes and customer experience',
    color: 'from-indigo-500 to-purple-600',
    solutions: [
      'Process Automation',
      'Customer Experience',
      'Legacy Modernization',;
      'Digital Strategy',;
      'Change Management',;
      'Technology Consulting';
    ];
  };
];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

const industrySolutions = [
  {
    industry: 'Healthcare',
    icon: Heart,
    solutions: [
      'Electronic Health Records',
      'Telemedicine Platforms',
      'Medical Imaging AI',
      'Patient Data Analytics',
      'Healthcare Security',
      'Regulatory Compliance'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {
    industry: 'Finance',
    icon: DollarSign,
    solutions: [
      'Fintech Applications',
      'Risk Management',
      'Fraud Detection',
      'Regulatory Compliance',
      'Digital Banking',
      'Blockchain Solutions'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    industry: 'Manufacturing',
    icon: Cpu,
    solutions: [
      'Smart Manufacturing',
      'Predictive Maintenance',
      'Quality Control',
      'Supply Chain Optimization',
      'Industrial IoT',
      'Automation Systems'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    industry: 'Retail',
    icon: ShoppingCart,
    solutions: [
      'E-commerce Platforms',
      'Customer Analytics',
      'Inventory Management',
      'Omnichannel Solutions',
      'Personalization',
      'Supply Chain Management'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    industry: 'Education',
    icon: BookOpen,
    solutions: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Student Analytics',
      'Content Management',
      'Assessment Tools',
      'Collaboration Platforms'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    industry: 'Government',
    icon: Shield,
    solutions: [
      'Digital Services',
      'Data Security',
      'Process Automation',
      'Citizen Engagement',;
      'Regulatory Compliance',;
      'Infrastructure Management';
    ],;
    color: 'from-gray-500 to-slate-600';
  };
];

<<<<<<< HEAD
  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics',
      industry: 'healthcare',
      description: 'Transform patient care with predictive analytics and intelligent diagnosis support.',
      features[
        'Predictive disease modeling',
        'Medical image analysis',
        'Patient risk assessment',
        'Drug discovery optimization'
      ],
      benefits[
        'Improved diagnostic accuracy',
        'Reduced healthcare costs',
        'Enhanced patient outcomes',
        'Streamlined clinical workflows'
      ],
      icon: Brain,
      demo: true,
      trial: true
    },
    {
      id: 2,
      title: 'Cybersecurity for Financial Services',
      industry: 'finance',
      description: 'Protect financial institutions with advanced threat detection and compliance solutions.',
      features[
        'Real-time threat monitoring',
        'Compliance automation',
        'Fraud detection systems',
        'Secure transaction processing'
      ],
      benefits[
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced fraud losses',
        'Customer trust protection'
      ],
      icon: Shield,
      demo: true,
      trial: false
    },
    {
      id: 3,
      title: 'Smart Manufacturing Platform',
      industry: 'manufacturing',
      description: 'Optimize production with IoT sensors, predictive maintenance, and quality control.',
      features[
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency monitoring'
      ],
      benefits[
        'Reduced downtime',
        'Improved product quality',
        'Lower operational costs',
        'Increased productivity'
      ],
      icon: Building,
      demo: true,
      trial: true
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      industry: 'retail',
      description: 'Boost sales with AI-driven product recommendations and customer insights.',
      features[
        'Personalized recommendations',
        'Customer behavior analysis',
        'Dynamic pricing optimization',
        'Inventory management'
      ],
      benefits[
        'Increased conversion rates',
        'Higher customer retention',
        'Optimized pricing strategies',
        'Better inventory control'
      ],
      icon: Users,
      demo: true,
      trial: true
    },
    {
      id: 5,
      title: 'Cloud-Native Development Platform',
      industry: 'technology',
      description: 'Accelerate software development with cloud-native tools and DevOps automation.',
      features[
        'Container orchestration',
        'CI/CD pipelines',
        'Microservices architecture',
        'Auto-scaling infrastructure'
      ],
      benefits[
        'Faster time to market',
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced reliability'
      ],
      icon: Cloud,
      demo: true,
      trial: true
    },
    {
      id: 6,
      title: 'Data Intelligence Platform',
      industry: 'technology',
      description: 'Unlock insights from your data with advanced analytics and machine learning.',
      features[
        'Data warehousing',
        'Real-time analytics',
        'Machine learning models',
        'Business intelligence dashboards'
      ],
      benefits[
        'Data-driven decisions',
        'Improved operational efficiency',
        'Competitive advantage',
        'Cost optimization'
      ],
      icon: Database,
      demo: true,
      trial: false
    };
  ];

  const filteredSolutions = selectedIndustry === 'all' ;
    ? solutions: solutions.filter(solution  => solution.industry === selectedIndustry);

  return (
    <>
      <SEO 
        title = "Technology Solutions | Zion Tech Group"
        description="Industry-specific technology solutions designed to transform your business operations and drive innovation across healthcare, finance, manufacturing, and more."
        keywords="technology solutions, industry solutions, healthcare analytics, cybersecurity, smart manufacturing, e-commerce, cloud development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Technology
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Industry-specific technology solutions designed to transform your business operations, 
                drive innovation, and deliver measurable results across all sectors.
              </p>
            </motion.div>
          </div>
        </section>
=======
const featuredSolutions = [
  {
    id: 1,
    name: 'AI-Powered Business Intelligence',
    category: 'AI & ML',
    description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
    features: [
      'Real-time data processing',
      'Predictive analytics models',
      'Custom dashboard creation',
      'Automated reporting',
      'Natural language queries',
      'Mobile-responsive design'
    ],
    benefits: [
      '30% faster decision making',
      'Reduced manual reporting',
      'Improved data accuracy',
      'Enhanced user experience'
    ],
    price: 'Starting at $2,500/month',
    implementation: '4-8 weeks',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    name: 'Zero-Trust Security Framework',
    category: 'Cybersecurity',
    description: 'Implement a comprehensive security framework that continuously verifies every user, device, and connection to protect your organization from modern threats.',
    features: [
      'Identity verification',
      'Device authentication',
      'Network segmentation',
      'Threat detection',
      'Compliance monitoring',
      'Incident response'
    ],
    benefits: [
      '99.9% threat detection rate',
      'Reduced security incidents',
      'Compliance achievement',
      'Lower insurance costs'
    ],
    price: 'Starting at $3,200/month',
    implementation: '6-12 weeks',
    icon: Shield,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 3,
    name: 'Cloud-Native Infrastructure',
    category: 'Cloud Computing',
    description: 'Build scalable, resilient, and cost-effective infrastructure using modern cloud-native technologies and best practices.',
    features: [
      'Auto-scaling infrastructure',
      'Container orchestration',
      'CI/CD pipelines',
      'Monitoring & alerting',
      'Disaster recovery',
      'Cost optimization'
    ],
    benefits: [
      '50% infrastructure cost reduction',
      '99.9% uptime guarantee',
      'Faster deployment cycles',
      'Improved scalability'
    ],;
    price: 'Starting at $1,800/month',;
    implementation: '8-16 weeks',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600';
  };
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...solutionCategories.map(cat => cat.name)];
  const industries = ['All', ...industrySolutions.map(ind => ind.industry)];

  const filteredSolutions = featuredSolutions.filter(solution => {;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">
              <Rocket className="w-5 h-5" />
              <span className="font-medium">Technology Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Discover comprehensive technology solutions designed to transform your business operations, 
              enhance security, and drive growth through cutting-edge innovation.
            </p>
          </motion.div>
        </div>
      </section>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

        {/* Industry Filter */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    selectedIndustry === industry.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <industry.icon className="w-5 h-5 mr-2" />
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index)  => (
                <motion.div
                  key={solution.id}
                  initial = {
  { opacity: 0,
  y: 20 
}}
                  whileInView = {
  { opacity: 1,
  y: 0 
}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
=======
      {/* Solution Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>;
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {solutionCategories.map((category, index) => {;
              const IconComponent = category.icon;
              return (
                <motion.div
                  key = {category.id}
                  initial = {
  { opacity: 0,
  y: 20 





}}
                  whileInView = {
  { opacity: 1,
  y: 0 





}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Link to={`/solutions#${category.id}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                      <p className="text-zion-slate-light mb-4">{category.description}</p>
                      <div className="space-y-2">
                        {category.solutions.slice(0, 4).map((solution, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>;
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />;
                      </div>;
                    </div>;
                  </Link>;
                </motion.div>;
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className = "py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>;
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {industrySolutions.map((industry, index) => {;
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key = {industry.industry}
                  initial = {
  { opacity: 0,
  y: 20 





}}
                  whileInView = {
  { opacity: 1,
  y: 0 





}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                  <div className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/solutions/${industry.industry.toLowerCase()}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >;
                      View {industry.industry} Solutions;
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </div>;
                </motion.div>;
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className = "py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>;
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredSolutions.map((solution, index) => {;
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key = {solution.id}
                  initial = {
  { opacity: 0,
  y: 20 





}}
                  whileInView = {
  { opacity: 1,
  y: 0 





}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex space-x-2">
                      {solution.demo && (
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300">
                          <Play className="w-4 h-4 mr-1 inline" />
                          Demo
                        </button>
                      )}
                      {solution.trial && (
                        <button className="px-4 py-2 border border-blue-600 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                          Start Trial
                        </button>
                      )}
                    </div>
                    <Link
                      to={`/solutions/${solution.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
<<<<<<< HEAD
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 30 
}}
              whileInView = {
  { opacity: 1,
  y: 0 
}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our technology solutions drive your digital transformation and unlock new possibilities 
                for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
  )};

export default Solutions;
=======
                      Learn More;
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </div>;
                </motion.div>;
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className = "py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Let's discuss how our technology solutions can address your specific challenges 
              and drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-zion-cyan transition-all duration-300 font-medium text-lg"
              >
                View Case Studies
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
