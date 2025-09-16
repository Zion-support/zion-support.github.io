export default function UpdateDetailPage({ params }: any) {
  const { slug } = params || { slug: 'unknown' }
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Update</h1>
        <p className="mt-3 text-gray-600">Coming soon: {slug}</p>
      </section>
    </main>
  )
}

