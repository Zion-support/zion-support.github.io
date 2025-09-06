import { 
  LightBulbIcon,
  CpuChipIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const flagshipSolutions = [
  {
    name: 'AI Research Assistant',
    description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.',
    icon: LightBulbIcon,
    features: [
      'Natural Language Processing',
      'Multi-modal Learning',
      'Real-time Collaboration',
      'Advanced Analytics'
    ],
    href: '/solutions/ai-autonomous-research'
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Breakthrough quantum computing technology for next-generation AI applications.',
    icon: CpuChipIcon,
    features: [
      'Quantum Supremacy',
      'Neural Architecture Search',
      'Hybrid Classical-Quantum',
      'Scalable Architecture'
    ],
    href: '/solutions/quantum-neural-networks'
  },
  {
    name: 'Autonomous Business Manager',
    description: 'AI-powered business automation that manages operations, decisions, and growth autonomously.',
    icon: RocketLaunchIcon,
    features: [
      'Process Automation',
      'Decision Intelligence',
      'Performance Optimization',
      'Strategic Planning'
    ],
    href: '/solutions/autonomous-business-manager'
  },
  {
    name: 'Enterprise Security Suite',
    description: 'Comprehensive cybersecurity solution with AI-powered threat detection and response.',
    icon: ShieldCheckIcon,
    features: [
      'Threat Intelligence',
      'Automated Response',
      'Compliance Management',
      'Risk Assessment'
    ],
    href: '/solutions/enterprise-security'
  },
  {
    name: 'Data Analytics Platform',
    description: 'Advanced analytics and business intelligence powered by machine learning and AI.',
    icon: ChartBarIcon,
    features: [
      'Predictive Analytics',
      'Real-time Insights',
      'Data Visualization',
      'Custom Dashboards'
    ],
    href: '/solutions/data-analytics'
  },
  {
    name: 'Global AI Infrastructure',
    description: 'Scalable cloud infrastructure designed for AI workloads and global deployment.',
    icon: GlobeAltIcon,
    features: [
      'Edge Computing',
      'Global Distribution',
      'Auto-scaling',
      'High Availability'
    ],
    href: '/solutions/global-ai-infrastructure'
  }
]

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cutting-edge AI and technology solutions that transform businesses 
              and drive innovation across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Flagship Solutions
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {flagshipSolutions.map((solution) => (
                <div key={solution.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{solution.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{solution.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {solution.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={solution.href} className="mt-4 text-sm text-blue-400 hover:text-blue-300">
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