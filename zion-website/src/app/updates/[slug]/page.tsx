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
      </div>
    )
  }

  return (
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
  )
}

