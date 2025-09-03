<<<<<<< HEAD
import React, { useState } from 'react';'''
import { Helmet } from 'react-helmet-async';'''
import { Link } from 'react-router-dom';
import {}
  Search,
  BookOpen,
  MessageSquare,
  Phone,
  Mail,'
  ArrowRight,''
  ChevronDown,'''
  ChevronRight} from 'lucide-react';

export default function HelpCenter() {}
'
  const [searchQuery, setSearchQuery] = useState('');'
  const [expandedCategories, setExpandedCategories] = useState([''
    'getting-started'
  ]);
  const toggleCategory = category => {}
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = {}
'
    'getting-started': {}
'
''
'''
      title: 'Getting Started',
      icon: BookOpen,
      articles: []
        {}
'
''
'''
          title: 'How to create your first account','''
          href: '/help/create-account'},'''
        { title: 'Complete profile setup guide', href: '/help/profile-setup' },
        {}
'
          title: 'Understanding the marketplace','
          href: '/help/marketplace-guide'},'
        { title: 'First steps for new users', href: '/help/first-steps' }
      ]},
    marketplace: {}
'
''
'''
      title: 'Marketplace',
      icon: BookOpen,
      articles: []
        {}
'
''
'''
          title: 'How to list products and services','''
          href: '/help/list-products'},'''
        { title: 'Managing your listings', href: '/help/manage-listings' },'''
        { title: 'Understanding pricing and fees', href: '/help/pricing-fees' },
        {}
'
          title: 'Marketplace policies and guidelines','
          href: '/help/marketplace-policies'}
      ]},
    talent: {}
'
''
'''
      title: 'Talent & Hiring',''
      icon: BookOpen,'''
      articles: [''''
        { title: 'Creating a talent profile', href: '/help/talent-profile' },'''
        { title: 'Finding and hiring talent', href: '/help/hire-talent' },
        {}
'
          title: 'Managing projects and contracts','
          href: '/help/manage-projects'},'
        { title: 'Payment and escrow system', href: '/help/payment-system' }
      ]},
    technical: {}
'
''
'''
      title: 'Technical Support',''
      icon: BookOpen,'''
      articles: [''''
        { title: 'Common technical issues', href: '/help/technical-issues' },'''
        { title: 'Browser compatibility', href: '/help/browser-compatibility' },
        {}
'
          title: 'Mobile app troubleshooting','
          href: '/help/mobile-troubleshooting'},'
        { title: 'API and integration support', href: '/help/api-support' }
      ]},
    billing: {}
'
''
'''
      title: 'Billing & Payments',''
      icon: BookOpen,'''
      articles: [''''
        { title: 'Understanding your invoice', href: '/help/invoice-guide' },
        {}
'
''
'''
          title: 'Payment methods and security','''
          href: '/help/payment-methods'},
        {}
'
''
'''
          title: 'Refund and cancellation policy','''
          href: '/help/refund-policy'},
        {}
'
          title: 'Tax information and reporting','
          href: '/help/tax-information'}
      ]},
    account: {}
'
''
'''
      title: 'Account & Security',
      icon: BookOpen,
      articles: []
        {}
'
''
'''
          title: 'Account security best practices','''
          href: '/help/account-security'},'''
        { title: 'Two-factor authentication setup', href: '/help/2fa-setup' },
        {}
'
''
'''
          title: 'Password reset and recovery','''
          href: '/help/password-recovery'},
        {}
'
          title: 'Privacy settings and data control','
          href: '/help/privacy-settings'}
      ]}};'
  const popularArticles = [''
    'How to create your first account',Understanding the marketplace',Creating a talent profile',Finding and hiring talent',Payment and escrow system',Account security best practices'
  ];
  return (<>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta'
          name="description"'"'"""
          content="Get help and support for Zion Tech Group's platform. Find answers to common questions, tutorials, and contact information."""
        />"""
        <meta""""
          name="keywords""""
          content="help center, support, FAQ, tutorials, Zion Tech Group""""
        />""""
        <link rel="canonical" href="https://ziontechgroup.com/help-center" />
      </Helmet>"""
""""
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">"""
        {/* Hero Section */}""""
        <section className="pt-24 pb-16 px-4">""""
          <div className="container mx-auto text-center">""""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">'"""
              How can we{' '}""""
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                help you?
              </span>"""
            </h1>""""
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the;
              support you need to succeed with Zion Tech Group.
            </p>
"""
            {/* Search Bar */}""""
            <div className="max-w-2xl mx-auto relative">""""
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />"""
              <input""""
                type="text""""
                placeholder="Search for help articles, tutorials, or topics..."""
                value={searchQuery}"""
                onChange={e => setSearchQuery(e.target.value)}""""
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-blue-light/30 rounded-xl text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"""
              />
            </div>
          </div>
        </section>
"""
        {/* Help Categories */}""""
        <section className="py-16 px-4">""""
          <div className="container mx-auto">""""
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Browse Help Categories"""
            </h2>""""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div"""
                  key={key}""""
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300""""
                >""""
                  <div className="flex items-center justify-between mb-4">""""
                    <div className="flex items-center gap-3">""""
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">""""
                        <category.icon className="w-5 h-5 text-zion-cyan" />"""
                      </div>""""
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <button"""
                      onClick={() => toggleCategory(key)}""""
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors"""
                    >"""
                      {expandedCategories.includes(key) ? (""""
                        <ChevronDown className="w-5 h-5" />"""
                      ) : (""""
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
"""
                  {expandedCategories.includes(key) && (""""
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link;
                          key={index}"""
                          to={article.href}""""
                          className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-2 px-3 rounded-lg hover:bg-zion-blue-light/10"""
                        >
                          {article.title}
                        </Link>) ) }
                    </div>) }
                </div>) ) }
            </div>
          </div>
        </section>
"""
        {/* Popular Articles */}""""
        <section className="py-16 px-4 bg-zion-blue-light/10">""""
          <div className="container mx-auto">""""
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Popular Help Articles"""
            </h2>""""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <div"""
                  key={index}""""
                  className="bg-zion-blue-light/20 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300""""
                >""""
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {article}
                  </h3>'
                  <Link''"""
                    to={`/help/${article.toLowerCase().replace(/\s+/g,-')}`}""""
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"""
                  >"""
                    Read Article""""
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>) ) }
            </div>
          </div>
        </section>
"""
        {/* Contact Support */}""""
        <section className="py-16 px-4">""""
          <div className="container mx-auto text-center">""""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?"""
            </h2>""""
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us;
              through of these channels.
            </p>"""
""""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">""""
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">""""
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">""""
                  <MessageSquare className="w-6 h-6 text-zion-cyan" />"""
                </div>""""
                <h3 className="text-lg font-semibold text-white mb-2">
                  Live Chat"""
                </h3>""""
                <p className="text-zion-slate-light text-sm mb-4">
                  Get instant help from our support team"""
                </p>""""
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Chat;
                </button>
              </div>"""
""""
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">""""
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">""""
                  <Mail className="w-6 h-6 text-zion-cyan" />"""
                </div>""""
                <h3 className="text-lg font-semibold text-white mb-2">
                  Email Support"""
                </h3>""""
                <p className="text-zion-slate-light text-sm mb-4">
                  Send us a detailed message;
                </p>"""
                <Link""""
                  to="/contact""""
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"""
                >
                  Send Email;
                </Link>
              </div>"""
""""
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6">""""
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">""""
                  <Phone className="w-6 h-6 text-zion-cyan" />"""
                </div>""""
                <h3 className="text-lg font-semibold text-white mb-2">
                  Phone Support"""
                </h3>""""
                <p className="text-zion-slate-light text-sm mb-4">
                  Call us directly for urgent issues;
                </p>"""
                <a""""
                  href="tel:+13024640950""""
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"""
                >
                  Call Now;
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  }


export { HelpCenter };

export { HelpCenter };

export { HelpCenter };

export { HelpCenter };

export { HelpCenter };
=======
<<<<<<< HEAD
const [searchQuery, setSearchQuery] = useState("); const [expandedCategories, setExpandedCategories] = useState(["getting - started", ]); const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) ; }; const helpCategories = { "getting - started": { title: "Getting Started", icon: BookOpen, articles: [{ title: "How to create your first account", href: "/help / create - account"}, { title: "Complete profile setup guide", href: "/help / profile - setup"}, { title: "Understanding the marketplace", href: "/help / marketplace - guide"}, { title: "First steps for new users", href: "/help / first - steps" }, ]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"}, { title: "Managing your listings", href: "/help / manage - listings" }, { title: "Understanding pricing and fees", href: "/help / pricing - fees"}, { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}, ]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"}, { title: "Finding and hiring talent", href: "/help / hire - talent" }, { title: "Managing projects and contracts", href: "/help / manage - projects"}, { title: "Payment and escrow system", href: "/help / payment - system"}, ]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"}, { title: "Browser compatibility", href: "/help / browser - compatibility"}, { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"}, { title: "API and integration support", href: "/help / api - support" }, ]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"}, { title: "Payment methods and security", href: "/help / payment - methods"}, { title: "Refund and cancellation policy", href: "/help / refund - policy"}, { title: "Tax information and reporting", href: "/help / tax - information"}, ]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"}, { title: "Two - factor authentication setup", href: "/help / 2fa - setup"}, { title: "Password reset and recovery", href: "/help / password - recovery"}, { title: "Privacy settings and data control", href: "/help / privacy - settings"}, ]}}; const popularArticles = ["How to create your first account", "Understanding the marketplace", "Creating a talent profile", "Finding and hiring talent", "Payment and escrow system", "Account security best practices", ]; return (<> <Helmet> <title > Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group"s platform.Find answers to common questions, tutorials, and contact information." / / /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / / /> <link rel="canonical" href="https:
=======
import React from "react"
const [searchQuery, setSearchQuery] = useState("); const [expandedCategories, setExpandedCategories] = useState(["getting - started"]); const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) }; const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}}; const popularArticles = []; return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name = "description" content="Get help and support for Zion Tech Group"s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https: ",,
const [searchQuery, setSearchQuery] = useState (") ; const [expandedCategories, setExpandedCategories] = useState ([ "getting - started"]) ; const toggleCategory = category => { setExpandedCategories (prev => prev.includes (category) ? prev.filter (c => c !== category) : [...prev, category]) }; const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [ { title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [ { title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [ { title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [ { title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [ { title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}}; const popularArticles = []; return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group&quot;s platform. Find answers to common questions, tutorials, and contact information." / /       /> <meta name = "keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https: """"",,
const [searchQuery, setSearchQuery] = useState("); const [expandedCategories, setExpandedCategories] = useState(["getting - started"]); const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) }; const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}}; const popularArticles = []; return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group"s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https:;,"});,"})"
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} { title: "Complete: profile setup guide,", href: "/help: / profile - setup,"} { title: "Understanding: the marketplace,", href: "/help: / marketplace - guide,"} { title: "First: steps for new users,", href: "/help: / first - steps"}]}, marketplace: { title: "Marketplace,", icon: BookOpe,n, articles: [{ title: "How: to list products and services,", href: "/help: / list - products,"} { title: "Managing: your listings,", href: "/help: / manage - listings"} { title: "Understanding: pricing and fees,", href: "/help: / pricing - fees,"} { title: "Marketplace: policies and guidelines,", href: "/help: / marketplace - policies,"}]}, talent: { title: "Talent: & Hiring,", icon: BookOpe,n, articles: [{ title: "Creating: a talent profile,", href: "/help: / talent - profile,"} { title: "Finding: and hiring talent,", href: "/help: / hire - talent"} { title: "Managing: projects and contracts,", href: "/help: / manage - projects,"} { title: "Payment: and escrow system,", href: "/help: / payment - system,"}]}, technical: { title: "Technical: Support,", icon: BookOpe,n, articles: [{ title: "Common: technical issues,", href: "/help: / technical - issues,"} { title: "Browser: compatibility,", href: "/help: / browser - compatibility,"} { title: "Mobile: app troubleshooting,", href: "/help: / mobile - troubleshooting,"} { title: "API: and integration support,", href: "/help: / api - support"}]}, billing: { title: "Billing: & Payments,", icon: BookOpe,n, articles: [{ title: "Understanding: your invoice,", href: "/help: / invoice - guide,"} { title: "Payment: methods and security,", href: "/help: / payment - methods,"} { title: "Refund: and cancellation policy,", href: "/help: / refund - policy,"} { title: "Tax: information and reporting,", href: "/help: / tax - information,"}]}, account: { title: "Account: & Security,", icon: BookOpe,n, articles: [{ title: "Account: security best practices,", href: "/help: / account - security,"} { title: "Two: - factor authentication setup,", href: "/help: / 2fa - setup,"} { title: "Password: reset and recovery,", href: "/help: / password - recovery,"} { title: "Privacy: settings and data control,", href: "/help: / privacy - settings,"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group"s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https:  ,",",""
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group"s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https: ",
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { titl,"
    e: "Marketplace", icon: BookOpen, articles: [{ titl,"
    e: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { titl,"
    e: "Talent & Hiring", icon: BookOpen, articles: [{ titl,"
    e: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { titl,"
    e: "Technical Support", icon: BookOpen, articles: [{ titl,"
    e: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { titl,
    e: "Billing & Payments", icon: BookOpen, articles: [{ titl,
    e: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { titl,
    e: "Account & Security", icon: BookOpen, articles: [{ titl,"
    e: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group&apos;s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https:  ,""",
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => {setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} {title: "Complete profile setup guide", href: "/help / profile - setup"} {title: "Understanding the marketplace", href: "/help / marketplace - guide"} {title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: {title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} {title: "Managing your listings", href: "/help / manage - listings" } {title: "Understanding pricing and fees", href: "/help / pricing - fees"} {title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: {title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} {title: "Finding and hiring talent", href: "/help / hire - talent" } {title: "Managing projects and contracts", href: "/help / manage - projects"} {title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: {title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} {title: "Browser compatibility", href: "/help / browser - compatibility"} {title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} {title: "API and integration support", href: "/help / api - support" }]}, billing: {title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} {title: "Payment methods and security", href: "/help / payment - methods"} {title: "Refund and cancellation policy", href: "/help / refund - policy"} {title: "Tax information and reporting", href: "/help / tax - information"}]}, account: {title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} {title: "Two - factor authentication setup", href: "/help / 2fa - setup"} {title: "Password reset and recovery", href: "/help / password - recovery"} {title: "Privacy settings and data control", href: "/help / privacy - settings"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group&apos;s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https:  ,"",
const [searchQuery, setSearchQuery] = useState(&apos)&apos, const [expandedCategories, setExpandedCategories] = useState([&apos;getting - started&apos])&apos; const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const;const helpCategories = {} { title: &apos,Complete profile setup guide&apos, href: &apos,/help / profile - setup&apos} { title: &apos,Understanding the marketplace&apos, href: &apos,/help / marketplace - guide&apos} { title: &apos,First steps for new users&apos, href: &apos,/help / first - steps&apos}]}, marketplace: { titl,e: &apos,Marketplace&apos, icon: BookOpen, articles: [{ titl,e: &apos,How to list products and services&apos, href: &apos,/help / list - products&apos} { title: &apos,Managing your listings&apos, href: &apos,/help / manage - listings&apos} { title: &apos,Understanding pricing and fees&apos, href: &apos,/help / pricing - fees&apos} { title: &apos,Marketplace policies and guidelines&apos, href: &apos,/help / marketplace - policies&apos}]}, talent: { titl,e: &apos,Talent & Hiring&apos, icon: BookOpen, articles: [{ titl,e: &apos,Creating a talent profile&apos, href: &apos,/help / talent - profile&apos} { title: &apos,Finding and hiring talent&apos, href: &apos,/help / hire - talent&apos} { title: &apos,Managing projects and contracts&apos, href: &apos,/help / manage - projects&apos} { title: &apos,Payment and escrow system&apos, href: &apos,/help / payment - system&apos}]}, technical: { titl,e: &apos,Technical Support&apos, icon: BookOpen, articles: [{ titl,e: &apos,Common technical issues&apos, href: &apos,/help / technical - issues&apos} { title: &apos,Browser compatibility&apos, href: &apos,/help / browser - compatibility&apos} { title: &apos,Mobile app troubleshooting&apos, href: &apos,/help / mobile - troubleshooting&apos} { title: &apos,API and integration support&apos, href: &apos,/help / api - support&apos}]}, billing: { titl,e: &apos,Billing & Payments&apos, icon: BookOpen, articles: [{ titl,e: &apos,Understanding your invoice&apos, href: &apos,/help / invoice - guide&apos} { title: &apos,Payment methods and security&apos, href: &apos,/help / payment - methods&apos} { title: &apos,Refund and cancellation policy&apos, href: &apos,/help / refund - policy&apos} { title: &apos,Tax information and reporting&apos, href: &apos,/help / tax - information&apos}]}, account: { titl,e: &apos,Account & Security&apos, icon: BookOpen, articles: [{ titl,e: &apos,Account security best practices&apos, href: &apos,/help / account - security&apos} { title: &apos,Two - factor authentication setup&apos, href: &apos,/help / 2fa - setup&apos} { title: &apos,Password reset and recovery&apos, href: &apos,/help / password - recovery&apos} { title: &apos,Privacy settings and data control&apos, href: &apos,/help / privacy - settings&apos}]}}&apos; const popularArticles = [] return (&apos;<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="&apos;description&apos;" content="&apos;Get" help and support for Zion Tech Group&apos;s platform.Find answers to common questions, tutorials, and contact information.&apos; / /       />&apos; <meta name="&apos;keywords&apos;" content="&apos;help" center, support, FAQ, tutorials, Zion Tech Group&apos; / /       />&apos; <;<link rel="&apos;canonical&apos;" href="&quot;https:"  ,&quot,""
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group&apos;s platform.Find answers to common questions, tutorials, and contact information." / / /" > <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / / /" > <link rel="canonical" href="https:  ,""
""",
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group&apos;s platform.Find answers to common questions, tutorials, and contact information." / /       /> <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / /       /> <link rel="canonical" href="https:  ,"",
const [searchQuery, setSearchQuery] = useState(") const [expandedCategories, setExpandedCategories] = useState(["getting - started"]) const toggleCategory = category => { setExpandedCategories(prev => prev.includes (category) ? prev.filter(c => c !== category) : [...prev, category]) } const helpCategories = {} { title: "Complete profile setup guide", href: "/help / profile - setup"} { title: "Understanding the marketplace", href: "/help / marketplace - guide"} { title: "First steps for new users", href: "/help / first - steps" }]}, marketplace: { title: "Marketplace", icon: BookOpen, articles: [{ title: "How to list products and services", href: "/help / list - products"} { title: "Managing your listings", href: "/help / manage - listings" } { title: "Understanding pricing and fees", href: "/help / pricing - fees"} { title: "Marketplace policies and guidelines", href: "/help / marketplace - policies"}]}, talent: { title: "Talent & Hiring", icon: BookOpen, articles: [{ title: "Creating a talent profile", href: "/help / talent - profile"} { title: "Finding and hiring talent", href: "/help / hire - talent" } { title: "Managing projects and contracts", href: "/help / manage - projects"} { title: "Payment and escrow system", href: "/help / payment - system"}]}, technical: { title: "Technical Support", icon: BookOpen, articles: [{ title: "Common technical issues", href: "/help / technical - issues"} { title: "Browser compatibility", href: "/help / browser - compatibility"} { title: "Mobile app troubleshooting", href: "/help / mobile - troubleshooting"} { title: "API and integration support", href: "/help / api - support" }]}, billing: { title: "Billing & Payments", icon: BookOpen, articles: [{ title: "Understanding your invoice", href: "/help / invoice - guide"} { title: "Payment methods and security", href: "/help / payment - methods"} { title: "Refund and cancellation policy", href: "/help / refund - policy"} { title: "Tax information and reporting", href: "/help / tax - information"}]}, account: { title: "Account & Security", icon: BookOpen, articles: [{ title: "Account security best practices", href: "/help / account - security"} { title: "Two - factor authentication setup", href: "/help / 2fa - setup"} { title: "Password reset and recovery", href: "/help / password - recovery"} { title: "Privacy settings and data control", href: "/help / privacy - settings"}]}} const popularArticles = [] return (<> <Helmet> <title> Help Center - Zion Tech Group</title> <meta name="description" content="Get help and support for Zion Tech Group&apos;s platform.Find answers to common questions, tutorials, and contact information." / / /" > <meta name="keywords" content="help center, support, FAQ, tutorials, Zion Tech Group" / / /" > <link rel="canonical' href="https:  ,""
""
",
export default Component
>>>>>>> main
>>>>>>> main
