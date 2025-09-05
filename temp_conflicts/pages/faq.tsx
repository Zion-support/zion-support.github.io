import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState('general');

  const faqData = {
    general: [
      {
        question: 'What is Zion Tech Group and what do you specialize in?',
        answer: 'Zion Tech Group is a leading technology company specializing in AI automation and autonomous systems. We develop cutting-edge solutions that enable organizations to operate more efficiently, intelligently, and autonomously. Our expertise spans across AI, machine learning, edge computing, IoT integration, and sustainable technology solutions.'
      },
      {
        question: 'How long has Zion Tech Group been in business?',
        answer: 'Zion Tech Group has been at the forefront of AI automation technology for over 8 years. We\'ve successfully delivered autonomous systems to hundreds of organizations across various industries, establishing ourselves as a trusted partner in digital transformation and AI implementation.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a diverse range of industries including healthcare, manufacturing, financial services, retail, transportation, energy, and government. Our AI automation solutions are designed to be industry-agnostic and can be customized to meet the specific needs of any sector.'
      },
      {
        question: 'Do you offer consulting services in addition to technology solutions?',
        answer: 'Yes, we provide comprehensive consulting services including AI strategy development, implementation planning, change management, and ongoing optimization. Our team of experts works closely with clients to ensure successful adoption and maximum ROI from AI automation investments.'
      }
    ],
    technology: [
      {
        question: 'What types of AI technologies do you work with?',
        answer: 'We work with a comprehensive range of AI technologies including machine learning, deep learning, natural language processing, computer vision, reinforcement learning, and edge AI. Our solutions incorporate the latest advancements in AI research and are designed to be scalable, secure, and sustainable.'
      },
      {
        question: 'How do you ensure the security of AI systems?',
        answer: 'Security is built into every layer of our AI systems. We implement multi-layered security architectures including encryption, secure model deployment, threat detection, and regular security audits. Our systems comply with industry standards and regulatory requirements while maintaining the highest levels of data protection.'
      },
      {
        question: 'Can your AI systems operate offline or in edge environments?',
        answer: 'Absolutely. We specialize in edge AI solutions that can operate independently of cloud infrastructure. Our edge AI systems are designed to process data locally, reducing latency, improving privacy, and enabling autonomous operation even in environments with limited connectivity.'
      },
      {
        question: 'How do you handle data privacy and compliance?',
        answer: 'We implement comprehensive data privacy measures including data anonymization, differential privacy, and secure multi-party computation. Our systems are designed to comply with GDPR, HIPAA, SOX, and other relevant regulations while maintaining the highest standards of data protection and ethical AI practices.'
      }
    ],
    implementation: [
      {
        question: 'How long does it typically take to implement AI automation?',
        answer: 'Implementation timelines vary depending on the complexity and scope of the project. Simple automation projects can be completed in 4-8 weeks, while comprehensive enterprise transformations may take 6-18 months. We work with clients to establish realistic timelines and deliver value incrementally throughout the process.'
      },
      {
        question: 'What kind of support do you provide during and after implementation?',
        answer: 'We provide comprehensive support throughout the entire implementation process and beyond. This includes dedicated project management, technical support, user training, documentation, and ongoing optimization services. Our support team is available 24/7 for critical issues and we offer various support tiers to meet different needs.'
      },
      {
        question: 'Do you provide training for our staff?',
        answer: 'Yes, we offer comprehensive training programs for technical and non-technical staff. Our training covers system operation, maintenance, troubleshooting, and best practices for maximizing the value of AI automation. We also provide ongoing education as new features and capabilities are released.'
      },
      {
        question: 'Can we integrate your solutions with our existing systems?',
        answer: 'Absolutely. Our AI systems are designed with open architectures and standard APIs that enable seamless integration with existing enterprise systems. We have extensive experience integrating with ERP systems, CRM platforms, databases, and custom applications across various technology stacks.'
      }
    ],
    sustainability: [
      {
        question: 'How do you address environmental concerns in AI systems?',
        answer: 'We\'re committed to sustainable AI development. Our systems use energy-efficient algorithms, renewable energy-powered infrastructure, and optimization techniques that minimize environmental impact. We also help clients measure and reduce the carbon footprint of their AI operations through our sustainability tools and consulting services.'
      },
      {
        question: 'What makes your AI systems &quot;green&quot;?',
        answer: 'Our green AI systems incorporate several key features: energy-efficient model architectures, intelligent resource allocation, renewable energy integration, and carbon footprint monitoring. We\'ve developed proprietary techniques that achieve comparable performance to traditional AI systems while using significantly less computational power.'
      },
      {
        question: 'Do you offer sustainability reporting and metrics?',
        answer: 'Yes, we provide comprehensive sustainability reporting including carbon emissions tracking, energy efficiency metrics, and environmental impact assessments. Our clients can monitor the environmental performance of their AI systems in real-time and receive detailed reports for compliance and optimization purposes.'
      }
    ],
    healthcare: [
      {
        question: 'How do you ensure HIPAA compliance in healthcare AI systems?',
        answer: 'Our healthcare AI systems are built with HIPAA compliance as a foundational requirement. We implement end-to-end encryption, secure data transmission, access controls, audit logging, and regular security assessments. All our healthcare solutions undergo rigorous compliance testing and are regularly updated to meet evolving regulatory requirements.'
      },
      {
        question: 'What types of healthcare applications do you support?',
        answer: 'We support a wide range of healthcare applications including diagnostic imaging, patient monitoring, predictive analytics, administrative automation, and clinical decision support. Our systems are designed to enhance rather than replace human expertise, improving patient outcomes while reducing administrative burden on healthcare professionals.'
      },
      {
        question: 'How do you handle patient data privacy?',
        answer: 'Patient data privacy is paramount in all our healthcare solutions. We implement multiple layers of protection including data anonymization, secure multi-party computation, and zero-knowledge proofs. Our systems are designed to process sensitive health information while maintaining the highest standards of privacy and security.'
      }
    ],
    pricing: [
      {
        question: 'What is your pricing model?',
        answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. Pricing depends on the scope of services, system complexity, and support requirements. We work with each client to develop a pricing structure that aligns with their budget and business objectives.'
      },
      {
        question: 'Do you offer free trials or proof-of-concept projects?',
        answer: 'Yes, we offer free trials and proof-of-concept projects for qualified organizations. This allows potential clients to experience the value of our AI automation solutions firsthand before making a full commitment. We also provide detailed ROI analysis and case studies to help clients understand the business impact.'
      },
      {
        question: 'What ongoing costs should we expect?',
        answer: 'Ongoing costs typically include system maintenance, updates, support services, and any additional features or capacity. We provide transparent pricing for all ongoing services and work with clients to optimize costs while maintaining system performance and reliability.'
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: '🏢' },
    { id: 'technology', name: 'Technology & AI', icon: '🤖' },
    { id: 'implementation', name: 'Implementation & Support', icon: '🚀' },
    { id: 'sustainability', name: 'Sustainability & Green AI', icon: '🌱' },
    { id: 'healthcare', name: 'Healthcare Solutions', icon: '🏥' },
    { id: 'pricing', name: 'Pricing & Business', icon: '💰' }
  ];

  return (
    <>
      <Head>
        <title>FAQ | Zion Tech Group - Frequently Asked Questions</title>
        <meta name=&quot;description&quot; content=&quot;Find answers to common questions about Zion Tech Group's AI automation solutions, implementation process, and services.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;FAQ | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Find answers to common questions about Zion Tech Group's AI automation solutions.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white&quot;>
        <main className=&quot;container mx-auto px-6 py-12&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <nav className=&quot;mb-8&quot;>
              <Link href=&quot;/&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
                ← Back to Home
              </Link>
            </nav>
            
            <header className=&quot;text-center mb-16&quot;>
              <h1 className=&quot;text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent&quot;>
                Frequently Asked Questions
              </h1>
              <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto&quot;>
                Find answers to common questions about our AI automation solutions, 
                implementation process, and services.
              </p>
            </header>
            
            {/* Category Navigation */}
            <div className=&quot;mb-12&quot;>
              <div className=&quot;flex flex-wrap gap-4 justify-center&quot;>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setOpenCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      openCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className=&quot;text-lg&quot;>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ Content */}
            <div className=&quot;space-y-6&quot;>
              {faqData[openCategory as keyof typeof faqData]?.map((item, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20&quot;>
                  <h3 className=&quot;text-xl font-bold mb-4 text-cyan-400&quot;>
                    {item.question}
                  </h3>
                  <p className=&quot;text-white/90 leading-relaxed&quot;>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Contact Section */}
            <section className=&quot;mt-20 text-center&quot;>
              <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20&quot;>
                <h2 className=&quot;text-2xl font-bold mb-4 text-white&quot;>Still Have Questions?</h2>
                <p className=&quot;text-white/80 mb-6 max-w-2xl mx-auto&quot;>
                  Can't find the answer you're looking for? Our team of AI automation experts 
                  is here to help. Get in touch with us for personalized assistance.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <Link 
                    href=&quot;/contact&quot;
                    className=&quot;bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300&quot;
                  >
                    Contact Our Team
                  </Link>
                  <Link 
                    href=&quot;/resources&quot;
                    className=&quot;bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300&quot;
                  >
                    Browse Resources
                  </Link>
                </div>
              </div>
            </section>
            
            {/* Related Pages */}
            <section className=&quot;mt-16&quot;>
              <h2 className=&quot;text-2xl font-bold mb-8 text-center text-white&quot;>Explore More</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
                <Link href=&quot;/services&quot; className=&quot;bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                    <span className=&quot;text-2xl&quot;>🚀</span>
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-cyan-400 mb-2&quot;>Our Services</h3>
                  <p className=&quot;text-white/80 text-sm&quot;>Discover our comprehensive AI automation solutions</p>
                </Link>
                
                <Link href=&quot;/blog&quot; className=&quot;bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                    <span className=&quot;text-2xl&quot;>📚</span>
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-fuchsia-400 mb-2&quot;>Blog & Insights</h3>
                  <p className=&quot;text-white/80 text-sm&quot;>Read our latest thoughts on AI and automation</p>
                </Link>
                
                <Link href=&quot;/case-studies&quot; className=&quot;bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center group&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                    <span className=&quot;text-2xl&quot;>📊</span>
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-green-400 mb-2&quot;>Case Studies</h3>
                  <p className=&quot;text-white/80 text-sm&quot;>See how we've helped other organizations succeed</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
import React from 'react';
import Head from 'next/head';
  return (
    <>
      <Head><title>faq - Zion App</title><meta name=&quot;description&quot; content=&quot;faq page&quot; /></Head><div className=&quot;container mx-auto px-4 py-8&quot;><h1 className=&quot;text-3xl font-bold mb-6&quot;>faq</h1><p className=&quot;text-lg mb-4&quot;>This page is under construction.</p><div className=&quot;mt-4&quot;><a href=&quot;/&quot; className=&quot;text-blue-600 hover:underline&quot;>;
            ← Back to Home</Link></div></div></>;
  );
}