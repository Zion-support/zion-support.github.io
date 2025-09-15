import React from 'react'
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
    description:
      'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.',
    icon: LightBulbIcon
  },
  {
    name: 'Quantum Computing',
    description:
      'Next-generation quantum neural networks for solving complex computational problems.',
    icon: CpuChipIcon
  },
  {
    name: 'Global Solutions',
    description:
      'Worldwide deployment of autonomous business operations and digital transformation.',
    icon: GlobeAltIcon
  },
  {
    name: 'Enterprise Security',
    description:
      'Military-grade security protocols protecting your most valuable digital assets.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Data Analytics',
    description: 'Advanced analytics and insights driving informed decision-making.',
    icon: ChartBarIcon
  },
  {
    name: 'Expert Team',
    description:
      'World-class researchers and engineers pushing the boundaries of technology.',
    icon: UserGroupIcon
  }
]

const stats = [
  { name: 'Research Papers Published', value: '150+' },
  { name: 'AI Models Deployed', value: '500+' },
  { name: 'Global Clients', value: '1000+' },
  { name: 'Patents Filed', value: '25+' }
]

const solutions = [
  {
    name: 'AI Research Assistant',
    description: 'Autonomous research platform that accelerates scientific discovery.',
    href: '/solutions/ai-autonomous-research'
  },
  {
    name: 'Quantum Neural Networks',
    description: 'Next-generation computing for complex problem solving.',
    href: '/solutions/quantum-neural-networks'
  },
  {
    name: 'Autonomous Business Operations',
    description: 'AI-powered automation for enterprise efficiency.',
    href: '/solutions/autonomous-business'
  },
  {
    name: 'IT Asset Management',
    description: 'Intelligent management of digital infrastructure.',
    href: '/solutions/it-asset-management'
  }
]

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Leading the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge artificial intelligence, quantum computing, and autonomous solutions. 
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

      {/* What's New section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What's New</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Insights & Success Stories</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Fresh research, breakthrough case studies, and cutting-edge innovations from Zion Tech Group.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Quantum Neural Networks Revolution',
                summary:
                  'Discover how our latest quantum AI breakthrough is transforming enterprise applications and achieving 1000x speedup in complex problem solving.',
                href: '/blog/1',
                category: 'Research',
                featured: true
              },
              {
                title: 'Fortune 500 Financial Transformation',
                summary: 'See how we helped a leading investment bank achieve 40% cost reduction and $2.3B in additional revenue through autonomous AI systems.',
                href: '/case-studies/1',
                category: 'Case Study',
                featured: true
              },
              {
                title: 'Autonomous Business Operations Guide',
                summary: 'Learn about the next frontier in business automation and how AI-powered systems are revolutionizing enterprise operations.',
                href: '/blog/2',
                category: 'Innovation',
                featured: true
              }
            ].map((item) => (
              <article key={item.title} className={`flex flex-col items-start p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 relative ${
                item.featured ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30' : 'bg-white/5 hover:bg-white/10'
              }`}>
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  {item.category === 'Case Study' ? 'View Case Study' : 'Read more'} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Proven Results</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Client Success Stories</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Real results from leading organizations that have transformed their operations with our AI solutions.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                client: 'Fortune 500 Investment Bank',
                result: '40% Cost Reduction',
                description: 'Achieved through autonomous AI trading systems and quantum-enhanced risk modeling',
                metric: '$2.3B Additional Revenue'
              },
              {
                client: 'Leading Automotive Manufacturer',
                result: '60% Production Efficiency',
                description: 'Optimized smart factory operations with autonomous production management',
                metric: 'Zero Unplanned Downtime'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Success Story</div>
                    <div className="font-semibold text-white">{story.client}</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">{story.result}</div>
                <p className="text-gray-300 mb-4">{story.description}</p>
                <div className="text-lg font-semibold text-blue-400">{story.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
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
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
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

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by leading organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">Our track record speaks for itself</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-blue-500/30">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              🚀 Limited Time: Free AI Transformation Consultation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 mb-8">
              Get a personalized roadmap for implementing AI and autonomous systems in your organization. 
              <span className="text-blue-400 font-semibold"> No cost, no commitment.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm font-medium">30-minute consultation</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm font-medium">Custom AI roadmap</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm font-medium">ROI projections</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Book Free Consultation
              </a>
              <a href="/case-studies" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                View Success Stories <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join the AI revolution and discover how our cutting-edge technology can accelerate your growth and innovation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/solutions" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Solutions <span aria-hidden="true">→</span>
            </a>
            <a href="/blog" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Read Latest Insights <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

