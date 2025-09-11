import React from 'react';



const values = [
  {
    name: 'Innovation First'
    description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in AI and technology.'
    icon: LightBulbIcon}
const values = [
  {
const values = [
  {
    name: 'Innovation First',
    description: 'We push the boundaries of what's possible, constantly exploring new frontiers in AI and technology.',
    icon: LightBulbIcon},
  {
    name: 'Global Impact'
    description: 'Our solutions reach across borders, transforming industries and improving lives worldwide.'
    icon: GlobeAltIcon}
  {
    name: 'Trust & Security'
    description: 'We maintain the highest standards of security and ethical AI development.'
    icon: ShieldCheckIcon}
  {

    name: 'Research Excellence',
    description: 'Our team of world - class researchers drives breakthrough discoveries and innovations.',
    icon: AcademicCapIcon}];
const team = [;
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former AI researcher at Stanford, leading Zion Tech Group's vision for the future of technology.',
    image: '/images / team / sarah - chen.jpg'},
  {
    name: 'Dr. Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Quantum computing expert with 15+ years in advanced AI systems and neural network architecture.',
    image: '/images / team / marcus - rodriguez.jpg'},
  {
    name: 'Dr. Elena Petrov',
    role: 'Head of Research',
    bio: 'Leading researcher in autonomous systems and AI ethics, with publications in top - tier journals.',
    image: '/images / team / elena - petrov.jpg'},
  {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl text - center & quot;>;
          <h2 className=&quot;text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Join us in shaping the future;
          </h2>;
          <p className=&quot;mx - auto mt - 6 max - w-xl text - lg leading - 8 text - gray - 300 & quot;>;
            Ready to be part of the AI revolution? Let's discuss how we can work together to;
            transform your organization.;
          </p>;
          <div className=&quot;mt - 10 flex items - center justify - center gap - x-6 & quot;>;
            <a;
              href=&quot;/contact & quot;
              className=&quot;rounded - md bg - blue - 600 px - 3.5 py - 2.5 text - sm font - semibold text - white shadow - sm hover:bg - blue - 500 focus - visible:outline focus - visible:outline - 2 focus - visible:outline - offset - 2 focus - visible:outline - blue - 600 transition - all duration - 200 hover:scale - 105 & quot;
            >;
              Get in Touch;
            </Link>;
            <a href=&quot;/careers & quot; className=&quot;text - sm font - semibold leading - 6 text - white hover:text - blue - 400 transition - colors duration - 200 & quot;>;
              View Careers <span aria - hidden=&quot;true & quot;>→</span>;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Leadership</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Leadership</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet Our Team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            World-class researchers, engineers, and business leaders driving innovation at Zion Tech Group.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {team.map((person) => (
            <article key={person.name} className="flex flex-col items-start group">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-900 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                        <UserGroupIcon className="h-6 w-6 text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-400">Team Member</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm text-blue-400">{person.role}</p>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{person.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>;
      </div>;
      {/* CTA section */}
<<<<<<< HEAD
<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Join us in shaping the future
          </h2>
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>
            Ready to be part of the AI revolution? Let's discuss how we can work together to
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join us in shaping the future
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Ready to be part of the AI revolution? Let's discuss how we can work together to 
            transform your organization.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </Link>
            <a href="/careers" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Careers <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
