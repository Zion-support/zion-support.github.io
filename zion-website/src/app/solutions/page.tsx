import {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  LightBulbIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon;
} from '@heroicons / react / 24 / outline';
const flagship_solutions = [;
  {
    name: 'AI Research Assistant',
    description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.',
    icon: LightBulbIcon,
    features: [;
      'Natural Language ProcessingMulti - modal LearningReal - time CollaborationAdvanced Analytics';
    ],
    href: '/solutions / ai - autonomous - research'},
  {
    name: 'Quantum Neural Networks',
    description: 'Breakthrough quantum computing technology for next - generation AI applications.',
    icon: CpuChipIcon,
    features: [;
      'Quantum SupremacyNeural Architecture SearchHybrid Classical - QuantumScalable Architecture';
    ],
    href: '/solutions / quantum - neural - networks'},
  {
    name: 'Autonomous Business Operations',
    description: 'Self - optimizing business processes that adapt and improve automatically.',
    icon: RocketLaunchIcon,
    features: [;
      'Process AutomationPredictive AnalyticsContinuous OptimizationReal - time Monitoring';
    ],
    href: '/solutions / autonomous - business'},
  {
    name: 'IT Asset Management',
    description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.',
    icon: ShieldCheckIcon,
    features: [;
      'Asset DiscoveryLifecycle ManagementSecurity ComplianceCost Optimization';
    ],
    href: '/solutions / it - asset - management'}];
const industry_applications = [;
  {
    name: 'Healthcare',
    description: 'AI - powered diagnostics, drug discovery, and patient care optimization.',
    icon: UserGroupIcon,
    use_cases: ['Medical Imaging AnalysisDrug DiscoveryPatient Risk AssessmentClinical Decision Support']},
  {
    name: 'Finance',
    description: 'Intelligent trading, risk assessment, and fraud detection systems.',
    icon: ChartBarIcon,
    use_cases: ['Algorithmic TradingCredit Risk AnalysisFraud DetectionPortfolio Optimization']},
  {
    name: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.',
    icon: CogIcon,
    use_cases: ['Predictive MaintenanceQuality ControlSupply Chain OptimizationProduction Planning']},
  {
    name: 'Retail',
    description: 'Customer behavior analysis, inventory management, and personalized marketing.',
    icon: GlobeAltIcon,
    use_cases: ['Customer AnalyticsInventory ManagementPersonalized MarketingDemand Forecasting']}];
const implementation_steps = [;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    step: '01'
    title: 'Discovery & Assessment'
    description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.'
    icon: LightBulbIcon}
  {
    step: '02'
    title: 'Solution Design'
    description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.'
    icon: CpuChipIcon}
  {
    step: '03'
    title: 'Development & Testing'
    description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.'
    icon: CogIcon}
  {
    step: '04'
    title: 'Deployment & Training'
    description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.'
    icon: RocketLaunchIcon}
  {
<<<<<<< HEAD

    step: '05',
    title: 'Ongoing Support',
    description: 'Continuous monitoring, optimization, and support to ensure your AI solution delivers lasting value.',
    icon: ShieldCheckIcon}];
export default /**
 * SolutionsPage - Function description
 */
function SolutionsPage() {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className=&quot;bg - black & quot;>;



      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              AI Solutions for{' '}


            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our cutting-edge AI and technology solutions designed to transform your business 


              operations and drive unprecedented growth and innovation.
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <span className=&quot;bg - gradient - to - r from - blue - 400 to - purple - 600 bg - clip - text text - transparent & quot;>;
                Every Industry;
              </span>;
            </h1>;
            <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
              Discover our cutting - edge AI and technology solutions designed to transform your business;
              operations and drive unprecedented growth and innovation.;
            </p>;
          </div>;
        </div>;
      </div>;
      {/* Flagship Solutions */}
      <div className=&quot;mx - auto max - w-7xl px - 6 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Our Solutions</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Flagship AI Platforms;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2&quot;>;
            {flagship_solutions.map ((solution) => (
              <div key={solution.name} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                <div className=&quot;flex items - center gap - x-3 mb - 4&quot;>;
                  <solution.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  <h3 className=&quot;text - xl font - semibold text - white & quot;>{solution.name}</h3>;
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{solution.description}</p>;
                <div className=&quot;space - y-3 mb - 6&quot;>;
                  {solution.features.map ((feature) => (
                    <div key={feature} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 2 w - 2 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 300 & quot;>{feature}</span>;
                    </div>))}
                </div>;
                <a;
                  href={solution.href}

<<<<<<< HEAD
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"


className=&quot;text - sm font - semibold leading - 6 text - blue - 400 hover:text - blue - 300 transition - colors duration - 200 & quot;
                >;
                  Learn more <span aria - hidden=&quot;true & quot;>→</span>;
                </Link>;
              </div>))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    step: '05'
    title: 'Ongoing Support'
    description: 'Continuous monitoring, optimization, and support to ensure your AI solution delivers lasting value.'
    icon: ShieldCheckIcon}]
export default function SolutionsPage() {

export default function SolutionsPage() {;
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
              AI Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
              Discover our cutting-edge AI and technology solutions designed to transform your business
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our cutting-edge AI and technology solutions designed to transform your business 
              operations and drive unprecedented growth and innovation.
            </p>
          </div>
        </div>
      </div>
=======
              <span className=&quot;bg - gradient - to - r from - blue - 400 to - purple - 600 bg - clip - text text - transparent & quot;>;
                Every Industry;
              </span>;
            </h1>;
            <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
              Discover our cutting - edge AI and technology solutions designed to transform your business;
              operations and drive unprecedented growth and innovation.;
            </p>;
          </div>;
        </div>;
      </div>;
      {/* Flagship Solutions */}
      <div className=&quot;mx - auto max - w-7xl px - 6 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Our Solutions</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Flagship AI Platforms;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2&quot;>;
            {flagship_solutions.map ((solution) => (
              <div key={solution.name} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                <div className=&quot;flex items - center gap - x-3 mb - 4&quot;>;
                  <solution.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  <h3 className=&quot;text - xl font - semibold text - white & quot;>{solution.name}</h3>;
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{solution.description}</p>;
                <div className=&quot;space - y-3 mb - 6&quot;>;
                  {solution.features.map ((feature) => (
                    <div key={feature} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 2 w - 2 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 300 & quot;>{feature}</span>;
                    </div>))}
                </div>;
                <a;
                  href={solution.href}
className=&quot;text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200&quot;
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
<<<<<<< HEAD
=======

                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </div>;
      {/* Industry Applications */}


<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">



            Transforming Every Sector
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI solutions are designed to adapt and excel across diverse industries, 
            delivering measurable results and competitive advantages.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2&quot;>
            {industryApplications.map((industry) => (
              <div key={industry.name} className=&quot;flex flex-col group&quot;>
                <dt className=&quot;flex items-center gap-x-3 text-base font-semibold leading-7 text-white&quot;>
                  <industry.icon className=&quot;h-5 w-5 flex-none text-blue-400&quot; aria-hidden=&quot;true&quot; />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Industries</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Transforming Every Sector;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Our AI solutions are designed to adapt and excel across diverse industries,
            delivering measurable results and competitive advantages.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {industry_applications.map ((industry) => (
              <div key={industry.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <industry.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {industry.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto mb - 4&quot;>{industry.description}</p>;
                  <div className=&quot;space - y-2 & quot;>;
                    {industry.use_cases.map ((use_case) => (
                      <div key={use_case} className=&quot;flex items - center gap - 2&quot;>;
                        <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                        <span className=&quot;text - sm text - gray - 400 & quot;>{use_case}</span>;
                      </div>))}
<<<<<<< HEAD
<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Industries</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Transforming Every Sector
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our AI solutions are designed to adapt and excel across diverse industries
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transforming Every Sector
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI solutions are designed to adapt and excel across diverse industries, 
            delivering measurable results and competitive advantages.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {industryApplications.map((industry) => (
              <div key={industry.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {industry.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{useCase}</span>
                      </div>
                    ))}
                  </div>;
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* Implementation Process */}


<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">



            Our Proven Process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From initial assessment to ongoing optimization, we guide you through every step 
            of your AI transformation journey.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5&quot;>
            {implementationSteps.map((step, index) => (
              <div key={step.step} className=&quot;relative&quot;>
                {index < implementationSteps.length - 1 && (
                  <div className=&quot;hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700&quot;></div>
                )}
                <div className=&quot;bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>
                  <div className=&quot;mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4&quot;>
                    <step.icon className=&quot;h-8 w-8 text-blue-400&quot; />
                  </div>
                  <div className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>{step.step}</div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{step.title}</h3>
                  <p className=&quot;text-sm text-gray-300&quot;>{step.description}</p>
                </div>
              </div>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Implementation</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Our Proven Process;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            From initial assessment to ongoing optimization, we guide you through every step;
            of your AI transformation journey.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 5&quot;>;
            {implementation_steps.map ((step, index) => (
              <div key={step.step} className=&quot;relative & quot;>;
                {index < implementation_steps.length - 1 && (
                  <div className=&quot;hidden lg:block absolute top - 8 left - 8 w - full h - 0.5 bg - gray - 700 & quot;></div>)}
                <div className=&quot;bg - white / 5 p - 6 rounded - 2xl backdrop - blur - sm text - center hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                  <div className=&quot;mx - auto flex h - 16 w - 16 items - center justify - center rounded - full bg - blue - 600 / 20 mb - 4&quot;>;
                    <step.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  </div>;
                  <div className=&quot;text - sm font - semibold text - blue - 400 mb - 2&quot;>{step.step}</div>;
                  <h3 className=&quot;text - lg font - semibold text - white mb - 2&quot;>{step.title}</h3>;
                  <p className=&quot;text - sm text - gray - 300 & quot;>{step.description}</p>;
                </div>;
              </div>))}
<<<<<<< HEAD
<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Implementation</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Our Proven Process
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            From initial assessment to ongoing optimization, we guide you through every step
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Proven Process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From initial assessment to ongoing optimization, we guide you through every step 
            of your AI transformation journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
            {implementationSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < implementationSteps.length - 1 && (
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
          </div>;
        </div>;
      </div>;
      {/* CTA section */}


<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">



            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how our AI solutions can accelerate your growth and give you a 
            competitive edge in your industry.
          </p>
          <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
            <a
              href=&quot;/contact&quot;
              className=&quot;rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105&quot;
            >
              Get Started
            </Link>
            <a href=&quot;/services&quot; className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200&quot;>
              View Services <span aria-hidden=&quot;true&quot;>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl text - center & quot;>;
          <h2 className=&quot;text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Ready to transform your business?;
          </h2>;
          <p className=&quot;mx - auto mt - 6 max - w-xl text - lg leading - 8 text - gray - 300 & quot;>;
            Let's discuss how our AI solutions can accelerate your growth and give you a;
            competitive edge in your industry.;
          </p>;
          <div className=&quot;mt - 10 flex items - center justify - center gap - x-6 & quot;>;
            <a;
              href=&quot;/contact & quot;
              className=&quot;rounded - md bg - blue - 600 px - 3.5 py - 2.5 text - sm font - semibold text - white shadow - sm hover:bg - blue - 500 focus - visible:outline focus - visible:outline - 2 focus - visible:outline - offset - 2 focus - visible:outline - blue - 600 transition - all duration - 200 hover:scale - 105 & quot;
            >;
              Get Started;
            </Link>;
            <a href=&quot;/services & quot; className=&quot;text - sm font - semibold leading - 6 text - white hover:text - blue - 400 transition - colors duration - 200 & quot;>;
              View Services <span aria - hidden=&quot;true & quot;>→</span>;
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
            Ready to transform your business?
          </h2>
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>
            Let's discuss how our AI solutions can accelerate your growth and give you a
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how our AI solutions can accelerate your growth and give you a 
            competitive edge in your industry.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </Link>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
