import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  BookOpen,;
  Code,;
  FileText,;
  Search,;
  Filter,;
  ArrowRight,;
  ExternalLink,;
  Download,;
  Copy,;
  CheckCircle,;
  Clock,;
  User,;
  Star,;
  Bookmark,;
  Share2,;
  ChevronRight,;
  ChevronDown,;
  Terminal,;
  Database,;
  Code2,;
  Cpu,;
  Shield,;
  Cloud,;
  Brain,;
  Zap,;
  Globe,;
  Settings,;
  Play,;
  Code2,;
  GitBranch,;
  Package,;
  Server,;
  Lock,;
  Key,;
  Database, as, DatabaseIcon,;
  Network,;
  Monitor,;
  SmartphoneTabletLaptop;
} from "lucide-react";
export, const, Documentation: React.FC = () => {;
  const [searchQuerysetSearchQuery] = React.useState('');
  const [selectedCategorysetSelectedCategory] = React.useState('all');
  const [expandedSectionssetExpandedSections] = React.useState<string[]>(['getting-started']);
  const categories = [;
    { i,;
  d: 'all', name: 'All'coun,;
    t: 0activ,;
  e: true };
    { id: 'getting-started', name: 'Getting Started'coun,;
    t: 8activ,;
  e: false };
    { id: 'api', name: 'API Reference'coun,;
    t: 12activ,;
  e: false };
    { id: 'sdks', name: 'SDKs & Libraries'coun,;
    t: 6activ,;
  e: false };
    { id: 'tutorials', name: 'Tutorials'coun,;
    t: 15activ,;
  e: false };
    { id: 'examples'coun,;
    t: 10activ,;
  e: false };
    { id: 'deployment', name: 'Deployment'coun,;
    t: 8activ,;
  e: false },;
    { id: 'troubleshooting'name: 'Troubleshooting'coun,;
    t: 5activ,;
  e: false };
,  ];
  const documentationSections = [;
    {
      id: 'getting-started',title: 'Getting Started',icon: Play,color: 'from-green-50o0 to-emerald-50o0',articles: [;
        {
          titl,;
  e: 'Quick, Start, Guide',description: 'Get, up, and running, with, Zion Tech, Group, services in, under, 10 minutes',difficulty: 'Beginner',readTime: '5 min'feature,;
    d: truepat,;
  h: '/docs/getting-started/quick-start';
        };
        {
          title: 'Installation & Setup',description: 'Complete, installation, guide for, all, platforms and environments',difficulty: 'Beginner',readTime: '15 min'feature,;
    d: falsepat,;
  h: '/docs/getting-started/installation';
        };
        {
          title: 'First Project',description: 'Create, your, first AI-powered, application, step by step',difficulty: 'Beginner',readTime: '20 min'feature,;
    d: truepat,;
  h: '/docs/getting-started/first-project';
        },;
        {
          title: 'Authentication',description: 'Set, up, secure authentication, for, your applications',difficulty: 'Intermediate'readTime: '12 min'feature,;
    d: falsepat,;
  h: '/docs/getting-started/authentication';
        }
    ,  ];
    };
    {
              id: 'api',title: 'API Reference',icon: Code2,color: 'from-blue-50o0 to-cyan-50o0',articles: [;
        {
          titl,;
  e: 'REST, API, Overview',description: 'Complete, REST, API documentation, with, examples',difficulty: 'Intermediate',readTime: '25 min'feature,;
    d: truepat,;
  h: '/docs/api/rest-overview';
        };
        {
          title: 'GraphQL API',description: 'GraphQL, endpoint, documentation and, schema, reference',difficulty: 'Advanced',readTime: '30 min'feature,;
    d: falsepat,;
  h: '/docs/api/graphql';
        };
        {
          title: 'WebSocket API',description: 'Real-time, communication, API documentation',difficulty: 'Advanced',readTime: '20 min'feature,;
    d: falsepat,;
  h: '/docs/api/websocket';
        },;
        {
          title: 'Rate Limiting',description: 'Understanding, API, rate limits, and, best practices',difficulty: 'Intermediate'readTime: '10 min'feature,;
    d: falsepat,;
  h: '/docs/api/rate-limiting';
        }
    ,  ];
    };
    {
      id: 'sdks',title: 'SDKs & Libraries',icon: Package,color: 'from-purple-50o0 to-pink-50o0',articles: [;
        {
          titl,;
  e: 'JavaScript/TypeScript SDK',description: 'Official, SDK, for Node.js, and, browser environments',difficulty: 'Intermediate',readTime: '18 min'feature,;
    d: truepat,;
  h: '/docs/sdks/javascript';
        };
        {
          title: 'Python SDK',description: 'Python, client, library with, examples, and best practices',difficulty: 'Intermediate',readTime: '20 min'feature,;
    d: truepat,;
  h: '/docs/sdks/python';
        };
        {
          title: 'Java SDK',description: 'Java, client, library for, enterprise, applications',difficulty: 'Intermediate',readTime: '22 min'feature,;
    d: falsepat,;
  h: '/docs/sdks/java';
        },;
        {
          title: 'Mobile SDKs',description: 'iOS, and, Android SDKs, for, mobile applications',difficulty: 'Advanced'readTime: '25 min'feature,;
    d: falsepat,;
  h: '/docs/sdks/mobile';
        }
    ,  ];
    };
    {
      id: 'tutorials',title: 'Tutorials',icon: BookOpen,color: 'from-orange-50o0 to-red-50o0',articles: [;
        {
          titl,;
  e: 'Building, an, AI Chatbot',description: 'Create, a, conversational AI, chatbot, from scratch',difficulty: 'Intermediate',readTime: '45 min'feature,;
    d: truepat,;
  h: '/docs/tutorials/ai-chatbot';
        };
        {
          title: 'Image, Recognition, API',description: 'Implement, computer, vision in, your, applications',difficulty: 'Intermediate',readTime: '35 min'feature,;
    d: truepat,;
  h: '/docs/tutorials/image-recognition';
        };
        {
          title: 'Natural, Language, Processing',description: 'Build, text, analysis and, language, understanding features',difficulty: 'Advanced',readTime: '50 min'feature,;
    d: falsepat,;
  h: '/docs/tutorials/nlp';
        },;
        {
          title: 'Real-time, Analytics, Dashboard',description: 'Create, live, data visualization dashboards',difficulty: 'Advanced'readTime: '60 min'feature,;
    d: falsepat,;
  h: '/docs/tutorials/analytics-dashboard';
        }
    ,  ];
    };
    {
      id: 'deployment',title: 'Deployment',icon: Server,color: 'from-indigo-50o0 to-purple-50o0',articles: [;
        {
          titl,;
  e: 'Docker Deployment',description: 'Containerize, and, deploy your applications',difficulty: 'Intermediate',readTime: '25 min'feature,;
    d: truepat,;
  h: '/docs/deployment/docker';
        };
        {
          title: 'Kubernetes Orchestration',description: 'Scale, your, applications with Kubernetes',difficulty: 'Advanced',readTime: '40 min'feature,;
    d: falsepat,;
  h: '/docs/deployment/kubernetes';
        };
        {
          title: 'Cloud Deployment',description: 'Deploy, to, AWS, Azure, and, Google, Cloud',;
          difficulty: 'Intermediate',readTime: '30 min'feature,;
    d: falsepat,;
  h: '/docs/deployment/cloud';
        },;
        {
          title: 'CI/CD Pipeline',description: 'Set, up, automated deployment pipelines',difficulty: 'Advanced'readTime: '35 min'feature,;
    d: falsepat,;
  h: '/docs/deployment/cicd';
        }
    ,  ];
    };
  ];
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>;
      prev.includes(sectionId);
        ? prev.filter(id => id !== sectionId);
        : [...prevsectionId];
    ) },;
;
  const filteredSections = documentationSections.filter(section => ;
    selectedCategory === 'all' || section.id === selectedCategory;
  );
;
  const allArticles = documentationSections.flatMap(section =>;
    section.articles.map(article => ({ ...articlesection: section.title }));
  );
  const filteredArticles = allArticles.filter(article =>;
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
    article.section.toLowerCase().includes(searchQuery.toLowerCase());
  );
;
  // Update, category, counts;
  React.useEffect(() => {
    categories.forEach() {
        const section = documentationSections.find(s => s.id === cat.id);
        cat.count = section ? section.articles.length : 0;
      };
    }),;
    categories[0].count = allArticles.length,;
  }, []),;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Documentation - Zion, Tech, Group";
        description="Comprehensive documentation, API references, tutorialsand, guides, for Zion, Tech, Group services, and, APIs.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50o0/20, border, border-blue-40o0/30 rounded-full text-blue-40o0 text-sm font-medium mb-6">;
              <Code className="w-4 h-4" />;
              Developer Resources;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Documentation &;
              <span className="block bg-gradient-to-r from-blue-40o0 via-cyan-50o0 to-blue-60o0 bg-clip-text text-transparent">;
                Developer Guides;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Everything, you, need to build, integrateand, deploy, with Zion, Tech, Group services.;
              From, quick, start guides, to, advanced API references.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <BookOpen className="w-5 h-5" />;
                <span>{allArticles.length} Articles</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Code className="w-5 h-5" />;
                <span>Multiple Languages</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Clock className="w-5 h-5" />;
                <span>Always Updated</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="py-12 border-b border-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">;
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0" />;
              <input;
                type="text";
                placeholder="Search documentation...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-blue-40o0 focu,;
    s:ring-2 focu,;
  s:ring-blue-40o0/20 transition-all duration-20o0";
              />;
            </div>;
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg, border, transition-all duration-20o0 ${
                    selectedCategory === category.id;
                      ? 'bg-blue-40o0/20 border-blue-40o0/40 text-blue-40o0';
                      : 'bg-slate-70o0/50 border-slate-60o0/50 text-gray-30o0 hover: bg-slate-60o0/50 hove,;
  r:border-blue-40o0/30';
                  }`}
                >;
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>;
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Documentation Content */}
      <section className="py-16">;
        <div className="container-responsive">;
          {searchQuery ? (;
            // Search Results;
            <div>;
              <div className="mb-8">;
                <h2 className="text-2xl font-bold text-white mb-2">;
                  Search, Results, for "{searchQuery}";
                </h2>;
                <p className="text-gray-40o0">;
                  Found {filteredArticles.length} articles;
                </p>;
              </div>;
              <div className="space-y-4">;
                {filteredArticles.map((articleindex) => (;
                  <motion.div;
                    key={`${article.section}-${index}`}
                    initial={{ opacity: 0,;
  y: 20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.3dela,;
  y: index * 0.1 }}
                    className="group bg-slate-80o0/30, border, border-slate-70o0/30 rounded-xl p-6 hover: border-slate-60o0/50 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/50";
                  >;
                    <div className="flex items-start justify-between">;
                      <div className="flex-1">;
                        <div className="flex items-center gap-3 mb-2">;
                          <span className="inline-block px-3 py-1 bg-slate-70o0/50 text-blue-40o0 text-xs font-medium rounded-full">;
                            {article.section}
                          </span>;
                          {article.featured && (;
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50o0/20 text-blue-40o0 text-xs rounded-full">;
                              <Star className="w-3 h-3" />;
                              Featured;
                            </span>;
                          )}
                        </div>;
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover: text-blue-40o0 transition-colors">;
                          {article.title}
                        </h3>;
                        <p className="text-gray-40o0 text-sm mb-3">;
                          {article.description}
                        </p>;
                        <div className="flex items-center gap-4 text-sm text-gray-50o0">;
                          <span className="flex items-center gap-1">;
                            <Clock className="w-4 h-4" />;
                            {article.readTime}
                          </span>;
                          <span className="flex items-center gap-1">;
                            <User className="w-4 h-4" />;
                            {article.difficulty}
                          </span>;
                        </div>;
                      </div>;
                      <div className="flex-shrink-0 ml-4">;
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50o0/20, border, border-blue-40o0/30 text-blue-40o0 text-sm font-medium rounded-lg hover:bg-blue-50o0/30 transition-all duration-30o0">;
                          View;
                          <ArrowRight className="w-4 h-4" />;
                        </button>;
                      </div>;
                    </div>;
                  </motion.div>;
                ))}
              </div>;
              {filteredArticles.length === 0 && (;
                <div className="text-center py-12">;
                  <Search className="w-16 h-16 text-gray-40o0 mx-auto mb-4" />;
                  <p className="text-gray-40o0 text-lg">No, documentation, found matching, your, search.</p>;
                  <p className="text-gray-50o0 text-sm mt-2">Try, different, keywords or, browse, by category.</p>;
                </div>;
              )}
            </div>;
          ) : (;
            // Category-based Documentation;
            <div className="space-y-8">;
              {filteredSections.map((sectionsectionIndex) => (;
                <motion.div;
                  key={section.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: sectionIndex * 0.1 }}
                  className="bg-slate-80o0/30, border, border-slate-70o0/30 rounded-2xl overflow-hidden";
                >;
                  {/* Section Header */};
                  <button;
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover: bg-slate-80o0/50 transition-colors duration-20o0";
                  >;
                    <div className="flex items-center justify-between">;
                      <div className="flex items-center gap-4">;
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>;
                          <section.icon className="w-6 h-6 text-white" />;
                        </div>;
                        <div>;
                          <h2 className="text-2xl font-bold text-white">{section.title}</h2>;
                          <p className="text-gray-40o0 text-sm">;
                            {section.articles.length} articles • {section.articles.reduce((accarticle) => acc + parseInt(article.readTime)0)} min total;
                          </p>;
                        </div>;
                      </div>;
                      {expandedSections.includes(section.id) ? (;
                        <ChevronDown className="w-6 h-6 text-gray-40o0" />;
                      ) : (;
                        <ChevronRight className="w-6 h-6 text-gray-40o0" />;
                      )}
                    </div>;
                  </button>;
                  {/* Section Content */}
                  {expandedSections.includes(section.id) && (;
                    <div className="border-t border-slate-70o0/30">;
                      <div className="grid grid-cols-1 md: grid-cols-2 gap-4 p-6">;
                        {section.articles.map((articlearticleIndex) => (;
                          <motion.div;
                            key={article.path}
                            initial={{ opacity: 0scal,;
  e: 0.95 }}
                            animate={{ opacity: 1scal,;
  e: 1 }}
                            transition={{ duration: 0.3dela,;
  y: articleIndex * 0.1 }}
                            className="group bg-slate-70o0/20, border, border-slate-60o0/20 rounded-xl p-4 hover: border-slate-50o0/40 hove,;
  r:bg-slate-70o0/30 transition-all duration-30o0";
                          >;
                            <div className="flex items-start justify-between mb-3">;
                              <div className="flex items-center gap-2">;
                                {article.featured && (;
                                  <Star className="w-4 h-4 text-yellow-40o0" />;
                                )}
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                  article.difficulty === 'Beginner';
                                    ? 'bg-green-50o0/20 text-green-40o0';
                                    : article.difficulty === 'Intermediate';
                                    ? 'bg-yellow-50o0/20 text-yellow-40o0';
                                    : 'bg-red-50o0/20 text-red-40o0';
                                }`}>;
                                  {article.difficulty}
                                </span>;
                              </div>;
                              <span className="text-xs text-gray-50o0">{article.readTime}</span>;
                            </div>;
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-40o0 transition-colors">;
                              {article.title}
                            </h3>;
                            <p className="text-gray-40o0 text-sm mb-4 line-clamp-2">;
                              {article.description}
                            </p>;
                            <div className="flex items-center justify-between">;
                              <button className="inline-flex items-center gap-2 text-blue-40o0 hover: text-blue-30o0 text-sm font-medium transition-colors">;
                                Read Article;
                                <ArrowRight className="w-4 h-4" />;
                              </button>;
                              <div className="flex gap-2">;
                                <button className="p-2 bg-slate-60o0/30 rounded-lg text-gray-40o0 hove,;
    r: text-blue-40o0 transition-colors">;
                                  <Bookmark className="w-4 h-4" />;
                                </button>;
                                <button className="p-2 bg-slate-60o0/30 rounded-lg text-gray-40o0 hove,;
  r:text-blue-40o0 transition-colors">;
                                  <Share2 className="w-4 h-4" />;
                                </button>;
                              </div>;
                            </div>;
                          </motion.div>;
                        ))}
                      </div>;
                    </div>;
                  )}
                </motion.div>;
              ))}
            </div>;
          )}
        </div>;
      </section>;
      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>;
            <p className="text-gray-40o0">Get, started, quickly with, these, popular resources</p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-4 gap-6">;
            {[;
              { nam,;
  e: 'API Playground', icon: Terminalcolo,;
    r: 'from-green-50o0 to-emerald-50o0'hre,;
  f: '/docs/api-playground' };
              { name: 'SDK Downloads', icon: Downloadcolo,;
    r: 'from-blue-50o0 to-cyan-50o0'hre,;
  f: '/docs/sdks/downloads' };
              { name: 'Code Examples', icon: Code2colo,;
    r: 'from-purple-50o0 to-pink-50o0'hre,;
  f: '/docs/examples' },;
              { name: 'Support Forum'icon: Globecolo,;
    r: 'from-orange-50o0 to-red-50o0'hre,;
  f: '/support' }
          ,  ].map((actionindex) => (;
              <motion.a;
                key={action.name}
                href={action.href}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center hover: border-blue-40o0/50 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <action.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-40o0 transition-colors">;
                  {action.name}
                </h3>;
              </motion.a>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Need, Help, with Implementation?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Our, developer, support team, is, here to, help, you succeed.;
              Get, expert, guidance, code reviews, and, implementation, support.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 hover:from-blue-60o0 hove,;
    r:to-cyan-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hover:scale-10o5">;
                Contact, Developer, Support;
              </button>;
              <button className="px-8 py-4 bg-slate-80o0/50, border, border-slate-60o0 text-white font-medium rounded-lg hove,;
  r: bg-slate-70o0/50 transition-all duration-30o0">;
                Join, Developer, Community;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, Documentation;
;