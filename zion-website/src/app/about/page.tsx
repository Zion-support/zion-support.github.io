import {
  UserGroupIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const values = [
  {
    name: 'Innovation First',
    description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in AI and technology.',
    icon: LightBulbIcon
  },
  {
    name: 'Global Impact',
    description: 'Our solutions reach across borders, transforming industries and improving lives worldwide.',
    icon: GlobeAltIcon
  },
  {
    name: 'Trust & Security',
    description: 'We maintain the highest standards of security and ethical AI development.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Research Excellence',
    description: 'Our team of world-class researchers drives breakthrough discoveries and innovations.',
    icon: AcademicCapIcon
  }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former AI researcher at Stanford, leading Zion Tech Group\'s vision for the future of technology.',
    image: '/images/team/sarah-chen.jpg'
  },
  {
    name: 'Dr. Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Quantum computing expert with 15+ years of experience in advanced AI systems and machine learning.',
    image: '/images/team/marcus-rodriguez.jpg'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Head of Research',
    bio: 'Leading researcher in autonomous systems and AI ethics, published in top-tier journals worldwide.',
    image: '/images/team/priya-patel.jpg'
  },
  {
    name: 'James Wilson',
    role: 'Head of Engineering',
    bio: 'Full-stack engineer and AI architect with expertise in scalable systems and cloud infrastructure.',
    image: '/images/team/james-wilson.jpg'
  }
];

const stats = [
  { label: 'Years of Innovation', value: '15+' },
  { label: 'AI Solutions Delivered', value: '500+' },
  { label: 'Global Clients', value: '200+' },
  { label: 'Research Papers Published', value: '150+' }
];

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Pioneering the future of artificial intelligence and technology solutions
              that transform businesses and empower human potential.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leading the AI Revolution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Founded in 2008 by a team of visionary researchers and engineers, Zion Tech Group
            has been at the forefront of artificial intelligence innovation. What started as
            a small research lab has grown into a global technology powerhouse, delivering
            cutting-edge AI solutions that transform industries and improve lives.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">By the Numbers</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Impact
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

      {/* Values */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Drives Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our core values guide every decision we make and every solution we create.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <value.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the Experts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our diverse team of researchers, engineers, and visionaries work together
            to push the boundaries of what's possible with AI and technology.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col group">
                <div className="relative">
                  <img
                    className="aspect-[3/2] w-full rounded-2xl bg-gray-900 object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-base text-blue-400">{member.role}</p>
                  <p className="mt-4 text-base text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Empowering Human Potential
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We believe that artificial intelligence should augment human capabilities, not replace them.
            Our mission is to create AI solutions that empower people to achieve more, solve complex
            problems, and build a better future for all.
          </p>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Our Journey
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Ready to be part of the AI revolution? Let's work together to create
            solutions that transform your business and shape the future.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Careers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}