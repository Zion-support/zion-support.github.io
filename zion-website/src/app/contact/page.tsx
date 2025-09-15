import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <h1 className="text-4xl font-bold tracking-tight text-white">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-300">We'd love to hear from you. Reach out for sales, support, or partnerships.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white"><EnvelopeIcon className="h-5 w-5 text-blue-400"/> Email</div>
            <p className="mt-2 text-sm text-gray-300">contact@ziontechgroup.com</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white"><PhoneIcon className="h-5 w-5 text-blue-400"/> Phone</div>
            <p className="mt-2 text-sm text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white"><MapPinIcon className="h-5 w-5 text-blue-400"/> Address</div>
            <p className="mt-2 text-sm text-gray-300">San Francisco, CA</p>
          </div>
        </div>

        <div className="mt-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md bg-white/10 border-white/20 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-white/10 border-white/20 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-white/10 border-white/20 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}