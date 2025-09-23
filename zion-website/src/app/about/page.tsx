import { LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const values = [
  { name: 'Innovation First', description: "We push the boundaries of what's possible in AI and technology.", icon: LightBulbIcon },
  { name: 'Security By Design', description: 'We build with security, privacy, and compliance at the core.', icon: ShieldCheckIcon },
  { name: 'Customer Obsession', description: 'We win when our customers win measurable outcomes.', icon: UserGroupIcon }
]

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Zion Tech Group</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">We help organizations accelerate with AI, automation, and secure infrastructure.</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="rounded-2xl bg-white/5 p-6">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <v.icon className="h-5 w-5 text-blue-400" />
                  {v.name}
                </dt>
                <dd className="mt-3 text-sm text-gray-300">{v.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
