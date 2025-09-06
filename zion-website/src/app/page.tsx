import Link from 'next/link'
import { 
  LightBulbIcon,
  CpuChipIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon},
  {name: 'Quantum Computing', description: 'Revolutionary quantum algorithms that solve complex problems exponentially faster than classical computers.', icon: CpuChipIcon},
  {name: 'Global Impact', description: 'Our solutions reach across borders, transforming industries and improving lives worldwide.', icon: GlobeAltIcon},
  {name: 'Enterprise Security', description: 'Military-grade security protocols ensuring your data and systems remain protected at all times.', icon: ShieldCheckIcon},
  {name: 'Data Analytics', description: 'Advanced analytics and insights that drive informed decision-making and business growth.', icon: ChartBarIcon},
  {name: 'Expert Team', description: 'World-class researchers and engineers dedicated to pushing the boundaries of what\'s possible.', icon: UserGroupIcon}
]

const solutions = [
  {name: 'Autonomous Business Operations', description: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business'},
  {name: 'IT Asset Management', description: 'Intelligent management of digital infrastructure.', href: '/solutions/it-asset-management'}
]

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Zion Tech Group is pioneering the next generation of AI, quantum computing, and autonomous systems 
              that will transform industries and advance human potential.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Core Capabilities
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Solutions
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {solutions.map((solution) => (
                <div key={solution.name} className="flex flex-col">
                  <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{solution.description}</p>
                  <a href={solution.href} className="mt-4 text-base text-blue-400 hover:text-blue-300">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}