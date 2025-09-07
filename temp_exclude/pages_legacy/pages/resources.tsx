<<<<<<< HEAD


=======
>>>>>>> origin/chore/fix-lint-and-merge
import React from 'react';
import SEO from '../components/SEO';

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

import Link from 'next/link';
export default function ResourcesPage() {}
  return (

        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}

    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
};
      {/* Whitepapers */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      <section id="whitepapers" className="py-20 bg-slate-50">"
        <div className="max-w-7xl mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Whitepapers & Guides</h2>"
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              In-depth research and comprehensive guides on the latest technology trends and best practices.
            </p>
          </motion.div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (

                key={paper.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >"
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8">"
                  <div className="flex items-center justify-between mb-4">"
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">

                    <span className="text-white/80 text-sm">{paper.pages} pages</span>
                  </div>"
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{paper.title}</h3>"
                  <p className="text-blue-100 leading-relaxed">{paper.description}</p>
                </div>"
                <div className="p-8">"
                  <div className="flex items-center justify-between mb-6">"
                    <span className="text-slate-600 text-sm">
                      {paper.downloadCount} downloads;
                    </span>

                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                    >"
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </motion.div>

        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}

    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Case Studies */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      <section className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Case Studies</h2>"
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses across industries.
            </p>
          </motion.div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (

                key={study.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

                  <ul className="space-y-2">
                    {study.results.map((result, idx) => ("
                      <li key={idx} className="text-sm text-slate-600 flex items-center space-x-2">"
                        <ArrowRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span>{result}</span>
                      </li>

    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </ul>;
                </div>;
                <a;
                  href={study.readUrl  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>Read Case Study</span>"
                  <ArrowRight className="w-4 h-4" />

        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
                </Link>
              </motion.div>
            ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Videos */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      <section className="py-20 bg-slate-900">"
        <div className="max-w-7xl mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="text-center mb-16"
          >"
            <h2 className="text-4xl font-bold text-white mb-6">Video Resources</h2>"
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Visual learning resources and expert insights on technology trends and implementations.
            </p>
          </motion.div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video, index) => (

    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >"
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-center">"
                  <Play className="w-12 h-12 text-white mx-auto mb-3" />"
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">

                <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                  <span>{doc.pages} pages</span>
                  <span>Updated {doc.lastUpdated}</span>
                </div>

                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Download;
                </a>
              </motion.div>

    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* CTA */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >"
            <h2 className="text-4xl font-bold text-white mb-6">Need More Resources?</h2>"
            <p className="text-xl text-blue-100 mb-8">

              personalized consultations, and tailored solutions for your specific needs.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a"
                href="/contact""
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Our Experts;
              </a>
              <a"
                href="/contact""
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Request Custom Research;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </>
  )
<<<<<<< HEAD
}
=======

              >;
                Contact Our Experts;
              </a>;
              <a;"
                href="/contact";

              >;
                Request Custom Research;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;

'
import React from 'react';'
import MainLayout from '../src/components/layout/MainLayout';

export default function ResourcesPage() {}
  return ("
    <MainLayout title="Resources - Zion Tech Group">"
      <div className="container mx-auto px-4 py-16">"
        <h1 className="text-4xl font-bold mb-8">Resources</h1>"
        <p className="text-lg text-gray-700">
          This is a placeholder for the resources page.
        </p>
      </div>
    </MainLayout>;
  );
}
>>>>>>> origin/chore/fix-lint-and-merge
