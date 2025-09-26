import React from "react"
import { SEO } from "../../components/SEO"

export default function AIWorkflowAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business with intelligent AI-powered workflow automation. Reduce manual tasks, improve efficiency, and scale operations seamlessly."
      />

      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">AI Workflow Automation</h1>
        <p className="text-xl text-slate-300 mb-10">
          Powerful, reliable automation to optimize operations.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-cyan-600 text-white rounded-lg">Get Started</button>
          <button className="px-8 py-4 border border-cyan-400 text-cyan-300 rounded-lg">Watch Demo</button>
        </div>
      </section>
    </div>
  )
}