import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ;
  BookOpen,
  Download,
  FileText,
  Video,
  Play,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  ArrowRight,
  Star,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share2,
  Tag,
  TrendingUp,
  Lightbulb,
  Target,
  CheckCircle;
} from 'lucide-react';
export function ResourcesPage() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [;
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'whitepapers', name: 'White Papers', icon: FileText },
    { id: 'case-studies', name: 'Case Studies', icon: Target },
    { id: 'webinars', name: 'Webinars', icon: Video },
    { id: 'guides', name: 'Guides', icon: BookOpen },
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'research', name: 'Research', icon: Brain },
    { id: 'tools', name: 'Tools', icon: Code }
  ];
  const resources = [;
    {;
      id: 1,
      title: 'AI-Powered Business Intelligence: A Comprehensive Guide',
      description: 'Learn how to implement AI-driven business intelligence solutions that transform raw data into actionable insights for enterprise decision-making.',
      category: 'whitepapers',
      type: 'PDF',
      size: '2.4 MB',
      pages: 45,
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15',
      downloadCount: 1250,
      rating: 4.9,
      image: '📊',
      tags: ['AI', 'Business Intelligence', 'Data Analytics', 'Enterprise'],
      isFeatured: true,
      isNew: false,
      downloadUrl: '/downloads/ai-bi-guide.pdf';
},
    {;
      id: 2,
      title: 'Enterprise Security Best Practices: 2025 Edition',
      description: 'Comprehensive security guidelines for enterprise organizations, covering threat detection, compliance, and incident response strategies.',
      category: 'guides',
      type: 'PDF',
      size: '3.1 MB',
      pages: 62,
      author: 'Emily Watson',
      publishDate: '2025-01-12',
      downloadCount: 980,
      rating: 4.8,
      image: '🛡️',
      tags: ['Security', 'Compliance', 'Enterprise', 'Best Practices'],
      isFeatured: true,
      isNew: true,
      downloadUrl: '/downloads/security-best-practices-2025.pdf';
},
    {;
      id: 3,
      title: 'Cloud FinOps Optimization: Case Study',
      description: 'Real-world case study showing how a Fortune 500 company reduced cloud costs by 40% using our FinOps optimization platform.',
      category: 'case-studies',
      type: 'PDF',
      size: '1.8 MB',
      pages: 28,
      author: 'Marcus Rodriguez',
      publishDate: '2025-01-10',
      downloadCount: 750,
      rating: 4.7,
      image: '☁️',
      tags: ['Cloud', 'FinOps', 'Case Study', 'Cost Optimization'],
      isFeatured: false,
      isNew: false,
      downloadUrl: '/downloads/cloud-finops-case-study.pdf';
},
    {;
      id: 4,
      title: 'DevOps Automation Toolkit Template',
      description: 'Ready-to-use templates and scripts for implementing DevOps automation in your organization.',
      category: 'templates',
      type: 'ZIP',
      size: '15.2 MB',
      pages: 'Multiple Files',
      author: 'Alex Kim',
      publishDate: '2025-01-08',
      downloadCount: 1200,
      rating: 4.9,
      image: '⚙️',
      tags: ['DevOps', 'Automation', 'Templates', 'CI/CD'],
      isFeatured: false,
      isNew: true,
      downloadUrl: '/downloads/devops-automation-toolkit.zip';
},
    {;
      id: 5,
      title: 'The Future of AI in Healthcare: Research Report',
      description: 'In-depth research on AI applications in healthcare, including trends, opportunities, and implementation challenges.',
      category: 'research',
      type: 'PDF',
      size: '4.2 MB',
      pages: 78,
      author: 'Dr. Lisa Thompson',
      publishDate: '2025-01-05',
      downloadCount: 1100,
      rating: 4.8,
      image: '🏥',
      tags: ['AI', 'Healthcare', 'Research', 'Innovation'],
      isFeatured: true,
      isNew: false,
      downloadUrl: '/downloads/ai-healthcare-research.pdf';
},
    {;
      id: 6,
      title: 'Data Analytics Implementation Guide',
      description: 'Step-by-step guide for implementing data analytics solutions in enterprise environments.',
      category: 'guides',
      type: 'PDF',
      size: '2.9 MB',
      pages: 55,
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-03',
      downloadCount: 850,
      rating: 4.6,
      image: '📈',
      tags: ['Data Analytics', 'Implementation', 'Enterprise', 'Guide'],
      isFeatured: false,
      isNew: false,
      downloadUrl: '/downloads/data-analytics-guide.pdf';
},
    {;
      id: 7,
      title: 'AI Security Assessment Tool',
      description: 'Interactive tool for assessing AI security risks and compliance requirements in your organization.',
      category: 'tools',
      type: 'Web App',
      size: 'Online',
      pages: 'Interactive',
      author: 'Emily Watson',
      publishDate: '2025-01-01',
      downloadCount: 650,
      rating: 4.7,
      image: '🔍',
      tags: ['AI Security', 'Assessment', 'Tool', 'Compliance'],
      isFeatured: false,
      isNew: true,
      downloadUrl: '/tools/ai-security-assessment';
},
    {;
      id: 8,
      title: 'Cloud Migration Checklist Template',
      description: 'Comprehensive checklist for planning and executing cloud migration projects.',
      category: 'templates',
      type: 'PDF',
      size: '0.8 MB',
      pages: 12,
      author: 'Marcus Rodriguez',
      publishDate: '2024-12-28',
      downloadCount: 1400,
      rating: 4.8,
      image: '📋',
      tags: ['Cloud Migration', 'Checklist', 'Template', 'Planning'],
      isFeatured: false,
      isNew: false,
      downloadUrl: '/downloads/cloud-migration-checklist.pdf';
}
  ];
  const filteredResources = resources.filter(resource => {;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
});
  const featuredResources = filteredResources.filter(resource => resource.isFeatured);
  const regularResources = filteredResources.filter(resource => !resource.isFeatured);
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-16">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Resources & Downloads;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Access our comprehensive library of white papers, case studies, guides, and tools ;
              to help you stay ahead of technology trends and implement best practices.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search resources, topics, or authors...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
            </div>;

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">100+</div>;
                <div className="text-sm text-zion-slate-light">Resources</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">50K+</div>;
                <div className="text-sm text-zion-slate-light">Downloads</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">4.8★</div>;
                <div className="text-sm text-zion-slate-light">Average Rating</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">Free</div>;
                <div className="text-sm text-zion-slate-light">All Resources</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Categories Filter */}
      <section className="py-8 bg-zion-slate-darker border-b border-zion-purple/20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap gap-4 justify-center">;
            {categories.map((category) => (;
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${;
                  selectedCategory === category.id;
                    ? 'bg-zion-cyan text-white';
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white';
}`}
              >;
                <category.icon className="w-4 h-4" />;
                <span>{category.name}</span>;
              </button>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Featured Resources */}
      {selectedCategory === 'all' && featuredResources.length > 0 && (;
        <section className="py-16 bg-zion-slate-dark">;
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="flex items-center justify-between mb-8">;
              <h2 className="text-2xl font-bold text-white">Featured Resources</h2>;
              <span className="text-zion-slate-light">Most popular downloads</span>;
            </div>;

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {featuredResources.map((resource) => (;
                <div key={resource.id} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                  <div className="p-6">;
                    <div className="flex items-start space-x-4 mb-4">;
                      <div className="text-4xl">{resource.image}</div>;
                      <div className="flex-1">;
                        <div className="flex items-center space-x-2 mb-2">;
                          <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                            {categories.find(c => c.id === resource.category)?.name}
                          </span>;
                          {resource.isNew && (;
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">;
                              New;
                            </span>;
                          )}
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">;
                            Featured;
                          </span>;
                        </div>;
                        <div className="flex items-center space-x-4 text-xs text-zion-slate-light">;
                          <div className="flex items-center space-x-1">;
                            <Calendar className="w-3 h-3" />;
                            <span>{new Date(resource.publishDate).toLocaleDateString()}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <Download className="w-3 h-3" />;
                            <span>{resource.downloadCount.toLocaleString()}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />;
                            <span>{resource.rating}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">;
                      {resource.title}
                    </h3>;
                    <p className="text-zion-slate-light mb-4 leading-relaxed">;
                      {resource.description}
                    </p>;

                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">;
                      <div className="flex items-center space-x-2">;
                        <User className="w-4 h-4" />;
                        <span>{resource.author}</span>;
                      </div>;
                      <div className="flex items-center space-x-4">;
                        <span>{resource.type}</span>;
                        <span>{resource.size}</span>;
                        <span>{resource.pages}</span>;
                      </div>;
                    </div>;

                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-1">;
                        {resource.tags.slice(0, 3).map((tag, index) => (;
                          <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <a;
                        href={resource.downloadUrl}
                        className="bg-zion-cyan text-white px-4 py-2 rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center space-x-2">;
                        <Download className="w-4 h-4" />;
                        <span>Download</span>;
                      </a>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
      )}

      {/* All Resources */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-2xl font-bold text-white">;
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>;
            <div className="flex items-center space-x-4">;
              <span className="text-zion-slate-light">;
                {regularResources.length} resources found;
              </span>;
              <button className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors">;
                <Filter className="w-4 h-4" />;
                <span>Filter</span>;
              </button>;
            </div>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {regularResources.map((resource) => (;
              <div key={resource.id} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                <div className="p-6">;
                  <div className="flex items-start space-x-3 mb-4">;
                    <div className="text-3xl">{resource.image}</div>;
                    <div className="flex-1">;
                      <div className="flex items-center space-x-2 mb-2">;
                        <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                          {categories.find(c => c.id === resource.category)?.name}
                        </span>;
                        {resource.isNew && (;
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">;
                            New;
                          </span>;
                        )}
                      </div>;
                    </div>;
                  </div>;

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">;
                    {resource.title}
                  </h3>;
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">;
                    {resource.description}
                  </p>;

                  <div className="space-y-2 mb-4 text-xs text-zion-slate-light">;
                    <div className="flex items-center space-x-2">;
                      <User className="w-3 h-3" />;
                      <span>{resource.author}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Calendar className="w-3 h-3" />;
                      <span>{new Date(resource.publishDate).toLocaleDateString()}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Download className="w-3 h-3" />;
                      <span>{resource.downloadCount.toLocaleString()} downloads</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />;
                      <span>{resource.rating} rating</span>;
                    </div>;
                  </div>;

                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-sm text-zion-cyan">{resource.type} • {resource.size}</div>;
                    <div className="text-sm text-zion-slate-light">{resource.pages}</div>;
                  </div>;

                  <div className="flex items-center justify-between">;
                    <div className="flex flex-wrap gap-1">;
                      {resource.tags.slice(0, 2).map((tag, index) => (;
                        <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <a;
                      href={resource.downloadUrl}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center">;
                      <Download className="w-4 h-4 mr-1" />;
                      Download;
                    </a>;
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;

          {regularResources.length === 0 && (;
            <div className="text-center py-12">;
              <div className="text-6xl mb-4">📚</div>;
              <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>;
              <p className="text-zion-slate-light mb-4">;
                Try adjusting your search terms or browse different categories.;
              </p>;
              <button;
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedCategory('all');
}}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors">;
                Clear filters;
              </button>;
            </div>;
          )}
        </div>;
      </section>;

      {/* Newsletter Signup */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Stay Updated with New Resources;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Subscribe to our newsletter and be the first to access new white papers,
              case studies, and tools as they're released.;
            </p>;
            <div className="max-w-md mx-auto">;
              <div className="flex space-x-2">;
                <input;
                  type="email";
                  placeholder="Enter your email";
                  className="flex-1 px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
                <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  Subscribe;
                </button>;
              </div>;
              <p className="text-xs text-zion-slate-light mt-2">;
                We respect your privacy. Unsubscribe at any time.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Need Custom Resources?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Looking for specific research, analysis, or tools that aren't available? ;
            Our team can create custom resources tailored to your needs.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Request Custom Resource;
            </Link>;
            <Link;
              to="/services";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Explore Our Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default ResourcesPage;