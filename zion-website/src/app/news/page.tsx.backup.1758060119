<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'

const posts = [
  {
    slug: 'ai-platform-2-0',
    title: 'Announcing Zion AI Platform 2.0',
    date: '2025-09-15',
    summary: 'Major upgrades to inference performance, observability, and enterprise security.',
  },
  {
    slug: 'customer-win-retail',
    title: 'Global retail autonomous fulfillment rollout',
    date: '2025-09-15',
    summary: 'Autonomous agents improved OTIF by 11% across 14 DCs with dynamic routing.',
  },
  {
    slug: 'customer-win-finance',
    title: 'Fortune 100 finance deployment',
    date: '2025-09-10',
    summary: 'Rolled out autonomous operations across 12 business units in 8 weeks.',
  },
  {
    slug: 'research-breakthrough',
    title: 'New research on quantum neural search',
    date: '2025-09-02',
    summary: 'Peer-reviewed paper on hybrid classical-quantum retrieval achieves SOTA.',
=======
import React from 'react'

type Article = {
  title: string
  excerpt: string
  date: string
  href: string
}

const articles: Article[] = [
  {
    title: 'Zion launches Autonomous Research Assistant 2.0',
    excerpt: 'A major upgrade delivering 3x faster insights with explainable AI and secure enterprise connectors.',
    date: '2025-09-15',
    href: '/news/ara-2-0',
  },
  {
    title: 'Partnership with QuantumCore to scale QNN workloads',
    excerpt: 'We joined forces to accelerate quantum neural network training for complex optimization problems.',
    date: '2025-09-01',
    href: '/news/quantumcore-partnership',
  },
  {
    title: 'New Autonomous IT Operations suite unveiled',
    excerpt: 'Self-healing infrastructure automation reduces MTTR by up to 65% across hybrid clouds.',
    date: '2025-08-20',
    href: '/news/autonomous-it-suite',
>>>>>>> origin/feat/news-and-fixes
  },
]

export default function NewsPage() {
  return (
    <div className="bg-black min-h-screen">
<<<<<<< HEAD
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">News & Updates</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">Latest announcements, customer wins, and research highlights.</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <a key={post.slug} href={`/news/${post.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <p className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                <h3 className="mt-1 text-white font-semibold group-hover:text-blue-400">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">{post.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-blue-400 group-hover:text-blue-300">Read more →</span>
              </a>
=======
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-400">News</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest announcements</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Product updates, partnerships, and platform milestones from Zion.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.href} className="flex flex-col items-start bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-400">
                    {new Date(article.date).toLocaleDateString()}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">
                    Announcement
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={article.href}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{article.excerpt}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={article.href} className="hover:text-blue-400 transition-colors duration-200">
                        <span className="absolute inset-0" />
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </article>
>>>>>>> origin/feat/news-and-fixes
            ))}
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/feature/add-news-and-promo
=======
>>>>>>> origin/feat/news-and-fixes
=======
>>>>>>> cursor/create-and-deploy-new-content-b9ff
>>>>>>> cursor/create-and-deploy-new-content-d9c7
    </div>
  )
}

