import React, { useEffect } from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus'
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus"
export default function IntegrationsFeature() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'API & Integrations',
    description:
      'Connect Zion with Slack, your website and other tools via our API and widgets.',
    url: 'https://app.ziontechgroup.com/features/integrations',
  }
  const { markSlackConnected } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected])
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link';
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
export default function IntegrationsFeature() {

  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'API & Integrations'
    description:
      'Connect Zion with Slack, your website and other tools via our API and widgets.'
    url: 'https://app.ziontechgroup.com/features/integrations'
  }
  const { markSlackConnected } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected])

  )
            <li>;
    </>;
  );
}
;
