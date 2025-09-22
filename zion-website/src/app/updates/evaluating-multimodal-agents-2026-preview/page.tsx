"use client"
import React from 'react'

export default function EvaluatingMultimodalAgents2026PreviewPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Evaluating Multimodal Agents (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical rubric and harnesses to evaluate multimodal grounding, tool use, and safety across image, text, and
          structured inputs.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            This preview covers core metrics, reference tasks, and dataset design principles to assess perception,
            reasoning, and action safety. Includes pointers to open-source harnesses and evaluation checklists.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Grounding and alignment metrics</li>
            <li>Tool-use reliability and error recovery</li>
            <li>Safety signals and red-teaming prompts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

