<<<<<<< HEAD
import { useEffect, useState } from 'react';
export default function Reports() {
  const [uptime, setUptime] = useState<any[]>([]),
  const [seo, setSeo] = useState<any>({}),
  const [links, setLinks] = useState<any>({}),
  const [deps, setDeps] = useState<any>({}),
  const [changelog, setChangelog] = useState<any>({}),
  const [pagespeed, setPagespeed] = useState<any>({}),

  useEffect(() => {
    Promise.all([
      fetch('/api/reports/uptime').then((r) => r.json()).then($2);
      fetch('/api/reports/seo').then((r) => r.json()).then($2);
      fetch('/api/reports/links').then((r) => r.json()).then($2);
      fetch('/api/reports/deps').then((r) => r.json()).then($2);
      fetch('/api/reports/changelog').then((r) => r.json()).then($2);
      fetch('/api/reports/pagespeed').then((r) => r.json()).then(setPagespeed)
    ]).catch(() => {})
  }, []),

  const lastUptime = $2;
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Automation Reports</h1>
        <div className="text-sm text-gray-500">Autonomously generated and synced</div>
      </div>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <div className="font-medium mb-1">Uptime</div>
          {lastUptime ? (
            <div className="text-sm">Last check: {new Date(lastUptime.timestamp).toLocaleString()} — {lastUptime.results?.filter((r: any)=>r.status>=200&&r.status<400).length}/{lastUptime.results?.length} ok</div>
          ) : (
            <div className="text-sm text-gray-500">No data</div>
          )}
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">SEO (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {seo?.results?.length || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">Broken Links (weekly)</div>
          <div className="text-sm text-gray-600">Broken: {links?.broken?.length || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">Dependencies (weekly)</div>
          <div className="text-sm text-gray-600">Checked: {deps?.entries?.length || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">Changelog (weekly)</div>
          <div className="text-sm text-gray-600">Commits: {changelog?.totalCommits || 0}</div>
        </div>

        <div className="border rounded p-4">
          <div className="font-medium mb-1">PageSpeed (weekly)</div>
          <div className="text-sm text-gray-600">Pages: {pagespeed?.results?.length || 0}</div>
        </div>
      </section>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Index - Zion Tech Group</title>
        <meta name="description" content="Index solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Index</h1>
          <p className="text-lg text-gray-600">
            Professional index solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}