import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team to discuss your project needs
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-gray-600">Phone: +1 302 464 0950</p>
              <p className="text-gray-600">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-600">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
