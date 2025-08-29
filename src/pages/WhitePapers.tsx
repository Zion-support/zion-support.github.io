import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Tag, 
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Shield,
  Cloud,
  Brain,
  Globe,
  Zap
} from 'lucide-react';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Enterprise Transformation: A Comprehensive Guide",
      description: "Explore how artificial intelligence is revolutionizing enterprise operations, from workflow automation to predictive analytics and decision-making processes.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      downloads: 2847,
      tags: ["AI", "Enterprise", "Transformation", "Automation"],
      featured: true,
      pdfUrl: "/whitepapers/ai-enterprise-transformation-2025.pdf"
    },
    {
      id: 2,
      title: "Quantum Computing in Cybersecurity: Next-Generation Threat Detection",
      description: "Discover how quantum computing is enhancing cybersecurity capabilities, enabling faster threat detection and more robust encryption methods.",
      category: "Cybersecurity",
      author: "Michael Rodriguez",
      date: "2025-01-10",
      downloads: 1956,
      tags: ["Quantum Computing", "Cybersecurity", "Threat Detection", "Encryption"],
      featured: true,
      pdfUrl: "/whitepapers/quantum-cybersecurity-2025.pdf"
    },
    {
      id: 3,
      title: "Edge Computing and IoT: Building the Connected Future",
      description: "Learn about the convergence of edge computing and IoT technologies, and how they're creating smarter, more efficient systems across industries.",
      category: "Edge Computing & IoT",
      author: "Dr. Emily Watson",
      date: "2025-01-05",
      downloads: 1623,
      tags: ["Edge Computing", "IoT", "Connected Systems", "Industry 4.0"],
      featured: false,
      pdfUrl: "/whitepapers/edge-computing-iot-2025.pdf"
    },
    {
      id: 4,
      title: "Blockchain for Enterprise: Beyond Cryptocurrency",
      description: "Explore practical blockchain applications in enterprise settings, from supply chain management to digital identity and smart contracts.",
      category: "Blockchain",
      author: "Alex Thompson",
      date: "2024-12-20",
      downloads: 1432,
      tags: ["Blockchain", "Enterprise", "Supply Chain", "Smart Contracts"],
      featured: false,
      pdfUrl: "/whitepapers/blockchain-enterprise-2024.pdf"
    },
    {
      id: 5,
      title: "Sustainable Technology: Green IT Solutions for the Future",
      description: "Discover how technology can drive sustainability initiatives, from energy-efficient data centers to carbon-neutral cloud computing.",
      category: "Sustainability",
      author: "Dr. Lisa Park",
      date: "2024-12-15",
      downloads: 1289,
      tags: ["Sustainability", "Green IT", "Energy Efficiency", "Cloud Computing"],
      featured: false,
      pdfUrl: "/whitepapers/sustainable-technology-2024.pdf"
    },
    {
      id: 6,
      title: "Digital Twin Technology: Revolutionizing Industry Operations",
      description: "Learn how digital twin technology is transforming manufacturing, healthcare, and infrastructure through real-time monitoring and predictive maintenance.",
      category: "Digital Twin",
      author: "Robert Kim",
      date: "2024-12-10",
      downloads: 1156,
      tags: ["Digital Twin", "Manufacturing", "Healthcare", "Predictive Maintenance"],
      featured: false,
      pdfUrl: "/whitepapers/digital-twin-technology-2024.pdf"
    },
    {
      id: 7,
      title: "AI Ethics and Governance: Building Trust in Technology",
      description: "Examine the critical importance of ethical AI development and governance frameworks in ensuring responsible technology deployment.",
      category: "AI Ethics",
      author: "Dr. James Wilson",
      date: "2024-12-05",
      downloads: 987,
      tags: ["AI Ethics", "Governance", "Responsible AI", "Trust"],
      featured: false,
      pdfUrl: "/whitepapers/ai-ethics-governance-2024.pdf"
    },
    {
      id: 8,
      title: "Cloud-Native Architecture: Modernizing Enterprise Applications",
      description: "Understand the principles and benefits of cloud-native architecture for building scalable, resilient, and maintainable applications.",
      category: "Cloud Computing",
      author: "Maria Garcia",
      date: "2024-11-30",
      downloads: 876,
      tags: ["Cloud-Native", "Architecture", "Scalability", "Microservices"],
      featured: false,
      pdfUrl: "/whitepapers/cloud-native-architecture-2024.pdf"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "Edge Computing & IoT",
    "Blockchain",
    "Sustainability",
    "Digital Twin",
    "AI Ethics",
    "Cloud Computing"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>White Papers & Research - Zion Tech Group</title>
        <meta name="description" content="Access comprehensive white papers and research documents on AI, cybersecurity, edge computing, blockchain, and emerging technologies from Zion Tech Group." />
        <meta name="keywords" content="white papers, research, AI, cybersecurity, edge computing, blockchain, technology insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access cutting-edge research and insights on emerging technologies, 
              industry trends, and innovative solutions that are shaping the future of business.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Research
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredPapers.filter(paper => paper.featured).map((paper) => (
              <div key={paper.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                    {paper.category}
                  </span>
                  <span className="text-slate-400 text-sm">{paper.downloads.toLocaleString()} downloads</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                <p className="text-slate-300 mb-4 line-clamp-3">{paper.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(paper.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <a
                    href={paper.pdfUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            All Research Documents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded">
                    {paper.category}
                  </span>
                  <span className="text-slate-400 text-xs">{paper.downloads.toLocaleString()}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{paper.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{paper.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {paper.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span>{paper.author}</span>
                  <span>{new Date(paper.date).toLocaleDateString()}</span>
                </div>
                
                <a
                  href={paper.pdfUrl}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-slate-300 mb-6">
              Get notified when we publish new white papers and research documents. 
              Be the first to access cutting-edge insights and industry analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Request Custom Research
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
