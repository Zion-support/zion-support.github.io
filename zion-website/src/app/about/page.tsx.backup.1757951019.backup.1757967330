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
          <h2 className="text-base font-semibold leading-7 text-blue-400">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pioneering the Future of AI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're a team of innovators, researchers, and engineers dedicated to advancing 
            artificial intelligence for the betterment of humanity.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <value.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}