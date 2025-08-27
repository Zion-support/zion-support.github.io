import React from 'react';
import { CakeIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { SEO } from '@/components/SEO';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and improve our services."
        canonical="https://ziontechgroup.com/cookies"
        keywords="cookie policy, privacy, data collection, website cookies"
      />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-orange-600/20 rounded-full">
              <CakeIcon className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how we use cookies and similar technologies to enhance your experience.
          </p>
          <p className="text-sm text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-3">What Are Cookies?</h2>
            <p className="text-gray-300">
              Cookies are small text files placed on your device when you visit our website. They help us remember your
              preferences, analyze site usage, and improve functionality.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-3">How We Use Cookies</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Essential:</strong> Required for core site functionality</li>
              <li><strong>Performance:</strong> Understand usage and improve reliability</li>
              <li><strong>Functional:</strong> Remember settings and preferences</li>
              <li><strong>Analytics:</strong> Insights into traffic and engagement</li>
              <li><strong>Marketing:</strong> Deliver relevant content and promotions</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-orange-600/20 flex items-center justify-center">
                <CakeIcon className="h-7 w-7 text-orange-400" />
              </div>
              <div className="font-semibold">Session Cookies</div>
              <div className="text-sm text-gray-300">Deleted when you close your browser</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center">
                <Cog6ToothIcon className="h-7 w-7 text-blue-400" />
              </div>
              <div className="font-semibold">Persistent Cookies</div>
              <div className="text-sm text-gray-300">Remain for a set period to remember preferences</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-emerald-600/20 flex items-center justify-center">
                <ShieldCheckIcon className="h-7 w-7 text-emerald-400" />
              </div>
              <div className="font-semibold">Third‑Party Cookies</div>
              <div className="text-sm text-gray-300">Set by analytics, social, or ad partners</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-3">Managing Preferences</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Adjust your browser settings to block or delete cookies</li>
              <li>Use extensions to manage cookie categories</li>
              <li>Update your choices via our consent banner</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p className="text-gray-300">
              Email: kleber@ziontechgroup.com • Phone: +1 302 464 0950 • Address: 364 E Main St STE 1008 Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

