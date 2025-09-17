<<<<<<< HEAD
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

=======
import React from 'react'

export default function UpdatePage(props: any) {
  const slug = props?.params?.slug as string
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24 text-white">
        <h1 className="text-3xl font-bold">Update</h1>
        <p className="mt-4 text-gray-300">This is a placeholder page for update: {slug}</p>
      </div>
    </div>
  )
}
>>>>>>> cursor/create-and-deploy-new-content-d07c
