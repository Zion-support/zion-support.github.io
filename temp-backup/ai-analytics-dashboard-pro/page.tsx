'use client'
import React from 'react'
import Footer from '@/components/Footer';
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Page() {
  return (
    <div>

      <Head>
        <title>Ai Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai analytics dashboard pro services and solutions by Zion Tech Group." />
      </Head>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">

          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Analytics Dashboard Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8">

            Professional services by Zion Tech Group.

          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">

            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />

    </div>
  )
}

      </main>
    </div>
  )

