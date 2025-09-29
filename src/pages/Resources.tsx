import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Download,
  FileText,
  BookOpen,
  Shield,
  TrendingUp,
  Globe,
  Search,
  ExternalLink,
  Clock,
  Star,
  Cloud,
  Smartphone,
  Database,
  Play,
  CheckCircle,
  Monitor,
  Lightbulb
} from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const resources = [
    {
      id: 1,
      title: "The Complete Guide to AI Implementation in Enterprise",
      type: "Whitepaper",
      icon: FileText,
      description: "A comprehensive 50-page guide covering AI strategy, implementation, and best practices for enterprise organizations.",
      downloadCount: "2.5k",
      rating: 4.9,
      pages: 50,
      category: "AI & Machine Learning",
      tags: ["AI", "Enterprise", "Strategy", "Implementation"],
      featured: true,
      downloadUrl: "/resources/ai-implementation-guide.pdf"
    },
    {
      id: 2,
      title: "Cybersecurity Framework for Remote Work",
      type: "Guide",
      icon: BookOpen,
      description: "Essential security measures and protocols for protecting distributed teams and remote work environments.",
      downloadCount: "1.8k",
      rating: 4.8,
      pages: 25,
      category: "Cybersecurity",
      tags: ["Security", "Remote Work", "Best Practices"],
      featured: true,
      downloadUrl: "/resources/cybersecurity-remote-work.pdf"
    },
    {
      id: 3,
      title: "Cloud Migration Strategy Playbook",
      type: "Playbook",
      icon: Cloud,
      description: "Step-by-step methodology for successful cloud migration with real-world case studies and templates.",
      downloadCount: "3.2k",
      rating: 4.9,
      pages: 40,
      category: "Cloud & DevOps",
      tags: ["Cloud", "Migration", "Strategy", "Templates"],
      featured: true,
      downloadUrl: "/resources/cloud-migration-playbook.pdf"
    },
    {
      id: 4,
      title: "Digital Transformation: A CEO's Guide",
      type: "Executive Brief",
      icon: TrendingUp,
      description: "Strategic insights for C-level executives on leading digital transformation initiatives.",
      downloadCount: "1.2k",
      rating: 4.7,
      pages: 20,
      category: "Digital Transformation",
      tags: ["Strategy", "Leadership", "Transformation"],
      featured: false,
      downloadUrl: "/resources/digital-transformation-ceo-guide.pdf"
    },
    {
      id: 5,
      title: "Mobile App Development Best Practices",
      type: "Technical Guide",
      icon: Smartphone,
      description: "Comprehensive guide covering mobile development methodologies, tools, and optimization techniques.",
      downloadCount: "2.1k",
      rating: 4.8,
      pages: 35,
      category: "Mobile Development",
      tags: ["Mobile", "Development", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/mobile-development-guide.pdf"
    },
    {
      id: 6,
      title: "Data Analytics ROI Calculator",
      type: "Tool",
      icon: Database,
      description: "Interactive Excel tool to calculate ROI for data analytics and business intelligence initiatives.",
      downloadCount: "950",
      rating: 4.6,
      pages: "Interactive",
      category: "Data Analytics",
      tags: ["ROI", "Calculator", "Analytics"],
      featured: false,
      downloadUrl: "/resources/data-analytics-roi-calculator.xlsx"
    },
    {
      id: 7,
      title: "Webinar: AI Trends for 2024",
      type: "Webinar",
      icon: Play,
      description: "Expert panel discussion on emerging AI trends, technologies, and their business implications.",
      downloadCount: "5.8k",
      rating: 4.9,
      duration: "45 min",
      category: "AI & Machine Learning",
      tags: ["AI", "Trends", "2024", "Webinar"],
      featured: true,
      downloadUrl: "/resources/ai-trends-2024-webinar.mp4"
    },
    {
      id: 8,
      title: "DevOps Implementation Checklist",
      type: "Checklist",
      icon: CheckCircle,
      description: "Comprehensive checklist for implementing DevOps practices in your organization.",
      downloadCount: "1.5k",
      rating: 4.7,
      pages: 15,
      category: "Cloud & DevOps",
      tags: ["DevOps", "Checklist", "Implementation"],
      featured: false,
      downloadUrl: "/resources/devops-implementation-checklist.pdf"
    },
    {
      id: 9,
      title: "AI ROI Calculator 2025",
      type: "Tool",
      icon: TrendingUp,
      description: "Interactive calculator to estimate ROI for AI implementations including automation, analytics, and virtual assistants.",
      downloadCount: "3.2k",
      rating: 4.9,
      pages: "Interactive",
      category: "AI & Machine Learning",
      tags: ["AI", "ROI", "Calculator", "Business Case"],
      featured: true,
      downloadUrl: "/resources/ai-roi-calculator-2025.xlsx"
    },
    {
      id: 10,
      title: "Zero Trust Security Implementation Guide",
      type: "Whitepaper",
      icon: Shield,
      description: "Complete guide to implementing Zero Trust security architecture with step-by-step instructions and best practices.",
      downloadCount: "2.8k",
      rating: 4.8,
      pages: 45,
      category: "Cybersecurity",
      tags: ["Zero Trust", "Security", "Architecture", "Implementation"],
      featured: true,
      downloadUrl: "/resources/zero-trust-implementation-guide.pdf"
    },
    {
      id: 11,
      title: "Enterprise AI Strategy Template",
      type: "Template",
      icon: FileText,
      description: "Comprehensive template for developing AI strategy including assessment frameworks, roadmaps, and success metrics.",
      downloadCount: "1.9k",
      rating: 4.7,
      pages: 30,
      category: "AI & Machine Learning",
      tags: ["AI Strategy", "Template", "Planning", "Framework"],
      featured: false,
      downloadUrl: "/resources/enterprise-ai-strategy-template.docx"
    },
    {
      id: 12,
      title: "Webinar: Future of AI in Business",
      type: "Webinar",
      icon: Play,
      description: "Expert discussion on AI trends, challenges, and opportunities for businesses in 2025 and beyond.",
      downloadCount: "4.1k",
      rating: 4.9,
      duration: "60 min",
      category: "AI & Machine Learning",
      tags: ["AI", "Future", "Business", "Trends", "Webinar"],
      featured: true,
      downloadUrl: "/resources/future-ai-business-webinar.mp4"
    },
    {
      id: 13,
      title: "Cloud Cost Optimization Playbook",
      type: "Playbook",
      icon: Cloud,
      description: "Proven strategies and tactics for reducing cloud costs while maintaining performance and reliability.",
      downloadCount: "2.3k",
      rating: 4.8,
      pages: 35,
      category: "Cloud & DevOps",
      tags: ["Cloud", "Cost Optimization", "Strategy", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/cloud-cost-optimization-playbook.pdf"
    },
    {
      id: 14,
      title: "AI Ethics Assessment Tool",
      type: "Tool",
      icon: Shield,
      description: "Interactive assessment tool to evaluate AI systems for bias, fairness, and ethical considerations.",
      downloadCount: "1.7k",
      rating: 4.6,
      pages: "Interactive",
      category: "AI & Machine Learning",
      tags: ["AI Ethics", "Assessment", "Bias", "Fairness"],
      featured: false,
      downloadUrl: "/resources/ai-ethics-assessment-tool.xlsx"
    },
    {
      id: 15,
      title: "Digital Transformation Readiness Assessment",
      type: "Assessment",
      icon: TrendingUp,
      description: "Comprehensive assessment tool to evaluate your organization's readiness for digital transformation.",
      downloadCount: "2.6k",
      rating: 4.8,
      pages: "Interactive",
      category: "Digital Transformation",
      tags: ["Assessment", "Readiness", "Digital Transformation", "Strategy"],
      featured: true,
      downloadUrl: "/resources/digital-transformation-assessment.xlsx"
    },
    {
      id: 16,
      title: "Microservices Architecture Patterns",
      type: "Technical Guide",
      icon: Database,
      description: "Essential patterns and anti-patterns for designing scalable microservices architectures.",
      downloadCount: "1.8k",
      rating: 4.7,
      pages: 28,
      category: "Web Development",
      tags: ["Microservices", "Architecture", "Patterns", "Scalability"],
      featured: false,
      downloadUrl: "/resources/microservices-architecture-patterns.pdf"
    },
    {
      id: 17,
      title: "Executive Brief: AI Investment Priorities",
      type: "Executive Brief",
      icon: TrendingUp,
      description: "Strategic insights for executives on prioritizing AI investments and maximizing business value.",
      downloadCount: "1.4k",
      rating: 4.8,
      pages: 12,
      category: "AI & Machine Learning",
      tags: ["AI Investment", "Strategy", "Executive", "Business Value"],
      featured: false,
      downloadUrl: "/resources/ai-investment-priorities-executive-brief.pdf"
    },
    {
      id: 18,
      title: "Cybersecurity Incident Response Playbook",
      type: "Playbook",
      icon: Shield,
      description: "Step-by-step guide for responding to cybersecurity incidents with templates and best practices.",
      downloadCount: "2.1k",
      rating: 4.9,
      pages: 40,
      category: "Cybersecurity",
      tags: ["Incident Response", "Security", "Playbook", "Emergency"],
      featured: true,
      downloadUrl: "/resources/cybersecurity-incident-response-playbook.pdf"
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Lightbulb, count: resources.length },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', icon: Lightbulb, count: resources.filter(r => r.category === 'AI & Machine Learning').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: resources.filter(r => r.category === 'Cybersecurity').length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, count: resources.filter(r => r.category === 'Cloud & DevOps').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', icon: TrendingUp, count: resources.filter(r => r.category === 'Digital Transformation').length },
    { id: 'Mobile Development', name: 'Mobile Development', icon: Smartphone, count: resources.filter(r => r.category === 'Mobile Development').length },
    { id: 'Data Analytics', name: 'Data Analytics', icon: Database, count: resources.filter(r => r.category === 'Data Analytics').length },
    { id: 'Web Development', name: 'Web Development', icon: Monitor, count: resources.filter(r => r.category === 'Web Development').length }
  ];

  const featuredResources = useMemo(() => resources.filter(resource => resource.featured), [resources]);
  const otherResources = useMemo(() => resources.filter(resource => !resource.featured), [resources]);

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Whitepaper": return FileText;
      case "Guide": return BookOpen;
      case "Playbook": return FileText;
      case "Executive Brief": return TrendingUp;
      case "Technical Guide": return FileText;
      case "Tool": return Database;
      case "Webinar": return Play;
      case "Checklist": return CheckCircle;
      case "Template": return FileText;
      case "Assessment": return TrendingUp;
      default: return FileText;
    }
  };

  // counts are computed in the category definitions above

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // featuredResources is already computed above
  // featuredResources is already computed above
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
                        {resource.duration
                          ? resource.duration
                          : typeof (resource as any).pages === 'number'
                            ? `${(resource as any).pages} pages`
                            : (resource as any).pages || ''}
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
                          {resource.duration
                            ? resource.duration
                            : typeof (resource as any).pages === 'number'
                              ? `${(resource as any).pages} pages`
                              : (resource as any).pages || ''}
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
