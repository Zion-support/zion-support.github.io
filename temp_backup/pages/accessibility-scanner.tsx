import React from 'react'
import Head from 'next/head'
const AccessibilityScannerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Accessibility Scanner - Zion Tech Group</title>
        <meta name="description" content="Accessibility scanning tools and services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Accessibility Scanner</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive accessibility scanning and testing tools for your applications.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AccessibilityScannerPage