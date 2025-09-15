import React from 'react'
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const researchAreas = [
  {
    name: 'Quantum Neural Networks',
    description: 'Exploring the intersection of quantum computing and artificial neural networks for unprecedented computational power.',
    icon: CpuChipIcon,
    status: 'Active Research',
    publications: 12,
    team: '15 researchers'
  },
  {
    name: 'Autonomous AI Systems',
    description: 'Developing self-managing AI systems that can operate independently and adapt to changing environments.',
    icon: RocketLaunchIcon,
    status: 'Active Research',
    publications: 8,
    team: '12 researchers'
  },
  {
    name: 'AI Ethics & Safety',
    description: 'Ensuring AI systems are developed with ethical principles and safety measures at their core.',
    icon: ShieldCheckIcon,
    status: 'Active Research',
    publications: 15,
    team: '10 researchers'
  },
  {
    name: 'Predictive Analytics',
    description: 'Advanced machine learning techniques for accurate forecasting and decision support systems.',
    icon: ChartBarIcon,
    status: 'Active Research',
    publications: 20,
    team: '18 researchers'
  }
]

const publications = [
  {
    title: 'Quantum Neural Networks: A New Paradigm for AI',
    authors: ['Dr. Sarah Chen', 'Dr. Marcus Rodriguez', 'Dr. Elena Petrov'],
    journal: 'Nature Machine Intelligence',
    year: '2024',
    impact: 'High',
    abstract: 'We present a novel approach to neural networks that leverages quantum computing principles for exponential performance improvements.'
  },
  {
    title: 'Autonomous AI Systems in Enterprise Environments',
    authors: ['Dr. James Kim', 'Dr. Sarah Chen'],
    journal: 'Journal of Artificial Intelligence Research',
    year: '2024',
    impact: 'High',
    abstract: 'This paper explores the implementation and benefits of autonomous AI systems in real-world business environments.'
  },
  {
    title: 'Ethical AI: A Framework for Responsible Development',
    authors: ['Dr. Elena Petrov', 'Dr. Marcus Rodriguez'],
    journal: 'AI & Society',
    year: '2024',
    impact: 'Medium',
    abstract: 'We propose a comprehensive framework for ensuring ethical AI development and deployment.'
  }
]

const partnerships = [
  {
    name: 'Stanford University',
    description: 'Collaborative research in quantum computing and neural networks',
    type: 'Academic Partnership',
    icon: AcademicCapIcon
  },
  {
    name: 'MIT AI Lab',
    description: 'Joint research in autonomous systems and robotics',
    type: 'Research Collaboration',
    icon: LightBulbIcon
  },
  {
    name: 'Google DeepMind',
    description: 'Partnership in AI safety and ethical development',
    type: 'Industry Partnership',
    icon: CpuChipIcon
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
              AI{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Research
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pioneering the future of artificial intelligence through cutting-edge research, 
              breakthrough discoveries, and innovative solutions that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Research Focus</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leading AI Innovation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research teams are working on the most challenging problems in AI, 
            developing solutions that will shape the future of technology.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-4">
                  <area.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {area.status}
                  </span>
                  <span className="text-gray-400">{area.publications} publications</span>
                  <span className="text-gray-400">{area.team}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Publications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Research Papers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research findings are published in top-tier journals and conferences, 
            contributing to the global AI research community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    pub.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {pub.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-blue-400 mb-2">
                  {pub.authors.join(', ')} • {pub.journal} • {pub.year}
                </p>
                <p className="text-gray-300">{pub.abstract}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnerships */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Partnerships</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Global Research Network
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We collaborate with leading academic institutions and industry partners 
            to advance the field of artificial intelligence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {partnerships.map((partnership) => (
              <div key={partnership.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <partnership.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{partnership.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{partnership.description}</p>
                <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">
                  {partnership.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Our Research Community
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Interested in collaborating with us or learning more about our research? 
            Get in touch to explore partnership opportunities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Contact Research Team
            </a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Research Positions <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}