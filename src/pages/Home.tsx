import React from 'react'';
import { Link } from "react-router-dom";"
import { Helmet } from "react-helmet-async";"
import { CheckCircle, Rocket, Shield, Sparkles, Zap, Users, Target, Award, ArrowRight } from "lucide-react";"
import { Link } from "react-router-dom";"
import { Helmet } from "react-helmet-async";"
import {

} from "lucide-react"
import { CheckCircle, Sparkles } from "lucide-react";"
import Header from "../components/Header";"
import Footer from "../components/Footer";"
import NewServicesPromoBanner2026 from "../components/NewServicesPromoBanner2026";"
import NewServicesShowcase from "../components/NewServicesShowcase";"
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";"
import SuccessStoriesShowcase from "../components/SuccessStoriesShowcase"
;
const Home: ()  => {,,
  // Mock data for the homepage
  const latestInsights: [,,
    {
      id: '1',';,';,
      title: 'AI Revolution 2026: The Next Frontier of Enterprise Intelligence',';,';,
      summary: 'Discover autonomous AI agents, neural interfaces, and predictive intelligence systems achieving 300% productivity gains.',';,';,
      category: 'AI Innovation',';,';,
      date: '2025-01-15',';,';,
      readMinutes: 25,,,
      featured: true,,
    },
    {
      id: '2',';,';,
      title: 'Quantum AI Breakthrough: Solving Impossible Problems in Seconds',';,';,
      summary: 'Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.',';,';,
      category: 'Quantum Computing',';,';,
      date: '2025-01-10',';,';,
      readMinutes: 20,,,
      featured: false,,
    },
    {
      id: '3',';,';,
      title: 'Manufacturing AI Transformation: $50M Savings & 95% Efficiency',';,';,
      summary: 'See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements.',';,';,
      category: 'Success Story',';,';,
      date: '2025-01-05',';,';,
      readMinutes: 15,,,
      featured: true,,
    }
  ];

id: '2',';,';,
title: 'Quantum AI Breakthrough: Solving Impossible Problems in Seconds',';,';,
summary: 'Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.',';,';,
category: 'Quantum Computing',';,';,
date: '2025-01-10',';,';,
readMinutes: 20,,,
featured: false
},
    {
id: '3',';,';,
title: 'Manufacturing AI Transformation: $50M Savings & 95% Efficiency',';,';,
summary: 'See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements.',';,';,
category: 'Success Story',';,';,
date: '2025-01-05',';,';,
readMinutes: 15,,,
featured: true
}
  ];

    {
      slug: 'ai-revolution-2026',';,';,
      title: 'AI Revolution 2026: The Next Frontier of Enterprise Intelligence',';,';,
      description: 'Discover autonomous AI agents, neural interfaces, and predictive intelligence systems achieving 300% productivity gains.',';,';,
      category: 'AI Innovation',';,';,
      publishedAt: '2025-01-15',';,
    },
    {
slug: 'quantum-ai-breakthrough',';,';,
title: 'Quantum AI Breakthrough: Solving Impossible Problems in Seconds',';,';,
description: 'Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.',';,';,
category: 'Quantum Computing',';,';,
publishedAt: '2025-01-10'
},
    {
slug: 'manufacturing-success',';,';,
title: 'Manufacturing AI Transformation: $50M Savings & 95% Efficiency',';,';,
description: 'See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements.',';,';,
category: 'Success Story',';,';,
publishedAt: '2025-01-05'
}
  ];

  return (
    <>
      <Helmet >
        <title >Zion Tech Group - Leading AI & IT Solutions | Transform Your Business</title>
        <meta name: "description",";,"
  content: "Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security. Expert consulting services with proven results.","
        />
        <meta name: "keywords",";,"
  content: "AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation, AI workflow automation, quantum computing, edge AI, zero trust security, micro SAAS platforms, AI virtual assistant, data analytics","
        />
        <meta property: "og:title" content ="Zion Tech Group - Leading AI & IT Solutions" />";,"
        <meta property: "og:description",";,"
  content: "Transform your business with cutting-edge AI and IT solutions. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security. Expert consulting with proven results.","
        />
        <meta property: "og:type" content="website" />";,"
        <meta property: "og:url" content="https://ziontechgroup.com" />";,"
        <meta name: "twitter:card" content="summary_large_image" />";,"
        <meta name: "twitter:title" content ="Zion Tech Group - Leading AI & IT Solutions" />";,"
        <meta name: "twitter:description",";,"
  content: "Transform your business with cutting-edge AI and IT solutions. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security.","
        />
        <link rel: "canonical" href ="https://ziontechgroup.com" />";,"
        {/* Enhanced Structured Data */}
        <script type: "application/ld+json">";,"
          {JSON.stringify({
            "@context": "https: //schema.org",";,"
            "@type": "Organization",";"
            "name": "Zion Tech Group",";"
            "alternateName": "Zion Tech",";"
            "description": "Leading AI and IT solutions provider specializing in AI workflow automation, quantum computing, edge AI, and zero trust security.",";"
            "url": "https: //ziontechgroup.com",";,"
            "logo": {,";"
              "@type": "ImageObject",";"
              "url": "https: //ziontechgroup.com/logo.png",";,"
              "width": 200,";"
              "height": 60";"
            }
            "image": "https: //ziontechgroup.com/og-image.jpg",";,"
            "contactPoint": {,";"
              "@type": "ContactPoint",";"
              "telephone": "+1-302-464-0950",";"
              "contactType": "customer service",";"
              "availableLanguage": "English",";"
              "areaServed": "US",";"
              "email": "kleber@ziontechgroup.com"
            }
"@type": "ContactPoint",";"
"telephone": "+1-302-464-0950",";"
"contactType": "customer service",";"
"availableLanguage": "English",";"
"areaServed": "US",";"
"email": "kleber@ziontechgroup.com"
}
            "sameAs": [,";"
              "https: //linkedin.com/company/zion-tech-group",";,"
              "https: //twitter.com/ziontechgroup",";,"
              "https: //github.com/ZionClouds","
            ]
            "foundingDate": "2020",";"
            "numberOfEmployees": "50-100",";"
            "address": {,";"
              "@type": "PostalAddress",";"
              "streetAddress": "364 E Main St STE 1008",";"
              "addressLocality": "Middletown",";"
              "addressRegion": "DE",";"
              "postalCode": "19709",";"
              "addressCountry": "US"
            }
            "serviceArea": {,";"
              "@type": "Country",";"
              "name": "United States"
            }
            "hasOfferCatalog": {,";"
              "@type": "OfferCatalog",";"
              "name": "AI and IT Solutions",";"
              "itemListElement": [,";"
                {
                  "@type": "Offer",";"
                  "itemOffered": {,";"
                    "@type": "Service",";"
                    "name": "AI Workflow Automation",";"
                    "description": "Automate complex business processes with AI-powered workflows"
                  }
                },
                {
                  "@type": "Offer",";"
                  "itemOffered": {,";"
                    "@type": "Service",";"
                    "name": "AI Virtual Assistant",";"
                    "description": "Intelligent virtual assistants for customer service and support"
                  }
                },
                {
                  "@type": "Offer",";"
                  "itemOffered": {,";"
                    "@type": "Service",";"
                    "name": "AI Data Analytics",";"
                    "description": "Advanced data analytics and insights powered by AI"
                  }
                },
                {
                  "@type": "Offer",";"
                  "itemOffered": {,";"
                    "@type": "Service",";"
                    "name": "Quantum Computing Consulting",";"
                    "description": "Expert consulting on quantum computing solutions"
                  }
"@type": "PostalAddress",";"
"streetAddress": "364 E Main St STE 1008",";"
"addressLocality": "Middletown",";"
"addressRegion": "DE",";"
"postalCode": "19709",";"
"addressCountry": "US"
}
            "serviceArea": {,";"
"@type": "Country",";"
"name": "United States"
}
            "hasOfferCatalog": {,";"
"@type": "OfferCatalog",";"
"name": "AI and IT Solutions",";"
"itemListElement": [,";"
{
"@type": "Offer",";"
"itemOffered": {,";"
"@type": "Service",";"
"name": "AI Workflow Automation",";"
"description": "Automate complex business processes with AI-powered workflows"
}
                },
                {
"@type": "Offer",";"
"itemOffered": {,";"
"@type": "Service",";"
"name": "AI Virtual Assistant",";"
"description": "Intelligent virtual assistants for customer service and support"
}
                },
                {
"@type": "Offer",";"
"itemOffered": {,";"
"@type": "Service",";"
"name": "AI Data Analytics",";"
"description": "Advanced data analytics and insights powered by AI"
}
                },
                {
"@type": "Offer",";"
"itemOffered": {,";"
"@type": "Service",";"
"name": "Quantum Computing Consulting",";"
"description": "Expert consulting on quantum computing solutions"
}
                }
              ]
            }
            "aggregateRating": {,";"
              "@type": "AggregateRating",";"
              "ratingValue": "4.8",";"
              "reviewCount": "150",";"
              "bestRating": "5",";"
              "worstRating": "1"
            }
          ]
        }
        "aggregateRating": {,";"
          "@type": "AggregateRating",";"
          "ratingValue": "4.8",";"
          "reviewCount": "150",";"
          "bestRating": "5",";"
          "worstRating": "1"
        }
"@type": "AggregateRating",";"
"ratingValue": "4.8",";"
"reviewCount": "150",";"
"bestRating": "5",";"
"worstRating": "1"
}
          })}
        </script>
        
        {/* Additional SEO Meta Tags */}
        <meta name: "robots" content ="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview: -1" />";,"
        <meta name: "googlebot" content ="index, follow" />";,"
        <meta name: "bingbot" content ="index, follow" />";,"
        <meta name: "author" content="Zion Tech Group" />";,"
        <meta name: "publisher" content="Zion Tech Group" />";,"
        <meta name: "copyright" content="Zion Tech Group" />";,"
        <meta name: "language" content="en-US" />";,"
        <meta name: "revisit-after" content="7 days" />";,"
        <meta name: "rating" content="general" />";,"
        <meta name: "distribution" content="global" />";,"
        <meta name: "geo.region" content="US-DE" />";,"
        <meta name: "geo.placename" content="Middletown" />";,"
        <meta name: "geo.position" content ="39.4496;-75.7163" />";,"
        <meta name: "ICBM" content ="39.4496, -75.7163" />";,"
        {/* Open Graph Enhanced */}
        <meta property: "og:site_name" content="Zion Tech Group" />";,"
        <meta property: "og:locale" content="en_US" />";,"
        <meta property: "og:image:width" content="1200" />";,"
        <meta property: "og:image:height" content="630" />";,"
        <meta property: "og:image:alt" content="Zion Tech Group - Leading AI & IT Solutions" />";,"
        {/* Twitter Enhanced */}
        <meta name: "twitter:site" content="@ziontechgroup" />";,"
        <meta name: "twitter:creator" content="@ziontechgroup" />";,"
        <meta name: "twitter:image:alt" content="Zion Tech Group - Leading AI & IT Solutions" />";,"
        {/* Additional Performance Meta */}
        <meta name: "theme-color" content="#2563eb" />";,"
        <meta name: "msapplication-TileColor" content="#2563eb" />";,"
        <meta name: "apple-mobile-web-app-capable" content="yes" />";,"
        <meta name: "apple-mobile-web-app-status-bar-style" content="default" />";,"
        <meta name: "apple-mobile-web-app-title" content="Zion Tech Group" />";,"
        {/* Preconnect to external domains */}
        <link rel: "preconnect" href="https://fonts.googleapis.com" />";,"
        <link rel: "preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />";,"
        <link rel: "preconnect" href="https://linkedin.com" />";,"
        <link rel: "preconnect" href="https://twitter.com" />";,"
        <link rel: "preconnect" href="https://github.com" />";,"
        {/* DNS Prefetch */}
        <link rel: "dns-prefetch" href="//fonts.googleapis.com" />";,"
        <link rel: "dns-prefetch" href="//fonts.gstatic.com" />";,"
        <link rel: "dns-prefetch" href="//linkedin.com" />";,"
        <link rel: "dns-prefetch" href="//twitter.com" />";,"
        <link rel: "dns-prefetch" href ="//github.com" />";,"
      </Helmet>
      
      <div className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">";,"
        <Header />
        
        {/* 🚀 SEPTEMBER 30, 2025 - MEGA BREAKTHROUGH ANNOUNCEMENT */}
        <div className: "container mx-auto px-6 pt-8">";,"
          <September30MegaBanner2025 />
        </div>
        
        {/* Enhanced Promotional Banners */}
        {getFeaturedBanners().slice(0, 4).map((banner) => (
          <EnhancedPromotionalBanner key: {banner.id}
            banner: {banner}
          />
        ))}
        
        <NewContentAnnouncement />
        <LatestContentBanner variant: "info",";,"
  autoRotate
          rotationInterval: {7000}
        />
        <NewContentPromoBanner />
        {/* Fresh content banner promoting brand-new articles */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <NewContentAdvertisingBanner />
          {/* Inline promo for new service */}
          <div className: "mt-4">";,"
            <ContentPromotionBanner variant: "info",";,"
  title: "🧪 New Service: Edge Experimentation Suite",";,"
  description: "Privacy‑first A/B testing at <100ms with scoped IDs and on‑device metrics.",";,"
  ctaText: "Learn more",";,"
  ctaLink: "/services/edge-experimentation-suite",";,"
  dismissible: {true}
            />
          </div>
        </div>
        <div className: "container mx-auto px-6 mt-6">";,"
          <TrendingContentBanner />
          {/* Inline promotion for brand-new content */}
          <div className: "mt-6 rounded-xl border border-white/10 bg-white/5 p-6">";,"
            <div className: "text-white text-sm mb-4">New this week</div>";,"
            <div className: "grid md:grid-cols-2 gap-4">";,"
              <Link to: "/blog/ai-enterprise-transformation-2027" className ="block rounded-lg border border-white/10 p-4 hover:border-indigo-400/40 transition-colors">";,"
                <div className: "text-indigo-300 text-xs mb-2">Enterprise AI</div>";,"
                <div className: "text-white font-semibold">AI Enterprise Transformation 2027</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">Executive playbook to plan, fund, and scale AI with measurable ROI.</div>";,"
              </Link>
              <Link to: "/blog/agentic-workflow-orchestration-2026" className ="block rounded-lg border border-white/10 p-4 hover:border-emerald-400/40 transition-colors">";,"
                <div className: "text-emerald-300 text-xs mb-2">AI Operations</div>";,"
                <div className: "text-white font-semibold">Agentic Workflow Orchestration 2026</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">Budgets, KPI‑linked canaries, and rollback for safe velocity.</div>";,"
              </Link>
            </div>
            {/* Freshly added posts */}
            <div className: "grid md:grid-cols-2 gap-4 mt-4">";,"
              <Link to: "/blog/ai-2026-reliability-runbooks-v4" className ="block rounded-lg border border-white/10 p-4 hover:border-cyan-400/40 transition-colors">";,"
                <div className: "text-cyan-300 text-xs mb-2">AI Operations</div>";,"
                <div className: "text-white font-semibold">AI 2026: Reliability Runbooks v4</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">Budgeted actions, KPI canaries, and instant rollback—v4 playbooks.</div>";,"
              </Link>
              <Link to: "/blog/edge-2026-consentless-metrics-v2" className ="block rounded-lg border border-white/10 p-4 hover:border-rose-400/40 transition-colors">";,"
                <div className: "text-rose-300 text-xs mb-2">Analytics</div>";,"
                <div className: "text-white font-semibold">Edge 2026: Consentless Metrics v2</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">Zero‑PII signals at &lt;100ms with scoped IDs, edge aggregation, DP.</div>";,"
              </Link>
            </div>
          </div>
        </div>

        {/* Newly added content promo */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <div className: "rounded-xl border border-white/10 bg-white/5 p-6">";,"
            <div className: "text-white text-sm mb-4">Just added</div>";,"
            <div className: "grid md:grid-cols-3 gap-4">";,"
              <Link to: "/blog/real-time-decision-engines-2026" className ="block rounded-lg border border-white/10 p-4 hover:border-blue-400/40 transition-colors">";,"
                <div className: "text-blue-300 text-xs mb-2">Platform Engineering</div>";,"
                <div className: "text-white font-semibold">Real‑Time Decision Engines 2026</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">10M/sec under 1ms using warm pools, intent prefetching, and caches.</div>";,"
              </Link>
              <Link to: "/blog/federated-learning-enterprise-2026" className="block rounded-lg border border-white/10 p-4 hover:border-rose-400/40 transition-colors">";,"
                <div className: "text-rose-300 text-xs mb-2">Machine Learning</div>";,"
                <div className: "text-white font-semibold">Federated Learning 2026</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">Train across regions with secure aggregation and DP noise—no centralization.</div>";,"
              </Link>
              <Link to: "/blog/cognitive-financial-modeling-2027" className ="block rounded-lg border border-white/10 p-4 hover:border-emerald-400/40 transition-colors">";,"
                <div className: "text-emerald-300 text-xs mb-2">FinTech AI</div>";,"
                <div className: "text-white font-semibold">AI Financial Modeling 2027</div>";,"
                <div className: "text-zion-slate-light text-sm mt-1">95%+ accuracy with KPI‑linked scorecards, evals, and rollback.</div>";,"
              </Link>
            </div>
          </div>
        </div>
        
        {/* OCTOBER 2025 MEGA LAUNCH - 7 Revolutionary Articles */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <October2025MegaLaunchBanner />
        </div>
        
        {/* SEPTEMBER 30, 2025 - 5 Revolutionary AI Breakthroughs */}
        <div className: "container mx-auto px-6 mt-6 mb-6">";,"
          <September30NewContentMegaBanner />
        </div>
        
        {/* BREAKTHROUGH CONTENT 2026 - September 30, 2025 */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <Revolutionary2026ContentMegaBanner />
        </div>
        
        {/* New Comprehensive Promotional Banner */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <ComprehensivePromoBanner variant: "hero" showCount={4} />";"
        </div>
        
        {/* New Articles Promotional Banner */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <NewArticlesPromoBanner variant: "premium" showCount={3} />";"
        </div>
        
        {/* New Services Promotional Banner */}
        <div className: "container mx-auto px-6 mt-6">";,"
          <NewServicesPromoBanner variant: "showcase" showCount ={3} featuredOnly: {true} />";"
        </div>
        
        {/* Content Promotion Banner */}
        <ContentPromotionBanner variant: "info",";,"
  title: "🚀 Fresh: Incident Playbooks + Privacy‑Preserving Analytics",";,"
  description: "Budgeted actions, approvals, and DP‑backed telemetry you can ship today.","
          ctaText: "Read the latest",";,"
  ctaLink: "/blog/ai-incident-response-playbooks-2025",";,"
  dismissible: {true}
        />
        {/* Animated background elements */}
        <div className: "absolute inset-0 overflow-hidden">";,"
          <div className: "absolute -top-40 -right-40 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>";,"
          <div className: "absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float",";,"
  style: {{ animationDelay: "2s" }}";"
          ></div>
          <div className: "absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float",";,"
  style: {{ animationDelay: "4s" }}";"
          ></div>
        </div>

        {/* Hero Section */}
        <section className: "relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">";,"
          <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,"
            <div className: "text-center">";,"
              <div className: "inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">";,"
                <span className: "w-4 h-4 mr-2">✨</span>,";,"
  Trusted by 500+ companies worldwide
                <span className: "w-4 h-4 ml-2">🚀</span>";,"
              </div>
              
              <h1 className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6">,";,"
  Leading AI & Technology Solutions
              </h1>
              
              <p className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto">,";,"
  Transform your business with cutting-edge AI, micro SaaS, and enterprise IT solutions. 
                Build faster, scale smarter, and achieve unprecedented results.
              </p>
              
              <div className: "flex flex-col sm:flex-row gap-4 justify-center">";,"
                <Link to: "/services" ,";,"
  className: "bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors","
                >
                  Explore Services
                </Link>
                <Link to: "/contact" ,";,"
  className: "border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors","
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className: "py-20 bg-white">";,"
          <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,"
            <div className: "text-center mb-16">";,"
              <h2 className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4">,";,"
  Our Core Services
              </h2>
              <p className: "text-xl text-gray-600 max-w-2xl mx-auto">,";,"
  Comprehensive solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";,"
              <div className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">";,"
                <div className: "text-center mb-6">";,"
                  <div className: "w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">";,"
                    <span className: "w-8 h-8 text-blue-600">⚡</span>";,"
                  </div>
                  <h3 className: "text-xl font-bold text-gray-900 mb-3">AI Services & Solutions</h3>";,"
                  <p className: "text-gray-600 mb-4">Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation.</p>";,"
                  <div className: "text-3xl font-bold text-blue-600 mb-4">Starting at $5,000</div>";,"
                </div>
                
                <ul className: "space-y-3 mb-6">";,"
                  <li className: "flex items-center gap-3">";,"
                    <span className: "w-5 h-5 text-green-600">✔️</span>";,"
                    <span className: "text-gray-700">Machine Learning Models</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <span className: "w-5 h-5 text-green-600">✔️</span>";,"
                    <span className: "text-gray-700">Deep Learning Systems</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <span className: "w-5 h-5 text-green-600">✔️</span>";,"
                    <span className: "text-gray-700">AI Automation</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <span className: "w-5 h-5 text-green-600">✔️</span>";,"
                    <span className: "text-gray-700">Predictive Analytics</span>";,"
                  </li>
                </ul>
                
                <Link to: "/services/ai-services",";,"
  className: "block w-full text-center py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors","
                >
                  Learn More
                </Link>
              </div>
              
              <div className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-blue-300 ring-2 ring-blue-100 relative">";,"
                <div className: "absolute -top-3 left-1/2 transform -translate-x-1/2">";,"
                  <span className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">,";,"
  Most Popular
                  </span>
                </div>
                
                <div className: "text-center mb-6">";,"
                  <div className: "w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">";,"
                    <span className: "w-8 h-8 text-purple-600">🚀</span>";,"
                  </div>
                  <h3 className: "text-xl font-bold text-gray-900 mb-3">Micro SaaS Solutions</h3>";,"
                  <p className: "text-gray-600 mb-4">Scalable software-as-a-service applications designed for rapid deployment and growth.</p>";,"
                  <div className: "text-3xl font-bold text-blue-600 mb-4">Starting at $3,000</div>";,"
                </div>
                
                <ul className: "space-y-3 mb-6">";,"
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">Rapid Development</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">Scalable Architecture</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">Cloud-Native Design</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">API-First Approach</span>";,"
                  </li>
                </ul>
                
                <Link to: "/services/micro-saas",";,"
  className: "block w-full text-center py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-colors","
                >
                  Learn More
                </Link>
              </div>
              
              <div className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">";,"
                <div className: "text-center mb-6">";,"
                  <div className: "w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">";,"
                    <span className: "w-8 h-8 text-green-600">🛡️</span>";,"
                  </div>
                  <h3 className: "text-xl font-bold text-gray-900 mb-3">IT Services & Solutions</h3>";,"
                  <p className: "text-gray-600 mb-4">Comprehensive IT infrastructure, cloud migration, and DevOps services.</p>";,"
                  <div className: "text-3xl font-bold text-blue-600 mb-4">Starting at $2,500</div>";,"
                </div>
                
                <ul className: "space-y-3 mb-6">";,"
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">Cloud Migration</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">DevOps & SRE</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">Infrastructure Management</span>";,"
                  </li>
                  <li className: "flex items-center gap-3">";,"
                    <CheckCircle className: "w-5 h-5 text-green-600" />";,"
                    <span className: "text-gray-700">Security & Compliance</span>";,"
                  </li>
                </ul>
                
                <Link to: "/services/it-services",";,"
  className: "block w-full text-center py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors","
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className: "py-20 bg-gray-50">";,"
          <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,"
            <div className: "text-center mb-16">";,"
              <h2 className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4">,";,"
  Success Stories
              </h2>
              <p className: "text-xl text-gray-600 max-w-2xl mx-auto">,";,"
  Real results from our enterprise clients
              </p>
            </div>
            
            <div className: "grid grid-cols-1 lg:grid-cols-2 gap-8">";,"
              <div className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">";,"
                <div className: "mb-6">";,"
                  <div className: "flex items-center gap-3 mb-4">";,"
                    <div className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">";,"
                      <span className: "text-white font-bold text-lg">G</span>";,"
                    </div>
                    <div >
                      <h3 className: "text-xl font-bold text-gray-900">Global Manufacturing Corp</h3>";,"
                      <p className: "text-gray-500 text-sm">Manufacturing</p>";,"
                    </div>
                  </div>
                </div>
                
                <div className: "space-y-4">";,"
                  <div >
                    <h4 className: "font-semibold text-gray-900 mb-2">Challenge:</h4>";,"
                    <p className: "text-gray-600 text-sm">High equipment downtime and maintenance costs affecting production efficiency</p>";,"
                  </div>
                  
                  <div >
                    <h4 className: "font-semibold text-gray-900 mb-2">Solution:</h4>";,"
                    <p className: "text-gray-600 text-sm">Implemented AI-powered predictive maintenance system with real-time monitoring</p>";,"
                  </div>
                  
                  <div >
                    <h4 className: "font-semibold text-gray-900 mb-2">Result:</h4>";,"
                    <p className: "text-gray-600 text-sm">Achieved 40% reduction in downtime and $25M annual savings</p>";,"
                  </div>
                  
                  <div className: "pt-4 border-t border-gray-200">";,"
                    <div className: "text-center">";,"
                      <div className: "text-2xl font-bold text-green-600 mb-1">$25M Annual Savings</div>";,"
                      <div className: "text-xs text-gray-500 uppercase tracking-wide">Key Metric</div>";,"
                    </div>
                  </div>
                </div>
              </div>
              
              <div className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">";,"
                <div className: "mb-6">";,"
                  <div className: "flex items-center gap-3 mb-4">";,"
                    <div className: "w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">";,"
                      <span className: "text-white font-bold text-lg">H</span>";,"
                    </div>
                    <div >
                      <h3 className: "text-xl font-bold text-gray-900">HealthTech Solutions</h3>";,"
                      <p className: "text-gray-500 text-sm">Healthcare</p>";,"
                    </div>
                  </div>
                </div>
                
                <div className: "space-y-4">";,"
                  <div >
                    <h4 className: "font-semibold text-gray-900 mb-2">Challenge:</h4>";,"
                    <p className: "text-gray-600 text-sm">Manual processes causing delays in patient care and operational inefficiencies</p>";,"
                  </div>
                  
                  <div >
                    <h4 className: "font-semibold text-gray-900 mb-2">Solution:</h4>";,"
                    <p className: "text-gray-600 text-sm">Deployed comprehensive AI platform for patient data analysis and workflow automation</p>";,"
                  </div>
                  
                  <div >
                    <h4 className: "font-semibold text-gray-900 mb-2">Result:</h4>";,"
                    <p className: "text-gray-600 text-sm">Improved patient outcomes and achieved 3x faster processing times</p>";,"
                  </div>
                  
                  <div className: "pt-4 border-t border-gray-200">";,"
                    <div className: "text-center">";,"
                      <div className: "text-2xl font-bold text-green-600 mb-1">95% Patient Satisfaction</div>";,"
                      <div className: "text-xs text-gray-500 uppercase tracking-wide">Key Metric</div>";,"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section className: "py-20 bg-white">";,"
          <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,"
            <div className: "text-center mb-16">";,"
              <h2 className: "text-4xl font-bold text-gray-900 mb-6">,";,"
  Featured Content
              </h2>
              <p className: "text-xl text-gray-600 max-w-3xl mx-auto">,";,"
  Explore our latest AI insights, breakthrough technologies, and success stories
              </p>
            </div>
            
            <div className: "grid md:grid-cols-3 gap-8">";,"
              {latestInsights.map((item) => (
                <Link key: {item.id} to: "/blog" className ="group">";,"
                  <div className: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200">";,"
                    <div className: "flex items-center gap-2 mb-4">";,"
                      <span className: {`px-2 py-1 rounded-full text-xs font-semibold ${,,`;,`;
  item.featured ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>`;`;
                        {item.featured ? 'Featured' : item.category}';';
                      </span>
                      <span className: "text-sm text-gray-500">{item.readMinutes} min read</span>";"
                    </div>
                    
                    <div className: "text-4xl mb-4">🚀</div>";,"
                    <h3 className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">";,"
                      {item.title}
                    </h3>
                    
                    <p className: "text-gray-600 mb-4 text-sm leading-relaxed">";,"
                      {item.summary}
                    </p>
                    
                    <div className: "text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">,";,"
  Read More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className: "text-center mt-12">";,"
              <Link to: "/blog",";,"
  className: "inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl","
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className: "py-20 bg-gray-50">";,"
          <div className: "container mx-auto px-6">";,"
            <div className: "text-center mb-12">";,"
              <div className: "inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">";,"
                <Sparkles className: "w-4 h-4 mr-2" />,";,"
  New Success Stories Available
              </div>
              <h2 className: "text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>";,"
              <p className: "text-xl text-gray-600 max-w-2xl mx-auto">,";,"
  See how Fortune 500 companies are transforming their operations with our breakthrough AI solutions. New: Enterprise AI Platform Modernization, Multi-Modal AI, Edge AI Deployment & More.,,
              </p>
            </div>
            
            <div className: "grid md:grid-cols-3 gap-8 mb-12">";,"
              <div className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">";,"
                <div className: "flex items-center mb-4">";,"
                  <div className: "bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">";,"
                    <span className: "w-6 h-6 text-green-600">📈</span>";,"
                  </div>
                  <div >
                    <h3 className: "font-semibold text-gray-900">RetailMax Corporation</h3>";,"
                    <p className: "text-sm text-gray-600">E-commerce</p>";,"
                  </div>
                </div>
                <p className: "text-gray-600 mb-4">Reduced order processing time from 24 hours to 2 minutes with AI workflow automation.</p>";,"
                <div className: "text-2xl font-bold text-green-600">99% Time Reduction</div>";,"
              </div>
              
              <div className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">";,"
                <div className: "flex items-center mb-4">";,"
                  <div className: "bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">";,"
                    <span className: "w-6 h-6 text-blue-600">👥</span>";,"
                  </div>
                  <div >
                    <h3 className: "font-semibold text-gray-900">First National Bank</h3>";,"
                    <p className: "text-sm text-gray-600">Banking</p>";,"
                  </div>
                </div>
                <p className: "text-gray-600 mb-4">Reduced customer wait times from 45 minutes to 2 minutes with AI virtual assistant.</p>";,"
                <div className: "text-2xl font-bold text-blue-600">95% Faster Response</div>";,"
              </div>
              
              <div className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">";,"
                <div className: "flex items-center mb-4">";,"
                  <div className: "bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">";,"
                    <span className: "w-6 h-6 text-purple-600">🎯</span>";,"
                  </div>
                  <div >
                    <h3 className: "font-semibold text-gray-900">Precision Manufacturing</h3>";,"
                    <p className: "text-sm text-gray-600">Manufacturing</p>";,"
                  </div>
                </div>
                <p className: "text-gray-600 mb-4">Reduced production waste by 70% with AI data analytics and predictive maintenance.</p>";,"
                <div className: "text-2xl font-bold text-purple-600">70% Waste Reduction</div>";,"
              </div>
            </div>
            
            <div className: "text-center">";,"
              <Link to: "/case-studies",";,"
  className: "bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2","
              >
                <span className: "w-5 h-5">🏆</span>,";,"
  View All Success Stories
              </Link>
            </div>
          </div>
        </section>
        {/* New Content Promo */}
        <section className: "py-20 bg-white">";,"
          <div className: "container mx-auto px-6">";,"
            <div className: "bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">";,"
              <div className: "flex flex-col md:flex-row md:items-center md:justify-between gap-8">";,"
                <div className: "max-w-2xl">";,"
                  <h2 className: "text-3xl font-bold mb-2">Latest from Zion Insights</h2>";,"
              <p className: "text-white/90">New: AI SRE Runbooks 2026, Real‑Time Evals, and Cost‑Aware Agents.</p>";,"
                </div>
                <Link to: "/blog" className: "bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 self-start md:self-auto">,";,"
  Read the latest
                  <span className: "w-5 h-5">›</span>";,"
                </Link>
              </div>

              {/* Inline featured list (auto-curated highlights) */}
              <div className: "mt-8 grid gap-6 md:grid-cols-3">";,"
                <div className: "bg-white/10 rounded-xl p-5">";,"
                  <div className: "text-sm text-purple-200 mb-1">Observability</div>";,"
                  <div className: "font-semibold text-white">E2E AI Tracing</div>";,"
                </div>
                <div className: "bg-white/10 rounded-xl p-5">";,"
                  <div className: "text-sm text-rose-200 mb-1">Edge Computing</div>";,"
                  <div className: "font-semibold text-white">Edge Personalization</div>";,"
                </div>
                <div className: "bg-white/10 rounded-xl p-5">";,"
                  <div className: "text-sm text-blue-200 mb-1">AI Governance</div>";,"
                  <div className: "font-semibold text-white">Policy Tests Quickstart</div>";,"
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Services Promotional Section */}
        <section className: "py-20 bg-gradient-to-r from-emerald-50 to-teal-50 relative overflow-hidden">";,"
          <div className: "absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20"></div>";,"
          <div className: "container mx-auto px-6 relative z-10">";,"
            <div className: "text-center">";,"
              <h2 className: "text-3xl font-bold text-gray-900 mb-4">Latest AI Services</h2>";,"
              <p className: "text-xl text-gray-600 max-w-3xl mx-auto">,";,"
  Discover our newest AI-powered solutions designed to accelerate your digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* New Services Promo 2026 */}
        <NewServicesPromoBanner2026 />
        <NewServicesShowcase />

        {/* Latest Articles Promotional Section */}
        <section className: "py-20 bg-gradient-to-r from-purple-50 to-indigo-50 relative overflow-hidden">";,"
          <div className: "absolute inset-0 bg-gradient-to-r from-purple-100/20 to-indigo-100/20"></div>";,"
          <div className: "container mx-auto px-6 relative z-10">";,"
            <div className: "text-center">";,"
              <h2 className: "text-3xl font-bold text-gray-900 mb-4">Latest Articles & Insights</h2>";,"
              <p className: "text-xl text-gray-600 max-w-3xl mx-auto">,";,"
  Stay ahead with our latest AI insights, technical guides, and industry best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Articles Showcase */}
        <LatestArticlesShowcase />

        {/* Success Stories Showcase */}
        <SuccessStoriesShowcase />
        {/* CTA Section */}
        <section className: "py-20 bg-blue-600">";,"
          <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";,"
            <h2 className: "text-3xl md:text-4xl font-bold text-white mb-4">,";,"
  Ready to Transform Your Business?
            </h2>
            <p className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto">,";,"
  Join hundreds of enterprises already leveraging our AI and technology solutions.
            </p>
            <div className: "flex flex-col sm:flex-row gap-4 justify-center">";,"
              <Link to: "/contact" ,";,"
  className: "bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors","
              >
                Start Your Project
              </Link>
              <Link to: "/case-studies" ,";,"
  className: "border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors","
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;