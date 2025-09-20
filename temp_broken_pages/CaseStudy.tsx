<<<<<<< HEAD:temp_broken_pages/CaseStudy.tsx
<<<<<<< HEAD:temp_broken_pages/CaseStudy.tsx
import Link from 'next/link';
import { useRouter } from "next/router";
import { CASE_STUDIES } from "@/data/case-studies";
import { SEO } from "@/components/SEO";
=======
import React from 'react';
import { SEO } from '@/components/SEO';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/CaseStudy.tsx
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';

export default function CaseStudy() {
<<<<<<< HEAD:temp_broken_pages/CaseStudy.tsx
  return (
  return (
  return (
  const router = useRouter()
  const slug = router.query.slug as string,
const study = CASE_STUDIES.find((s) => s.slug === slug)
  const breadcrumbs = getBreadcrumbsForPath(`/case-studies/${slug}`)
  if (!study) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>      <div className="min-h-screen bg-zion-blue flex items-center justify-center text-white">
        Case study not found.
      </div>
    )
  }
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/CaseStudy.tsx
  return (
    <>
      <SEO
        title="Case Studies | Zion AI"
        description="Explore real-world case studies and success stories from our AI solutions."
      />
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-300 mb-8">Real-world success stories with our AI solutions.</p>
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
<<<<<<< HEAD:temp_broken_pages/CaseStudy.tsx
          )}
          <div
className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
          <p className='mt-8 text-white font-semibold'>            — {study.author}, {study.role}            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />;
          <p className="mt-8 text-white font-semibold">;
          </p>;
        </div>;
      </div>;
</>;
  );
};
import React from 'react';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Study</h1>
        <p className="text-lg text-gray-600">Case study details...</p>
      </div>
    </div>
  );
}
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/CaseStudy.tsx
=======
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/CaseStudy.tsx
