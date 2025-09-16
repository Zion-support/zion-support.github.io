import Link from 'next/link'

export const metadata = {
  title: 'News & Updates - Zion Tech Group',
  description: 'Latest announcements, research highlights, and product updates from Zion Tech Group.'
}

const newsItems = [
  {
    id: 'ai-governance-blueprint-2025',
    title: 'AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy',
    summary: 'A pragmatic framework combining machine-enforceable policy with human oversight to safely scale autonomous systems.',
    date: '2025-09-15',
    category: 'AI Governance'
  }
]

export default function NewsIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">News & Updates</h1>
          <p className="mt-4 text-lg text-gray-300">Announcements, research highlights, and product updates.</p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 gap-6 sm:gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="px-2 py-1 rounded-lg bg-white/10 text-blue-300">{item.category}</span>
                <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                <Link href={`/news/${item.id}`} className="hover:text-blue-400">{item.title}</Link>
              </h2>
              <p className="mt-2 text-gray-300">{item.summary}</p>
              <div className="mt-4">
                <Link href={`/news/${item.id}`} className="text-blue-400 hover:text-blue-300 font-medium">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

