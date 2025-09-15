import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const contactMethods = [
  { name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon },
  { name: 'Phone', description: 'Speak with an expert', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: PhoneIcon },
  { name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
]

export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Ready to transform your business with AI? Let's talk.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multiple ways to reach us</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {contactMethods.map((method) => (
              <div key={method.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <method.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {method.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{method.description}</p>
                  <p className="mt-6">
                    <a href={method.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      {method.value} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Our team is ready to help you explore the possibilities of AI.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200 hover:scale-105">Explore Solutions</a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

