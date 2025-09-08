  UserGroupIcon
  LightBulbIcon
  GlobeAltIcon
  ShieldCheckIcon
  AcademicCapIcon
  RocketLaunchIcon
} from '@heroicons/react/24/outline'


import React from 'react';'
<<<<<<< HEAD
        <div className=&quot;mx - auto max - w-2xl py - 32 "sm":py - 48 "lg":py - 56 & quot>

          <div className=&quot;text - center & quot>

            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white "sm": text - 6xl & quot>

              About{' ,'
}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">;"
                Zion Tech Group;
              </span>;
            </h1>;
              dedicated to transforming industries and advancing human potential through technology.;
            </p>;
          </div>;
        </div>;
      </div>;
      {/* Mission & Vision */}

            Mission & Vision
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-x-3 mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
              </div>

              <p className="text-gray-300">
                To accelerate human progress through cutting-edge AI and technology solutions that solve 

                the world's most complex challenges while maintaining the highest ethical standards.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-x-3 mb-4">
                <LightBulbIcon className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Our Vision</h3>
              </div>

              <p className="text-gray-300">
                A future where AI and technology seamlessly enhance human capabilities, creating a more 

                intelligent, efficient, and sustainable world for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Company Story */}
              accelerate their growth.
            </p>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {/* Values */}
      <div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>What Drives Us</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Our Core Values;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {values.map ((value) => (
              <div key={value.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <value.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {value.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto & quot;>{value.description}</p>;
                </dd>;
              </div>))}

          </dl>;
        </div>;
      </div>;
      {/* Leadership Team */}

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
  )
}

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

<div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Zion Tech Group
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Leading the future of technology with innovative solutions and cutting-edge research.
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
            </Link>          </div>
        </div>
      </div>
    </div>
  )
};

export default Page;
=======
>>>>>>> f056e1038c528e7c7990a21cd793614976bb5152
