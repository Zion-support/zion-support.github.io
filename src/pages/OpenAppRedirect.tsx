import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function OpenAppRedirect() {
  return (
    <>
      <SEO 
        title="Open App - Zion Tech Group" 
        description="Open the Zion Tech Group application." 
        keywords="open app, application, Zion Tech Group"
        url="https://ziontechgroup.com/open-app"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Opening App</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Redirecting to the application...
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                App redirect functionality coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}