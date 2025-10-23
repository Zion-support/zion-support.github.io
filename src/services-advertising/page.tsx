<<<<<<< HEAD
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { CheckCircle, Target, ArrowRight } from 'lucide-react'

=======
import React from 'react';
<<<<<<< HEAD
import { ArrowLeft, CheckCircle, ArrowRight, Target, Check } from 'lucide-react';
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Advertising Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Advertising Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Revolutionize Your Marketing with 300% ROI Guaranteed
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              Transform your advertising campaigns with our breakthrough AI technology. Achieve 95% targeting accuracy,
              60% cost reduction, and 300% ROI with intelligent automation and predictive analytics. Our proven
              methodology has helped 500+ businesses increase their advertising effectiveness while reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Advertising Results
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered advertising delivers measurable business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Targeting Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Campaign Optimization</div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Advertising Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered advertising services for maximum impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Targeting</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms that identify and target your ideal customers with 95% accuracy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Behavioral analysis</li>
                <li>• Predictive modeling</li>
                <li>• Real-time optimization</li>
                <li>• Lookalike audience creation</li>
                <li>• Cross-platform targeting</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $2,000-5,000/month | Our Price: $1,200/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-green-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Campaign Optimization</h3>
              <p className="text-gray-600 mb-4">
                Continuous AI-driven optimization that maximizes performance and minimizes costs across all channels.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• A/B testing automation</li>
                <li>• Budget allocation</li>
                <li>• Performance monitoring</li>
                <li>• Bid optimization</li>
                <li>• Landing page optimization</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $3,000-7,000/month | Our Price: $1,800/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-purple-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">Creative Generation</h3>
              <p className="text-gray-600 mb-4">
                AI-generated ad creatives that adapt to audience preferences and platform requirements in real-time.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dynamic creative optimization</li>
                <li>• Personalization at scale</li>
                <li>• Multi-platform adaptation</li>
                <li>• Video ad generation</li>
                <li>• Brand consistency maintenance</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $2,500-6,000/month | Our Price: $1,500/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-orange-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Social Media Advertising</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive social media advertising management across all major platforms with AI optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Facebook & Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• TikTok & Snapchat ads</li>
                <li>• Twitter advertising</li>
                <li>• Cross-platform analytics</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $2,000-5,000/month | Our Price: $1,200/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-red-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Search Engine Marketing</h3>
              <p className="text-gray-600 mb-4">
                AI-powered Google Ads and Bing advertising with intelligent keyword optimization and bid management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Google Ads management</li>
                <li>• Bing advertising</li>
                <li>• Keyword research & optimization</li>
                <li>• Ad copy generation</li>
                <li>• Performance tracking</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $1,500-4,000/month | Our Price: $900/month
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-indigo-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and reporting with AI insights and automated performance recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time dashboards</li>
                <li>• AI-powered insights</li>
                <li>• Automated reporting</li>
                <li>• ROI optimization</li>
                <li>• Competitive analysis</li>
              </ul>
              <div className="mt-4 text-sm text-green-600 font-semibold">
                Market Price: $1,000-3,000/month | Our Price: $600/month
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your advertising needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$1,200<span className="text-lg text-gray-500">/month</span></div>
              <div className="text-sm text-green-600 font-semibold mb-6">Save 40% vs market rates</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to $10K ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>AI targeting optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic reporting & analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>2 platforms included</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-blue-600 text-white rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-2">$2,500<span className="text-lg text-blue-200">/month</span></div>
              <div className="text-sm text-green-300 font-semibold mb-6">Save 50% vs market rates</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Up to $50K ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Advanced AI optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Creative generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>All platforms included</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$5,000<span className="text-lg text-gray-500">/month</span></div>
              <div className="text-sm text-green-600 font-semibold mb-6">Save 60% vs market rates</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited ad spend</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Full AI suite</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>White-label options</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free AI advertising assessment and discover how we can boost your ROI by 300%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  )
=======
import {ArrowLeft, CheckCircle, Target, ArrowRight} from 'lucide-react';;
export default function ServicesAdvertisingPage() {return (
    <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50">{/* Header */}
    <headerclassName="bg-whiteshadow-smborder-b"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8py-4"><ahref="/"className="inline-flex items-center text-blue-600 hover:text-blue-800transition-colorsduration-200"><ArrowLeftclassName="w-4h-4mr-2" />Back to Home
        </a></di></heade>{/* HeroSection */}
    <sectionclassName="relative overflow-hidden bg-gradient-to-r from-blue-900via-purple-900to-indigo-900text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><divclassName="inline-flex items-center px-4 py-2 rounded-full bg-blue-600text-smfont-semiboldmb-6"><TargetclassName="w-4h-4mr-2" />AI-Powered Advertising Solutions
          </di><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">AI Advertising Services
          </h><spanclassName="text-xlmd:text-2 xl mb-8 text-gray-200max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-gray-200max-w-3xlmx-auto">Revolutionize Your Marketing with300% ROI Guaranteed
          </p><spanclassName="text-lg mb-8 text-gray-300max-w-4xlmx-auto"></className="text-lg mb-8 text-gray-300max-w-4xlmx-auto">Transform your advertising campaigns with our breakthrough AI technology. Achieve 9 5% targeting accuracy, 
             60% cost reduction, and300% ROI with intelligent automation and predictive analytics. Our proven 
              methodo logy has helped500+ businesses increase their advertising effectiveness while reducing costs.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="bg-blue-600 hover:bg-blue-700text-white font-semibold py-3 px-8 rounded-lg transition-colorsduration-200inline-flexitems-center"
              >Start Free Consultation
              <ArrowRightclassName="w-4h-4ml-2" /></a><ahref="#services"
               className="border-2 border-white text-whitehover:bg-whitehover:text-blue-900font-semibold py-3 px-8 rounded-lg transition-colorsduration-200"
              >View Our Services
            </a></di></di></di></sectio>{/* KeyMetrics */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Proven Advertising Results
          </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Our AI-powered advertising delivers measurable business impact
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="text-4 xl font-bold text-blue-600mb-2">300%</di><divclassName="text-gray-600">AverageROI</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-600mb-2">95%</di><divclassName="text-gray-600">TargetingAccuracy</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-600mb-2">60%</di><divclassName="text-gray-600">CostReduction</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-600mb-2">24/7</di><divclassName="text-gray-600">CampaignOptimization</di></di></di></di></sectio>{/* ServicesSection */}
    <sectionid="services"className="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">AI Advertising Solutions
          </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Comprehensive AI-powered advertising services for maximum impact
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado wduration-200"><divclassName="text-blue-600text-4xlmb-4">🎯</di><h3className="text-xlfont-semiboldmb-3">AI-PoweredTargeting</h><spanclassName="text-gray-600mb-4"></className="text-gray-600mb-4">Advanced machine learning algorithms that identify and target your ideal customers with95% accuracy.
            </p><ulclassName="text-sm text-gray-600space-y-1"><l i>•Behavioralanalysis</l><l i>•Predictivemodeling</l><l i>•Real-timeoptimization</l><l i>• Lookalikeaudiencecreation</l><l i>•Cross-platformtargeting</l></u><divclassName="mt-4 text-sm text-green-600font-semibold">MarketPrice: $2,00 0-5,00 0/month | OurPrice: $1,20 0/month
            </di></di><divclassName="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado wduration-200"><divclassName="text-green-600text-4xlmb-4">📊</di><h3className="text-xlfont-semiboldmb-3">CampaignOptimization</h><spanclassName="text-gray-600mb-4"></className="text-gray-600mb-4">Continuous AI-driven optimization that maximizes performance and minimizes costs across all channels.
            </p><ulclassName="text-sm text-gray-600space-y-1"><l i>• A/Btestingautomation</l><l i>•Budgetallocation</l><l i>•Performancemonitoring</l><l i>•Bidoptimization</l><l i>• Landingpageoptimization</l></u><divclassName="mt-4 text-sm text-green-600font-semibold">MarketPrice: $3,00 0-7,00 0/month | OurPrice: $1,80 0/month
            </di></di><divclassName="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado wduration-200"><divclassName="text-purple-600text-4xlmb-4">🤖</di><h3className="text-xlfont-semiboldmb-3">CreativeGeneration</h><spanclassName="text-gray-600mb-4"></className="text-gray-600mb-4">AI-generated ad creatives that adapt to audience preferences and platform requirements in real-time.
            </p><ulclassName="text-sm text-gray-600space-y-1"><l i>• Dynamiccreativeoptimization</l><l i>• Personalizationatscale</l><l i>•Multi-platformadaptation</l><l i>• Videoadgeneration</l><l i>• Brandconsistencymaintenance</l></u><divclassName="mt-4 text-sm text-green-600font-semibold">MarketPrice: $2,50 0-6,00 0/month | OurPrice: $1,50 0/month
            </di></di><divclassName="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado wduration-200"><divclassName="text-orange-600text-4xlmb-4">📱</di><h3className="text-xlfont-semiboldmb-3">SocialMediaAdvertising</h><spanclassName="text-gray-600mb-4"></className="text-gray-600mb-4">Comprehensive social media advertising management across all major platforms with AI optimization.
            </p><ulclassName="text-sm text-gray-600space-y-1"><l i>• Facebook &Instagramads</l><l i>•LinkedInadvertising</l><l i>• TikTok &Snapchatads</l><l i>•Twitteradvertising</l><l i>•Cross-platformanalytics</l></u><divclassName="mt-4 text-sm text-green-600font-semibold">MarketPrice: $2,00 0-5,00 0/month | OurPrice: $1,20 0/month
            </di></di><divclassName="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado wduration-200"><divclassName="text-red-600text-4xlmb-4">🔍</di><h3className="text-xlfont-semiboldmb-3">SearchEngineMarketing</h><spanclassName="text-gray-600mb-4"></className="text-gray-600mb-4">AI-powered Google Ads and Bing advertising with intelligent keyword optimization and bid management.
            </p><ulclassName="text-sm text-gray-600space-y-1"><l i>• GoogleAdsmanagement</l><l i>•Bingadvertising</l><l i>• Keyword research&optimization</l><l i>• Adcopygeneration</l><l i>•Performancetracking</l></u><divclassName="mt-4 text-sm text-green-600font-semibold">MarketPrice: $1,50 0-4,00 0/month | OurPrice: $90 0/month
            </di></di><divclassName="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado wduration-200"><divclassName="text-indigo-600text-4xlmb-4">📈</di><h3className="text-xlfont-semiboldmb-3">Analytics&Reporting</h><spanclassName="text-gray-600mb-4"></className="text-gray-600mb-4">Advanced analytics and reporting with AI insights and automated performance recommendations.
            </p><ulclassName="text-sm text-gray-600space-y-1"><l i>•Real-timedashboards</l><l i>•AI-poweredinsights</l><l i>•Automatedreporting</l><l i>•ROIoptimization</l><l i>•Competitiveanalysis</l></u><divclassName="mt-4 text-sm text-green-600font-semibold">MarketPrice: $1,00 0-3,00 0/month | OurPrice: $60 0/month
            </di></di></di></di></sectio>{/* PricingSection */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Transparent Pricing
          </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Choose the plan that fits your advertising needs
          </p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8"><divclassName="bg-white border-2 border-gray-200rounded-lg p-8 hover:border-blue-500transition-colorsduration-200"><h3className="text-2 xl font-bold text-gray-900mb-4">Starter</h><divclassName="text-4 xl font-bold text-blue-600mb-2">$1,200<spanclassName="text-lgtext-gray-500">/month</spa></di><divclassName="text-smtext-green-600font-semiboldmb-6">Save40% vsmarketrates</di><ulclassName="space-y-3mb-8"><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>Up to $10 Kadspend</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>AItargetingoptimization</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>Basic reporting&analytics</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>Emailsupport</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>2platformsincluded</spa></l></u><spanclassName="w-full bg-blue-600 hover:bg-blue-700text-white font-semibold py-3 px-6 rounded-lg transition-colorsduration-200"></className="w-full bg-blue-600 hover:bg-blue-700text-white font-semibold py-3 px-6 rounded-lg transition-colorsduration-200">Get Started
            </butto></di><divclassName="bg-blue-600text-white rounded-lgp-8relative"><divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-yellow-400text-yellow-900px-4 py-1 rounded-fulltext-smfont-semibold">MostPopular</spa></di><h3className="text-2 xlfont-boldmb-4">Professional</h><divclassName="text-4 xlfont-boldmb-2">$2,500<spanclassName="text-lgtext-blue-200">/month</spa></di><divclassName="text-smtext-green-300font-semiboldmb-6">Save50% vsmarketrates</di><ulclassName="space-y-3mb-8"><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-300mr-3" /><spa n>Up to $50 Kadspend</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-300mr-3" /><spa n>AdvancedAIoptimization</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-300mr-3" /><spa n>Creativegeneration</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-300mr-3" /><spa n>Prioritysupport</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-300mr-3" /><spa n>Customreporting</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-300mr-3" /><spa n>Allplatformsincluded</spa></l></u><spanclassName="w-full bg-white text-blue-600 hover:bg-gray-100font-semibold py-3 px-6 rounded-lg transition-colorsduration-200"></className="w-full bg-white text-blue-600 hover:bg-gray-100font-semibold py-3 px-6 rounded-lg transition-colorsduration-200">Get Started
            </butto></di><divclassName="bg-white border-2 border-gray-200rounded-lg p-8 hover:border-blue-500transition-colorsduration-200"><h3className="text-2 xl font-bold text-gray-900mb-4">Enterprise</h><divclassName="text-4 xl font-bold text-blue-600mb-2">$5,000<spanclassName="text-lgtext-gray-500">/month</spa></di><divclassName="text-smtext-green-600font-semiboldmb-6">Save60% vsmarketrates</di><ulclassName="space-y-3mb-8"><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>Unlimitedadspend</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>FullAIsuite</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>Dedicatedaccountmanager</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>24/7support</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>Customintegrations</spa></l><liclassName="flexitems-center"><CheckCircleclassName="w-5 h-5 text-green-500mr-3" /><spa n>White-labeloptions</spa></l></u><spanclassName="w-full bg-blue-600 hover:bg-blue-700text-white font-semibold py-3 px-6 rounded-lg transition-colorsduration-200"></spa></className="w-full bg-blue-600 hover:bg-blue-700text-white font-semibold py-3 px-6 rounded-lg transition-colorsduration-200">Contact Sales
            </butto></di></di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16bg-gradient-to-r from-blue-600to-purple-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Transform Your Advertising?
        </h><spanclassName="text-xl mb-8text-blue-100"></spa></className="text-xl mb-8text-blue-100">Get a free AI advertising assessment and discover how we can boost your ROI by300%
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
             className="bg-white text-blue-600 hover:bg-gray-100font-semibold py-3 px-8 rounded-lg transition-colorsduration-200inline-flexitems-center"
            >Get Free Assessment
            <ArrowRightclassName="w-4h-4ml-2" /></a><ahref="/case-studies"
             className="border-2 border-white text-whitehover:bg-whitehover:text-blue-600font-semibold py-3 px-8 rounded-lg transition-colorsduration-200"
            >View Success Stories
          </a></di></di></sectio></di>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
}
