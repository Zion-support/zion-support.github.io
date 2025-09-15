import React from 'react'
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'AI Research Assistant',
    description: 'Autonomous research platform that accelerates scientific discovery and innovation.',
    icon: LightBulbIcon,
    features: [
      'Automated Literature Review',
      'Hypothesis Generation',
      'Data Analysis & Insights',
      'Research Documentation'
    ],
    benefits: [
      '10x faster research cycles',
      'Comprehensive knowledge synthesis',
      'Reduced human bias',
      '24/7 autonomous operation'
    ]
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Next-generation computing for complex problem solving and optimization.',
    icon: CpuChipIcon,
    features: [
      'Quantum Advantage Algorithms',
      'Hybrid Classical-Quantum Processing',
      'Real-time Optimization',
      'Scalable Architecture'
    ],
    benefits: [
      '1000x speedup in complex problems',
      'Exponential processing power',
      'Enhanced pattern recognition',
      'Future-proof technology'
    ]
  },
  {
    name: 'Autonomous Business Operations',
    description: 'AI-powered automation for enterprise efficiency and decision-making.',
    icon: RocketLaunchIcon,
    features: [
      'Process Automation',
      'Intelligent Decision Making',
      'Predictive Analytics',
      'Self-Optimizing Systems'
    ],
    benefits: [
      '40% operational cost reduction',
      'Real-time decision optimization',
      'Predictive maintenance',
      'Scalable automation'
    ]
  },
  {
    name: 'AI Cybersecurity Suite',
    description: 'Advanced threat detection and response systems for enterprise security.',
    icon: ShieldCheckIcon,
    features: [
      'Threat Detection & Prevention',
      'Automated Response Systems',
      'Behavioral Analysis',
      'Compliance Monitoring'
    ],
    benefits: [
      '95% threat reduction',
      'Real-time protection',
      'Automated incident response',
      'Regulatory compliance'
    ]
  },
  {
    name: 'Predictive Analytics Platform',
    description: 'Advanced analytics and forecasting for data-driven business decisions.',
    icon: ChartBarIcon,
    features: [
      'Predictive Modeling',
      'Real-time Analytics',
      'Trend Analysis',
      'Custom Dashboards'
    ],
    benefits: [
      '92% prediction accuracy',
      'Real-time insights',
      'Data-driven decisions',
      'Competitive advantage'
    ]
  },
  {
    name: 'Global AI Infrastructure',
    description: 'Worldwide deployment of AI solutions across multiple regions and time zones.',
    icon: GlobeAltIcon,
    features: [
      'Multi-region Deployment',
      'Edge Computing',
      'Load Balancing',
      'Disaster Recovery'
    ],
    benefits: [
      '99.9% uptime guarantee',
      'Global accessibility',
      'Low latency performance',
      'Scalable infrastructure'
    ]
  }
]

const industries = [
  { name: 'Healthcare', description: 'Medical research, drug discovery, and patient care optimization' },
  { name: 'Finance', description: 'Risk assessment, fraud detection, and algorithmic trading' },
  { name: 'Manufacturing', description: 'Quality control, predictive maintenance, and supply chain optimization' },
  { name: 'Retail', description: 'Customer analytics, inventory management, and personalized experiences' },
  { name: 'Technology', description: 'Software development, cybersecurity, and cloud optimization' },
  { name: 'Energy', description: 'Grid optimization, renewable energy management, and efficiency monitoring' }
]

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
              Cutting-edge AI solutions designed to transform your business operations, 
              accelerate innovation, and drive measurable results across all industries.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Revolutionary AI Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover our comprehensive suite of AI solutions that are reshaping industries 
            and unlocking new possibilities for businesses worldwide.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-6">
                  <solution.icon className="h-10 w-10 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transforming Every Sector
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI solutions are adaptable across industries, delivering tailored results 
            that address unique challenges and opportunities in each sector.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-sm text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how our AI solutions can revolutionize your operations and 
            accelerate your growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/case-studies" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Case Studies <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}