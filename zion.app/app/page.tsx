     1|// app/page.tsx — Home / Landing Page
     2|'use client';
     3|
     4|import { useState, useMemo, useEffect } from 'react';
     5|import Link from 'next/link';
     6|import { allServices } from './data/servicesData';
     7|import { blogPosts } from './data/blogPosts';
     8|import serviceIndex from '../public/service-index.json';
     9|import type { Service } from './data/servicesData';
    10|import Footer from '@/components/Footer';
    11|
    12|// Category accent color for showcase cards (maps category key → gradient)
    13|// Category accent color for showcase card styles (static RGBA + hex)
    14|const catAccent: Record<string, string> = {
    15|  ai:        '#a78bfa',
    16|  it:        '#38bdf8',
    17|  cloud:     '#7dd3fc',
    18|  security:  '#fb923c',
    19|  data:      '#34d399',
    20|  automation:'#fb7185',
    21|};
    22|
    23|const getCategoryMeta = (key: string) => CATEGORIES.find(c => c.key === key) || CATEGORIES[0];
    24|
    25|// Stat labels
    26|const STAT_SERVICES = 'Services & Solutions';
    27|const STAT_MONITOR  = 'Monitoring & Support';
    28|const STAT_SLA      = 'SLA Uptime Guarantee';
    29|
    30|// Featured: pull 2 per category so every category is represented
    31|// Dynamic featured: popular services + first per category (auto-updates with catalog changes)
    32|const FEATURED_IDS = [
    33|  'accessibility-compliance',
    34|  'advanced-ai-enterprise-intelligence-hub',
    35|  'ai-accessibility-auditor',
    36|  'ai-accessibility-optimizer',
    37|  'ai-analytics',
    38|  'ai-customer-support',
    39|  'ai-document-intelligence',
    40|  'ai-knowledge-management',
    41|  'ai-lead-generation',
    42|  'ai-office-automation',
    43|  'ai-sales-intelligence',
    44|  'ai-self-healing-infra',
    45|  'api-development',
    46|  'api-gateway-management',
    47|  'ai-deepfake-detection',
    48|  'ai-supply-chain-predictor',
    49|  'ai-chronic-disease-tracker',
    50|  'ai-marine-fisheries-sustainability',
    51|  'ai-self-healing-kubernetes-platform',
    52|  'it-zero-trust-1'
    53|];
    54|
    55|const CATEGORIES = [
    56|  { key: 'ai',        label: 'AI Services',        emoji: '🧠', color: 'from-purple-500 to-indigo-500' },
    57|  { key: 'it',        label: 'IT Services',         emoji: '🖥️', color: 'from-blue-500 to-cyan-500' },
    58|  { key: 'cloud',     label: 'Cloud Services',       emoji: '☁️', color: 'from-sky-400 to-blue-600' },
    59|  { key: 'security',  label: 'Security Services',     emoji: '🔐', color: 'from-red-500 to-orange-500' },
    60|  { key: 'data',      label: 'Data Analytics',        emoji: '📊', color: 'from-green-500 to-emerald-500' },
    61|  { key: 'automation',label: 'Automation',            emoji: '🤖', color: 'from-pink-500 to-rose-500' },
    62|];
    63|
    64|export default function HomePage() {
    65|  const services: Service[] = allServices;
    66|
    67|  // Quick-View Modal: open a service card overlay without navigating away
    68|  const [quickView, setQuickView] = useState<Service | null>(null);
    69|  const [search, setSearch] = useState('');
    70|  const [catFilter, setCatFilter] = useState<string | null>(null);
    71|
    72|  // Dynamic stats — auto-update when catalog changes
    73|  const serviceCount = services.length;
    74|  const stats = [
    75|    { value: `${serviceCount}+`, label: STAT_SERVICES },
    76|    { value: '6 Categories', label: 'AI · IT · Cloud · Security · Data · Automation' },
    77|    { value: '24/7', label: STAT_MONITOR },
    78|    { value: '99.9%', label: STAT_SLA },
    79|  ];
    80|
    81|  const featuredServices = useMemo(
    82|    () => services.filter((s: any) => FEATURED_IDS.includes(s.id)),
    83|    [services]
    84|  );
    85|
    86|  const filteredShowcase = useMemo(() => {
    87|    let list = services;
    88|    if (catFilter) list = list.filter((s: any) => s.category === catFilter);
    89|    if (search.trim()) {
    90|      const q = search.toLowerCase();
    91|      list = list.filter((s: any) =>
    92|        s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    93|      );
    94|    }
    95|    return list;
    96|  }, [services, catFilter, search]);
    97|
const byCategory = useMemo(() => {
    const map: Record<string, Service[]> = {};
    for (const c of CATEGORIES) map[c.key] = services.filter((s: any) => s.category === c.key);
    return map;
  }, [services]);

  const latestBlogPost = useMemo(() => {
    return blogPosts
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }, [blogPosts]);
   103|
   104|  return (
   105|    <main className="min-h-screen bg-slate-950">
   106|      {/* ── Hero ── */}
   107|      <section className="relative overflow-hidden">
   108|        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
   109|        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
   110|        <div className="relative container-page pt-32 pb-24">
   111|          <div className="text-center max-w-4xl mx-auto">
   112|            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
   113|              <span className="text-green-400">●</span> {serviceCount}+ Services — Live Now
   114|            </div>
   115|            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
   116|              <span className="gradient-text">AI & IT Services</span><br />
   117|              <span className="text-white">for Your Business</span>
   118|            </h1>
   119|            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
   120|              {serviceCount}+ real-world micro SAAS services, IT solutions, and AI-powered platforms.
   121|              From machine learning to cybersecurity, CRM automation to blockchain.
   122|              Get a custom proposal in minutes.
   123|            </p>
   124|            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
   125|              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
   126|                ⚡ Get Your Custom Proposal →
   127|              </Link>
   128|              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
   129|                🛠️ Browse All {serviceCount}+ Services
   130|              </Link>
   131|              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">
   132|                ☎ +1 302 464 0950
   133|              </a>
   134|            </div>
   135|
   136|            {/* Trust badges */}
   137|            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm mb-12">
   138|              {['BBB Accredited','100% US-Based Team','SLA Guaranteed','HIPAA Compliant'].map(t => (
   139|                <div key={t} className="flex items-center gap-2">
   140|                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   141|                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
   142|                  </svg>
   143|                  {t}
   144|                </div>
   145|              ))}
   146|            </div>
   147|
   148|            {/* Stats */}
   149|            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
   150|              {stats.map((s, i) => (
   151|                <div key={i} className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-colors">
   152|                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
   153|                  <div className="text-sm text-slate-400 mt-1">{s.label}</div>
   154|                </div>
   155|              ))}
   156|            </div>
   157|          </div>
   158|        </div>
   159|      </section>
      {/* ── Recently Added Services ── */}
      <section className="py-16">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🆕</span>
            <h2 className="text-2xl font-bold text-white">Recently Added Services</h2>
            <span className="text-sm text-slate-400">(Latest 3 services from our catalog)</span>
          </div>
          <div className="overflow-x-auto pb-4 -mb-4">
            <div className="flex gap-4" style={{ minWidth:'max-content', paddingBottom:'8px' }}>
              {services
                .slice(-3) // Take the last 3 services
                .map((service) => (
                  <div key={service.id} className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">{service.icon}</span>
                      <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-xs line-clamp-2 flex-1">
                      {service.description}
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">
                        {service.category.toUpperCase()}
                      </span>
                      <Link href={`/services/${service.id}`} className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
                        Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Blog Post ── */}
      <section className="py-16">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">📝</span>
            <h2 className="text-2xl font-bold text-white">Latest from the Blog</h2>
          </div>
          <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-2">{latestBlogPost.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{latestBlogPost.excerpt}</p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              {latestBlogPost.tags.map((tag) => (
                <span key={tag} className="bg-slate-800/50 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
            <div className="mt-4 text-right">
              <Link href={`/blog/${latestBlogPost.id}`} className="text-purple-400 hover:text-purple-300 font-medium">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services by Category (all 626 services advertised) ── */}
   161|      <section className="py-20 bg-slate-900/40">
   162|        <div className="container-page">
   163|          <div className="text-center mb-14">
   164|            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
   165|              Explore the <span className="gradient-text">Platform</span>
   166|            </h2>
   167|            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
   168|              Jump straight into the tools and services you need — all in one place.
   169|            </p>
   170|          </div>
   171|
   172|          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
   173|            {[
   174|              {
   175|                title: "AI Services",
   176|                desc: "AI-powered tools & intelligent platforms",
   177|                href: "/ai-services",
   178|                iconBg: "bg-purple-500/15",
   179|                icon: "🧠",
   180|                accent: "border-purple-500/30 hover:border-purple-400/60",
   181|              },
   182|              {
   183|                title: "Tools",
   184|                desc: "Diagnostic & configurator utilities",
   185|                href: "/tools",
   186|                iconBg: "bg-blue-500/15",
   187|                icon: "⚙️",
   188|                accent: "border-blue-500/30 hover:border-blue-400/60",
   189|              },
   190|              {
   191|                title: "Pricing",
   192|                desc: "Transparent plans & cost estimates",
   193|                href: "/pricing",
   194|                iconBg: "bg-amber-500/15",
   195|                icon: "💎",
   196|                accent: "border-amber-500/30 hover:border-amber-400/60",
   197|              },
   198|              {
   199|                title: "Contact",
   200|                desc: "Get in touch with our team",
   201|                href: "/contact",
   202|                iconBg: "bg-cyan-500/15",
   203|                icon: "📬",
   204|                accent: "border-cyan-500/30 hover:border-cyan-400/60",
   205|              },
   206|              {
   207|                title: "Client Portal",
   208|                desc: "Billing, projects & support tickets",
   209|                href: "/portal",
   210|                iconBg: "bg-emerald-500/15",
   211|                icon: "🌐",
   212|                accent: "border-emerald-500/30 hover:border-emerald-400/60",
   213|              },
   214|              {
   215|                title: "Industry Solutions",
   216|                desc: "Healthcare, finance, SaaS & more",
   217|                href: "/industry-solutions",
   218|                iconBg: "bg-sky-500/15",
   219|                icon: "🏢",
   220|                accent: "border-sky-500/30 hover:border-sky-400/60",
   221|              },
   222|            ].map((card, i) => (
   223|              <Link
   224|                key={i}
   225|                href={card.href}
   226|                className={`glass-card flex flex-col items-center text-center gap-3 p-6 transition-all duration-300 group border ${card.accent} cursor-pointer`}
   227|              >
   228|                <div className={`${card.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
   229|                  {card.icon}
   230|                </div>
   231|                <div>
   232|                  <div className="font-bold text-white text-sm mb-1 group-hover:text-purple-300">{card.title}</div>
   233|                  <div className="text-xs text-slate-500 leading-relaxed">{card.desc}</div>
   234|                </div>
   235|              </Link>
   236|            ))}
   237|          </div>
   238|        </div>
   239|      </section>
   240|
   241|
   242|      {/* ── How It Works ── */}
   243|      <section className="py-20">
   244|        <div className="container-page">
   245|          <h2 className="section-heading text-center">How It Works</h2>
   246|          <p className="section-subheading text-center">From inquiry to implementation in 4 simple steps</p>
   247|          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
   248|            {[
   249|              { num: '01', title: 'Tell Us Your Needs', desc: 'Share your business goals, budget, and technical requirements.' },
   250|              { num: '02', title: 'AI-Powered Matching', desc: 'Our AI engine recommends the best-fit services from {serviceCount}+ options.' },
   251|              { num: '03', title: 'Custom Proposal', desc: 'Receive a detailed PDF proposal with pricing, timeline, and next steps.' },
   252|              { num: '04', title: 'Launch & Scale', desc: 'We implement, monitor, and optimize your solution for maximum ROI.' },
   253|            ].map((s, i) => (
   254|              <div key={i} className="glass-card text-center hover:border-purple-500/40">
   255|                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg shadow-purple-600/30">
   256|                  {s.num}
   257|                </div>
   258|                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
   259|                <p className="text-slate-400 text-sm">{s.desc}</p>
   260|              </div>
   261|            ))}
   262|          </div>
   263|        </div>
   264|      </section>
   265|
   266|      {/* ── Services by Category (all 626 services advertised) ── */}
   267|
   268|
   269|      {/* ── Service Spotlight ── */}
   270|      <section className="py-16">
   271|        <div className="container-page">
   272|          <div className="flex items-center gap-3 mb-8">
   273|            <span className="text-2xl">✨</span>
   274|            <h2 className="text-2xl font-bold text-white">Today’s Service Spotlight</h2>
   275|            <span className="text-xs text-slate-500 bg-slate-800 rounded-full px-3 py-1">
   276|              Auto-updated · Quality-ranked
   277|            </span>
   278|          </div>
   279|          <SpotlightCard />
   280|        </div>
   281|      </section>
   282|      {/* ── Popular Services ── */}
   283|      <section className="py-16">
   284|        <div className="container-page">
   285|          <div className="flex items-center gap-3 mb-8">
   286|            <span className="text-2xl">🔥</span>
   287|            <h2 className="text-2xl font-bold text-white">Popular Services</h2>
   288|            <span className="text-sm text-slate-400">(30+ top services — hard to miss)</span>
   289|          </div>
   290|          <div className="overflow-x-auto pb-4 -mb-4">
   291|            <div className="flex gap-4" style={{ minWidth:'max-content', paddingBottom:'8px' }}>
   292|              <div key="ai-analytics" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   293|                <div className="flex items-start gap-3">
   294|                  <span className="text-2xl shrink-0">📊</span>
   295|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Analytics & BI</h3>
   296|                </div>
   297|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Transform your data into actionable insights with our advanced AI analytics platform.</p>
   298|                <div className="mt-1 flex items-center justify-between gap-2">
   299|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   300|                  <Link href="/services/ai-analytics" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   301|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   302|                  </Link>
   303|                </div>
   304|              </div>
   305|              <div key="ai-carbon-optimizer" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   306|                <div className="flex items-start gap-3">
   307|                  <span className="text-2xl shrink-0">🌿</span>
   308|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Carbon Footprint Optimizer</h3>
   309|                </div>
   310|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Automated Scope 1-3 carbon accounting: ingests utility bills, cloud usage, travel itineraries, suppl</p>
   311|                <div className="mt-1 flex items-center justify-between gap-2">
   312|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   313|                  <Link href="/services/ai-carbon-optimizer" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   314|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   315|                  </Link>
   316|                </div>
   317|              </div>
   318|              <div key="ai-customer-support" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   319|                <div className="flex items-start gap-3">
   320|                  <span className="text-2xl shrink-0">💬</span>
   321|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Customer Support</h3>
   322|                </div>
   323|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">24/7 AI-powered customer service with intelligent ticket routing, auto-resolution, and sentiment ana</p>
   324|                <div className="mt-1 flex items-center justify-between gap-2">
   325|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   326|                  <Link href="/services/ai-customer-support" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   327|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   328|                  </Link>
   329|                </div>
   330|              </div>
   331|              <div key="ai-document-intelligence" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   332|                <div className="flex items-start gap-3">
   333|                  <span className="text-2xl shrink-0">📄</span>
   334|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Document Intelligence</h3>
   335|                </div>
   336|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">End-to-end intelligent document processing with 99%+ accuracy OCR, classification, field-level data </p>
   337|                <div className="mt-1 flex items-center justify-between gap-2">
   338|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   339|                  <Link href="/services/ai-document-intelligence" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   340|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   341|                  </Link>
   342|                </div>
   343|              </div>
   344|              <div key="ai-knowledge-graph-search-deep" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   345|                <div className="flex items-start gap-3">
   346|                  <span className="text-2xl shrink-0">🔍</span>
   347|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Knowledge Graph Search Engine</h3>
   348|                </div>
   349|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Deep semantic search across structured + unstructured corporate knowledge: auto-builds a navigable k</p>
   350|                <div className="mt-1 flex items-center justify-between gap-2">
   351|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   352|                  <Link href="/services/ai-knowledge-graph-search-deep" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   353|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   354|                  </Link>
   355|                </div>
   356|              </div>
   357|              <div key="ai-knowledge-management" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   358|                <div className="flex items-start gap-3">
   359|                  <span className="text-2xl shrink-0">🧠</span>
   360|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Knowledge Management</h3>
   361|                </div>
   362|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Centralize organizational knowledge with AI-powered semantic search, auto-tagging, content gap detec</p>
   363|                <div className="mt-1 flex items-center justify-between gap-2">
   364|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   365|                  <Link href="/services/ai-knowledge-management" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   366|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   367|                  </Link>
   368|                </div>
   369|              </div>
   370|              <div key="ai-lead-generation" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   371|                <div className="flex items-start gap-3">
   372|                  <span className="text-2xl shrink-0">🎯</span>
   373|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Lead Generation & Enrichment</h3>
   374|                </div>
   375|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Automatically discover, qualify, and enrich B2B leads with web scraping, firmographic scoring, and i</p>
   376|                <div className="mt-1 flex items-center justify-between gap-2">
   377|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   378|                  <Link href="/services/ai-lead-generation" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   379|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   380|                  </Link>
   381|                </div>
   382|              </div>
   383|              <div key="ai-sales-intelligence" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   384|                <div className="flex items-start gap-3">
   385|                  <span className="text-2xl shrink-0">📈</span>
   386|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Sales Intelligence</h3>
   387|                </div>
   388|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Boost revenue with AI-driven lead scoring, pipeline prediction, deal insights, and automated outreac</p>
   389|                <div className="mt-1 flex items-center justify-between gap-2">
   390|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   391|                  <Link href="/services/ai-sales-intelligence" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   392|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   393|                  </Link>
   394|                </div>
   395|              </div>
   396|              <div key="ai-contract-lifecycle-intelligence" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   397|                <div className="flex items-start gap-3">
   398|                  <span className="text-2xl shrink-0">★</span>
   399|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">Contract Lifecycle Intelligence</h3>
   400|                </div>
   401|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">AI contract lifecycle management: extract clauses and dates, auto-flag risk, renewal calendar, bench</p>
   402|                <div className="mt-1 flex items-center justify-between gap-2">
   403|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   404|                  <Link href="/services/ai-contract-lifecycle-intelligence" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   405|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   406|                  </Link>
   407|                </div>
   408|              </div>
   409|              <div key="ai-fintech-fraud-graph" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   410|                <div className="flex items-start gap-3">
   411|                  <span className="text-2xl shrink-0">★</span>
   412|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">Fintech Fraud Graph</h3>
   413|                </div>
   414|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Real-time fraud detection as a knowledge graph: entity resolution across accounts, IP, device, and c</p>
   415|                <div className="mt-1 flex items-center justify-between gap-2">
   416|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   417|                  <Link href="/services/ai-fintech-fraud-graph" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   418|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   419|                  </Link>
   420|                </div>
   421|              </div>
   422|              <div key="ai-sustainable-supply-chain-radar" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   423|                <div className="flex items-start gap-3">
   424|                  <span className="text-2xl shrink-0">★</span>
   425|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">Sustainable Supply Chain Radar</h3>
   426|                </div>
   427|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Supply-chain ESG tracking: carbon-intensity per supplier tier, green-alternative sourcing score, Sco</p>
   428|                <div className="mt-1 flex items-center justify-between gap-2">
   429|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   430|                  <Link href="/services/ai-sustainable-supply-chain-radar" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   431|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   432|                  </Link>
   433|                </div>
   434|              </div>
   435|              <div key="ai-voice-first-crm" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   436|                <div className="flex items-start gap-3">
   437|                  <span className="text-2xl shrink-0">📞</span>
   438|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">Voice-First CRM & Sales Assistant</h3>
   439|                </div>
   440|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Voice-first CRM for field sales and inside sales teams: automatic call transcription, real-time deal</p>
   441|                <div className="mt-1 flex items-center justify-between gap-2">
   442|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   443|                  <Link href="/services/ai-voice-first-crm" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   444|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   445|                  </Link>
   446|                </div>
   447|              </div>
   448|              <div key="ai-crm-automation-suite" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   449|                <div className="flex items-start gap-3">
   450|                  <span className="text-2xl shrink-0">🎯</span>
   451|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI CRM Automation Suite</h3>
   452|                </div>
   453|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Full CRM automation platform: AI lead scoring, email sequences, pipeline tracking, deal insights, au</p>
   454|                <div className="mt-1 flex items-center justify-between gap-2">
   455|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   456|                  <Link href="/services/ai-crm-automation-suite" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   457|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   458|                  </Link>
   459|                </div>
   460|              </div>
   461|              <div key="ai-chronic-disease-tracker" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   462|                <div className="flex items-start gap-3">
   463|                  <span className="text-2xl shrink-0">🏥</span>
   464|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">AI Chronic Disease Progression Tracker</h3>
   465|                </div>
   466|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Longitudinal patient analytics: track chronic disease progression across EHR data, lab results, and </p>
   467|                <div className="mt-1 flex items-center justify-between gap-2">
   468|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/12 text-purple-300 border-purple-500/25">AI</span>
   469|                  <Link href="/services/ai-chronic-disease-tracker" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   470|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   471|                  </Link>
   472|                </div>
   473|              </div>
   474|              <div key="devops-cicd" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   475|                <div className="flex items-start gap-3">
   476|                  <span className="text-2xl shrink-0">⚙️</span>
   477|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">DevOps & CI/CD Automation</h3>
   478|                </div>
   479|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">End-to-end CI/CD pipelines, container orchestration, GitOps workflows, and site reliability engineer</p>
   480|                <div className="mt-1 flex items-center justify-between gap-2">
   481|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-orange-500/12 text-orange-300 border-orange-500/25">AUTOMATION</span>
   482|                  <Link href="/services/devops-cicd" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   483|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   484|                  </Link>
   485|                </div>
   486|              </div>
   487|              <div key="automation-integrated-commerce-flows" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   488|                <div className="flex items-start gap-3">
   489|                  <span className="text-2xl shrink-0">◆</span>
   490|                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">Integrated Commerce Flow Orchestrator</h3>
   491|                </div>
   492|                <p className="text-slate-400 text-xs line-clamp-2 flex-1">Commerce workflow automation: cart-to-delivery orchestrator connecting Shopify/BigCommerce/WooCommer</p>
   493|                <div className="mt-1 flex items-center justify-between gap-2">
   494|                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-orange-500/12 text-orange-300 border-orange-500/25">AUTOMATION</span>
   495|                  <Link href="/services/automation-integrated-commerce-flows" className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 group">
   496|                    Details <span className="group-hover:translate-x-1 transition-transform">→</span>
   497|                  </Link>
   498|                </div>
   499|              </div>
   500|              <div key="automation-document-intelligence-pipeline" className="min-w-[240px] glass-card flex flex-col gap-2 group hover:border-purple-500/40">
   501|