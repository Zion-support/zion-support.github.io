import React, { useState } from "react"
import { SEO } from "../components/SEO"
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageCircle, Phone, Mail, Clock, Users, Shield, Zap, Globe, Cpu, Database, Server, Lock, ArrowRight, DollarSign, Settings, FileText, Target, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"
export default function FAQ() {
  const [openCategory, setOpenCategory] = useState('general')
  const [searchQuery, setSearchQuery] = useState('')
  const const faqData = {
  = {
    gener,
  a: l: [
  {
  questio,
  n: "What is Zion Tech Group and what services do you offer?",answ,
  e: r: "Zion Tech Group is a leading technology solutions provider specializing in AI-powered business intelligence, cloud infrastructure, digital twin technology, data analytics, and IT infrastructure services. We help businesses of all sizes transform their operations through innovative technology solutions."
},
  {
  questi,
  o: n: "What industries do you serve?",answ,
  e: r: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, education, and more. Our solutions are designed to be industry-agnostic while addressing specific sector challenges."
},
  {
  questi,
  o: n: "Do you work with small businesses or only enterprise clients?",answ,
  e: r: "We work with businesses of all sizes, from startups and small businesses to large enterprises. We offer scalable solutions that can grow with your business and provide flexible engagement models to meet different budget requirements."
},
  {
  questi,
  o: n: "What makes Zion Tech Group different from other tech companies?",answ,
  e: r: "Our unique combination of cutting-edge AI technology, deep industry expertise, and personalized approach sets us apart. We focus on delivering measurable business outcomes, not just technology implementations."
},
  ]
    servic,
  e: s: [
  {
  questio,
  n: "What AI and machine learning services do you provide?",answ,
  e: r: "We offer comprehensive AI services including predictive analytics, natural language processing, computer vision, recommendation systems, and custom AI model development. Our solutions help businesses automate processes, gain insights from data, and make better decisions."
},
  {
  questi,
  o: n: "Can you help with cloud migration and infrastructure setup?",answ,
  e: r: "Yes, we provide end-to-end cloud migration services including assessment, planning, migration execution, and ongoing optimization. We work with AWS, Azure, and Google Cloud Platform to create scalable, secure, and cost-effective cloud solutions."
},
  {
  questi,
  o: n: "What is digital twin technology and how can it benefit my business?",answ,
  e: r: "Digital twin technology creates virtual replicas of physical systems, processes, or products. This enables real-time monitoring, predictive maintenance, scenario planning, and optimization. Benefits include reduced downtime, improved efficiency, and better decision-making."
},
  {
  questi,
  o: n: "Do you provide ongoing support and maintenance?",answ,
  e: r: "Yes, we offer comprehensive support and maintenance packages including 24/7 monitoring, regular updates, performance optimization, and technical support. We also provide training and documentation to ensure your team can effectively use our solutions."
},
  ]
    prici,
  n: g: [
  {
  questio,
  n: "How do you structure your pricing?",answ,
  e: r: "Our pricing is based on the scope of work, complexity of the solution, and ongoing support requirements. We offer flexible engagement models including project-based pricing, subscription services, and managed services. We provide detailed proposals with transparent pricing."
},
  {
  questi,
  o: n: "Do you offer free consultations or assessments?",answ,
  e: r: "Yes, we provide free initial consultations to understand your business needs and challenges. We also offer free technology assessments to evaluate your current infrastructure and identify improvement opportunities."
},
  {
  questi,
  o: n: "Are there any hidden costs or fees?",answ,
  e: r: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, including implementation, training, support, and any third-party licensing fees. We discuss any potential additional costs upfront."
},
  {
  questi,
  o: n: "Do you offer payment plans or financing options?",answ,
  e: r: "Yes, we offer flexible payment options including milestone-based payments, monthly installments, and financing through our partner institutions. We work with clients to find payment solutions that fit their budget and cash flow."
},
  ]
    implementati,
  o: n: [
  {
  questio,
  n: "How long does it typically take to implement your solutions?",answ,
  e: r: "Implementation timelines vary based on complexity and scope. Simple integrations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed project timelines during the planning phase."
},
  {
  questi,
  o: n: "What is your implementation process?",answ,
  e: r: "Our implementation process follows a proven methodolog,
  y: Discovery & Planning, Design & Architecture, Development & Testing, Deployment & Go-Live, and Training & Support. We maintain regular communication and provide progress updates throughout."
},
  {
  questi,
  o: n: "Do you provide training for our team?",answ,
  e: r: "Yes, we provide comprehensive training programs including user training, administrator training, and technical training. We also create custom documentation and video tutorials to ensure your team can effectively use and maintain the solutions."
},
  {
  questi,
  o: n: "What happens if we encounter issues during implementation?",answ,
  e: r: "We have dedicated support teams available throughout implementation to address any issues quickly. Our project managers maintain regular check-ins, and we provide escalation procedures for urgent matters."
},
  ]
    suppo,
  r: t: [
  {
  questio,
  n: "What support options do you provide?",answ,
  e: r: "We offer multiple support tiers including email support, phone support, live chat, and dedicated account management. Our support team is available during business hours with 24/7 emergency support for critical issues."
},
  {
  questi,
  o: n: "How quickly do you respond to support requests?",answ,
  e: r: "Response times vary by support tie,
  r: Standard support responds within 4 hours, Premium support within 2 hours, and Enterprise support within 1 hour. Critical issues receive immediate attention regardless of support tier."
},
  {
  questi,
  o: n: "Do you provide remote support and troubleshooting?",answ,
  e: r: "Yes, we provide remote support including screen sharing, remote desktop access, and video calls. This allows us to quickly diagnose and resolve issues without requiring on-site visits."
},
  {
  questi,
  o: n: "What documentation and resources do you provide?",answ,
  e: r: "We provide comprehensive documentation including user manuals, technical guides, API documentation, video tutorials, and knowledge base articles. All resources are regularly updated and easily accessible through our client portal."
},
  ],
  }

  const categories = [
  { id: 'general', na,
  m: e: 'General Questions', ic,
  o: n: HelpCircle, cou,
  n: t: faqData.general.length },
  },
  { id: 'services', na,
  m: e: 'Services & Solutions', ic,
  o: n: Zap, cou,
  n: t: faqData.services.length },
  },
  { id: 'pricing', na,
  m: e: 'Pricing & Billing', ic,
  o: n: DollarSign, cou,
  n: t: faqData.pricing.length },
  },
  { id: 'implementation', na,
  m: e: 'Implementation', ic,
  o: n: Settings, cou,
  n: t: faqData.implementation.length },
  },
  { id: 'support', na,
  m: e: 'Support & Maintenance', ic,
  o: n: MessageCircle, cou,
  n: t: faqData.support.length },
  },
  ]
  const filteredFAQs = Object.entries(faqData).reduce((acc, [category, questions]) () => {
  if (if (openCategory === 'all' || openCategory === category) {
  ) {
      const filtered = questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
      if (if (filtered.length > 0) {
  ) {
        acc[category] = filtered
},
  }
    return acc
}, {})

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about our services, pricing, implementation process, and support options."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full">
                <HelpCircle className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our services, pricing, implementation process,
  and support options. Can't find what you're looking for? Contact our team.
            </p>
            
            {/* Search Bar */},
  }
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-indigo-500 focu,
  s:border-transparent";"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */},
  }
      <section className="py-12">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onClick={() => setOpenCategory('all')},
  },
  }
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
  openCategory === 'all'
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-700/50 text-slate-300,
  hove: r: bg-indigo-500/10 hove,
  r:text-indigo-400 border border-slate-600'
}`}
            >
              <HelpCircle className="w-5 h-5" />
              <span>All Questions</span>
            </button>
            {categories.map((category) => (
  <button
                key={category.id},
  }
                onClick={onClick={() => setOpenCategory(category.id)},
  },
  }
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
  openCategory === category.id
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-700/50 text-slate-300,
  hove: r: bg-indigo-500/10 hove,
  r:text-indigo-400 border border-slate-600'
}`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */},
  }
      <section className="py-20">
        <div className="container-responsive">
          {Object.entries(filteredFAQs).map(([category, questions]) => (
  <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {categories.find(c => c.id === category)?.name},
  }
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {questions.map((faq, index) => (
  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}, {Object.keys(filteredFAQs).length === 0 && (
  <div className="text-center py-20">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={onClick={() => setSearchQuery('')},
  },
  }
                className="className="px-6 py-3 bg-indigo-500,
  hove: r: bg-indigo-600 text-white font-medium rounded-lg transition-colors";"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our support team is here to help. Contact us through any of these channels 
              and we'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
  {
  titl,
  e: 'Live Chat',descripti,
  o: n: 'Get instant help from our support team',ic,
  o: n: MessageCircle,col,
  o: r: 'from-blue-500 to-cyan-500',acti,
  o: n: 'Start Chat',li,
  n: k: '/contact'
},
  {
  tit,
  l: e: 'Phone Support',descripti,
  o: n: 'Speak directly with our experts',ic,
  o: n: Phone,col,
  o: r: 'from-green-500 to-emerald-500',acti,
  o: n: 'Call Now',li,
  n: k: 'te,
  l:+1-800-ZION-TECH'
},
  {
  tit,
  l: e: 'Email Support',descripti,
  o: n: 'Send us a detailed message',ic,
  o: n: Mail,col,
  o: r: 'from-purple-500 to-pink-500',acti,
  o: n: 'Send Email',li,
  n: k: 'mailt,
  o:support@ziontechgroup.com'
},
  ].map((option, index) => (
  <div
                  key={index},
  }
                  className="className="p-8 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50 text-center";"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mx-auto mb-6`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 text-sm mb-6">{option.description}</p>
                  
                  <a
                    href={option.link},
  }
                    className="className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600,
  hove: r: from-indigo-600 hove,
  r:to-purple-700 text-white font-medium rounded-lg transition-all duration-300";"
                  >
                    {option.action},
  }
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation, case studies, and learning resources
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-8">
            {[
  {
  titl,
  e: 'Documentation',descripti,
  o: n: 'Technical guides and API references',ic,
  o: n: FileText,col,
  o: r: 'from-blue-500 to-cyan-500',li,
  n: k: '/docs'
},
  {
  tit,
  l: e: 'Case Studies',descripti,
  o: n: 'Real-world success stories',ic,
  o: n: Target,col,
  o: r: 'from-green-500 to-emerald-500',li,
  n: k: '/case-studies'
},
  {
  tit,
  l: e: 'Blog & Insights',descripti,
  o: n: 'Latest industry trends and tips',ic,
  o: n: BookOpen,col,
  o: r: 'from-purple-500 to-pink-500',li,
  n: k: '/blog'
},
  {
  tit,
  l: e: 'Support Center',descripti,
  o: n: 'Comprehensive help resources',ic,
  o: n: HelpCircle,col,
  o: r: 'from-orange-500 to-red-500',li,
  n: k: '/support'
},
  ].map((resource, index) => (
  <Link
                key={index},
  }
                to={resource.link},
  }
                className="className="group p-6 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50 text-center";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mx-auto mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                
                <div className="inline-flex items-center gap-2 text-indigo-400 group-hov,
  e: r:text-indigo-300 font-medium transition-colors">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// FAQ Item Component
function FAQItem({ question, answer }: { questi,
  o: n: string, answ,
  e: r: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden">
      <button
        onClick={onClick={() => setIsOpen(!isOpen)},
  },
  }
        className="className="w-full px-6 py-4 text-left flex items-center justify-between,
  hove: r:bg-slate-700/50 transition-colors";"
      >
        <span className="text-lg font-semibold text-white pr-4">{question}</span>
        {isOpen ? (
  <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
        ) : (
  <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
  <div className="px-6 pb-4">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
