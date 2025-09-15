import { LightBulbIcon, CpuChipIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const solutions = [
  { name: 'AI Research Assistant', description: 'Autonomous research platform that accelerates scientific discovery.', icon: LightBulbIcon, href: '/solutions/ai-autonomous-research' },
  { name: 'Quantum Neural Networks', description: 'Breakthrough quantum computing for next-generation AI.', icon: CpuChipIcon, href: '/solutions/quantum-neural-networks' },
  { name: 'Autonomous Business Operations', description: 'Self-optimizing processes with predictive intelligence.', icon: RocketLaunchIcon, href: '/solutions/autonomous-business' },
  { name: 'IT Asset Management', description: 'Intelligent asset tracking and optimization.', icon: ShieldCheckIcon, href: '/solutions/it-asset-management' }
]

export default function SolutionsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Solutions</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">Cutting-edge AI solutions for enterprise challenges.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <div key={solution.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <solution.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {solution.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{solution.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}