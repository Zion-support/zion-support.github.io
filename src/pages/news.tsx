import React from 'react';
import {};
} from 'lucide-react';
;
export default function NewsPage() {};
  return null;
}
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const pressReleases = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const categories = ["All", "Company News", "Product Launch", "Partnerships", "Research", "Customer Success", "Press Releases"];

  return (;
    <div className="min-h-screen bg-zion-slate-dark text-white">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center">;
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">;
              <Newspaper className="w-4 h-4 mr-2" />;
              Latest Updates;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              News & Insights;
            </h1>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
              Stay informed about the latest developments at Zion Tech Group, industry insights, and breakthrough innovations in AI and technology.;
            </p>;
          </div>;
        </div>;
      </section>;

      {/* Featured News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Featured News;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              The most important updates and announcements from Zion Tech Group.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {};
              <div key={index} className="bg-zion-blue-dark rounded-lg border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="h-48 bg-zion-cyan/20 flex items-center justify-center">;
                  <Newspaper className="w-16 h-16 text-zion-cyan" />;
                </div>;
                <div className="p-6">;
                  <div className="flex items-center justify-between mb-4">;
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                      {article.category}
                    </span>;
                    <span className="text-zion-slate-light text-sm">{article.date}</span>;
                  </div>;

                  <h3 className="text-2xl font-bold text-white mb-3">{article.title}</h3>;
                  <p className="text-zion-slate-light mb-4">{article.excerpt}</p>;

                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">;
                    <span>By {article.author}</span>;
                    <span>{article.readTime}</span>;
                  </div>;

                  <a href={article.url} className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors">;
                    Read Full Article;
                    <ArrowRight className="w-4 h-4 ml-2" />;
                  </a>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Latest News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Latest News;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              All the latest updates, insights, and announcements from our team.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
              <div key={index} className="bg-zion-blue-dark rounded-lg border border-zion-purple/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="h-40 bg-zion-cyan/20 flex items-center justify-center">;
                  <Newspaper className="w-12 h-12 text-zion-cyan" />;
                </div>;
                <div className="p-6">;
                  <div className="flex items-center justify-between mb-3">;
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                      {article.category}
                    </span>;
                    <span className="text-zion-slate-light text-xs">{article.date}</span>;
                  </div>;

                  <h3 className="text-lg font-semibold text-white mb-3">{article.title}</h3>;
                  <p className="text-zion-slate-light text-sm mb-4">{article.excerpt}</p>;

                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">;
                    <span>By {article.author}</span>;
                    <span>{article.readTime}</span>;
                  </div>;

                  <a href={article.url} className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors">;
                    Read More;
                    <ArrowRight className="w-3 h-3 ml-1" />;
                  </a>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Press Releases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">;
        <div className="container mx-auto max-w-7xl">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Press Releases;
            </h2>;
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">;
              Official announcements and press releases from Zion Tech Group.;
            </p>;
          </div>;

          <div className="max-w-4xl mx-auto">;
            {};
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/30 mb-6 hover:border-zion-cyan/50 transition-all duration-300">;
                <div className="flex items-start justify-between">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>;
                    <p className="text-zion-slate-light mb-3">{release.summary}</p>;
                    <div className="flex items-center text-sm text-zion-slate-light">;
                      <Calendar className="w-4 h-4 mr-2" />;
                      {release.date}
                    </div>;
                  </div>;
                  <a href={release.url} className="ml-6 text-zion-cyan hover:text-zion-cyan-light transition-colors">;
                    <ExternalLink className="w-5 h-5" />;
                  </a>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20">;
        <div className="container mx-auto max-w-4xl text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Stay Updated;
          </h2>;
          <p className="text-lg text-zion-slate-light mb-8">;
            Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">;
            <div>Broken JSX</div>
            />;
            <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">;
              Subscribe;
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
