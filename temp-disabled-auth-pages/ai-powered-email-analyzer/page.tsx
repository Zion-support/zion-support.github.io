'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">

        <div className="container mx-auto px-4 py-20">

          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ai Powered Email Analyzer
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Professional ai powered email analyzer services and solutions from Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Analysis</h3>
              <p className="text-gray-300 mb-4">Advanced AI-powered email analysis and insights.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Sentiment analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Content optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Performance tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Automated insights
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4">Comprehensive analytics and reporting for email campaigns.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Real-time metrics
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Custom reports
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Data visualization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Performance insights
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Optimization</h3>
              <p className="text-gray-300 mb-4">AI-driven optimization for better email performance.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  A/B testing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Content suggestions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Timing optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Personalization
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">

            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}