import {_LightBulbIcon, _CpuChipIcon, _AcademicCapIcon, _GlobeAltIcon, _ChartBarIcon, _UserGroupIcon, _RocketLaunchIcon, _ShieldCheckIcon} from '@heroicons/react/24/outline'

const _researchAreas = [
  {_name: 'Artificial Intelligence & Machine Learning', _description: 'Advancing the frontiers of AI through novel algorithms, _neural architectures, _and learning paradigms.', _icon: LightBulbIcon, _topics: [
      'Deep Learning & Neural Networks', _'Natural Language Processing', _'Computer Vision & Image Recognition', _'Reinforcement Learning', _'Federated Learning', _'Explainable AI'
    ]},
  {_name: 'Quantum Computing & AI', _description: 'Exploring the intersection of quantum mechanics and artificial intelligence for breakthrough computational capabilities.', _icon: CpuChipIcon, _topics: [
      'Quantum Neural Networks', _'Quantum Machine Learning', _'Quantum-Classical Hybrid Systems', _'Quantum Error Correction', _'Quantum Algorithms for AI', _'Quantum Supremacy Applications'
    ]},
  {_name: 'Autonomous Systems & Robotics', _description: 'Developing intelligent systems that can operate independently and adapt to changing environments.', _icon: RocketLaunchIcon, _topics: [
      'Autonomous Decision Making', _'Multi-Agent Systems', _'Robotic Learning & Adaptation', _'Human-Robot Interaction', _'Autonomous Navigation', _'Swarm Intelligence'
    ]},
  {_name: 'AI Ethics & Governance', _description: 'Ensuring responsible AI development through ethical frameworks and governance mechanisms.', _icon: ShieldCheckIcon, _topics: [
      'AI Bias & Fairness', _'Privacy-Preserving AI', _'AI Safety & Alignment', _'Ethical AI Guidelines', _'AI Regulation & Policy', _'Human-AI Collaboration'
    ]}]

const _recentPublications = [
  {_title: 'Quantum Neural Networks: A New Paradigm for AI', _authors: 'Dr. Marcus Rodriguez, _Dr. Elena Petrov, _et al.', _journal: 'Nature Machine Intelligence', _year: '2024', _doi: '10.1038/s42256-024-00001-x', _abstract: 'We present a novel approach to neural network architecture that leverages quantum computing principles for unprecedented computational efficiency.', _impact: 'High Impact'},
  {_title: 'Autonomous Business Operations: AI-Driven Process Optimization', _authors: 'Dr. Sarah Chen, _James Kim, _et al.', _journal: 'Harvard Business Review', _year: '2024', _doi: '10.1000/hbr.2024.001', _abstract: 'This research demonstrates how autonomous AI systems can optimize business processes, _reducing operational costs by 30% while improving efficiency.', _impact: 'Industry Leading'},
  {_title: 'Multi-Modal AI Research Assistant: Accelerating Scientific Discovery', _authors: 'Dr. Elena Petrov, _Dr. Marcus Rodriguez, _et al.', _journal: 'Science', _year: '2023', _doi: '10.1126/science.abc1234', _abstract: 'Our autonomous research assistant demonstrates the potential of AI to accelerate scientific discovery across multiple domains.', _impact: 'Breakthrough'},
  {_title: 'Ethical AI Development: A Framework for Responsible Innovation', _authors: 'Dr. Sarah Chen, _Dr. Elena Petrov, _et al.', _journal: 'AI Ethics Journal', _year: '2023', _doi: '10.1000/aie.2023.001', _abstract: 'We propose a comprehensive framework for developing AI systems that prioritize human values and ethical considerations.', _impact: 'Foundational'}]

const _researchImpact = [
  {_metric: 'Research Papers Published', _value: '150+', _description: 'Peer-reviewed publications in top-tier journals and conferences'},
  {_metric: 'Citations', _value: '10, _000+', _description: 'Academic citations demonstrating research influence'},
  {_metric: 'Patents Filed', _value: '25+', _description: 'Intellectual property protecting our innovations'},
  {_metric: 'Research Collaborations', _value: '50+', _description: 'Partnerships with leading academic institutions'}]

const _academicPartners = [
  {_name: 'Stanford University', _location: 'Stanford, _CA', _focus: 'AI & Machine Learning', _collaboration: 'Joint research programs and student exchanges'},
  {_name: 'MIT', _location: 'Cambridge, _MA', _focus: 'Quantum Computing & AI', _collaboration: 'Shared research facilities and joint publications'},
  {_name: 'University of Oxford', _location: 'Oxford, _UK', _focus: 'AI Ethics & Governance', _collaboration: 'Policy research and ethical AI development'},
  {_name: 'University of Tokyo', _location: 'Tokyo, _Japan', _focus: 'Robotics & Autonomous Systems', _collaboration: 'Robotic learning and human-robot interaction'}]

export default function ResearchPage() {_return (_<div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Research &{_' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pushing the boundaries of artificial intelligence through groundbreaking research, _innovative discoveries, _and academic collaboration.
            </p>
          </div>
        </div>
      </div>

      {_/* Research Focus Areas */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Research</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Focus Areas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research spans the cutting edge of AI and technology, _driving innovation 
            and advancing the state of the art.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {_researchAreas.map((area) => (_<div key={area.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <area.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{_area.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{_area.description}</p>
                <div className="space-y-2">
                  {_area.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">{_topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {_/* Recent Publications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Publications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Research
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our latest research contributions to the field of artificial intelligence and technology.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {_recentPublications.map(_(publication) => (
              <div key={publication.title} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-2 mb-4">
                  <span className={_`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    publication.impact === 'High Impact' ? 'bg-blue-600/20 text-blue-400' :
                    publication.impact === 'Industry Leading' ? 'bg-green-600/20 text-green-400' :
                    publication.impact === 'Breakthrough' ? 'bg-purple-600/20 text-purple-400' :
                    'bg-gray-600/20 text-gray-400'}`}>
                    {_publication.impact}
                  </span>
                  <span className="text-sm text-gray-400">{_publication.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{_publication.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{_publication.authors}</p>
                <p className="text-sm text-gray-400 mb-3">{_publication.journal}</p>
                <p className="text-sm text-gray-300 mb-4">{_publication.abstract}</p>
                <a
                  href={_`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  View Publication <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {_/* Research Impact */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Research Influence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research has made significant contributions to the field, 
            influencing both academia and industry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {_researchImpact.map(_(item) => (
              <div key={item.metric} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{_item.metric}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{_item.value}</dd>
                <p className="mt-2 text-sm text-gray-400">{_item.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {_/* Academic Collaborations */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Collaborations</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic Partnerships
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We collaborate with leading academic institutions worldwide to advance 
            the frontiers of AI research and innovation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {_academicPartners.map(_(partner) => (
              <div key={partner.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{_partner.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-blue-400" />
                    {_partner.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <LightBulbIcon className="h-5 w-5 text-blue-400" />
                    {_partner.focus}
                  </p>
                  <p className="flex items-center gap-2">
                    <UserGroupIcon className="h-5 w-5 text-blue-400" />
                    {_partner.collaboration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {_/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join our research community
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Interested in collaborating on cutting-edge AI research? 
            Let's explore opportunities to work together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Research Careers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}