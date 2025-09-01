import React from 'react';'
import { SEO } from '@/components/SEO';

export default function Dashboard() {
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <SEO""
        title="Dashboard - Zion Tech Group""
        description="Access your Zion Tech Group dashboard to manage your services, view analytics, and control your account.""
        keywords="dashboard, account management, services, analytics""
        canonical="https://ziontechgroup.com/dashboard"
      />
"
      {/* Header */}""
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center mb-12">""
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Your Dashboard"
            </h1>""
            <p className="text-xl text-gray-300">
              Monitor your services, track performance, and manage your Zion
              Tech Group solutions.
            </p>
          </div>"
""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Status */}"
            <div>""
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">""
                <h3 className="text-xl font-bold text-white mb-4">
                  Service Status"
                </h3>""
                <div className="grid grid-cols-3 gap-4">""
                  <div className="text-center">""
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      100%"
                    </div>""
                    <div className="text-gray-300 text-sm">Active</div>"
                  </div>""
                  <div className="text-center">""
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      99.9%"
                    </div>""
                    <div className="text-gray-300 text-sm">Uptime</div>"
                  </div>""
                  <div className="text-center">""
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      24/7"
                    </div>""
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}"
            <div>""
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">""
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Actions"
                </h3>""
                <div className="space-y-3">"
                  <a""
                    href="/contact""
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center transition-colors"
                  >
                    Contact Support
                  </a>"
                  <a""
                    href="/services""
                    className="block w-full bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 px-4 py-3 rounded-lg text-center transition-colors"
                  >
                    View Services
                  </a>"
                  <a""
                    href="/request-quote""
                    className="block w-full bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 px-4 py-3 rounded-lg text-center transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
"
          {/* Recent Activity */}""
          <div className="mt-8">""
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">""
              <h2 className="text-2xl font-bold text-white mb-6">
                Recent Activity"
              </h2>""
              <div className="space-y-4">""
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">"
                  <div>""
                    <div className="text-white font-medium">Service Update</div>""
                    <div className="text-gray-300 text-sm">
                      AI Business Intelligence service upgraded to v2.1
                    </div>"
                  </div>""
                  <div className="text-gray-400 text-sm">2 hours ago</div>"
                </div>""
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">"
                  <div>""
                    <div className="text-white font-medium">Support Ticket</div>""
                    <div className="text-gray-300 text-sm">
                      Ticket #1234 resolved successfully
                    </div>"
                  </div>""
                  <div className="text-gray-400 text-sm">1 day ago</div>"
                </div>""
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">"
                  <div>""
                    <div className="text-white font-medium">New Feature</div>""
                    <div className="text-gray-300 text-sm">
                      Advanced analytics dashboard now available
                    </div>"
                  </div>""
                  <div className="text-gray-400 text-sm">3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
"
      {/* Contact CTA */}""
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help with Your Dashboard?"
          </h2>""
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help you get the most out of your Zion
            Tech Group services."
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a""
              href="tel:+13024640950""
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call + 1 (302) 464 - 0950
            </a>"
            <a""
              href="/contact""
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>) ;
}'"
'"'"