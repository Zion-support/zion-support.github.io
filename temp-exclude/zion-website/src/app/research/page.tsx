import { 
  LightBulbIcon,
  CpuChipIcon, 
  AcademicCapIcon,
  GlobeAltIcon, 
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const researchAreas = [
  {
    name: 'Artificial Intelligence & Machine Learning',
    description: 'Advancing the frontiers of AI through novel algorithms, neural architectures, and learning paradigms.',
    icon: LightBulbIcon,
    topics: [
      'Deep Learning & Neural Networks',
      'Reinforcement Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Generative AI & Large Language Models',
      'AI Ethics & Responsible AI'
    ]
  },
  {
    name: 'Quantum Computing',
    description: 'Developing quantum algorithms and hardware for solving complex optimization and simulation problems.',
    icon: CpuChipIcon,
    topics: [
      'Quantum Algorithms',
      'Quantum Machine Learning',
      'Quantum Cryptography',
      'Quantum Simulation',
      'Quantum Error Correction',
      'Quantum Hardware Development'
    ]
  },
  {
    name: 'Autonomous Systems',
    description: 'Creating intelligent systems that can operate independently and adapt to changing environments.',
    icon: RocketLaunchIcon,
    topics: [
      'Autonomous Vehicles',
      'Robotic Process Automation',
      'Smart Infrastructure',
      'Autonomous Decision Making',
      'Human-AI Collaboration',
      'Edge AI & IoT Integration'
    ]
  },
  {
    name: 'Cybersecurity & Privacy',
    description: 'Protecting digital assets and ensuring privacy in an increasingly connected world.',
    icon: ShieldCheckIcon,
    topics: [
      'AI Bias & Fairness',
      'Privacy-Preserving AI',
      'AI Safety & Alignment',
      'Ethical AI Guidelines',
      'AI Regulation & Policy',
      'Human-AI Collaboration'
    ]
  }
]

export default function ResearchPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Research &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At Zion Tech Group, we are at the forefront of technological innovation, 
              conducting groundbreaking research that shapes the future of AI and computing.
            </p>
          </div>
        </div>
      </div>

      {/* Research areas */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Research Areas
            </h2>
            <div className="mt-16 space-y-16">
              {researchAreas.map((area) => (
                <div key={area.name} className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 flex-shrink-0">
                    <area.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                    <p className="mt-2 text-base text-gray-300">{area.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Research Topics:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.topics.map((topic) => (
                          <li key={topic} className="text-sm text-gray-300">• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}