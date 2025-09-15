"use client"
import React from 'react'

export default function ProductionAgentRiskReviews() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <a href="/updates" className="text-blue-400 hover:text-blue-300 text-sm">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Guide: Production Agent Risk Reviews</h1>
        <p className="mt-3 text-gray-300">Lightweight operational reviews with shared risk signals and rollback criteria for agents.</p>
        <div className="mt-8 space-y-6 text-gray-200 leading-7">
          <p>
            This guide outlines a practical process for deploying and operating autonomous agents safely in production.
            It focuses on shared risk signals, pre-deployment checks, and rollback policies that work across teams.
          </p>
          <h2 className="text-xl font-semibold text-white">What to review</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Override rate, groundedness, and policy violations</li>
            <li>Live evals and canary results with rollback thresholds</li>
            <li>Auditability and least-privilege permissions</li>
          </ul>
          <p>
            Adopt these checks as a lightweight ritual before promotions and as part of weekly operations.
          </p>
        </div>
      </div>
    </div>
  )
}

