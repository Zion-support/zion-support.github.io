import React from 'react';

type BlogPost = {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: React.ReactNode;
};

const posts: Record<string, BlogPost> = {
  'ai-deployment-blueprint-2025': {
    title: 'AI Deployment Blueprint: Launch Faster in 2025',
    date: '2025-09-12',
    tag: 'AI',
    excerpt:
      'A pragmatic guide to ship AI assistants, analytics, and automation safely and quickly.',
    content: (
      <>
        <p>
          Getting AI into production quickly requires a practical blueprint: clear use cases,
          data readiness, a minimal-but-robust stack, and strong observability from day one.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Recommended Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assistant core with retrieval augmented generation (RAG)</li>
          <li>Event-driven orchestration for workflows and tools</li>
          <li>Analytics with structured logging and tracing</li>
          <li>Guardrails for safety, privacy, and cost controls</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Deployment Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Start with one measurable workflow and expand</li>
          <li>Use feature flags for rapid iteration</li>
          <li>Instrument everything; analyze weekly</li>
        </ul>
      </>
    ),
  },
  'service-pricing-starters-for-smbs': {
    title: 'Starter Pricing: AI, IT, and Web3 Service Bundles',
    date: '2025-09-12',
    tag: 'Business',
    excerpt:
      'Transparent entry pricing and project ranges so teams can budget with confidence.',
    content: (
      <>
        <p>
          We designed entry-level bundles to help teams kick off AI, IT, and Web3 projects with
          predictable scope and clear milestones.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Popular Bundles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>AI Assistant Starter: knowledge base + chat + analytics</li>
          <li>Cloud Foundations: secure, automated CI/CD with cost guardrails</li>
          <li>Web3 Pilot: contract + gateway + basic dashboards</li>
        </ul>
        <p className="mt-6">
          Each bundle includes a roadmap, weekly check-ins, and success metrics so you can prove
          value quickly and scale with confidence.
        </p>
      </>
    ),
  },
  'web3-stack-checklist-for-enterprise': {
    title: 'Enterprise Web3 Stack Checklist',
    date: '2025-09-12',
    tag: 'Web3',
    excerpt:
      'From smart contracts to infra, a minimal-but-complete list to get production-ready.',
    content: (
      <>
        <p>
          This checklist covers critical components for a secure, scalable enterprise Web3 stack
          including contracts, infra, data, and compliance.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Checklist Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contracts: audits, upgradability strategy, and test coverage</li>
          <li>Infra: nodes, gateways, indexers, and monitoring</li>
          <li>Security: key management, policies, and incident playbooks</li>
          <li>Data: indexing, analytics, and archival strategies</li>
        </ul>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return {};
  return {
    title: `${post.title} - Zion OS Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <p className="mt-4 text-white/70">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs uppercase tracking-wide text-white/70 mb-2">{post.tag}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{post.title}</h1>
          <div className="text-white/80">{new Date(post.date).toLocaleDateString()}</div>
        </div>
      </header>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-3xl mx-auto text-white/90">
          {post.content}
        </div>
      </section>
    </article>
  );
}

