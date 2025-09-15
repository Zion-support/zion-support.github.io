import { getLatestUpdates } from '../data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
    <div className="bg-black min-h-screen">
<<<<<<< HEAD
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Leading the Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI & Technology
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions.
            Join the revolution that's reshaping industries worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Learn More <span aria-hidden="true">→</span>
            </a>
=======
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New: Real-Time AI Analytics Dashboard v3.0 —
              <a href="/updates/real-time-ai-analytics-dashboard-v3-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">analytics dashboard</a>
              <span className="mx-2 text-blue-300/60">|</span>
              AI Agent Orchestration Platform v2.0 —
              <a href="/updates/ai-agent-orchestration-platform-2-0" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">orchestration platform</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">see all updates</a>
            </p>
>>>>>>> 5221e64b58f51e3cf4362a5292b9f5f53a656d76
          </div>
        </div>
        
        {/* Latest Updates Section */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h2>
            <p className="mt-4 text-lg text-gray-300">Stay informed with our latest content and announcements</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {latest.map((item) => (
              <div key={item.title} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    {item.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-300 mb-4">{item.summary}</p>
                <a href={item.href} className="text-sm font-semibold text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
<<<<<<< HEAD
=======
          </dl>
        </div>
      </div>

      {/* What's New section */}
      <div id="whats-new" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What’s New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fresh releases and product updates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore our latest capabilities rolling out across the platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {whatsNew.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-3 text-xs">
                  <span className="rounded-full bg-blue-600/20 text-blue-300 px-2 py-1.5 font-medium">{item.tag}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={item.href}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{item.desc}</p>
                </div>
                <div className="mt-6">
                  <a href={item.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Our track record speaks for itself
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Solutions showcase */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flagship AI and Technology Platforms
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how our innovative solutions are transforming industries and driving unprecedented growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.name}
                className="flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-400">
                    2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                    AI Platform
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={solution.href}>
                      <span className="absolute inset-0" />
                      {solution.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{solution.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={solution.href} className="hover:text-blue-400 transition-colors duration-200">
                        <span className="absolute inset-0" />
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Zion Tech Group</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">AI, automation, and secure infrastructure.</p>
          <div className="mt-8">
            <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">See all updates →</a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {latest.map((item) => (
              <article key={item.href} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-white font-semibold"><a href={item.href}>{item.title}</a></h3>
                <p className="mt-2 text-sm text-gray-300">{item.summary}</p>
              </article>
            ))}
>>>>>>> 5221e64b58f51e3cf4362a5292b9f5f53a656d76
          </div>
        </div>
      </div>
    </div>
  )
}