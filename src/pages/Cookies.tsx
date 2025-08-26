import React from 'react';
import { CakeIcon, Cog6ToothIcon, ShieldCheckIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <CakeIcon className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing 
              experience and improve our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Are Cookies?
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CakeIcon className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Text Files</h3>
                <p className="text-gray-300 text-sm">
                  Stored on your device to remember your preferences
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>
                <p className="text-gray-300 text-sm">
                  Personalize content and improve functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Essential Cookies</h3>
              <p className="text-gray-300 text-center">
                Required for basic website functionality and security. These cannot be disabled.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cog6ToothIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Functional Cookies</h3>
              <p className="text-gray-300 text-center">
                Remember your preferences and settings to provide a personalized experience.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <EyeIcon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Analytics Cookies</h3>
              <p className="text-gray-300 text-center">
                Help us understand how visitors interact with our website to improve performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Managing Your Cookie Preferences
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              You have control over your cookie preferences. Most web browsers allow you to manage 
              cookies through their settings. You can:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Delete existing cookies from your device</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Set your browser to refuse cookies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Receive notifications when cookies are set</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-orange-600/20 rounded-lg border border-orange-600/30">
              <p className="text-orange-200 text-sm">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you have any questions about how we use cookies or this policy, please contact us.
          </p>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 inline-block">
            <p className="text-gray-300">
              <strong>Email:</strong> privacy@ziontechgroup.com<br />
              <strong>Phone:</strong> +1 (302) 464-0950<br />
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
