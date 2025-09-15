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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Solutions for Every Industry</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Explore our flagship platforms.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-x-3 mb-4">
                  <s.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{s.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{s.description}</p>
                <a href={s.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
