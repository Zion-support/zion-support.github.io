import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    name: 'Email',
    description: 'Get in touch with our team',
    value: 'contact@ziontechgroup.com',
    href: 'mailto:contact@ziontechgroup.com',
    icon: EnvelopeIcon
  },
  {
    name: 'Phone',
    description: 'Speak with an expert',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: PhoneIcon
  },
  {
    name: 'Office',
    description: 'Visit our headquarters',
    value: '123 Innovation Drive, Tech City, TC 12345',
    href: 'https://maps.google.com',
    icon: MapPinIcon
  },
  {
    name: 'Hours',
    description: 'Business hours',
    value: 'Mon-Fri 9AM-6PM PST',
    href: '#',
    icon: ClockIcon
  }
];

const offices = [
  {
    name: 'Headquarters',
    address: '123 Innovation Drive, Tech City, TC 12345',
    phone: '+1 (555) 123-4567',
    email: 'hq@ziontechgroup.com'
  },
  {
    name: 'Research Center',
    address: '456 Quantum Lane, Science Park, SP 67890',
    phone: '+1 (555) 234-5678',
    email: 'research@ziontechgroup.com'
  },
  {
    name: 'European Office',
    address: '789 AI Boulevard, London, UK SW1A 1AA',
    phone: '+44 20 7946 0958',
    email: 'europe@ziontechgroup.com'
  }
];

export default function ContactPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to transform your business with AI? Let's discuss how our solutions
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How to Reach Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose the most convenient way to get in touch with our team of experts.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {contactMethods.map((method) => (
              <div key={method.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <method.icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">{method.name}</h3>
                </div>
                <p className="text-gray-300 mb-2">{method.description}</p>
                <a
                  href={method.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a Message</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Start a Conversation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <form className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="john.doe@company.com"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Offices */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Offices</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Global Presence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We have offices around the world to serve our global client base.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {offices.map((office) => (
              <div key={office.name} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-4">{office.name}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">{office.address}</p>
                  <p className="text-sm text-blue-400">{office.phone}</p>
                  <p className="text-sm text-blue-400">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Don't wait to transform your business with AI. Contact us today to schedule
            a consultation with our experts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:+15551234567"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Call Now
            </a>
            <a href="mailto:contact@ziontechgroup.com" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Send Email <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}