import React from 'react';
import Link from 'next/link';

export default function ArticlePage() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>Analytics • 9 min read • Sep 2025</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900'>
            Product Analytics 2025: From Dashboards to Decisions
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            A concise framework to turn product data into action: instrument once, model for clarity, and operationalize insights in your roadmap and rituals.
          </p>
        </header>

        <div className='prose prose-lg max-w-none'>
          <h2>The Signal Stack</h2>
          <ul>
            <li>Event hygiene: clear names, consistent properties, and governance.</li>
            <li>North-star metrics: activation, retention, expansion, and efficiency.</li>
            <li>Decision cadences: weekly funnel reviews and quarterly deep dives.</li>
          </ul>
          <h3>Instrumentation Checklist</h3>
          <ol>
            <li>Map jobs-to-be-done to events.</li>
            <li>Define success milestones and drop-off points.</li>
            <li>Wire alerts for regressions and cost anomalies.</li>
          </ol>
          <p>
            Analytics matters when it changes prioritization. Keep your model simple, automate reporting, and make the default next step obvious for the team.
          </p>
        </div>

        <footer className='mt-12 flex items-center justify-between'>
          <Link href='/blog' className='text-blue-600 hover:underline'>← Back to Blog</Link>
          <Link href='/contact' className='text-blue-600 hover:underline'>Work with us</Link>
        </footer>
      </article>
    </div>
  );
}

