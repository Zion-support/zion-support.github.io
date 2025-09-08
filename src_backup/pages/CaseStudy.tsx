import Link from 'next/link';
import { useRouter  } from 'next/router';
import { CASE_STUDIES  } from '@/data/case-studies';
import { SEO  } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Breadcrumb;
  BreadcrumbList;
  BreadcrumbItem;
  BreadcrumbLink;
  BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {
    return (
<div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
origin/cursor/automate-test-improve-and-merge-code-2533
  if (!study) {
    return (


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
                  <Link href='/'>Home</Link>
                </BreadcrumbLink>
origin/cursor/automate-test-improve-and-merge-code-2533
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<Link href='/case-studies'>Case Studies</Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<BreadcrumbLink asChild aria-current='page'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span>{study.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button
variant='outline'
            className='mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
            asChild
          >
            <Link href='/case-studies'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies
            </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
          </Button>
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
className='h-12 mb-4'
            loading='lazy'
          />
          <h1 className='text-3xl font-bold text-white mb-4'>{study.title}</h1>
          <p className='text-zion-slate-light mb-8'>{study.excerpt}</p>
          {study.pdf && (
            <Button variant='secondary' className='mb-6' asChild>
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Download PDF
              </Link>


            </Button>
          <div
className='prose prose-invert'
<<<<<<< HEAD
            dangerouslySetInnerHTML={ __html: study.content }
=======
            dangerouslySetInnerHTML={{ __html: study.content }}
>>>>>>> origin/resolved-merge-conflicts
          />
          <p className='mt-8 text-white font-semibold'>
            — {study.author}, {study.role}
          </p>
        </div>
      </div>
    </>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
}
