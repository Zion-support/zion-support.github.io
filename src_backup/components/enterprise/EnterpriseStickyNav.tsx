<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx
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

<<<<<<< HEAD

<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx
import { useState } from "react",
import { Menu } from 'lucide-react'
import Link from "next/link",
export function EnterpriseStickyNav() {
  const [open, setOpen] = useState(false),
<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <nav className="sticky top-16 z-40 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-12">
          <button
<<<<<<< HEAD
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
<<<<<<< HEAD
          >
            <Menu className="h-6 w-6" />
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
            <li>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  return (

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </nav>
  )
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
            aria-expanded={open}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx



    </nav>
<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          >;
=======
            aria-expanded={open}          >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx

<<<<<<< HEAD
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

<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx
            </li>;
          </ul>;
        </div>;
      </div>;
<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </nav>;
  );
}
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseStickyNav.tsx


  );
}
    </nav>);
}
<<<<<<< HEAD:src/components/enterprise/EnterpriseStickyNav.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact Us</Link>;            </li>;
          </ul>;
        </div>;
      </div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
