import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
        keywords="cookie policy, privacy, data collection, website cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="bg-zion-blue-dark rounded-lg p-8 border border-zion-blue-light">
              <p className="text-zion-slate-light mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    We use cookies for several purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light mt-4 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand how visitors use our site</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies to provide relevant content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Required for basic website functionality and security.
                      </p>
                    </div>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Preference Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Remember your settings and preferences for future visits.
                      </p>
                    </div>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Used to deliver relevant advertisements and content.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light mt-4 space-y-2">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Set preferences for different types of cookies</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    If you have any questions about our cookie policy or how we use cookies, please contact us:
                  </p>
                  <div className="bg-white/20 rounded-lg p-4 mt-4">
                    <p className="text-gray-300">
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />
                      <strong>Phone:</strong> +1 (302) 464-0950<br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
