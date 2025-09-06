import { 
  UserGroupIcon,
  LightBulbIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const values = [
  {name: 'Innovation First', description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in AI and technology.', icon: LightBulbIcon},
  {name: 'Global Impact', description: 'Our solutions reach across borders, transforming industries and improving lives worldwide.', icon: GlobeAltIcon},
  {name: 'Trust & Security', description: 'We maintain the highest standards of security and ethical AI development.', icon: ShieldCheckIcon},
  {name: 'Research Excellence', description: 'Our team of world-class researchers drives breakthrough discoveries and innovations.', icon: AcademicCapIcon}
]

const team = [
  {name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', bio: 'Former AI researcher at Stanford, leading Zion Tech Group\'s vision for the future of technology.', image: '/images/team/sarah-chen.jpg'},
  {name: 'Dr. Marcus Rodriguez', role: 'Chief Technology Officer', bio: 'Quantum computing expert with 15+ years in advanced AI systems and neural network architecture.', image: '/images/team/marcus-rodriguez.jpg'},
  {name: 'Dr. Elena Petrov', role: 'Head of Research', bio: 'Leading researcher in autonomous systems and AI ethics, with publications in top-tier journals.', image: '/images/team/elena-petrov.jpg'},
  {name: 'James Kim', role: 'Chief Operations Officer', bio: 'Former Fortune 500 executive, specializing in scaling AI operations and enterprise deployment.', image: '/images/team/james-kim.jpg'}
]

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
              We are pioneers in artificial intelligence, quantum computing, and autonomous systems, 
              dedicated to transforming industries and advancing human potential through technology.
            </p>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Values
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{value.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person) => (
                <div key={person.name} className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gray-800 flex items-center justify-center">
                    <UserGroupIcon className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{person.name}</h3>
                  <p className="mt-2 text-base text-blue-400">{person.role}</p>
                  <p className="mt-2 text-sm text-gray-300">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}