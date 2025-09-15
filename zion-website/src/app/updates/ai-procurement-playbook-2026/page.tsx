"use client"
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-400">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Procurement Playbook (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical, responsible approach to sourcing and evaluating AI systems with clear guardrails, objective
          evaluation criteria, and policy-as-code checks across the procurement lifecycle.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Requirements templates with risk and control mapping</li>
            <li>Standardized evaluation rubrics and golden datasets</li>
            <li>Vendor attestations, evidence capture, and audit readiness</li>
            <li>Runtime guardrails and continuous compliance post-award</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

