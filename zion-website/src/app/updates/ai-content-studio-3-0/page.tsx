import React from 'react'

export default function AIContentStudioV3Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
              Launch
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI Content Studio v3.0
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-gray-300">
            Revolutionary content creation platform with advanced AI writing, video generation, and multi-modal publishing capabilities.
          </p>
          
          <div className="mt-8 flex items-center gap-x-6">
            <time className="text-sm text-gray-400" dateTime="2025-01-16">
              January 16, 2025
            </time>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="prose prose-invert prose-lg">
            <h2 className="text-2xl font-bold text-white">What's New in v3.0</h2>
            
            <p className="text-gray-300">
              AI Content Studio v3.0 represents a quantum leap in content creation technology. This revolutionary platform combines 
              advanced AI writing capabilities with cutting-edge video generation and multi-modal publishing features.
            </p>

            <h3 className="text-xl font-semibold text-white">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advanced AI Writing Engine with quantum-enhanced natural language processing</li>
              <li>Real-time video generation from text prompts</li>
              <li>Multi-modal content publishing across 50+ platforms</li>
              <li>Brand voice consistency across all content types</li>
              <li>Automated SEO optimization and performance tracking</li>
              <li>Collaborative editing with AI-powered suggestions</li>
            </ul>

            <h3 className="text-xl font-semibold text-white">Performance Improvements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>300% faster content generation</li>
              <li>95% accuracy in brand voice matching</li>
              <li>50% reduction in editing time</li>
              <li>Real-time collaboration for teams of any size</li>
            </ul>

            <h3 className="text-xl font-semibold text-white">Enterprise Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advanced analytics and performance tracking</li>
              <li>Custom AI model training for brand-specific content</li>
              <li>Enterprise-grade security and compliance</li>
              <li>API integration with existing workflows</li>
            </ul>

            <div className="mt-8 p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400">Get Started Today</h4>
              <p className="mt-2 text-gray-300">
                Transform your content creation process with AI Content Studio v3.0. 
                Start your free trial and experience the future of content creation.
              </p>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}