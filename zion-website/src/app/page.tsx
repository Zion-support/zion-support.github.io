import {_LightBulbIcon, _CpuChipIcon, _GlobeAltIcon, _ShieldCheckIcon, _ChartBarIcon, _UserGroupIcon} from '@heroicons/react/24/outline'

const _features = [
  {_name: 'AI-Powered Research', _description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', _icon: LightBulbIcon},
  {_name: 'Quantum Computing', _description: 'Next-generation quantum neural networks for solving complex computational problems.', _icon: CpuChipIcon},
  {_name: 'Global Solutions', _description: 'Worldwide deployment of autonomous business operations and digital transformation.', _icon: GlobeAltIcon},
  {_name: 'Enterprise Security', _description: 'Military-grade security protocols protecting your most valuable digital assets.', _icon: ShieldCheckIcon},
  {_name: 'Data Analytics', _description: 'Advanced analytics and insights driving informed decision-making.', _icon: ChartBarIcon},
  {_name: 'Expert Team', _description: 'World-class researchers and engineers pushing the boundaries of technology.', _icon: UserGroupIcon}]

const _stats = [
  {_name: 'Research Papers Published', _value: '150+'},
  {_name: 'AI Models Deployed', _value: '500+'},
  {_name: 'Global Clients', _value: '1000+'},
  {_name: 'Patents Filed', _value: '25+'}]

const _solutions = [
  {_name: 'AI Research Assistant', _description: 'Autonomous research platform that accelerates scientific discovery.', _href: '/solutions/ai-autonomous-research'},
  {_name: 'Quantum Neural Networks', _description: 'Next-generation computing for complex problem solving.', _href: '/solutions/quantum-neural-networks'},
  {_name: 'Autonomous Business Operations', _description: 'AI-powered automation for enterprise efficiency.', _href: '/solutions/autonomous-business'},
  {_name: 'IT Asset Management', _description: 'Intelligent management of digital infrastructure.', _href: '/solutions/it-asset-management'}]

export default function HomePage() {_return (_<div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{_' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge artificial intelligence, _quantum computing, _and autonomous solutions. 
              Join the revolution that's reshaping industries worldwide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Features section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to accelerate innovation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results 
            and maintain competitive advantage in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {_features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {_feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{_feature.description}</p>
                  <p className="mt-6">
                    <a href="/solutions" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {_/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Our track record speaks for itself
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {_stats.map(_(stat) => (
              <div key={stat.name} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{_stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{_stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {_/* Solutions showcase */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flagship AI and Technology Platforms
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how our innovative solutions are transforming industries and driving unprecedented growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {_solutions.map(_(solution) => (
              <article
                key={solution.name}
                className="flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-400">
                    2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                    AI Platform
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    <a href={_solution.href}>
                      <span className="absolute inset-0" />
                      {_solution.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{_solution.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={_solution.href} className="hover:text-blue-400 transition-colors duration-200">
                        <span className="absolute inset-0" />
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {_/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join the AI revolution and discover how our cutting-edge technology can accelerate your growth and innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
