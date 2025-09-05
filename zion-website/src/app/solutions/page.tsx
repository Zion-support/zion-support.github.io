<<<<<<< HEAD
import { 
  LightBulbIcon,
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const flagshipSolutions = [
  {
    name: 'AI Research Assistant',
    description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.',
    icon: LightBulbIcon,
    features: [
      'Natural Language ProcessingMulti-modal LearningReal-time CollaborationAdvanced Analytics'
    ],
    href: '/solutions/ai-autonomous-research'},
  {
    name: 'Quantum Neural Networks',
    description: 'Breakthrough quantum computing technology for next-generation AI applications.',
    icon: CpuChipIcon,
    features: [
      'Quantum SupremacyNeural Architecture SearchHybrid Classical-QuantumScalable Architecture'
    ],
    href: '/solutions/quantum-neural-networks'},
  {
    name: 'Autonomous Business Operations',
    description: 'Self-optimizing business processes that adapt and improve automatically.',
    icon: RocketLaunchIcon,
    features: [
      'Process AutomationPredictive AnalyticsContinuous OptimizationReal-time Monitoring'
    ],
    href: '/solutions/autonomous-business'},
  {
    name: 'IT Asset Management',
    description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.',
    icon: ShieldCheckIcon,
    features: [
      'Asset DiscoveryLifecycle ManagementSecurity ComplianceCost Optimization'
    ],
    href: '/solutions/it-asset-management'}]

const industryApplications = [
  {
    name: 'Healthcare',
    description: 'AI-powered diagnostics, drug discovery, and patient care optimization.',
    icon: UserGroupIcon,
    useCases: ['Medical Imaging AnalysisDrug DiscoveryPatient Risk AssessmentClinical Decision Support']},
  {
    name: 'Finance',
    description: 'Intelligent trading, risk assessment, and fraud detection systems.',
    icon: ChartBarIcon,
    useCases: ['Algorithmic TradingCredit Risk AnalysisFraud DetectionPortfolio Optimization']},
  {
    name: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.',
    icon: CogIcon,
    useCases: ['Predictive MaintenanceQuality ControlSupply Chain OptimizationProduction Planning']},
  {
    name: 'Retail',
    description: 'Customer behavior analysis, inventory management, and personalized marketing.',
    icon: GlobeAltIcon,
    useCases: ['Customer AnalyticsInventory ManagementPersonalized MarketingDemand Forecasting']}]
=======
import {_LightBulbIcon, _CpuChipIcon, _RocketLaunchIcon, _ShieldCheckIcon, _ChartBarIcon, _GlobeAltIcon, _UserGroupIcon, _CogIcon} from '@heroicons/react/24/outline'

const _flagshipSolutions = [
  {_name: 'AI Research Assistant', _description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.', _icon: LightBulbIcon, _features: [
      'Natural Language Processing', _'Multi-modal Learning', _'Real-time Collaboration', _'Advanced Analytics'
    ], _href: '/solutions/ai-autonomous-research'},
  {_name: 'Quantum Neural Networks', _description: 'Breakthrough quantum computing technology for next-generation AI applications.', _icon: CpuChipIcon, _features: [
      'Quantum Supremacy', _'Neural Architecture Search', _'Hybrid Classical-Quantum', _'Scalable Architecture'
    ], _href: '/solutions/quantum-neural-networks'},
  {_name: 'Autonomous Business Operations', _description: 'Self-optimizing business processes that adapt and improve automatically.', _icon: RocketLaunchIcon, _features: [
      'Process Automation', _'Predictive Analytics', _'Continuous Optimization', _'Real-time Monitoring'
    ], _href: '/solutions/autonomous-business'},
  {_name: 'IT Asset Management', _description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.', _icon: ShieldCheckIcon, _features: [
      'Asset Discovery', _'Lifecycle Management', _'Security Compliance', _'Cost Optimization'
    ], _href: '/solutions/it-asset-management'}]

const _industryApplications = [
  {_name: 'Healthcare', _description: 'AI-powered diagnostics, _drug discovery, _and patient care optimization.', _icon: UserGroupIcon, _useCases: ['Medical Imaging Analysis', _'Drug Discovery', _'Patient Risk Assessment', _'Clinical Decision Support']},
  {_name: 'Finance', _description: 'Intelligent trading, _risk assessment, _and fraud detection systems.', _icon: ChartBarIcon, _useCases: ['Algorithmic Trading', _'Credit Risk Analysis', _'Fraud Detection', _'Portfolio Optimization']},
  {_name: 'Manufacturing', _description: 'Predictive maintenance, _quality control, _and supply chain optimization.', _icon: CogIcon, _useCases: ['Predictive Maintenance', _'Quality Control', _'Supply Chain Optimization', _'Production Planning']},
  {_name: 'Retail', _description: 'Customer behavior analysis, _inventory management, _and personalized marketing.', _icon: GlobeAltIcon, _useCases: ['Customer Analytics', _'Inventory Management', _'Personalized Marketing', _'Demand Forecasting']}]
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _implementationSteps = [
  {_step: '01', _title: 'Discovery & Assessment', _description: 'We analyze your current systems, _identify opportunities, _and develop a comprehensive AI strategy.', _icon: LightBulbIcon},
  {_step: '02', _title: 'Solution Design', _description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.', _icon: CpuChipIcon},
  {_step: '03', _title: 'Development & Testing', _description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.', _icon: CogIcon},
  {_step: '04', _title: 'Deployment & Training', _description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.', _icon: RocketLaunchIcon},
  {_step: '05', _title: 'Ongoing Support', _description: 'Continuous monitoring, _optimization, _and support to ensure your AI solution delivers lasting value.', _icon: ShieldCheckIcon}]

<<<<<<< HEAD
export default function SolutionsPage() {
  return (
    <div className=&quot;bg-black&quot;>
      {/* Hero section */}
      <div className=&quot;relative isolate px-6 pt-14 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl py-32 sm:py-48 lg:py-56&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl font-bold tracking-tight text-white sm:text-6xl&quot;>
              AI Solutions for{' '}
              <span className=&quot;bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent&quot;>
=======
export default function SolutionsPage() {_return (_<div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Solutions for{_' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Every Industry
              </span>
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
              Discover our cutting-edge AI and technology solutions designed to transform your business 
              operations and drive unprecedented growth and innovation.
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Flagship Solutions */}
      <div className=&quot;mx-auto max-w-7xl px-6 sm:px-6 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Our Solutions</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
      {_/* Flagship Solutions */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Flagship AI Platforms
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.
          </p>
        </div>
<<<<<<< HEAD
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2&quot;>
            {flagshipSolutions.map((solution) => (
              <div key={solution.name} className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-4&quot;>
                  <solution.icon className=&quot;h-8 w-8 text-blue-400&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white&quot;>{solution.name}</h3>
                </div>
                <p className=&quot;text-gray-300 mb-6&quot;>{solution.description}</p>
                <div className=&quot;space-y-3 mb-6&quot;>
                  {solution.features.map((feature) => (
                    <div key={feature} className=&quot;flex items-center gap-2&quot;>
                      <div className=&quot;h-2 w-2 bg-blue-400 rounded-full&quot;></div>
                      <span className=&quot;text-sm text-gray-300&quot;>{feature}</span>
=======
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {_flagshipSolutions.map((solution) => (_<div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{_solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{_solution.description}</p>
                <div className="space-y-3 mb-6">
                  {_solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))}
                </div>
                <a
<<<<<<< HEAD
                  href={solution.href}
                  className=&quot;text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200&quot;
=======
                  href={_solution.href}
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Learn more <span aria-hidden=&quot;true&quot;>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Industry Applications */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Industries</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
      {_/* Industry Applications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Transforming Every Sector
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our AI solutions are designed to adapt and excel across diverse industries, 
            delivering measurable results and competitive advantages.
          </p>
        </div>
<<<<<<< HEAD
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2&quot;>
            {industryApplications.map((industry) => (
              <div key={industry.name} className=&quot;flex flex-col group&quot;>
                <dt className=&quot;flex items-center gap-x-3 text-base font-semibold leading-7 text-white&quot;>
                  <industry.icon className=&quot;h-5 w-5 flex-none text-blue-400&quot; aria-hidden=&quot;true&quot; />
                  {industry.name}
                </dt>
                <dd className=&quot;mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300&quot;>
                  <p className=&quot;flex-auto mb-4&quot;>{industry.description}</p>
                  <div className=&quot;space-y-2&quot;>
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className=&quot;flex items-center gap-2&quot;>
                        <div className=&quot;h-1.5 w-1.5 bg-blue-400 rounded-full&quot;></div>
                        <span className=&quot;text-sm text-gray-400&quot;>{useCase}</span>
=======
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {_industryApplications.map(_(industry) => (_<div key={industry.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {_industry.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto mb-4">{_industry.description}</p>
                  <div className="space-y-2">
                    {_industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{_useCase}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

<<<<<<< HEAD
      {/* Implementation Process */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Implementation</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
      {_/* Implementation Process */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Our Proven Process
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            From initial assessment to ongoing optimization, we guide you through every step 
            of your AI transformation journey.
          </p>
        </div>
<<<<<<< HEAD
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5&quot;>
            {implementationSteps.map((step, index) => (
              <div key={step.step} className=&quot;relative&quot;>
                {index < implementationSteps.length - 1 && (
                  <div className=&quot;hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700&quot;></div>
=======
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
            {_implementationSteps.map(_(step, _index) => (
              <div key={step.step} className="relative">
                {_index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                )}
                <div className=&quot;bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>
                  <div className=&quot;mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4&quot;>
                    <step.icon className=&quot;h-8 w-8 text-blue-400&quot; />
                  </div>
<<<<<<< HEAD
                  <div className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>{step.step}</div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{step.title}</h3>
                  <p className=&quot;text-sm text-gray-300&quot;>{step.description}</p>
=======
                  <div className="text-sm font-semibold text-blue-400 mb-2">{_step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{_step.title}</h3>
                  <p className="text-sm text-gray-300">{_step.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA section */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
      {_/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Ready to transform your business?
          </h2>
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>
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