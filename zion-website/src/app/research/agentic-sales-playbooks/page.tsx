import React from 'react'

export const metadata = {
  title: 'AI 2025: Agentic Sales Playbooks for Revenue Teams',
  description: 'Deploy agentic AI to scale prospecting, personalize outreach, and accelerate pipeline—safely and measurably.',
}

export default function AgenticSalesPlaybooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-10">
        <p className="text-sm text-gray-400">Published: 2025-09-15 · Category: Enterprise AI</p>
        <h1 className="text-4xl font-bold text-white mt-2">AI 2025: Agentic Sales Playbooks for Revenue Teams</h1>
        <p className="text-lg text-gray-300 mt-4">How leading teams use agentic AI to scale prospecting, personalize outreach, and accelerate pipeline without burning out sellers.</p>
      </header>

      <article className="prose prose-invert prose-lg max-w-none">
        <h2>Why Agentic AI for Sales</h2>
        <p>Agentic AI coordinates multi-step workflows autonomously: researching accounts, drafting multi-touch sequences, scheduling meetings, and capturing notes into CRM. With robust guardrails and approvals, teams unlock leverage while maintaining control.</p>

        <h2>Core Playbooks</h2>
        <ul>
          <li>ICP Prospecting: agent scouts accounts, enriches contacts, drafts tailored openers</li>
          <li>Meeting Prep: agent compiles research, suggests discovery questions, builds a mutual action plan</li>
          <li>Follow-ups: summarizes calls, drafts next steps, books stakeholder sessions</li>
          <li>Renewals: risk signals, adoption insights, expansion triggers, executive briefs</li>
        </ul>

        <h2>Architecture</h2>
        <p>Event-driven design with a workflow engine, retrieval for context, tools for CRM/calendar/email, and a safety layer for approvals. Start with one playbook, measure cycle time and response lift, then scale.</p>

        <h2>Expected Impact</h2>
        <p>Teams report 20–35% qualified pipeline lift and 10–20% faster deal cycles within two quarters when pairing agentic workflows with clear operating guidelines.</p>
      </article>

      <footer className="mt-12 flex items-center justify-between">
        <a href="/research" className="text-blue-400 font-semibold hover:text-blue-300">← Back to Research</a>
        <a href="/contact" className="text-black bg-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">Deploy Agentic Sales</a>
      </footer>
    </div>
  )
}

