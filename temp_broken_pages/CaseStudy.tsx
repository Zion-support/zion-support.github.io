import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { CASE_STUDIES } from "@/data/case-studies";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    return (
<<<<<<< HEAD:temp_broken_pages/CaseStudy.tsx
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.
      </div>
    )
  }
  return (
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto max-w-3xl'>
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className='mb-4 text-sm text-muted-foreground'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/'>Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>                  <Link href="/case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">
                  <span>{study.title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/case-studies'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Button>
          <img
src = {study.companyLogo,}
            alt={`${study.company} logo`}
            className='h-12 mb-4'
            loading='lazy'
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
            <Button variant="secondary" className="mb-6" asChild>
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </Button>
          )}
          <div
className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt-8 text-white font-semibold">
          </p>
=======
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-xl mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee:src/pages/CaseStudy.tsx
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEO
        title={`${study.title} - Case Study | Zion AI`}
        description={study.excerpt}
        canonical={`https://app.ziontechgroup.com/case-studies/${study.slug}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/case-studies">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Button>
            </Link>
          </div>

          {/* Case study header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {study.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span>Client: {study.client}</span>
                <span>Industry: {study.industry}</span>
                <span>Duration: {study.duration}</span>
              </div>
            </div>
          </header>

          {/* Case study content */}
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: study.content }} />
          </article>

          {/* Results */}
          {study.results && (
            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {study.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {result.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {study.technologies && study.technologies.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}