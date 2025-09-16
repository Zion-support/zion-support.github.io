import React from 'react'

export default function MeasuringAgenticROIPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="text-sm text-gray-400">Framework • 2025-09-15</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Measuring Agentic ROI</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical framework to quantify value and align cost with outcomes for multi-agent systems.
        </p>
        <div className="mt-8 space-y-6 text-gray-300">
          <p>
            Define business-centric SLOs and attribute costs to steps and tools. Tie improvements to measurable KPIs like
            MTTR, conversion rate, or cycle time reduction.
          </p>
          <h2 className="text-2xl font-semibold text-white">Scorecard</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Outcome: value units per dollar</li>
            <li>Reliability: pass rate across eval suites</li>
            <li>Efficiency: tokens and latency per task</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

