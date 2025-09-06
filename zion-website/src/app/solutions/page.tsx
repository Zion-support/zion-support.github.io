import {
  LightBulbIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

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
    name: 'Autonomous Business Operations',
    description: 'End-to-end automation platform that manages complex business processes with minimal human intervention.',
    icon: RocketLaunchIcon,
    features: [
      'Process Automation',
      'Decision Intelligence',
      'Predictive Analytics',
      'Self-Healing Systems'
    ],
    href: '/solutions/autonomous-business-operations'
  },
  {
    name: 'AI Security Suite',
    description: 'Comprehensive security platform powered by AI to protect against advanced cyber threats.',
    icon: ShieldCheckIcon,
    features: [
      'Threat Detection',
      'Behavioral Analysis',
      'Automated Response',
      'Zero-Trust Architecture'
    ],
    href: '/solutions/ai-security-suite'
  }
];

const industrySolutions = [
  {
    name: 'Healthcare AI',
    description: 'Transform patient care with AI-powered diagnostics, treatment optimization, and personalized medicine.',
    icon: UserGroupIcon,
    industries: ['Healthcare', 'Pharmaceuticals', 'Medical Devices']
  },
  {
    name: 'Financial Intelligence',
    description: 'Advanced AI solutions for risk assessment, fraud detection, and algorithmic trading.',
    icon: ChartBarIcon,
    industries: ['Banking', 'Insurance', 'Fintech']
  },
  {
    name: 'Manufacturing 4.0',
    description: 'Smart manufacturing solutions with predictive maintenance and quality optimization.',
    icon: CogIcon,
    industries: ['Automotive', 'Aerospace', 'Electronics']
  },
  {
    name: 'Smart Cities',
    description: 'AI-powered urban solutions for traffic optimization, energy management, and public safety.',
    icon: GlobeAltIcon,
    industries: ['Government', 'Urban Planning', 'Infrastructure']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your specific challenges and identify the most effective AI solutions.',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Our experts design a customized solution that perfectly fits your requirements.',
    icon: CogIcon
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop and rigorously test your solution to ensure optimal performance.',
    icon: RocketLaunchIcon
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment with ongoing support and continuous optimization.',
    icon: ShieldCheckIcon
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our comprehensive suite of AI solutions designed to transform
              your business and accelerate innovation across every industry.
            </p>
          </div>
        </div>
      </div>

      {/* Flagship Solutions */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Flagship Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cutting-Edge AI Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our flagship solutions represent the pinnacle of AI innovation, delivering
            unprecedented capabilities and transformative results.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {flagshipSolutions.map((solution) => (
              <div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={solution.href}
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industry Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tailored for Your Industry
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our industry-specific AI solutions are designed to address the unique
            challenges and opportunities in your sector.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {industrySolutions.map((solution) => (
              <div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((industry) => (
                    <span key={industry} className="inline-flex items-center rounded-md bg-blue-600/20 px-2 py-1 text-xs font-medium text-blue-400">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Deliver Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our proven methodology ensures successful implementation and maximum value
            from your AI investment.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>
                )}
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                    <step.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how our AI solutions can address your specific challenges
            and drive measurable results for your organization.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}