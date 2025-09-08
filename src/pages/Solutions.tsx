import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Shield, Cloud, TrendingUp, Zap, Globe, Cpu, Network, Code, Rocket, Heart, ShoppingCart, CheckCircle, ArrowRight, Star, Clock, DollarSign, Search, Filter } from 'lucide-react';

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
      'IoT Smartphone Management',
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
      'Legacy Modernization',
      'Digital Strategy',
      'Change Management',
      'Technology Consulting'
    ]
  }
];

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
// Fixed missing name:     icon: BookOpen,
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
      'Citizen Engagement',
      'Regulatory Compliance',
      'Infrastructure Management'
    ],
    color: 'from-gray-500 to-slate-600'
  }
];

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
      'Smartphone authentication',
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
    ],
    price: 'Starting at $1,800/month',
    implementation: '8-16 weeks',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600'
  }
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...solutionCategories.map(cat => cat.name)];
  const industries = ['All', ...industrySolutions.map(ind => ind.industry)];

  const filteredSolutions = featuredSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <React.Fragment>
      <SEO 
        title="Technology Solutions | Zion Tech Group"
        description="Industry-specific technology solutions designed to transform your business operations and drive innovation across healthcare, finance, manufacturing, and more."
        keywords="technology solutions, industry solutions, healthcare analytics, cybersecurity, smart manufacturing, e-commerce, cloud development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Discover comprehensive technology solutions designed to transform your business operations, 
              enhance security, and drive growth through cutting-edge innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  )};

export default Solutions;