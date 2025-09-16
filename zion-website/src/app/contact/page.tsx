<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
=======
=======
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/new-updates-ads
import { 
	EnvelopeIcon, 
	PhoneIcon, 
	MapPinIcon,
	ClockIcon,
	ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
<<<<<<< HEAD
<<<<<<< HEAD
  {
    name: 'Email',
    description: 'Get in touch with our team',
    value: 'contact@ziontechgroup.com',
    href: 'mailto:contact@ziontechgroup.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Phone',
    description: 'Speak with an expert',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: PhoneIcon,
  },
  {
    name: 'Live Chat',
    description: 'Chat with our support team',
    value: 'Start a chat',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
=======
  { name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon },
  { name: 'Phone', description: 'Speak with an expert', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: PhoneIcon },
  { name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
>>>>>>> origin/feat/case-studies-content
=======
import React from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
=======
import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
>>>>>>> origin/feat/news-and-fixes
=======
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
>>>>>>> origin/feat/updates-and-fixes

const contactMethods = [
  { name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon },
  { name: 'Phone', description: 'Speak with an expert', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: PhoneIcon },
<<<<<<< HEAD
<<<<<<< HEAD
  { name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
>>>>>>> origin/feat/content-promo
=======
  { name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
>>>>>>> origin/feat/updates-and-fixes
]

const officeLocations = [
  { name: 'Silicon Valley', address: '1234 Innovation Drive, San Jose, CA 94025', phone: '+1 (555) 123-4567', email: 'sv@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST' },
  { name: 'London', address: '456 Tech Square, London, UK EC2A 4BX', phone: '+44 20 1234 5678', email: 'london@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT' },
  { name: 'Tokyo', address: '789 Innovation Tower, Tokyo, Japan 100-0001', phone: '+81 3 1234 5678', email: 'tokyo@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST' },
]

const faqs = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex enterprise solutions typically take 3-6 months.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.',
  },
  {
    question: 'What security measures do you have?',
    answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls to protect your data and systems.',
  },
<<<<<<< HEAD
=======
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const contactMethods = [
  { name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon },
  { name: 'Phone', description: 'Speak with an expert', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: PhoneIcon },
  { name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
>>>>>>> origin/feature/updates-2025-09
=======
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
  { question: 'What industries do you serve?', answer: 'We serve healthcare, finance, manufacturing, retail, and technology with adaptable AI solutions.' },
  { question: 'How long does implementation take?', answer: 'Simple integrations: 2-4 weeks; enterprise solutions: 3-6 months.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes, we provide comprehensive support including updates, training, and optimization.' },
  { question: 'What security measures do you have?', answer: 'End-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls.' },
>>>>>>> origin/feat/case-studies-content
=======
  { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.' },
  { question: 'How long does implementation take?', answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex enterprise solutions typically take 3-6 months.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.' },
  { question: 'What security measures do you have?', answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls to protect your data and systems.' },
>>>>>>> origin/feat/content-promo
=======
  { name: 'Office', description: 'Visit our headquarters', value: '500 Innovation Way, San Francisco, CA 94107', href: '#', icon: MapPinIcon },
  { name: 'Hours', description: 'When we are available', value: 'Mon–Fri, 9am–6pm PT', href: '#', icon: ClockIcon },
]

const officeLocations = [
  { name: 'San Francisco', address: '500 Innovation Way, San Francisco, CA 94107', phone: '+1 (555) 123-4567', email: 'sf@ziontechgroup.com', hours: 'Mon–Fri: 9:00 AM – 6:00 PM PT' },
  { name: 'London', address: '456 Tech Square, London, UK EC2A 4BX', phone: '+44 20 1234 5678', email: 'london@ziontechgroup.com', hours: 'Mon–Fri: 9:00 AM – 6:00 PM GMT' },
  { name: 'Tokyo', address: '789 Innovation Tower, Tokyo, Japan 100-0001', phone: '+81 3 1234 5678', email: 'tokyo@ziontechgroup.com', hours: 'Mon–Fri: 9:00 AM – 6:00 PM JST' },
]

const faqs = [
  { question: 'What industries do you serve?', answer: 'We serve healthcare, finance, manufacturing, retail, and technology, with adaptable AI solutions.' },
  { question: 'How long does implementation take?', answer: 'Simple integrations: 2–4 weeks. Complex enterprise solutions: typically 3–6 months.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes. We offer technical assistance, updates, training, and optimization to keep delivering value.' },
  { question: 'What security measures do you have?', answer: 'Enterprise-grade security: end-to-end encryption, SOC 2, regular audits, strict access controls.' },
>>>>>>> origin/feat/news-and-fixes
]
=======
import React from 'react'
>>>>>>> origin/feat/research-article-promo
=======
  { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.' },
  { question: 'How long does implementation take?', answer: 'Implementation timelines vary. Simple integrations can take 2-4 weeks, while complex enterprise solutions typically take 3-6 months.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services.' },
  { question: 'What security measures do you have?', answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls.' },
]
>>>>>>> origin/feat/updates-and-fixes

export default function ContactPage() {
  return (
    <div className="bg-black">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Hero section */}
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
>>>>>>> origin/feat/news-and-fixes
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-40">
          <div className="text-center">
<<<<<<< HEAD
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              Get in <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Ready to transform your business with AI? Let's talk.</p>
=======
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
=======
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
>>>>>>> origin/feat/content-promo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to transform your business with AI? Let's discuss how our cutting-edge technology can accelerate your growth and innovation.
=======
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Reach out to explore partnerships, solutions, or research collaborations.
>>>>>>> origin/feat/research-article-promo
=======
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to transform your business with AI? Let's discuss how our cutting-edge technology can accelerate your growth and innovation.
>>>>>>> origin/feat/updates-and-fixes
            </p>
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
              Get in <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Ready to transform your business with AI? Let\'s discuss how our technology can accelerate your growth and innovation.</p>
>>>>>>> origin/feat/case-studies-content
=======
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">We'd love to hear from you. Reach out and let's start a conversation.</p>
>>>>>>> origin/feat/news-and-fixes
          </div>
        </div>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multiple ways to reach us</p>
=======
      {/* Contact methods */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
<<<<<<< HEAD
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Multiple ways to reach us
          </p>
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multiple ways to reach us</p>
>>>>>>> origin/feat/case-studies-content
=======
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multiple ways to reach us</p>
>>>>>>> origin/feat/content-promo
=======
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Get in Touch</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We're here to help</p>
>>>>>>> origin/feat/news-and-fixes
=======
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Multiple ways to reach us</p>
>>>>>>> origin/feat/updates-and-fixes
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {contactMethods.map((method) => (
              <div key={method.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <method.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {method.name}
                </dt>
<<<<<<< HEAD
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{method.description}</p>
<<<<<<< HEAD
                  <p className="mt-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <a href={method.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
=======
                    <a 
                      href={method.href} 
                      className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
                    <a href={method.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
>>>>>>> origin/feat/content-promo
=======
                    <a href={method.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">
>>>>>>> origin/feat/updates-and-fixes
                      {method.value} <span aria-hidden="true">→</span>
                    </a>
                  </p>
=======
                  <p className="mt-6"><a href={method.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200">{method.value} <span aria-hidden="true">→</span></a></p>
>>>>>>> origin/feat/case-studies-content
=======
                <dd className="mt-1 text-sm text-gray-400">{method.description}</dd>
                <dd className="mt-3 text-base leading-7 text-gray-300">
                  <a href={method.href} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    {method.value}
                  </a>
>>>>>>> origin/feat/news-and-fixes
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Our team is ready to help you explore the possibilities of AI.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200 hover:scale-105">Explore Solutions</a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
=======
      {/* Contact form */}
<<<<<<< HEAD
=======
>>>>>>> origin/feat/case-studies-content
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let\'s start a conversation</p>
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's start a conversation</p>
>>>>>>> origin/feat/content-promo
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's start a conversation</p>
>>>>>>> origin/feat/news-and-fixes
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's start a conversation</p>
>>>>>>> origin/feat/updates-and-fixes
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <form className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">First name</label>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="mt-2.5"><input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
                <div className="mt-2.5"><input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                <div className="mt-2.5"><input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">Company</label>
                <div className="mt-2.5"><input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" /></div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5"><textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" defaultValue={''} /></div>
=======
=======
>>>>>>> origin/feat/news-and-fixes
=======
>>>>>>> origin/feat/updates-and-fixes
                <div className="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
                <div className="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-fixes
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">Company</label>
                <div className="mt-2.5">
                  <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
<<<<<<< HEAD
                <label htmlFor="message" className="block text sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5">
=======
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5">
>>>>>>> origin/feat/news-and-fixes
=======
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5">
>>>>>>> origin/feat/updates-and-fixes
                  <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" defaultValue={''} />
                </div>
>>>>>>> origin/feat/content-promo
              </div>
            </div>
            <div className="mt-8 flex justify-end">
<<<<<<< HEAD
              <button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Send message</button>
=======
              <button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">
                Send message
              </button>
>>>>>>> origin/feat/updates-and-fixes
            </div>
          </form>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feat/updates-and-fixes
      {/* Office locations */}
=======
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
>>>>>>> origin/feat/news-and-fixes
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Global Presence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Visit our offices worldwide</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {officeLocations.map((office) => (
              <div key={office.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-4">
                  <MapPinIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{office.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <p className="flex items-start gap-2">
                    <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-blue-400" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                    {office.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-blue-400" />
                    {office.hours}
                  </p>
=======
=======
>>>>>>> origin/feat/content-promo
                  <p className="flex items-start gap-2"><MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />{office.address}</p>
                  <p className="flex items-center gap-2"><PhoneIcon className="h-5 w-5 text-blue-400" />{office.phone}</p>
                  <p className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5 text-blue-400" />{office.email}</p>
                  <p className="flex items-center gap-2"><ClockIcon className="h-5 w-5 text-blue-400" />{office.hours}</p>
<<<<<<< HEAD
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                  <p>{office.hours}</p>
>>>>>>> origin/feat/news-and-fixes
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* FAQ */}
=======
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
      {/* FAQ */}
>>>>>>> origin/feat/updates-and-fixes
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Frequently Asked</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Common questions</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <dt className="text-lg font-semibold leading-7 text-white mb-4">
                  {faq.question}
                </dt>
                <dd className="text-base leading-7 text-gray-300">
                  {faq.answer}
                </dd>
=======
                <dt className="text-lg font-semibold leading-7 text-white mb-4">{faq.question}</dt>
                <dd className="text-base leading-7 text-gray-300">{faq.answer}</dd>
>>>>>>> origin/feat/case-studies-content
=======
                <dt className="text-lg font-semibold leading-7 text-white mb-4">{faq.question}</dt>
                <dd className="text-base leading-7 text-gray-300">{faq.answer}</dd>
>>>>>>> origin/feat/content-promo
=======
                <dt className="text-lg font-semibold leading-7 text-white mb-4">{faq.question}</dt>
                <dd className="text-base leading-7 text-gray-300">{faq.answer}</dd>
>>>>>>> origin/feat/updates-and-fixes
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
=======
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
>>>>>>> origin/feat/updates-and-fixes
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Our team is ready to help you explore the possibilities of AI and transform your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">
              Explore Solutions
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              Learn More <span aria-hidden="true">→</span>
            </a>
<<<<<<< HEAD
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Our team is ready to help you explore the possibilities of AI and transform your business.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Explore Solutions</a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
>>>>>>> origin/feat/case-studies-content
=======
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Our team is ready to help you explore the possibilities of AI and transform your business.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Explore Solutions</a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
>>>>>>> origin/feat/content-promo
=======
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Our team is ready to help you explore the possibilities of AI and transform your business.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Explore Solutions</a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
>>>>>>> origin/feat/news-and-fixes
=======
>>>>>>> origin/feat/updates-and-fixes
          </div>
=======
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <a href="mailto:hello@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">hello@ziontechgroup.com</a>
>>>>>>> origin/feat/research-article-promo
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD


import React from 'react';


>>>>>>> origin/feature/updates-content

const contactMethods = [
	{ name: 'Email', description: 'Get in touch with our team', value: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com', icon: EnvelopeIcon },
	{ name: 'Phone', description: 'Speak with an expert', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: PhoneIcon },
	{ name: 'Office', description: 'Visit our headquarters', value: '1234 Innovation Drive, Silicon Valley, CA 94025', href: '#', icon: MapPinIcon },
]

const officeLocations = [
	{ name: 'Silicon Valley', address: '1234 Innovation Drive, San Jose, CA 94025', phone: '+1 (555) 123-4567', email: 'sv@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST' },
	{ name: 'London', address: '456 Tech Square, London, UK EC2A 4BX', phone: '+44 20 1234 5678', email: 'london@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT' },
	{ name: 'Tokyo', address: '789 Innovation Tower, Tokyo, Japan 100-0001', phone: '+81 3 1234 5678', email: 'tokyo@ziontechgroup.com', hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST' },
]

const faqs = [
	{ question: 'What industries do you serve?', answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.' },
	{ question: 'How long does implementation take?', answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex enterprise solutions typically take 3-6 months.' },
	{ question: 'Do you provide ongoing support?', answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.' },
	{ question: 'What security measures do you have?', answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls to protect your data and systems.' },
]

export default function ContactPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Get in{' '}
							<span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">Ready to transform your business with AI? Let's discuss how our cutting-edge technology can accelerate your growth and innovation.</p>
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
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's start a conversation</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
					<form className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">First name</label>
								<div className="mt-2.5">
									<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div>
								<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
								<div className="mt-2.5">
									<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
								<div className="mt-2.5">
									<input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">Company</label>
								<div className="mt-2.5">
									<input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
								<div className="mt-2.5">
									<textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" defaultValue={''} />
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Send message</button>
						</div>
					</form>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Global Presence</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Visit our offices worldwide</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
						{officeLocations.map((office) => (
							<div key={office.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<MapPinIcon className="h-8 w-8 text-blue-400" />
									<h3 className="text-xl font-semibold text:white text-white">{office.name}</h3>
								</div>
								<div className="space-y-3 text-gray-300">
									<p className="flex items-start gap-2">
										<MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
										{office.address}
									</p>
									<p className="flex items-center gap-2">
										<PhoneIcon className="h-5 w-5 text-blue-400" />
										{office.phone}
									</p>
									<p className="flex items-center gap-2">
										<EnvelopeIcon className="h-5 w-5 text-blue-400" />
										{office.email}
									</p>
									<p className="flex items-center gap-2">
										<ClockIcon className="h-5 w-5 text-blue-400" />
										{office.hours}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Frequently Asked</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Common questions</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
					<dl className="space-y-8">
						{faqs.map((faq, index) => (
							<div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
								<dt className="text-lg font-semibold leading-7 text-white mb-4">{faq.question}</dt>
								<dd className="text-base leading-7 text-gray-300">{faq.answer}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Our team is ready to help you explore the possibilities of AI and transform your business.</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a href="/solutions" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Explore Solutions</a>
						<a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
					</div>
				</div>
			</div>
		</div>
	)
}
=======

>>>>>>> origin/feature/updates-2025-09
=======
>>>>>>> origin/feature/content-updates-and-merge-fixes
=======
>>>>>>> origin/feat/case-studies-content
=======
>>>>>>> origin/feat/content-promo
=======
import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const contactMethods = [
	{ name: 'Email', value: 'contact@ziontechgroup.com', icon: EnvelopeIcon },
	{ name: 'Phone', value: '+1 (555) 123-4567', icon: PhoneIcon },
	{ name: 'Address', value: '123 Innovation Way, San Francisco, CA', icon: MapPinIcon },
	{ name: 'Hours', value: 'Mon–Fri, 9:00am–6:00pm PT', icon: ClockIcon },
]

export default function ContactPage() {
	return (
		<div className="bg-black">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Get in touch</h1>
						<p className="mt-6 text-lg leading-8 text-gray-300">We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div className="space-y-6 lg:col-span-1">
						{contactMethods.map((m) => (
							<div key={m.name} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
								<m.icon className="h-6 w-6 text-blue-400" />
								<div>
									<p className="text-sm text-gray-400">{m.name}</p>
									<p className="text-base text-gray-200">{m.value}</p>
								</div>
							</div>
						))}
					</div>
					<div className="lg:col-span-2">
						<form className="bg-white/5 rounded-2xl p-8 grid grid-cols-1 gap-6">
							<div>
								<label className="block text-sm text-gray-300">Name</label>
								<input type="text" className="mt-2 w-full rounded-md bg-black/40 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
							</div>
							<div>
								<label className="block text-sm text-gray-300">Email</label>
								<input type="email" className="mt-2 w-full rounded-md bg-black/40 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
							</div>
							<div>
								<label className="block text-sm text-gray-300">Message</label>
								<textarea rows={5} className="mt-2 w-full rounded-md bg-black/40 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
							</div>
							<button className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
								<ChatBubbleLeftRightIcon className="h-5 w-5" />
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
>>>>>>> origin/feat/new-content-home-20250915
=======
	{
		name: 'Email',
		description: 'Get in touch with our team',
		value: 'contact@ziontechgroup.com',
		href: 'mailto:contact@ziontechgroup.com',
		icon: EnvelopeIcon,
	},
	{
		name: 'Phone',
		description: 'Speak with an expert',
		value: '+1 (555) 123-4567',
		href: 'tel:+15551234567',
		icon: PhoneIcon,
	},
	{
		name: 'Office',
		description: 'Visit our headquarters',
		value: '1234 Innovation Drive, Silicon Valley, CA 94025',
		href: '#',
		icon: MapPinIcon,
	},
]

const officeLocations = [
	{
		name: 'Silicon Valley',
		address: '1234 Innovation Drive, San Jose, CA 94025',
		phone: '+1 (555) 123-4567',
		email: 'sv@ziontechgroup.com',
		hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
	},
	{
		name: 'London',
		address: '456 Tech Square, London, UK EC2A 4BX',
		phone: '+44 20 1234 5678',
		email: 'london@ziontechgroup.com',
		hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
	},
	{
		name: 'Tokyo',
		address: '789 Innovation Tower, Tokyo, Japan 100-0001',
		phone: '+81 3 1234 5678',
		email: 'tokyo@ziontechgroup.com',
		hours: 'Mon-Fri: 9:00 AM - 6:00 PM JST',
	},
]

const faqs = [
	{
		question: 'What industries do you serve?',
		answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.',
	},
	{
		question: 'How long does implementation take?',
		answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex enterprise solutions typically take 3-6 months.',
	},
	{
		question: 'Do you provide ongoing support?',
		answer: 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.',
	},
	{
		question: 'What security measures do you have?',
		answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls to protect your data and systems.',
	},
]

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
							Ready to transform your business with AI? Let's discuss how our cutting-edge 
							technology can accelerate your growth and innovation.
						</p>
					</div>
				</div>
			</div>

			{/* Contact methods */}
			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Multiple ways to reach us
					</p>
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
										<a 
											href={method.href} 
											className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
										>
											{method.value} <span aria-hidden="true">→</span>
										</a>
									</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			{/* Contact form */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Let's start a conversation
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
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
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
							>
								Send message
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Office locations */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Global Presence</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Visit our offices worldwide
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
						{officeLocations.map((office) => (
							<div key={office.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<MapPinIcon className="h-8 w-8 text-blue-400" />
									<h3 className="text-xl font-semibold text-white">{office.name}</h3>
								</div>
								<div className="space-y-3 text-gray-300">
									<p className="flex items-start gap-2">
										<MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
										{office.address}
									</p>
									<p className="flex items-center gap-2">
										<PhoneIcon className="h-5 w-5 text-blue-400" />
										{office.phone}
									</p>
									<p className="flex items-center gap-2">
										<EnvelopeIcon className="h-5 w-5 text-blue-400" />
										{office.email}
									</p>
									<p className="flex items-center gap-2">
										<ClockIcon className="h-5 w-5 text-blue-400" />
										{office.hours}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* FAQ */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-blue-400">Frequently Asked</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Common questions
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
					<dl className="space-y-8">
						{faqs.map((faq, index) => (
							<div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
								<dt className="text-lg font-semibold leading-7 text-white mb-4">
									{faq.question}
								</dt>
								<dd className="text-base leading-7 text-gray-300">
									{faq.answer}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			{/* CTA section */}
			<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Ready to get started?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
						Our team is ready to help you explore the possibilities of AI and transform your business.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/solutions"
							className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
						>
							Explore Solutions
						</a>
						<a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
							Learn More <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
>>>>>>> origin/feat/new-updates-ads
=======
>>>>>>> origin/feat/news-and-fixes
=======

>>>>>>> origin/feat/research-article-promo
=======
>>>>>>> origin/feat/updates-and-fixes
=======
export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
          Ready to transform your business with AI? Reach us at contact@ziontechgroup.com or +1 (555) 123-4567.
        </p>
      </div>
    </div>
  )
}
>>>>>>> origin/feat/updates-front
