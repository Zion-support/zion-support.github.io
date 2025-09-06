import { 
  LightBulbIcon, 
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const professionalServices = [
  {
    name: 'AI Strategy & Consulting',
    description: 'Comprehensive assessment and strategic planning for AI transformation initiatives.',
    icon: LightBulbIcon,
    features: [
      'Technology Assessment',
      'ROI Analysis',
      'Implementation Roadmap',
      'Change Management Planning'
    ],
    duration: '4-8 weeks'
  },
  {
    name: 'Custom AI Development',
    description: 'Tailored AI solutions built specifically for your business needs and objectives.',
    icon: CogIcon,
    features: [
      'Custom Algorithm Development',
      'Integration Services',
      'Testing & Validation',
      'Documentation & Training'
    ],
    duration: '8-16 weeks'
  },
  {
    name: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security solutions and compliance management for AI systems.',
    icon: ShieldCheckIcon,
    features: [
      'Security Architecture Design',
      'Compliance Assessment',
      'Ethical AI Review',
      'Security Audits',
      'Risk Mitigation'
    ],
    duration: '2-6 weeks'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comprehensive AI and technology solutions designed to transform your business 
              and accelerate innovation across all industries.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Services
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {professionalServices.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{service.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-sm text-blue-400">
                    Duration: {service.duration}
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