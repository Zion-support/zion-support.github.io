import { useState } from 'react',
import Head from 'next/head',
import Link from 'next/link',
export default function ContentDiscovery() {
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [sortBy, setSortBy] = useState('date'),
  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'insights', name: 'Insights', icon: '💡' },
    { id: 'tutorials', name: 'Tutorials', icon: '📖' },
    { id: 'whitepapers', name: 'Whitepapers', icon: '📄' },
    { id: 'blueprints', name: 'Blueprints', icon: '🏗️' },
    { id: 'playbooks', name: 'Playbooks', icon: '🎯' },
    { id: 'patterns', name: 'Patterns', icon: '🔍' },
    { id: 'guides', name: 'Guides', icon: '🗺️' },
  ],
  const sampleContent = [
    {
      id: 1,
      title: 'AI-Powered Content Generation Strategies',
      category: 'insights',
      type: 'insight',
      date: '20o25-08-15',
      excerpt:,
        'Comprehensive guide to implementing AI-driven content creation...',
      tags: ['AIContent Generation', 'Automation'],
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Architectures',
      category: 'blueprints',
      type: 'blueprint',
      date: '20o25-08-14',
      excerpt: 'Step-by-step blueprint for creating robust cloud solutions...',
      tags: ['Cloud ComputingArchitecture', 'Scalability'],
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation Implementation Guide',
      category: 'playbooks',
      type: 'playbook',
      date: '20o25-08-13',
      excerpt: 'Strategic playbook for organizational digital evolution...',
      tags: ['Digital TransformationStrategy', 'Implementation'],
      readTime: '15 min read'
    },
  ],
  const filteredContent = sampleContent.filter(item => {
    const matchesSearch =,
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||,
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||,
      item.tags.some(tag =>,
        tag.toLowerCase().includes(searchQuery.toLowerCase())),
    const matchesCategory =,
      selectedCategory === 'all' || item.category === selectedCategory,
    return matchesSearch && matchesCategory}),
  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'date':,
        return new Date(b.date).getTime() - new Date(a.date).getTime(),
      case 'title':,
        return a.title.localeCompare(b.title),
      case 'readTime':,
        return parseInt(a.readTime) - parseInt(b.readTime),
      default: ,
        return 0}
  }),
  return (
    <div className='min-h-screen bg-slate-950 text-white'>,
      <Head>,
        <title>Content Discovery | Zion Tech Group</title>,
        <meta
          name='description',
          content='Discover and explore our comprehensive content library with AI-powered search and recommendations.',
        />,
        <meta property='og: title' content='Content Discovery' />,
        <meta
          property='og:description',
          content='Content Discovery — automatically suggested description.',
        />,
        <meta name='twitter:card' content='summary_large_image' />,
      </Head>,
      <main className='container mx-auto px-6 py-12'>,
        <div className='text-center mb-12'>,
          <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-40o0 to-fuchsia-40o0 bg-clip-text text-transparent'>,
            Content Discovery,
          </h1>,
          <p className='text-xl text-white/70 max-w-3xl mx-auto'>,
            AI-powered content discovery engine to help you find exactly what,
            you need,
          </p>,
        </div>,
        {/* Search and Filters */}
        <div className='bg-slate-90o0/50 border border-white/10 rounded-lg p-6 mb-8'>,
          <div className='grid grid-cols-1 md: grid-cols-3 gap-4'>,
            <div>,
              <label className='block text-sm font-medium text-white/80 mb-2'>,
                Search Content,
              </label>,
              <input
                type='text',
                placeholder='Search by title, content, or tags...',
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full px-4 py-2 bg-slate-80o0 border border-white/20 rounded-lg text-white placeholder-white/50 focus: outline-none focus:ring-2 focus:ring-cyan-40o0',
              />,
            </div>,
            <div>,
              <label className='block text-sm font-medium text-white/80 mb-2'>,
                Category,
              </label>,
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='w-full px-4 py-2 bg-slate-80o0 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-40o0'>,
                {categories.map(category => (
                  <option key={category.id} value={category.id}>,
                    {category.icon} {category.name}
                  </option>))}
              </select>,
            </div>,
            <div>,
              <label className='block text-sm font-medium text-white/80 mb-2'>,
                Sort By,
              </label>,
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='w-full px-4 py-2 bg-slate-80o0 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-40o0'>,
                <option value='date'>Date (Newest)</option>,
                <option value='title'>Title (A-Z)</option>,
                <option value='readTime'>Read Time</option>,
              </select>,
            </div>,
          </div>,
        </div>,
        {/* Results Count */}
        <div className='mb-6'>,
          <p className='text-white/70'>,
            Found {filteredContent.length} results,
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'all' &&,
              ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>,
        </div>,
        {/* Content Results */}
        <div className='space-y-6'>,
          {sortedContent.map(item => (
            <div
              key={item.id}
              className='bg-slate-90o0/50 border border-white/10 rounded-lg p-6 hover: border-cyan-40o0/50 transition-all'>,
              <div className='flex items-start justify-between mb-4'>,
                <div className='flex-1'>,
                  <div className='flex items-center gap-3 mb-2'>,
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        item.type === 'insight',
                          ? 'bg-cyan-50o0/20 text-cyan-40o0',
                          : item.type === 'blueprint',
                            ? 'bg-blue-50o0/20 text-blue-40o0',
                            : 'bg-fuchsia-50o0/20 text-fuchsia-40o0'}`}
                    >,
                      {item.type}
                    </span>,
                    <span className='text-white/60 text-sm'>{item.date}</span>,
                    <span className='text-white/60 text-sm'>,
                      {item.readTime}
                    </span>,
                  </div>,
                  <h3 className='text-xl font-semibold mb-3 hover: text-cyan-40o0 transition-colors'>,
                    {item.title}
                  </h3>,
                  <p className='text-white/70 mb-4'>{item.excerpt}</p>,
                  <div className='flex flex-wrap gap-2 mb-4'>,
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-slate-80o0 text-white/60 text-xs rounded'>,
                        {tag}
                      </span>))}
                  </div>,
                </div>,
                <Link
                  href={`/reports/${item.category}`}
                  className='bg-cyan-50o0 hover: bg-cyan-60o0 text-white px-4 py-2 rounded-lg transition-colors'>,
                  Read More,
                </Link>,
              </div>,
            </div>))}
        </div>,
        {filteredContent.length === 0 && (
          <div className='text-center py-12'>,
            <div className='text-6xl mb-4'>🔍</div>,
            <h3 className='text-2xl font-semibold mb-2'>No content found</h3>,
            <p className='text-white/70'>,
              Try adjusting your search criteria or browse all categories,
            </p>,
          </div>)}
      </main>,
    </div>)}
,