import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function BlogPost(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Consentless Journeys v3 — Private Personalization &lt;100ms</title>
        <meta 
          name="description" 
          
        <link rel="canonical" href="https://ziontechgroup.com/blog/edge-2025-oct-01-consentless-journeys-v3
        />
      </Helmet>" />
" />
      

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Consentless Journeys v3
        </h1>
        <p className="text-zion-slate-light mb-8">Private Personalization &lt;100ms</p>
        <div className="prose prose-invert max-w-3xl">
          <p>
            This is a placeholder for the blog post content. The original content had syntax errors
            that prevented proper parsing. Please update this content with the correct information.
          </p>
        </div>
        
        <div className="mt-8">
          <Link to="/blog" className="text-cyan-300 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    </div>
  );
}