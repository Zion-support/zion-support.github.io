import React from 'react';';
import { Helmet } from 'react-helmet-async';';
import { Link } from 'react-router-dom';
;
const AIServices: React.FC: ()  => {,,,
  return (
    <div className: "min-h-screen bg-white">,
      <Helmet>
        <title>AI Services – Zion Tech Group</title>
        <meta name: "description" content ="Applied AI solutions: RAG chatbots, IDP, Predictive Analytics, Vision, and MLOps. Transparent pricing and fast delivery." />,
        <link rel: "canonical" href ="https://ziontechgroup.com/services/ai-services" />,
      </Helmet>

      <section className: "bg-gradient-to-br from-blue-50 to-indigo-50 py-16">,
        <div className: "max-w-7xl mx-auto px-6">,
          <h1 className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Services</$1>";,
          <p className: "text-lg md:text-xl text-gray-600 max-w-3xl">Production-grade AI to automate workflows, enrich customer experiences, and unlock data-driven decisions.</$1>";,
          <div className: "mt-6 flex flex-wrap gap-3 text-sm text-gray-700">,
            <span className: "px-3 py-1 rounded-full bg-white border">RAG Chatbots</$1>";,
            <span className: "px-3 py-1 rounded-full bg-white border">Intelligent Document Processing</$1>";,
            <span className: "px-3 py-1 rounded-full bg-white border">Predictive Analytics</$1>";,
            <span className: "px-3 py-1 rounded-full bg-white border">Computer Vision</$1>";,
            <span className: "px-3 py-1 rounded-full bg-white border">MLOps</$1>";,
          </div>
          <div className: "mt-8 flex gap-4">,
            <Link to: "/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Book a consultation</$1>";,
            <a href: "tel:+13024640950" className ="inline-flex items-center px-6 py-3 rounded-lg bg-white border hover:bg-gray-50">Call +1 302 464 0950</$1>";,
          </div>
        </div>
      </section>

      <section className: "py-16">,
        <div className: "max-w-7xl mx-auto px-6">,
          <h2 className: "text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Packages & Pricing</$1>";,
          <div className: "grid grid-cols-1 md:grid-cols-3 gap-6">,
            <div className: "border rounded-xl p-6">,
              <h3 className: "text-xl font-semibold">Starter</$1>";,
              <p className: "text-gray-600 mt-2">POC chatbot or small IDP flow</$1>";,
              <p className: "text-3xl font-bold mt-4">$3,000–$6,000</$1>";,
              <ul className: "mt-4 space-y-2 text-sm text-gray-700">,
                <li >• 1 data connector (Google Drive/Notion/S3)</li>
                <li >• Basic RAG, evals, guardrails</li>
                <li >• 2 weeks delivery</li>
              </ul>
            </div>
            <div className: "border rounded-xl p-6">,
              <h3 className: "text-xl font-semibold">Growth</$1>";,
              <p className: "text-gray-600 mt-2">Multi-source AI assistant or IDP</$1>";,
              <p className: "text-3xl font-bold mt-4">$8,000–$18,000</$1>";,
              <ul className: "mt-4 space-y-2 text-sm text-gray-700">,
                <li >• 3–5 data connectors + analytics</li>
                <li >• Fine-tuned prompts, monitoring</li>
                <li >• 4–6 weeks delivery</li>
              </ul>
            </div>
            <div className: "border rounded-xl p-6">,
              <h3 className: "text-xl font-semibold">Enterprise</$1>";,
              <p className: "text-gray-600 mt-2">End-to-end AI with MLOps</$1>";,
              <p className: "text-3xl font-bold mt-4">$25,000+</$1>";,
              <ul className: "mt-4 space-y-2 text-sm text-gray-700">,
                <li >• SSO, RBAC, SLAs</li>
                <li >• Eval harness, offline queues</li>
                <li >• SOC2-ready deployment</li>
              </ul>
            </div>
          </div>

          <div className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">,
            <div className: "bg-gray-50 rounded-xl p-6">,
              <h3 className: "text-lg font-semibold">Capabilities</$1>";,
              <ul className: "mt-4 space-y-2 text-gray-700">,
                <li >• Retrieval-Augmented Generation with vector stores</li>
                <li >• Document intake, OCR, entity extraction, validation</li>
                <li >• Forecasting, churn/CLV models, lead scoring</li>
                <li >• Vision: quality inspection, ID capture, redaction</li>,,
                <li >• Observability: prompt evals, drift, PII filters</li>,,
              </ul>
            </div>
            <div className: "bg-gray-50 rounded-xl p-6">,
              <h3 className: "text-lg font-semibold">Useful Links</$1>";,
              <ul className: "mt-4 space-y-2 text-blue-700">,
                <li ><a className: "hover:underline" href="https://ziontechgroup.com/services/ai-services">AI Services page</a></$1>";,
                <li ><a className: "hover:underline" href="https://ziontechgroup.com/contact">Contact us</a></$1>";,
                <li ><a className: "hover:underline" href="https://ziontechgroup.com/pricing">Pricing</a></$1>";,
                <li ><a className: "hover:underline" href ="https://github.com/ZionClouds">GitHub</a></$1>";,
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;

;