import React from "react";
import { Helmet } from "react-helmet-async";

export default function BlogPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Enterprise RAG Security v2 — Auth-Aware, Fresh, Signed</title>
        <meta 
          name="description" 
          content="Auth-scoped retrieval, freshness windows, prompt firewalls, and signed outputs that keep answers correct and compliant." 
        />
        <link 
          rel="canonical" 
          href="https://ziontechgroup.com/blog/ai-2025-oct-01-enterprise-rag-security-v2" 
        />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise RAG Security v2</h1>
        <p className="text-zion-slate-light mb-8">Auth-Aware, Fresh, Signed</p>
        <div className="prose prose-invert max-w-3xl">
          <p>
            Upgrade enterprise RAG safety with auth-aware retrieval, freshness windows,
            prompt firewalls, and signed outputs. Prevent data leaks and stale answers
            while maintaining performance guarantees.
          </p>
          <p>
            This guide covers retrieval scoping by user and tenant, freshness and
            staleness windows, cache invalidation signals, and output signing with
            verifiers that run in CI and production.
          </p>
        </div>
        <div className="mt-8">
          <a href="/blog" className="text-cyan-300 hover:underline">← Back to Blog</a>
        </div>
      </div>
    </div>
  );
}