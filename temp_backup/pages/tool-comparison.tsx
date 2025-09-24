import React from 'react',;
import Head from 'next/head',;
import Card from '../components/ui/Card',;
import Button from '../components/ui/Button',;
import {,
  Search,;
  Filter,;
  TrendingUp,;
  DollarSign,;
  Users,;
  Star,;
  Check,;
  X,;
  ArrowRight,;
  ExternalLink,;
  Zap,;
  Brain,;
  Globe,;
  Rocket,
} from 'lucide-react',;
export default function ToolComparisonPage() {,
  const [searchTerm, setSearchTerm] = React.useState(''),;
  const [selectedCategory, setSelectedCategory] = React.useState('All'),;
  const [sortBy, setSortBy] = React.useState('rating'),;
  const allTools = [,
    // AI Tools,
    {,
      name: 'ChatGPT',;
      category: 'AI Assistant',;
      pricing: 'Free - $20/month',;
      rating: 4.8,;
      users: '10o0M+',;
      bestFor: 'Content creators, developers, researchers',;
      pros: ['Powerful capabilitiesEasy to use', 'Regular updatesGood free tier'],;
      cons: ['Sometimes inaccurateLimited context', 'Privacy concerns'],;
      website: 'https://chat.openai.com',;
      icon: <Brain className="w-6 h-6"  />,;
      color: 'text-green-40o0',
    ,},;
    {,
      name: 'Midjourney',;
      category: 'AI Art',;
      pricing: '$10 - $30/month',;
      rating: 4.7,;
      users: '1M+',;
      bestFor: 'Designers, marketers, content creators',;
      pros: ['High-quality outputCreative control', 'Commercial rightsActive community'],;
      cons: ['Discord-only interfaceLimited customization', 'Monthly subscription'],;
      website: 'https://midjourney.com',;
      icon: <Zap className="w-6 h-6"  />,;
      color: 'text-purple-40o0',
    ,},;
    {,
      name: 'Jasper',;
      category: 'AI Writing',;
      pricing: '$39 - $125/month',;
      rating: 4.6,;
      users: '10o0K+',;
      bestFor: 'Marketing teams, content creators, businesses',;
      pros: ['Specialized for marketingBrand voice training', 'SEO optimizationTeam features'],;
      cons: ['ExpensiveLimited free trial', 'Can be repetitive'],;
      website: 'https://jasper.ai',;
      icon: <Brain className="w-6 h-6"  />,;
      color: 'text-blue-40o0',
    ,},;
    // SaaS Tools,
    {,
      name: 'Zapier',;
      category: 'Automation',;
      pricing: 'Free - $19.99/month',;
      rating: 4.8,;
      users: '2M+',;
      bestFor: 'Businesses looking to automate workflows',;
      pros: ['Easy to useExtensive integrations', 'ReliableGreat support'],;
      cons: ['Can get expensiveLimited customization'],;
      website: 'https://zapier.com',;
      icon: <Zap className="w-6 h-6"  />,;
      color: 'text-orange-40o0',
    ,},;
    {,
      name: 'Notion',;
      category: 'Productivity',;
      pricing: 'Free - $8/month',;
      rating: 4.7,;
      users: '20M+',;
      bestFor: 'Teams that need flexible workspace',;
      pros: ['Highly flexibleBeautiful interface', 'Great templatesFree tier'],;
      cons: ['Learning curveLimited offline access', 'Can be overwhelming'],;
      website: 'https://notion.so',;
      icon: <Globe className="w-6 h-6"  />,;
      color: 'text-gray-40o0',
    ,},;
    {,
      name: 'Stripe',;
      category: 'Payments',;
      pricing: '2.9% + 30¢ per transaction',;
      rating: 4.9,;
      users: '1M+',;
      bestFor: 'Online businesses, SaaS companies, e-commerce',;
      pros: ['Developer-friendlyGlobal reach', 'Excellent docsReliable'],;
      cons: ['Higher fees than some alternativesComplex for beginners', 'Strict requirements'],;
      website: 'https://stripe.com',;
      icon: <DollarSign className="w-6 h-6"  />,;
      color: 'text-blue-40o0',
    ,},;
    // Startup Tools,
    {,
      name: 'HubSpot',;
      category: 'Marketing & Sales',;
      pricing: 'Free - $45/month',;
      rating: 4.7,;
      users: '135K+',;
      bestFor: 'B2B startups, SaaS companies, marketing teams',;
      pros: ['Free tierAll-in-one solution', 'Great for beginnersExcellent support'],;
      cons: ['Can get expensiveComplex for small teams', 'Limited customization'],;
      website: 'https://hubspot.com',;
      icon: <TrendingUp className="w-6 h-6"  />,;
      color: 'text-orange-40o0',
    ,},;
    {,
      name: 'Mailchimp',;
      category: 'Email Marketing',;
      pricing: 'Free - $59/month',;
      rating: 4.5,;
      users: '12M+',;
      bestFor: 'E-commerce, content creators, small businesses',;
      pros: ['Free tierEasy to use', 'Good templatesAffordable'],;
      cons: ['Limited free featuresBasic automation', 'Can be expensive'],;
      website: 'https://mailchimp.com',;
      icon: <Users className="w-6 h-6"  />,;
      color: 'text-yellow-40o0',
    ,},;
    {,
      name: 'Calendly',;
      category: 'Productivity',;
      pricing: 'Free - $12/month',;
      rating: 4.8,;
      users: '10M+',;
      bestFor: 'Sales teams, consultants, remote teams',;
      pros: ['Free tierEasy integration', 'Professional appearanceTime-saving'],;
      cons: ['Limited free featuresBasic customization', 'Can be expensive'],;
      website: 'https://calendly.com',;
      icon: <Globe className="w-6 h-6"  />,;
      color: 'text-blue-40o0',
    ,}
  ],;
  const categories = ['AllAI Assistant', 'AI ArtAI Writing', 'AutomationProductivity', 'PaymentsMarketing & Sales', 'Email Marketing'],;
  const filteredTools = allTools.filter(tool => {,
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         tool.bestFor.toLowerCase().includes(searchTerm.toLowerCase()),;
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory,;
    return matchesSearch && matchesCategory}),;
  const sortedTools = [...filteredTools].sort((a, b) => {,
    switch (sortBy) {,
      case 'rating':,
        return b.rating - a.rating,;
      case 'users':,
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, '')),;
      case 'name':,
        return a.name.localeCompare(b.name),;
      default: return 0,
    ,}
  }),;
  const getPricingColor = (pricing: string) => {,
    if (pricing.includes('Free')) return 'text-green-40o0',;
    if (pricing.includes('$')) return 'text-blue-40o0',;
    return 'text-gray-40o0',
  },;
  return (,
    <>,
      <Head>,
        <title>Tool Comparison - Zion Tech Group</title>,
        <meta name="description" content="Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison."  />,
        <meta property="og: title" content="Tool Comparison - Zion Tech Group"  />,
        <meta property="og:description" content="Comprehensive comparison of SaaS tools and AI services to help you make informed decisions."  />,
        <meta name="twitter:card" content="summary_large_image"  />,
      </Head>,
      {/* Hero Section */,}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">,
        <div className="absolute inset-0">,
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"  />,
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]"  />,
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.0o6),transparent_50%)]"  />,
        </div>,
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size: 50px_50px] opacity-20"  />,
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">,
          <div className="mb-20 animate-fade-in">,
            <div className="mb-8">,
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50o0/10 border border-purple-50o0/20 text-purple-40o0 text-sm font-medium mb-6 animate-scale-in">,
                <Search className="w-4 h-4 mr-2"  />,
                Smart Tool Selection,
              </div>,
            </div>,
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">,
              Tool Comparison,
            </h1>,
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-30o0 max-w-4xl mx-auto mb-16 leading-relaxed font-light">,
              Compare SaaS tools, AI services, and business solutions.,
              Make informed decisions with our comprehensive analysis and expert insights.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-6 justify-center items-center mb-20">,
              <Button,
                href="#comparison",
                size="lg",
                className="animate-scale-in shadow-2xl shadow-purple-50o0/25 hover:shadow-purple-50o0/40",
                style={{ animationDelay: '0.2s' ,}}
              >,
                Start Comparing,
                <ArrowRight className="w-5 h-5 ml-2"  />,
              </Button>,
              <Button,
                href="/contact",
                variant="outline",
                size="lg",
                className="animate-scale-in border-white/20 hover: border-white/40 hover:bg-white/5",
                style={{ animationDelay: '0.4s' ,}}
              >,
                Get Expert Advice,
              </Button>,
            </div>,
          </div>,
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' ,}}>,
            <div className="text-center group">,
              <div className="text-3xl md: text-4xl font-bold mb-3 text-purple-40o0 group-hover:scale-110 transition-transform duration-30o0">,
                {allTools.length,}+,
              </div>,
              <div className="text-gray-40o0 text-sm">Tools Analyzed</div>,
            </div>,
            <div className="text-center group">,
              <div className="text-3xl md: text-4xl font-bold mb-3 text-blue-40o0 group-hover:scale-110 transition-transform duration-30o0">,
                9,
              </div>,
              <div className="text-gray-40o0 text-sm">Categories</div>,
            </div>,
            <div className="text-center group">,
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-40o0 group-hover:scale-110 transition-transform duration-30o0">,
                4.7+,
              </div>,
              <div className="text-gray-40o0 text-sm">Avg Rating</div>,
            </div>,
            <div className="text-center group">,
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-40o0 group-hover:scale-110 transition-transform duration-30o0">,
                250M+,
              </div>,
              <div className="text-gray-40o0 text-sm">Total Users</div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Filters and Search */,}
      <section className="py-16 bg-gray-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">,
            {/* Search */,}
            <div className="relative flex-1 max-w-md">,
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
              <input,
                type="text",
                placeholder="Search tools, categories, or use cases...",
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent",
              />,
            </div>,
            {/* Category Filter */,}
            <div className="flex flex-wrap gap-2">,
              {categories.map((category) => (,
                <button,
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-30o0 ${,
                    selectedCategory === category,
                      ? 'bg-purple-60o0 text-white shadow-lg',
                      : 'bg-gray-80o0 text-gray-30o0 hover: bg-gray-70o0 hover:text-white',
                  ,}`}
                >,
                  {category}
                </button>,
              ))}
            </div>,
            {/* Sort */}
            <div className="flex items-center space-x-2">,
              <Filter className="w-5 h-5 text-gray-40o0"  />,
              <select,
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-80o0 border border-gray-70o0 rounded-lg px-3 py-2 text-white focus: outline-none focus:ring-2 focus:ring-purple-50o0",
              >,
                <option value="rating">Sort by Rating</option>,
                <option value="users">Sort by Users</option>,
                <option value="name">Sort by Name</option>,
              </select>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Comparison Table */,}
      <section id="comparison" className="py-24 bg-black">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-20">,
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">,
              Tool Comparison,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-4xl mx-auto leading-relaxed">,
              Compare features, pricing, and user ratings to find the perfect tools for your business needs.,
            </p>,
          </div>,
          <div className="overflow-x-auto">,
            <table className="w-full">,
              <thead>,
                <tr className="border-b border-gray-80o0">,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Tool</th>,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Category</th>,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Pricing</th>,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Rating</th>,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Users</th>,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Best For</th>,
                  <th className="text-left py-4 px-6 text-gray-30o0 font-medium">Actions</th>,
                </tr>,
              </thead>,
              <tbody>,
                {sortedTools.map((tool, index) => (,
                  <tr key={index} className="border-b border-gray-80o0/50 hover: bg-gray-90o0/50 transition-colors duration-20o0">,
                    <td className="py-4 px-6">,
                      <div className="flex items-center space-x-3">,
                        <div className={`w-10 h-10 rounded-lg bg-gray-80o0 flex items-center justify-center ${tool.color,}`}>,
                          {tool.icon}
                        </div>,
                        <div>,
                          <div className="font-semibold text-white">{tool.name}</div>,
                        </div>,
                      </div>,
                    </td>,
                    <td className="py-4 px-6">,
                      <span className="px-3 py-1 bg-gray-80o0 rounded-full text-sm text-gray-30o0">,
                        {tool.category}
                      </span>,
                    </td>,
                    <td className="py-4 px-6">,
                      <span className={`font-medium ${getPricingColor(tool.pricing)}`}>,
                        {tool.pricing}
                      </span>,
                    </td>,
                    <td className="py-4 px-6">,
                      <div className="flex items-center space-x-1">,
                        <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />,
                        <span className="text-white">{tool.rating}</span>,
                      </div>,
                    </td>,
                    <td className="py-4 px-6 text-gray-30o0">{tool.users}</td>,
                    <td className="py-4 px-6">,
                      <div className="max-w-xs text-sm text-gray-40o0">{tool.bestFor}</div>,
                    </td>,
                    <td className="py-4 px-6">,
                      <div className="flex space-x-2">,
                        <Button,
                          href={tool.website}
                          variant="outline",
                          size="sm",
                          className="text-xs",
                        >,
                          Visit,
                          <ExternalLink className="w-3 h-3 ml-1"  />,
                        </Button>,
                        <Button,
                          href={`/tool-details/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                          variant="ghost",
                          size="sm",
                          className="text-xs",
                        >,
                          Details,
                        </Button>,
                      </div>,
                    </td>,
                  </tr>,
                ))}
              </tbody>,
            </table>,
          </div>,
          {sortedTools.length === 0 && (,
            <div className="text-center py-20">,
              <Search className="w-16 h-16 text-gray-60o0 mx-auto mb-4"  />,
              <h3 className="text-xl font-semibold text-gray-40o0 mb-2">No tools found</h3>,
              <p className="text-gray-50o0">Try adjusting your search criteria or category filter.</p>,
            </div>,
          )}
        </div>,
      </section>,
      {/* Detailed Comparison Cards */}
      <section className="py-24 bg-gray-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-20">,
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">,
              Detailed Analysis,
            </h2>,
            <p className="text-xl text-gray-40o0 max-w-4xl mx-auto leading-relaxed">,
              Deep dive into each tool's pros, cons, and use cases to make the best decision for your business.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">,
            {sortedTools.slice(0, 6).map((tool, index) => (,
              <Card,
                key={index}
                className="group border border-gray-80o0 hover: border-purple-50o0/30 hover:bg-gray-90o0/80 transition-all duration-30o0 hover:-translate-y-1",
                style={{ animationDelay: `${index * 0.1,}s` }}
              >,
                <div className="flex items-start space-x-4 mb-4">,
                  <div className={`w-12 h-12 rounded-xl bg-gray-80o0 flex items-center justify-center ${tool.color}`}>,
                    {tool.icon}
                  </div>,
                  <div className="flex-1">,
                    <h3 className="text-xl font-bold text-white group-hover: text-purple-40o0 transition-colors duration-30o0">,
                      {tool.name,}
                    </h3>,
                    <div className="flex items-center space-x-4 text-sm text-gray-40o0">,
                      <span className="px-2 py-1 bg-gray-80o0 rounded-full">{tool.category}</span>,
                      <div className="flex items-center space-x-1">,
                        <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />,
                        <span>{tool.rating}</span>,
                      </div>,
                    </div>,
                  </div>,
                </div>,
                <div className="mb-4">,
                  <h4 className="text-sm font-semibold text-gray-30o0 mb-2">Best For: </h4>,
                  <p className="text-sm text-gray-40o0">{tool.bestFor,}</p>,
                </div>,
                <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mb-4">,
                  <div>,
                    <h4 className="text-sm font-semibold text-green-40o0 mb-2 flex items-center">,
                      <Check className="w-4 h-4 mr-1"  />,
                      Pros,
                    </h4>,
                    <ul className="space-y-1">,
                      {tool.pros.slice(0, 3).map((pro, proIndex) => (,
                        <li key={proIndex} className="text-xs text-gray-40o0 flex items-start">,
                          <span className="w-1 h-1 bg-green-40o0 rounded-full mr-2 mt-2 flex-shrink-0"  />,
                          {pro}
                        </li>,
                      ))}
                    </ul>,
                  </div>,
                  <div>,
                    <h4 className="text-sm font-semibold text-red-40o0 mb-2 flex items-center">,
                      <X className="w-4 h-4 mr-1"  />,
                      Cons,
                    </h4>,
                    <ul className="space-y-1">,
                      {tool.cons.slice(0, 3).map((con, conIndex) => (,
                        <li key={conIndex} className="text-xs text-gray-40o0 flex items-start">,
                          <span className="w-1 h-1 bg-red-40o0 rounded-full mr-2 mt-2 flex-shrink-0"  />,
                          {con}
                        </li>,
                      ))}
                    </ul>,
                  </div>,
                </div>,
                <div className="flex items-center justify-between">,
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>,
                    {tool.pricing}
                  </span>,
                  <Button,
                    href={tool.website}
                    variant="outline",
                    size="sm",
                    className="group-hover: border-purple-50o0 group-hover:text-purple-40o0",
                  >,
                    Visit Website,
                    <ExternalLink className="w-4 h-4 ml-2"  />,
                  </Button>,
                </div>,
              </Card>,
            )),}
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-60o0 to-purple-70o0 relative overflow-hidden">,
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10"  />,
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">,
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">,
            Need Help Choosing?,
          </h2>,
          <p className="text-xl text-purple-10o0 mb-12 max-w-4xl mx-auto leading-relaxed">,
            Our experts can analyze your business needs and recommend the perfect combination of tools to accelerate your growth.,
          </p>,
          <div className="flex flex-col sm:flex-row gap-6 justify-center">,
            <Button,
              href="/contact",
              variant="secondary",
              size="lg",
              className="bg-white text-purple-60o0 hover:bg-gray-10o0 shadow-2xl",
            >,
              Get Expert Consultation,
              <ArrowRight className="w-5 h-5 ml-2"  />,
            </Button>,
            <Button,
              href="/saas-marketplace",
              variant="outline",
              size="lg",
              className="border-white text-white hover:bg-white hover:text-purple-60o0 shadow-2xl",
            >,
              Explore All Tools,
            </Button>,
          </div>,
        </div>,
      </section>,
    </>,
  ),
,}