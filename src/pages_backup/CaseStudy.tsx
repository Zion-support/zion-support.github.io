import { ArrowLeft } from 'lucide-react';';
import {  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';';';
export default function CaseStudy() {;
const router = useRouter();
const slug = router.query.slug as string;
const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator} from '@/components/ui/breadcrumb';';
export default function CaseStudy() {;
const router = useRouter();
const slug = router.query.slug as string;
const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',;';
export default function CaseStudy() {;
const router = useRouter();
const slug = router.query.slug as string;
const study = CASE_STUDIES.find((s,) => s.slug === slug);
const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);
import { ArrowLeft } from 'lucide-react';';
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';'
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';';
import { getBreadcrumbsForPath } from '@/utils/routeUtils';';';
export default function CaseStudy() {;
const router = useRouter(),;
const slug = router && router.query.slug as string,;
const study = CASE_STUDIES && CASE_STUDIES.find((s,) => s && s.slug === slug),;
const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),;
const router = useRouter();
const slug = router.query.slug as string,;
const study = CASE_STUDIES.find((s) => s.slug === slug),;
const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),

  if (!study) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white"min-h-screen bg-zion-blue flex items-center justify-center text-white"
        Case study not found.</$1>
    )
  }
  return (
  // TODO: Add parameters
)
          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
<Breadcrumb className="
<BreadcrumbList>
<BreadcrumbItem>
<BreadcrumbLink asChild>
<Link href="/"
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
<BreadcrumbLink asChild>
<Link href='/case-studies'>Case Studies</Link></BreadcrumbLink>'
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
<BreadcrumbLink asChild aria-current='page'>'
<span>{study.title}</span>
<Link href="/case-studies"
<Link href="/case-studies"
</BreadcrumbItem>
<BreadcrumbSeparator />
<BreadcrumbItem>
<BreadcrumbLink asChild aria-current='page'>'
<BreadcrumbLink asChild aria-current="page"
<BreadcrumbLink asChild aria-current="page"
<span>{study.title}</span></BreadcrumbLink>
</BreadcrumbItem></BreadcrumbList>
</Breadcrumb>
<Button
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"outline"'"mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
<Link href=">"
<ArrowLeft className="
            <Link href="/case-studies"
<ArrowLeft className="mr-2 h-4 w-4"h-12 mb-4"
            loading=""

          />
<h1 className="
<p className="text-zion-slate-light mb-8"text-3 xl font-bold text-white mb-4"
<p className="
          {study.pdf && (
  // TODO: Add parameters
)
            <Button variant="secondary"mb-6"
<a href={study.pdf} target=" rel="noopener noreferrer"
                Download PDF
              </a>
<Button variant="secondary"mb-6"
<a href={study.pdf} target=" rel="noopener noreferrer"
                Download PDF
              </Link></Button>
          )}
          <$2 />
            className="prose prose-invert"prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study && study.content }
          />
<p className="
</$1></$1>
</>
  )
}

  )
}
;
import Link from 'next / link';';
import { use_router } from 'next / router';';
import { CASE_STUDIES } from '@/data / case - studies';';
import { SEO } from '@/components / SEO';';
import { Button } from '@/components / ui / button';';
import { ArrowLeft } from 'lucide-react';';
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components / ui / breadcrumb'';
import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd';';
import { getBreadcrumbsForPath } from '@/utils / route_utils';';';
export default /**;
 * CaseStudy - Function description
 */
function CaseStudy() {;
const router = use_router ();
const slug = router.query.slug as string;
const study = CASE_STUDIES.find (string => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components / ui / breadcrumb',;';
export default /**;
 * CaseStudy - Function description
 */
function CaseStudy() {;
const router = use_router (),;
const slug = router.query.slug as string,;
const study = CASE_STUDIES.find ((s, ) => s.slug === slug),;
const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`),
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    return (
  // TODO: Add parameters
)
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>        Case study not found.import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd';';';
export default /**;
 * CaseStudy - Function description
 */
function CaseStudy() {;
const router = use_router ();
const slug = router.query.slug as string;
const study = CASE_STUDIES.find ((s) => s.slug === slug);
const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`)
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    return (
  // TODO: Add parameters
)
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>'
<div className="min - h-screen bg - zion - blue flex items - center justify - center text - white"mb - 4 text - sm text - muted - foreground"
<BreadcrumbList>
<BreadcrumbItem>
<BreadcrumbLink as_child>
<Link href=">Home</Link></$1>"
</$1>
<BreadcrumbSeparator />
<BreadcrumbItem>
<BreadcrumbLink as_child>
<Link href='/case - studies'>Case Studies</Link></BreadcrumbLink>'
</$1>
<BreadcrumbSeparator />
<BreadcrumbItem>
<BreadcrumbLink as_child aria - current='page'>'
<span>{study.title}</span>
<Link href=">Case Studies</Link></$1>"
</$1>
<BreadcrumbSeparator />
<BreadcrumbItem>
<BreadcrumbLink as_child aria - current='page'>'
<BreadcrumbLink as_child aria - current=">"
<span>{study.title}</span></$1>
</$1></$1>
</$1>
<Button
            variant='outline''
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white''
            as_child
          >
<Link href='/case - studies'>'
<ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Case Studies            </Link>            variant="'"
            className="
            as_child
          >
<Link href="/case - studies"
<ArrowLeft className="mr - 2 h - 4 w - 4"text - 3 xl font - bold text - white mb - 4"
<p className="
          {study.pdf && (
  // TODO: Add parameters
)
            <Button variant="secondary"mb - 6"
<a href={study.pdf} target=" rel="noopener noreferrer"
                Download PDF</$1></$1>)}
          <;$2 />
            className='prose prose - invert''
            dangerouslySetInnerHTML={{ __html: study.content }
          />
<p className='mt - 8 text - white font - semibold'>            — {study.author}, {study.role}            className="prose prose - invert"mt - 8 text - white font - semibold"
</$1></$1>
</>)
}
</$1></div>
</Link></a>
</a></a>
</p></p>
}}}})))