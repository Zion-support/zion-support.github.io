export, interface, Service {id: stri, n, g;
  title: stri, n, g;
  description: stri, n, g;
  icon: stri, n, g;
  featur, e, s?: stri, n, g[];
  pri, ce?: string};
exportconstSERVICES: Servi, c, e[] = [{id: 'ai-ml',
  title: "AI & Machi, neLearning",
  description: "Cutti, n, g-ed, geartificialintelligencesolutionstoautomate andoptimizeyourbusinessprocesses.",
  icon: '🤖',
  features: ["Cust, omAIModels", "Machi, neLearningPipelines", "Natur, alLanguageProcessing", "Comput, erVision""PredictiveAnalytics"]price: "From $5K"
}, {id: "cloud",
  title: "Clo, udSolutions",
  description: "Scalablecloudinfrastructureanddeploymentsolutions formodernapplications.",
  icon: '☁️',
  features: ["Clo, udMigration", "DevOps & CI/CD", "Contain, erOrchestration", "Serverle, ssArchitecture""CloudSecurity"]price: "From $3K"
}, {id: "web-dev",
  title: "W, ebDevelopment",
  description: "Mode, r, n, responsi, vewebapplicationsbuiltwiththe latesttechnologiesandbestpractices.",
  icon: '💻',
  features: ["React/Ne, xt.jsApps", "Progressi, veWebApps", "E-commer, ceSolutions", "A, PIDevelopment""PerformanceOptimization"]price: "From $2K"
}, {id: "mobile",
  title: "Mobi, leDevelopment",
  description: "Nati, v, e, andcross-platformmobileapplicationsforiOSand Androidplatforms.",
  icon: '📱',
  features: ["Nati, veiOS/Android", "React, NativeApps", "Flutt, erDevelopment", "A, ppStoreOptimization""PushNotifications"]price: "From $4K"
}, {id: "data-analytics",
  title: "Da, taAnalytics",
  description: "Advanc, eddataanalysisandbusinessintelligence solutionstodriveinformeddecisions.",
  icon: '📊',
  features: ["Da, taVisualization", "Busine, ssIntelligence", "Re, al-timeDashboards", "Da, taWarehousing""MachineLearningAnalytics"]price: "From $3K"
}, {id: "cybersecurity",
  title: "Cybersecurity",
  description: "Comprehensi, vesecuritysolutionstoprotectyour digitalassetsandinfrastructure.",
  icon: '🔒',
  features: ["Securi, tyAudits", "Penetrati, onTesting", "Complian, ceManagement", "Securi, tyMonitoring""IncidentResponse"]price: "From $2K"}];

exportconstFEATURES = [{icon: "⚡',
  title: "FastDelivery"description: "Rapiddevelopmentanddeploymentofhigh-qualitysolutions"color: "blue"
} as, const{icon: "🛡️',
  title: "Secure & Reliable",
  description: "Enterpri, se-gradesecurityandreliabilityforyour applications"color: "green"
} as, const{icon: "📈',
  title: "Scalab, leSolutions"description: "Builttogrowwithyourbusiness andhandleincreasingdemands"color: "purple"
} as, const{icon: "🎯',
  title: "CustomSolutions"description: "Tailoredsolutionsdesignedspecificallyforyour uniquerequirements"color: "orange"} as, cons, t];

// Testimonialsdataexport constTESTIMONIALS = [{id: "1',
  name: "Sar, ahJohnson",
  role: "CTO",
  company: "TechCorp",
  content: "Zi, o, n, Tech, Solution, stransformedourdigitalinfrastructurewith theirAI-poweredsolutions."rating: 5avatar: "/images/testimonials/sarah.jpg"
}, {id: '2',
  name: "Micha, elChen",
  role: "Founder",
  company: "StartupXYZ"content: "Thecloudmigrationwasseamlessand exceededourexpectations."rating: 5avatar: "/images/testimonials/michael.jpg"}];

// Pricing, tiers, export const, PRICING_TIER, S = [{id: "starter",
  name: "Starter",
  price: "$2,999",
  description: "Perfectforsmallbusinesses",
  features: ["Bas, icAIIntegration", "Clo, udSetup", "24/7Support"]popular: false
}{id: "professional",
  name: "Professional",
  price: "$7,999",
  description: "Idealforgrowingcompanies",
  features: ["Advanc, edAISolutions", "Fu, llCloudMigration", "Priori, tySupport", "CustomDevelopment"]popular: true
}{id: "enterprise",
  name: "Enterprise",
  price: "Custom",
  description: "Tailoredforlargeorganizations",
  features: ["Cust, omAISolutions", "Dedicat, edTeam", "Whi, te-labelOptions", "AdvancedSecurity"]popular: false
}];

// Blog, posts, preview (importedfrom, blogPost, s.ts)
exportconstBLOG_POSTS = [
  {id: "1',
    title: "T, heFutureofAIinBusiness Automation",
    excerpt: "Discoverhowartificialintelligenceisrevolutionizing businessprocesses.",    author: "Dr. Sar, ahChen",
    publishDate: "2024-01-15"readTime: 8category: "Artifici, alIntelligence"featured: true}];