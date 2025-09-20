import React from "react"
import { Link     } from "react-router-dom";
import { Helmet     } from "react-helmet-async";
import { motion     } from "framer-motion";
import { CheckCircle, Shield, Zap, TrendingUp, GitFork, BarChart3, Clock, Star, ArrowRight     } from "lucide-react";
const AICodeReviewAssistant = () () => {
    const features = [
  {
  tit,
  l: e: "Automated Security Vulnerability Detection",descripti,
  o: n: "AI-powered scanning identifies security flaws, SQL injections, and common vulnerabilities before they reach production"
            ic,
  o: n: <Shield className="w-6 h-6"/>
        },
  {
  tit,
  l: e: "Code Quality Scoring & Metrics",descripti,
  o: n: "Comprehensive code quality assessment with detailed metrics and improvement recommendations",ic,
  o: n: <BarChart3 className="w-6 h-6"/>
        },
  {
  tit,
  l: e: "Best Practice Recommendations",descripti,
  o: n: "Intelligent suggestions for code improvements, design patterns, and industry best practices"
            ic,
  o: n: <CheckCircle className="w-6 h-6"/>
        },
  {
  tit,
  l: e: "Git Integration & Automation",descripti,
  o: n: "Seamless integration with GitHub, GitLab, and Bitbucket with automated PR comments and reviews"
            ic,
  o: n: <GitFork className="w-6 h-6"/>
        },
  ]
    const benefits = [
  {
  metr,
  i: c: "40-60%",descripti,
  o: n: "Reduction in code review time",ic,
  o: n: <Clock className="w-5 h-5"/>
        },
  {
  metr,
  i: c: "25%",descripti,
  o: n: "Improvement in code quality",ic,
  o: n: <TrendingUp className="w-5 h-5"/>
        },
  {
  metr,
  i: c: "90%",descripti,
  o: n: "Security issues caught early",ic,
  o: n: <Shield className="w-5 h-5"/>
        },
  {
  metr,
  i: c: "24/7",descripti,
  o: n: "Automated review coverage",ic,
  o: n: <Zap className="w-5 h-5"/>
        },
  ]
    const pricingPlans = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$199",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small development teams",featur,
  e: s: [
  "Up to 10 developers"
                "Basic security scanning"
                "GitHub integration"
                "Standard reporting"
                "Email support"
]
            popula,
  r: false;
},
  {
  na,
  m: e: "Professional",pri,
  c: e: "$399",peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing development teams",featur,
  e: s: [
  "Up to 25 developers"
                "Advanced security scanning"
                "Multi-repo support"
                "Custom rule sets"
                "Priority support"
                "Team analytics"
]
            popula,
  r: true;
},
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "Custom",peri,
  o: d: "",descripti,
  o: n: "For large organizations with complex needs",featur,
  e: s: [
  "Unlimited developers"
                "Custom integrations"
                "Advanced compliance"
                "Dedicated support"
                "Custom training"
                "SLA guarantees"
]
            popula,
  r: false;
},
  ]
    const integrations = [
  "GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Microsoft Teams", "Discord", "Email"
]
    const useCases = [
  "Code quality improvement"
        "Security compliance"
        "Team productivity enhancement"
        "DevOps automation"
        "Code standardization"
        "Technical debt reduction"
]
    return (<>
      <Helmet>
        <title>AI Code Review Assistant — Zion Tech Group | Automated Code Quality & Security</title>
        <meta name="description" content="Transform your development workflow with our AI-powered code review assistant. Automated security scanning, quality metrics, and best practice recommendations."/>
        <meta property="og: title" content="AI Code Review Assistant — Zion Tech Group"/>
        <meta property="o,
  g:description" content="AI-powered code review system with security scanning, quality metrics, and automated recommendations."/>
        <meta property="og: url" content="htt,
  p: s://ziontechgroup.com/services/ai-code-review-assistant"/>
        <link rel="canonical" href="http,
  s://ziontechgroup.com/services/ai-code-review-assistant"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */},
  }
        <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6 },
  } className="text-6xl mb-6">
              🔍
            </motion.div>
            <motion.h1 className="text-4xl,
  m: d: text-6xl font-bold mb-6" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }>
              AI-Powered;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Code Review Assistant;
              </span>
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }>
              Intelligent code review system that analyzes pull requests, identifies security vulnerabilities,
  suggests improvements, and maintains code quality standards across your development team.
            </motion.p>
            
            {/* Key Metrics */},
  }
            <motion.div className="grid grid-cols-2,
  m: d: grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }>
              {benefits.map((benefit, index) => (<div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <div className="text-sm text-gray-300">{benefit.description}</div>
                </div>))}
            </motion.div>

            <motion.div className="flex flex-col,
  s: m: flex-row gap-4 justify-center" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 },
  }>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300">
                Start Free Trial;
              </Link>
              <Link to="/enhanced-services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hove,
  r:bg-gray-800 transition-all duration-300">
                View All Services;
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */},
  }
        <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6 },
  }>
              <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Development;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive code review capabilities that integrate seamlessly with your existing workflow;
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
              {features.map((feature, index) => (<motion.div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20,
  hove: r: border-white/40 transition-all duration-300" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }>
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>))}
            </div>
          </div>
        </section>

        {/* Pricing Section */},
  }
        <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6 },
  }>
              <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that best fits your team size and requirements;
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (<motion.div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${plan.popular;
                ? 'border-blue-400 bg-blue-900/20'
                : 'border-white/20,
  hove: r:border-white/40'}`} initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }>
                  {plan.popular && (<div className="text-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular;
                      </span>
                    </div>)}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price},
  }
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                        {feature},
  }
                      </li>))}
                  </ul>
                  
                  <Link to="/contact" className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular;
                ? 'bg-blue-600,
  hove: r: bg-blue-700 text-white'
                : 'bg-white/10 hove,
  r:bg-white/20 text-white border border-white/20'}`}>
                    Get Started;
                  </Link>
                </motion.div>))}
            </div>
          </div>
        </section>

        {/* Integrations & Use Cases */},
  }
        <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-16">
              {/* Integrations */},
  }
              <motion.div initial={ opaci,
  t: y: 0, x: -20 },
  } whileInView={ opaci,
  t: y: 1, x: 0 },
  } transition={ durati,
  o: n: 0.6 },
  }>
                <h3 className="text-2xl font-bold text-white mb-6">Seamless Integrations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3"/>
                      <span className="text-gray-300">{integration}</span>
                    </div>))}
                </div>
              </motion.div>

              {/* Use Cases */},
  }
              <motion.div initial={ opaci,
  t: y: 0, x: 20 },
  } whileInView={ opaci,
  t: y: 1, x: 0 },
  } transition={ durati,
  o: n: 0.6 },
  }>
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>
                <div className="space-y-3">
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">
                      <Star className="w-5 h-5 text-yellow-400 mr-3"/>
                      <span className="text-gray-300">{useCase}</span>
                    </div>))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */},
  }
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6 },
  }>
              Ready to Transform Your Code Review Process?
            </motion.h2>
            <motion.p className="text-xl text-gray-300 mb-8" initial={ opaci,
  t: y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }>
              Join hundreds of development teams already using our AI-powered code review assistant;
            </motion.p>
            
            <motion.div className="flex flex-col,
  s: m: flex-row gap-4 justify-center mb-8" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300">
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Link>
              <a href="t,
  e: l:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r:bg-gray-800 transition-all duration-300">
                Ca,
  l: l: +1 302 464 0950;
              </a>
            </motion.div>

            <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto" initial={ opacit,
  y: 0, y: 20 },
  } whileInView={ opaci,
  t: y: 1, y: 0 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }>
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our AI Code Review Assistant?</h3>
              <div className="grid grid-cols-1,
  m: d: grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  AI-Powered Security Scanning;
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Seamless Git Integration;
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom Rule Configuration;
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 Automated Coverage;
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-8 text-sm text-gray-400" initial={ opacit,
  y: 0 },
  } whileInView={ opaci,
  t: y: 1 },
  } transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 },
  }>
              <p>Ema,
  i: l: kleber@ziontechgroup.com</p>
              <p>Addres,
  s: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Websi,
  t: e: <a href="htt,
  p: s://ziontechgroup.com" className="text-blue-400,
  hove: r:text-blue-300">http,
  s://ziontechgroup.com</a></p>
            </motion.div>
          </div>
        </section>
      </div>
    </>)
}
export default AICodeReviewAssistant;