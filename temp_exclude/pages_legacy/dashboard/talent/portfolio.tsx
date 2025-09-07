<<<<<<< HEAD
import { GetServerSideProps } from 'next';
import React, { useRef, useState } from 'react';
import PdfExportButton from '../../../components/ui/PdfExportButton';
import ResumePreview, { ResumeData } from '../../../components/ui/ResumePreview';
import { createServerClient } from '../../../utils/supabase/server';
export default function TalentPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const ref = $2;
  const data: ResumeData = $2;
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country' },
    summary: 'AI talent focused on LLM apps and marketplaces.',
    skills: ['AITypeScriptNext.js'],
    technologies: ['OpenAISupabase'],
    experience: [{ title: 'AI Engineer', company: 'Zion', start: '2023', end: 'Present', bullets: ['Built resume exporter.'] }],
    education: [{ institution: 'University of Example', degree: 'B.Sc.', start: '2016', end: '2020' }],
    certifications: ['AWS SAA-C03'],
    portfolio: [{ title: 'Top Project', description: 'Showcase' }]},

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
          className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient($2);
  const user = $2;
  if (!user) {
    return { redirect: { destination: '/auth', permanent: false} } as any
  }
  return { props: {} }
},
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../../../components/layout/Layout';

export default function DashboardTalentPortfolio() {
  return (
    <Layout>
      <Head>
        <title>Dashboard Talent Portfolio - Zion Tech Group</title>
        <meta name="description" content="Dashboard Talent Portfolio solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard Talent Portfolio</h1>
          <p className="text-lg text-gray-600">
            Professional dashboard talent portfolio solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
