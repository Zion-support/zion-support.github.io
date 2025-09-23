import type { NextPage } from 'next';
import Head from 'next/head';
import EnhancedLayout from '@/components/layout/EnhancedLayout';

const AutomationDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  let title = 'Automation Report';
  let data: any = null;

  try {
    if (slug === 'marketplace-insights') {
       
      data = require('@/data/reports/marketplace-insights.json');
      title = 'Marketplace Insights';
    } else if (slug === 'content-health') {
       
      data = require('@/data/reports/content-health.json');
      title = 'Content Health';
    }
  } catch (e) {
    data = null;
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>{title} - Zion Tech Solutions</title>
      </Head>
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      {!data ? (
        <div className="opacity-70">No report found.</div>
      ) : (
