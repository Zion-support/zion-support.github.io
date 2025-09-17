import { getLatestUpdates } from '@/data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">Zion Tech Group</h1>
        <p className="mt-3 text-gray-300">Leading AI and Technology Solutions.</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Latest Updates</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {latest.map((item) => (
            <article key={item.id} className="rounded-xl bg-white/5 p-5">
              <div className="flex items-center gap-2 text-xs text-blue-300">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
                <time dateTime={item.date} className="text-gray-400">{new Date(item.date).toLocaleDateString()}</time>
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                <a href={item.href} className="hover:text-blue-400">
                  {item.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-300">{item.summary}</p>
              <a href={item.href} className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300">Read more →</a>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <a href="/updates" className="text-sm font-semibold text-white hover:text-blue-400">View all updates →</a>
        </div>
      </section>
    </main>
  )
}

