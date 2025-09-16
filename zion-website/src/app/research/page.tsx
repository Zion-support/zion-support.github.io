]

const researchImpact = [
  { metric: 'Research Papers Published', value: '150+', description: 'Peer-reviewed publications in top-tier journals and conferences' },
  { metric: 'Citations', value: '10,000+', description: 'Academic citations demonstrating research influence' },
  { metric: 'Patents Filed', value: '25+', description: 'Intellectual property protecting our innovations' },
  { metric: 'Research Collaborations', value: '50+', description: 'Partnerships with leading academic institutions' },
]

const academicPartners = [
  { name: 'Stanford University', location: 'Stanford, CA', focus: 'AI & Machine Learning', collaboration: 'Joint research programs and student exchanges' },
  { name: 'MIT', location: 'Cambridge, MA', focus: 'Quantum Computing & AI', collaboration: 'Shared research facilities and joint publications' },
  { name: 'University of Oxford', location: 'Oxford, UK', focus: 'AI Ethics & Governance', collaboration: 'Policy research and ethical AI development' },
  { name: 'University of Tokyo', location: 'Tokyo, Japan', focus: 'Robotics & Autonomous Systems', collaboration: 'Robotic learning and human-robot interaction' },
]

export default function ResearchPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Research &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Innovation</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Research</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Focus Areas</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <area.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Publications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Recent Research</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {recentPublications.map((publication) => (
              <div key={publication.title} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-2 mb-4">
                  <span className="text-sm text-gray-400">{publication.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{publication.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{publication.authors}</p>
                <p className="text-sm text-gray-400 mb-3">{publication.journal}</p>
                <p className="text-sm text-gray-300 mb-4">{publication.abstract}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Research Influence</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {researchImpact.map((item) => (
              <div key={item.metric} className="flex flex-col bg-white/5 p-8 backdrop-blur-sm">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{item.metric}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">{item.value}</dd>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Collaborations</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Academic Partnerships</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {academicPartners.map((partner) => (
              <div key={partner.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our research community</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Interested in collaborating on cutting-edge AI research? Let's explore opportunities to work together.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get in Touch</a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Research Careers <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}
