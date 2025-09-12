import React from 'react';
import Link from 'next/link';

export default function CustomerStoriesAutomationROI() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-green-50 to-blue-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6'>
              <span>🏆</span>
              Case Studies
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Customer Stories: Real ROI from AI Automation
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Three concise case studies across support, finance, and operations with measurable ROI. 
              See how real businesses achieved significant cost savings and efficiency gains.
            </p>
            <div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
              <span>📅 January 15, 2025</span>
              <span>⏱️ 7 min read</span>
              <span>👥 1.8K views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
              While AI automation promises significant returns, many businesses struggle to understand 
              what real ROI looks like in practice. These three case studies showcase measurable 
              outcomes across different business functions, providing concrete examples of AI automation success.
            </p>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Case Study 1: Customer Support Automation</h2>
            
            <div className='bg-blue-50 border-l-4 border-blue-400 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-blue-900 mb-2'>TechStart Inc. - SaaS Customer Support</h3>
              <div className='grid md:grid-cols-2 gap-4 text-sm'>
                <div>
                  <p className='text-blue-800 font-medium'>Challenge:</p>
                  <p className='text-blue-700'>4-hour average response time, 40% of tickets were repetitive</p>
                </div>
                <div>
                  <p className='text-blue-800 font-medium'>Solution:</p>
                  <p className='text-blue-700'>AI-powered chatbot with escalation to human agents</p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Implementation Details</h3>
            <ul className='list-disc list-inside text-gray-700 space-y-2 mb-6'>
              <li>Deployed GPT-4 powered chatbot for tier-1 support</li>
              <li>Integrated with existing Zendesk ticketing system</li>
              <li>Implemented sentiment analysis for escalation triggers</li>
              <li>Added knowledge base integration for accurate responses</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Measurable Results</h3>
            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center bg-green-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-green-600 mb-2'>300%</div>
                <div className='text-sm text-green-800'>Increase in Customer Satisfaction</div>
              </div>
              <div className='text-center bg-blue-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>2 min</div>
                <div className='text-sm text-blue-800'>Average Response Time</div>
              </div>
              <div className='text-center bg-purple-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-purple-600 mb-2'>$50K</div>
                <div className='text-sm text-purple-800'>Monthly Savings</div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Case Study 2: Financial Process Automation</h2>
            
            <div className='bg-green-50 border-l-4 border-green-400 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-green-900 mb-2'>RetailMax - E-commerce Finance Operations</h3>
              <div className='grid md:grid-cols-2 gap-4 text-sm'>
                <div>
                  <p className='text-green-800 font-medium'>Challenge:</p>
                  <p className='text-green-700'>Manual invoice processing, 90% of time spent on repetitive tasks</p>
                </div>
                <div>
                  <p className='text-green-800 font-medium'>Solution:</p>
                  <p className='text-green-700'>AI-powered invoice processing and approval workflow</p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Implementation Details</h3>
            <ul className='list-disc list-inside text-gray-700 space-y-2 mb-6'>
              <li>OCR and NLP for automated invoice data extraction</li>
              <li>Machine learning models for approval routing</li>
              <li>Integration with existing ERP and accounting systems</li>
              <li>Automated exception handling and human review workflows</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Measurable Results</h3>
            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center bg-green-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-green-600 mb-2'>90%</div>
                <div className='text-sm text-green-800'>Reduction in Manual Tasks</div>
              </div>
              <div className='text-center bg-blue-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>75%</div>
                <div className='text-sm text-blue-800'>Faster Processing Time</div>
              </div>
              <div className='text-center bg-purple-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-purple-600 mb-2'>$75K</div>
                <div className='text-sm text-purple-800'>Annual Cost Reduction</div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Case Study 3: Operations Optimization</h2>
            
            <div className='bg-purple-50 border-l-4 border-purple-400 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-purple-900 mb-2'>ConsultPro - Professional Services Operations</h3>
              <div className='grid md:grid-cols-2 gap-4 text-sm'>
                <div>
                  <p className='text-purple-800 font-medium'>Challenge:</p>
                  <p className='text-purple-700'>Low proposal win rate, manual proposal generation taking 20+ hours</p>
                </div>
                <div>
                  <p className='text-purple-800 font-medium'>Solution:</p>
                  <p className='text-purple-700'>AI-powered proposal generation and client management system</p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Implementation Details</h3>
            <ul className='list-disc list-inside text-gray-700 space-y-2 mb-6'>
              <li>Template-based proposal generation with AI customization</li>
              <li>Client data analysis for personalized recommendations</li>
              <li>Automated follow-up and relationship management</li>
              <li>Performance tracking and optimization feedback loops</li>
            </ul>

            <h3 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Measurable Results</h3>
            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center bg-green-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-green-600 mb-2'>40%</div>
                <div className='text-sm text-green-800'>Increase in Win Rate</div>
              </div>
              <div className='text-center bg-blue-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>20 hrs</div>
                <div className='text-sm text-blue-800'>Time Saved Per Week</div>
              </div>
              <div className='text-center bg-purple-50 p-6 rounded-lg'>
                <div className='text-3xl font-bold text-purple-600 mb-2'>$200K</div>
                <div className='text-sm text-purple-800'>Additional Revenue</div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Key Success Factors</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              While each case study is unique, several common factors contributed to their success:
            </p>

            <div className='grid md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>Technical Excellence</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• Robust data integration and validation</li>
                  <li>• Scalable architecture design</li>
                  <li>• Comprehensive testing and monitoring</li>
                  <li>• User-friendly interfaces and workflows</li>
                </ul>
              </div>
              
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>Change Management</h3>
                <ul className='text-gray-700 space-y-2 text-sm'>
                  <li>• Stakeholder buy-in and training</li>
                  <li>• Gradual rollout and feedback loops</li>
                  <li>• Clear success metrics and reporting</li>
                  <li>• Continuous improvement processes</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>ROI Calculation Framework</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              To calculate your own automation ROI, consider these key metrics:
            </p>

            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>ROI Calculation Formula</h3>
              <div className='bg-white rounded-lg p-6 mb-4'>
                <p className='text-lg font-mono text-center text-gray-800'>
                  ROI = (Savings - Investment) / Investment × 100%
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 text-sm'>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>Cost Savings Include:</h4>
                  <ul className='text-gray-700 space-y-1'>
                    <li>• Reduced labor costs</li>
                    <li>• Faster processing times</li>
                    <li>• Error reduction</li>
                    <li>• Improved efficiency</li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-2'>Investment Includes:</h4>
                  <ul className='text-gray-700 space-y-1'>
                    <li>• Technology costs</li>
                    <li>• Implementation services</li>
                    <li>• Training and change management</li>
                    <li>• Ongoing maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mt-12 mb-6'>Getting Started with Your Own Automation</h2>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Ready to achieve similar results? Start with our proven methodology and expert guidance.
            </p>

            <div className='bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Achieve Your Own ROI Success?</h3>
              <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                Download our AI Automation ROI Calculator and get a personalized assessment 
                of your automation potential. Our experts have helped 500+ companies achieve 
                measurable results.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/resources/ai-implementation-checklist'
                  className='bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors'
                >
                  Download ROI Calculator
                </Link>
                <Link
                  href='/contact'
                  className='border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors'
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Related Articles</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Link href='/blog/ai-platform-engineering-2025' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2'>
                  AI Platform Engineering in 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Foundations, guardrails, and patterns to ship AI features safely at scale.
                </p>
              </div>
            </Link>
            <Link href='/blog/ai-automation-enterprise-2025' className='group'>
              <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2'>
                  AI Automation in Enterprise: Complete Guide
                </h3>
                <p className='text-gray-600 text-sm'>
                  Everything you need to know about implementing AI automation in your enterprise.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}