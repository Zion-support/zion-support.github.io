import {
  LightBulbIcon,
  CpuChipIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const researchAreas = [
  {
    name: 'Artificial Intelligence & Machine Learning',
    description: 'Advancing the frontiers of AI through novel algorithms, neural architectures, and learning paradigms.',
    icon: LightBulbIcon,
    topics: [
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision & Image Recognition',
      'Reinforcement Learning',
      'Federated Learning',
      'Explainable AI'
    ]
  },
  {
    name: 'Quantum Computing & AI',
    description: 'Exploring the intersection of quantum mechanics and artificial intelligence for breakthrough computational capabilities.',
    icon: CpuChipIcon,
    topics: [
      'Quantum Neural Networks',
      'Quantum Machine Learning',
      'Quantum-Classical Hybrid Systems',
      'Quantum Error Correction',
      'Quantum Algorithms for AI',
      'Quantum Supremacy Applications'
    ]
  },
  {
    name: 'Autonomous Systems & Robotics',
    description: 'Developing intelligent systems that can operate independently and adapt to changing environments.',
    icon: RocketLaunchIcon,
    topics: [
      'Autonomous Vehicles',
      'Robotic Process Automation',
      'Swarm Intelligence',
      'Human-Robot Collaboration',
      'Edge AI & IoT',
      'Self-Healing Systems'
    ]
  },
  {
    name: 'AI Ethics & Governance',
    description: 'Ensuring responsible AI development through ethical frameworks, bias mitigation, and transparent decision-making.',
    icon: ShieldCheckIcon,
    topics: [
      'AI Bias & Fairness',
      'Privacy-Preserving AI',
      'Algorithmic Accountability',
      'AI Safety & Alignment',
      'Regulatory Compliance',
      'Human-AI Collaboration'
    ]
  }
];

const publications = [
  {
    title: 'Quantum-Enhanced Neural Networks for Drug Discovery',
    authors: 'Dr. Sarah Chen, Dr. Marcus Rodriguez, et al.',
    journal: 'Nature Machine Intelligence',
    year: '2024',
    impact: 'High',
    description: 'Novel quantum-classical hybrid approach for accelerating molecular property prediction in pharmaceutical research.'
  },
  {
    title: 'Federated Learning for Privacy-Preserving Healthcare AI',
    authors: 'Dr. Priya Patel, James Wilson, et al.',
    journal: 'Journal of Medical Internet Research',
    year: '2024',
    impact: 'High',
    description: 'Framework for training AI models on distributed healthcare data while maintaining patient privacy.'
  },
  {
    title: 'Autonomous Business Process Optimization',
    authors: 'Dr. Alex Kim, Dr. Sarah Chen, et al.',
    journal: 'Harvard Business Review',
    year: '2024',
    impact: 'Medium',
    description: 'AI-driven approach to automatically optimize complex business workflows and decision-making processes.'
  }
];

const researchStats = [
  { label: 'Research Papers Published', value: '150+' },
  { label: 'Patents Filed', value: '75+' },
  { label: 'Research Collaborations', value: '50+' },
  { label: 'PhD Students Mentored', value: '100+' }
];

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
                Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pushing the boundaries of artificial intelligence through cutting-edge research,
              breakthrough discoveries, and innovative solutions that shape the future.
            </p>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Research Areas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Advancing AI Frontiers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research spans multiple domains of artificial intelligence, from fundamental
            algorithms to practical applications that transform industries.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <area.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Research Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            By the Numbers
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {researchStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Recent Publications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Recent Publications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Research
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our latest research contributions to the field of artificial intelligence
            and related technologies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="space-y-8">
            {publications.map((publication) => (
              <div key={publication.title} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{publication.title}</h3>
                    <p className="text-sm text-blue-400 mb-2">{publication.authors}</p>
                    <p className="text-sm text-gray-300 mb-3">{publication.journal} • {publication.year}</p>
                    <p className="text-sm text-gray-300">{publication.description}</p>
                  </div>
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                    publication.impact === 'High' 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {publication.impact} Impact
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Collaboration */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Research Collaboration</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Partner with Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We collaborate with leading universities, research institutions, and industry
            partners to advance the field of artificial intelligence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Academic Partnerships</h3>
              <p className="text-sm text-gray-300">Collaborate with top universities and research institutions worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                <UserGroupIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Collaboration</h3>
              <p className="text-sm text-gray-300">Work with leading companies to translate research into practical solutions.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                <GlobeAltIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
              <p className="text-sm text-gray-300">Contribute to solving global challenges through AI research and innovation.</p>
            </div>
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
            Interested in collaborating with our research team or joining our
            innovative projects? Let's explore opportunities together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Start Collaboration
            </a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Research Careers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}