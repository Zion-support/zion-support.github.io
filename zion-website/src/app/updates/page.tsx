import { updates } from '@/data/updates'

export const metadata = {
  title: 'Updates | Zion Tech Group',
  description: 'Latest news, courses, research highlights, and announcements from Zion.',
}

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Latest Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            New content, announcements, challenges, and research highlights.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.id} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <time dateTime={item.date} className="text-xs text-gray-400">
                  {new Date(item.date).toLocaleDateString()}
                </time>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                  <a href={item.href ?? '#'} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href ?? '#'} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

