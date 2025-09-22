:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

  const [ open, setOpen ] = useState(false),;

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
  const [ open, set_open ] = useState (false),
  return (
    <nav className='sticky top - 16 z - 40 bg - card border - b border - border'>;
      <div className='container mx - auto px - 4 md:px - 6'>;
        <div className='flex items - center justify - between h - 12'>;
          <button;
            className='md:hidden p - 2 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary';
            on_click={() => set_open (!open)}
            aria - label='Toggle navigation';
            aria - expanded={open}          >;
            <Menu className='h - 6 w - 6' />;
          </button>;
          <ul;
            className={`${open ? 'flex' : 'hidden'} flex - col gap - 4 md:flex md:flex - row md:gap - 8 w - full md:w - auto`}
          >;
            <li>;
              <Link;
                href='#features';
                className='text - sm font - medium hover:text - primary';
              >;

                Features;
              </Link>;
            </li>;
            <li>;

              <Link;
                href='#pricing';
                className='text - sm font - medium hover:text - primary';
              >;

                Pricing;
              </Link>;
            </li>;
            <li>;

              <Link;
                href='#testimonials';
                className='text - sm font - medium hover:text - primary';
              >;

                Testimonials;
              </Link>;
            </li>;
            <li>;

import { useState } from "react";
import { Menu } from 'lucide-react'
import Link from "next/link";

import Link from "next/link";
  return (
    <nav className='sticky top-16 z-40 bg-card border-b border-border'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-12'>
          <button
            className='md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            onClick={() => setOpen(!open)}
            aria-label='Toggle navigation'
            aria-expanded={open}          >
            <Menu className='h-6 w-6' />
          </button>
          <ul
            className={`${open ? 'flex' : 'hidden'} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}
          >
            <li>
              <Link
                href='#features'
                className='text-sm font-medium hover:text-primary'
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href='#pricing'
                className='text-sm font-medium hover:text-primary'
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href='#testimonials'
                className='text-sm font-medium hover:text-primary'
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                className='text-sm font-medium hover:text-primary'
              >
                Contact Us
              </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
export function EnterpriseStickyNav() {
                className='text-sm font-medium hover:text-primary'>;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);

<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),
:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
<<<<<<< HEAD
          >
            <Menu className="h-6 w-6" />
          </button>
          <ul className={`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>
            <li>
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>
            </li>
            <li>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
            </li>
<li>
=======

  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button

            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation";
            aria-expanded={open}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
=======
            <li>              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </li>
          </ul>
        </div>
      </div>
:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </nav>
  )
import { useState } from "react",;
import { Menu } from 'lucide-react';
import Link from "next/link",;
export function EnterpriseStickyNav() {;
  const [open, setOpen] = useState(false);
  return (;
    <nav className="sticky top-16 z-40 bg-card border-b border-border">;
      <div className="container mx-auto px-4 md:px-6">;
        <div className="flex items-center justify-between h-12">;
          <button;
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation";
aria-expanded={open}

    </nav>
:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >;
            <Menu className="h-6 w-6" />;
          </button>;
          <ul className={`${open ? "flex" : "hidden"} flex-col gap-4 md:flex md:flex-row md:gap-8 w-full md:w-auto`}>;
            <li>;
              <Link href="#features" className="text-sm font-medium hover: text-primary">Features</Link>;
            </li>;
            <li>;
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>;
            </li>;
            <li>;
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>;
            </li>;
            <li>;
<Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;

<Link;
                href='#contact';
                className='text - sm font - medium hover:text - primary';
              >;
                Contact Us;
              </Link>            </li>;
              <Link href="#contact" className="text - sm font - medium hover:text - primary">Contact Us</Link>;
export /**
 * EnterpriseStickyNav - Function description
 */
function EnterpriseStickyNav() {
  const [open, set_open] = useState (false);
  return (
    <nav className="sticky top - 16 z - 40 bg - card border - b border - border">;
      <div className="container mx - auto px - 4 md:px - 6">;
        <div className="flex items - center justify - between h - 12">;
          <button;
            className="md:hidden p - 2 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary";
            on_click={() => set_open (!open)}
            aria - label="Toggle navigation";
            aria - expanded={open}
          >;
            <Menu className="h - 6 w - 6" />;
          </button>;
          <ul className={`${open ? "flex" : "hidden"} flex - col gap - 4 md:flex md:flex - row md:gap - 8 w - full md:w - auto`}>;
            <li>;
              <Link href="#features" className="text - sm font - medium hover: text - primary">Features</Link>;
            </li>;
            <li>;
              <Link href="#pricing" className="text - sm font - medium hover:text - primary">Pricing</Link>;
            </li>;
            <li>;
              <Link href="#testimonials" className="text - sm font - medium hover:text - primary">Testimonials</Link>;
            </li>;
            <li>;
              <Link href="#contact" className="text - sm font - medium hover:text - primary">Contact Us</Link>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </li>;
          </ul>;
        </div>;
      </div>;
:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
    </nav>;
  );
}
;

  );
}
    </nav>);
}
:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx
