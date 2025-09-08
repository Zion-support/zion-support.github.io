import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
export default function APIDocsPage() {
  
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for all our services
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}