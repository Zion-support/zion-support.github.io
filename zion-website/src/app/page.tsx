// @ts-nocheck,
import { getLatestUpdates } from '@/data/updates',
import { ChartBarIcon, CpuChipIcon, GlobeAltIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline',
const features = [,
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon ,};
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon ,};
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon ,};
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon ,};
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving informed decision-making.', icon: ChartBarIcon ,};
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing the boundaries of technology.', icon: UserGroupIcon ,}
],
const stats = [,
  { name: 'Research Papers Published', value: '150+' ,};
  { name: 'AI Models Deployed', value: '500+' ,};
  { name: 'Global Clients', value: '1,000+' };
  { name: 'Patents Filed', value: '25+' ,}
],
const solutions = [,
  { name: 'AI Research Assistant', description: 'Autonomous research platform that accelerates scientific discovery.', href: '/solutions/ai-autonomous-research' ,};
  { name: 'Quantum Neural Networks', description: 'Next-generation computing for complex problem solving.', href: '/solutions/quantum-neural-networks' ,};
  { name: 'Autonomous Business Operations', description: 'AI-powered automation for enterprise efficiency.', href: '/solutions/autonomous-business' ,};
  { name: 'IT Asset Management', description: 'Intelligent management of digital infrastructure.', href: '/solutions/it-asset-management' ,}
],
export default function HomePage() {,
  const latest = getLatestUpdates(6),
  const structuredData = {,
    "@context": "https://schema.org";
    "@type": "Organization";
    "name": "Zion Tech Group";
    "url": "https://zion.app";
    "logo": "https://zion.app/logo.png";
    "description": "Leading AI and Technology Solutions for Enterprise Innovation";
    "foundingDate": "2020";
    "contactPoint": {,
      "@type": "ContactPoint";
      "contactType": "customer service";
      "url": "https: //zion.app/contact",};
    "sameAs": [,
      "https://twitter.com/ziontech";
      "https: //linkedin.com/company/zion-tech-group",
    ];
    "offers": {,
      "@type": "Offer";
      "category": "AI and Technology Services";
      "description": "Cutting-edge AI, quantum computing, and autonomous solutions",
    }
  }
,
  return (,
    <div className="bg-black min-h-screen">,
      {/* Promo banner for fresh content */}
      <div className="mx-auto max-w-7xl px-6 pt-6">,
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm: p-5 text-center">,
          <p className="text-sm sm:text-base font-semibold text-blue-200">,
            New: Agent Rollback Patterns —,
            <a href="/blog/ai-2026-agent-rollback-patterns" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read</a>,
            <span className="mx-2 text-blue-300/60">|</span>,
            Real‑Time Model Routing Playbook —,
            <a href="/updates/real-time-model-routing-playbook-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">blueprint</a>,
            <span className="mx-2 text-blue-300/60">|</span>,
            Real‑Time Retrieval Architectures —,
            <a href="/updates/real-time-retrieval-architectures-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">guide</a>,
          </p>,
        </div>,
      </div>,
      {/* Hero section */,}
      <div className="relative isolate overflow-hidden pt-14">,
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm: -top-80" aria-hidden="true">,
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />,
        </div>,
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">,
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">,
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">,
              Announcing our next wave of AI innovations.{' ',}
              <a href="/blog" className="font-semibold text-white">,
                <span className="absolute inset-0" aria-hidden="true" />,
                Read more <span aria-hidden="true">&rarr,</span>,
              </a>,
            </div>,
          </div>,
          <div className="text-center">,
            <h1 className="text-4xl font-bold tracking-tight text-white sm: text-6xl">,
              Revolutionary AI & Technology Solutions,
            </h1>,
            <p className="mt-6 text-lg leading-8 text-gray-300">,
              Leading the next generation of artificial intelligence, quantum computing, and autonomous systems.,
              Transform your business with cutting-edge technology solutions.,
            </p>,
            <div className="mt-10 flex items-center justify-center gap-x-6">,
              <a,
                href="/solutions",
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover: bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
              >,
                Explore Solutions,
              </a>,
              <a href="/about" className="text-sm font-semibold leading-6 text-white">,
                Learn more <span aria-hidden="true">→</span>,
              </a>,
            </div>,
          </div>,
        </div>,
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">,
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />,
        </div>,
      </div>,
      {/* Stats section */,}
      <div className="py-24 sm: py-32">,
        <div className="mx-auto max-w-7xl px-6 lg:px-8">,
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">,
            {stats.map((stat) => (,
              <div key={stat.name,} className="mx-auto flex max-w-xs flex-col gap-y-4">,
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>,
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm: text-5xl">,
                  {stat.value,}
                </dd>,
              </div>,
            ))}
          </dl>,
        </div>,
      </div>,
      {/* Features section */}
      <div className="py-24 sm: py-32">,
        <div className="mx-auto max-w-7xl px-6 lg:px-8">,
          <div className="mx-auto max-w-2xl lg:text-center">,
            <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced Technology</h2>,
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">,
              Everything you need to succeed,
            </p>,
            <p className="mt-6 text-lg leading-8 text-gray-300">,
              Our comprehensive suite of AI and technology solutions is designed to accelerate your business transformation and drive unprecedented growth.,
            </p>,
          </div>,
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">,
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">,
              {features.map((feature) => (,
                <div key={feature.name,} className="flex flex-col">,
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">,
                    <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />,
                    {feature.name}
                  </dt>,
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">,
                    <p className="flex-auto">{feature.description}</p>,
                  </dd>,
                </div>,
              ))}
            </dl>,
          </div>,
        </div>,
      </div>,
      {/* Solutions section */}
      <div className="py-24 sm: py-32">,
        <div className="mx-auto max-w-7xl px-6 lg:px-8">,
          <div className="mx-auto max-w-2xl lg:text-center">,
            <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>,
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">,
              Cutting-edge technology for modern challenges,
            </p>,
          </div>,
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">,
            {solutions.map((solution) => (,
              <div key={solution.name,} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 xl: p-10">,
                <h3 className="text-xl font-semibold leading-8 text-white">{solution.name,}</h3>,
                <p className="mt-4 text-base leading-7 text-gray-300">{solution.description}</p>,
                <a,
                  href={solution.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold leading-6 text-blue-400 hover: text-blue-300",
                >,
                  Learn more <span aria-hidden="true">→</span>,
                </a>,
              </div>,
            )),}
          </div>,
        </div>,
      </div>,
      {/* Latest updates section */}
      <div className="py-24 sm: py-32">,
        <div className="mx-auto max-w-7xl px-6 lg:px-8">,
          <div className="mx-auto max-w-2xl lg:text-center">,
            <h2 className="text-base font-semibold leading-7 text-blue-400">Latest Updates</h2>,
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">,
              Stay ahead with our latest innovations,
            </p>,
          </div>,
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">,
            {latest.map((update) => (,
              <article key={update.id,} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 xl: p-10">,
                <div className="flex items-center gap-x-4 text-xs">,
                  <time dateTime={update.date,} className="text-gray-400">,
                    {update.date}
                  </time>,
                  <span className="relative z-10 rounded-full bg-blue-500/10 px-3 py-1.5 font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">,
                    {update.category}
                  </span>,
                </div>,
                <div className="group relative">,
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">,
                    <a href={update.href}>,
                      <span className="absolute inset-0" />,
                      {update.title}
                    </a>,
                  </h3>,
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{update.description}</p>,
                </div>,
              </article>,
            ))}
          </div>,
        </div>,
      </div>,
    </div>,
  ),
}