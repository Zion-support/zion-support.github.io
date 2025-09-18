import { notFound } from 'next/navigation'
import { siteUpdates } from '@/data/updates'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function UpdatePage({ params }: PageProps) {
  const { slug } = await params
  const update = siteUpdates.find(item => item.href === `/updates/${slug}`)
  
  if (!update) {
    notFound()
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">{update.tag} • {update.date}</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{update.title}</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">{update.summary}</p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>This is a placeholder for the full content of the update. The actual content would be loaded from a CMS or markdown files.</p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}