<<<<<<< HEAD
import Image from "next/image";
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {

}
interface Speaker {
=======
<<<<<<< HEAD
import Image from "next/image";
import Image from "next/image";
import Image from 'next/image'
import { Twitter, Linkedin } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface Speaker {
  name: string
  title: string
  avatar: string
  twitter?: string
  linkedin?: string
  linkedin?: string
}
interface Speaker {
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
  name: string,
  title: string,
  avatar: string,
  twitter?: string
import Image from "next/image",
<<<<<<< HEAD
=======
import { Twitter, Linkedin } from 'lucide-react'
>>>>>>> merged-prs-20250907-203621

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
  linkedin?: string
}

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  name: string,
  title: string,
  avatar: string,
  twitter?: string

<<<<<<< HEAD
=======
import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'
>>>>>>> merged-prs-20250907-203621

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
<<<<<<< HEAD

  linkedin?: string
}

  name: string
=======
  linkedin?: string
}

import Image from "next/image",
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string,
}

>>>>>>> merged-prs-20250907-203621
  title: string
  avatar: string
  twitter?: string

  linkedin?: string
}
const speakers: Speaker[] = [
<<<<<<< HEAD
  {,
=======
<<<<<<< HEAD
  {

    name: 'Alex Zion'
    title: 'Founder & CEO'
    avatar: 'https://placehold.co/100x100'
    twitter: '#'
    linkedin: '#'
  }
]


import Image from 'next/image';
import { Twitter, Linkedin } from 'lucide-react';
interface Speaker {;
  name: string;
  title: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
  linkedin?: string;
}

interface Speaker {;
  name: string,;
  title: string,;
  avatar: string,;
  twitter?: string;
  linkedin?: string;
}

const speakers: Speaker[] = [;
  {;
    name: 'Alex Zion',;
    title: 'Founder & CEO',;
    avatar: 'https://placehold && placehold.co/100x100',;
    twitter: '#',;
    linkedin: '#',;
  },;
];

export function SpeakersSection() {;
  return (
    <section className='py-12 bg-zion-blue-dark text-white' id='speakers'>;
      <div className='container mx-auto px-4'>;
        <h2 className='text-3xl font-bold mb-8 text-center'>Speakers</h2>;
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>;
          {speakers && speakers.map(sp => (;
            <div key={sp && sp.name} className='text-center space-y-2'>              <Image    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">;
      <div className="container mx-auto px-4">;
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>;
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">;
          {speakers && speakers.map((sp,) => (;
            <div key={sp && sp.name} className="text-center space-y-2">;
                src={sp && sp.avatar}
                alt={sp && sp.name}
                width={96}
                height={96}
                className='rounded-full mx-auto';
                loading='lazy';
              <p className='font-semibold'>{sp && sp.name}</p>;
              <p className='text-sm opacity-80'>{sp && sp.title}</p>;
              <div className='flex justify-center gap-3 text-zion-cyan'>;
                {sp && sp.twitter && (;
                  <a
                    href={sp && sp.twitter}
                    aria-label='Twitter'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                    href = {sp && sp.twitter,}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center">;
                    <Twitter className='h-4 w-4' aria-hidden='true' />;
                    <span className='sr-only'>Twitter</span>                  </a>                    <Twitter className="h-4 w-4" aria-hidden="true" />;
                    <span className="sr-only">Twitter</span>;
                  </a>;

import Image from "next/image";
import { Twitter, Linkedin } from 'lucide-react'

interface Speaker {
  name: string,
  title: string,
  avatar: string,
  twitter?: string;

>>>>>>> merged-prs-20250907-203621
    name: 'Alex Zion',
    title: 'Founder & CEO',
    avatar: 'https://placehold.co/100x100',
    twitter: '#',
<<<<<<< HEAD
    linkedin: '#'}],

export function SpeakersSection() {
  return (
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">,
          {speakers.map((sp) => (,
            <div key={sp.name} className="text-center space-y-2">
              <Image
=======
    linkedin: '#',
  },
]
    linkedin: '#'}],






export function SpeakersSection() {
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (
            <div key={sp.name} className="text-center space-y-2">

              <Image
import Image from "next/image",;
import { Twitter, Linkedin } from 'lucide-react';
interface Speaker {;
  name: string,;
  title: string,;
  avatar: string,;
  twitter?: string,;
  linkedin?: string;
}
;
const speakers: Speaker[] = [;
  {;
    name: 'Alex Zion',;
    title: 'Founder & CEO',;
    avatar: 'https://placehold.co/100x100',;
    twitter: '#',;
    linkedin: '#'}];
export function SpeakersSection() {;
  return (;
    <section className="py-12 bg-zion-blue-dark text-white" id="speakers">;
      <div className="container mx-auto px-4">;
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>;
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">;
          {speakers.map((sp) => (;
            <div key={sp.name} className="text-center space-y-2">;
              <Image;
>>>>>>> merged-prs-20250907-203621
                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}
<<<<<<< HEAD
=======
                alt={sp.name}
                width={96}
                height={96}
                className='rounded-full mx-auto'
                loading='lazy'
              <p className='font-semibold'>{sp.name}</p>
              <p className='text-sm opacity-80'>{sp.title}</p>
              <div className='flex justify-center gap-3 text-zion-cyan'>
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    aria-label='Twitter'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                    href = {sp.twitter,}

                src={sp.avatar}
                alt={sp.name}
                width={96}
                height={96}



>>>>>>> merged-prs-20250907-203621
                className="rounded-full mx-auto"
                loading="lazy"
              />
              <p className="font-semibold">{sp.name}</p>
              <p className="text-sm opacity-80">{sp.title}</p>
              <div className="flex justify-center gap-3 text-zion-cyan">
<<<<<<< HEAD
=======
                className='rounded - full mx - auto';
                loading='lazy';
              <p className='font - semibold'>{sp.name}</p>;
              <p className='text - sm opacity - 80'>{sp.title}</p>;
              <div className='flex justify - center gap - 3 text - zion - cyan'>;
>>>>>>> merged-prs-20250907-203621
                {sp.twitter && (
                  <a
                    href={sp.twitter}
                    aria-label="Twitter"
<<<<<<< HEAD
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Twitter className="h-4 w-4" aria-hidden="true" />
=======
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Twitter className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>Twitter</span>                  </a>                    <Twitter className="h-4 w-4" aria-hidden="true" />
>>>>>>> merged-prs-20250907-203621
                    <span className="sr-only">Twitter</span>
                  </a>
                )}
                {sp.linkedin && (
                  <a
                    href={sp.linkedin}
<<<<<<< HEAD
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
=======
                    aria-label='LinkedIn'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center'
                  >
                    <Linkedin className='h-4 w-4' aria-hidden='true' />
                    <span className='sr-only'>LinkedIn</span>                  </a>                    aria-label="LinkedIn"
                    href={sp.linkedin}
                    aria-label="LinkedIn"

                    <Twitter className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
                {sp.linkedin && (;
                  <a;
                    href={sp.linkedin}
                    aria-label="LinkedIn"


                    target="_blank"
>>>>>>> merged-prs-20250907-203621
                    className="flex items-center"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
<<<<<<< HEAD
                  </a>
=======

                  </Link>


>>>>>>> merged-prs-20250907-203621
                )}
              </div>
            </div>
          ))}
<<<<<<< HEAD
        </div>
      </div>
    </section>
  )
}
;
=======

              </div>
            </div>
          ))}
        </div>
      </div>;
    </section>;
  );
};
}
ursor/fix-website-loading-errors-and-merge-6662
                  </Link>
                  </Link>
                )}
              </div>
            </div>
          ))}


        </div>
      </div>;
    </section>;
  );
};
}
        </div>;
      </div>;
    </section>;
  );
}
;
;
=======
  {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
