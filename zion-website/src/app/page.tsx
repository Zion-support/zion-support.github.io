import {
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Research',
    description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.',
    icon: LightBulbIcon
  },
  {
    name: 'Quantum Computing',
    description: 'Next-generation quantum neural networks for solving complex computational problems.',
    icon: CpuChipIcon
  },
  {
    name: 'Global Solutions',
    description: 'Worldwide deployment of autonomous business operations and digital transformation.',
    icon: GlobeAltIcon
  },
  {
    name: 'Enterprise Security',
    description: 'Military-grade security protocols protecting your most valuable digital assets.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Data Analytics',
    description: 'Advanced analytics and insights that drive informed decision-making and growth.',
    icon: ChartBarIcon
  },
  {
    name: 'Expert Team',
    description: 'World-class researchers and engineers with decades of combined experience.',
    icon: UserGroupIcon
  }
];

const stats = [
  { label: 'Years of Innovation', value: '15+' },
  { label: 'AI Solutions Delivered', value: '500+' },
  { label: 'Global Clients', value: '200+' },
  { label: 'Research Papers Published', value: '150+' }
];

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our entire AI infrastructure. Their quantum neural networks increased our processing speed by 1000x.',
    avatar: '/images/testimonials/sarah-johnson.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, InnovateLab',
    content: 'The autonomous business operations platform revolutionized our workflow. We\'ve seen 300% improvement in efficiency.',
    avatar: '/images/testimonials/michael-chen.jpg'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director, AI Institute',
    content: 'Their research collaboration has been invaluable. We\'ve published 15 papers together in top-tier journals.',
    avatar: '/images/testimonials/emily-rodriguez.jpg'
  }
];

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pioneering artificial intelligence solutions that transform businesses,
              accelerate research, and empower human potential across the globe.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/solutions"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Explore Solutions
              </a>
              <a href="/research" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
                View Research <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cutting-Edge AI Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We deliver comprehensive AI solutions that push the boundaries of what's possible,
            from quantum computing to autonomous systems.
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
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            By the Numbers
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Client Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hear from industry leaders who have transformed their businesses with our AI solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-4 mb-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-900 object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join hundreds of organizations already using our AI solutions to drive
            innovation, efficiency, and growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get Started Today
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}