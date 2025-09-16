"use client"
import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Announcement: ZionGPT 2.1 Real‑Time Reasoning</h1>
          <p className="mt-2 text-gray-300">Faster step planning, improved tool arbitration, and lower latency streaming.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-16</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            ZionGPT 2.1 refines the real-time reasoning loop with better speculative decoding,
            adaptive step sizing, and calibrated tool arbitration. Early customers are seeing
            noticeable latency reductions and higher task completion rates.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Adaptive planning reduces unnecessary tool calls</li>
            <li>Streaming latency improved by 20–35% depending on workload</li>
            <li>More stable long-horizon reasoning with consistency checks</li>
          </ul>
          <h2>Availability</h2>
          <p>
            Rollout begins this week. Reach out to join the preview or request benchmarks.
          </p>
        </section>
      </article>
    </div>
  )
}

