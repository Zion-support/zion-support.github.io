<<<<<<< HEAD:temp-broken-files/Rewards.tsx
<<<<<<< HEAD:temp_broken_pages_all/Rewards.tsx
import { Gift } from "lucide-react";
return (
    <div className='container max-w-xl py-10'>
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>
      <ul className='space-y-4'>
        {REWARDS.map(r => (
          <li
key={r.id}
            className='flex justify-between items-center border rounded-md p-4'
          >            <div>
              <p className='font-medium'>{r.title}</p>
              <p className='text-sm text-muted-foreground'>{r.cost} pts</p>
            </div>
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />
          </li>
        ))}
      </ul>
import React from 'react';

export default function Rewards() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Rewards</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Rewards.tsx
    </div>
  );
}
=======
import React from 'react';
import { SEO } from "@/components/SEO";

export default function Rewards() {
  return (
    <>
      <SEO 
        title="Rewards - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Rewards</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/Rewards.tsx
