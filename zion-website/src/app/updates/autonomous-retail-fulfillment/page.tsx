import React from 'react'

export default function AutonomousRetailFulfillmentUpdatePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="text-sm text-gray-400">Case Study • 2025-09-15</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Autonomous Retail Fulfillment at Scale</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          How autonomous agents improved on-time, in-full (OTIF) by 11% and reduced operating costs across a
          global retailer by optimizing picking, routing, and exception handling.
        </p>
        <div className="mt-8 space-y-6 text-gray-300">
          <p>
            We deployed a multi-agent system coordinating demand forecasting, slotting, and last-mile routing. The system
            incorporated policy-as-code guardrails and real-time monitoring with recovery playbooks.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>11% improvement in OTIF across 14 regional DCs</li>
            <li>18% reduction in mileage through dynamic routing and batching</li>
            <li>Sub-60s recovery from exceptions via autonomous incident handling</li>
          </ul>
          <p>
            Interested in similar outcomes? <a className="text-blue-400 hover:text-blue-300" href="/contact">Get in touch →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

