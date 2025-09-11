import {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  LightBulbIcon,
  CpuChipIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon;
} from '@heroicons / react / 24 / outline';
const research_areas = [;
  {
    name: 'Artificial Intelligence & Machine Learning',
    description: 'Advancing the frontiers of AI through novel algorithms, neural architectures, and learning paradigms.',
    icon: LightBulbIcon,
    topics: [;
      'Deep Learning & Neural NetworksNatural Language ProcessingComputer Vision & Image RecognitionReinforcement LearningFederated LearningExplainable AI';
    ]},
  {
    name: 'Quantum Computing & AI',
    description: 'Exploring the intersection of quantum mechanics and artificial intelligence for breakthrough computational capabilities.',
    icon: CpuChipIcon,
    topics: [;
      'Quantum Neural NetworksQuantum Machine LearningQuantum - Classical Hybrid SystemsQuantum Error CorrectionQuantum Algorithms for AIQuantum Supremacy Applications';
    ]},
  {
    name: 'Autonomous Systems & Robotics',
    description: 'Developing intelligent systems that can operate independently and adapt to changing environments.',
    icon: RocketLaunchIcon,
    topics: [;
      'Autonomous Decision MakingMulti - Agent SystemsRobotic Learning & AdaptationHuman - Robot InteractionAutonomous NavigationSwarm Intelligence';
    ]},
  {
    name: 'AI Ethics & Governance',
    description: 'Ensuring responsible AI development through ethical frameworks and governance mechanisms.',
    icon: ShieldCheckIcon,
    topics: [;
      'AI Bias & FairnessPrivacy - Preserving AIAI Safety & AlignmentEthical AI GuidelinesAI Regulation & PolicyHuman - AI Collaboration';
    ]}];
const recent_publications = [;
  {
    title: 'Quantum Neural Networks: A New Paradigm for AI',
    authors: 'Dr. Marcus Rodriguez, Dr. Elena Petrov, et al.',
    journal: 'Nature Machine Intelligence',
    year: '2024',
    doi: '10.1038 / s42256 - 024 - 00001 - x',
    abstract: 'We present a novel approach to neural network architecture that leverages quantum computing principles for unprecedented computational efficiency.',
    impact: 'High Impact'},
  {
    title: 'Autonomous Business Operations: AI - Driven Process Optimization',
    authors: 'Dr. Sarah Chen, James Kim, et al.',
    journal: 'Harvard Business Review',
    year: '2024',
    doi: '10.1000 / hbr.2024.001',
    abstract: 'This research demonstrates how autonomous AI systems can optimize business processes, reducing operational costs by 30% while improving efficiency.',
    impact: 'Industry Leading'},
  {
    title: 'Multi - Modal AI Research Assistant: Accelerating Scientific Discovery',
    authors: 'Dr. Elena Petrov, Dr. Marcus Rodriguez, et al.',
    journal: 'Science',
    year: '2023',
    doi: '10.1126 / science.abc1234',
    abstract: 'Our autonomous research assistant demonstrates the potential of AI to accelerate scientific discovery across multiple domains.',
    impact: 'Breakthrough'},
  {
    title: 'Ethical AI Development: A Framework for Responsible Innovation',
    authors: 'Dr. Sarah Chen, Dr. Elena Petrov, et al.',
    journal: 'AI Ethics Journal',
    year: '2023',
    doi: '10.1000 / aie.2023.001',
    abstract: 'We propose a comprehensive framework for developing AI systems that prioritize human values and ethical considerations.',
    impact: 'Foundational'}];
const research_impact = [;
  {
    metric: 'Research Papers Published',
    value: '150+',
    description: 'Peer - reviewed publications in top - tier journals and conferences'},
  {
    metric: 'Citations',
    value: '10, 000+',
    description: 'Academic citations demonstrating research influence'},
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    metric: 'Patents Filed'
    value: '25+'
    description: 'Intellectual property protecting our innovations'}
  {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    metric: 'Research Collaborations',
    value: '50+',
    description: 'Partnerships with leading academic institutions'}];
const academic_partners = [;

    name: 'University of Tokyo',
    location: 'Tokyo, Japan',
    focus: 'Robotics & Autonomous Systems',
    collaboration: 'Robotic learning and human - robot interaction'}];
export default /**
 * ResearchPage - Function description
 */
function ResearchPage() {


      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Research &{' '}


            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pushing the boundaries of artificial intelligence through groundbreaking research, 


              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>
      {/* Research Focus Areas */}
      <div className=&quot;mx-auto max-w-7xl px-6 sm:px-6 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Our Research</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Focus Areas
          </p>


          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research spans the cutting edge of AI and technology, driving innovation 


            and advancing the state of the art.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2&quot;>
            {researchAreas.map((area) => (
              <div key={area.name} className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-4&quot;>
                  <area.icon className=&quot;h-8 w-8 text-blue-400&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white&quot;>{area.name}</h3>
                </div>
                <p className=&quot;text-gray-300 mb-6&quot;>{area.description}</p>
                <div className=&quot;space-y-2&quot;>
                  {area.topics.map((topic) => (
                    <div key={topic} className=&quot;flex items-center gap-2&quot;>
                      <div className=&quot;h-1.5 w-1.5 bg-blue-400 rounded-full&quot;></div>
                      <span className=&quot;text-sm text-gray-400&quot;>{topic}</span>
                    </div>
                  ))}
export default function ResearchPage() {;
  return (;
    <div className=&quot;bg-black&quot;>
=======
    name: 'University of Tokyo'
    location: 'Tokyo, Japan'
    focus: 'Robotics & Autonomous Systems'
    collaboration: 'Robotic learning and human-robot interaction'}]
export default function ResearchPage() {

export default function ResearchPage() {;
  return (;
    <div className=&quot;bg-black&quot;>
const Page: React.FC<PageProps> = ({ className }) => {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Research &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
              Pushing the boundaries of artificial intelligence through groundbreaking research
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pushing the boundaries of artificial intelligence through groundbreaking research, 
              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>
      {/* Research Focus Areas */}
      <div className=&quot;mx-auto max-w-7xl px-6 sm:px-6 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Our Research</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Focus Areas
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our research spans the cutting edge of AI and technology, driving innovation
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research spans the cutting edge of AI and technology, driving innovation 
            and advancing the state of the art.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2&quot;>
            {researchAreas.map((area) => (
              <div key={area.name} className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-4&quot;>
                  <area.icon className=&quot;h-8 w-8 text-blue-400&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white&quot;>{area.name}</h3>
                </div>
                <p className=&quot;text-gray-300 mb-6&quot;>{area.description}</p>
                <div className=&quot;space-y-2&quot;>
                  {area.topics.map((topic) => (
                    <div key={topic} className=&quot;flex items-center gap-2&quot;>
                      <div className=&quot;h-1.5 w-1.5 bg-blue-400 rounded-full&quot;></div>
                      <span className=&quot;text-sm text-gray-400&quot;>{topic}</span>
                    </div>
                  ))}
=======
              <span className=&quot;bg - gradient - to - r from - blue - 400 to - purple - 600 bg - clip - text text - transparent & quot;>;
                Innovation;
              </span>;
            </h1>;
            <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
              Pushing the boundaries of artificial intelligence through groundbreaking research,
              innovative discoveries, and academic collaboration.;
            </p>;
          </div>;
        </div>;
      </div>;
      {/* Research Focus Areas */}
      <div className=&quot;mx - auto max - w-7xl px - 6 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Our Research</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Focus Areas;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Our research spans the cutting edge of AI and technology, driving innovation;
            and advancing the state of the art.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2&quot;>;
            {research_areas.map ((area) => (
              <div key={area.name} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                <div className=&quot;flex items - center gap - x-3 mb - 4&quot;>;
                  <area.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  <h3 className=&quot;text - xl font - semibold text - white & quot;>{area.name}</h3>;
=======
    name: 'University of Tokyo'
    location: 'Tokyo, Japan'
    focus: 'Robotics & Autonomous Systems'
    collaboration: 'Robotic learning and human-robot interaction'}]
const Page: React.FC<PageProps> = ({ className }) => {
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
            <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
              Pushing the boundaries of artificial intelligence through groundbreaking research
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pushing the boundaries of artificial intelligence through groundbreaking research, 
              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>
      {/* Research Focus Areas */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Research</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Focus Areas
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our research spans the cutting edge of AI and technology, driving innovation
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our research spans the cutting edge of AI and technology, driving innovation 
            and advancing the state of the art.
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
                      <span className="text-sm text-gray-400">{topic}</span>
                    </div>
                  ))}
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{area.description}</p>;
                <div className=&quot;space - y-2 & quot;>;
                  {area.topics.map ((topic) => (
                    <div key={topic} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 400 & quot;>{topic}</span>;
                    </div>))}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
      {/* Recent Publications */}
=======
<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Publications</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
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
            {recentPublications.map((publication) => (
              <div key={publication.title} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-2 mb-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    publication.impact === 'High Impact' ? 'bg-blue-600/20 text-blue-400' :
                    publication.impact === 'Industry Leading' ? 'bg-green-600/20 text-green-400' :
                    publication.impact === 'Breakthrough' ? 'bg-purple-600/20 text-purple-400' :
                    'bg-gray-600/20 text-gray-400'
                  }`}>

=======      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
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
        <div className=&quot;mx-auto mt-16 max-w-2xl lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4&quot;>
            {researchImpact.map((item) => (
              <div key={item.metric} className=&quot;flex flex-col bg-white/5 p-8 backdrop-blur-sm&quot;>
                <dt className=&quot;text-sm font-semibold leading-6 text-gray-300&quot;>{item.metric}</dt>
                <dd className=&quot;order-first text-3xl font-bold tracking-tight text-white&quot;>{item.value}</dd>
                <p className=&quot;mt-2 text-sm text-gray-400&quot;>{item.description}</p>
              </div>
            ))}

<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl text - center & quot;>;
          <h2 className=&quot;text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Join our research community;
          </h2>;
          <p className=&quot;mx - auto mt - 6 max - w-xl text - lg leading - 8 text - gray - 300 & quot;>;
            Interested in collaborating on cutting - edge AI research?;
            Let's explore opportunities to work together.;
          </p>;
          <div className=&quot;mt - 10 flex items - center justify - center gap - x-6 & quot;>;
            <a;
              href=&quot;/contact & quot;
              className=&quot;rounded - md bg - blue - 600 px - 3.5 py - 2.5 text - sm font - semibold text - white shadow - sm hover:bg - blue - 500 focus - visible:outline focus - visible:outline - 2 focus - visible:outline - offset - 2 focus - visible:outline - blue - 600 transition - all duration - 200 hover:scale - 105 & quot;
            >;
              Get in Touch;
            </Link>;
            <a href=&quot;/careers & quot; className=&quot;text - sm font - semibold leading - 6 text - white hover:text - blue - 400 transition - colors duration - 200 & quot;>;
              Research Careers <span aria - hidden=&quot;true & quot;>→</span>;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Join our research community
          </h2>
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>
            Interested in collaborating on cutting-edge AI research?
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            </Link>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Research Careers <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
