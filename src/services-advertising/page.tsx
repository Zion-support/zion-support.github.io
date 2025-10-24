import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { CheckCircle, Target, ArrowRight } from 'lucide-react'

export default function ServicesAdvertisingPage
ServicesAdvertisingPage.displayName = "ServicesAdvertisingPage"() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
=======
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
      {/* Header */}
      <header className=&quot;bg-white shadow-sm border-b&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4&quot;></div>
          <a href=&quot;/&quot; className=&quot;inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200&quot;>
            <ArrowLeft className=&quot;w-4 h-4 mr-2&quot; />
            Back to Home
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section className=&quot;relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;></section>
        <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold mb-6&quot;></div>
              <Target className=&quot;w-4 h-4 mr-2&quot; />
              AI-Powered Advertising Solutions
            </div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              AI Advertising Services
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto&quot;>
              Revolutionize Your Marketing with 300% ROI Guaranteed
            </p>
            <p className=&quot;text-lg mb-8 text-gray-300 max-w-4xl mx-auto&quot;>
              Transform your advertising campaigns with our breakthrough AI technology. Achieve 95% targeting accuracy,
              60% cost reduction, and 300% ROI with intelligent automation and predictive analytics. Our proven
              methodology has helped 500+ businesses increase their advertising effectiveness while reducing costs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a href=&quot;/contact&quot;
                className=&quot;bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center&quot;
              >
                Start Free Consultation
                <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
              </a>
              <a href=&quot;#services&quot;
                className=&quot;border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200&quot;
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Key Metrics */}
      <section className=&quot;py-16 bg-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Proven Advertising Results
            </h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Our AI-powered advertising delivers measurable business impact
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>300%</div>
              <div className=&quot;text-gray-600&quot;>Average ROI</div>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-green-600 mb-2&quot;>95%</div>
              <div className=&quot;text-gray-600&quot;>Targeting Accuracy</div>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-purple-600 mb-2&quot;>60%</div>
              <div className=&quot;text-gray-600&quot;>Cost Reduction</div>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-orange-600 mb-2&quot;>24/7</div>
              <div className=&quot;text-gray-600&quot;>Campaign Optimization</div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id=&quot;services&quot; className=&quot;py-16 bg-gray-50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              AI Advertising Solutions
            </h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Comprehensive AI-powered advertising services for maximum impact
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200&quot;></div>
              <div className=&quot;text-blue-600 text-4xl mb-4&quot;>🎯</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI-Powered Targeting</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Advanced machine learning algorithms that identify and target your ideal customers with 95% accuracy.
              </p>
              <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                <li>• Behavioral analysis</li>
                <li>• Predictive modeling</li>
                <li>• Real-time optimization</li>
                <li>• Lookalike audience creation</li>
                <li>• Cross-platform targeting</li>
              </ul>
              <div className=&quot;mt-4 text-sm text-green-600 font-semibold&quot;></div>
                Market Price: $2,000-5,000/month | Our Price: $1,200/month
              </div>
            </div>
            <div className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200&quot;></div>
              <div className=&quot;text-green-600 text-4xl mb-4&quot;>📊</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Campaign Optimization</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Continuous AI-driven optimization that maximizes performance and minimizes costs across all channels.
              </p>
              <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                <li>• A/B testing automation</li>
                <li>• Budget allocation</li>
                <li>• Performance monitoring</li>
                <li>• Bid optimization</li>
                <li>• Landing page optimization</li>
              </ul>
              <div className=&quot;mt-4 text-sm text-green-600 font-semibold&quot;></div>
                Market Price: $3,000-7,000/month | Our Price: $1,800/month
              </div>
            </div>
            <div className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200&quot;></div>
              <div className=&quot;text-purple-600 text-4xl mb-4&quot;>🤖</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Creative Generation</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                AI-generated ad creatives that adapt to audience preferences and platform requirements in real-time.
              </p>
              <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                <li>• Dynamic creative optimization</li>
                <li>• Personalization at scale</li>
                <li>• Multi-platform adaptation</li>
                <li>• Video ad generation</li>
                <li>• Brand consistency maintenance</li>
              </ul>
              <div className=&quot;mt-4 text-sm text-green-600 font-semibold&quot;></div>
                Market Price: $2,500-6,000/month | Our Price: $1,500/month
              </div>
            </div>
            <div className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200&quot;></div>
              <div className=&quot;text-orange-600 text-4xl mb-4&quot;>📱</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Social Media Advertising</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Comprehensive social media advertising management across all major platforms with AI optimization.
              </p>
              <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                <li>• Facebook & Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• TikTok & Snapchat ads</li>
                <li>• Twitter advertising</li>
                <li>• Cross-platform analytics</li>
              </ul>
              <div className=&quot;mt-4 text-sm text-green-600 font-semibold&quot;></div>
                Market Price: $2,000-5,000/month | Our Price: $1,200/month
              </div>
            </div>
            <div className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200&quot;></div>
              <div className=&quot;text-red-600 text-4xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Search Engine Marketing</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                AI-powered Google Ads and Bing advertising with intelligent keyword optimization and bid management.
              </p>
              <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                <li>• Google Ads management</li>
                <li>• Bing advertising</li>
                <li>• Keyword research & optimization</li>
                <li>• Ad copy generation</li>
                <li>• Performance tracking</li>
              </ul>
              <div className=&quot;mt-4 text-sm text-green-600 font-semibold&quot;></div>
                Market Price: $1,500-4,000/month | Our Price: $900/month
              </div>
            </div>
            <div className=&quot;bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200&quot;></div>
              <div className=&quot;text-indigo-600 text-4xl mb-4&quot;>📈</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Analytics & Reporting</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Advanced analytics and reporting with AI insights and automated performance recommendations.
              </p>
              <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                <li>• Real-time dashboards</li>
                <li>• AI-powered insights</li>
                <li>• Automated reporting</li>
                <li>• ROI optimization</li>
                <li>• Competitive analysis</li>
              </ul>
              <div className=&quot;mt-4 text-sm text-green-600 font-semibold&quot;></div>
                Market Price: $1,000-3,000/month | Our Price: $600/month
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className=&quot;py-16 bg-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Transparent Pricing
            </h2>
            <p className=&quot;text-xl text-gray-600&quot;>
              Choose the plan that fits your advertising needs
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200&quot;></div>
              <h3 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Starter</h3>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>$1,200<span className=&quot;text-lg text-gray-500&quot;>/month</span></div>
              <div className=&quot;text-sm text-green-600 font-semibold mb-6&quot;>Save 40% vs market rates</div>
              <ul className=&quot;space-y-3 mb-8&quot;>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Up to $10K ad spend</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>AI targeting optimization</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Basic reporting & analytics</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Email support</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>2 platforms included</span>
                </li>
              </ul>
              <button className=&quot;w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200&quot;>
                Get Started
              </button>
            </div>
            <div className=&quot;bg-blue-600 text-white rounded-lg p-8 relative&quot;></div>
              <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                <span className=&quot;bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold&quot;>Most Popular</span>
              </div>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Professional</h3>
              <div className=&quot;text-4xl font-bold mb-2&quot;>$2,500<span className=&quot;text-lg text-blue-200&quot;>/month</span></div>
              <div className=&quot;text-sm text-green-300 font-semibold mb-6&quot;>Save 50% vs market rates</div>
              <ul className=&quot;space-y-3 mb-8&quot;>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-300 mr-3&quot; />
                  <span>Up to $50K ad spend</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-300 mr-3&quot; />
                  <span>Advanced AI optimization</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-300 mr-3&quot; />
                  <span>Creative generation</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-300 mr-3&quot; />
                  <span>Priority support</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-300 mr-3&quot; />
                  <span>Custom reporting</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-300 mr-3&quot; />
                  <span>All platforms included</span>
                </li>
              </ul>
              <button className=&quot;w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200&quot;>
                Get Started
              </button>
            </div>
            <div className=&quot;bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200&quot;></div>
              <h3 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>Enterprise</h3>
              <div className=&quot;text-4xl font-bold text-blue-600 mb-2&quot;>$5,000<span className=&quot;text-lg text-gray-500&quot;>/month</span></div>
              <div className=&quot;text-sm text-green-600 font-semibold mb-6&quot;>Save 60% vs market rates</div>
              <ul className=&quot;space-y-3 mb-8&quot;>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Unlimited ad spend</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Full AI suite</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Dedicated account manager</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>24/7 support</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>Custom integrations</span>
                </li>
                <li className=&quot;flex items-center&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-3&quot; />
                  <span>White-label options</span>
                </li>
              </ul>
              <button className=&quot;w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Ready to Transform Your Advertising?
          </h2>
          <p className=&quot;text-xl mb-8 text-blue-100&quot;>
            Get a free AI advertising assessment and discover how we can boost your ROI by 300%
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a href=&quot;/contact&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center&quot;
            >
              Get Free Assessment
              <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
            </a>
            <a href=&quot;/case-studies&quot;
              className=&quot;border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200&quot;
            >
              View Success Stories
            </a>
          </div>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
        </div>
      </div>
    </div>
  )
}
