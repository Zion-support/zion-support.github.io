import React from 'react';
import { SEO } from '../components/SEO';
;
export {};
  const [activeCategory, setActiveCategory] = useState(0);';
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices: unknown = allServices.filter(service => {}
    const matchesSearch: unknown = service.name.toLowerCase () .includes(searchQuery.toLowerCase () ) ||;
                         service.description.toLowerCase () .includes(searchQuery.toLowerCase () ) ;
    const matchesCategory: unknown = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory}) ;

  return();
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">"";
      <div className="container mx-auto px-4 py-24 text-center text-white">"        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
          Our Services";
        </h1>"";
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">;
          Cutting-edge technology solutions designed to transform your business.";
        </p>"";
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">"";
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
            <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>"";
            <p className="text-gray-300 mb-6">Custom AI models and machine learning solutions.</p>"";
            <p className="text-2xl font-bold text-blue-400 mb-4">$5,000 - $50,000</p>";
          </div>"";
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>"";
            <p className="text-gray-300 mb-6">Seamless cloud migration and scalable architecture.</p>"";
            <p className="text-2xl font-bold text-blue-400 mb-4">$10,000 - $100,000</p>";
          </div>"";
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>"";
            <p className="text-gray-300 mb-6">Comprehensive security solutions and assessments.</p>"";
            <p className="text-2xl font-bold text-blue-400 mb-4">$3,000 - $25,000</p>;
          </div>;
        </div>";
        {/* New: AI-Powered Micro-SaaS Solutions */}"";
        <div className="mt-24 text-left">"";
          <h2 className="text-4xl font-bold mb-4">AI-Powered Micro-SaaS Solutions</h2>"";
          <p className="text-gray-300 mb-10 max-w-4xl">Intelligent, subscription-based tools that solve specific business problems with AI-powered automation and clear ROI.</p>"";
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">AI Workflow Orchestrator</h3>"";
              <p className="text-gray-300 mb-4">Intelligent workflow automation platform that orchestrates complex business processes with AI-powered optimization.</p>"";
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">;
                <li>AI-powered process optimization</li>;
                <li>Visual workflow designer</li>;
                <li>Real-time automation</li>;
                <li>Team collaboration tools</li>";
              </ul>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $1,999/month</p>"";
              <a href="/services/ai-workflow-orchestrator" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">AI Data Governance Platform</h3>"";
              <p className="text-gray-300 mb-4">Intelligent data governance that automatically discovers, classifies, and protects sensitive data while ensuring compliance.</p>"";
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">;
                <li>AI-powered data discovery</li>;
                <li>Global compliance framework</li>;
                <li>Advanced access control</li>;
                <li>Data lineage tracking</li>";
              </ul>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$399 - $2,999/month</p>"";
              <a href="/services/ai-data-governance-platform" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">AI Customer Experience Analytics</h3>"";
              <p className="text-gray-300 mb-4">Transform customer insights into actionable intelligence with AI-powered analytics that reveal the true voice of your customers.</p>"";
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">;
                <li>AI-powered sentiment analysis</li>;
                <li>Real-time experience monitoring</li>;
                <li>Customer journey mapping</li>;
                <li>Predictive analytics</li>";
              </ul>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $1,499/month</p>"";
              <a href="/services/ai-customer-experience-analytics" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">AI Sales Email Optimizer</h3>"";
              <p className="text-gray-300 mb-4">Auto-drafts and A/B tests emails based on CRM context to raise reply rates.</p>"";
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">;
                <li>CRM integration (HubSpot, Salesforce)</li>;
                <li>Sequence testing and analytics</li>;
                <li>Compliance guardrails</li>";
              </ul>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $799/month</p>"";
              <a href="/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get a demo →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Support Ticket Triage Copilot</h3>"";
              <p className="text-gray-300 mb-4">Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.</p>"";
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">;
                <li>Auto-priority and routing</li>;
                <li>Knowledge base suggestions</li>;
                <li>First-response macros</li>";
              </ul>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$249 - $999/month</p>"";
              <a href="/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">See solution →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Invoice OCR + Reconciliation</h3>"";
              <p className="text-gray-300 mb-4">Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.</p>"";
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">;
                <li>Vendor anomaly detection</li>;
                <li>Tax and currency support</li>;
                <li>Audit trails</li>";
              </ul>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $799/month</p>"";
              <a href="/services" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>;
            </div>;
          </div>;
        </section>;
";
        {/* New: AI Services & Solutions */}"";
        <div className="mt-24 text-left">"";
          <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>"";
          <p className="text-gray-300 mb-10 max-w-4xl">From strategy to production MLOps, we deliver outcomes, not experiments.</p>"";
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">AI Strategy & Roadmapping</h3>"";
              <p className="text-gray-300 mb-4">Use-case discovery, ROI modeling, and architecture blueprints.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$8,000 - $35,000</p>"";
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore engagements →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Custom LLM Apps & Integrations</h3>"";
              <p className="text-gray-300 mb-4">Build copilots, RAG search, and workflow agents integrated with your stack.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$15,000 - $150,000</p>"";
              <a href="https://ziontechgroup.com/research-development" className="text-cyan-300 hover:text-cyan-200 font-semibold">See R&D →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Computer Vision & OCR</h3>"";
              <p className="text-gray-300 mb-4">Detection, tracking, and document understanding for real-world operations.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$20,000 - $120,000</p>"";
              <a href="https://ziontechgroup.com/case-studies" className="text-cyan-300 hover:text-cyan-200 font-semibold">View case studies →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">MLOps & Platform Engineering</h3>"";
              <p className="text-gray-300 mb-4">Feature stores, CI/CD for models, observability, and governance.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$25,000 - $180,000</p>"";
              <a href="https://ziontechgroup.com/partners" className="text-cyan-300 hover:text-cyan-200 font-semibold">Our partners →</a>;
            </div>;
          </div>;
        </section>;
";
        {/* New: IT Services & Modernization */}"";
        <div className="mt-24 text-left">"";
          <h2 className="text-4xl font-bold mb-4">IT Services & Modernization</h2>"";
          <p className="text-gray-300 mb-10 max-w-4xl">End-to-end services to secure, scale, and streamline your technology footprint.</p>"";
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Cloud Cost Optimization</h3>"";
              <p className="text-gray-300 mb-4">FinOps audits, rightsizing, reserved instances, and tagging strategies.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$6,000 - $45,000</p>"";
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Zero Trust Security</h3>"";
              <p className="text-gray-300 mb-4">Identity-first controls, microsegmentation, and continuous verification.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$12,000 - $95,000</p>"";
              <a href="https://ziontechgroup.com/advanced-cybersecurity" className="text-cyan-300 hover:text-cyan-200 font-semibold">Security services →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Data Platform Modernization</h3>"";
              <p className="text-gray-300 mb-4">Lakehouse design, ETL pipelines, and real-time analytics platforms.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$18,000 - $140,000</p>"";
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get details →</a>";
            </div>"";
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">"";
              <h3 className="text-2xl font-bold mb-2">Managed IT & Onsite Support</h3>"";
              <p className="text-gray-300 mb-4">SLAs, patching, endpoint management, and onsite troubleshooting.</p>"";
              <p className="text-2xl font-bold text-blue-400 mb-4">$2,000 - $25,000/month</p>"";
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Contact us →</a>;
            </div>;
          </div>;
        </section>;
";
        {/* CTA and Contact */}"";
        <div className="mt-24 text-left">"";
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">"";
            <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>"";
            <p className="text-gray-300 mb-6 max-w-3xl">Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.</p>"";
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">"";
              <a href="https://ziontechgroup.com/contact" className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-semibold">Book a consultation</a>"";
              <a href="tel:+13024640950" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Call +1 302 464 0950</a>"";
              <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">kleber@ziontechgroup.com</a>";
            </div>"";
            <div className="mt-4 text-sm text-gray-400">;
              Address: 364 E Main St STE 1008, Middletown, DE 19709 • Website: ziontechgroup.com;
            </div>;
          </div>";
        </div>"";
        <div className="mt-16">"";
          <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">;
            📞 Call +1 (302) 464-0950;
          </a>;
        </div>;
      </div>;
    </>;
  )}
export default Services;'";
'"'";
export { Services };
;
export default function Services() {};
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
      link: "/services/cloud"    }
  ];

  const stats = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];
;
  const containerVariants = {};
    hidden: { opacity: 0 },;
    visible: {};
}
    }
  };
;
  const itemVariants = {};
    hidden: { opacity: 0, y: 20 },;
    visible: {};
}
    }
  }
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0">;
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>;
        </div>;

        <div className="container mx-auto px-4 text-center relative z-10">;
          <div>Broken JSX</div>
            className="max-w-4xl mx-auto">;
            <div>Broken JSX</div>
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Our Services;
            </motion.h1>;
            <div>Broken JSX</div>
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation;
            </motion.p>            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Services services and solutions;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">;
                Get Started;
                <ArrowRight className="inline ml-2 h-5 w-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">;
                View Solutions;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Stats Section */}
      <section className="py-16 bg-black/50">;
        <div className="max-w-7xl mx-auto px-6">;
          <div>Broken JSX</div>
            className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {};
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>;
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>;
                <div className="text-sm text-gray-400">{stat.description}</div>              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;

      {/* Services Grid */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-6">;
          <div>Broken JSX</div>
            className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {};
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>;
                    <service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div>Broken JSX</div>
                    className="text-cyan-400 hover:text-cyan-300 transition-colors group/link">;
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />;
                  </Link>;
                </div>;

                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>;
                <p className="text-gray-400 mb-6">{service.description}</p>;

                {/* Features */}
                <div className="mb-6">;
                  <h4 className="text-white font-medium mb-3">Key Features</h4>;
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">;
                    {};
                      <li key={idx} className="flex items-center text-sm text-gray-300">;
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;

                {/* Benefits */}
                <div className="mb-6">;
                  <h4 className="text-white font-medium mb-3">Business Benefits</h4>;
                  <ul className="space-y-2">;
                    {};
                      <li key={idx} className="flex items-start text-sm text-gray-300">;
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div>Broken JSX</div>
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">;
                  Learn More About {service.title}
                  <ArrowRight className="w-4 h-4 ml-2" />;
                </Link>;
              </motion.div>;
            ))}
          </motion.div>        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <div>Broken JSX</div>
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8">;
              Let's discuss how our services can help transform your business            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                <span className="flex items-center justify-center">;
                  Get a Free Consultation;
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />;
                </span>;
              </Link>;
              <div>Broken JSX</div>
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">;
                Request a Quote            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
    </>;
  )}
export default Services;
