import { LightBulbIcon, CogIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const services = [
  { name: 'AI Consulting', description: 'Strategy, readiness, and roadmap for AI adoption.', icon: LightBulbIcon },
  { name: 'Managed AI Operations', description: 'Operate and optimize AI systems with SLAs.', icon: CogIcon },
  { name: 'Enterprise Enablement', description: 'Training, governance, and change management.', icon: UserGroupIcon }
]

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Services</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">Comprehensive AI solutions for enterprise transformation.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <service.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}