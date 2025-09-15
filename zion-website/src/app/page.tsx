import { getLatestUpdates } from '../data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
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
          </div>
        </div>
      </div>
    </div>
  )
}

