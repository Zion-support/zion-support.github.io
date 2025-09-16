import React from 'react'

export default function AgenticQualityScorecardsPage() {

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← Back to updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Guide: Agentic Quality Scorecards (2026)</h1>
        <p className="mt-4 text-gray-300">Unify evals, policy events, incidents, and business KPIs into actionable scorecards.</p>

        <div className="mt-8 space-y-6 text-gray-300">
          <p>Agentic Quality Scorecards help organizations standardize how they measure quality, safety, and business impact across AI agents. This guide covers the core metrics, collection mechanisms, and a reference operating model to drive continuous improvement.</p>
          <h2 className="text-xl font-semibold text-white">What to Measure</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reliability: success rates, override rates, MTTR, policy violation counts</li>
            <li>Quality: groundedness, factuality, rubric-based task scores</li>
            <li>Safety: red-team findings, guardrail triggers, incident severity and frequency</li>
            <li>Business: conversion uplift, cost per successful task, customer satisfaction</li>
          </ul>
          <h2 className="text-xl font-semibold text-white">Operating Model</h2>
          <p>Adopt weekly scorecard reviews with clear owners, pre-defined thresholds, and automated alerts. Integrate with CI/CD to block risky releases and promote proven improvements.</p>
        </div>

        <div className="mt-10">
          <a href="/" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Return home →</a>
        </div>
      </div>
    </div>
  )
}

