// app/ai-services/page.tsx — AI Services Hub (v2: Smart Search + Filters)
'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { allServices } from '@/data/servicesData';
import type { Service } from '@/data/servicesData';

const aiServices = allServices.filter((s: Service) => s.category === 'ai');

const FEATURED_AI_IDS = [
  'ai-analytics',
  'ai-chatbot-builder-pro',
  'ai-code-assistant-enterprise',
  'ai-customer-support',
  'ai-knowledge-graph',
  'ai-meeting-assistant-pro',
  'ai-voice-agent-platform',
  'ai-agentic-workflows',
  'ai-autonomous-qa-engineering',
  'ai-secrets-management',
];

type SortKey = 'name' | 'popular' | 'features';
type FilterCat = 'all' | 'featured';

const CATEGORY_META: Record<string, { label: string; emoji: string }> = {
  nlp:         { label: 'NLP',          emoji: '💬' },
  vision:      { label: 'Computer Vision', emoji: '👁️' },
  analytics:   { label: 'Analytics',    emoji: '📊' },
  automation:  { label: 'Automation',   emoji: '🤖' },
  agent:       { label: 'Agents',       emoji: '🧠' },
  dev:         { label: 'Dev Tools',    emoji: '💻' },
  security:    { label: 'Security',     emoji: '🔐' },
  voice:       { label: 'Voice & Audio',emoji: '🎙️' },
  data:        { label: 'Data',         emoji: '📁' },
  robotics:    { label: 'Robotics',     emoji: '🤖' },
  other:       { label: 'Other',        emoji: '✨' },
};

export default function AIServicesPage() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('name');
  const [catFilter, setCatFilter] = useState<FilterCat>('all');
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);
  const [cmdKOpen, setCmdKOpen] = useState(false);

  // ⌘K shortcut
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdKOpen(true);
      }
      if (e.key === 'Escape') setCmdKOpen(false);
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    let list = aiServices.filter((s: Service) => {
      if (catFilter === 'featured' && !FEATURED_AI_IDS.includes(s.id)) return false;
      if (showOnlyPopular && !s.popular) return false;
      if (q) {
        const searchTxt = [
          s.title, s.description,
          ...(s.features || []),
          ...(s.benefits || []),
        ].join(' ').toLowerCase();
        if (!searchTxt.includes(q)) return false;
      }
      return true;
    });

    list.sort((a: Service, b: Service) => {
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      if (sortBy === 'features') return (b.features?.length || 0) - (a.features?.length || 0);
      return 0;
    });

    return list;
  }, [aiServices, q, sortBy, catFilter, showOnlyPopular]);

  const featured = useMemo(
    () => aiServices.filter((s: Service) => FEATURED_AI_IDS.includes(s.id)),
    []
  );

  // Category breakdown
  const catCounts = useMemo(() => {
    const m: Record<string, number> = {};
    aiServices.forEach((s: Service) => {
      const c = s.id.split('-').slice(0,2).join('-');  // derive subcategory from ID prefix
      m[c] = (m[c] || 0) + 1;
    });
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  }, [aiServices]);

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI Services</span>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">🤖</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Services</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            {aiServices.length}+ AI-powered services — from chatbots to computer vision, predictive analytics to autonomous agents.
          </p>
          <Link href="/configurator" className="btn-primary text-lg px-10 py-4 inline-block">
            ⚡ Get Your Custom AI Proposal →
          </Link>
        </div>

        {/* Command-K quick search bar */}
        <button
          onClick={() => setCmdKOpen(true)}
          className="w-full max-w-2xl mx-auto flex items-center gap-3 bg-slate-900/80 border border-slate-700 rounded-xl px-5 py-3.5 text-slate-400 hover:border-purple-500/40 hover:text-slate-200 transition cursor-pointer mb-8"
        >
          <svg className="w-5 h-5 opacity-50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="flex-1 text-left text-sm">Search AI services…</span>
          <kbd className="hidden sm:flex items-center gap-1 text-xs bg-slate-800 border border-slate-600 rounded px-2 py-0.5 font-mono opacity-70">⌘K</kbd>
        </button>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 flex-1">
            {[
              { key: 'all',    label: 'All' },
              { key: 'featured', label: '⭐ Featured' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setCatFilter(f.key as FilterCat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  catFilter === f.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
            {/* Subcategory pills from breakdown */}
            {catCounts.slice(0, 6).map(([cat, cnt]) => {
              const meta = CATEGORY_META[cat] || { label: cat, emoji: '✨' };
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setQuery(meta.label + ' ' + cat);
                  }}
                  className="px-3 py-1.5 rounded-full text-xs bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:border-slate-500 transition"
                  title={`${cnt} services`}
                >
                  {meta.emoji} {meta.label} ({cnt})
                </button>
              );
            })}
          </div>

          {/* Sort + Popular toggle */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                checked={showOnlyPopular}
                onChange={(e) => setShowOnlyPopular(e.target.checked)}
                className="accent-purple-500 w-4 h-4"
              />
              Popular only
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="name">Sort: A–Z</option>
              <option value="popular">Sort: Popular</option>
              <option value="features">Sort: Most Features</option>
            </select>
          </div>
        </div>

        {/* Result counter */}
        <p className="text-sm text-slate-500 mb-6">
          Showing <span className="text-purple-400 font-semibold">{filtered.length}</span>
          {' '}of {aiServices.length} AI services
          {q && <span> for "<span className="text-slate-300">{q}</span>"</span>}
        </p>

        {/* Smart Search Modal (⌘K) */}
        {cmdKOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm"
               onClick={() => setCmdKOpen(false)}>
            <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                 onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 px-4 border-b border-slate-700/50">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, feature, or category…"
                  className="flex-1 bg-transparent py-3.5 text-white placeholder-slate-500 focus:outline-none"
                />
                <kbd className="text-xs bg-slate-800 border border-slate-600 rounded px-1.5 py-0.5 text-slate-400">ESC</kbd>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.slice(0, 10).map((s: Service) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    onClick={() => setCmdKOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/80 transition group"
                  >
                    <span className="text-xl">{s.icon || '🤖'}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white truncate group-hover:text-purple-300">{s.title}</div>
                      <div className="text-xs text-slate-500 truncate">{s.description}</div>
                    </div>
                    {s.popular && <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full">Popular</span>}
                  </Link>
                ))}
                {filtered.length === 0 && (
                  <p className="text-center text-slate-500 text-sm py-6">No results — try a different term</p>
                )}
                {filtered.length > 10 && (
                  <p className="text-center text-slate-600 text-xs py-2">
                    +{filtered.length - 10} more — refine your search
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Featured AI Services */}
        {featured.length > 0 && !q && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span>⭐</span> Featured AI Services
            </h2>
            <p className="text-slate-400 mb-8">Our most-requested AI solutions</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {featured.map((service: Service) => (
                <Link key={service.id} href={`/services/${service.id}`}
                  className="glass-card flex flex-col group hover:border-purple-500/50 transition">
                  <span className="text-3xl mb-3">{service.icon || '🤖'}</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 flex-1 line-clamp-3">{service.description}</p>
                  <span className="text-purple-400 text-xs mt-3 font-medium">View details →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All AI Services */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">
              {q ? `Search Results` : 'All AI Services'}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {filtered.length} service{filtered.length !== 1 ? 's' : ''}
              {catFilter === 'featured' && ' — featured only'}
              {showOnlyPopular && ' — popular'}
              {q && ` matching "${q}"`}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((service: Service) => (
                <Link key={service.id} href={`/services/${service.id}`}
                  className="glass-card flex flex-col p-5 group hover:border-purple-500/40 transition">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{service.icon || '🤖'}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">AI</span>
                    {service.popular && (
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full ml-auto">🔥</span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition leading-snug mb-1">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 flex-1 mt-1">{service.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-purple-400 text-xs font-medium group-hover:translate-x-1 transition-transform">
                      Details →
                    </span>
                    <span className="text-[10px] text-slate-600">
                      {(service.features || []).length} features
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl block mb-4 opacity-30">🔍</span>
              <p className="text-slate-400 text-lg mb-2">No AI services match your criteria</p>
              <p className="text-slate-600 text-sm">Try clearing the search or adjusting filters</p>
              <button
                onClick={() => { setQuery(''); setCatFilter('all'); setShowOnlyPopular(false); }}
                className="mt-4 text-purple-400 hover:text-purple-300 text-sm underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass-card p-10">
          <h2 className="text-2xl font-bold text-white mb-3">Can&apos;t find what you need?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            We can build a custom AI solution tailored to your exact requirements. Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+130****0950" className="btn-primary">📞 +1 302 464 0950</a>
            <Link href="/contact" className="btn-secondary">✉️ Contact Us</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
