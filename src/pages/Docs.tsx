import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code, Database, Shield, Brain, Cloud, Globe, Cpu, Network, Rocket, Target, BarChart3, Palette, Heart, Building, Clock, ArrowRight, Download, ExternalLink, FileText, Video, Users, Settings, Zap, Lock, Key, Api, Terminal, Server, Database as DatabaseIcon, GitBranch, GitCommit, GitPullRequest, GitMerge, GitCompare } from 'lucide-react';

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('overview');

  const docCategories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 0 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 25 },
    { id: 'api', name: 'API Reference', icon: Api, count: 18 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 22 },
    { id: 'security', name: 'Security', icon: Shield, count: 15 },
    { id: 'quantum', name: 'Quantum Tech', icon: Cpu, count: 12 },
    { id: 'enterprise', name: 'Enterprise', icon: Building, count: 20 },
    { id: 'tutorials', name: 'Tutorials', icon: Video, count: 30 }
  ];

  const docSections = [
    { id: 'overview', name: 'Overview', icon: BookOpen },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket },
    { id: 'api-reference', name: 'API Reference', icon: Api },
    { id: 'sdks', name: 'SDKs & Libraries', icon: Code },
    { id: 'examples', name: 'Examples', icon: Code },
    { id: 'tutorials', name: 'Tutorials', icon: Video },
    { id: 'deployment', name: 'Deployment', icon: Server },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Settings }
  ];

  const documentation = [
    {
      id: 1,
      title: 'AI Autonomous Systems API Reference',
      category: 'api',
      description: 'Complete API documentation for AI autonomous systems including endpoints, parameters, and response formats',
      tags: ['API', 'AI', 'Autonomous', 'Reference'],
      readTime: '15 min read',
      difficulty: 'Intermediate',
      featured: true,
      sections: ['overview', 'api-reference', 'examples']
    },
    {
      id: 2,
      title: 'Quantum Neural Network Implementation Guide',
      category: 'quantum',
      description: 'Step-by-step guide to implementing quantum neural networks using our platform',
      tags: ['Quantum', 'Neural Networks', 'Implementation', 'Guide'],
      readTime: '25 min read',
      difficulty: 'Advanced',
      featured: true,
      sections: ['overview', 'getting-started', 'tutorials', 'examples']
    },
    {
      id: 3,
      title: 'SOC2 Compliance Automation Setup',
      category: 'security',
      description: 'Complete setup guide for SOC2 compliance automation tools and workflows',
      tags: ['Security', 'Compliance', 'SOC2', 'Automation', 'Setup'],
      readTime: '20 min read',
      difficulty: 'Intermediate',
      featured: false,
      sections: ['overview', 'getting-started', 'deployment', 'troubleshooting']
    },
    {
      id: 4,
      title: '5G Enterprise Network Deployment',
      category: 'enterprise',
      description: 'Comprehensive deployment guide for 5G enterprise network infrastructure',
      tags: ['5G', 'Enterprise', 'Network', 'Deployment', 'Infrastructure'],
      readTime: '30 min read',
      difficulty: 'Advanced',
      featured: false,
      sections: ['overview', 'getting-started', 'deployment', 'troubleshooting']
    },
    {
      id: 5,
      title: 'AI-Powered IT Asset Management SDK',
      category: 'ai',
      description: 'SDK documentation for integrating AI-powered IT asset management into your applications',
      tags: ['AI', 'SDK', 'IT', 'Asset Management', 'Integration'],
      readTime: '18 min read',
      difficulty: 'Intermediate',
      featured: false,
      sections: ['overview', 'sdks', 'examples', 'tutorials']
    },
    {
      id: 6,
      title: 'Cloud Infrastructure as Code Templates',
      category: 'cloud',
      description: 'Terraform and CloudFormation templates for deploying Zion Tech Group infrastructure',
      tags: ['Cloud', 'Infrastructure', 'Terraform', 'Templates', 'DevOps'],
      readTime: '12 min read',
      difficulty: 'Beginner',
      featured: false,
      sections: ['overview', 'examples', 'deployment']
    }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/ai/autonomous-systems',
      description: 'Retrieve all AI autonomous systems',
      parameters: ['limit', 'offset', 'status', 'type'],
      response: 'JSON array of autonomous systems'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/autonomous-systems',
      description: 'Create a new AI autonomous system',
      parameters: ['name', 'type', 'configuration', 'environment'],
      response: 'Created autonomous system object'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/ai/autonomous-systems/{id}',
      description: 'Update an existing AI autonomous system',
      parameters: ['id', 'name', 'configuration', 'status'],
      response: 'Updated autonomous system object'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/ai/autonomous-systems/{id}',
      description: 'Delete an AI autonomous system',
      parameters: ['id'],
      response: 'Success confirmation'
    }
  ];

  const sdkExamples = [
    {
      language: 'Python',
      title: 'AI Autonomous Systems Client',
      description: 'Python client for interacting with AI autonomous systems',
      code: `from zion_ai import AutonomousSystemsClient

client = AutonomousSystemsClient(api_key="your_api_key")

# Create a new autonomous system
system = client.create_system(
    name="Business Intelligence AI",
    type="business_intelligence",
    configuration={"model": "gpt-4", "tasks": ["analysis", "reporting"]}
)

# Start the system
client.start_system(system.id)

# Get system status
status = client.get_system_status(system.id)
print(f"System status: {status.status}")`,
      downloadUrl: '/downloads/python-sdk.zip'
    },
    {
      language: 'JavaScript',
      title: 'Quantum Neural Network Client',
      description: 'JavaScript client for quantum neural network operations',
      code: `import { QuantumNeuralNetwork } from '@zion/quantum-nn';

const client = new QuantumNeuralNetwork({
  apiKey: 'your_api_key',
  endpoint: 'https://api.ziontechgroup.com'
});

// Create a quantum neural network
const network = await client.createNetwork({
  name: 'Quantum Classifier',
  qubits: 8,
  layers: 3,
  type: 'classifier'
});

// Train the network
await client.trainNetwork(network.id, {
  data: trainingData,
  epochs: 100,
  learningRate: 0.01
});

// Make predictions
const predictions = await client.predict(network.id, testData);`,
      downloadUrl: '/downloads/javascript-sdk.zip'
    },
    {
      language: 'Java',
      title: 'Enterprise Security Client',
      description: 'Java client for enterprise security and compliance',
      code: `import com.zion.security.EnterpriseSecurityClient;
import com.zion.security.models.ComplianceReport;

public class SecurityExample {
    public static void main(String[] args) {
        EnterpriseSecurityClient client = new EnterpriseSecurityClient(
            "your_api_key",
            "https://api.ziontechgroup.com"
        );
        
        // Generate SOC2 compliance report
        ComplianceReport report = client.generateSOC2Report(
            "company_id",
            "2024"
        );
        
        // Export report
        client.exportReport(report.getId(), "PDF");
    }
}`,
      downloadUrl: '/downloads/java-sdk.zip'
    }
  ];

  const filteredDocs = documentation.filter(doc => 
    activeCategory === 'all' || doc.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Comprehensive technical documentation, API references, and development guides for all Zion Tech Group services
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation, APIs, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {docCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                {category.count > 0 && (
                  <span className="ml-2 px-2 py-1 bg-zion-slate-light/20 rounded-full text-xs">
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Documentation Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group text-left p-6 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-light/10 border border-zion-blue-light/30 hover:bg-zion-slate-light/20'
                }`}
              >
                <section.icon className={`w-12 h-12 mb-4 ${
                  activeSection === section.id ? 'text-white' : 'text-zion-cyan group-hover:scale-110 transition-transform'
                }`} />
                <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Documentation */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.filter(doc => doc.featured).map((doc) => (
              <div key={doc.id} className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 hover:bg-zion-slate-light/20 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                    {doc.category.toUpperCase()}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-zion-slate-light text-sm">{doc.readTime}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {doc.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{doc.title}</h3>
                <p className="text-zion-slate-light mb-4">{doc.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {doc.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-zion-cyan hover:text-white transition-colors flex items-center space-x-2">
                  <span>Read Documentation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Reference</h2>
          <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AI Autonomous Systems API</h3>
              <p className="text-zion-slate-light mb-6">
                Complete API reference for managing AI autonomous systems through our REST API
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zion-slate-light/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Endpoint</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-light uppercase tracking-wider">Parameters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zion-slate-light/20">
                  {apiEndpoints.map((endpoint, index) => (
                    <tr key={index} className="hover:bg-zion-slate-light/10">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-mono">
                        {endpoint.endpoint}
                      </td>
                      <td className="px-6 py-4 text-sm text-zion-slate-light">
                        {endpoint.description}
                      </td>
                      <td className="px-6 py-4 text-sm text-zion-slate-light">
                        {endpoint.parameters.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* SDK Examples */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">SDKs & Libraries</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sdkExamples.map((sdk, index) => (
              <div key={index} className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                    {sdk.language}
                  </span>
                  <a
                    href={sdk.downloadUrl}
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{sdk.title}</h3>
                <p className="text-zion-slate-light mb-4">{sdk.description}</p>
                <div className="bg-zion-slate-dark rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-sm text-zion-slate-light">
                    <code>{sdk.code}</code>
                  </pre>
                </div>
                <div className="flex space-x-3">
                  <button className="text-zion-cyan hover:text-white transition-colors text-sm">
                    View Full Documentation
                  </button>
                  <a
                    href={sdk.downloadUrl}
                    className="text-zion-cyan hover:text-white transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>Download SDK</span>
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guide</h2>
            <p className="text-xl text-white/90 mb-8">
              Get up and running with Zion Tech Group services in minutes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Get API Key</p>
                  <p className="text-white/80 text-sm">Sign up and get your API key</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Install SDK</p>
                  <p className="text-white/80 text-sm">Install your preferred SDK</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Make First Call</p>
                  <p className="text-white/80 text-sm">Start using our services</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/downloads/quick-start-guide.pdf"
                className="inline-flex items-center space-x-2 bg-zion-slate-light/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Guide</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/help" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Help Center</h3>
                <p className="text-zion-slate-light text-sm">Find answers to common questions</p>
              </div>
            </Link>
            <Link to="/webinars" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <Video className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Video Tutorials</h3>
                <p className="text-zion-slate-light text-sm">Step-by-step video guides</p>
              </div>
            </Link>
            <Link to="/case-studies" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <BarChart3 className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-zion-slate-light text-sm">Real-world implementation examples</p>
              </div>
            </Link>
            <Link to="/contact" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
                <p className="text-zion-slate-light text-sm">Get help from our experts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}