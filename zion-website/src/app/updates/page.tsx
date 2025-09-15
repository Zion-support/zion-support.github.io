import React from 'react'

type UpdateItem = {
  title: string
  date: string
  summary: string
  href?: string
  tag?: 'Announcement' | 'Course' | 'Research' | 'Event'
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: AI Security Fundamentals Course',
    date: '2025-09-10',
    summary:
      'A new hands-on course covering secure AI development, model hardening, and red-teaming best practices.',
    href: '/updates',
    tag: 'Course'
  },
  {
    title: 'Whitepaper: Autonomous IT Operations 2.0',
    date: '2025-09-08',
    summary:
      'We outline a practical roadmap to fully autonomous incident response and cost-aware remediation.',
    href: '/updates',
    tag: 'Research'
  },
  {
    title: 'Event: Web3 Builders Challenge Winners',
    date: '2025-09-05',
    summary:
      'Congratulations to the top three teams who built production-ready DApps in under two weeks.',
    href: '/updates',
    tag: 'Event'
  },
  {
    title: 'Announcement: Advisory Services for AI Governance',
    date: '2025-09-01',
    summary:
      'New advisory offering focused on policy, compliance, and ethical AI adoption for enterprises.',
    href: '/services',
    tag: 'Announcement'
  }
]

export default function UpdatesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Latest <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Updates</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Announcements, courses, research, and events from Zion Tech Group and Zion Academy.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What\'s New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Recent Announcements</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay on top of the newest releases and opportunities.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 text-xs">
                  {item.tag && (
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ${
                      item.tag === 'Course'
                        ? 'bg-green-600/20 text-green-400'
                        : item.tag === 'Research'
                        ? 'bg-purple-600/20 text-purple-400'
                        : item.tag === 'Event'
                        ? 'bg-yellow-600/20 text-yellow-400'
                        : 'bg-blue-600/20 text-blue-400'
                    }`}>
                      {item.tag}
                    </span>
                  )}
                  <span className="text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
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

