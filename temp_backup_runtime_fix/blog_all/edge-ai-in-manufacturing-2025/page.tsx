import React from 'react';
import Link from 'next/link';

export default function EdgeAIInManufacturing2025() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <header className='mb-12'>
          <div className='flex items-center gap-2 mb-4'>
            <Link href='/blog' className='text-blue-600 hover:underline'>Blog</Link>
            <span className='text-gray-400'>/</span>
            <span className='text-gray-600'>Edge AI</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Edge AI in Manufacturing 2025: Real-Time Quality, Safety, and Throughput
          </h1>
          <div className='flex items-center gap-4 text-gray-600 mb-6'>
            <span>September 11, 2025</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span className='bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium'>
              IoT & Edge
            </span>
          </div>
          <p className='text-xl text-gray-600 leading-relaxed'>
            How factories are deploying vision models, time-series ML, and on-device inference to
            reduce scrap, prevent downtime, and improve worker safety—while keeping data on-prem.
          </p>
        </header>

        {/* Featured Image */}
        <div className='mb-12'>
          <div className='aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center'>
            <div className='text-8xl'>🏭</div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className='bg-gray-50 rounded-lg p-6 mb-12'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>Table of Contents</h2>
          <ul className='space-y-2 text-gray-600'>
            <li><a href='#use-cases' className='hover:text-blue-600'>High-ROI Use Cases</a></li>
            <li><a href='#reference-arch' className='hover:text-blue-600'>Reference Architecture</a></li>
            <li><a href='#deploy' className='hover:text-blue-600'>Deployment and MLOps</a></li>
            <li><a href='#security' className='hover:text-blue-600'>Security and Compliance</a></li>
            <li><a href='#roi' className='hover:text-blue-600'>ROI and Business Case</a></li>
          </ul>
        </nav>

        <div className='prose prose-lg max-w-none'>
          <section id='use-cases'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>High-ROI Use Cases</h2>
            <div className='grid md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Visual Quality Inspection</h4>
                <p className='text-gray-700 text-sm'>Detect defects inline with sub-100ms latency</p>
                <div className='text-2xl font-bold text-green-600 mt-2'>-35% scrap rate</div>
              </div>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Predictive Maintenance</h4>
                <p className='text-gray-700 text-sm'>Vibration + thermal + acoustic models</p>
                <div className='text-2xl font-bold text-green-600 mt-2'>-40% unplanned downtime</div>
              </div>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Worker Safety</h4>
                <p className='text-gray-700 text-sm'>PPE detection, zone intrusion, ergonomics</p>
                <div className='text-2xl font-bold text-green-600 mt-2'>-25% incidents</div>
              </div>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Throughput Optimization</h4>
                <p className='text-gray-700 text-sm'>Dynamic routing and bottleneck prediction</p>
                <div className='text-2xl font-bold text-green-600 mt-2'>+18% output</div>
              </div>
            </div>
          </section>

          <section id='reference-arch'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Reference Architecture</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Commodity IP cameras and industrial sensors stream to edge gateways (Jetson/TPU) running
              Triton or OpenVINO. A message bus (MQTT/Kafka) feeds an on-prem feature store and local
              control systems. Cloud is used for fleet management and offline retraining.
            </p>
          </section>

          <section id='deploy'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Deployment and MLOps</h2>
            <ul className='list-disc pl-6 mb-8 text-gray-700 space-y-2'>
              <li>Containerized models with OTA updates via device manager</li>
              <li>Shadow deployments and A/B across lines or plants</li>
              <li>Telemetry: latency, drift, false positive/negative rates</li>
              <li>On-device fallback and offline queues</li>
            </ul>
          </section>

          <section id='security'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Security and Compliance</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Air-gapped options with signed containers, device identity, encrypted streams, and least
              privilege access. Role-based dashboards for OT and IT stakeholders.
            </p>
          </section>

          <section id='roi'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>ROI and Business Case</h2>
            <div className='bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-emerald-900 mb-2'>Quick Wins</h3>
              <p className='text-emerald-800'>
                Typical payback in 6–9 months, with multi-plant rollouts compounding savings.
              </p>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className='mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-white text-center'>
          <h2 className='text-2xl font-bold mb-4'>Pilot Edge AI on a Single Line</h2>
          <p className='text-lg opacity-90 mb-6 max-w-2xl mx-auto'>
            We stand up a production-grade pilot in under 6 weeks.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Schedule a Discovery Call
            </Link>
            <Link
              href='/services/ai-services'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors'
            >
              Explore AI Services
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Related Articles</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Link href='/blog/edge-computing-iot-revolution' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  The IoT Edge Computing Revolution
                </h3>
                <p className='text-gray-600 text-sm'>
                  Architectures and patterns for edge-first deployments.
                </p>
              </div>
            </Link>
            <Link href='/blog/enterprise-rag-architecture-2025' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  Enterprise RAG Architecture 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Design patterns for reliable retrieval-augmented systems.
                </p>
              </div>
            </Link>
            <Link href='/blog/ai-platform-engineering-2025' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  AI Platform Engineering in 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Tooling and infra to operate AI at scale.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

