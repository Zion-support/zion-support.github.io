<<<<<<< HEAD:temp_broken_pages_all/Tutorial.tsx
import Link from 'next/link';
import { useRouter } from "next/router";
import { TUTORIALS } from "@/data/tutorials";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Tutorial as TutorialType } from "@/types/tutorial";
interface TutorialPageProps {
  
  tutorial?: TutorialType,
export default function Tutorial({
  tutorial: initialTutorial;
}
}
}: TutorialPageProps) {const router = useRouter();
  const slug = router.query.slug as string | undefined,;
const tutorial = initialTutorial |TUTORIALS.find(t => t.slug === slug);interface TutorialPageProps {
  
  tutorial?: TutorialType}
export default function Tutorial() {
  return (
  return (
  return (
if (!tutorial) {
    return (
      <div className='min-h-screen bg-zion-blue flex items-center justify-center text-white'>
        Tutorial not found.
      </div>
    )
  }
  return (
    <>
      <SEO 
        title="Tutorial - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Tutorial</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
</>
  )
import React from 'react';

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tutorial</h1>
        <p className="text-lg text-gray-600">Learn how to use our platform...</p>
      </div>
    </div>
  );
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Tutorial.tsx
}