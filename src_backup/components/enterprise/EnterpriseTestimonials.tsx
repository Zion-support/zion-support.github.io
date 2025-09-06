<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
import {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
  CarouselPrevious} from "@/components/ui/carousel";
"
        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.","
    author: "Elena Rodriguez","
    title: "CTO","
    company: "FutureTech Systems","
    image: "/placeholder.svg"}],

<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
=======
  Carousel
  CarouselContent
  CarouselItem
  CarouselNext
  CarouselPrevious
} from '@/components/ui/carousel'
const testimonials = [
  {
    quote:
      "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing."
    author: 'Sarah Johnson'
    title: 'VP of Talent Acquisition'
    company: 'TechGlobal Inc.'
    image: '/placeholder.svg'
  }
  {
    quote:
      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.'
    author: 'Michael Chen'
    title: 'Director of HR'
    company: 'InnovateCorp'
    image: '/placeholder.svg'
  }
  {
    quote:
      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.'
    author: 'Elena Rodriguez'
    title: 'CTO'
    company: 'FutureTech Systems'
    image: '/placeholder.svg'
  }
]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function EnterpriseTestimonials() {
  return (
    <section id='testimonials' className='py-20 px-4 md:px-6'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Trusted by Leading Companies
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            See how enterprise teams are transforming their hiring process
          </p>
        </div>export function EnterpriseTestimonials() {
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
  CarouselPrevious} from "@/components/ui/carousel";

        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],


import React from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,;
} from '@/components/ui/carousel';

import React from "react";
import { Quote } from 'lucide-react'
import {
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            See how enterprise teams are transforming their hiring process
          </p>
        </div>

<Carousel className='w-full'>
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
export function EnterpriseTestimonials() {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
=======
export function EnterpriseTestimonials() {}
  return ("
    <section id="testimonials" className="py-20 px-4 md:px-6">"
      <div className="container mx-auto max-w-6xl">"
        <div className="text-center mb-12">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Trusted by Leading Companies;
          </h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process;
          </p>
        </div>'
        <Carousel className='w-full'>
          <CarouselContent>
            {testimonials.map((testimonial, index) => ('
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>'
                <div className='bg-card rounded-xl p-8 border border-border h-full'>'
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />'
                  <blockquote className='text-xl mb-6 italic'>
            {testimonials.map((testimonial, index,) => ("
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">"
                <div className="bg-card rounded-xl p-8 border border-border h-full">"
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />"
                  <blockquote className="text-xl mb-6 italic">"
                    "{testimonial.quote}"
                  </blockquote>'
                  <div className='flex items-center gap-4'>'
                    <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
                      <img
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
=======
                      <img;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
            <CarouselNext />
          </div>
        </Carousel>
      </div>;
    </section>;
  )
};
}

                      />
                    </div>
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
                    <div>
                      <p className='font-bold'>{testimonial.author}</p>

<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
=======
                    <div>'
                      <p className='font-bold'>{testimonial.author}</p>'
                      <p className='text-sm text-muted-foreground'>                        {testimonial.title}, {testimonial.company}
"
import React from "react",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
import { Quote } from 'lucide-react'
import {}
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,"
  CarouselPrevious} from "@/components/ui/carousel",

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
const testimonials = [
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  {
    quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",
    author: "Sarah Johnson",
    title: "VP of Talent Acquisition",
    company: "TechGlobal Inc.",
=======
const testimonials = []
  {'"
    quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.","
    author: "Sarah Johnson","
    title: "VP of Talent Acquisition","
    company: "TechGlobal Inc.","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
    image: "/placeholder.svg"},
  {"
    quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.","
    author: "Michael Chen","
    title: "Director of HR","
    company: "InnovateCorp","
    image: "/placeholder.svg"},
  {"
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.","
    author: "Elena Rodriguez","
    title: "CTO","
    company: "FutureTech Systems",
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
    image: "/placeholder.svg"}],
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

    image: "/placeholder.svg"}];

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx

export function EnterpriseTestimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
=======
";
    image: "/placeholder.svg"}];

export function EnterpriseTestimonials() {}
  return ("
    <section id="testimonials" className="py-20 px-4 md:px-6">"
      <div className="container mx-auto max-w-6xl">"
        <div className="text-center mb-12">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Trusted by Leading Companies;
          </h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process;
          </p>
        </div>

<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
import React from "react",;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx

import React from 'react';
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
=======
"
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
"
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">"
                <div className="bg-card rounded-xl p-8 border border-border h-full">"
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />"
                  <blockquote className="text-xl mb-6 italic">"
                    "{testimonial.quote}"
                  </blockquote>

'
import React from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
import { Quote } from 'lucide-react';
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  CarouselPrevious} from "@/components/ui/carousel",;
=======
  CarouselPrevious,;
=======
  CarouselPrevious,;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
} from '@/components/ui/carousel';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
const testimonials = [;
  {;
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
    quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;
    author: "Sarah Johnson",;
    title: "VP of Talent Acquisition",;
    company: "TechGlobal Inc.",;
    image: "/placeholder.svg"},;
  {;
    quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",;
    author: "Michael Chen",;
    title: "Director of HR",;
    company: "InnovateCorp",;
    image: "/placeholder.svg"},;
  {;
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",;
    author: "Elena Rodriguez",;
    title: "CTO",;
    company: "FutureTech Systems",;
    image: "/placeholder.svg"}];
export function EnterpriseTestimonials() {;
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
  return (;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  return (

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
    <section id="testimonials" className="py-20 px-4 md:px-6">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Trusted by Leading Companies;
          </h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        <Carousel className='w-full'>;
          <CarouselContent>;
            {testimonials && testimonials.map((testimonial, index) => (;
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;
                <div className='bg-card rounded-xl p-8 border border-border h-full'>;
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />;
                  <blockquote className='text-xl mb-6 italic'>;
            {testimonials && testimonials.map((testimonial, index,) => (;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
=======
    quote:;'"
      "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;'
    author: 'Sarah Johnson',;'
    title: 'VP of Talent Acquisition',;'
    company: 'TechGlobal Inc.',;'
    image: '/placeholder && placeholder.svg',;
  },;
  {;
    quote:;'
      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.',;'
    author: 'Michael Chen',;'
    title: 'Director of HR',;'
    company: 'InnovateCorp',;'
    image: '/placeholder && placeholder.svg',;
  },;
  {;
    quote:;'
      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.',;'
    author: 'Elena Rodriguez',;'
    title: 'CTO',;'
    company: 'FutureTech Systems',;'
    image: '/placeholder && placeholder.svg',;
  },;
];

export function EnterpriseTestimonials() { return null; }
    image: "/placeholder && placeholder.svg"}],;
export function EnterpriseTestimonials() { return null; }
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;'
                <div className='bg-card rounded-xl p-8 border border-border h-full'>;'
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />;'
                  <blockquote className='text-xl mb-6 italic'>;
            {testimonials && testimonials.map((testimonial, index,) => (;"
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;"
                <div className="bg-card rounded-xl p-8 border border-border h-full">;"
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;"
                  <blockquote className="text-xl mb-6 italic">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
                    "{testimonial && testimonial.quote}";
                  </blockquote>;'
                  <div className='flex items-center gap-4'>;'
                    <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>;
                      <img;
                        src={testimonial && testimonial.image}
                        alt={testimonial && testimonial.author}'
                        className='h-full w-full object-cover''
                        loading='lazy'                      />;
                    </div>;
                    <div>;'
                      <p className='font-bold'>{testimonial && testimonial.author}</p>;'"
                      <p className='text-sm text-muted-foreground'>                        {testimonial && testimonial.title}, {testimonial && testimonial.company}                      <p className="font-bold">{testimonial && testimonial.author}</p>;"
                      <p className="text-sm text-muted-foreground">;
                        {testimonial && testimonial.title}, {testimonial && testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </CarouselItem>;
            ))}


<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
                      <p className='text-sm text-muted-foreground'>
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
<div className='flex justify-center gap-2 mt-8'>
            <CarouselPrevious />
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
            <CarouselNext />
=======
                      <p className="text-sm text-muted-foreground">;            <CarouselNext />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </div>
        </Carousel>
      </div>
    </section>
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx

          </CarouselContent>;'"
          <div className='flex justify-center gap-2 mt-8'>            <CarouselPrevious />          <div className="flex justify-center gap-2 mt-8">;'
import React from 'react';'
import { Quote } from 'lucide-react';
import {}
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,';
} from '@/components / ui / carousel';
const testimonials = [;
  {}
    quote:;'"
      "Implementing Zion's Enterprise solution has reduced our time - to - hire by 40% and significantly improved the quality of candidates we're seeing.",'
    author: 'Sarah Johnson','
    title: 'VP of Talent Acquisition','
    company: 'TechGlobal Inc.','
    image: '/placeholder.svg',
  },
  {}
    quote:;'
      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.','
    author: 'Michael Chen','
    title: 'Director of HR','
    company: 'InnovateCorp','
    image: '/placeholder.svg',
  },
  {}
    quote:;'
      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.','
    author: 'Elena Rodriguez','
    title: 'CTO','
    company: 'FutureTech Systems','
    image: '/placeholder.svg',
  },
];
export /**;
 * EnterpriseTestimonials - Function description;
 */
function EnterpriseTestimonials() {}
  return ('
    <section id='testimonials' className='py - 20 px - 4 md:px - 6'>;'
      <div className='container mx - auto max - w-6xl'>;'
        <div className='text - center mb - 12'>;'
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;
            Trusted by Leading Companies;
          </h2>;'
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;'"
        <Carousel className='w - full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.","
    author: "Elena Rodriguez","
    title: "CTO","
    company: "FutureTech Systems","
    image: "/placeholder.svg"}],
export /**;
 * EnterpriseTestimonials - Function description;
 */
function EnterpriseTestimonials() {}
  return ("
    <section id="testimonials" className="py - 20 px - 4 md:px - 6">;"
      <div className="container mx - auto max - w-6xl">;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;
            Trusted by Leading Companies;
          </h2>;"
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;'
        <Carousel className='w - full'>;
          <CarouselContent>;
            {testimonials.map ((testimonial, index) => ('
              <CarouselItem key={index} className='md:basis - 1/1 lg:basis - 1/1'>;'
                <div className='bg - card rounded - xl p - 8 border border - border h - full'>;'
                  <Quote className='h - 10 w - 10 text - primary / 20 mb - 4' />;'
                  <blockquote className='text - xl mb - 6 italic'>;
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
            {testimonials.map ((testimonial, index, ) => (
              <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;
                <div className="bg - card rounded - xl p - 8 border border - border h - full">;
                  <Quote className="h - 10 w - 10 text - primary / 20 mb - 4" />;
                  <blockquote className="text - xl mb - 6 italic">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    "{testimonial.quote}";
                  </blockquote>;
                  <div className="flex items-center gap-4">;
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">;
                      <img;
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover";
                        loading="lazy";
                      />;
                    </div>;
                    <div>;
                      <p className="font-bold">{testimonial.author}</p>;
                      <p className="text-sm text-muted-foreground">;
=======
            {testimonials.map ((testimonial, index, ) => ("
              <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;"
                <div className="bg - card rounded - xl p - 8 border border - border h - full">;"
                  <Quote className="h - 10 w - 10 text - primary / 20 mb - 4" />;"
                  <blockquote className="text - xl mb - 6 italic">;"
                    "{testimonial.quote}";
                  </blockquote>;'
                  <div className='flex items - center gap - 4'>;'
                    <div className='h - 12 w - 12 rounded - full overflow - hidden bg - muted'>;
                      <img;
                        src={testimonial.image}
                        alt={testimonial.author}'
                        className='h - full w - full object - cover';'
                        loading='lazy'                      />;
                    </div>;
                    <div>;'
                      <p className='font - bold'>{testimonial.author}</p>;'"
                      <p className='text - sm text - muted - foreground'>                        {testimonial.title}, {testimonial.company}                      <p className="font - bold">{testimonial.author}</p>;"
                      <p className="text - sm text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
                        {testimonial.title}, {testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
              </CarouselItem>;
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
=======
              </CarouselItem>))}
          </CarouselContent>;'"
          <div className='flex justify - center gap - 2 mt - 8'>            <CarouselPrevious />          <div className="flex justify - center gap - 2 mt - 8">;

            <CarouselPrevious />;
            <CarouselNext />;
          </div>;
        </Carousel>;
      </div>;


  );
}
    </section>);
}

}
<<<<<<< HEAD:src_backup/components/enterprise/EnterpriseTestimonials.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD:src/components/enterprise/EnterpriseTestimonials.tsx
<<<<<<< HEAD
=======
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/EnterpriseTestimonials.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/enterprise/EnterpriseTestimonials.tsx
