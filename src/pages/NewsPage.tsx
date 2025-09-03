import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ;
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Eye,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight;
} from 'lucide-react';
export function NewsPage() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [;
    { id: 'all', name: 'All News', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'company', name: 'Company News', icon: Award },
    { id: 'industry', name: 'Industry Trends', icon: TrendingUp }
  ];
  const newsArticles = [;
    {;
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform',
      excerpt: 'Our new AI Business Intelligence platform transforms raw data into actionable insights, helping enterprises make data-driven decisions with unprecedented accuracy and speed.',
      content: 'Zion Tech Group is excited to announce the launch of our revolutionary AI-Powered Business Intelligence Platform. This cutting-edge solution leverages advanced machine learning algorithms to transform complex data sets into clear, actionable insights that drive business growth...',
      category: 'ai',
      author: 'Sarah Chen',
      authorRole: 'CTO',
      publishDate: '2025-01-15',
      readTime: '5 min read',
      image: '🤖',
      tags: ['AI', 'Business Intelligence', 'Data Analytics', 'Machine Learning'],
      isFeatured: true,
      views: 1250,
      shares: 45;
},
    {;
      id: 2,
      title: 'Enterprise Security Suite Achieves SOC 2 Type II Compliance',
      excerpt: 'Our comprehensive security solution has successfully completed SOC 2 Type II audit, providing enterprise clients with the highest level of security assurance.',
      content: 'We are proud to announce that our Enterprise Security Suite has successfully achieved SOC 2 Type II compliance. This certification demonstrates our commitment to maintaining the highest standards of security, availability, and confidentiality...',
      category: 'security',
      author: 'Emily Watson',
      authorRole: 'Chief Security Officer',
      publishDate: '2025-01-12',
      readTime: '4 min read',
      image: '🛡️',
      tags: ['Security', 'Compliance', 'SOC 2', 'Enterprise'],
      isFeatured: true,
      views: 980,
      shares: 32;
},
    {;
      id: 3,
      title: 'Cloud FinOps Optimizer Reduces Client Infrastructure Costs by 40%',
      excerpt: 'Our latest case study shows how the Cloud FinOps Optimizer helped a Fortune 500 company reduce their cloud infrastructure costs by 40% while improving performance.',
      content: 'A recent implementation of our Cloud FinOps Optimizer at a Fortune 500 manufacturing company has delivered remarkable results. The solution identified and eliminated wasteful cloud spending while optimizing resource allocation...',
      category: 'cloud',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Engineering',
      publishDate: '2025-01-10',
      readTime: '6 min read',
      image: '☁️',
      tags: ['Cloud', 'FinOps', 'Cost Optimization', 'Case Study'],
      isFeatured: false,
      views: 750,
      shares: 28;
},
    {;
      id: 4,
      title: 'Zion Tech Group Expands Global Operations with New European Office',
      excerpt: 'We are excited to announce the opening of our new European headquarters in London, strengthening our presence in the European market.',
      content: 'Zion Tech Group continues its global expansion with the opening of our new European headquarters in London. This strategic move allows us to better serve our European clients and tap into the region\'s rich talent pool...',
      category: 'company',
      author: 'Kleber Santos',
      authorRole: 'Founder & CEO',
      publishDate: '2025-01-08',
      readTime: '3 min read',
      image: '🌍',
      tags: ['Company News', 'Expansion', 'Europe', 'Global'],
      isFeatured: false,
      views: 650,
      shares: 22;
},
    {;
      id: 5,
      title: 'The Future of AI in Healthcare: Trends and Opportunities',
      excerpt: 'Exploring how artificial intelligence is transforming healthcare delivery, from diagnostic tools to personalized treatment plans.',
      content: 'Artificial intelligence is revolutionizing healthcare in ways we never imagined. From early disease detection to personalized treatment plans, AI is enabling healthcare providers to deliver better outcomes for patients...',
      category: 'ai',
      author: 'Dr. Lisa Thompson',
      authorRole: 'Head of AI Research',
      publishDate: '2025-01-05',
      readTime: '8 min read',
      image: '🏥',
      tags: ['AI', 'Healthcare', 'Research', 'Innovation'],
      isFeatured: false,
      views: 1100,
      shares: 67;
},
    {;
      id: 6,
      title: 'DevOps Automation Toolkit Streamlines Development Workflows',
      excerpt: 'Our new DevOps Automation Toolkit helps development teams reduce deployment time by 60% and improve code quality through automated testing and deployment pipelines.',
      content: 'Development teams are constantly looking for ways to streamline their workflows and improve efficiency. Our new DevOps Automation Toolkit addresses these challenges by providing a comprehensive suite of automation tools...',
      category: 'development',
      author: 'Alex Kim',
      authorRole: 'Head of Product',
      publishDate: '2025-01-03',
      readTime: '5 min read',
      image: '⚙️',
      tags: ['DevOps', 'Automation', 'Development', 'CI/CD'],
      isFeatured: false,
      views: 820,
      shares: 35;
}
  ];
  const filteredArticles = newsArticles.filter(article => {;
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
});
  const featuredArticles = newsArticles.filter(article => article.isFeatured);
  const regularArticles = filteredArticles.filter(article => !article.isFeatured);
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-16">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              News & Updates;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Stay informed about the latest developments in technology, our company milestones,
              and industry insights from our expert team.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search news, articles, and updates...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
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

      {/* Featured Articles */}
      {selectedCategory === 'all' && featuredArticles.length > 0 && (;
        <section className="py-16 bg-zion-slate-dark">;
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="flex items-center justify-between mb-8">;
              <h2 className="text-2xl font-bold text-white">Featured Stories</h2>;
              <span className="text-zion-slate-light">Latest highlights</span>;
            </div>;

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {featuredArticles.map((article) => (;
                <article key={article.id} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                  <div className="p-6">;
                    <div className="flex items-center space-x-4 mb-4">;
                      <div className="text-4xl">{article.image}</div>;
                      <div className="flex-1">;
                        <div className="flex items-center space-x-2 mb-2">;
                          <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                            {categories.find(c => c.id === article.category)?.name}
                          </span>;
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">;
                            Featured;
                          </span>;
                        </div>;
                        <div className="flex items-center space-x-4 text-xs text-zion-slate-light">;
                          <div className="flex items-center space-x-1">;
                            <Calendar className="w-3 h-3" />;
                            <span>{new Date(article.publishDate).toLocaleDateString()}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <Clock className="w-3 h-3" />;
                            <span>{article.readTime}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">;
                      {article.title}
                    </h3>;
                    <p className="text-zion-slate-light mb-4 leading-relaxed">;
                      {article.excerpt}
                    </p>;

                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center space-x-2">;
                        <User className="w-4 h-4 text-zion-slate-light" />;
                        <span className="text-sm text-zion-slate-light">;
                          {article.author}, {article.authorRole}
                        </span>;
                      </div>;
                      <div className="flex items-center space-x-4 text-xs text-zion-slate-light">;
                        <div className="flex items-center space-x-1">;
                          <Eye className="w-3 h-3" />;
                          <span>{article.views}</span>;
                        </div>;
                        <div className="flex items-center space-x-1">;
                          <Share2 className="w-3 h-3" />;
                          <span>{article.shares}</span>;
                        </div>;
                      </div>;
                    </div>;

                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-1">;
                        {article.tags.slice(0, 3).map((tag, index) => (;
                          <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <Link;
                        to={`/news/${article.id}`}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center">;
                        Read More;
                        <ArrowRight className="w-4 h-4 ml-1" />;
                      </Link>;
                    </div>;
                  </div>;
                </article>;
              ))}
            </div>;
          </div>;
        </section>;
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-2xl font-bold text-white">;
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>;
            <div className="flex items-center space-x-4">;
              <span className="text-zion-slate-light">;
                {regularArticles.length} articles found;
              </span>;
              <button className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors">;
                <Filter className="w-4 h-4" />;
                <span>Filter</span>;
              </button>;
            </div>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {regularArticles.map((article) => (;
              <article key={article.id} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                <div className="p-6">;
                  <div className="flex items-center space-x-3 mb-4">;
                    <div className="text-3xl">{article.image}</div>;
                    <div className="flex-1">;
                      <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                        {categories.find(c => c.id === article.category)?.name}
                      </span>;
                    </div>;
                  </div>;

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">;
                    {article.title}
                  </h3>;
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">;
                    {article.excerpt}
                  </p>;

                  <div className="flex items-center justify-between mb-4 text-xs text-zion-slate-light">;
                    <div className="flex items-center space-x-1">;
                      <User className="w-3 h-3" />;
                      <span>{article.author}</span>;
                    </div>;
                    <div className="flex items-center space-x-1">;
                      <Calendar className="w-3 h-3" />;
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>;
                    </div>;
                  </div>;

                  <div className="flex items-center justify-between">;
                    <div className="flex flex-wrap gap-1">;
                      {article.tags.slice(0, 2).map((tag, index) => (;
                        <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <Link;
                      to={`/news/${article.id}`}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center">;
                      Read;
                      <ArrowRight className="w-3 h-3 ml-1" />;
                    </Link>;
                  </div>;
                </div>;
              </article>;
            ))}
          </div>;

          {regularArticles.length === 0 && (;
            <div className="text-center py-12">;
              <div className="text-6xl mb-4">📰</div>;
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>;
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
              Stay Updated;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Subscribe to our newsletter for the latest technology insights, company updates, and industry trends.;
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
            Want to Share Your Story?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Have a technology story, case study, or insight to share? We'd love to hear from you.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Contact Our Editorial Team;
            </Link>;
            <Link;
              to="/blog";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Read Our Blog;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default NewsPage;