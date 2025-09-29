import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Calculator, 
  Shield, 
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  Star
} from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 0 },
    { id: 'whitepapers', name: 'Whitepapers', count: 0 },
    { id: 'guides', name: 'Guides', count: 0 },
    { id: 'tools', name: 'Tools', count: 0 },
    { id: 'webinars', name: 'Webinars', count: 0 },
    { id: 'templates', name: 'Templates', count: 0 }
  ];

  const resources = [
    {
      id: 'ai-implementation-guide',
      title: 'Complete AI Implementation Guide for Enterprise',
      description: 'Step-by-step framework for successfully implementing AI solutions in your organization, including ROI calculations and change management strategies.',
      category: 'guides',
      type: 'PDF Guide',
      downloadCount: '12,847',
      rating: 4.9,
      pages: 45,
      readTime: '25 min',
      featured: true,
      tags: ['AI Strategy', 'Implementation', 'Enterprise', 'ROI'],
      preview: 'Learn how to build a comprehensive AI strategy that delivers measurable business results...'
    },
    {
      id: 'cybersecurity-assessment-tool',
      title: 'Cybersecurity Risk Assessment Tool',
      description: 'Interactive assessment tool to evaluate your organization\'s cybersecurity posture and identify areas for improvement.',
      category: 'tools',
      type: 'Interactive Tool',
      downloadCount: '8,923',
      rating: 4.8,
      features: 'Real-time scoring',
      readTime: '15 min',
      featured: true,
      tags: ['Cybersecurity', 'Assessment', 'Risk Management', 'Security'],
      preview: 'Evaluate your cybersecurity readiness with our comprehensive assessment framework...'
    },
    {
      id: 'cloud-migration-whitepaper',
      title: 'Cloud Migration Best Practices Whitepaper',
      description: 'Comprehensive analysis of cloud migration strategies, costs, and timelines based on 100+ successful enterprise migrations.',
      category: 'whitepapers',
      type: 'Whitepaper',
      downloadCount: '15,234',
      rating: 4.9,
      pages: 32,
      readTime: '20 min',
      featured: true,
      tags: ['Cloud Migration', 'Best Practices', 'Enterprise', 'Strategy'],
      preview: 'Discover proven strategies for successful cloud migration from industry experts...'
    },
    {
      id: 'ai-roi-calculator',
      title: 'AI ROI Calculator & Business Case Builder',
      description: 'Calculate the potential ROI of AI implementations and build compelling business cases for executive approval.',
      category: 'tools',
      type: 'Calculator',
      downloadCount: '6,789',
      rating: 4.7,
      features: 'Custom scenarios',
      readTime: '10 min',
      featured: false,
      tags: ['ROI', 'Business Case', 'AI Investment', 'Calculator'],
      preview: 'Quantify the business value of AI investments with our comprehensive ROI calculator...'
    },
    {
      id: 'data-analytics-playbook',
      title: 'Data Analytics Transformation Playbook',
      description: 'Complete guide to transforming your data analytics capabilities with AI and machine learning technologies.',
      category: 'guides',
      type: 'Playbook',
      downloadCount: '9,456',
      rating: 4.8,
      pages: 38,
      readTime: '22 min',
      featured: false,
      tags: ['Data Analytics', 'AI', 'Transformation', 'Playbook'],
      preview: 'Transform your data analytics capabilities with our proven framework...'
    },
    {
      id: 'zero-trust-security-template',
      title: 'Zero Trust Security Implementation Template',
      description: 'Ready-to-use templates and checklists for implementing Zero Trust security architecture in your organization.',
      category: 'templates',
      type: 'Template Pack',
      downloadCount: '7,234',
      rating: 4.9,
      features: '10 templates',
      readTime: '5 min',
      featured: false,
      tags: ['Zero Trust', 'Security', 'Templates', 'Implementation'],
      preview: 'Implement Zero Trust security with our comprehensive template collection...'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics & Governance Framework',
      description: 'Comprehensive framework for implementing ethical AI practices and governance structures in your organization.',
      category: 'whitepapers',
      type: 'Framework',
      downloadCount: '5,678',
      rating: 4.8,
      pages: 28,
      readTime: '18 min',
      featured: false,
      tags: ['AI Ethics', 'Governance', 'Compliance', 'Framework'],
      preview: 'Build responsible AI systems with our comprehensive ethics and governance framework...'
    },
    {
      id: 'devops-automation-webinar',
      title: 'DevOps Automation Masterclass',
      description: 'Expert-led webinar covering advanced DevOps automation strategies, CI/CD optimization, and infrastructure as code.',
      category: 'webinars',
      type: 'Webinar Recording',
      downloadCount: '11,234',
      rating: 4.9,
      duration: '45 min',
      readTime: '45 min',
      featured: true,
      tags: ['DevOps', 'Automation', 'CI/CD', 'Infrastructure'],
      preview: 'Master DevOps automation with insights from industry experts and real-world case studies...'
    },
    {
      id: 'iot-security-guide',
      title: 'IoT Security Implementation Guide',
      description: 'Complete guide to securing IoT deployments, including device authentication, network segmentation, and threat monitoring.',
      category: 'guides',
      type: 'Implementation Guide',
      downloadCount: '4,567',
      rating: 4.7,
      pages: 42,
      readTime: '28 min',
      featured: false,
      tags: ['IoT Security', 'Device Security', 'Network Security', 'Implementation'],
      preview: 'Secure your IoT deployments with our comprehensive security implementation guide...'
    },
    {
      id: 'digital-transformation-checklist',
      title: 'Digital Transformation Readiness Checklist',
      description: 'Comprehensive checklist to assess your organization\'s readiness for digital transformation initiatives.',
      category: 'templates',
      type: 'Checklist',
      downloadCount: '8,901',
      rating: 4.8,
      features: '50+ items',
      readTime: '8 min',
      featured: false,
      tags: ['Digital Transformation', 'Assessment', 'Readiness', 'Checklist'],
      preview: 'Assess your organization\'s digital transformation readiness with our comprehensive checklist...'
    },
    {
      id: 'blockchain-business-applications',
      title: 'Blockchain Business Applications Report',
      description: 'In-depth analysis of real-world blockchain applications across industries, including ROI studies and implementation strategies.',
      category: 'whitepapers',
      type: 'Research Report',
      downloadCount: '6,123',
      rating: 4.6,
      pages: 35,
      readTime: '24 min',
      featured: false,
      tags: ['Blockchain', 'Business Applications', 'ROI', 'Implementation'],
      preview: 'Explore real-world blockchain applications and their business impact across industries...'
    },
    {
      id: 'ai-chatbot-design-toolkit',
      title: 'AI Chatbot Design & Development Toolkit',
      description: 'Complete toolkit for designing and developing AI chatbots, including conversation flows, testing frameworks, and deployment guides.',
      category: 'tools',
      type: 'Toolkit',
      downloadCount: '9,876',
      rating: 4.9,
      features: 'Multiple tools',
      readTime: '30 min',
      featured: true,
      tags: ['AI Chatbot', 'Design', 'Development', 'Toolkit'],
      preview: 'Build intelligent chatbots with our comprehensive design and development toolkit...'
    }
  ];

  // Calculate category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = resources.length;
    } else {
      category.count = resources.filter(r => r.category === category.id).length;
    }
  });

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(r => r.featured);

  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group | Whitepapers, Guides, Tools & More</title>
        <meta
          name="description"
          content="Access comprehensive resources including whitepapers, implementation guides, assessment tools, and templates to accelerate your AI and IT transformation."
        />
        <meta
          name="keywords"
          content="AI resources, IT guides, whitepapers, tools, templates, implementation guides, ROI calculator, cybersecurity assessment"
        />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive resources to accelerate your AI and IT transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/resources" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Free Resources • Expert Insights • Proven Frameworks
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Accelerate Your
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent">
                  Transformation
                </span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Access our comprehensive library of whitepapers, implementation guides, assessment tools, 
                and templates designed to help you succeed with AI and IT transformation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">50+</div>
                  <div className="text-sm text-zion-slate-light">Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">100K+</div>
                  <div className="text-sm text-zion-slate-light">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">4.8★</div>
                  <div className="text-sm text-zion-slate-light">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">100%</div>
                  <div className="text-sm text-zion-slate-light">Free</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
              <p className="text-lg text-gray-600">Most downloaded and highly rated resources</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredResources.slice(0, 3).map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {resource.type}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloadCount} downloads
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-zion-blue to-zion-purple text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Free
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-blue focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-zion-blue text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-600">{filteredResources.length} resources</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          resource.category === 'whitepapers' ? 'bg-purple-100 text-purple-800' :
                          resource.category === 'guides' ? 'bg-blue-100 text-blue-800' :
                          resource.category === 'tools' ? 'bg-green-100 text-green-800' :
                          resource.category === 'webinars' ? 'bg-red-100 text-red-800' :
                          resource.category === 'templates' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {resource.type}
                        </span>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{resource.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloadCount}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {resource.readTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {resource.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{resource.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <button className="w-full bg-gradient-to-r from-zion-blue to-zion-purple text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Free
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or filters</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Need Custom Resources for Your Project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our experts can create customized whitepapers, implementation guides, and assessment tools 
              tailored to your specific industry and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Request Custom Resources
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;