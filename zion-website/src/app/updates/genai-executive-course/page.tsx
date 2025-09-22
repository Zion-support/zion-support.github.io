"use client"
import React from 'react'

export default function GenAIExecutiveCoursePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-400">Course</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">GenAI for Executives</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          An executive-focused program on AI strategy, governance, and ROI with practical frameworks and case studies.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            Learn how to evaluate AI opportunities, set measurable objectives, and build cross-functional operating
            models. Includes governance templates, risk registers, and success metrics.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strategy and portfolio planning</li>
            <li>Governance and risk management</li>
            <li>Measuring ROI and time-to-value</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
            Request syllabus
          </a>
        </div>
      </div>
    </div>
  )
}