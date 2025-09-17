export default function UpdateDetailPage({ params }: any) {
  const { slug } = params
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <a href="/updates" className="text-blue-400 hover:text-blue-300 text-sm">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold">{slug.replace(/-/g, ' ')}</h1>
        <p className="mt-4 text-gray-300">This update page is under construction.</p>
      </div>
    </div>
  )
}

