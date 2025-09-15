import Link from 'next/link'

export const metadata = {
  title: 'News & Updates - Zion Tech Group',
  description: 'Latest news, launches, and learning paths from Zion Tech Group and Zion Academy.'
}

const latest = [
  {
    date: 'September 15, 2025',
    category: 'AI',
    title: 'ZionGPT 2.0 launches with adaptive reasoning and on-device inference',
    slug: '/news/ziongpt-2-adaptive-reasoning',
  },
  {
    date: 'September 02, 2025',
    category: 'QUANTUM',
    title: 'Hybrid quantum-classical pipeline boosts optimization accuracy by 38%',
    slug: '/news/hybrid-quantum-classical-pipeline',
  },
  {
    date: 'August 21, 2025',
    category: 'COMPANY',
    title: 'Zion Tech Group acquires VectorEdge to expand edge-AI capabilities',
    slug: '/news/acquisition-vectoredge',
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-lg text-gray-300">Product launches, research highlights, and company announcements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latest.map((item) => (
              <article key={item.slug} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 w-full justify-between">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white/80">{item.category}</span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <Link href={item.slug} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </Link>
                </h3>
                <Link href={item.slug} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

