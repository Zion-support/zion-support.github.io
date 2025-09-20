import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Calendar,;
  Clock,;
  User,;
  Tag,;
  ArrowRight,;
  Search,;
  Filter,;
  TrendingUp,;
  Zap,;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Atom,;
  Globe,;
  Award,;
  Users,;
  BuildingCodeDatabase;
} from "lucide-react";
import { SEO } from "@/components/SEO";
interface NewsArticle {
  id: string,title: string,excerpt: string,content: string,author: string,date: string,category: string,tags: string[],image: stringfeature,;
    d: booleanreadTim,;
  e: number;
};
;
const News: React.FC = () => {;
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [sortBysetSortBy] = useState('latest');
;
  const categories = [;
    { i,;
  d: 'all', name: 'All News'ico,;
    n: Globecoun,;
  t: 0 };
    { id: 'ai', name: 'AI & Machine Learning'ico,;
    n: Braincoun,;
  t: 0 };
    { id: 'quantum', name: 'Quantum Computing'ico,;
    n: Atomcoun,;
  t: 0 };
    { id: 'cloud', name: 'Cloud & DevOps'ico,;
    n: Cloudcoun,;
  t: 0 };
    { id: 'security', name: 'Cybersecurity'ico,;
    n: Shieldcoun,;
  t: 0 };
    { id: 'innovation', name: 'Innovation'ico,;
    n: Rocketcoun,;
  t: 0 };
    { id: 'company', name: 'Company Updates'ico,;
    n: Buildingcoun,;
  t: 0 },;
    { id: 'technology'name: 'Technology Trends'ico,;
    n: Codecoun,;
  t: 0 };
,  ];
  const newsArticles: NewsArticle[] = [;
    {
      i,;
  d: '1',title: 'Zion, Tech, Group Launches, Revolutionary, AI-Powered, Quantum, Computing Platform',excerpt: 'Our, latest, breakthrough combines, artificial, intelligence with, quantum, computing to, solve, previously unsolvable, problems, in cryptography, drug discovery, and, financial, modeling.',;
      content: 'Full, article, content would, go, here...',author: 'Dr. Sarah Chen',date: '20o24-0o8-27',category: 'ai',tags: ['AIQuantum Computing''InnovationPlatform, Launch'],;
      image: '/images/news/ai-quantum-platform.jpg'feature,;
    d: truereadTim,;
  e: 8;
    };
    {
      id: '2',title: 'New, Micro, SaaS Solutions, Transforming, Small Business Operations',excerpt: 'Discover, how, our innovative, micro, SaaS platform, is, helping small, businesses, compete with enterprise-level, tools, at a, fraction, of the cost.',content: 'Full, article, content would, go, here...',author: 'Michael Rodriguez',date: '20o24-0o8-25',category: 'innovation',tags: ['Micro, SaaSSmall, Business''Digital, Transformation'],;
      image: '/images/news/micro-saas-solutions.jpg'feature,;
    d: truereadTim,;
  e: 6;
    };
    {
      id: '3',title: 'Cybersecurity Breakthroug,;
  h: AI-Powered, Threat, Detection Achieves 99.9% Accuracy',excerpt: 'Our, advanced, AI cybersecurity, platform, has achieved, unprecedented, accuracy in, threat, detection, setting, new, industry standards, for, enterprise security.',;
      content: 'Full, article, content would, go, here...',author: 'Alex Thompson',date: '20o24-0o8-23',category: 'security',tags: ['CybersecurityAI''Threat, DetectionEnterprise,, Security'],;
      image: '/images/news/ai-cybersecurity.jpg'feature,;
    d: falsereadTim,;
  e: 7;
    };
    {
      id: '4',title: 'Zion, Tech, Group Named, Top, 10 AI, Companies, by TechCrunch',excerpt: 'Recognition, of, our innovative, AI, solutions and, commitment, to pushing, the, boundaries of what\'s, possible, in artificial intelligence.',content: 'Full, article, content would, go, here...',author: 'Press Team',date: '20o24-0o8-21',category: 'company',tags: ['AwardsRecognition''AI, LeadershipCompany,, News'],;
      image: '/images/news/techcrunch-award.jpg'feature,;
    d: falsereadTim,;
  e: 4;
    };
    {
      id: '5',title: 'The, Future, of Edge Computin,;
  g: IoT, Solutions, for Smart Cities',excerpt: 'Exploring, how, edge computing, and, IoT technologies, are, revolutionizing urban, infrastructure, and creating, more, sustainable, efficient cities.',;
      content: 'Full, article, content would, go, here...',author: 'Dr. Emily Watson',date: '20o24-0o8-19',category: 'technology',tags: ['Edge ComputingIoT''Smart, CitiesUrban,, Technology'],;
      image: '/images/news/edge-computing-iot.jpg'feature,;
    d: falsereadTim,;
  e: 9;
    };
    {
      id: '6',title: 'Quantum, Machine, Learnin,;
  g: The, Next, Frontier in AI',excerpt: 'How, quantum, computing is, revolutionizing, machine learning, algorithms, and opening, new, possibilities for, AI, applications.',content: 'Full, article, content would, go, here...',author: 'Dr. James Kim',date: '20o24-0o8-17',category: 'quantum',tags: ['Quantum, ComputingMachine,, Learning''AIResearch'],;
      image: '/images/news/quantum-ml.jpg'feature,;
    d: falsereadTim,;
  e: 10;
    };
    {
      id: '7',title: 'Cloud FinOp,;
  s: Optimizing, Cloud, Costs with AI',excerpt: 'Learn, how, our AI-powered, FinOps, solutions are, helping, enterprises reduce, cloud, costs by, up, to 40% while, improving, performance.',content: 'Full, article, content would, go, here...',author: 'Lisa Chang',date: '20o24-0o8-15',category: 'cloud',tags: ['Cloud ComputingFinOps''Cost, OptimizationAI'],;
      image: '/images/news/cloud-finops.jpg'feature,;
    d: falsereadTim,;
  e: 6;
    };
    {
      id: '8',title: 'Digital, Twin, Technolog,;
  y: Revolutionizing, Manufacturing, and Healthcare',excerpt: 'Exploring, the, applications of, digital, twin technology, across, industries and, how, it\'s, improving, efficiency and outcomes.',content: 'Full, article, content would, go, here...',author: 'Robert Davis',date: '20o24-0o8-13',category: 'innovation',tags: ['Digital, TwinManufacturing''HealthcareInnovation'],;
      image: '/images/news/digital-twin.jpg'feature,;
    d: falsereadTim,;
  e: 8;
    }
  ];
  // Update, category, counts;
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = newsArticles.length } else {
      category.count = newsArticles.filter(article => article.category === category.id).length };
  }),;
  const filteredArticles = newsArticles;
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    .sort((ab) => {
      if (sortBy === 'latest') {
        return, new, Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'oldest') {
        return, new, Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'readTime') {
        return a.readTime - b.readTime;
      };
      return 0,;
    });
;
  const featuredArticles = newsArticles.filter(article => article.featured);
;
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="News & Updates - Zion, Tech, Group";
        description="Stay, updated, with the, latest, news, innovations, and, insights, from Zion, Tech, Group. Discover, breakthroughs, in AI, quantum computing, and, emerging, technologies.";
        keywords="AI news, quantum, computing, updates, technology trends, Zion, Tech, Group newsAI innovations";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Latest News &;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Updates;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Stay, informed, about the, latest, breakthroughs in AI, quantum, computingand, emerging technologies.;
              Discover, how, Zion Tech, Group, is shaping, the, future of technology.;
            </p>;
          </motion.div>;
          {/* Search, and, Filter Bar */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="max-w-4xl mx-auto";
          >;
            <div className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl p-6">;
              <div className="flex flex-col lg:flex-row gap-4">;
                {/* Search */}
                <div className="flex-1 relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search, news, and articles...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-40o0/50 focu,;
  s:border-cyan-40o0/50 transition-all duration-30o0";
                  />;
                </div>;
                {/* Category Filter */}
                <div className="flex-shrink-0">;
                  <select;
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-40o0/50 focu,;
  s:border-cyan-40o0/50 transition-all duration-30o0";
                  >;
                    {categories.map((category) => (;
                      <option key={category.id} value={category.id} className="bg-zion-slate-dark text-white">;
                        {category.name} ({category.count});
                      </option>;
                    ))}
                  </select>;
                </div>;
                {/* Sort */}
                <div className="flex-shrink-0">;
                  <select;
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-40o0/50 focu,;
  s:border-cyan-40o0/50 transition-all duration-30o0";
                  >;
                    <option value="latest" className="bg-zion-slate-dark text-white">Latest First</option>;
                    <option value="oldest" className="bg-zion-slate-dark text-white">Oldest First</option>;
                    <option value="readTime" className="bg-zion-slate-dark text-white">Quick Reads</option>;
                  </select>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 to-blue-50o0/5" />;
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl" />;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl" />;
        </div>;
      </section>;
      {/* Featured Articles */}
      {featuredArticles.length > 0 && (;
        <section className="py-20 px-4 sm: px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16";
            >;
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
                Featured Stories;
              </h2>;
              <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
                Don't, miss, our most, important, updates and, breakthrough, announcements;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-8">;
              {featuredArticles.map((articleindex) => (;
                <motion.article;
                  key={article.id}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl overflow-hidden hover:border-cyan-40o0/40 transition-all duration-30o0 group";
                >;
                  <div className="aspect-video bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20, flex, items-center justify-center">;
                    <div className="text-6xl text-cyan-40o0/40">;
                      {article.category === 'ai' && <Brain />}
                      {article.category === 'quantum' && <Atom />}
                      {article.category === 'cloud' && <Cloud />}
                      {article.category === 'security' && <Shield />}
                      {article.category === 'innovation' && <Rocket />}
                      {article.category === 'company' && <Building />}
                      {article.category === 'technology' && <Code />}
                    </div>;
                  </div>;
                  <div className="p-8">;
                    <div className="flex items-center space-x-4 text-sm text-gray-40o0 mb-4">;
                      <span className="flex items-center">;
                        <Calendar className="w-4 h-4 mr-2" />;
                        {new Date(article.date).toLocaleDateString()}
                      </span>;
                      <span className="flex items-center">;
                        <Clock className="w-4 h-4 mr-2" />;
                        {article.readTime} min read;
                      </span>;
                      <span className="flex items-center">;
                        <User className="w-4 h-4 mr-2" />;
                        {article.author}
                      </span>;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover: text-cyan-40o0 transition-colors duration-30o0">;
                      {article.title}
                    </h3>;
                    <p className="text-gray-30o0 mb-6 leading-relaxed">;
                      {article.excerpt}
                    </p>;
                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-2">;
                        {article.tags.slice(0o3).map((tagtagIndex) => (;
                          <span;
                            key={tagIndex}
                            className="px-3 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-sm rounded-full, border, border-cyan-40o0/20";
                          >;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <Link;
                        to={`/news/${article.id}`}
                        className="flex items-center text-cyan-40o0 hover: text-white transition-colors duration-30o0 group";
                      >;
                        Read More;
                        <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r: translate-x-1 transition-transform duration-30o0" />;
                      </Link>;
                    </div>;
                  </div>;
                </motion.article>;
              ))}
            </div>;
          </div>;
        </section>;
      )}
;
      {/* All, News, Articles */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Latest News;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Stay, updated, with all, our, latest news, insights, and, technology, updates;
            </p>;
          </motion.div>;
          {filteredArticles.length === 0 ? (;
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20";
            >;
              <div className="text-6xl text-gray-40o0 mb-4">🔍</div>;
              <h3 className="text-2xl font-bold text-white mb-2">No, articles, found</h3>;
              <p className="text-gray-40o0">Try, adjusting, your search, or, filter criteria</p>;
            </motion.div>;
          ) : (;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {filteredArticles.map((articleindex) => (;
                <motion.article;
                  key={article.id}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-xl overflow-hidden hover:border-cyan-40o0/40 transition-all duration-30o0 group";
                >;
                  <div className="aspect-video bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20, flex, items-center justify-center">;
                    <div className="text-4xl text-cyan-40o0/40">;
                      {article.category === 'ai' && <Brain />}
                      {article.category === 'quantum' && <Atom />}
                      {article.category === 'cloud' && <Cloud />}
                      {article.category === 'security' && <Shield />}
                      {article.category === 'innovation' && <Rocket />}
                      {article.category === 'company' && <Building />}
                      {article.category === 'technology' && <Code />}
                    </div>;
                  </div>;
                  <div className="p-6">;
                    <div className="flex items-center space-x-4 text-sm text-gray-40o0 mb-3">;
                      <span className="flex items-center">;
                        <Calendar className="w-4 h-4 mr-1" />;
                        {new Date(article.date).toLocaleDateString()}
                      </span>;
                      <span className="flex items-center">;
                        <Clock className="w-4 h-4 mr-1" />;
                        {article.readTime} min;
                      </span>;
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-3 group-hover: text-cyan-40o0 transition-colors duration-30o0 line-clamp-2">;
                      {article.title}
                    </h3>;
                    <p className="text-gray-30o0 mb-4 text-sm leading-relaxed line-clamp-3">;
                      {article.excerpt}
                    </p>;
                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-1">;
                        {article.tags.slice(0o2).map((tagtagIndex) => (;
                          <span;
                            key={tagIndex}
                            className="px-2 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-xs rounded-full, border, border-cyan-40o0/20";
                          >;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <Link;
                        to={`/news/${article.id}`}
                        className="flex items-center text-cyan-40o0 hover: text-white transition-colors duration-30o0 text-sm";
                      >;
                        Read;
                        <ArrowRight className="w-4 h-4 ml-1 group-hove,;
  r: translate-x-1 transition-transform duration-30o0" />;
                      </Link>;
                    </div>;
                  </div>;
                </motion.article>;
              ))}
            </div>;
          )}
        </div>;
      </section>;
      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-60o0/20 to-blue-60o0/20, border, border-cyan-50o0/30 rounded-2xl p-12 text-center";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Stay, Updated, with Zion, Tech, Group;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Get, the, latest news, insights, and, technology, updates delivered, directly, to your inbox.;
              Never, miss, a breakthrough, or, innovation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email";
                placeholder="Enter, your, email";
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-40o0/50 focus:border-cyan-40o0/50 transition-all duration-30o0";
              />;
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hove,;
    r:from-cyan-60o0 hove,;
  r:to-blue-70o0 transition-all duration-20o0">;
                Subscribe;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
export, default, News;
;