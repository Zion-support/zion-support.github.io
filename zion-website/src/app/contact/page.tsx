import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <h1 className="text-4xl font-bold tracking-tight text-white">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-300">We'd love to hear from you. Reach out for sales, support, or partnerships.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">Email</div>
            <p className="mt-2 text-sm text-gray-300">contact@ziontechgroup.com</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">Phone</div>
            <p className="mt-2 text-sm text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">Address</div>
            <p className="mt-2 text-sm text-gray-300">1234 Innovation Drive, Silicon Valley, CA</p>
          </div>
        </div>
      </div>
    </div>
  )
}
