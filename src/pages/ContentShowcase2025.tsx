import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  TrendingUp, 
  Target, 
  Search,
  Filter,
  Star,
  Clock,
  Calendar,
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Rocket,
  Lightbulb,
  Brain,
  Zap,
  Award,
  ChevronDown,
  Grid,
  List
} from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  stats?: {
    roi?: string;
    improvement?: string;
    savings?: string;
  };
}

const allContentItems: ContentItem[] = [
  {
    id: "ai-enterprise-transformation-2025",
    title: "AI 2025: The Enterprise Autonomous Transformation Revolution",
    description: "Discover how AI-powered autonomous systems are revolutionizing enterprise operations, delivering unprecedented efficiency and ROI in 2025.",
    type: "blog",
    category: "AI Transformation",
    tags: ["AI", "Enterprise", "Autonomous Systems", "Digital Transformation", "ROI"],
    featured: true,
    readTime: "12 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group AI Research Team",
    image: "/images/blog/ai-2025-enterprise-transformation.jpg",
    stats: {
      roi: "300-500%",
      improvement: "40-70%",
      savings: "25-50%"
    }
  },
  {
    id: "quantum-ai-fusion-2025",
    title: "Quantum AI Fusion 2025: The Next Revolution in Computing",
    description: "Explore how quantum computing and AI are merging to create unprecedented computational power, revolutionizing industries from healthcare to finance.",
    type: "blog",
    category: "Quantum Computing",
    tags: ["Quantum AI", "Quantum Computing", "AI Revolution", "Future Technology"],
    featured: true,
    readTime: "15 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group Quantum AI Research Team",
    image: "/images/blog/quantum-ai-fusion-2025.jpg"
  },
  {
    id: "retail-ai-transformation-2025",
    title: "Retail AI Transformation 2025: How a Global Retailer Achieved 400% ROI",
    description: "Discover how a major retail chain transformed their operations with AI, achieving unprecedented efficiency gains and customer satisfaction improvements.",
    type: "case-study",
    category: "Retail AI Transformation",
    tags: ["Retail", "AI", "Transformation", "ROI", "Customer Experience"],
    featured: true,
    readTime: "18 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group Case Study Team",
    image: "/images/case-studies/retail-ai-transformation-2025.jpg",
    stats: {
      roi: "400%",
      improvement: "65%",
      savings: "$480M"
    }
  },
  {
    id: "financial-quantum-ai-transformation",
    title: "Financial Services Quantum AI Transformation: $2.1B Portfolio Optimization Success",
    description: "How a major investment bank leveraged quantum AI to achieve unprecedented portfolio performance and risk management capabilities.",
    type: "case-study",
    category: "Financial Services AI",
    tags: ["Financial Services", "Quantum AI", "Portfolio Optimization", "Risk Management"],
    featured: true,
    readTime: "20 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group Financial Services Team",
    image: "/images/case-studies/financial-services-quantum-ai.jpg",
    stats: {
      roi: "340%",
      improvement: "85%",
      savings: "$1.38B"
    }
  },
  {
    id: "ai-transformation-roadmap-2025",
    title: "AI Transformation Roadmap 2025: Complete Implementation Guide",
    description: "A comprehensive step-by-step guide to successfully implementing AI transformation in your organization, with proven strategies and actionable insights.",
    type: "resource",
    category: "Implementation Guide",
    tags: ["AI Transformation", "Implementation", "Strategy", "Roadmap", "Best Practices"],
    featured: true,
    readTime: "25 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group AI Strategy Team",
    image: "/images/resources/ai-transformation-roadmap-2025.jpg"
  }
];

export default function ContentShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'featured'>('featured');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="h-4 w-4" />;
      case 'case-study': return <TrendingUp className="h-4 w-4" />;
      case 'resource': return <Target className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'case-study': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'resource': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredContent = allContentItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesType && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

  const categories = [...new Set(allContentItems.map(item => item.category))];
  const types = [...new Set(allContentItems.map(item => item.type))];

  return (
    <>
      <SEO 
        title="Content Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive collection of AI transformation insights, case studies, and implementation guides. Discover how leading organizations are achieving unprecedented results with AI."
        keywords="AI content, transformation guides, case studies, AI implementation, quantum AI, enterprise AI"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-zion-purple" />
                <span className="text-zion-purple text-sm font-medium">Content Showcase 2025</span>
                <Rocket className="h-4 w-4 text-zion-purple" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary AI Content
                <span className="block text-zion-purple">That Transforms Businesses</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover cutting-edge insights, real-world success stories, and comprehensive guides 
                that are helping organizations achieve unprecedented results with AI transformation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">400%</div>
                  <div className="text-gray-300">Average ROI Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="text-gray-300">Performance Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2.1B</div>
                  <div className="text-gray-300">Total Value Created</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Type Filter */}
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-gray-400" />
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white text-sm"
                    >
                      <option value="all">All Types</option>
                      {types.map(type => (
                        <option key={type} value={type} className="capitalize">
                          {type.replace('-', ' ')}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white text-sm"
                    >
                      <option value="all">All Categories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'featured')}
                      className="bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="date">Latest</option>
                      <option value="title">Alphabetical</option>
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-1 bg-slate-800 rounded-md p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="h-8 w-8 p-0"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="h-8 w-8 p-0"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
                </h2>
                <p className="text-gray-400">
                  {searchTerm && `Searching for "${searchTerm}"`}
                  {selectedType !== 'all' && ` • Filtered by ${selectedType.replace('-', ' ')}`}
                  {selectedCategory !== 'all' && ` • Category: ${selectedCategory}`}
                </p>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredContent.map((item) => (
                    <Card key={item.id} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${getTypeColor(item.type)} border`}>
                            {getTypeIcon(item.type)}
                            <span className="ml-2 capitalize text-xs">{item.type.replace('-', ' ')}</span>
                          </Badge>
                          {item.featured && (
                            <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl text-white group-hover:text-zion-purple transition-colors line-clamp-2 mb-3">
                          {item.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-400 line-clamp-3 mb-4">
                          {item.description}
                        </CardDescription>

                        {/* Stats */}
                        {item.stats && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.stats.roi && (
                              <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {item.stats.roi} ROI
                              </Badge>
                            )}
                            {item.stats.improvement && (
                              <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                                <Zap className="h-3 w-3 mr-1" />
                                {item.stats.improvement} Better
                              </Badge>
                            )}
                            {item.stats.savings && (
                              <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                {item.stats.savings} Savings
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {item.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(item.publishDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                          <Users className="h-4 w-4" />
                          <span>{item.author}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {item.tags.length > 3 && (
                            <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                              +{item.tags.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <Button asChild className="w-full bg-zion-purple hover:bg-zion-purple/90 text-white">
                          <Link to={`/${item.type}s/${item.id}`}>
                            Read Full Article
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredContent.map((item) => (
                    <Card key={item.id} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="lg:w-1/3">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className={`${getTypeColor(item.type)} border`}>
                                {getTypeIcon(item.type)}
                                <span className="ml-2 capitalize text-xs">{item.type.replace('-', ' ')}</span>
                              </Badge>
                              {item.featured && (
                                <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                                  <Star className="h-3 w-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                              {item.description}
                            </p>
                          </div>

                          <div className="lg:w-1/3">
                            {/* Stats */}
                            {item.stats && (
                              <div className="space-y-2 mb-4">
                                {item.stats.roi && (
                                  <div className="flex items-center gap-2 text-sm">
                                    <TrendingUp className="h-4 w-4 text-green-400" />
                                    <span className="text-green-400 font-semibold">{item.stats.roi} ROI</span>
                                  </div>
                                )}
                                {item.stats.improvement && (
                                  <div className="flex items-center gap-2 text-sm">
                                    <Zap className="h-4 w-4 text-blue-400" />
                                    <span className="text-blue-400 font-semibold">{item.stats.improvement} Improvement</span>
                                  </div>
                                )}
                                {item.stats.savings && (
                                  <div className="flex items-center gap-2 text-sm">
                                    <Award className="h-4 w-4 text-purple-400" />
                                    <span className="text-purple-400 font-semibold">{item.stats.savings} Savings</span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Meta */}
                            <div className="space-y-2 text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{item.readTime}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>{item.author}</span>
                              </div>
                            </div>
                          </div>

                          <div className="lg:w-1/3">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {item.tags.slice(0, 4).map((tag, index) => (
                                <Badge key={index} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {item.tags.length > 4 && (
                                <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                                  +{item.tags.length - 4} more
                                </Badge>
                              )}
                            </div>

                            <Button asChild className="w-full bg-zion-purple hover:bg-zion-purple/90 text-white">
                              <Link to={`/${item.type}s/${item.id}`}>
                                Read Full Article
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {filteredContent.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">No content found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedType('all');
                      setSelectedCategory('all');
                    }}
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 border-t border-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-zion-purple/20 to-blue-500/20 border border-zion-purple/30 rounded-2xl p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Join thousands of organizations already using our proven AI transformation strategies 
                  to achieve unprecedented results and competitive advantages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple/90 text-white">
                    <Link to="/contact">
                      <Rocket className="h-5 w-5 mr-2" />
                      Start Your AI Transformation
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
                    <Link to="/resources">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Browse All Resources
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}