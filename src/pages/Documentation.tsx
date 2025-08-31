import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  Download, 
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Users,
  Clock,
  Tag
} from 'lucide-react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45, icon: BookOpen },
    { id: 'api', name: 'API Reference', count: 18, icon: Code },
    { id: 'guides', name: 'Getting Started', count: 12, icon: Play },
    { id: 'sdks', name: 'SDKs & Libraries', count: 8, icon: Download },
    { id: 'examples', name: 'Code Examples', count: 7, icon: FileText }
  ];

  const featuredDocs = [
    {
      id: 1,
      title: 'Quick Start Guide',
      description: 'Get up and running with Zion Tech Group services in under 10 minutes.',
      category: 'guides',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-12-15',
      featured: true,
      tags: ['Quick Start', 'Setup', 'Tutorial'],
      icon: '🚀'
    },
    {
      id: 2,
      title: 'AI Services API Reference',
      description: 'Complete API documentation for all AI and machine learning services.',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-12-14',
      featured: true,
      tags: ['API', 'AI', 'Machine Learning', 'Reference'],
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Authentication & Security',
      description: 'Learn how to securely authenticate and authorize your applications.',
      category: 'guides',
      difficulty: 'Intermediate',
      readTime: '20 min',
      lastUpdated: '2024-12-13',
      featured: true,
      tags: ['Security', 'Authentication', 'OAuth', 'JWT'],
      icon: '🔐'
    }
  ];

  const documentationSections = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Quick Start Guide', href: '#', description: 'Begin your journey in 10 minutes', difficulty: 'Beginner' },
        { name: 'Installation Guide', href: '#', description: 'Set up your development environment', difficulty: 'Beginner' },
        { name: 'First Project', href: '#', description: 'Build your first application', difficulty: 'Beginner' },
        { name: 'Configuration', href: '#', description: 'Configure services and settings', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI & Machine Learning', href: '#', description: 'AI services and ML models', difficulty: 'Intermediate' },
        { name: 'Cloud Infrastructure', href: '#', description: 'Cloud deployment and management', difficulty: 'Intermediate' },
        { name: 'Cybersecurity', href: '#', description: 'Security and compliance features', difficulty: 'Advanced' },
        { name: 'Data Analytics', href: '#', description: 'Data processing and insights', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'API Reference',
      items: [
        { name: 'REST API', href: '#', description: 'Complete REST API documentation', difficulty: 'Intermediate' },
        { name: 'GraphQL API', href: '#', description: 'GraphQL schema and queries', difficulty: 'Advanced' },
        { name: 'Webhooks', href: '#', description: 'Real-time event notifications', difficulty: 'Intermediate' },
        { name: 'Rate Limits', href: '#', description: 'API usage and limitations', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      items: [
        { name: 'JavaScript/Node.js', href: '#', description: 'Official Node.js SDK', difficulty: 'Intermediate' },
        { name: 'Python', href: '#', description: 'Python client library', difficulty: 'Intermediate' },
        { name: 'Java', href: '#', description: 'Java SDK for enterprise', difficulty: 'Advanced' },
        { name: 'Go', href: '#', description: 'Go client library', difficulty: 'Advanced' }
      ]
    }
  ];

  const codeExamples = [
    {
      title: 'AI Text Generation',
      language: 'Python',
      description: 'Generate human-like text using our AI models',
      code: `import zionai

client = zionai.Client(api_key="your-api-key")

response = client.text.generate(
    prompt="Write a blog post about AI",
    max_tokens=500,
    temperature=0.7
)

print(response.text)`,
      tags: ['AI', 'Text Generation', 'Python']
    },
    {
      title: 'Image Recognition',
      language: 'JavaScript',
      description: 'Analyze images and extract information',
      code: `const zionai = require('zionai');

const client = new zionai.Client({
  apiKey: 'your-api-key'
});

const result = await client.vision.analyze({
  image: 'path/to/image.jpg',
  features: ['objects', 'faces', 'text']
});

console.log(result);`,
      tags: ['Computer Vision', 'JavaScript', 'Image Analysis']
    },
    {
      title: 'Data Processing Pipeline',
      language: 'Python',
      description: 'Build scalable data processing workflows',
      code: `from zionai.data import Pipeline, Processor

pipeline = Pipeline()

pipeline.add_step(Processor.load_csv('data.csv'))
pipeline.add_step(Processor.clean_data())
pipeline.add_step(Processor.transform_features())
pipeline.add_step(Processor.save_parquet('output.parquet'))

pipeline.run()`,
      tags: ['Data Processing', 'Python', 'ETL']
    }
  ];

  const filteredDocs = featuredDocs.filter(doc => {
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-500/20 text-green-400';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, and code examples to help you build 
              powerful applications with Zion Tech Group services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation, APIs, or code examples..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Documentation */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Documentation</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start here with our most popular and essential guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full font-medium">
                      {getCategoryName(doc.category)}
                    </span>
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${getDifficultyColor(doc.difficulty)}`}>
                      {doc.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {doc.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {doc.lastUpdated}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doc.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Read Documentation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Documentation Sections</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Organized documentation to help you find exactly what you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{item.name}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Code Examples</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready-to-use code snippets and examples for common use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{example.title}</h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded font-medium">
                      {example.language}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    {example.description}
                  </p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 mb-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {example.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Run Example
                    </button>
                    <button className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              More tools and resources to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Community Forum', description: 'Connect with other developers', href: '#' },
              { icon: Play, title: 'Video Tutorials', description: 'Step-by-step video guides', href: '#' },
              { icon: Star, title: 'Best Practices', description: 'Development guidelines and tips', href: '#' },
              { icon: ExternalLink, title: 'API Playground', description: 'Test APIs interactively', href: '#' }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you succeed with our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;