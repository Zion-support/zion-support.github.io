import React from "react";
import { Helmet } from "react-helmet-async";

export default function E2EEvalPipelines(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Oct 1, 2025: E2E Evaluation Pipelines</title>
        <meta name="description" content="End-to-end evaluation pipelines for generative AI systems with automated testing." />
        <link rel="canonical" href="https://ziontechgroup.com/blog/genai-2025-oct-01-e2e-eval-pipelines" />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Oct 1, 2025: E2E Evaluation Pipelines</h1>
        <p className="text-zion-slate-light mb-8">End-to-end evaluation pipelines for generative AI systems with automated testing.</p>
        <div className="prose prose-invert max-w-3xl">
          <p>
            Build comprehensive end-to-end evaluation pipelines for generative AI systems with automated testing and validation.
          </p>
        </div>
      </div>
    </div>
  );
}