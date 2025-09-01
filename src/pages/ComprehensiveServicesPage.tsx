import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Palette,
  Search,
  Filter,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

const ComprehensiveServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap, count: 15 },
    { id: 'development', name: 'Development', icon: Code, count: 5 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 4 },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud, count: 3 }
  ];

  const services = [
    {
      id: 1,
      name: 'Custom Software Development',
      category: 'development',
      description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
      features: ['Full-stack development', 'Custom APIs', 'Database design', 'UI/UX optimization'],
      price: 'From $15,000',
      duration: '8-16 weeks',
      complexity: 'High',
      icon: Code,
      benefits: ['Scalable architecture', 'Future-proof technology', 'Ongoing support', 'Performance optimization'],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
      caseStudy: 'Built enterprise CRM system for 500+ users'
    },
    {
      id: 2,
      name: 'AI-Powered Analytics Platform',
      category: 'ai-ml',
      description: 'Intelligent data analysis and insights platform using cutting-edge machine learning algorithms.',
      features: ['Predictive analytics', 'Real-time insights', 'Custom ML models', 'Data visualization'],
      price: 'From $25,000',
      duration: '12-20 weeks',
      complexity: 'Very High',
      icon: Brain,
      benefits: ['Data-driven decisions', 'Automated insights', 'Scalable ML infrastructure', 'Real-time processing'],
      technologies: ['TensorFlow', 'Python', 'React', 'PostgreSQL', 'Docker'],
      caseStudy: 'Reduced analysis time by 80% for Fortune 500 company'
    },
    {
      id: 3,
      name: 'Cybersecurity Assessment & Implementation',
      category: 'cybersecurity',
      description: 'Comprehensive security evaluation and implementation of enterprise-grade protection measures.',
      features: ['Security audit', 'Penetration testing', 'Compliance frameworks', 'Incident response'],
      price: 'From $20,000',
      duration: '6-12 weeks',
      complexity: 'High',
      icon: Shield,
      benefits: ['Risk mitigation', 'Compliance assurance', '24/7 monitoring', 'Expert consultation'],
      technologies: ['SIEM tools', 'Firewall systems', 'Encryption', 'Monitoring platforms'],
      caseStudy: 'Achieved SOC 2 Type II compliance in 8 weeks'
    },
    {
      id: 4,
      name: 'Cloud Migration & Optimization',
      category: 'cloud',
      description: 'Seamless migration to cloud infrastructure with optimization for performance and cost.',
      features: ['Infrastructure planning', 'Data migration', 'Performance tuning', 'Cost optimization'],
      price: 'From $18,000',
      duration: '10-18 weeks',
      complexity: 'High',
      icon: Cloud,
      benefits: ['Reduced costs', 'Improved performance', 'Scalability', 'Disaster recovery'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
      caseStudy: 'Reduced cloud costs by 40% while improving performance'
    },
    {
      id: 5,
      name: 'Mobile App Development',
      category: 'development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Cross-platform development', 'Native performance', 'Offline capabilities', 'Push notifications'],
      price: 'From $12,000',
      duration: '6-14 weeks',
      complexity: 'Medium',
      icon: Smartphone,
      benefits: ['Wider reach', 'Better user experience', 'Offline functionality', 'App store optimization'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      caseStudy: 'Launched app with 100k+ downloads in first month'
    },
    {
      id: 6,
      name: 'Database Design & Optimization',
      category: 'development',
      description: 'Efficient database architecture design and performance optimization for large-scale applications.',
      features: ['Schema design', 'Performance tuning', 'Backup strategies', 'Monitoring setup'],
      price: 'From $8,000',
      duration: '4-8 weeks',
      complexity: 'Medium',
      icon: Database,
      benefits: ['Faster queries', 'Better scalability', 'Data integrity', 'Reduced costs'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      caseStudy: 'Improved query performance by 300% for e-commerce platform'
    },
    {
      id: 7,
      name: 'Machine Learning Model Development',
      category: 'ai-ml',
      description: 'Custom machine learning models tailored to your specific business use cases and data.',
      features: ['Data preprocessing', 'Model training', 'Validation & testing', 'Deployment'],
      price: 'From $30,000',
      duration: '16-24 weeks',
      complexity: 'Very High',
      icon: Brain,
      benefits: ['Automated processes', 'Predictive capabilities', 'Competitive advantage', 'Data insights'],
      technologies: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Python', 'MLflow'],
      caseStudy: 'Developed fraud detection system with 95% accuracy'
    },
    {
      id: 8,
      name: 'Network Security Implementation',
      category: 'cybersecurity',
      description: 'Comprehensive network security infrastructure with monitoring and threat detection.',
      features: ['Firewall configuration', 'Intrusion detection', 'VPN setup', 'Network monitoring'],
      price: 'From $15,000',
      duration: '8-12 weeks',
      complexity: 'High',
      icon: Network,
      benefits: ['Threat prevention', 'Secure remote access', 'Compliance', '24/7 monitoring'],
      technologies: ['Cisco', 'Palo Alto', 'OpenVPN', 'Wireshark', 'Snort'],
      caseStudy: 'Protected network from 1000+ daily attack attempts'
    },
    {
      id: 9,
      name: 'DevOps & CI/CD Implementation',
      category: 'development',
      description: 'Streamlined development operations with automated testing, building, and deployment pipelines.',
      features: ['Pipeline automation', 'Container orchestration', 'Monitoring setup', 'Infrastructure as code'],
      price: 'From $16,000',
      duration: '8-14 weeks',
      complexity: 'High',
      icon: Rocket,
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Scalable infrastructure'],
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
      caseStudy: 'Reduced deployment time from days to minutes'
    },
    {
      id: 10,
      name: 'Data Analytics & Business Intelligence',
      category: 'ai-ml',
      description: 'Comprehensive data analysis and business intelligence solutions for informed decision-making.',
      features: ['Data warehousing', 'ETL processes', 'Dashboard creation', 'Report automation'],
      price: 'From $22,000',
      duration: '10-16 weeks',
      complexity: 'High',
      icon: BarChart3,
      benefits: ['Data-driven insights', 'Automated reporting', 'Real-time analytics', 'Performance tracking'],
      technologies: ['Tableau', 'Power BI', 'Python', 'SQL', 'Apache Spark'],
      caseStudy: 'Created executive dashboard reducing report generation time by 90%'
    },
    {
      id: 11,
      name: 'API Development & Integration',
      category: 'development',
      description: 'Robust API development and third-party system integration for seamless data flow.',
      features: ['RESTful APIs', 'GraphQL endpoints', 'Third-party integration', 'API documentation'],
      price: 'From $10,000',
      duration: '6-12 weeks',
      complexity: 'Medium',
      icon: Globe,
      benefits: ['System integration', 'Data synchronization', 'Scalable architecture', 'Developer experience'],
      technologies: ['Node.js', 'Python', 'GraphQL', 'Swagger', 'Postman'],
      caseStudy: 'Integrated 15+ third-party systems for enterprise client'
    },
    {
      id: 12,
      name: 'Compliance & Governance Solutions',
      category: 'cybersecurity',
      description: 'Regulatory compliance and governance frameworks implementation for various industries.',
      features: ['Compliance assessment', 'Policy development', 'Training programs', 'Audit support'],
      price: 'From $18,000',
      duration: '8-16 weeks',
      complexity: 'High',
      icon: Lock,
      benefits: ['Regulatory compliance', 'Risk reduction', 'Audit readiness', 'Legal protection'],
      technologies: ['GRC platforms', 'Documentation tools', 'Training systems', 'Monitoring tools'],
      caseStudy: 'Achieved HIPAA compliance for healthcare startup in 10 weeks'
    },
    {
      id: 13,
      name: 'UI/UX Design & Optimization',
      category: 'development',
      description: 'User-centered design solutions that enhance user experience and drive engagement.',
      features: ['User research', 'Wireframing', 'Prototyping', 'Usability testing'],
      price: 'From $12,000',
      duration: '6-12 weeks',
      complexity: 'Medium',
      icon: Palette,
      benefits: ['Better user engagement', 'Reduced bounce rates', 'Increased conversions', 'Brand consistency'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'UserTesting'],
      caseStudy: 'Improved conversion rate by 35% through UX optimization'
    },
    {
      id: 14,
      name: 'Performance Optimization',
      category: 'development',
      description: 'Comprehensive performance optimization for applications, databases, and infrastructure.',
      features: ['Performance analysis', 'Bottleneck identification', 'Optimization implementation', 'Monitoring setup'],
      price: 'From $14,000',
      duration: '6-10 weeks',
      complexity: 'Medium',
      icon: Zap,
      benefits: ['Faster response times', 'Better user experience', 'Reduced costs', 'Scalability'],
      technologies: ['Profiling tools', 'Caching systems', 'CDN optimization', 'Database tuning'],
      caseStudy: 'Improved page load times by 60% for e-commerce site'
    },
    {
      id: 15,
      name: 'Strategic Technology Consulting',
      category: 'development',
      description: 'Expert technology strategy and roadmap planning for digital transformation initiatives.',
      features: ['Technology assessment', 'Roadmap planning', 'Vendor selection', 'Implementation guidance'],
      price: 'From $20,000',
      duration: '4-8 weeks',
      complexity: 'High',
      icon: Target,
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk mitigation', 'Competitive advantage'],
      technologies: ['Strategy frameworks', 'Assessment tools', 'Planning platforms', 'Analytics'],
      caseStudy: 'Saved client $2M through technology optimization strategy'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business. 
            From custom development to AI-powered analytics, we deliver excellence in every project.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(service.complexity)} bg-slate-700`}>
                      {service.complexity}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.price}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.duration}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.complexity}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded-md">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Case Study */}
                <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">Case Study</span>
                  </div>
                  <p className="text-xs text-gray-400">{service.caseStudy}</p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Excellence',
                description: '15+ years of delivering successful projects across industries'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Certified professionals with deep technical knowledge'
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven',
                description: 'Focus on measurable business outcomes and ROI'
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                description: 'Consistent on-time project completion within budget'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg">
                View Case Studies
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesPage;