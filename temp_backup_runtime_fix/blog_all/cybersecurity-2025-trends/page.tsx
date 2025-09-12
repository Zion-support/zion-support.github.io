import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                Security
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cybersecurity Trends Every Business Should Know in 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The evolving threat landscape and essential security measures every organization needs to implement this year.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>January 5, 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>By Zion Tech Group Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Threats</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>AI-powered phishing and deepfake-enabled social engineering</li>
              <li>Supply-chain attacks targeting CI/CD and package registries</li>
              <li>Ransomware-as-a-service and data exfiltration monetization</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Defensive Priorities</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Identity-first security with hardware-backed MFA and conditional access.</li>
              <li>SBOMs, signed artifacts, and org-wide dependency hygiene.</li>
              <li>Continuous threat modeling and automated tabletop exercises.</li>
              <li>Data security posture management across multi-cloud environments.</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strengthen Your Security Posture</h3>
              <p className="text-gray-600 mb-6">We design pragmatic security programs that reduce risk without slowing teams.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Talk to Security Experts</Link>
                <Link href="/services/cybersecurity" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">Explore Cybersecurity</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

