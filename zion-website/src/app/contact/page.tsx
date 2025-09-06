import { 
  EnvelopeIcon,
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon},
  {name: 'Phone', description: 'Speak with our experts', value: '+1 (302) 464-0950', href: 'tel:+13024640950', icon: PhoneIcon},
  {name: 'Address', description: 'Visit our headquarters', value: '364 E Main St STE 1008, Middletown, DE 19709', href: '#', icon: MapPinIcon},
  {name: 'Business Hours', description: 'We\'re here to help', value: 'Monday - Friday: 9:00 AM - 6:00 PM EST', href: '#', icon: ClockIcon}
]

const faqs = [
  {question: 'What services do you offer?', answer: 'We provide comprehensive AI and technology solutions including autonomous systems, quantum computing, machine learning, cybersecurity, and digital transformation services.'},
  {question: 'How can I get started?', answer: 'Contact us through any of the methods above, and our team will schedule a consultation to understand your needs and provide a tailored solution.'},
  {question: 'Do you provide ongoing support?', answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.'},
  {question: 'What security measures do you have?', answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls to protect your data and systems.'}
]

export default function ContactPage() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to transform your business with cutting-edge AI and technology solutions? 
              Get in touch with our experts today.
            </p>
          </div>
        </div>
      </div>

      {/* Contact methods */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in Touch
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method) => (
                <div key={method.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <method.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{method.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{method.description}</p>
                  <a href={method.href} className="mt-2 text-base text-blue-400 hover:text-blue-300">
                    {method.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-16 space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-800 pb-8">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-base text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}