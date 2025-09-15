export default function NewsPage() {
  const articles = [
    {
      title: 'Zion Tech Group launches Autonomous Research Assistant 2.0',
      date: '2025-09-10',
      excerpt: 'A major upgrade delivering faster insights, improved reasoning, and seamless collaboration.',
      href: '#',
      tag: 'Product',
    },
    {
      title: 'Partnership with MIT on Quantum-AI acceleration',
      date: '2025-08-22',
      excerpt: 'New collaboration to advance hybrid quantum-classical models for real-world AI workloads.',
      href: '#',
      tag: 'Research',
    },
    {
      title: 'Zion OS 1.4 brings enterprise-grade observability',
      date: '2025-08-01',
      excerpt: 'Unified logs, traces, and metrics to keep AI systems reliable at scale.',
      href: '#',
      tag: 'Release',
    },
  ]

  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Company{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Newsroom
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Updates, announcements, and research highlights from Zion Tech Group.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Latest</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent articles
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore what we have been building and learning lately.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="flex flex-col bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-400">
                    {new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300">
                    {article.tag}
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
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-all duration-200 hover:scale-105">
            Contact PR Team <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}