<<<<<<< HEAD
import { 
  EnvelopeIcon,
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
=======
import {_EnvelopeIcon, _PhoneIcon, _MapPinIcon, _ClockIcon, _ChatBubbleLeftRightIcon} from '@heroicons/react/24/outline'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _contactMethods = [
  {_name: 'Email', _description: 'Get in touch with our team', _value: 'contact@ziontechgroup.com', _href: 'mailto:contact@ziontechgroup.com', _icon: EnvelopeIcon},
  {_name: 'Phone', _description: 'Speak with an expert', _value: '+1 (555) 123-4567', _href: 'tel:+15551234567', _icon: PhoneIcon},
  {_name: 'Office', _description: 'Visit our headquarters', _value: '1234 Innovation Drive, _Silicon Valley, _CA 94025', _href: '#', _icon: MapPinIcon}]

const _officeLocations = [
  {_name: 'Silicon Valley', _address: '1234 Innovation Drive, _San Jose, _CA 94025', _phone: '+1 (555) 123-4567', _email: 'sv@ziontechgroup.com', _hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'},
  {_name: 'London', _address: '456 Tech Square, _London, _UK EC2A 4BX', _phone: '+44 20 1234 5678', _email: 'london@ziontechgroup.com', _hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'},
  {_name: 'Tokyo', _address: '789 Innovation Tower, _Tokyo, _Japan 100-0001', _phone: '+81 3 1234 5678', _email: 'tokyo@ziontechgroup.com', _hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST'}]

const _faqs = [
  {_question: 'What industries do you serve?', _answer: 'We serve a wide range of industries including healthcare, _finance, _manufacturing, _retail, _and technology. Our AI solutions are designed to be adaptable across different sectors.'},
  {_question: 'How long does implementation take?', _answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, _while complex enterprise solutions typically take 3-6 months.'},
  {_question: 'Do you provide ongoing support?', _answer: 'Yes, _we provide comprehensive ongoing support including technical assistance, _updates, _training, _and optimization services to ensure your AI solutions continue to deliver value.'},
  {_question: 'What security measures do you have?', _answer: 'We implement enterprise-grade security including end-to-end encryption, _SOC 2 compliance, _regular security audits, _and strict access controls to protect your data and systems.'}]

<<<<<<< HEAD
export default function ContactPage() {
  return (
    <div className=&quot;bg-black&quot;>
      {/* Hero section */}
      <div className=&quot;relative isolate px-6 pt-14 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl py-32 sm:py-48 lg:py-56&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;text-4xl font-bold tracking-tight text-white sm:text-6xl&quot;>
              Get in{' '}
              <span className=&quot;bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent&quot;>
=======
export default function ContactPage() {_return (_<div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in{_' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Touch
              </span>
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
              Ready to transform your business with AI? Let's discuss how our cutting-edge 
              technology can accelerate your growth and innovation.
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact methods */}
      <div className=&quot;mx-auto max-w-7xl px-6 sm:px-6 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Contact Us</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Multiple ways to reach us
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3&quot;>
            {contactMethods.map((method) => (
              <div key={method.name} className=&quot;flex flex-col group&quot;>
                <dt className=&quot;flex items-center gap-x-3 text-base font-semibold leading-7 text-white&quot;>
                  <method.icon className=&quot;h-5 w-5 flex-none text-blue-400&quot; aria-hidden=&quot;true&quot; />
                  {method.name}
                </dt>
                <dd className=&quot;mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300&quot;>
                  <p className=&quot;flex-auto&quot;>{method.description}</p>
                  <p className=&quot;mt-6&quot;>
                    <a 
                      href={method.href} 
                      className=&quot;text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200&quot;
                    >
                      {method.value} <span aria-hidden=&quot;true&quot;>→</span>
                    </Link>
=======
      {_/* Contact methods */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Multiple ways to reach us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {_contactMethods.map((method) => (
              <div key={method.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <method.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {_method.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{_method.description}</p>
                  <p className="mt-6">
                    <a 
                      href={_method.href} 
                      className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      {_method.value} <span aria-hidden="true">→</span>
                    </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact form */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Send us a message</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
      {_/* Contact form */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Let's start a conversation
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl lg:max-w-none&quot;>
          <form className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm&quot;>
            <div className=&quot;grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2&quot;>
              <div>
                <label htmlFor=&quot;first-name&quot; className=&quot;block text-sm font-semibold leading-6 text-white&quot;>
                  First name
                </label>
                <div className=&quot;mt-2.5&quot;>
                  <input
                    type=&quot;text&quot;
                    name=&quot;first-name&quot;
                    id=&quot;first-name&quot;
                    autoComplete=&quot;given-name&quot;
                    className=&quot;block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6&quot;
                  />
                </div>
              </div>
              <div>
                <label htmlFor=&quot;last-name&quot; className=&quot;block text-sm font-semibold leading-6 text-white&quot;>
                  Last name
                </label>
                <div className=&quot;mt-2.5&quot;>
                  <input
                    type=&quot;text&quot;
                    name=&quot;last-name&quot;
                    id=&quot;last-name&quot;
                    autoComplete=&quot;family-name&quot;
                    className=&quot;block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6&quot;
                  />
                </div>
              </div>
              <div className=&quot;sm:col-span-2&quot;>
                <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-semibold leading-6 text-white&quot;>
                  Email
                </label>
                <div className=&quot;mt-2.5&quot;>
                  <input
                    type=&quot;email&quot;
                    name=&quot;email&quot;
                    id=&quot;email&quot;
                    autoComplete=&quot;email&quot;
                    className=&quot;block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6&quot;
                  />
                </div>
              </div>
              <div className=&quot;sm:col-span-2&quot;>
                <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-semibold leading-6 text-white&quot;>
                  Company
                </label>
                <div className=&quot;mt-2.5&quot;>
                  <input
                    type=&quot;text&quot;
                    name=&quot;company&quot;
                    id=&quot;company&quot;
                    autoComplete=&quot;organization&quot;
                    className=&quot;block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6&quot;
                  />
                </div>
              </div>
              <div className=&quot;sm:col-span-2&quot;>
                <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-semibold leading-6 text-white&quot;>
                  Message
                </label>
                <div className=&quot;mt-2.5&quot;>
                  <textarea
<<<<<<< HEAD
                    name=&quot;message&quot;
                    id=&quot;message&quot;
                    rows={4}
                    className=&quot;block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6&quot;
                    defaultValue={''}
=======
                    name="message"
                    id="message"
                    rows={_4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    defaultValue={_''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
              </div>
            </div>
            <div className=&quot;mt-8 flex justify-end&quot;>
              <button
                type=&quot;submit&quot;
                className=&quot;rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105&quot;
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

<<<<<<< HEAD
      {/* Office locations */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Global Presence</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Visit our offices worldwide
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3&quot;>
            {officeLocations.map((office) => (
              <div key={office.name} className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-4&quot;>
                  <MapPinIcon className=&quot;h-8 w-8 text-blue-400&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white&quot;>{office.name}</h3>
                </div>
                <div className=&quot;space-y-3 text-gray-300&quot;>
                  <p className=&quot;flex items-start gap-2&quot;>
                    <MapPinIcon className=&quot;h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0&quot; />
                    {office.address}
                  </p>
                  <p className=&quot;flex items-center gap-2&quot;>
                    <PhoneIcon className=&quot;h-5 w-5 text-blue-400&quot; />
                    {office.phone}
                  </p>
                  <p className=&quot;flex items-center gap-2&quot;>
                    <EnvelopeIcon className=&quot;h-5 w-5 text-blue-400&quot; />
                    {office.email}
                  </p>
                  <p className=&quot;flex items-center gap-2&quot;>
                    <ClockIcon className=&quot;h-5 w-5 text-blue-400&quot; />
                    {office.hours}
=======
      {_/* Office locations */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Global Presence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Visit our offices worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {_officeLocations.map(_(office) => (
              <div key={office.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-4">
                  <MapPinIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{_office.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-2">
                    <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    {_office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-blue-400" />
                    {_office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                    {_office.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-blue-400" />
                    {_office.hours}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* FAQ */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl lg:text-center&quot;>
          <h2 className=&quot;text-base font-semibold leading-7 text-blue-400&quot;>Frequently Asked</h2>
          <p className=&quot;mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
            Common questions
          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl lg:max-w-none&quot;>
          <dl className=&quot;space-y-8&quot;>
            {faqs.map((faq, index) => (
              <div key={index} className=&quot;bg-white/5 p-8 rounded-2xl backdrop-blur-sm&quot;>
                <dt className=&quot;text-lg font-semibold leading-7 text-white mb-4&quot;>
                  {faq.question}
                </dt>
                <dd className=&quot;text-base leading-7 text-gray-300&quot;>
                  {faq.answer}
=======
      {_/* FAQ */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Frequently Asked</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Common questions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="space-y-8">
            {_faqs.map(_(faq, _index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <dt className="text-lg font-semibold leading-7 text-white mb-4">
                  {_faq.question}
                </dt>
                <dd className="text-base leading-7 text-gray-300">
                  {_faq.answer}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA section */}
      <div className=&quot;mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8&quot;>
        <div className=&quot;mx-auto max-w-2xl text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
=======
      {_/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Ready to get started?
          </h2>
          <p className=&quot;mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300&quot;>
            Our team is ready to help you explore the possibilities of AI and transform your business.
          </p>
          <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
            <a
              href=&quot;/solutions&quot;
              className=&quot;rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105&quot;
            >
              Explore Solutions
            </Link>
            <a href=&quot;/about&quot; className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200&quot;>
              Learn More <span aria-hidden=&quot;true&quot;>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}