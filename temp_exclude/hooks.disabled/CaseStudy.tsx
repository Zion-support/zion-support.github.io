<<<<<<< HEAD
import Link from 'next/link',
import { useRouter } from 'next/router',
import { CASE_STUDIES } from '@/data/case-studies',
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',
import { ArrowLeft } from 'lucide-react'
import {
=======
import { ArrowLeft } from 'lucide-react'


;
export default function CaseStudy() { return null; }
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,'
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',


export default function CaseStudy() {}
  const router = useRouter();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find((s,) => s.slug === slug)`
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)'
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,;
  BreadcrumbList,;
  BreadcrumbItem,;
  BreadcrumbLink,;
  BreadcrumbSeparator,;'
} from '@/components/ui/breadcrumb';'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';'
import { getBreadcrumbsForPath } from '@/utils/routeUtils';


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,'
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',
<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd',
import { getBreadcrumbsForPath } from '@/utils/routeUtils',
export default function CaseStudy() {
  const router = useRouter(),
=======
'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';'
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() { return null; }`
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),;


  const router = useRouter();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug),`
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),

  if (!study) {}
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx
        Case study not found.
      </div>
    )
=======

  if (!study) {}
    return (


        Case study not found.
      </div>
    )'
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found && found.import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';'
import { getBreadcrumbsForPath } from '@/utils/routeUtils';
export default function CaseStudy() { return null; }`
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);

  if (!study) {;
    return ('"
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">;
        Case study not found.;
      </div>;
    );
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
  }

  return (
<<<<<<< HEAD
    <>
      <SEO title={study.title} description={study.excerpt} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
=======


<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
=======
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
          <Breadcrumb className="mb-4 text-sm text-muted-foreground">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
<<<<<<< HEAD
=======

<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
                  <Link href="/case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
<<<<<<< HEAD
=======

<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
                <BreadcrumbLink asChild aria-current="page">
                  <span>{study.title}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button"
            variant="outline""
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild;
          >
<<<<<<< HEAD
=======

<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
=======
"
            <Link href="/case-studies">"
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
            </Link>
          </Button>
          <img;
            src={study.companyLogo}`
            alt={`${study.company} logo`}
<<<<<<< HEAD
=======

<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className="h-12 mb-4"
            loading="lazy"
          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
=======
"
            className="h-12 mb-4""
            loading="lazy"


          />"
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
<<<<<<< HEAD
=======

<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Button variant="secondary" className="mb-6" asChild>
=======
"
            <Button variant="secondary" className="mb-6" asChild>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">
                Download PDF;
              </Link>
            </Button>
          )}
          <div"
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
<<<<<<< HEAD
          <p className="mt-8 text-white font-semibold">
            — {study.author}, {study.role}
=======


}
}


            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;'"
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert";
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />;"
          <p className="mt-8 text-white font-semibold">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </p>;
        </div>;
      </div>;
    </>;
  );
}
<<<<<<< HEAD
=======

  );
}
'
import Link from 'next / link';'
import { use_router } from 'next / router';'
import { CASE_STUDIES } from '@/data / case - studies';'
import { SEO } from '@/components / SEO';'
import { Button } from '@/components / ui / button';'
import { ArrowLeft } from 'lucide-react';
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,';
} from '@/components / ui / breadcrumb';'
import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd';'
import { getBreadcrumbsForPath } from '@/utils / route_utils';
export default /**;
 * CaseStudy - Function description;
 */
function CaseStudy() {}
  const router = use_router ();
  const slug = router.query.slug as string;`
  const study = CASE_STUDIES.find (string => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,'
  BreadcrumbSeparator} from '@/components / ui / breadcrumb',
export default /**;
 * CaseStudy - Function description;
 */
function CaseStudy() {}
  const router = use_router (),
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find ((s, ) => s.slug === slug),`
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`),
  // Check condition;
if ( {) {}
  $2;
}
    return ('
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>        Case study not found.import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd';
export default /**;
 * CaseStudy - Function description;
 */
function CaseStudy() {}
  const router = use_router ();
  const slug = router.query.slug as string;
  const study = CASE_STUDIES.find ((s) => s.slug === slug);`
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);
  // Check condition;
if ( {) {}
  $2;
}
    return ('"
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>      <div className="min - h-screen bg - zion - blue flex items - center justify - center text - white">;
        Case study not found.;
      </div>);
  }
  return (
    <>;
      <SEO title={study.title} description={study.excerpt} />;'
      <div className='min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4'>;'
        <div className='container mx - auto max - w-3xl'>;
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />;'
          <Breadcrumb className='mb - 4 text - sm text - muted - foreground'>;
            <BreadcrumbList>;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;'
                  <Link href='/'>Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />;"
          <Breadcrumb className="mb - 4 text - sm text - muted - foreground">;
            <BreadcrumbList>;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;"
                  <Link href="/">Home</Link>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;
                <BreadcrumbLink as_child>;'
                  <Link href='/case - studies'>Case Studies</Link>                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;'"
                <BreadcrumbLink as_child aria - current='page'>                  <span>{study.title}</span>                  <Link href="/case - studies">Case Studies</Link>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
              <BreadcrumbSeparator />;
              <BreadcrumbItem>;'"
                <BreadcrumbLink as_child aria - current='page'>                <BreadcrumbLink as_child aria - current="page">;
                  <span>{study.title}</span>;
                </BreadcrumbLink>;
              </BreadcrumbItem>;
            </BreadcrumbList>;
          </Breadcrumb>;
          <Button;'
            variant='outline';'
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
            as_child;
          >;'
            <Link href='/case - studies'>;'"
              <ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Case Studies            </Link>            variant="outline";"
            className="mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
            as_child;
          >;"
            <Link href="/case - studies">;"
              <ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Case Studies;
          </Button>;
          <img;
            src = {study.company_logo, }`
            alt={`${study.company} logo`}'
            className='h - 12 mb - 4';'
            loading='lazy';
          />;'
          <h1 className='text - 3xl font - bold text - white mb - 4'>{study.title}</h1>;'
          <p className='text - zion - slate - light mb - 8'>{study.excerpt}</p>;
          {study.pdf && ('
            <Button variant='secondary' className='mb - 6' as_child>;'
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />;"
          <h1 className="text - 3xl font - bold text - white mb - 4">{study.title}</h1>;"
          <p className="text - zion - slate - light mb - 8">{study.excerpt}</p>;
          {study.pdf && ("
            <Button variant="secondary" className="mb - 6" as_child>;"
              <a href={study.pdf} target="_blank" rel="noopener noreferrer">;
                Download PDF;
              </a>;
            </Button>)}
          <div;'
            className='prose prose - invert';
            dangerouslySetInnerHTML={{ __html: study.content }}
          />;'"
          <p className='mt - 8 text - white font - semibold'>            — {study.author}, {study.role}            className="prose prose - invert";
            dangerouslySetInnerHTML={{ __html: study.content }}
          />;"
          <p className="mt - 8 text - white font - semibold">;
          </p>;
        </div>;
      </div>;
    </>);
}
<<<<<<< HEAD:temp_exclude/hooks.disabled/CaseStudy.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/pages/CaseStudy.tsx
