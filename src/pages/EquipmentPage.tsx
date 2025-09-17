import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function EquipmentPage() {
  return (
    <>
      <SEO 
        title="Equipment - Zion Tech Group" 
        description="Browse our available equipment and technology solutions." 
        keywords="equipment, technology, solutions, Zion Tech Group"
        url="https://ziontechgroup.com/equipment"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Equipment</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover our range of cutting-edge equipment and technology solutions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Browse our equipment catalog coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}