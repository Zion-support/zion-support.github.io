import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Search,;
  MessageCircle,;
  BookOpen,;
  Settings,;
  Shield,;
  Cloud,;
  Zap,;
  Users,;
  ChevronRightChevronDownExternalLink;
} from "lucide-react";
import { SEO } from "../components/SEO";
const helpCategories = [;
  { id: 'getting-started'titl,;
  e: 'Getting Started' };
  { id: 'account'titl,;
  e: 'Account & Billing' };
  { id: 'services'titl,;
  e: 'Services & Features' };
  { id: 'technical'titl,;
  e: 'Technical Support' }{ id: 'security'titl,;
  e: 'Security & Privacy', };
];
const helpSections = [;
  {
    id: 'getting-started',title: 'Getting Started',description: 'Learn, the, basics and, get, up and, running, quickly',icon: BookOpen,articles: [;
      {
        titl,;
    e: 'Welcome, to, Zion Tech Group'description: 'Your, complete, guide to, getting, started with, our, services'ur,;
  l: '/help/getting-started/welcome';
      };
      {
        title: 'First, Steps, Setup'description: 'Quick, setup, guide for, new, users'ur,;
  l: '/help/getting-started/first-steps';
      }{
        title: 'Account Configuration'descriptio,;
    n: 'Configure, your, account settings, and, preferences'ur,;
  l: '/help/getting-started/account-config';
      }
  ,  ];
  };
  {
    id: 'services',title: 'Services & Features',description: 'Explore, our, comprehensive range, of, services',icon: Cloud,articles: [;
      {
        titl,;
    e: 'AI, Services, Overview'description: 'Understanding, our, AI-powered solutions'ur,;
  l: '/help/services/ai-overview';
      };
      {
        title: 'Cloud Infrastructure'descriptio,;
    n: 'Cloud, deployment, and management guides'ur,;
  l: '/help/services/cloud-infrastructure';
      }{
        title: 'Cybersecurity Solutions'descriptio,;
    n: 'Security, features, and best practices'ur,;
  l: '/help/services/cybersecurity';
      }
  ,  ];
  };
  {
    id: 'technical',title: 'Technical Support',description: 'Technical, documentation, and troubleshooting',icon: Settings,articles: [;
      {
        title: 'API Documentation'descriptio,;
    n: 'Complete, API, reference and examples'ur,;
  l: '/help/technical/api-docs';
      };
      {
        title: 'Integration Guides'descriptio,;
    n: 'Step-by-step, integration, tutorials'ur,;
  l: '/help/technical/integrations';
      }{
        title: 'Troubleshooting'descriptio,;
    n: 'Common, issues, and solutions'ur,;
  l: '/help/technical/troubleshooting';
      }
  ,  ];
  };
  {
    id: 'security',title: 'Security & Privacy',description: 'Security, features, and privacy information',icon: Shield,articles: [;
      {
        titl,;
    e: 'Security, Best, Practices'description: 'How, to, keep your, account, secure'ur,;
  l: '/help/security/best-practices';
      };
      {
        title: 'Privacy Policy'descriptio,;
    n: 'Understanding, your, data privacy'ur,;
  l: '/help/security/privacy-policy';
      }{
        title: 'Compliance Information'descriptio,;
    n: 'Security, certifications, and compliance'ur,;
  l: '/help/security/compliance';
      }
  ,  ];
  };
];
const popularQuestions = [;
  {
    question: 'How, do, I get, started, with Zion, Tech, Group services?',answer: 'Getting, started, is easy! Simply, create, an account, choose, your, service planand, follow, our step-by-step, setup, guide. Our, team, is also, available, for personalized, onboarding, assistance.'category: 'getting-started';
  };
  {
    question: 'What, payment, methods do, you, accept?',answer: 'We, accept, all major, credit, cards, PayPaland, bank, transfers for, enterprise, clients. All, payments, are processed, securely, through our, payment, partners.'category: 'account';
  };
  {
    question: 'How, secure, are my, data, and applications?',answer: 'Security, is, our top priority. We, implement, enterprise-grade, security, measures including encryption, multi-factor, authenticationand, regular security, audits, to protect, your, data.'category: 'security';
  },;
  {
    question: 'Do, you, provide 24/7 support?',answer: 'Yes! Our, technical, support team, is, available 24/7, to, help you, with, any questions, or, issues. We, offer, multiple support, channels, including live, chatemailand, phone support.'categor,;
  y: 'technical';
 , };
];
export, default, function HelpCenter() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [expandedSectionssetExpandedSections] = useState(new Set(['getting-started']));
  const toggleSection = (sectionId: string) => {;
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    };
    setExpandedSections(newExpanded);
  },;
  const filteredQuestions = popularQuestions.filter(q => ;
    selectedCategory === 'all' || q.category === selectedCategory;
  );
;
  const filteredSections = helpSections.filter(section =>;
    selectedCategory === 'all' || section.id === selectedCategory;
  );
;
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Help Center - Zion, Tech, Group";
        description="Get, help, and support, for, all Zion, Tech, Group services. Find, answers, to frequently, asked, questions, tutorials, and, technical, documentation.";
        keywords="help center, support, FAQ, documentationtutorialstechnical support";
        canonical="https: //ziontechgroup.com/help";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light" />;
        <div className="absolute inset-0 bg-[url('data:, image/svg+xml%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%20o0%20o60%20o60%22%20xmlns%3D%22http%3A//www.w3.org/20o00/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center";
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-zion-cyan to-blue-40o0 bg-clip-text text-transparent">;
                Help Center;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-8">;
              Find, answers, to your questions, explore tutorials, and, get, the support, you, need to, succeed, with our services.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search, for, help articles, tutorialsor FAQs...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:border-zion-cyan/50 focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan/20";
                />;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Quick, Help, Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Quick Help & Support;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Get, immediate, assistance with, common, questions and, find, the resources, you, need quickly.;
            </p>;
          </motion.div>;
          {/* Support, Options, Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-4 gap-8 mb-16">;
            {[;
              {
                ico,;
  n: MessageCircle,title: 'Live Chat'descriptio,;
    n: 'Get, instant, help from, our, support team'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
              };
              {
                icon: BookOpen,title: 'Documentation'descriptio,;
    n: 'Comprehensive, guides, and tutorials'colo,;
  r: 'from-purple-50o0 to-pink-50o0';
              };
              {
                icon: Users,title: 'Community'descriptio,;
    n: 'Connect, with, other users, and, experts'colo,;
  r: 'from-green-50o0 to-emerald-50o0';
              },;
              {
                icon: Zaptitle: 'Quick Start'descriptio,;
    n: 'Fast, setup, guides for, new, users'colo,;
  r: 'from-orange-50o0 to-red-50o0';
              }
          ,  ].map((optionindex) => (;
              <motion.div;
                key={option.title}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-2xl p-6 text-center hover: bg-white/20 hove,;
  r:border-white/40 transition-all duration-30o0, group, cursor-pointer";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl, flex, items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <option.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>;
                <p className="text-gray-30o0 text-sm">{option.description}</p>;
              </motion.div>;
            ))}
          </div>;
          {/* FAQ Section */};
          <motion.div;
            className="mb-16";
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.6 }}
          >;
            <div className="max-w-4xl mx-auto">;
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently, Asked, Questions</h2>;
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">;
                <button;
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-30o0 ${
                    selectedCategory === 'all';
                      ? 'bg-zion-cyan text-white';
                      : 'bg-white/10 text-zion-slate-light hover: bg-white/20';
                  }`}
                >;
                  All Categories;
                </button>;
                {helpCategories.map(category => (;
                  <button;
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-30o0 ${
                      selectedCategory === category.id;
                        ? 'bg-zion-cyan text-white';
                        : 'bg-white/10 text-zion-slate-light hover: bg-white/20';
                    }`}
                  >;
                    {category.title}
                  </button>;
                ))}
              </div>;
              {/* FAQ Items */}
              <div className="space-y-4">;
                {filteredQuestions.map((itemindex) => (;
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0,;
  y: 20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.6dela,;
  y: 0.1 * index }}
                    className="bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-xl p-6";
                  >;
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>;
                    <p className="text-gray-30o0">{item.answer}</p>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Main Content */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid l,;
  g:grid-cols-3 gap-8">;
            {/* Help Sections */}
            <div className="lg: col-span-2">;
              <motion.div;
                initial={{ opacit,;
    y: 0,;
  x: -20 }}
                animate={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.3 }}
              >;
                <h2 className="text-2xl font-bold text-white mb-6">Help Articles & Tutorials</h2>;
                <div className="space-y-6">;
                  {filteredSections.map((sectionindex) => (;
                    <motion.div;
                      key={section.id}
                      initial={{ opacity: 0,;
  y: 20 }}
                      animate={{ opacity: 1,;
  y: 0 }}
                      transition={{ duration: 0.6dela,;
  y: 0.3 + index * 0.1 }}
                      className="bg-zion-slate-dark/50 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-xl overflow-hidden";
                    >;
                      <button;
                        onClick={() => toggleSection(section.id)}
                        className="w-full p-6 text-left hover: bg-zion-slate-dark/70 transition-colors";
                      >;
                        <div className="flex items-center justify-between">;
                          <div className="flex items-center space-x-4">;
                            <div className="p-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-lg">;
                              <section.icon className="w-6 h-6 text-white" />;
                            </div>;
                            <div>;
                              <h3 className="text-xl font-semibold text-white">{section.title}</h3>;
                              <p className="text-cyan-30o0">{section.description}</p>;
                            </div>;
                          </div>;
                          {expandedSections.has(section.id) ? (;
                            <ChevronDown className="w-5 h-5 text-cyan-40o0" />;
                          ) : (;
                            <ChevronRight className="w-5 h-5 text-cyan-40o0" />;
                          )}
                        </div>;
                      </button>;
                      <AnimatePresence>;
                        {expandedSections.has(section.id) && (;
                          <motion.div;
                            initial={{ opacity: 0heigh,;
  t: 0 }}
                            animate={{ opacity: 1heigh,;
  t: 'auto' }}
                            exit={{ opacity: 0heigh,;
  t: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-cyan-40o0/20";
                          >;
                            <div className="p-6 space-y-4">;
                              {section.articles.map((articlearticleIndex) => (;
                                <motion.div;
                                  key={article.title}
                                  initial={{ opacity: 0,;
  x: -20 }}
                                  animate={{ opacity: 1,;
  x: 0 }}
                                  transition={{ duration: 0.3dela,;
  y: articleIndex * 0.1 }}
                                  className="group";
                                >;
                                  <a;
                                    href={article.url}
                                    className="flex items-center justify-between p-4 rounded-lg hover: bg-white/5 transition-colors";
                                  >;
                                    <div>;
                                      <h4 className="text-lg font-medium text-white group-hove,;
  r:text-cyan-30o0 transition-colors">;
                                        {article.title}
                                      </h4>;
                                      <p className="text-gray-30o0 text-sm">{article.description}</p>;
                                    </div>;
                                    <ExternalLink className="w-4 h-4 text-gray-40o0 group-hover:text-cyan-40o0 transition-colors" />;
                                  </a>;
                                </motion.div>;
                              ))}
                            </div>;
                          </motion.div>;
                        )}
                      </AnimatePresence>;
                    </motion.div>;
                  ))}
                </div>;
              </motion.div>;
            </div>;
            {/* Sidebar */}
            <div className="lg: col-span-1">;
              <motion.div;
                initial={{ opacit,;
    y: 0,;
  x: 20 }}
                animate={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.4 }}
                className="space-y-6";
              >;
                {/* Contact Support */}
                <div className="bg-gradient-to-r from-zion-cyan to-blue-50o0 rounded-2xl p-6 text-white">;
                  <h3 className="text-xl font-bold mb-4">Need, More, Help?</h3>;
                  <p className="text-blue-10o0 mb-6">;
                    Can't, find, what you're, looking, for? Our, support, team is, here, to help.;
                  </p>;
                  <button className="w-full py-3 bg-white text-zion-cyan font-semibold rounded-lg hover:bg-gray-10o0 transition-colors">;
                    Contact Support;
                  </button>;
                </div>;
                {/* Quick Links */}
                <div className="bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-2xl p-6">;
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>;
                  <div className="space-y-3">;
                    {[;
                      { title: 'API Documentation'ur,;
  l: '/docs/api' };
                      { title: 'Status Page'ur,;
  l: '/status' };
                      { title: 'Release Notes'ur,;
  l: '/releases' }{ title: 'Security'ur,;
  l: '/security' }
                  ,  ].map((linkindex) => (;
                      <a;
                        key={index}
                        href={link.url}
                        className="block text-cyan-30o0 hover: text-cyan-20o0 transition-colors";
                      >;
                        {link.title}
                      </a>;
                    ))}
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;