import React from "react"
import { SEO } from "../../components/SEO"

export default function MicroCRM() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Micro CRM - Zion Tech Group"
        description="Streamline your customer relationship management with our Micro CRM solution. Perfect for small businesses and growing teams."
      />

      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Micro CRM</h1>
        <p className="text-xl text-slate-300 mb-10">
          Lightweight CRM to manage contacts, leads, and tasks.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-cyan-600 text-white rounded-lg">Start Free Trial</button>
          <button className="px-8 py-4 border border-cyan-400 text-cyan-300 rounded-lg">Watch Demo</button>
        </div>
      </section>
    </div>
  )
}