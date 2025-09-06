import {

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



                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>;
        </div>;
      </div>;
      {/* Industry Applications */}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            delivering measurable results and competitive advantages.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2&quot;>
            {industryApplications.map((industry) => (
              <div key={industry.name} className=&quot;flex flex-col group&quot;>
                <dt className=&quot;flex items-center gap-x-3 text-base font-semibold leading-7 text-white&quot;>
                  <industry.icon className=&quot;h-5 w-5 flex-none text-blue-400&quot; aria-hidden=&quot;true&quot; />

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
=======
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
=======


<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>



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
