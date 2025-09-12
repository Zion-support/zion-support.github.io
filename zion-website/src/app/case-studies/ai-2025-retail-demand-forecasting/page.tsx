import React from 'react';
import { Metadata } from 'next';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: AI Retail Demand Forecasting (32% Stockouts Reduction) | Zion Tech Group',
  description: 'How a global retailer used AI-driven demand forecasting to reduce stockouts by 32%, cut waste by 18%, and lift revenue by 5%.',
  keywords: 'retail AI, demand forecasting, case study, inventory optimization, time series, machine learning',
  openGraph: {
    title: 'AI Retail Demand Forecasting: 32% Stockouts Reduction',
    description: 'Global retailer implemented AI demand forecasting, reducing stockouts by 32% and waste by 18% with weekly retraining and store-level features.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Retail', 'Forecasting', 'Machine Learning', 'Case Study'],
  },
};

export default function RetailDemandForecastingCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/case-studies" 
              className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Retail Demand Forecasting: 32% Stockouts Reduction
            </h1>
            
            <div className="flex flex-wrap items-center text-emerald-100 text-sm space-x-6">
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-2" />
                Zion Tech Group
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                September 12, 2025
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" />
                12 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A global retailer struggled with frequent stockouts and high food waste across 1,200 stores. We delivered an AI-driven demand forecasting platform that reduced stockouts by 32% and waste by 18% within three months.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Business Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-emerald-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">32%</div>
              <div className="text-gray-700">Reduction in Stockouts</div>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">18%</div>
              <div className="text-gray-700">Lower Waste</div>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">+5%</div>
              <div className="text-gray-700">Revenue Lift</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Solution Overview</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Unified historical sales, promos, weather, holidays, and local events</li>
            <li>Store-SKU level forecasting with gradient boosted trees and temporal features</li>
            <li>Weekly retraining with drift detection and backtesting</li>
            <li>Prescriptive ordering with inventory and lead time constraints</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Architecture</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Data Lake + Feature Store for consistent, reusable features</li>
              <li>Model training on scalable compute; model registry with approvals</li>
              <li>Batch forecasts nightly; real-time overrides for managers</li>
              <li>Monitoring for MAPE, bias, drift; alerting to Slack</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Looking to Transform Retail Operations?</h3>
            <p className="text-gray-700 mb-6">
              We build forecasting platforms that improve availability and reduce waste. Start with a targeted pilot and scale across categories and regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center"
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/content-showcase" 
                className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors text-center"
              >
                Explore More Content
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

