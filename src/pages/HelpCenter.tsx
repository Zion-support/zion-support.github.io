import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import Link from "next/link";
export default function HelpCenter() {
    const helpCategories = [
        {
            title: "Getting Started",
            description: "Learn the basics of using Zion's platform",
            icon: BookOpen,
            color: "from-zion-cyan to-zion-blue",
            link: "/help/getting-started"
        },
        {
            title: "Account & Profile",
            description: "Manage your account settings and profile",
            icon: Settings,
            color: "from-zion-purple to-zion-purple-dark",
            link: "/help/account-profile"
        },
        {
            title: "Marketplace",
            description: "How to buy, sell, and navigate the marketplace",
            icon: Zap,
            color: "from-zion-green to-zion-cyan",
            link: "/help/marketplace"
        },
        {
            title: "Talent & Hiring",
            description: "Find talent and get hired on the platform",
            icon: Users,
            color: "from-zion-orange to-zion-red",
            link: "/help/talent-hiring"
        },
        {
            title: "Payments & Billing",
            description: "Understanding payment methods and billing",
            icon: Shield,
            color: "from-zion-blue to-zion-purple",
            link: "/help/payments-billing"
        },
        {
            title: "API & Integration",
            description: "Developer resources and API documentation",
            icon: FileText,
            color: "from-zion-purple to-zion-cyan",
            link: "/help/api-integration"
        }
    ];
    const quickActions = [
        {
            title: "Contact Support",
            description: "Get help from our support team",
            icon: MessageCircle,
            action: "mailto:support@ziontechgroup.com",
            external: true
        },
        {
            title: "Schedule a Call",
            description: "Book a consultation with our experts",
            icon: Phone,
            action: "/contact",
            external: false
        },
        {
            title: "Live Chat",
            description: "Chat with us in real-time",
            icon: MessageCircle,
            action: "#",
            external: false
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Help Center - Zion Tech Group Support", description: "Get help and support for using Zion's AI and technology marketplace platform.", keywords: "help center, support, Zion Tech Group, customer service, FAQ, documentation", canonical: "https://ziontechgroup.com/help" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Help Center" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Find answers, get support, and learn how to make the most of Zion's platform" })] }), _jsx("div", { className: "max-w-2xl mx-auto mb-16", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" }), _jsx("input", { type: "text", placeholder: "Search for help articles, guides, and support...", className: "w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple" })] }) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Quick Actions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: quickActions.map((action, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(action.icon, { className: "w-8 h-8 text-zion-cyan mr-3" }), _jsx("h3", { className: "text-xl font-semibold text-white", children: action.title })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: action.description }), action.external ? (_jsx("a", { href: action.action, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Get Started \u2192" })) : (_jsx(Link, { to: action.action, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Get Started \u2192" }))] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Help Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: helpCategories.map((category, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-all hover:shadow-lg", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: `p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`, children: _jsx(category.icon, { className: "w-6 h-6 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold text-white", children: category.title })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: category.description }), _jsx(Link, { to: category.link, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Learn More \u2192" })] }, index))) })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Still need help?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", asChild: true, children: _jsx(Link, { to: "/contact", children: "Contact Support" }) }), _jsx(Button, { variant: "outline", className: "border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white", asChild: true, children: _jsx(Link, { to: "/faq", children: "View FAQ" }) })] })] })] }) }), _jsx(Footer, {})] }));
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function HelpCenter() {};
  return null;
}
  };

  const helpCategories = [
    {};
        { title: 'How to get started with Zion Tech Group services', href: '/help/getting-started', category: 'Getting Started' },
        { title: 'Account setup and configuration guide', href: '/help/account-setup', category: 'Getting Started' },
        { title: 'First steps after signing up', href: '/help/first-steps', category: 'Getting Started' },
        { title: 'Understanding your dashboard', href: '/help/dashboard-guide', category: 'Getting Started' }
      ]
    },
    {};
        { title: 'AI Business Intelligence setup guide', href: '/help/ai-business-intelligence', category: 'AI Services' },
        { title: 'Configuring AI Sales Copilot', href: '/help/ai-sales-copilot', category: 'AI Services' },
        { title: 'Setting up AI Customer Support', href: '/help/ai-customer-support', category: 'AI Services' },
        { title: 'AI Content Generation best practices', href: '/help/ai-content-generation', category: 'AI Services' },
        { title: 'AI Project Management configuration', href: '/help/ai-project-management', category: 'AI Services' }
      ]
    },
    {};
        { title: 'Cloud DevOps setup and configuration', href: '/help/cloud-devops', category: 'Cloud & DevOps' },
        { title: 'FinOps optimization strategies', href: '/help/finops-optimization', category: 'Cloud & DevOps' },
        { title: 'Edge computing platform setup', href: '/help/edge-computing', category: 'Cloud & DevOps' },
        { title: 'DevOps best practices and workflows', href: '/help/devops-best-practices', category: 'Cloud & DevOps' }
      ]
    },
    {};
        { title: 'AI Compliance Assistant setup', href: '/help/ai-compliance-assistant', category: 'Cybersecurity' },
        { title: 'Zero Trust Architecture implementation', href: '/help/zero-trust-architecture', category: 'Cybersecurity' },
        { title: 'Threat detection configuration', href: '/help/threat-detection', category: 'Cybersecurity' },
        { title: 'Security best practices', href: '/help/security-best-practices', category: 'Cybersecurity' }
      ]
    },
    {};
        { title: 'Digital Twin platform setup', href: '/help/digital-twin', category: 'Digital Solutions' },
        { title: 'IT Infrastructure configuration', href: '/help/it-infrastructure', category: 'Digital Solutions' },
        { title: 'Data Analytics implementation', href: '/help/data-analytics', category: 'Digital Solutions' },
        { title: 'IoT Edge computing setup', href: '/help/iot-edge', category: 'Digital Solutions' }
      ]
    },
    {};
        { title: 'AI Lead Scoring configuration', href: '/help/ai-lead-scoring', category: 'Micro SaaS Solutions' },
        { title: 'Website AI Chatbot setup', href: '/help/website-ai-chatbot', category: 'Micro SaaS Solutions' },
        { title: 'RAG Search platform configuration', href: '/help/rag-search', category: 'Micro SaaS Solutions' },
        { title: 'MLOps Pipeline setup', href: '/help/mlops-pipeline', category: 'Micro SaaS Solutions' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to get started with Zion Tech Group services', href: '/help/getting-started', views: '2.5k' },
    { title: 'AI Business Intelligence setup guide', href: '/help/ai-business-intelligence', views: '1.8k' },
    { title: 'Cloud DevOps configuration best practices', href: '/help/cloud-devops', views: '1.6k' },
    { title: 'Security and compliance setup guide', href: '/help/security-compliance', views: '1.4k' },
    { title: 'Troubleshooting common issues', href: '/help/troubleshooting', views: '1.2k' }
  ];

  const supportChannels = [
    {};
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div>Broken JSX</div>
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, get setup guides, and access comprehensive support for all our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-lg rounded-xl"
                />
              </div>
              {};
                  Found {filteredArticles.length} articles matching "{searchQuery}"
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div>Broken JSX</div>
          >
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help You?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from multiple support channels to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {};
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-cyan-400">
                    <span className="font-semibold">Availability:</span> {channel.availability}
                  </div>
                  <div className="text-slate-300">
                    <span className="font-semibold">Response:</span> {channel.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div>Broken JSX</div>
          >
            <h2 className="text-4xl font-bold text-white mb-4">Popular Help Articles</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most viewed articles and guides to help you get started quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {};
                <Link to={article.href} className="block">
                  <div className="bg-slate-800 rounded-xl p-6 h-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm text-slate-400">
                        {article.views} views
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div>Broken JSX</div>
          >
            <h2 className="text-4xl font-bold text-white mb-4">Help Categories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse help articles organized by service category and topic
            </p>
          </motion.div>

          <div className="space-y-6">
            {};
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <p className="text-slate-300 text-sm">{category.description}</p>
                    </div>
                  </div>
                  {};
                  )}
                </button>
                
                {};
                                {article.title}
                              </h4>
                              <p className="text-sm text-slate-400">{article.category}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div>Broken JSX</div>
          >
            <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <div>Broken JSX</div>
              >
                {contactInfo.phone}
              </a>
              <p className="text-slate-300 text-sm mt-2">{contactInfo.hours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <div>Broken JSX</div>
              >
                {contactInfo.email}
              </a>
              <p className="text-slate-300 text-sm mt-2">Response within 4 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <div>Broken JSX</div>
              >
                {contactInfo.website.replace('https://', '')}
              </a>
              <p className="text-slate-300 text-sm mt-2">Visit our main site</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div>Broken JSX</div>
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Can't find what you're looking for? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div>Broken JSX</div>
              >
                Contact Support
              </Link>
              <div>Broken JSX</div>
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
  ];

  const popularArticles = [;
    'How to get started with AI services',;
    'Understanding our pricing structure',;
    'Finding the right talent for your project',;
    'Security best practices',;
    'API integration guide',;
    'Troubleshooting common issues';
  ];

  const contactMethods = [;
    {};
},;
    {};
},;
    {};
}
  ];
;
interface HelpSection {;
  id: string;
  title: string;
  icon: unknown;
  description: string;
  articles: Array<{;
    title: string;
    description: string;
    path?: string;
    external?: boolean;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    readTime: string;
  }>;
};
;
  const filteredCategories = helpCategories.filter(category =>;
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
    category.articles.some(article => ;
      article.title.toLowerCase().includes(searchQuery.toLowerCase());
    );
  );

  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">;
      {/* Hero Section */}
      <section className="relative overflow-hidden">;
        <div className="container mx-auto px-4 py-20">;
          <div>Broken JSX</div>
            className="text-center max-w-4xl mx-auto">;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full mb-8">;
              <BookOpen className="w-10 h-10 text-white" />;
            </div>;
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">;
              Help Center;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Find answers to your questions, learn how to use our platform, and get the support you need ;
              to make the most of Zion Tech Group's services.;
            </p>;

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
              <div>Broken JSX</div>
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
              />;
            </div>;
          </motion.div>;
        </div>;

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">;
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>;
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-blue rounded-full"></div>;
        </div>;
      </section>;

      {/* Help Categories */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Browse Help Categories;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Find organized help content covering all aspects of our platform and services.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">;
            {};
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-zion-slate-dark/70 transition-colors duration-300">;
                  <div className="flex items-center space-x-4">;
                    <div className="text-zion-cyan">{category.icon}</div>;
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>;
                  </div>;
                  <h3 className="text - white font - semibold text - lg mb - 2 text - center">{category.title}</h3>;
                  <p className="text - zion - slate - light text - sm mb - 4 text - center">{category.description}</p>;
                  <div role="button" className="flex items - center justify - center text - zion - cyan group - hover:text - zion - cyan - light transition - colors">;
                    <span className="text - sm font - medium">{category.articleCount} articles</span>;
                    <ArrowRight className="h - 4 w - 4 ml - 2 group - hover:translate - x-1 transition - transform duration - 300"       />;
                  </div>;
                </Link>;
              </motion.div>) ) };
          </div>;
        </motion.div>;
;
        {/* Support Options */};
        <motion.div;
          className="mb - 16";
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6, delay: 0.4 }};
;
          <h2 className="text - 2xl font - bold text - white mb - 8 text - center">Get Support</h2>;
          <div role="button" className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
            {supportOptions.map ( (option, index) => (<motion.div;
                key={option.title};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }};
;
                <Link;
                  to={option.path};
                  className="block bg - white / 5 backdrop - blur - xl border border - zion - cyan / 20 rounded - 2xl p - 6 hover:bg - white / 10 hover:border - zion - cyan / 40 transition - all duration - 300 text - center group";
;
                  <div role="button" className={`w - 16 h - 16 bg - gradient - to - br ${option.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4 group - hover:scale - 110 transition - transform duration - 300`}>;
                    <option.icon className="h - 8 w - 8 text - white"       />;
                  </div>;
                  <h3 className="text - white font - semibold text - lg mb - 2">{option.title}</h3>;
                  <p className="text - zion - slate - light text - sm mb - 4">{option.description}</p>;
                  <div role="button" className="inline - flex items - center bg - gradient - to - r from - zion - cyan to - zion - purple text - white px - 4 py - 2 rounded - lg text - sm font - medium group - hover:from - zion - cyan - dark group - hover:to - zion - purple - dark transition - all duration - 300">;
                    {option.action};
                  </div>;
                </Link>;
              </motion.div>) ) };
          </div>;
        </motion.div>;
;
        {/* FAQ Section */};
        <motion.div;
          className="mb - 16";
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6, delay: 0.6 }};
;
          <div role="button" className="max - w-4xl mx - auto">;
            <h2 className="text - 2xl font - bold text - white mb - 8 text - center">Frequently Asked Questions</h2>;
;
            {/* Category Filter */};
            <div role="button" className="flex flex - wrap justify - center gap - 3 mb - 8">;
              <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setSelectedCategory ('all') };
                className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 300 ${;
                  selectedCategory === 'all';
                    ? 'bg - zion - cyan text - white';
                    : 'bg - white / 10 text - zion - slate - light hover:bg - white / 20';
                }`};
;
                All Categories;
              </button>;
              {helpCategories.map (category => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={category.id};
                  onClick={ () => setSelectedCategory (category.id) };
                  className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 300 ${;
                    selectedCategory === category.id;
                      ? 'bg - zion - cyan text - white';
                      : 'bg - white / 10 text - zion - slate - light hover:bg - white / 20';
                  }`};
;
                  {category.title};
                </button>) ) };
            </div>;
          </motion.div>;
        </div>;
      </div>;
;
      {/* Main Content */};
      <div role="button" className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">;
        <div role="button" className="grid lg:grid - cols - 3 gap - 8">;
          {/* Help Sections */};
          <div role="button" className="lg:col - span - 2">;
            <motion.div;
              initial={{ opacity: 0, x: -20 }};
              animate={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.6, delay: 0.3 }};
            >;
              <h2 className="text - 2xl font - bold text - white mb - 6">Help Articles & Tutorials</h2>;
              ;
              <div role="button" className="space - y-6">;
                {helpSections.map ( (section, index) => (<motion.div;
                    key={section.id};
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }};
                    className="bg - zion - slate - dark / 50 backdrop - blur - sm border border - cyan - 400 / 20 rounded - xl overflow - hidden";
                  >;
                    <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => toggleSection (section.id) };
                      className="w - full p - 6 text - left hover:bg - zion - slate - dark / 70 transition - colors";
                    >;
                      <div role="button" className="flex items - center justify - between">;
                        <div role="button" className="flex items - center space - x-4">;
                          <div role="button" className="p - 3 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - lg">;
                            <section.icon className="w - 6 h - 6 text - white"       />;
                          </div>;
                          <div>;
                            <h3 className="text - xl font - semibold text - white">{section.title}</h3>;
                            <p className="text - cyan - 300">{section.description}</p>;
                          </div>;
                        </div>;
                        {expandedSections.has (section.id) ? (<ChevronDown className="w - 5 h - 5 text - cyan - 400"       />) : (<ChevronRight className="w - 5 h - 5 text - cyan - 400"       />) };
                      </div>;
                    </button>;
;
                    <AnimatePresence>;
                      {expandedSections.has (section.id) && (<motion.div;
                          initial={{ opacity: 0, height: 0 }};
                          animate={{ opacity: 1, height: 'auto' }};
                          exit={{ opacity: 0, height: 0 }};
                          transition={{ duration: 0.3 }};
                          className="border - t border - cyan - 400 / 20";
                        >;
                          <div role="button" className="p - 6 space - y-4">;
                            {section.articles.map ( (article, articleIndex) => (<motion.div;
                                key={article.title};
                                initial={{ opacity: 0, x: -20 }};
                                animate={{ opacity: 1, x: 0 }};
                                transition={{ duration: 0.3, delay: articleIndex * 0.1 }};
                                className="group";
                              >;
                                {article.path ? (<Link;
                                    to={article.path};
                                    className="block p - 4 bg - zion - slate - dark / 30 hover:bg - zion - slate - dark / 50 border border - cyan - 400 / 10 hover:border - cyan - 400 / 30 rounded - lg transition - all duration - 300";
                                  >;
                                    <div role="button" className="flex items - start justify - between">;
                                      <div role="button" className="flex - 1">;
                                        <h4 className="font - semibold text - white group - hover:text - cyan - 300 transition - colors">;
                                          {article.title};
                                        </h4>;
                                        <p className="text - gray - 400 mt - 1">{article.description}</p>;
                                        <div role="button" className="flex items - center space - x-4 mt - 3">;
                                          <span className={`px - 2 py - 1 rounded - full text - xs font - medium ${;
                                            article.difficulty === 'Beginner' ? 'bg - green - 500 / 20 text - green - 400' :;
                                            article.difficulty === 'Intermediate' ? 'bg - yellow - 500 / 20 text - yellow - 400' :;
                                            'bg - red - 500 / 20 text - red - 400';
                                          }`}>;
                                            {article.difficulty};
                                          </span>;
                                          <span className="text - gray - 500 text - sm flex items - center">;
                                            <Clock className="w - 4 h - 4 mr - 1"       />;
                                            {article.readTime};
                                          </span>;
                                        </div>;
                                      </div>;
                                      <ChevronRight className="w - 5 h - 5 text - cyan - 400 group - hover:translate - x-1 transition - transform"       />;
                                    </div>;
                                  </Link>) : (<div role="button" className="p - 4 bg - zion - slate - dark / 30 border border - cyan - 400 / 10 rounded - lg">;
                                    <h4 className="font - semibold text - white">{article.title}</h4>;
                                    <p className="text - gray - 400 mt - 1">{article.description}</p>;
                                    <div role="button" className="flex items - center space - x-4 mt - 3">;
                                      <span className={`px - 2 py - 1 rounded - full text - xs font - medium ${;
                                        article.difficulty === 'Beginner' ? 'bg - green - 500 / 20 text - green - 400' :;
                                        article.difficulty === 'Intermediate' ? 'bg - yellow - 500 / 20 text - yellow - 400' :;
                                        'bg - red - 500 / 20 text - red - 400';
                                      }`}>;
                                        {article.difficulty};
                                      </span>;
                                      <span className="text - gray - 500 text - sm flex items - center">;
                                        <Clock className="w - 4 h - 4 mr - 1"       />;
                                        {article.readTime};
                                      </span>;
                                    </div>;
                                  </div>) };
                              </motion.div>) ) };
                          </div>;
                        </motion.div>) };
                    </AnimatePresence>;
                  </motion.div>) ) };
              </div>;
            </motion.div>;
          </div>;
;
        {/* Contact Support */};
        <motion.div;
          className="text - center";
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6, delay: 0.7 }};
          className="mt - 16";
        >;
          <h2 className="text - 2xl font - bold text - white mb - 6">Frequently Asked Questions</h2>;
          ;
          <div role="button" className="grid gap - 4">;
            {filteredFAQ.map ( (faq, index) => (<motion.div;
                key={faq.question};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }};
                className="bg - zion - slate - dark / 50 backdrop - blur - sm border border - cyan - 400 / 20 rounded - xl p - 6";
              >;
                <div role="button" className="flex items - start space - x-4">;
                  <div role="button" className="p - 2 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - lg">;
                    <HelpCircle className="w - 5 h - 5 text - cyan - 400"       />;
                  </div>;
                  <div role="button" className="flex - 1">;
                    <h3 className="text - lg font - semibold text - white mb - 2">{faq.question}</h3>;
                    <p className="text - gray - 300">{faq.answer}</p>;
                    <span className="inline - block mt - 3 px - 3 py - 1 bg - cyan - 500 / 20 text - cyan - 400 text - sm rounded - full">;
                      {faq.category};
                    </span>;
                  </div>;
                </div>;
              </motion.div>) ) };
          </div>;
        </motion.div>;
      </div>;
    </div>) ;
};
;
