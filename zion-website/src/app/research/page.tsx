import {
  {
    metric: 'Patents Filed'
    value: '25+'
    description: 'Intellectual property protecting our innovations'}
  {
  {
    name: 'Stanford University'
    location: 'Stanford, CA'
    focus: 'AI & Machine Learning'
    collaboration: 'Joint research programs and student exchanges'}
  {
    name: 'MIT'
    location: 'Cambridge, MA'
    focus: 'Quantum Computing & AI'
    collaboration: 'Shared research facilities and joint publications'}
  {
    name: 'University of Oxford'
    location: 'Oxford, UK'
    focus: 'AI Ethics & Governance'
    collaboration: 'Policy research and ethical AI development'}
  {
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl py - 32 sm:py - 48 lg:py - 56 & quot;>;
          <div className=&quot;text - center & quot;>;
            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white sm:text - 6xl & quot;>;
              Research &{' '}
              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>
      {/* Research Focus Areas */}
      <div className=&quot;mx-auto max-w-7xl px-6 sm:px-6 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Our Research</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Focus Areas
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our research spans the cutting edge of AI and technology, driving innovation
            and advancing the state of the art.          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Focus:</h4>
                <ul className="space-y-2">
                  {area.focus.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="text-blue-600 mr-3">•</span>
                      {item}
                    </li>
                  ))}
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Research &{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
              innovative discoveries, and academic collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Research Focus Areas */}

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {academicPartners.map((partner) => (
              <div key={partner.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-blue-400" />
                    {partner.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <LightBulbIcon className="h-5 w-5 text-blue-400" />
                    {partner.focus}
                  </p>
                  <p className="flex items-center gap-2">
                    <UserGroupIcon className="h-5 w-5 text-blue-400" />
                    {partner.collaboration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Join our research community
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Interested in collaborating on cutting-edge AI research? 
            Let's explore opportunities to work together.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='/contact'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105'
            >
              Get in Touch
            </a>
            <a href='/careers' className='text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200'>
              Research Careers <span aria-hidden='true'>→</span>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join our research community
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Interested in collaborating on cutting-edge AI research? 
            Let's explore opportunities to work together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Research Careers <span aria-hidden="true">→</span>
            </Link>
          </div>        </div>
      </div>
    </div>
  )
};

export default Page;