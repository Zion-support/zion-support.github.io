import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ;
  Brain,
  Shield,
  Cloud,
  Cpu,
  Network,
  Database,
  Users,
  Globe,
  Zap,
  Target,
  Rocket,
  Star,
  ArrowRight,
  Search,
  Filter,
  CheckCircle,
  TrendingUp,
  Lock,
  Code,
  FileText,
  Video,
  Mic,
  Monitor,
  Smartphone,
  Server,
  Building,
  Leaf,
  Award,
  BarChart3,
  Eye,
  Activity,
  MessageCircle,
  Phone,
  Mail,
  MapPin;
} from 'lucide-react';
import { motion } from 'framer-motion';
const ServicesOverview: React.FC = () => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const serviceCategories = [;
    {;
      id: 'all',
      name: 'All Services',
      icon: Star,
      count: 0;
},
    {;
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      count: 0;
},
    {;
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      count: 0;
},
    {;
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      count: 0;
},
    {;
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Network,
      count: 0;
},
    {;
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Cpu,
      count: 0;
},
    {;
      id: 'iot-edge',
      name: 'IoT & Edge Computing',
      icon: Smartphone,
      count: 0;
},
    {;
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: BarChart3,
      count: 0;
},
    {;
      id: 'specialized',
      name: 'Specialized Solutions',
      icon: Target,
      count: 0;
}
  ];
  const allServices = [;
    // AI & Machine Learning;
    {;
      id: 'ai-autonomous-business-intelligence',
      name: 'AI Autonomous Business Intelligence',
      description: 'Transform your business with AI-powered autonomous intelligence that continuously analyzes, predicts, and optimizes operations.',
      category: 'ai-ml',
      icon: Brain,
      price: 'From $299/month',
      features: ['Autonomous Data Analysis', 'Predictive Analytics', 'Real-time Processing', 'Enterprise Security'],
      href: '/services/ai-autonomous-business-intelligence',
      popular: true,
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Automation'];
},
    {;
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity powered by artificial intelligence with autonomous threat detection and response.',
      category: 'cybersecurity',
      icon: Shield,
      price: 'From $499/month',
      features: ['AI Threat Detection', 'Zero-Day Prevention', 'Automated Response', 'Multi-Layer Security'],
      href: '/services/ai-cybersecurity-platform',
      popular: true,
      tags: ['AI', 'Cybersecurity', 'Threat Detection', 'Security'];
},
    {;
      id: 'ai-threat-intelligence',
      name: 'AI Threat Intelligence Platform',
      description: 'Advanced threat intelligence powered by AI for proactive cybersecurity defense.',
      category: 'cybersecurity',
      icon: Eye,
      price: 'From $399/month',
      features: ['Real-time Monitoring', 'Predictive Analysis', 'Global Intelligence', 'Automated Alerts'],
      href: '/services/ai-threat-intelligence',
      popular: false,
      tags: ['AI', 'Threat Intelligence', 'Cybersecurity', 'Monitoring'];
},
    {;
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation that learns and adapts to optimize business processes.',
      category: 'ai-ml',
      icon: Zap,
      price: 'From $199/month',
      features: ['Process Automation', 'Intelligent Routing', 'Performance Analytics', 'Custom Workflows'],
      href: '/services/ai-workflow-automation',
      popular: false,
      tags: ['AI', 'Automation', 'Workflow', 'Process Optimization'];
},
    {;
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio',
      description: 'AI-powered content creation platform for marketing, social media, and business communications.',
      category: 'ai-ml',
      icon: FileText,
      price: 'From $149/month',
      features: ['Content Generation', 'Multi-format Support', 'Brand Consistency', 'Performance Analytics'],
      href: '/services/ai-content-creation',
      popular: false,
      tags: ['AI', 'Content Creation', 'Marketing', 'Automation'];
},
    {;
      id: 'ai-legal-tech',
      name: 'AI Legal Tech Platform',
      description: 'Comprehensive legal technology solutions powered by artificial intelligence.',
      category: 'specialized',
      icon: Building,
      price: 'From $599/month',
      features: ['Document Analysis', 'Legal Research', 'Compliance Monitoring', 'Contract Management'],
      href: '/services/ai-legal-tech',
      popular: false,
      tags: ['AI', 'Legal Tech', 'Compliance', 'Documentation'];
},
    {;
      id: 'ai-healthcare',
      name: 'AI Healthcare Platform',
      description: 'AI-powered healthcare solutions for diagnosis, treatment planning, and patient care.',
      category: 'specialized',
      icon: Monitor,
      price: 'From $799/month',
      features: ['Diagnostic Support', 'Treatment Planning', 'Patient Monitoring', 'Data Analytics'],
      href: '/services/ai-healthcare',
      popular: false,
      tags: ['AI', 'Healthcare', 'Diagnostics', 'Patient Care'];
},
    {;
      id: 'ai-financial-advisor',
      name: 'AI Personal Finance Advisor',
      description: 'Intelligent financial planning and investment advice powered by AI.',
      category: 'specialized',
      icon: TrendingUp,
      price: 'From $99/month',
      features: ['Financial Planning', 'Investment Advice', 'Risk Assessment', 'Portfolio Management'],
      href: '/services/ai-financial-advisor',
      popular: false,
      tags: ['AI', 'Finance', 'Investment', 'Planning'];
},
    {;
      id: 'blockchain-supply-chain',
      name: 'Blockchain Supply Chain Platform',
      description: 'Transparent and secure supply chain management powered by blockchain technology.',
      category: 'blockchain',
      icon: Network,
      price: 'From $399/month',
      features: ['Supply Chain Tracking', 'Smart Contracts', 'Transparency', 'Security'],
      href: '/services/blockchain-supply-chain',
      popular: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Security'];
},
    {;
      id: 'quantum-computing',
      name: 'Quantum Computing as a Service',
      description: 'Access to quantum computing resources for complex computational problems.',
      category: 'quantum',
      icon: Cpu,
      price: 'From $999/month',
      features: ['Quantum Processing', 'Algorithm Optimization', 'Research Support', 'Expert Consultation'],
      href: '/services/quantum-computing',
      popular: false,
      tags: ['Quantum Computing', 'Research', 'Optimization', 'Advanced Computing'];
},
    {;
      id: 'iot-edge-computing',
      name: 'IoT Edge Computing Platform',
      description: 'Edge computing solutions for IoT devices with real-time processing capabilities.',
      category: 'iot-edge',
      icon: Smartphone,
      price: 'From $299/month',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Device Management'],
      href: '/services/iot-edge-computing',
      popular: false,
      tags: ['IoT', 'Edge Computing', 'Real-time', 'Device Management'];
},
    {;
      id: 'cloud-devops',
      name: 'Cloud Infrastructure & DevOps',
      description: 'Comprehensive cloud infrastructure and DevOps automation services.',
      category: 'cloud-devops',
      icon: Cloud,
      price: 'From $199/month',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure Management', 'Monitoring'],
      href: '/services/cloud-devops',
      popular: false,
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Automation'];
},
    {;
      id: 'data-analytics',
      name: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics and business intelligence solutions for data-driven decisions.',
      category: 'data-analytics',
      icon: BarChart3,
      price: 'From $249/month',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      href: '/services/data-analytics',
      popular: false,
      tags: ['Data Analytics', 'Business Intelligence', 'Visualization', 'Reporting'];
},
    {;
      id: 'sustainability-analytics',
      name: 'AI Sustainability Analytics Platform',
      description: 'AI-powered sustainability analytics for environmental impact assessment and optimization.',
      category: 'specialized',
      icon: Leaf,
      price: 'From $349/month',
      features: ['Environmental Impact', 'Sustainability Metrics', 'Optimization', 'Reporting'],
      href: '/services/ai-sustainability-analytics',
      popular: false,
      tags: ['AI', 'Sustainability', 'Environmental', 'Analytics'];
},
    {;
      id: 'digital-transformation',
      name: 'Digital Transformation Services',
      description: 'End-to-end digital transformation consulting and implementation services.',
      category: 'specialized',
      icon: Rocket,
      price: 'From $1,999/month',
      features: ['Strategy Development', 'Technology Implementation', 'Change Management', 'Training'],
      href: '/services/digital-transformation',
      popular: false,
      tags: ['Digital Transformation', 'Consulting', 'Implementation', 'Strategy'];
}
  ];
  // Calculate category counts;
  serviceCategories.forEach(category => {;
    category.count = allServices.filter(service => ;
      category.id === 'all' || service.category === category.id;
    ).length;
});
  // Filter services based on search and category;
  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
});
  const contactInfo = {;
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
};
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 text-white py-20">;
        <div className="absolute inset-0 bg-black opacity-20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Innovative Technology Services;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-cyan-100">;
              Discover our comprehensive suite of AI-powered, cutting-edge technology services ;
              designed to transform your business and drive innovation.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
                Get Started;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="/pricing";
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                />;
              </div>;
            </div>;
            <div className="flex flex-wrap gap-2">;
              {serviceCategories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${;
                    selectedCategory === category.id;
                      ? 'bg-cyan-500 text-white';
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
}`}
                >;
                  <category.icon className="w-4 h-4" />;
                  <span>{category.name}</span>;
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">;
                    {category.count}
                  </span>;
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Services Grid */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              {filteredServices.length} Services Available;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              {searchTerm || selectedCategory !== 'all' ;
                ? `Showing results for "${searchTerm || serviceCategories.find(c => c.id === selectedCategory)?.name}"`;
                : 'Explore our comprehensive range of innovative technology services';
}
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredServices.map((service, index) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${;
                  service.popular ;
                    ? 'border-cyan-500 shadow-cyan-100' ;
                    : 'border-gray-200 hover:border-cyan-300';
}`}
              >;
                {service.popular && (;
                  <div className="absolute -top-3 left-6">;
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">;
                      Popular;
                    </span>;
                  </div>;
                )}

                <div className="mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">;
                    <service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>;
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>;
                  <div className="text-2xl font-bold text-cyan-600 mb-4">{service.price}</div>;
                </div>;
                <div className="mb-6">;
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>;
                  <ul className="space-y-2">;
                    {service.features.slice(0, 3).map((feature, idx) => (;
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />;
                        <span>{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
                <div className="mb-6">;
                  <div className="flex flex-wrap gap-2">;
                    {service.tags.slice(0, 3).map((tag, idx) => (;
                      <span;
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                </div>;
                <Link;
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors text-center inline-block">;
                  Learn More;
                </Link>;
              </motion.div>;
            ))}
          </div>;
          {filteredServices.length === 0 && (;
            <div className="text-center py-12">;
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">;
                <Search className="w-12 h-12 text-gray-400" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;
              <p className="text-gray-600 mb-6">;
                Try adjusting your search terms or category filter to find what you're looking for.;
              </p>;
              <button;
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedCategory('all');
}}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">;
                Clear Filters;
              </button>;
            </div>;
          )}
        </div>;
      </section>;

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Contact our team to learn more about our services and how we can help ;
              transform your business with innovative technology solutions.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
            <div>;
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">;
                Get in Touch;
              </h3>;
              <div className="space-y-6">;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Phone className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Phone</h4>;
                    <a href={`tel:${contactInfo.phone}`} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.phone}
                    </a>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Mail className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Email</h4>;
                    <a href={`mailto:${contactInfo.email}`} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.email}
                    </a>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <MapPin className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Address</h4>;
                    <p className="text-gray-600">{contactInfo.address}</p>;
                  </div>;
                </div>;
              </div>;
            </div>;
            <div className="bg-white p-8 rounded-xl shadow-lg">;
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">;
                Request Information;
              </h3>;
              <form className="space-y-4">;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Company Name;
                  </label>;
                  <input;
                    type="text";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Enter your company name";
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Email Address;
                  </label>;
                  <input;
                    type="email";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Enter your email";
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Services of Interest;
                  </label>;
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">;
                    <option>Select services...</option>;
                    <option>AI & Machine Learning</option>;
                    <option>Cybersecurity</option>;
                    <option>Cloud & DevOps</option>;
                    <option>Blockchain Solutions</option>;
                    <option>Quantum Computing</option>;
                    <option>IoT & Edge Computing</option>;
                    <option>Data Analytics</option>;
                    <option>Specialized Solutions</option>;
                  </select>;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Message;
                  </label>;
                  <textarea;
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Tell us about your needs and how we can help"></textarea>;
                </div>;
                <button;
                  type="submit";
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors">;
                  Send Request;
                </button>;
              </form>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Transform Your Business Today;
          </h2>;
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">;
            Join thousands of businesses already leveraging our innovative technology ;
            services to drive growth, improve efficiency, and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
              Get Started Now;
              <ArrowRight className="ml-2 w-5 h-5" />;
            </Link>;
            <Link;
              to="/pricing";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">;
              View Pricing;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export default ServicesOverview;