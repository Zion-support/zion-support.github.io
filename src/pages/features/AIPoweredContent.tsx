import React, { useEffect } from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useFeatureUsage } from '@/hooks/useFeatureUsage';
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus'; import Link from 'next/link'
import { useFeatureUsage } from "@/hooks/useFeatureUsage"
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus"
export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT'),
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Content Generation",
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility.",
    "url": "https://app.ziontechgroup.com/features/ai-content-generation"
  },

export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Content Generation',
    description:
      'Generate SEO-optimized content using ZionGPT to boost your online visibility.',
    url: 'https://app.ziontechgroup.com/features/ai-content-generation',
  }
  const { markAiExplored } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markAiExplored()
  }, [markAiExplored])
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
import { useFeatureUsage } from "@/hooks/useFeatureUsage";
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
export default function AIPoweredContent() {

  useFeatureUsage('ZionGPT')
  const schema = {
    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "AI Content Generation"
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility."
    "url": "https://app.ziontechgroup.com/features/ai-content-generation"
  }
export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT')
  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'AI Content Generation'
    description:
      'Generate SEO-optimized content using ZionGPT to boost your online visibility.'
    url: 'https://app.ziontechgroup.com/features/ai-content-generation'
  }
  const { markAiExplored } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markAiExplored()
  }, [markAiExplored])




;
}

            <li>;
    </>;
  );
}
;
