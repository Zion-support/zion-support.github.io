import React from 'react';
import { Link } from 'react-router-dom';
import {
  Map as SitemapIcon,
  Home,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  HelpCircle,
  Shield,
  Globe,
  Building2,
  Rocket,
  Brain,
  Cloud,
  Code,
  BookOpen,
  Users,
  LogIn,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const links = [
	'/', '/about', '/contact', '/blog', '/faq', '/careers', '/partners', '/news',
	'/solutions', '/research-development', '/request-quote', '/green-it',
	'/services', '/ai-services', '/it-services', '/micro-saas',
	'/marketplace', '/marketplace/products', '/marketplace/talent', '/marketplace/equipment',
	'/talent', '/equipment', '/team', '/help', '/security', '/status',
	'/privacy', '/terms', '/cookies'
];

export default function Sitemap() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
			<SEO title="Sitemap - Zion Tech Group" description="Browse all site pages." />
			<div className="container-responsive text-white">
				<h1 className="text-4xl font-bold mb-6">Sitemap</h1>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
					{links.map((path) => (
						<li key={path}>
							<Link to={path} className="text-zion-cyan hover:underline">{path}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Sitemap, Home, Users, Settings, FileText, Shield, Mail, HelpCircle, Building, Briefcase } from 'lucide-react';
export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with our team" },
        { name: "Services Overview", path: "/services", description: "Explore all our services" }
      ]
    }, {
      title: &quot;AI Services&quot;,
      pages: [
        { nam,e: &quot;AI Services Overview&quot;, url: &quot;/ai-services&quot;, description: &quot;Comprehensive AI solutions&quot}, { name: &quot;AI Content Generator&quot;, url: &quot;/services/ai-content-generator&quot;, description: &quot;AI-powered content creation&quot}, { name: &quot;AI Project Management&quot;, url: &quot;/services/ai-project-management&quot;, description: &quot;AI-driven project optimization&quot}, { name: &quot;AI Business Intelligence&quot;, url: &quot;/services/ai-business-intelligence&quot;, description: &quot;Advanced analytics & ML insights&quot}
      ]
    }, {
      title: &quot;Quantum Computing&quot;,
      pages: [
        { nam,e: &quot;Quantum Computing Solutions&quot;, url: &quot;/services/quantum-computing&quot;, description: &quot;Next-generation computing power&quot}, { name: &quot;Quantum AI Platform&quot;, url: &quot;/services/quantum-ai-hybrid-platform&quot;, description: &quot;Revolutionary quantum-AI computing&quot}, { name: &quot;Quantum Financial Trading&quot;, url: &quot;/services/ai-quantum-financial-trading-platform&quot;, description: &quot;Advanced quantum trading&quot}, { name: &quot;Quantum Machine Learning&quot;, url: &quot;/services/quantum-machine-learning&quot;, description: &quot;Quantum-enhanced ML algorithms&quot}
      ]
    }, {
      title: &quot;Cybersecurity&quot;,
      pages: [
        { nam,e: &quot;AI Cybersecurity Platform&quot;, url: &quot;/services/ai-cybersecurity-platform&quot;, description: &quot;Advanced AI-powered security&quot}, { name: &quot;Security Headers & CSP&quot;, url: &quot;/services/security-headers-csp&quot;, description: &quot;Web security hardening&quot}, { name: &quot;DSR Privacy Portal&quot;, url: &quot;/services/dsr-portal&quot;, description: &quot;GDPR/CCPA compliance&quot}, { name: &quot;Zero Trust Network Access&quot;, url: &quot;/services/zero-trust-network-access&quot;, description: &quot;Modern security architecture&quot}
      ]
    }, {
      title: &quot;Company&quot;,
      pages: [
        { nam,e: &quot;Our Team&quot;, url: &quot;/team&quot;, description: &quot;Meet our expert professionals&quot}, { name: &quot;Partners&quot;, url: &quot;/partners&quot;, description: &quot;Strategic partnerships&quot}, { name: &quot;Careers&quot;, url: &quot;/careers&quot;, description: &quot;Join our growing team&quot}, { name: &quot;News&quot;, url: &quot;/news&quot;, description: &quot;Company announcements&quot}
      ]
    }, {
      title: &quot;Resources&quot;,
      pages: [
        { nam,e: &quot;Blog&quot;, url: &quot;/blog&quot;, description: &quot;Latest insights and updates&quot}, { name: &quot;Documentation&quot;, url: &quot;/documentation&quot;, description: &quot;Technical guides and API reference&quot}, { name: &quot;Help Center&quot;, url: &quot;/help&quot;, description: &quot;Find answers and solutions&quot}, { name: &quot;Webinars&quot;, url: &quot;/webinars&quot;, description: &quot;Educational sessions&quot}, { name: &quot;Training&quot;, url: &quot;/training&quot;, description: &quot;Skill development programs&quot}, { name: &quot;Research&quot;, url: &quot;/research&quot;, description: &quot;Our research initiatives&quot}
      ]
    }, {
      title: &quot;Marketplace&quot;,
      pages: [
        { nam,e: &quot;Marketplace&quot;, url: &quot;/marketplace&quot;, description: &quot;Explore products and services&quot}, { name: &quot;AI Tools&quot;, url: &quot;/marketplace/ai-tools&quot;, description: &quot;AI-powered applications&quot}, { name: &quot;Micro SaaS&quot;, url: &quot;/micro-saas&quot;, description: &quot;Curated micro SaaS solutions&quot}, { name: &quot;IT Services&quot;, url: &quot;/it-services&quot;, description: &quot;Enterprise IT offerings&quot}
      ]
    }, {
      title: &quot;Legal & Support&quot;,
      pages: [
        { nam,e: &quot;Privacy Policy&quot;, url: &quot;/privacy&quot;, description: &quot;How we protect your data&quot}, { name: &quot;Terms of Service&quot;, url: &quot;/terms&quot;, description: &quot;Terms and conditions&quot}, { name: &quot;Cookie Policy&quot;, url: &quot;/cookies&quot;, description: &quot;Cookie usage information&quot}, { name: &quot;FAQ&quot;, url: &quot;/faq&quot;, description: &quot;Frequently asked questions&quot}, { name: &quot;System Status&quot;, url: &quot;/system-status&quot;, description: &quot;Service availability&quot}

      ]
    }
  ];&quot;&quot;


      title: "Main Pages", pages: [

        { name: "Home", url: "/", description: "Welcome to Zion Tech Group" }, { name: "About", url: "/about", description: "Learn about our company and mission" }, { name: "Services", url: "/services", description: "Our comprehensive technology services" }, { name: "Contact", url: "/contact", description: "Get in touch with our team" }
      ]
    }, { title: "AI Services",
      pages: [
        { name: "AI Services Overview", url: "/ai-services", description: "Comprehensive AI solutions" }, { name: "AI Content Generator", url: "/services/ai-content-generator", description: "AI-powered content creation" }, { name: "AI Project Management", url: "/services/ai-project-management", description: "AI-driven project optimization" }, { name: "AI Business Intelligence", url: "/services/ai-business-intelligence", description: "Advanced analytics & ML insights" }
      ]
    }, { title: "Quantum Computing",
      pages: [
        { name: "Quantum Computing Solutions", url: "/services/quantum-computing", description: "Next-generation computing power" }, { name: "Quantum AI Platform", url: "/services/quantum-ai-hybrid-platform", description: "Revolutionary quantum-AI computing" }, { name: "Quantum Financial Trading", url: "/services/ai-quantum-financial-trading-platform", description: "Advanced quantum trading" }, { name: "Quantum Machine Learning", url: "/services/quantum-machine-learning", description: "Quantum-enhanced ML algorithms" }
      ]
    }, { title: "Cybersecurity",
      pages: [
        { name: "AI Cybersecurity Platform", url: "/services/ai-cybersecurity-platform", description: "Advanced AI-powered security" }, { name: "Security Headers & CSP", url: "/services/security-headers-csp", description: "Web security hardening" }, { name: "DSR Privacy Portal", url: "/services/dsr-portal", description: "GDPR/CCPA compliance" }, { name: "Zero Trust Network Access", url: "/services/zero-trust-network-access", description: "Modern security architecture" }
      ]
    }, { title: "Company",
      pages: [
        { name: "Our Team", url: "/team", description: "Meet our expert professionals" }, { name: "Partners", url: "/partners", description: "Strategic partnerships" }, { name: "Careers", url: "/careers", description: "Join our growing team" }, { name: "News", url: "/news", description: "Company announcements" }
      ]
    }, { title: "Resources",
      pages: [
        { name: "Blog", url: "/blog", description: "Latest insights and updates" }, { name: "Documentation", url: "/documentation", description: "Technical guides and API reference" }, { name: "Help Center", url: "/help", description: "Find answers and solutions" }, { name: "Webinars", url: "/webinars", description: "Educational sessions" }, { name: "Training", url: "/training", description: "Skill development programs" }, { name: "Research", url: "/research", description: "Our research initiatives" }
      ]
    }, { title: "Marketplace",
      pages: [
        { name: "Marketplace", url: "/marketplace", description: "Explore products and services" }, { name: "AI Tools", url: "/marketplace/ai-tools", description: "AI-powered applications" }, { name: "Micro SaaS", url: "/micro-saas", description: "Curated micro SaaS solutions" }, { name: "IT Services", url: "/it-services", description: "Enterprise IT offerings" }
      ]
    }, { title: "Legal & Support",
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your data" }, { name: "Terms of Service", url: "/terms", description: "Terms and conditions" }, { name: "Cookie Policy", url: "/cookies", description: "Cookie usage information" }, { name: "FAQ", url: "/faq", description: "Frequently asked questions" },

        { name: "System Status", url: "/system-status", description: "Service availability" }
      ]}
  ];

    { name: "Meet Our Team", url: "/team", icon: Users }, { name: "Read Our Blog", url: "/blog", icon: Brain }
  ];
  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation guide for Zion Tech Group. Find all pages, services, and resources organized by category."
        keywords="sitemap, navigation, site structure, pages, services, Zion Tech Group"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://ziontechgroup.com/sitemap"
<<<<<<< HEAD
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
          <ul className="space-y-2">
            {completeSitemap.map(route => (
              <li key={route.path}>
                <Link to={route.path} className="text-zion-cyan hover:underline">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
      />

      

              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Navigate our website with ease. Find all pages, services, and resources 
                organized by category for quick access.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Globe className=&quot;w-16 h-16 text-blue-400&quot; />&quot;

              </div>
            </motion.div>
          </div>
        </section>


              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-6&quot;>
              {quickLinks.map((link, index) => (&quot}
                <motion.a

                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                </motion.a>

              ))}
            </div>;
          </div>;
        </section>;


              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x,l:grid-cols-4 gap-8&quot;>
              {siteStructure.map((section, sectionIndex) => (&quot}
                <motion.div

                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}

                >
                  <h3: className="text-xl font-bold text-white mb-4">{section.title}</h3>";";";
                  <div: className="space-y-3">";";";
                    {section.pages.map((page, pageIndex) => (

                        <a
                          href={page.url}
                          className=&quot;block group&quot;
                        >&quot;
                          <div className=&quot;flex items-start justify-between&quot;>&quot;"
                            <div className=&quot;flex-1&quot;>&quot;"
                              <h4 className=&quot;text-blue-400 group-hover:text-blue-300 transition-colors font-medium&quot;>
                                {page.name}&quot;
                              </h4>
                              <p className=&quot;text-gray-400 text-sm mt-1&quot;>{page.description}&quot;</p>
                            </div>
                            <ExternalLink className=&quot;w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors ml-2 flex-shrink-0&quot; />&quot;

                          </div>
                        </a>
                      </div>

                    ))}
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;


              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Can&apos;t Find What You&apos;re Looking For?

              </h2>
              <p className=&quot;text-gray-300 mb-8&quot;>
                Use our search&quot; functionality to find specific content across our website
              </p>
              
              <div className=&quot;relative&quot;>&quot;"
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                <input

                />

              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>


  )}


// Play icon component for demo link
function Play({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
