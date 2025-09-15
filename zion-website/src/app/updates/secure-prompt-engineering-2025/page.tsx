"use client"
import React from 'react'

export default function SecurePromptEngineering2025() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <a href="/updates" className="text-sm text-blue-400 hover:text-blue-300">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guide: Secure Prompt Engineering (2025 Edition)
        </h1>
        <p className="mt-3 text-gray-300">2025-09-15 · Guide</p>
        <div className="mt-8 prose prose-invert prose-a:text-blue-400">
          <p>
            Harden LLM systems against prompt injection and data exfiltration with a practical approach to
            threat modeling, policy-as-code validation, and red-teaming.
          </p>
          <h3>What’s Inside</h3>
          <ul>
            <li>Risk tiers and sandboxing strategies for tool use</li>
            <li>Guardrails with structured prompts and constrained decoding</li>
            <li>Automated checks in CI/CD and production evals</li>
            <li>Sample policies and test cases you can adapt</li>
          </ul>
          <p>
            Use this guide to uplift security posture without slowing down delivery.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <p className="text-sm font-semibold text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Secure Prompt Engineering (2025 Edition)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical strategies for prompt hardening, jailbreak resistance, and least-privilege tool-use in production systems.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            This guide covers threat models, defense-in-depth patterns, and measurable safeguards to reduce abuse and prompt
            injection risks while preserving capability.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Template discipline with explicit instructions and deny lists</li>
            <li>Context sandboxing and structural parsing</li>
            <li>Guardrail evaluators with rollback criteria</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

