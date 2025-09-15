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
  },
]

export default function NewsPage() {
  return (
    <div className="bg-black min-h-screen">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

