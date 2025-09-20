import { siteUpdates } from '@/data/updates'

export default function UpdatesIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Updates</h1>
          <p className="mt-4 text-lg text-gray-300">Announcements, research highlights, and product updates.</p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteUpdates.map((item) => (
            <a key={item.href} href={item.href} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-xs text-blue-300">{item.tag} • <time dateTime={item.date}>{item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</time></div>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-300">{item.summary}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
