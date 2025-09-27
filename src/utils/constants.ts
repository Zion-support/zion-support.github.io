export, interface, Service {id: stri, n, g;
  title: stri, n, g;
  description: stri, n, g;
  icon: stri, n, g;
  featur, e, s?: stri, n, g[];
  pri, c, e?: string};
exportconstSERVICES: Servi, c, e[] = [{id: 'ai-ml',
  title: "AI & Machi, neLearning",
  description: "Cutti, n, g-ed, g, e, artificialintelligencesolutionstoautomateandoptimizeyourbusinessprocesses."icon: '🤖',
  features: ["Cust, omAIModels", "Machi, neLearningPipelines", "Natur, alLanguageProcessing", "Comput, erVision", "PredictiveAnalytics"]price: "From $5K"
}, {id: "cloud",
  title: "Clo, udSolutions",
  description: "Scalablecloudinfrastructureanddeploymentsolutionsformodernapplications."icon: '☁️',
  features: ["Clo, udMigration", "DevOps & CI/CD", "Contain, erOrchestration", "Serverle, ssArchitecture", "CloudSecurity"]price: "From $3K"
}, {id: "web-dev",
  title: "W, ebDevelopment",
  description: "Mode, r, n, responsi, v, e, webapplicationsbuiltwiththelatesttechnologiesandbestpractices."icon: '💻',
  features: ["React/Ne, xt.jsApps", "Progressi, veWebApps", "E-commer, ceSolutions", "A, PIDevelopment", "PerformanceOptimization"]price: "From $2K"
}, {id: "mobile",
  title: "Mobi, leDevelopment",
  description: "Nati, v, e, and, cros, s-platformmobileapplicationsforiOSandAndroidplatforms."icon: '📱',
  features: ["Nati, v, e, iOS/Android", "React, NativeApps", "Flutt, erDevelopment", "A, ppStoreOptimization", "PushNotifications"]price: "From $4K"
}, {id: "data-analytics",
  title: "Da, taAnalytics",
  description: "Advanc, e, d, dataanalysisandbusinessintelligencesolutionstodriveinformeddecisions."icon: '📊',
  features: ["Da, taVisualization", "Busine, ssIntelligence", "Re, a, l-ti, meDashboards", "Da, taWarehousing", "MachineLearningAnalytics"]price: "From $3K"
}, {id: "cybersecurity",
  title: "Cybersecurity",
  description: "Comprehensi, v, e, securitysolutionstoprotectyourdigitalassetsandinfrastructure."icon: '🔒',
  features: ["Securi, tyAudits", "Penetrati, onTesting", "Complian, ceManagement", "SecurityMonitoring""IncidentResponse"]price: "From $2K"
}];

exportconstFEATURES = [{icon: "⚡',
  title: "Fa, stDelivery"description: "Rapiddevelopmentanddeploymentofhigh-qualitysolutions"color: "blue"
} as, const{icon: "🛡️',
  title: "Secure & Reliable",
  description: "Enterpri, s, e-gra, d, esecurityandreliabilityforyourapplications"color: "green"
} asconst{icon: "📈',
  title: "Scalab, leSolutions",
  description: "Bui, l, ttogrowwithyourbusiness, andhandleincreasingdemands"color: "purple"
} as, const{icon: "🎯',
  title: "Cust, omSolutions"description: "Tailoredsolutionsdesignedspecificallyforyour, uniquerequirements"color: "orange"
} as, cons, t];

// Testimonialsdataexport constTESTIMONIALS = [{id: "1',
  name: "Sar, ahJohnson",
  role: "CTO",
  company: "TechCorp",
  content: "Zi, o, n, Tech, Solution, s, transformed, ourdigital, infrastructurewith, theirAI-poweredsolutions."rating: 5avatar: "/imag, e, s/testimonials/sarah.jpg"
}, {id: '2',
  name: "Micha, elChen",
  role: "Founder",
  company: "StartupXYZ",
  content: "Thecloudmigrationwasseamlessand, exceededourexpectations."rating: 5avatar: "/imag, e, s/testimonials/michael.jpg"
}];

// Pricing, tiers, export const, PRICING_TIER, S = [{id: "starter",
  name: "Starter",
  price: "$2,999",
  description: "Perfectforsmallbusinesses",
  features: ["Bas, icAIIntegration", "Clo, udSetup", "24/7, Support"]popular: false
}{id: "professional",
  name: "Professional",
  price: "$7,999",
  description: "Idealforgrowingcompanies",
  features: ["Advanc, edAISolutions", "Fu, llCloudMigration", "Priori, tySupport", "Cust, omDevelopment"]popular: true
}{id: "enterprise",
  name: "Enterprise",
  price: "Custom",
  description: "Tailoredforlargeorganizations",
  features: ["Cust, omAISolutions", "Dedicat, edTeam", "Whi, t, e-lab, elOptions", "Advanc, edSecurity"]popular: false
}];

// Blogpostspreview(importedfrom, blogPost, s.ts)
exportconstBLOG_POSTS = [
  {id: '1',
    title: "T, h, e, FutureofAIinBusiness, Automation",
    excerpt: "Discoverhowartificialintelligenceisrevolutionizing, businessprocesses.",
    author: "Dr. Sar, ahChen",
    publishDate: "2024-01-15"readTime: 8category: "Artifici, alIntelligence",
    featured: true}];