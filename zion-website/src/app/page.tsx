import { 
  LightBulbIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Research',
    description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.',
    icon: LightBulbIcon},
  {
    name: 'Quantum Computing',
    description: 'Next-generation quantum neural networks for solving complex computational problems.',
    icon: CpuChipIcon},
  {
    name: 'Global Solutions',
    description: 'Worldwide deployment of autonomous business operations and digital transformation.',
    icon: GlobeAltIcon},
  {
    name: 'Enterprise Security',
    description: 'Military-grade security protocols protecting your most valuable digital assets.',
    icon: ShieldCheckIcon},
  {
    name: 'Data Analytics',
    description: 'Advanced analytics and insights driving informed decision-making.',
    icon: ChartBarIcon},
  {
    name: 'Expert Team',
    description: 'World-class researchers and engineers pushing the boundaries of technology.',
    icon: UserGroupIcon}]

const stats = [
  { name: 'Research Papers Published', value: '150+' },
  { name: 'AI Models Deployed', value: '500+' },
  { name: 'Global Clients', value: '1000+' },
  { name: 'Patents Filed', value: '25+' }]

const solutions = [
  {
    name: 'AI Research Assistant',
    description: 'Autonomous research platform that accelerates scientific discovery.',
    href: '/solutions/ai-autonomous-research'},
  {
    name: 'Quantum Neural Networks',
    description: 'Next-generation computing for complex problem solving.',
    href: '/solutions/quantum-neural-networks'},
  {
    name: 'Autonomous Business Operations',
    description: 'AI-powered automation for enterprise efficiency.',
    href: '/solutions/autonomous-business'},
  {
    name: 'IT Asset Management',
    description: 'Intelligent management of digital infrastructure.',
    href: '/solutions/it-asset-management'}]

export default function HomePage() {
  return (
    <div className=&quot;bg-black&quot;>
      {/* Hero section */}
      <div className=&quot;relative isolate px-6 pt-14 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl py-32 sm:py-48 lg:py-56&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl font-bold tracking-tight text-white sm:text-6xl&quot;>
              Leading the Future of{' '}
              <span className=&quot;bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent&quot;>
                AI & Technology
              </span>
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions. 
              Join the revolution that's reshaping industries worldwide.
            </p>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <a
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105&quot;
              >
                Get Started
              </Link>
              <a href=&quot;/about&quot; className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200&quot;>
                Learn More <span aria-hidden=&quot;true&quot;>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Advanced Technology</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Everything you need to accelerate innovation
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results 
            and maintain competitive advantage in the digital age.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3&quot;>
            {features.map((feature) => (
              <div key={feature.name} className=&quot;flex flex-col group&quot;>
                <dt className=&quot;flex items-center gap-x-3 text-base font-semibold leading-7 text-white&quot;>
                  <feature.icon className=&quot;h-5 w-5 flex-none text-blue-400&quot; aria-hidden=&quot;true&quot; />
                  {feature.name}
                </dt>
                <dd className=&quot;mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300&quot;>
                  <p className=&quot;flex-auto&quot;>{feature.description}</p>
                  <p className=&quot;mt-6&quot;>
                    <a href=&quot;/solutions&quot; className=&quot;text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200&quot;>
                      Learn more <span aria-hidden=&quot;true&quot;>→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats section */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:max-w-none&quot;>
          <div className=&quot;text-center&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
              Trusted by leading organizations worldwide
            </h2>
            <p className=&quot;mt-4 text-lg leading-8 text-gray-300&quot;>
              Our track record speaks for itself
            </p>
          </div>
          <dl className=&quot;mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4&quot;>
            {stats.map((stat) => (
              <div key={stat.name} className=&quot;flex flex-col bg-white/5 p-8 backdrop-blur-sm&quot;>
                <dt className=&quot;text-sm font-semibold leading-6 text-gray-300&quot;>{stat.name}</dt>
                <dd className=&quot;order-first text-3xl font-bold tracking-tight text-white&quot;>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Solutions showcase */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Our Solutions</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Flagship AI and Technology Platforms
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Discover how our innovative solutions are transforming industries and driving unprecedented growth.
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2&quot;>
            {solutions.map((solution) => (
              <article
                key={solution.name}
                className=&quot;flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;
              >
                <div className=&quot;flex items-center gap-x-4 text-xs&quot;>
                  <time dateTime=&quot;2024&quot; className=&quot;text-gray-400&quot;>
                    2024
                  </time>
                  <span className=&quot;relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200&quot;>
                    AI Platform
                  </span>
                </div>
                <div className=&quot;group relative&quot;>
                  <h3 className=&quot;mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200&quot;>
                    <a href={solution.href}>
                      <span className=&quot;absolute inset-0&quot; />
                      {solution.name}
                    </Link>
                  </h3>
                  <p className=&quot;mt-5 line-clamp-3 text-sm leading-6 text-gray-300&quot;>{solution.description}</p>
                </div>
                <div className=&quot;relative mt-8 flex items-center gap-x-4&quot;>
                  <div className=&quot;text-sm leading-6&quot;>
                    <p className=&quot;font-semibold text-white&quot;>
                      <a href={solution.href} className=&quot;hover:text-blue-400 transition-colors duration-200&quot;>
                        <span className=&quot;absolute inset-0&quot; />
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Ready to transform your business?
          </h2>
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>
            Join the AI revolution and discover how our cutting-edge technology can accelerate your growth and innovation.
          </p>
          <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
            <a
              href=&quot;/contact&quot;
              className=&quot;rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105&quot;
            >
              Get Started
            </Link>
            <a href=&quot;/solutions&quot; className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200&quot;>
              View Solutions <span aria-hidden=&quot;true&quot;>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
