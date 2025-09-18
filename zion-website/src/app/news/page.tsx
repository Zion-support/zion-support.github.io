import Link from 'next/link'

export const metadata = {
  title: 'News & Updates - Zion Tech Group',
  description: 'Latest announcements, research highlights, and product updates from Zion Tech Group.'
}

const newsItems = [
  {
    id: 'ai-governance-blueprint-2025',
    title: 'AI Governance Blueprint 2025',
    summary: 'Comprehensive framework for implementing AI governance in enterprise environments.',
    date: '2025-09-15',
    href: '/news/ai-governance-blueprint-2025'
  },
  {
    id: 'ai-platform-2-0',
    title: 'AI Platform 2.0 Launch',
    summary: 'Next-generation AI platform with enhanced capabilities and improved performance.',
    date: '2025-09-10',
    href: '/news/ai-platform-2-0'
  },
  {
    id: 'customer-win-finance',
    title: 'Customer Success: Finance Sector',
    summary: 'How we helped a major financial institution reduce costs by 40% with AI automation.',
    date: '2025-09-05',
    href: '/news/customer-win-finance'
  },
  {
    id: 'research-breakthrough',
    title: 'Research Breakthrough: Quantum AI',
    summary: 'Our research team achieves breakthrough in quantum-enhanced machine learning.',
    date: '2025-09-01',
    href: '/news/research-breakthrough'
  }
]

export default function NewsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">News & Updates</h1>
          <p className="mt-4 text-lg text-gray-300">
            Stay informed with the latest announcements, research highlights, and product updates from Zion Tech Group.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {newsItems.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="text-xs text-blue-300">{post.date}</div>
                  <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-3">{post.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-blue-400 group-hover:text-blue-300">Read more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}