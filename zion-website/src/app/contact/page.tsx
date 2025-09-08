import React from 'react';'

export default function ContactPage() {{"name": 'Email';'
    }
    "description": 'Get in touch with our team';'
    "value": 'contact@ziontechgroup.com';'
    "href": '"mailto":contact@ziontechgroup.com';'
    "icon": EnvelopeIco
}
  {{"question": 'What industries do you serve?';'
    }
    "answer": 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our AI solutions are designed to be adaptable across different sectors.'}'
  {{"question": 'Do you provide ongoing support?';'
    }
    "answer": 'Yes, we provide comprehensive ongoing support including technical assistance, updates, training, and optimization services to ensure your AI solutions continue to deliver value.'}'
  {return (<div className="bg-black">;"
      {/* Hero section */}
      <div className=&quot;relative isolate px - 6 pt - 14 "lg":px - 8&quot>

        <div className=&quot;mx - auto max - w-2xl py - 32 "sm":py - 48 "lg":py - 56 & quot>

          <div className=&quot;text - center & quot>

            <h1 className=&quot;text - 4xl font - bold tracking - tight text - white "sm": text - 6xl & quot>

              Get in{' '}'
      {/* Contact methods *
}
      <div className="mx-auto max-w-7xl px-6 "sm":px-6 "lg":px-8">;"
        <div className="mx-auto max-w-2xl "lg":text-center">;"
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>;"
          <p className="mt-2 text-3xl font-bold tracking-tight text-white "sm":text-4xl">;"
            Multiple ways to reach us;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl "sm":mt-20 "lg":mt-24 "lg":max-w-none">;"
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 "lg":max-w-none "lg":grid-cols-3">;"
            {contactMethods.map((method) => (<div key={method.name} className="flex flex-col group">;"
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">;"
                  <method.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />;"
                  {method.name}

export default function ContactPage() {return (<div className="min-h-screen bg-white">;"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-24">;"
        <div className="text-center mb-16">;"
          <h1 className="text-4xl "md":text-5xl font-bold text-gray-900 mb-6">;"
            }
            Contact Us;
          </h1>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
            Ready to transform your business with cutting-edge technology? Get in touch with our team.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 "lg":grid-cols-2 gap-12">;"
          <div>;
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>;"
            <div className="space-y-6">;"
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>;"
                <p className="text-gray-600">info@ziontechgroup.com</p>;"
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>;"
                <p className="text-gray-600">+1 (555) 123-4567</p>;"
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>;"
                <p className="text-gray-600">;"
                  123 Technology Drive<br />;
                  Innovation City, IC 12345;
                </p>;
              </div>;
            </div>;
          </div>;
          <div className="bg-gray-50 rounded-lg p-8">;"
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>;"
            <form className="space-y-6">;"
              <div></div>;
      </div>;
      {/* Contact methods */}
      <div className="mx-auto max-w-7xl px-6 "sm":px-6 "lg":px-8">;"
        <div className="mx-auto max-w-2xl "lg":text-center">;"
          <h2 className="text-base font-semibold leading-7 text-blue-400">Contact Us</h2>;"
          <p className="mt-2 text-3xl font-bold tracking-tight text-white "sm":text-4xl">;"
            Multiple ways to reach us;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl "sm":mt-20 "lg":mt-24 "lg":max-w-none">;"
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 "lg":max-w-none "lg":grid-cols-3">;"
            {contactMethods.map((method) => (<div key={method.name} className="flex flex-col group">;"
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">;"
                  <method.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />;"
                  {method.name}
                </dt>>

                      {method.value} <span aria-hidden="true">→</span>;"
                    </Link>;
                  </p>;
                </dd>;
              </div>;

            ))}
          </dl>;
        </div>;
      </div>;
      {/* Contact form */}


      <div className="mx-auto mt-32 max-w-7xl px-6 "sm":mt-40 "lg":px-8">;"
        <div className="mx-auto max-w-2xl "lg":text-center">;"
          <h2 className="text-base font-semibold leading-7 text-blue-400">Frequently Asked</h2>;"
          <p className="mt-2 text-3xl font-bold tracking-tight text-white "sm":text-4xl">;"
            Common questions;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl "lg":max-w-none">;"
          <dl className="space-y-8">;"
            {faqs.map((faq, index) => (<div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">;"
                <dt className="text-lg font-semibold leading-7 text-white mb-4">;"
                  {faq.question}
                </dt>;
                <dd className=&quot;text - base leading - 7 text - gray - 300 & quot>

            Common questions;
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl "lg":max-w-none">;"
          <dl className="space-y-8">;"
            {faqs.map((faq, index) => (<div key={index} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">;"
                <dt className="text-lg font-semibold leading-7 text-white mb-4">;"
                  {faq.question}
                </dt>;
                <dd className="text-base leading-7 text-gray-300">;"

                  {faq.answer}
                </dd>;

          </dl>;
        </div>;
      </div>;
      {/* CTA section */}


