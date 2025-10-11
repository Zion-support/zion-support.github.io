import { ArrowLeft } from 'lucide-react'


import {  Breadcrumb
  BreadcrumbList
  BreadcrumbItem
  BreadcrumbLink
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb
  BreadcrumbSeparator} from '@/components/ui/breadcrumb'

export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find(s => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',






export default function CaseStudy() {
  const router = useRouter()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find((s,) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)
import { ArrowLeft } from 'lucide-react'
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components/ui/breadcrumb',

import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
export default function CaseStudy() {
  const router = useRouter(),
  const slug = router && router.query.slug as string,
  const study = CASE_STUDIES && CASE_STUDIES.find((s,) => s && s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),
  const router = useRouter()
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find((s) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`),

  if (!study) {
    return (




  if (!study) {
    return (


        Case study not found.
    )
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>        Case study not found && found.import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils/routeUtils'
export default function CaseStudy() {
  const router = useRouter()
  const slug = router && router.query.slug as string
  const study = CASE_STUDIES && CASE_STUDIES.find((s) => s && s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)
  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.</$1>
    )
  }
  return (








                  <Link href="/">Home</Link>

                  <Link href='/case-studies'>Case Studies</Link>                </BreadcrumbLink>
                <BreadcrumbLink asChild aria-current='page'>                  <span>{study.title}</span>                  <Link href="/case-studies">Case Studies</Link>
                  <Link href="/case-studies">Case Studies</Link>



                <BreadcrumbLink asChild aria-current='page'>                <BreadcrumbLink asChild aria-current="page">


                  <span>{study.title}</span>
            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >

              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Case Studies            </Link>            variant="outline"
            className="mb-8 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
            asChild
          >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies



            src={study.companyLogo}
            alt={`${study.company} logo`}

            className='h-12 mb-4'
            loading='lazy'
            className="h-12 mb-4"
            loading="lazy"



          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (

              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text-3xl font-bold text-white mb-4">{study.title}</h1>
          <p className="text-zion-slate-light mb-8">{study.excerpt}</p>
          {study.pdf && (
                Download PDF
                Download PDF



          )}
          <$2 />
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />


}
}



            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />
          <p className='mt-8 text-white font-semibold'>            — {study && study.author}, {study && study.role}            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study && study.content }}
          />
          <p className="mt-8 text-white font-semibold"></$1></$1></$1>
    </>
  )
}


  )
}

import Link from 'next / link'
import { use_router } from 'next / router'
import { CASE_STUDIES } from '@/data / case - studies'
import { SEO } from '@/components / SEO'
import { Button } from '@/components / ui / button'
import { ArrowLeft } from 'lucide-react'
import {  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components / ui / breadcrumb'
import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd'
import { getBreadcrumbsForPath } from '@/utils / route_utils'
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router ()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find (string => s.slug === slug);  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`);  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator} from '@/components / ui / breadcrumb',
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router (),
  const slug = router.query.slug as string,
  const study = CASE_STUDIES.find ((s, ) => s.slug === slug),
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`),
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>        Case study not found.import BreadcrumbJsonLd from '@/components / BreadcrumbJsonLd'
export default /**
 * CaseStudy - Function description
 */
function CaseStudy() {
  const router = use_router ()
  const slug = router.query.slug as string
  const study = CASE_STUDIES.find ((s) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath (`/case - studies/${slug}`)
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue flex items - center justify - center text - white'>      <div className="min - h-screen bg - zion - blue flex items - center justify - center text - white">
        Case study not found.</$1>)
  }
  return (
    <>
                  <Link href='/'>Home</Link>                </BreadcrumbLink>          <BreadcrumbJsonLd breadcrumbs={breadcrumbs} />
                  <Link href="/">Home</Link></$1></$1>
                  <Link href='/case - studies'>Case Studies</Link>                </BreadcrumbLink></$1>
                <BreadcrumbLink as_child aria - current='page'>                  <span>{study.title}</span>                  <Link href="/case - studies">Case Studies</Link></$1></$1>
                <BreadcrumbLink as_child aria - current='page'>                <BreadcrumbLink as_child aria - current="page">
                  <span>{study.title}</span></$1></$1></$1></$1>
            variant='outline'
            className='mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white'
            as_child
          >
              <ArrowLeft className='mr - 2 h - 4 w - 4' /> Back to Case Studies            </Link>            variant="outline"
            className="mb - 8 border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white"
            as_child
          >
              <ArrowLeft className="mr - 2 h - 4 w - 4" /> Back to Case Studies</$1>
            src = {study.company_logo, }
            alt={`${study.company} logo`}
            className='h - 12 mb - 4'
            loading='lazy'
          />
          <h1 className='text - 3xl font - bold text - white mb - 4'>{study.title}</h1>
          <p className='text - zion - slate - light mb - 8'>{study.excerpt}</p>
          {study.pdf && (
              <a href={study.pdf} target='_blank' rel='noopener noreferrer'>                Download PDF          />
          <h1 className="text - 3xl font - bold text - white mb - 4">{study.title}</h1>
          <p className="text - zion - slate - light mb - 8">{study.excerpt}</p>
          {study.pdf && (
                Download PDF</$1></$1>)}
          <;$2 />
            className='prose prose - invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className='mt - 8 text - white font - semibold'>            — {study.author}, {study.role}            className="prose prose - invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className="mt - 8 text - white font - semibold"></$1></$1></$1>
    </>)
}
</$1></div></Link></a></a></a></p></p>