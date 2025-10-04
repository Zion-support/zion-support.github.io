import React from "react";
import { Helmet } from "react-helmet-async";

export default function GenAIE2EEvalPipelines(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>GenAI 2025: E2E Eval Pipelines</title>
        <meta name="description" content="End-to-end evaluation pipelines for generative AI models." />
        <link rel="canonical" href="https://ziontechgroup.com/blog/genai-2025-oct-01-e2e-eval-pipelines" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GenAI 2025: E2E Eval Pipelines</h1>
          <p className="text-zion-slate-light mb-8">Comprehensive evaluation pipelines for generative AI model assessment.</p>
          <div className="prose prose-invert max-w-3xl">
            <p>
              Build robust evaluation pipelines for generative AI models with comprehensive testing and validation.
              Our E2E approach ensures thorough model assessment across all dimensions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}