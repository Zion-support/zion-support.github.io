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

const researchAreas = $2;
    description: 'Advancing the frontiers of AI through novel algorithms, neural architectures, and learning paradigms.',
    icon: LightBulbIcon,
    topics: [
      'Deep Learning & Neural NetworksNatural Language ProcessingComputer Vision & Image RecognitionReinforcement LearningFederated LearningExplainable AI'
    ]},
  {
    name: 'Quantum Computing & AI',
    description: 'Exploring the intersection of quantum mechanics and artificial intelligence for breakthrough computational capabilities.',
    icon: CpuChipIcon,
    topics: [
      'Quantum Neural NetworksQuantum Machine LearningQuantum-Classical Hybrid SystemsQuantum Error CorrectionQuantum Algorithms for AIQuantum Supremacy Applications'
    ]},
  {
    name: 'Autonomous Systems & Robotics',
    description: 'Developing intelligent systems that can operate independently and adapt to changing environments.',
    icon: RocketLaunchIcon,
    topics: [
      'Autonomous Decision MakingMulti-Agent SystemsRobotic Learning & AdaptationHuman-Robot InteractionAutonomous NavigationSwarm Intelligence'
    ]},
  {
    name: 'AI Ethics & Governance',
    description: 'Ensuring responsible AI development through ethical frameworks and governance mechanisms.',
    icon: ShieldCheckIcon,
    topics: [
      'AI Bias & FairnessPrivacy-Preserving AIAI Safety & AlignmentEthical AI GuidelinesAI Regulation & PolicyHuman-AI Collaboration'
    ]}]

const recentPublications = $2;
    authors: 'Dr. Marcus Rodriguez, Dr. Elena Petrov, et al.',
    journal: 'Nature Machine Intelligence',
    year: '2024',
    doi: '10.1038/s42256-024-00001-x',
    abstract: 'We present a novel approach to neural network architecture that leverages quantum computing principles for unprecedented computational efficiency.',
    impact: 'High Impact'},
  {
    title: 'Autonomous Business Operations: AI-Driven Process Optimization',
    authors: 'Dr. Sarah Chen, James Kim, et al.',
    journal: 'Harvard Business Review',
    year: '2024',
    doi: '10.1000/hbr.2024.001',
    abstract: 'This research demonstrates how autonomous AI systems can optimize business processes, reducing operational costs by 30% while improving efficiency.',
    impact: 'Industry Leading'},
  {
    title: 'Multi-Modal AI Research Assistant: Accelerating Scientific Discovery',
    authors: 'Dr. Elena Petrov, Dr. Marcus Rodriguez, et al.',
    journal: 'Science',
    year: '2023',
    doi: '10.1126/science.abc1234',
    abstract: 'Our autonomous research assistant demonstrates the potential of AI to accelerate scientific discovery across multiple domains.',
    impact: 'Breakthrough'},
  {
    title: 'Ethical AI Development: A Framework for Responsible Innovation',
    authors: 'Dr. Sarah Chen, Dr. Elena Petrov, et al.',
    journal: 'AI Ethics Journal',
    year: '2023',
    doi: '10.1000/aie.2023.001',
    abstract: 'We propose a comprehensive framework for developing AI systems that prioritize human values and ethical considerations.',
    impact: 'Foundational'}]

const researchImpact = $2;
    value: '150+',
    description: 'Peer-reviewed publications in top-tier journals and conferences'},
  {
    metric: 'Citations',
    value: '10,000+',
    description: 'Academic citations demonstrating research influence'},
  {
    metric: 'Patents Filed',
    value: '25+',
    description: 'Intellectual property protecting our innovations'},
  {
    metric: 'Research Collaborations',
    value: '50+',
    description: 'Partnerships with leading academic institutions'}]

const academicPartners = $2;
    location: 'Stanford, CA',
    focus: 'AI & Machine Learning',
    collaboration: 'Joint research programs and student exchanges'},
  {
    name: 'MIT',
    location: 'Cambridge, MA',
    focus: 'Quantum Computing & AI',
    collaboration: 'Shared research facilities and joint publications'},
  {
    name: 'University of Oxford',
    location: 'Oxford, UK',
    focus: 'AI Ethics & Governance',
    collaboration: 'Policy research and ethical AI development'},
  {
    name: 'University of Tokyo',
    location: 'Tokyo, Japan',
    focus: 'Robotics & Autonomous Systems',
    collaboration: 'Robotic learning and human-robot interaction'}]

export default function ResearchPage() {
  return (
    <div className = $2;
              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Research Focus Areas */}

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {academicPartners.map((partner) => (
              <div key={partner.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-blue-400" />
                    {partner.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <LightBulbIcon className="h-5 w-5 text-blue-400" />
                    {partner.focus}
                  </p>
                  <p className="flex items-center gap-2">
                    <UserGroupIcon className="h-5 w-5 text-blue-400" />
                    {partner.collaboration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Join our research community
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Interested in collaborating on cutting-edge AI research? 
            Let's explore opportunities to work together.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='/contact'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105'
            >
              Get in Touch
            </a>
            <a href='/careers' className='text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200'>
              Research Careers <span aria-hidden='true'>→</span>
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