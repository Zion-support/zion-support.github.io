<<<<<<< HEAD
import React from 'react'
import { updates } from '@/data/updates'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.href.split('/').pop() }))
}

export async function generateMetadata({ params }: PageProps) {
  const update = updates.find((u) => u.href.endsWith(params.slug))
  if (!update) return { title: 'Update not found' }
  return {
    title: `${update.title} | Zion Tech Group`,
    description: update.summary,
  }
}

export default function UpdateDetailPage({ params }: PageProps) {
  const update = updates.find((u) => u.href.endsWith(params.slug))

  if (!update) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Update not found</h1>
        <p className="mt-4 text-gray-300">The requested update does not exist.</p>
=======
'use client'

import { updates } from '@/data/updates'

interface PageParams {
  params: { slug: string }
}

export default function UpdateDetailPage({ params }: PageParams) {
  const { slug } = params
  const item = updates.find((u) => u.href.replace('/updates/', '') === slug)

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Update not found</h1>
        <p className="mt-4 text-gray-300">We couldn't find the update you were looking for.</p>
        <a href="/updates" className="mt-8 inline-block text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
          Back to updates →
        </a>
>>>>>>> origin/feat/updates-and-fixes
      </div>
    )
  }

  return (
<<<<<<< HEAD
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <div className="text-xs text-blue-300 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{update.tag}</span>
        <time dateTime={update.date} className="text-gray-400">{new Date(update.date).toLocaleDateString()}</time>
      </div>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">{update.title}</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">{update.summary}</p>

      <div className="mt-10 text-sm text-gray-400">
        <p>More details coming soon. For inquiries, contact us.</p>
      </div>

      <div className="mt-10">
        <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">← Back to all updates</a>
      </div>
    </div>
=======
    <article className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <div className="mb-6 flex items-center gap-3 text-sm text-blue-300">
        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
        <time dateTime={item.date} className="text-gray-400">{new Date(item.date).toLocaleDateString()}</time>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{item.title}</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">{item.summary}</p>

      <div className="prose prose-invert mt-10">
        <p>
          This is a short detail page for "{item.title}". Add richer content here as needed
          (images, curriculum, links, or research highlights). For now, this page serves as a
          destination for the homepage and updates listing to drive discovery.
        </p>
        <p>
          Have questions? <a href="/contact">Contact us</a> or explore more on the{' '}
          <a href="/updates">updates page</a>.
        </p>
      </div>
    </article>
>>>>>>> origin/feat/updates-and-fixes
  )
}

