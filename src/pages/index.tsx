import React from "react"
import Head from "next/head"
import Link from "next/link"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group — AI, Micro SaaS, and IT Solutions</title>
        <meta name="description" content="Zion Tech Group delivers AI services, micro SaaS solutions, and enterprise IT services. Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Build Faster with AI, Micro SaaS, and IT Solutions</h1>
            <p className="text-xl text-gray-600 mb-12">We help companies ship faster and grow smarter with AI automation, productized micro SaaS, and secure, scalable infrastructure.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• AI Content Generation Suite — from $299/mo</li>
                  <li>• Smart CRM Platform — from $199/mo</li>
                  <li>• AI Email Responder — from $149/mo</li>
                  <li>• Event Management Dashboard — from $399/mo</li>
                  <li>• Customer Support Platform — from $249/mo</li>
                  <li>• AI Talent Matching Platform — from $499/mo</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Proven ROI: 30–300% gains reported by clients</li>
                  <li>• Enterprise-grade security and compliance</li>
                  <li>• Built for scale with modern cloud-native stacks</li>
                  <li>• Transparent pricing, fast onboarding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;