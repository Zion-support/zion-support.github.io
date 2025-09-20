import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SEO
        title="Zion AI - Advanced AI Solutions and Technology Services"
        description="Discover cutting-edge AI solutions, machine learning services, and innovative technology solutions to transform your business."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <GradientHeading
              level="h1"
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Welcome to Zion AI
            </GradientHeading>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge AI solutions, machine learning services, and innovative technology solutions to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Explore Services
                </Button>
              </Link>
              
              <Link href="/marketplace">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                  Visit Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}