
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
